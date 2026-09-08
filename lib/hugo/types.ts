export type LeadIntent = "buy" | "sell" | "both";
export type PreApproval = "yes" | "no" | "in_progress" | "not_applicable";
export type LeadStatus =
  | "qualifying"
  | "qualified"
  | "nurturing"
  | "booked"
  | "closed"
  | "dead";
export type MessageRole = "user" | "assistant";

export interface Realtor {
  id: string;
  name: string;
  email: string;
  twilio_number: string;
  cal_com_link: string | null;
  created_at: string;
}

export interface Lead {
  id: string;
  realtor_id: string;
  phone: string;
  name: string | null;
  status: LeadStatus;
  score: number | null;
  score_reason: string | null;
  intent: LeadIntent | null;
  area: string | null;
  budget_raw: string | null;
  timeline: string | null;
  motivation: string | null;
  pre_approval: PreApproval | null;
  qualification_summary: string | null;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  lead_id: string;
  role: MessageRole;
  content: string;
  created_at: string;
}

export interface QualificationUpdate {
  intent?: LeadIntent;
  area?: string;
  budget_raw?: string;
  timeline?: string;
  motivation?: string;
  pre_approval?: PreApproval;
}

export interface QualificationResult {
  score: number;
  score_reason: string;
  summary: string;
}
