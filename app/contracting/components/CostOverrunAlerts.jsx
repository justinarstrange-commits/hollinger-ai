'use client'

import { useState } from 'react'

const JOBS = [
  { id: 'JOB-2601', name: 'Eagle Ridge Ensuite Remodel',       client: 'D. & D. Whitfield',     pm: 'Quinn',  pmPhone: '604-555-0118' },
  { id: 'JOB-2602', name: 'Heritage Mountain Kitchen Reno',    client: 'R. Ferreira',           pm: 'Bonnie', pmPhone: '604-555-0142' },
  { id: 'JOB-2603', name: 'Westwood Plateau Ensuite',          client: 'J. Okafor',             pm: 'Quinn',  pmPhone: '604-555-0118' },
  { id: 'JOB-2604', name: 'Suter Brook Kitchen + Floors',      client: 'M. Lindqvist',          pm: 'Bonnie', pmPhone: '604-555-0142' },
  { id: 'JOB-2605', name: 'Maple Creek Whole-Home Flooring',   client: 'S. & T. Bachra',        pm: 'Quinn',  pmPhone: '604-555-0118' },
  { id: 'JOB-2606', name: 'Newport Village Retail Buildout',   client: 'Tri-City Leasing Group',pm: 'Quinn',  pmPhone: '604-555-0118' },
  { id: 'JOB-2607', name: 'Ioco Road Custom Kitchen',          client: 'A. Petrov',             pm: 'Bonnie', pmPhone: '604-555-0142' },
  { id: 'JOB-2608', name: 'Brewers Row Office TI',             client: 'Anchorpoint Capital',   pm: 'Quinn',  pmPhone: '604-555-0118' },
]

const CATEGORIES = [
  'Structural / Unforeseen Condition',
  'Client-Requested Change',
  'Material Price Increase',
  'Subcontractor Error / Damage',
  'Permit or Inspection Delay',
]

const ACTION_STEPS = {
  'Structural / Unforeseen Condition': [
    { step: 'Photograph the condition immediately — wide shot + close-up, before any further demo.' },
    { step: 'AI drafts the change order from your photos, notes, and current material price book.' },
    { step: 'Client is texted and emailed for e-signature — work pauses on the affected area only.' },
    { step: 'Reassign idle crew to prep, material staging, or another open job while you wait on approval.' },
    { step: 'Once signed, the amount applies automatically to the job\'s next invoice — no manual entry.' },
  ],
  'Client-Requested Change': [
    { step: 'Confirm the change verbally on-site, then log it before doing any of the new work.' },
    { step: 'AI drafts the change order with the new scope and price delta — sent for signature before work proceeds.' },
    { step: 'Client is texted and emailed for e-signature same day, while the conversation is fresh.' },
    { step: 'Do not start the changed work until the signed CO is back — this is the #1 source of unbilled scope creep.' },
    { step: 'Once signed, the amount is added to the job\'s contract value and next invoice automatically.' },
  ],
  'Material Price Increase': [
    { step: 'Get the updated supplier quote in writing — photo or forwarded email works.' },
    { step: 'AI compares it against the original estimate line and calculates the delta.' },
    { step: 'If the delta exceeds your allowance threshold, a change order drafts automatically.' },
    { step: 'Client is notified by text + email before the material is ordered, not after.' },
    { step: 'Approved delta is staged against the job\'s cost-to-complete and reflected in projected margin instantly.' },
  ],
  'Subcontractor Error / Damage': [
    { step: 'Photograph the damage or rework needed before anyone touches it.' },
    { step: 'Flag which sub is responsible — this cost should not erode your margin.' },
    { step: 'AI drafts a back-charge note against the subcontractor\'s next payment, not the client\'s invoice.' },
    { step: 'Quinn is texted instantly so the sub conversation happens same-day, not at the next site visit.' },
    { step: 'Document for the sub\'s file — repeat issues should affect who gets called for the next job.' },
  ],
  'Permit or Inspection Delay': [
    { step: 'Log the delay reason and the new expected date — this affects crew scheduling, not job cost directly.' },
    { step: 'AI checks which other jobs that crew can shift to so no one sits idle.' },
    { step: 'Client is notified proactively by text — delays they hear about late feel like incompetence, even when it\'s the city.' },
    { step: 'Milestone payment dates tied to this stage are automatically pushed and the client is notified of the new date.' },
  ],
}

const inputCls = `
  w-full bg-slate-800 border border-slate-700 rounded px-3 py-2.5
  text-white text-sm focus:outline-none focus:border-green-500 transition-colors
  placeholder-slate-600
`

function Card({ label, required, children }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">
        {label} {required && <span className="text-green-500">*</span>}
      </label>
      {children}
    </div>
  )
}

function AutoAction({ text, meta }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-5 h-5 rounded-full bg-green-500/15 border border-green-600/40 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </span>
      <span className="text-slate-200 text-sm flex-1">{text}</span>
      <span className="text-slate-600 text-xs flex-shrink-0">{meta}</span>
    </div>
  )
}

function MessagePreview({ channel, to, body }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-green-400 text-xs font-bold uppercase tracking-widest">{channel}</span>
        <span className="text-slate-600 text-xs">to {to}</span>
      </div>
      <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">{body}</div>
      <div className="text-slate-600 text-xs mt-1.5">Delivered · sent automatically, no one typed this</div>
    </div>
  )
}

export default function CostOverrunAlerts({ overrunEvents, onSubmit, approveOverrun, setView }) {
  const [submitted, setSubmitted]         = useState(false)
  const [submittedData, setSubmittedData] = useState(null)
  const [form, setForm] = useState({
    jobId:       'JOB-2607',
    category:    'Material Price Increase',
    amount:      '',
    idleCrew:    '0',
    reportedBy:  '',
    notes:       '',
  })

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))
  const job = JOBS.find(j => j.id === form.jobId)

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      jobId:      form.jobId,
      category:   form.category,
      amount:     Number(form.amount) || 0,
      idleCrew:   Number(form.idleCrew) || 0,
      reportedBy: form.reportedBy.trim(),
      notes:      form.notes,
    }
    onSubmit(payload)
    setSubmittedData(payload)
    setSubmitted(true)
  }

  const reset = () => {
    setSubmitted(false)
    setSubmittedData(null)
    setForm({ jobId: 'JOB-2607', category: 'Material Price Increase', amount: '', idleCrew: '0', reportedBy: '', notes: '' })
  }

  // ── Confirmation + auto-action screen ──────────────────────────
  if (submitted && submittedData) {
    const sJob  = JOBS.find(j => j.id === submittedData.jobId)
    const steps = ACTION_STEPS[submittedData.category] || []
    const cad = (n) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 0 }).format(n)

    return (
      <div className="p-4 sm:p-6 max-w-2xl space-y-4">

        <div className="rounded-xl bg-slate-900 border border-slate-800 border-l-4 border-l-red-500 overflow-hidden">
          <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                </span>
                <span className="text-red-400 text-xs uppercase tracking-widest font-bold">Overrun Logged — Auto-Response Initiated</span>
              </div>
              <div className="text-white text-xl font-bold">{sJob?.name}</div>
              <div className="text-slate-400 text-sm">{submittedData.category}</div>
            </div>
            <div className="sm:text-right">
              <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">Overrun Amount</div>
              <div className="text-red-400 text-2xl font-bold tabular-nums">{cad(submittedData.amount)}</div>
              {submittedData.idleCrew > 0 && (
                <div className="text-slate-600 text-xs">{submittedData.idleCrew} crew on standby</div>
              )}
            </div>
          </div>
          <div className="px-4 sm:px-6 py-4 border-t border-slate-800 bg-slate-950/40 space-y-2.5">
            <AutoAction text="Change order drafted from job notes and current price book" meta="just now" />
            <AutoAction text={`Text + email sent to ${sJob?.client} for e-signature`} meta="just now" />
            <AutoAction text={`${sJob?.pm} texted instant notice of the overrun`} meta="just now" />
            <AutoAction text="Amount staged against job invoice — applies on client signature" meta="pending" />
            <AutoAction text="Projected margin on Job Cost Command updated live" meta="live" />
          </div>
        </div>

        {/* Simulated outbound messages — proof the AI actually does the sending */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-slate-800">
            <span className="text-green-400 text-xs uppercase tracking-widest font-bold">📤 What Was Actually Sent</span>
          </div>
          <div className="p-4 space-y-3">
            <MessagePreview
              channel="SMS"
              to={`${sJob?.client} · client`}
              body={`Hi ${sJob?.client?.split(' ').pop()}, this is Craftsmen Contracting. We found a ${submittedData.category.toLowerCase()} on ${sJob?.id} that needs a change order: ${cad(submittedData.amount)}. Full breakdown + e-sign link sent to your email. Questions, call ${sJob?.pm}.`}
            />
            <MessagePreview
              channel="Email"
              to={`${sJob?.client} · client`}
              body={`Subject: Change Order Required — ${sJob?.name}\n\nAttached: itemized change order (${cad(submittedData.amount)}), site photos, and updated schedule impact. Please review and e-sign to keep your project on schedule. This was generated automatically the moment the issue was logged on-site.`}
            />
            <MessagePreview
              channel="SMS"
              to={`${sJob?.pm} · ${sJob?.id === 'JOB-2607' ? '604-555-0142' : '604-555-0118'}`}
              body={`Overrun on ${sJob?.id} (${sJob?.name}): ${cad(submittedData.amount)} — ${submittedData.category}. CO auto-sent to client. ${submittedData.idleCrew > 0 ? `${submittedData.idleCrew} crew on standby.` : ''} Reported by ${submittedData.reportedBy || 'field crew'}.`}
            />
          </div>
        </div>

        {/* Recommended actions */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-green-400 text-xs uppercase tracking-widest font-bold">⚡ Recommended Actions</span>
            <span className="sm:ml-auto text-slate-500 text-xs">{submittedData.category}</span>
          </div>
          <div className="divide-y divide-slate-800">
            {steps.map((s, i) => (
              <div key={i} className="px-4 sm:px-6 py-3.5 flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-950/40 border border-green-800 flex items-center justify-center flex-shrink-0 text-xs font-bold text-green-400">
                  {i + 1}
                </div>
                <div className="text-slate-200 text-sm leading-relaxed pt-0.5">{s.step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setView('command')}
            className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold text-sm py-3.5 rounded-lg transition-colors"
          >
            View Job Cost Command ↗
          </button>
          <button
            onClick={reset}
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm py-3.5 rounded-lg transition-colors"
          >
            Log Another Overrun
          </button>
        </div>
      </div>
    )
  }

  // ── Report form ─────────────────────────────────────────────────
  return (
    <div className="p-4 sm:p-6 max-w-xl space-y-5">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="relative flex h-2 w-2">
            <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-green-400 text-xs uppercase tracking-widest">Field Report — Site Tablet / Phone</span>
        </div>
        <h1 className="text-white text-xl font-bold">COST OVERRUN REPORT</h1>
        <p className="text-slate-500 text-xs mt-0.5">
          Log it the moment you find it. The change order, client text/email, and owner notice go out automatically on submission.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Card label="Job" required>
          <select value={form.jobId} onChange={set('jobId')} className={inputCls}>
            {JOBS.map(j => <option key={j.id} value={j.id}>{j.id} — {j.name}</option>)}
          </select>
          {job && (
            <div className="mt-1.5 text-slate-500 text-xs">
              {job.client} &middot; PM: {job.pm}
            </div>
          )}
        </Card>

        <Card label="Category" required>
          <select value={form.category} onChange={set('category')} className={inputCls}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <div className="mt-2 text-slate-500 text-xs">
            ↳ Recommended actions and change-order language are tailored to this category.
          </div>
        </Card>

        <Card label="Overrun Amount (CAD)" required>
          <input
            type="number" min="1" step="50"
            placeholder="0"
            value={form.amount}
            onChange={set('amount')}
            className={`${inputCls} text-2xl font-bold`}
            required
          />
        </Card>

        <Card label="Crew On Standby (optional)">
          <input
            type="number" min="0" max="20"
            value={form.idleCrew}
            onChange={set('idleCrew')}
            className={`${inputCls} w-24 text-center`}
          />
          <div className="text-slate-500 text-xs mt-1.5">Workers who can't proceed until the change order is signed</div>
        </Card>

        <Card label="Reported By" required>
          <input
            type="text"
            placeholder="Full name"
            value={form.reportedBy}
            onChange={set('reportedBy')}
            className={inputCls}
            required
          />
        </Card>

        <Card label="Notes">
          <textarea
            rows={3}
            placeholder="What did you find, what does it affect, anything the client should know..."
            value={form.notes}
            onChange={set('notes')}
            className={`${inputCls} resize-none`}
          />
        </Card>

        <button
          type="submit"
          className="w-full mt-2 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold text-base py-4 rounded-lg transition-colors shadow-lg shadow-red-950/50"
        >
          Log Overrun &rarr; Send Change Order Now
        </button>

        <p className="text-center text-slate-600 text-xs">
          Client and owner are notified automatically. Nothing about this is manual.
        </p>
      </form>
    </div>
  )
}
