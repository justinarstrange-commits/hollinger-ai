'use client'

import { useState, useEffect, useCallback } from 'react'

// ── Static mock data ────────────────────────────────────────────
// Every job carries its full money trail — contract value, cost to date,
// committed-but-not-incurred cost, and a projected final number — so the
// answer to "did we make money on this job" exists before final inspection,
// not three months after.
const JOBS = [
  {
    id: 'JOB-2601',
    name: 'Eagle Ridge Ensuite Remodel',
    client: 'D. & D. Whitfield',
    type: 'Bathroom',
    address: 'Coquitlam',
    status: 'ON TRACK',
    stage: 'Tile & Finishes',
    pct: 72,
    crew: 2,
    pm: 'Quinn',
    due: '2026-07-18',
    contractValue: 38500,
    estMarginPct: 23.0,
    costToDate: 24800,
    committed: 4400,
    projectedFinal: 31400,
  },
  {
    id: 'JOB-2602',
    name: 'Heritage Mountain Kitchen Reno',
    client: 'R. Ferreira',
    type: 'Kitchen',
    address: 'Port Moody',
    status: 'ON TRACK',
    stage: 'Cabinetry Install',
    pct: 55,
    crew: 3,
    pm: 'Bonnie',
    due: '2026-08-05',
    contractValue: 72000,
    estMarginPct: 25.0,
    costToDate: 33200,
    committed: 22800,
    projectedFinal: 56000,
  },
  {
    id: 'JOB-2603',
    name: 'Westwood Plateau Ensuite',
    client: 'J. Okafor',
    type: 'Bathroom',
    address: 'Coquitlam',
    status: 'AT RISK',
    stage: 'Rough-In',
    pct: 38,
    crew: 2,
    pm: 'Quinn',
    due: '2026-07-25',
    contractValue: 41000,
    estMarginPct: 25.6,
    costToDate: 18500,
    committed: 9800,
    projectedFinal: 34900,
    blockNote: 'Rotted subfloor found behind tub surround — $4,300 change order pending client e-signature',
  },
  {
    id: 'JOB-2604',
    name: 'Suter Brook Kitchen + Floors',
    client: 'M. Lindqvist',
    type: 'Kitchen / Floors',
    address: 'Port Moody',
    status: 'ON TRACK',
    stage: 'Flooring',
    pct: 81,
    crew: 3,
    pm: 'Bonnie',
    due: '2026-07-10',
    contractValue: 89000,
    estMarginPct: 25.8,
    costToDate: 58000,
    committed: 7000,
    projectedFinal: 65000,
  },
  {
    id: 'JOB-2605',
    name: 'Maple Creek Whole-Home Flooring',
    client: 'S. & T. Bachra',
    type: 'Floors',
    address: 'Port Coquitlam',
    status: 'ON TRACK',
    stage: 'Final Walkthrough',
    pct: 95,
    crew: 2,
    pm: 'Quinn',
    due: '2026-07-03',
    contractValue: 26500,
    estMarginPct: 28.3,
    costToDate: 18200,
    committed: 400,
    projectedFinal: 18600,
  },
  {
    id: 'JOB-2606',
    name: 'Newport Village Retail Buildout',
    client: 'Tri-City Leasing Group',
    type: 'Commercial',
    address: 'Port Moody',
    status: 'ON TRACK',
    stage: 'Electrical & Mechanical Rough-In',
    pct: 44,
    crew: 4,
    pm: 'Quinn',
    due: '2026-09-12',
    contractValue: 145000,
    estMarginPct: 22.8,
    costToDate: 51000,
    committed: 58000,
    projectedFinal: 109000,
  },
  {
    id: 'JOB-2607',
    name: 'Ioco Road Custom Kitchen',
    client: 'A. Petrov',
    type: 'Kitchen',
    address: 'Port Moody',
    status: 'OVER BUDGET',
    stage: 'Cabinetry & Counters',
    pct: 60,
    crew: 2,
    pm: 'Bonnie',
    due: '2026-08-20',
    contractValue: 68000,
    estMarginPct: 26.5,
    costToDate: 41000,
    committed: 16000,
    projectedFinal: 57000,
    blockNote: '$5,800 of client-approved cabinet upgrades completed but never converted to a signed change order',
  },
  {
    id: 'JOB-2608',
    name: 'Brewers Row Office TI',
    client: 'Anchorpoint Capital',
    type: 'Commercial',
    address: 'Port Moody',
    status: 'ON TRACK',
    stage: 'Framing & Drywall',
    pct: 30,
    crew: 3,
    pm: 'Quinn',
    due: '2026-09-30',
    contractValue: 98000,
    estMarginPct: 22.4,
    costToDate: 24000,
    committed: 47000,
    projectedFinal: 71000,
  },
]

const JOB_ACTIONS = {
  'JOB-2603': {
    summary: 'Unforeseen structural condition — auto change order in flight, crew on paid standby.',
    items: [
      { done: true,  owner: 'AI Agent',      text: 'Change order drafted from site photos — $4,300, attached to job file' },
      { done: true,  owner: 'AI Agent',      text: 'Text + email sent to J. Okafor requesting e-signature approval' },
      { done: true,  owner: 'AI Agent',      text: 'Quinn texted instant notice: "Westwood Plateau — $4,300 overrun, CO sent, crew on standby"' },
      { done: false, owner: 'J. Okafor',     text: 'Client e-signature on change order' },
      { done: false, owner: 'M. Reyes',      text: 'Resume framing once signed — crew currently prepping CERF-Bay materials' },
    ],
  },
  'JOB-2607': {
    summary: 'Billing gap caught before final invoice — completed work was never converted to a signed change order.',
    items: [
      { done: true,  owner: 'AI Agent',      text: 'Flagged $5,800 of cabinet upgrades completed on-site with no matching CO' },
      { done: true,  owner: 'AI Agent',      text: 'Change order auto-generated from material receipts + site photos' },
      { done: true,  owner: 'AI Agent',      text: 'Sent to A. Petrov for e-signature, Bonnie cc\'d — 58 min ago' },
      { done: false, owner: 'Bonnie',        text: 'Follow up by phone if unsigned by end of day' },
    ],
  },
}

// ── Helpers ─────────────────────────────────────────────────────
function cad(n) {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency', currency: 'CAD',
    minimumFractionDigits: 0, maximumFractionDigits: 0,
  }).format(n)
}

function elapsed(ts, now) {
  const s = Math.floor((now - ts) / 1000)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  const mm = String(m).padStart(2, '0')
  const ss = String(sec).padStart(2, '0')
  return h > 0 ? `${h}h ${mm}m ${ss}s` : `${mm}m ${ss}s`
}

// ── Status pill config ───────────────────────────────────────────
const S = {
  'AT RISK': {
    pill: 'bg-red-950 text-red-400 border border-red-800',
    row:  'bg-red-950/20',
  },
  'OVER BUDGET': {
    pill: 'bg-amber-950 text-amber-400 border border-amber-800',
    row:  'bg-amber-950/20',
  },
  'ON TRACK': {
    pill: 'bg-green-950 text-green-500 border border-green-900',
    row:  '',
  },
}

// ── Sub-components ───────────────────────────────────────────────
function KPITile({ label, value, sub, accent, pulse }) {
  const colors = {
    slate: { bar: 'bg-slate-600', val: 'text-white',     sub: 'text-slate-500', dot: '#64748b' },
    green: { bar: 'bg-green-500', val: 'text-green-400', sub: 'text-slate-500', dot: '#22c55e' },
    cyan:  { bar: 'bg-cyan-500',  val: 'text-cyan-400',  sub: 'text-slate-500', dot: '#06b6d4' },
    red:   { bar: 'bg-red-500',   val: 'text-red-400',   sub: 'text-red-400',   dot: '#ef4444' },
    amber: { bar: 'bg-amber-500', val: 'text-amber-400', sub: 'text-amber-400', dot: '#f59e0b' },
  }
  const c = colors[accent] || colors.slate
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 pl-5 relative overflow-hidden">
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${c.bar}`} />
      {pulse && (
        <span className="absolute top-3 right-3 flex h-2 w-2">
          <span className="ping-dot absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: c.dot }} />
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: c.dot }} />
        </span>
      )}
      <div className="text-slate-500 text-xs uppercase tracking-widest mb-2">{label}</div>
      <div className={`text-4xl font-bold tabular-nums ${c.val}`}>{value}</div>
      <div className={`text-xs mt-1 font-medium ${c.sub}`}>{sub}</div>
    </div>
  )
}

function ProgressBar({ pct }) {
  const color = pct >= 80 ? 'bg-green-500' : pct >= 50 ? 'bg-cyan-500' : 'bg-slate-500'
  return (
    <div className="flex items-center gap-2">
      <div className="w-20 bg-slate-800 rounded-full h-1.5 overflow-hidden">
        <div className={`h-1.5 rounded-full transition-all ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-white w-8 text-right tabular-nums">{pct}%</span>
    </div>
  )
}

function MarginCell({ job }) {
  const projMarginPct = ((job.contractValue - job.projectedFinal) / job.contractValue) * 100
  const delta = projMarginPct - job.estMarginPct
  const down = delta < -1.5
  const flat = Math.abs(delta) <= 1.5
  return (
    <div className="text-right">
      <div className="flex items-center justify-end gap-1.5">
        <span className="text-slate-600 text-xs tabular-nums">{job.estMarginPct.toFixed(1)}%</span>
        <span className="text-slate-700">→</span>
        <span className={`text-sm font-bold tabular-nums ${down ? 'text-red-400' : flat ? 'text-slate-200' : 'text-green-400'}`}>
          {projMarginPct.toFixed(1)}%
        </span>
      </div>
      <div className={`text-xs mt-0.5 ${down ? 'text-red-500/80' : 'text-slate-600'}`}>
        {down ? `${delta.toFixed(1)}pt erosion` : 'on plan'}
      </div>
    </div>
  )
}

// ── Main export ─────────────────────────────────────────────────
export default function JobCostCommand({ overrunEvents, approveOverrun }) {
  const [now, setNow]                 = useState(Date.now())
  const [expandedJob, setExpandedJob] = useState(null)

  const toggleJob = useCallback((id) => setExpandedJob(v => v === id ? null : id), [])

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const activeOverruns = overrunEvents.filter(e => e.status === 'awaiting client approval')

  // Live standby-cost calculation while crews wait on change-order approval
  const standbyBurn = activeOverruns.reduce((sum, e) => {
    const hrs = (now - e.timestamp) / 3_600_000
    return sum + Number(e.idleCrew || 0) * 52 * hrs
  }, 0)

  // Portfolio KPIs
  const salesBooked   = JOBS.reduce((s, j) => s + j.contractValue, 0)
  const projectedProfit = JOBS.reduce((s, j) => s + (j.contractValue - j.projectedFinal), 0)
  const portfolioMargin = (projectedProfit / salesBooked) * 100
  const crewDeployed  = JOBS.reduce((s, j) => s + j.crew, 0)
  const flaggedJobs    = JOBS.filter(j => j.status === 'AT RISK' || j.status === 'OVER BUDGET').length
  const byType = JOBS.reduce((acc, j) => {
    const key = j.type.split(' / ')[0]
    acc[key] = (acc[key] || 0) + 1
    return acc
  }, {})

  return (
    <div className="p-4 sm:p-6 space-y-5 min-h-full">

      {/* ── Page header ── */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h1 className="text-white text-xl font-bold tracking-tight">JOB COST COMMAND</h1>
          <p className="text-slate-500 text-xs mt-0.5">
            CRAFTSMEN CONTRACTING &nbsp;·&nbsp; DESIGN · RENOVATION · BUILD &nbsp;·&nbsp; WEEK 27 / 2026
          </p>
        </div>
        <div className="sm:text-right text-slate-600 text-xs">
          <div>LAST SYNC</div>
          <div className="text-slate-400 text-sm tabular-nums">
            {new Date(now).toLocaleTimeString('en-CA', { hour12: false })}
          </div>
        </div>
      </div>

      {/* ── Active cost overrun — live auto-response ── */}
      {activeOverruns.length > 0 && (
        <div className="rounded-lg bg-slate-900 border border-slate-800 border-l-4 border-l-red-500 overflow-hidden">

          <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              <div>
                <div className="text-white text-sm font-bold uppercase tracking-wide">
                  {activeOverruns.length} Cost Overrun{activeOverruns.length !== 1 ? 's' : ''} Active · Auto-Response Engaged
                </div>
                <div className="text-slate-500 text-xs mt-0.5">
                  Change order drafted &amp; sent · client e-signature pending
                </div>
              </div>
            </div>
            <div className="sm:text-right">
              <div className="text-slate-500 text-xs uppercase tracking-widest mb-0.5">Crew Standby Cost</div>
              <div className="text-red-400 text-3xl font-bold tabular-nums cost-pulse">{cad(standbyBurn)}</div>
            </div>
          </div>

          <div className="divide-y divide-slate-800">
            {activeOverruns.map(evt => {
              const job = JOBS.find(j => j.id === evt.jobId)
              return (
                <div key={evt.id} className="px-4 sm:px-6 py-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-white font-bold text-base font-mono tracking-tight">{evt.jobId}</span>
                    <span className="text-slate-400 text-sm">{job?.name}</span>
                    <span className="text-slate-600 text-xs tabular-nums ml-auto">standby {elapsed(evt.timestamp, now)}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2">
                    <span className="text-green-400 text-xs">✓ Change order drafted — {cad(evt.amount)}</span>
                    <span className="text-green-400 text-xs">✓ Client texted + emailed for e-signature</span>
                    <span className="text-green-400 text-xs">✓ Quinn notified by SMS</span>
                    <button
                      onClick={() => approveOverrun(evt.id)}
                      className="text-xs px-2 py-0.5 rounded border border-green-700 text-green-400 hover:bg-green-900/40 transition-colors"
                    >
                      Simulate client e-signature →
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ── KPI tiles ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <KPITile
          label="Active Jobs"
          value={JOBS.length}
          sub={Object.entries(byType).map(([k, v]) => `${v} ${k.toLowerCase()}`).join(' · ')}
          accent="slate"
        />
        <KPITile
          label="Sales Booked"
          value={cad(salesBooked)}
          sub="8 signed contracts, in progress"
          accent="cyan"
        />
        <KPITile
          label="Projected Profit"
          value={cad(projectedProfit)}
          sub={`${portfolioMargin.toFixed(1)}% portfolio margin`}
          accent="green"
        />
        <KPITile
          label="Jobs Flagged"
          value={flaggedJobs}
          sub={flaggedJobs > 0 ? 'Quinn / Bonnie attention needed' : 'All jobs on plan'}
          accent={flaggedJobs > 0 ? 'amber' : 'green'}
          pulse={flaggedJobs > 0}
        />
      </div>

      {/* ── Job register ── */}
      <div className="rounded-lg border border-slate-800 bg-slate-900 overflow-hidden">
        <div className="px-4 sm:px-5 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <span className="text-white text-sm font-bold">ACTIVE JOB REGISTER — ESTIMATE TO FINAL INSPECTION</span>
          <span className="text-slate-600 text-xs">AUTO-REFRESH · 30s</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead>
              <tr className="border-b border-slate-800/80 text-slate-500 text-xs">
                <th className="text-left px-5 py-2.5 font-normal">JOB</th>
                <th className="text-left px-4 py-2.5 font-normal">PROJECT</th>
                <th className="text-left px-4 py-2.5 font-normal">TYPE</th>
                <th className="text-left px-4 py-2.5 font-normal">STATUS</th>
                <th className="text-right px-4 py-2.5 font-normal">PROGRESS</th>
                <th className="text-right px-4 py-2.5 font-normal">EST → PROJ MARGIN</th>
                <th className="text-right px-5 py-2.5 font-normal">DUE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40">
              {JOBS.map(job => {
                const cfg        = S[job.status]
                const hasProblem = job.status === 'AT RISK' || job.status === 'OVER BUDGET'
                const isExpanded = expandedJob === job.id
                return (
                  <tr key={job.id} className={`text-sm transition-colors ${hasProblem ? 'cursor-pointer' : ''} hover:bg-slate-800/40 ${cfg.row}`}
                      onClick={hasProblem ? () => toggleJob(job.id) : undefined}>
                    <td className="px-5 py-3 align-middle">
                      <span className="text-white text-sm font-bold font-mono tracking-tight">{job.id}</span>
                    </td>
                    <td className="px-4 py-3 align-middle">
                      <div className="text-slate-100">{job.name}</div>
                      <div className="text-slate-600 text-xs mt-0.5">{job.client} &middot; PM: {job.pm} &middot; {job.address}</div>
                    </td>
                    <td className="px-4 py-3 align-middle text-slate-400 text-xs uppercase tracking-wide">{job.type}</td>
                    <td className="px-4 py-3 align-middle">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide whitespace-nowrap ${cfg.pill}`}>
                        {job.status}
                      </span>
                      {hasProblem && (
                        <div>
                          <span className={`inline-flex items-center mt-1.5 px-2 py-0.5 rounded text-xs font-bold border cursor-pointer transition-colors whitespace-nowrap ${
                            isExpanded
                              ? 'bg-green-900/60 text-green-300 border-green-700'
                              : 'bg-green-950/40 text-green-400 border-green-800 hover:bg-green-900/50'
                          }`}>
                            {isExpanded ? '▲ Hide response' : '⚡ Response plan'}
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 align-middle text-right"><ProgressBar pct={job.pct} /></td>
                    <td className="px-4 py-3 align-middle"><MarginCell job={job} /></td>
                    <td className="px-5 py-3 align-middle text-right text-slate-500 text-xs tabular-nums">{job.due}</td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr className="border-t border-slate-800 text-sm">
                <td colSpan={2} className="px-5 py-3 text-slate-500 text-xs uppercase tracking-widest">Portfolio · {crewDeployed} crew deployed today (incl. subs)</td>
                <td colSpan={5} className="px-4 py-3 text-right text-slate-300">
                  <span className="text-slate-600 text-xs mr-2">Booked {cad(salesBooked)}</span>
                  <span className="text-green-400 font-bold">Projected Profit {cad(projectedProfit)}</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Flagged notes + expanded response plans — rendered full-width below the
            scrollable table so long text never gets crushed to column width on mobile */}
        {JOBS.filter(job => job.blockNote || expandedJob === job.id).map(job => {
          const isExpanded = expandedJob === job.id
          const plan = JOB_ACTIONS[job.id]
          const remainingCost = job.projectedFinal - job.costToDate - job.committed
          return (
            <div key={job.id} className="border-t border-slate-800">
              {job.blockNote && !isExpanded && (
                <div className="px-4 sm:px-5 py-2 text-amber-500/80 text-xs">
                  ⚑ {job.id} — {job.blockNote}
                </div>
              )}
              {isExpanded && plan && (
                <div className="bg-slate-950/50 px-4 sm:px-5 py-4">
                  <div className="text-slate-500 text-xs mb-3">{job.id} — {job.name}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                    <div className="rounded border border-slate-800 bg-slate-900 px-3 py-2">
                      <div className="text-slate-600 text-xs uppercase tracking-widest">Cost to Date</div>
                      <div className="text-white text-lg font-bold tabular-nums">{cad(job.costToDate)}</div>
                    </div>
                    <div className="rounded border border-slate-800 bg-slate-900 px-3 py-2">
                      <div className="text-slate-600 text-xs uppercase tracking-widest">Committed (PO/subs)</div>
                      <div className="text-white text-lg font-bold tabular-nums">{cad(job.committed)}</div>
                    </div>
                    <div className="rounded border border-slate-800 bg-slate-900 px-3 py-2">
                      <div className="text-slate-600 text-xs uppercase tracking-widest">Remaining to Complete</div>
                      <div className="text-white text-lg font-bold tabular-nums">{cad(remainingCost)}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-400 text-xs uppercase tracking-widest font-bold">⚡ Active Response Plan</span>
                  </div>
                  <div className="text-slate-400 text-xs mb-4">{plan.summary}</div>
                  <div className="space-y-2.5">
                    {plan.items.map((it, i) => (
                      <div key={i} className="flex flex-wrap sm:flex-nowrap items-center gap-x-3 gap-y-1">
                        {it.done ? (
                          <span className="w-5 h-5 rounded-full bg-green-500/15 border border-green-600/40 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          </span>
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center flex-shrink-0 text-slate-500 text-xs">→</span>
                        )}
                        <span className="text-green-300 text-xs font-semibold sm:w-28 flex-shrink-0">{it.owner}</span>
                        <span className="text-slate-200 text-sm flex-1 min-w-[60%] sm:min-w-0">{it.text}</span>
                        <span className={`text-xs flex-shrink-0 font-semibold ${it.done ? 'text-green-400' : 'text-amber-400'}`}>
                          {it.done ? 'done' : 'pending'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
