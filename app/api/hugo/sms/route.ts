import { NextRequest } from "next/server";
import {
  finalizeLeadScore,
  findOrCreateLead,
  getMessages,
  getRealtorByTwilioNumber,
  saveMessage,
  updateLeadQualification,
} from "@/lib/hugo/db";
import { sendSMS, validateTwilioSignature } from "@/lib/hugo/sms";
import { runQualificationTurn } from "@/lib/hugo/qualify";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const params = Object.fromEntries(new URLSearchParams(rawBody).entries());

  // Validate Twilio signature in production
  if (process.env.NODE_ENV === "production") {
    const signature = request.headers.get("x-twilio-signature") ?? "";
    const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/hugo/sms`;
    const valid = validateTwilioSignature(signature, url, params);
    if (!valid) {
      return new Response("Forbidden", { status: 403 });
    }
  }

  const from = params["From"];
  const to = params["To"];
  const body = (params["Body"] ?? "").trim();

  if (!from || !to || !body) {
    return new Response("Bad Request", { status: 400 });
  }

  try {
    const realtor = await getRealtorByTwilioNumber(to);
    if (!realtor) {
      console.error(`No realtor found for Twilio number: ${to}`);
      return new Response("OK", { status: 200 });
    }

    const lead = await findOrCreateLead(realtor.id, from);

    // Don't re-engage qualified leads through this flow
    if (lead.status === "qualified" || lead.status === "booked" || lead.status === "closed") {
      await saveMessage(lead.id, "user", body);
      await sendSMS(
        from,
        to,
        `Thanks for your message. ${realtor.name} will follow up with you shortly.`
      );
      await saveMessage(
        lead.id,
        "assistant",
        `Thanks for your message. ${realtor.name} will follow up with you shortly.`
      );
      return new Response("OK", { status: 200 });
    }

    await saveMessage(lead.id, "user", body);
    const messages = await getMessages(lead.id);

    const { reply, qualificationUpdate, finalScore } = await runQualificationTurn(
      { name: realtor.name },
      lead,
      messages
    );

    if (qualificationUpdate && Object.keys(qualificationUpdate).length > 0) {
      await updateLeadQualification(lead.id, qualificationUpdate);
    }

    if (finalScore) {
      await finalizeLeadScore(lead.id, finalScore);
    }

    if (reply) {
      await sendSMS(from, to, reply);
      await saveMessage(lead.id, "assistant", reply);
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Hugo SMS handler error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
