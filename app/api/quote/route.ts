import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  const { answers } = await req.json();

  const summary = Object.entries(answers as Record<string, string>)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: `You are a senior consultant at Hollinger AI Power Solutions, an AI workflow integration firm based in Vancouver.
You write direct, confident, no-jargon assessments for operations leaders in manufacturing, fabrication, logistics, and industrial businesses.
Never use buzzwords. Never say "leverage", "synergy", "transformative", or "cutting-edge".
Write in plain, professional English. Be specific. Be brief.`,
    messages: [
      {
        role: "user",
        content: `Based on this client diagnostic, write a concise assessment with four clearly labelled sections:

RECOMMENDED APPROACH
2-3 sentences describing exactly what you would build for this client.

ESTIMATED TIMELINE
Specific timeframe (e.g. "3 to 4 weeks from kickoff to production").

INVESTMENT RANGE
A realistic dollar range based on scope and complexity.

WHAT YOU CAN EXPECT
3 bullet points — specific, measurable outcomes this client should expect.

Client answers:
${summary}

Keep the entire response under 300 words. No fluff. No caveats. Write as if you are speaking directly to the client.`,
      },
    ],
  });

  const text =
    message.content[0].type === "text" ? message.content[0].text : "";

  return NextResponse.json({ quote: text });
}
