import { NextRequest, NextResponse } from "next/server";
import { listLeads } from "@/lib/hugo/db";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const realtorId = request.nextUrl.searchParams.get("realtor_id") ?? undefined;
  const leads = await listLeads(realtorId);
  return NextResponse.json(leads);
}
