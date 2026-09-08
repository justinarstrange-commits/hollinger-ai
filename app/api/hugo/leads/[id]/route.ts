import { NextRequest, NextResponse } from "next/server";
import { getLead, getMessages } from "@/lib/hugo/db";

export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  ctx: RouteContext<"/api/hugo/leads/[id]">
) {
  const { id } = await ctx.params;
  const [lead, messages] = await Promise.all([getLead(id), getMessages(id)]);
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ lead, messages });
}
