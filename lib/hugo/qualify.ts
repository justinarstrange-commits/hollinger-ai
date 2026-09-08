import Anthropic from "@anthropic-ai/sdk";
import type { Lead, Message, QualificationResult, QualificationUpdate } from "./types";

const anthropic = new Anthropic();

const TOOLS: Anthropic.Tool[] = [
  {
    name: "update_qualification",
    description:
      "Call this whenever you extract qualification data from the lead's messages. Partial updates are fine — only include fields you learned.",
    input_schema: {
      type: "object" as const,
      properties: {
        intent: {
          type: "string",
          enum: ["buy", "sell", "both"],
          description: "Whether they want to buy, sell, or both",
        },
        area: {
          type: "string",
          description: "Neighbourhood, city, or area they're interested in",
        },
        budget_raw: {
          type: "string",
          description: "Budget or price range in their own words, e.g. 'around 900k' or '1.2 to 1.5 million'",
        },
        timeline: {
          type: "string",
          description: "Their timeline in their own words, e.g. 'need to move in 3 months' or 'just exploring'",
        },
        motivation: {
          type: "string",
          description: "Why they're buying/selling — job change, growing family, downsizing, investment, etc.",
        },
        pre_approval: {
          type: "string",
          enum: ["yes", "no", "in_progress", "not_applicable"],
          description: "Pre-approval status for buyers. not_applicable for sellers.",
        },
      },
      required: [],
    },
  },
  {
    name: "finalize_qualification",
    description:
      "Call this when you have enough information to score the lead. You need at minimum: intent, area, budget, and timeline.",
    input_schema: {
      type: "object" as const,
      properties: {
        score: {
          type: "number",
          description:
            "Lead quality score 1-10. High scores = clear intent + defined budget + near-term timeline + pre-approved (buyers). Low scores = vague, far out, or unresponsive.",
        },
        score_reason: {
          type: "string",
          description: "One sentence explaining the score.",
        },
        summary: {
          type: "string",
          description:
            "2-3 sentence summary for the realtor covering what the lead wants, their timeline, and any flags.",
        },
      },
      required: ["score", "score_reason", "summary"],
    },
  },
];

function buildSystemPrompt(realtor: { name: string }, lead: Lead): string {
  const collected = [];
  if (lead.intent) collected.push(`intent: ${lead.intent}`);
  if (lead.area) collected.push(`area: ${lead.area}`);
  if (lead.budget_raw) collected.push(`budget: ${lead.budget_raw}`);
  if (lead.timeline) collected.push(`timeline: ${lead.timeline}`);
  if (lead.motivation) collected.push(`motivation: ${lead.motivation}`);
  if (lead.pre_approval) collected.push(`pre-approval: ${lead.pre_approval}`);

  return `You are Hugo, a smart and friendly AI assistant representing ${realtor.name}, a real estate agent.

Your job is to qualify this lead over SMS. You need to understand:
1. Intent: are they buying, selling, or both?
2. Area: what neighbourhood or city?
3. Budget: price range
4. Timeline: how soon?
5. Motivation: why are they moving?
6. Pre-approval: if buying, are they pre-approved?

RULES:
- Keep every message SHORT. SMS. 1-3 sentences max.
- Be warm, natural, conversational. Not robotic.
- Ask one or two things at a time — never a list of questions.
- When the lead shares information, call update_qualification immediately.
- Once you have intent, area, budget, and timeline, call finalize_qualification and score them.
- Do not say "em dash" or use em dashes.
- If they ask to speak with the agent, say the agent will follow up shortly and still try to collect the basics.
${lead.name ? `- The lead's name is ${lead.name}.` : "- Ask for their name early."}

${collected.length > 0 ? `Already collected:\n${collected.join("\n")}` : "Nothing collected yet. Start the conversation."}`;
}

export interface QualifyResult {
  reply: string;
  qualificationUpdate?: QualificationUpdate;
  finalScore?: QualificationResult;
}

export async function runQualificationTurn(
  realtor: { name: string },
  lead: Lead,
  messages: Message[]
): Promise<QualifyResult> {
  const systemPrompt = buildSystemPrompt(realtor, lead);

  const anthropicMessages: Anthropic.MessageParam[] = messages.map((m) => ({
    role: m.role as "user" | "assistant",
    content: m.content,
  }));

  let qualificationUpdate: QualificationUpdate | undefined;
  let finalScore: QualificationResult | undefined;
  let reply = "";

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    system: systemPrompt,
    tools: TOOLS,
    messages: anthropicMessages,
  });

  // Extract reply text and handle tool calls
  for (const block of response.content) {
    if (block.type === "text") {
      reply += block.text;
    } else if (block.type === "tool_use") {
      if (block.name === "update_qualification") {
        qualificationUpdate = block.input as QualificationUpdate;
      } else if (block.name === "finalize_qualification") {
        finalScore = block.input as QualificationResult;
      }
    }
  }

  // If Claude only used tools and returned no text, ask it to continue
  if (!reply.trim() && response.stop_reason === "tool_use") {
    const toolResults: Anthropic.ToolResultBlockParam[] = response.content
      .filter((b): b is Anthropic.ToolUseBlock => b.type === "tool_use")
      .map((b) => ({
        type: "tool_result" as const,
        tool_use_id: b.id,
        content: "ok",
      }));

    const followUp = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 256,
      system: systemPrompt,
      tools: TOOLS,
      messages: [
        ...anthropicMessages,
        { role: "assistant", content: response.content },
        { role: "user", content: toolResults },
      ],
    });

    for (const block of followUp.content) {
      if (block.type === "text") reply += block.text;
    }
  }

  return { reply: reply.trim(), qualificationUpdate, finalScore };
}
