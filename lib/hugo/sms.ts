import twilio from "twilio";

function getClient() {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!sid || !token) throw new Error("Missing TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN");
  return twilio(sid, token);
}

export async function sendSMS(to: string, from: string, body: string): Promise<void> {
  const client = getClient();
  await client.messages.create({ to, from, body });
}

export function validateTwilioSignature(
  signature: string,
  url: string,
  params: Record<string, string>
): boolean {
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!token) throw new Error("Missing TWILIO_AUTH_TOKEN");
  return twilio.validateRequest(token, signature, url, params);
}
