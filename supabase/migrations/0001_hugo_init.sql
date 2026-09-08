-- Hugo AI initial schema

CREATE TABLE IF NOT EXISTS realtors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  twilio_number TEXT UNIQUE NOT NULL,
  cal_com_link TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  realtor_id UUID NOT NULL REFERENCES realtors(id) ON DELETE CASCADE,
  phone TEXT NOT NULL,
  name TEXT,
  status TEXT NOT NULL DEFAULT 'qualifying'
    CHECK (status IN ('qualifying', 'qualified', 'nurturing', 'booked', 'closed', 'dead')),
  score SMALLINT CHECK (score BETWEEN 1 AND 10),
  score_reason TEXT,
  intent TEXT CHECK (intent IN ('buy', 'sell', 'both')),
  area TEXT,
  budget_raw TEXT,
  timeline TEXT,
  motivation TEXT,
  pre_approval TEXT CHECK (pre_approval IN ('yes', 'no', 'in_progress', 'not_applicable')),
  qualification_summary TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (realtor_id, phone)
);

CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_leads_realtor_id ON leads (realtor_id);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads (phone);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (status);
CREATE INDEX IF NOT EXISTS idx_messages_lead_id ON messages (lead_id);
CREATE INDEX IF NOT EXISTS idx_realtors_twilio_number ON realtors (twilio_number);
