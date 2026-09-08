import { createClient } from "@supabase/supabase-js";
import type {
  Lead,
  Message,
  MessageRole,
  QualificationResult,
  QualificationUpdate,
  Realtor,
} from "./types";

function getClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  return createClient(url, key);
}

export async function getRealtorByTwilioNumber(
  twilioNumber: string
): Promise<Realtor | null> {
  const db = getClient();
  const { data, error } = await db
    .from("realtors")
    .select("*")
    .eq("twilio_number", twilioNumber)
    .single();
  if (error || !data) return null;
  return data as Realtor;
}

export async function findOrCreateLead(
  realtorId: string,
  phone: string
): Promise<Lead> {
  const db = getClient();
  const { data: existing } = await db
    .from("leads")
    .select("*")
    .eq("realtor_id", realtorId)
    .eq("phone", phone)
    .single();

  if (existing) return existing as Lead;

  const { data: created, error } = await db
    .from("leads")
    .insert({ realtor_id: realtorId, phone, status: "qualifying" })
    .select()
    .single();

  if (error || !created) throw new Error(`Failed to create lead: ${error?.message}`);
  return created as Lead;
}

export async function getMessages(leadId: string): Promise<Message[]> {
  const db = getClient();
  const { data, error } = await db
    .from("messages")
    .select("*")
    .eq("lead_id", leadId)
    .order("created_at", { ascending: true });
  if (error) throw new Error(`Failed to load messages: ${error.message}`);
  return (data ?? []) as Message[];
}

export async function saveMessage(
  leadId: string,
  role: MessageRole,
  content: string
): Promise<void> {
  const db = getClient();
  const { error } = await db.from("messages").insert({ lead_id: leadId, role, content });
  if (error) throw new Error(`Failed to save message: ${error.message}`);
}

export async function updateLeadQualification(
  leadId: string,
  update: QualificationUpdate
): Promise<void> {
  const db = getClient();
  const patch: Record<string, unknown> = { ...update, updated_at: new Date().toISOString() };
  const { error } = await db.from("leads").update(patch).eq("id", leadId);
  if (error) throw new Error(`Failed to update lead: ${error.message}`);
}

export async function finalizeLeadScore(
  leadId: string,
  result: QualificationResult
): Promise<void> {
  const db = getClient();
  const { error } = await db
    .from("leads")
    .update({
      status: "qualified",
      score: result.score,
      score_reason: result.score_reason,
      qualification_summary: result.summary,
      updated_at: new Date().toISOString(),
    })
    .eq("id", leadId);
  if (error) throw new Error(`Failed to finalize lead: ${error.message}`);
}

export async function getLead(leadId: string): Promise<Lead | null> {
  const db = getClient();
  const { data, error } = await db.from("leads").select("*").eq("id", leadId).single();
  if (error || !data) return null;
  return data as Lead;
}

export async function listLeads(realtorId?: string): Promise<Lead[]> {
  const db = getClient();
  let query = db.from("leads").select("*").order("created_at", { ascending: false });
  if (realtorId) query = query.eq("realtor_id", realtorId);
  const { data, error } = await query;
  if (error) throw new Error(`Failed to list leads: ${error.message}`);
  return (data ?? []) as Lead[];
}
