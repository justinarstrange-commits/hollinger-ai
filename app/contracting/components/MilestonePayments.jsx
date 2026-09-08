'use client'

import { useState } from 'react'

// Standard 4-stage draw schedule used across every signed contract.
// pctOfContract sums to 100; triggerPct is the job-completion % at which
// that draw becomes payable.
const SCHEDULE = [
  { key: 'deposit',     label: 'Deposit (Signing)',          pctOfContract: 20, triggerPct: 0  },
  { key: 'roughIn',     label: 'Rough-In Complete',          pctOfContract: 25, triggerPct: 35 },
  { key: 'substantial', label: 'Substantial Completion',     pctOfContract: 30, triggerPct: 70 },
  { key: 'final',       label: 'Final / Inspection Sign-Off',pctOfContract: 25, triggerPct: 98 },
]

const JOBS = [
  { id: 'JOB-2601', name: 'Eagle Ridge Ensuite Remodel',     client: 'D. & D. Whitfield',      pm: 'Quinn',  contractValue: 38500,  pct: 72 },
  { id: 'JOB-2602', name: 'Heritage Mountain Kitchen Reno',  client: 'R. Ferreira',             pm: 'Bonnie', contractValue: 72000,  pct: 55 },
  { id: 'JOB-2603', name: 'Westwood Plateau Ensuite',        client: 'J. Okafor',               pm: 'Quinn',  contractValue: 41000,  pct: 38 },
  { id: 'JOB-2604', name: 'Suter Brook Kitchen + Floors',    client: 'M. Lindqvist',            pm: 'Bonnie', contractValue: 89000,  pct: 81 },
  { id: 'JOB-2605', name: 'Maple Creek Whole-Home Flooring', client: 'S. & T. Bachra',          pm: 'Quinn',  contractValue: 26500,  pct: 95 },
  { id: 'JOB-2606', name: 'Newport Village Retail Buildout', client: 'Tri-City Leasing Group',  pm: 'Quinn',  contractValue: 145000, pct: 44 },
  { id: 'JOB-2607', name: 'Ioco Road Custom Kitchen',        client: 'A. Petrov',               pm: 'Bonnie', contractValue: 68000,  pct: 60 },
  { id: 'JOB-2608', name: 'Brewers Row Office TI',           client: 'Anchorpoint Capital',     pm: 'Quinn',  contractValue: 98000,  pct: 30 },
]

function cad(n) {
  return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 0 }).format(n)
}

// Build the flattened draw list with computed status per job/stage.
function buildDraws() {
  const draws = []
  for (const job of JOBS) {
    SCHEDULE.forEach((stage, i) => {
      const amount = Math.round(job.contractValue * stage.pctOfContract / 100)
      const nextTrigger = SCHEDULE[i + 1]?.triggerPct ?? 101
      let status
      if (job.pct >= nextTrigger || (stage.key === 'final' && job.pct >= 98)) status = 'PAID'
      else if (job.pct >= stage.triggerPct) status = 'DUE NOW'
      else status = 'UPCOMING'
      draws.push({ job, stage, amount, status })
    })
  }
  return draws
}

const STATUS_CFG = {
  'PAID':     { pill: 'bg-slate-800 text-slate-400 border border-slate-700' },
  'DUE NOW':  { pill: 'bg-green-950 text-green-400 border border-green-800' },
  'UPCOMING': { pill: 'bg-slate-900 text-slate-600 border border-slate-800' },
}

function MessagePreview({ channel, to, body }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-green-400 text-xs font-bold uppercase tracking-widest">{channel}</span>
        <span className="text-slate-600 text-xs">to {to}</span>
      </div>
      <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">{body}</div>
    </div>
  )
}

function KPITile({ label, value, sub, accent }) {
  const colors = {
    slate: { bar: 'bg-slate-600', val: 'text-white' },
    green: { bar: 'bg-green-500', val: 'text-green-400' },
    cyan:  { bar: 'bg-cyan-500',  val: 'text-cyan-400' },
  }
  const c = colors[accent] || colors.slate
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 pl-5 relative overflow-hidden">
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${c.bar}`} />
      <div className="text-slate-500 text-xs uppercase tracking-widest mb-2">{label}</div>
      <div className={`text-4xl font-bold tabular-nums ${c.val}`}>{value}</div>
      <div className="text-xs mt-1 font-medium text-slate-500">{sub}</div>
    </div>
  )
}

export default function MilestonePayments() {
  const [draws]   = useState(buildDraws)
  const [sent, setSent] = useState(() => new Set())
  const [expanded, setExpanded] = useState(null)

  const dueNow = draws.filter(d => d.status === 'DUE NOW')
  const dueTotal = dueNow.reduce((s, d) => s + d.amount, 0)
  const outstanding = draws.filter(d => d.status !== 'PAID').reduce((s, d) => s + d.amount, 0)

  const drawKey = (d) => `${d.job.id}-${d.stage.key}`

  const sendRequest = (d) => {
    setSent(prev => new Set(prev).add(drawKey(d)))
    setExpanded(drawKey(d))
  }

  const expandedDraw = draws.find(d => drawKey(d) === expanded)

  return (
    <div className="p-4 sm:p-6 space-y-5 min-h-full">

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h1 className="text-white text-xl font-bold tracking-tight">MILESTONE PAYMENTS</h1>
          <p className="text-slate-500 text-xs mt-0.5">
            CRAFTSMEN CONTRACTING &nbsp;·&nbsp; DRAW SCHEDULE AUTO-TRACKED AGAINST JOB PROGRESS
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <KPITile label="Due Now" value={cad(dueTotal)} sub={`${dueNow.length} draws ready to invoice`} accent="green" />
        <KPITile label="Auto-Sent Today" value={sent.size} sub="requests fired without a phone call" accent="cyan" />
        <KPITile label="Outstanding (All Stages)" value={cad(outstanding)} sub="unpaid across 8 jobs" accent="slate" />
        <KPITile label="Avg. Days to Payment" value="2.1" sub="was ~14 days before auto-request" accent="green" />
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-900 overflow-hidden">
        <div className="px-4 sm:px-5 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <span className="text-white text-sm font-bold">DRAW SCHEDULE — ALL JOBS</span>
          <span className="text-slate-600 text-xs">20 / 25 / 30 / 25 standard contract split</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px]">
            <thead>
              <tr className="border-b border-slate-800/80 text-slate-500 text-xs">
                <th className="text-left px-5 py-2.5 font-normal">JOB</th>
                <th className="text-left px-4 py-2.5 font-normal">MILESTONE</th>
                <th className="text-right px-4 py-2.5 font-normal">AMOUNT</th>
                <th className="text-left px-4 py-2.5 font-normal">STATUS</th>
                <th className="text-right px-5 py-2.5 font-normal"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40">
              {draws.filter(d => d.status !== 'UPCOMING' || d.stage.key === 'final').map(d => {
                const key = drawKey(d)
                const isSent = sent.has(key)
                const cfg = STATUS_CFG[d.status]
                const isOpen = expanded === key
                return (
                  <tr key={key} className={`text-sm hover:bg-slate-800/40 ${d.status === 'DUE NOW' && !isSent ? 'bg-green-950/10' : ''}`}>
                    <td className="px-5 py-3 align-middle">
                      <div className="text-white text-sm font-bold font-mono">{d.job.id}</div>
                      <div className="text-slate-600 text-xs mt-0.5">{d.job.name}</div>
                    </td>
                    <td className="px-4 py-3 align-middle text-slate-300">{d.stage.label}</td>
                    <td className="px-4 py-3 align-middle text-right text-white font-bold tabular-nums">{cad(d.amount)}</td>
                    <td className="px-4 py-3 align-middle">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide whitespace-nowrap ${
                        isSent ? 'bg-cyan-950 text-cyan-400 border border-cyan-800' : cfg.pill
                      }`}>
                        {isSent ? 'REQUEST SENT' : d.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 align-middle text-right">
                      {d.status === 'DUE NOW' && !isSent && (
                        <button
                          onClick={() => sendRequest(d)}
                          className="text-xs px-3 py-1.5 rounded bg-green-600 hover:bg-green-500 text-white font-bold transition-colors"
                        >
                          AI: Send Request →
                        </button>
                      )}
                      {isSent && (
                        <button
                          onClick={() => setExpanded(isOpen ? null : key)}
                          className="text-xs px-2 py-1 rounded border border-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
                        >
                          {isOpen ? '▲ Hide' : '▼ View sent'}
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Sent-message detail — rendered full-width below the scrollable table */}
        {expandedDraw && sent.has(expanded) && (
          <div className="bg-slate-950/50 px-4 sm:px-5 py-4 border-t border-slate-800">
            <div className="text-slate-500 text-xs mb-1">{expandedDraw.job.id} — {expandedDraw.stage.label}</div>
            <div className="text-green-400 text-xs uppercase tracking-widest font-bold mb-3">📤 Sent Automatically — No One Picked Up a Phone</div>
            <div className="space-y-3">
              <MessagePreview
                channel="SMS"
                to={`${expandedDraw.job.client} · client`}
                body={`Hi ${expandedDraw.job.client.split(' ').pop()}, ${expandedDraw.job.name} has reached ${expandedDraw.stage.label}. Your next draw of ${cad(expandedDraw.amount)} is ready — invoice + e-pay link sent to your email. Thanks for building with Craftsmen Contracting.`}
              />
              <MessagePreview
                channel="Email"
                to={`${expandedDraw.job.client} · client`}
                body={`Subject: ${expandedDraw.job.name} — ${expandedDraw.stage.label} Reached, Payment Due\n\nGreat progress — ${expandedDraw.stage.label.toLowerCase()} is complete. Attached is your invoice for ${cad(expandedDraw.amount)} (${SCHEDULE.find(s=>s.key===expandedDraw.stage.key).pctOfContract}% draw) with site photos from this stage. Pay online via the link below or by e-transfer.`}
              />
              <MessagePreview
                channel="SMS"
                to={`${expandedDraw.job.pm} · owner`}
                body={`${expandedDraw.job.id} hit ${expandedDraw.stage.label} — ${cad(expandedDraw.amount)} draw invoice auto-sent to ${expandedDraw.job.client}. No action needed unless they don't pay within 5 days.`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
