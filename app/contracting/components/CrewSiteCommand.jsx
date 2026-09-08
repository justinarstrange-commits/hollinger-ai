'use client'

import { useState } from 'react'

const STAFF = [
  { name: 'Quinn Halvorsen',  role: 'Owner / Foreman',       jobId: 'JOB-2606', checkIn: '6:52 AM', status: 'ON SITE' },
  { name: 'Bonnie Castellano',role: 'Designer / PM',          jobId: 'JOB-2607', checkIn: '8:15 AM', status: 'ON SITE' },
  { name: 'M. Reyes',         role: 'Lead Carpenter',         jobId: 'JOB-2603', checkIn: '7:01 AM', status: 'ON SITE' },
  { name: 'T. Okonkwo',       role: 'Finishing Carpenter',    jobId: 'JOB-2604', checkIn: '7:08 AM', status: 'ON SITE' },
  { name: 'D. Singh',         role: 'Tile Setter',            jobId: 'JOB-2601', checkIn: '7:14 AM', status: 'ON SITE' },
  { name: 'K. Wozniak',       role: 'Flooring Installer',     jobId: 'JOB-2605', checkIn: '6:59 AM', status: 'ON SITE' },
  { name: 'R. Marsh',         role: 'Site Labourer',          jobId: 'JOB-2606', checkIn: '7:05 AM', status: 'ON SITE' },
  { name: 'J. Park',          role: 'Site Labourer',          jobId: 'JOB-2608', checkIn: null,       status: 'NOT CHECKED IN' },
  { name: 'C. Beaumont',      role: 'Painter',                jobId: 'JOB-2602', checkIn: '7:22 AM', status: 'ON SITE' },
  { name: 'A. Delgado',       role: 'Apprentice Carpenter',   jobId: 'JOB-2601', checkIn: '7:14 AM', status: 'ON SITE' },
]

const JOB_INFO = {
  'JOB-2601': { name: 'Eagle Ridge Ensuite Remodel',     address: 'Coquitlam' },
  'JOB-2602': { name: 'Heritage Mountain Kitchen Reno',  address: 'Port Moody' },
  'JOB-2603': { name: 'Westwood Plateau Ensuite',        address: 'Coquitlam' },
  'JOB-2604': { name: 'Suter Brook Kitchen + Floors',    address: 'Port Moody' },
  'JOB-2605': { name: 'Maple Creek Whole-Home Flooring', address: 'Port Coquitlam' },
  'JOB-2606': { name: 'Newport Village Retail Buildout', address: 'Port Moody' },
  'JOB-2607': { name: 'Ioco Road Custom Kitchen',        address: 'Port Moody' },
  'JOB-2608': { name: 'Brewers Row Office TI',           address: 'Port Moody' },
}

const INVENTORY = [
  {
    jobId: 'JOB-2601',
    items: [
      { name: 'Charcoal grout (25kg bag)', need: 3, onHand: 1, unit: 'bags' },
      { name: 'Niche shelf bracket kit',    need: 1, onHand: 1, unit: 'kit' },
    ],
  },
  {
    jobId: 'JOB-2607',
    items: [
      { name: 'Brushed brass cabinet pulls', need: 24, onHand: 12, unit: 'pcs' },
      { name: 'Quartz counter template',      need: 1,  onHand: 1,  unit: 'confirmed' },
    ],
  },
  {
    jobId: 'JOB-2606',
    items: [
      { name: '3/4" EMT conduit (10ft)', need: 40, onHand: 40, unit: 'sticks' },
      { name: '20A breaker, 2-pole',     need: 12, onHand: 6,  unit: 'pcs' },
    ],
  },
  {
    jobId: 'JOB-2605',
    items: [
      { name: 'White oak engineered plank', need: 18, onHand: 18, unit: 'boxes' },
    ],
  },
]

function KPITile({ label, value, sub, accent, pulse }) {
  const colors = {
    slate: { bar: 'bg-slate-600', val: 'text-white' },
    green: { bar: 'bg-green-500', val: 'text-green-400' },
    red:   { bar: 'bg-red-500',   val: 'text-red-400' },
    amber: { bar: 'bg-amber-500', val: 'text-amber-400' },
  }
  const c = colors[accent] || colors.slate
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 pl-5 relative overflow-hidden">
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${c.bar}`} />
      {pulse && (
        <span className="absolute top-3 right-3 flex h-2 w-2">
          <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>
      )}
      <div className="text-slate-500 text-xs uppercase tracking-widest mb-2">{label}</div>
      <div className={`text-4xl font-bold tabular-nums ${c.val}`}>{value}</div>
      <div className="text-xs mt-1 font-medium text-slate-500">{sub}</div>
    </div>
  )
}

export default function CrewSiteCommand() {
  const [reordered, setReordered] = useState(() => new Set())

  const onSite      = STAFF.filter(s => s.status === 'ON SITE').length
  const notCheckedIn = STAFF.filter(s => s.status === 'NOT CHECKED IN')
  const jobsWithGaps = INVENTORY.filter(inv => inv.items.some(i => i.onHand < i.need)).length

  const reorderKey = (jobId, itemName) => `${jobId}::${itemName}`
  const sendReorder = (jobId, itemName) => setReordered(prev => new Set(prev).add(reorderKey(jobId, itemName)))

  return (
    <div className="p-4 sm:p-6 space-y-5 min-h-full">

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h1 className="text-white text-xl font-bold tracking-tight">CREW &amp; SITE COMMAND</h1>
          <p className="text-slate-500 text-xs mt-0.5">
            CRAFTSMEN CONTRACTING &nbsp;·&nbsp; 10 STAFF &nbsp;·&nbsp; 8 ACTIVE SITES &nbsp;·&nbsp; LIVE CHECK-IN
          </p>
        </div>
      </div>

      {notCheckedIn.length > 0 && (
        <div className="rounded-lg bg-slate-900 border border-slate-800 border-l-4 border-l-red-500 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <div>
              <div className="text-white text-sm font-bold uppercase tracking-wide">
                {notCheckedIn.length} Not Checked In — Past Start Time
              </div>
              <div className="text-slate-500 text-xs mt-0.5">
                {notCheckedIn.map(s => `${s.name} (${s.jobId})`).join(', ')} — Quinn texted automatically
              </div>
            </div>
          </div>
          <span className="text-green-400 text-xs">✓ SMS sent to Quinn 4 min ago</span>
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <KPITile label="Crew On Site" value={`${onSite}/${STAFF.length}`} sub="confirmed by geofenced check-in" accent="green" />
        <KPITile
          label="Not Checked In"
          value={notCheckedIn.length}
          sub={notCheckedIn.length > 0 ? 'owner notified by text' : 'all accounted for'}
          accent={notCheckedIn.length > 0 ? 'red' : 'green'}
          pulse={notCheckedIn.length > 0}
        />
        <KPITile label="Jobs With Inventory Gaps" value={jobsWithGaps} sub="short on at least one material" accent="amber" />
        <KPITile label="Auto-Reorders Sent" value={reordered.size} sub="to supplier, no phone call made" accent="green" />
      </div>

      {/* Roster */}
      <div className="rounded-lg border border-slate-800 bg-slate-900 overflow-hidden">
        <div className="px-4 sm:px-5 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <span className="text-white text-sm font-bold">TODAY'S SITE ROSTER</span>
          <span className="text-slate-600 text-xs">GPS CHECK-IN · UPDATED LIVE</span>
        </div>
        <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-slate-800/80 text-slate-500 text-xs">
              <th className="text-left px-5 py-2.5 font-normal">CREW</th>
              <th className="text-left px-4 py-2.5 font-normal">ROLE</th>
              <th className="text-left px-4 py-2.5 font-normal">ASSIGNED JOB</th>
              <th className="text-left px-4 py-2.5 font-normal">SITE</th>
              <th className="text-right px-5 py-2.5 font-normal">CHECK-IN</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/40">
            {STAFF.map(s => {
              const flagged = s.status === 'NOT CHECKED IN'
              return (
                <tr key={s.name} className={`text-sm hover:bg-slate-800/40 ${flagged ? 'bg-red-950/20' : ''}`}>
                  <td className="px-5 py-3 align-middle">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${flagged ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                      <span className="text-white font-semibold">{s.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle text-slate-400">{s.role}</td>
                  <td className="px-4 py-3 align-middle">
                    <span className="text-slate-200 font-mono text-xs">{s.jobId}</span>
                    <span className="text-slate-600 text-xs ml-2">{JOB_INFO[s.jobId].name}</span>
                  </td>
                  <td className="px-4 py-3 align-middle text-slate-500 text-xs uppercase tracking-wide">{JOB_INFO[s.jobId].address}</td>
                  <td className="px-5 py-3 align-middle text-right">
                    {flagged ? (
                      <span className="text-red-400 text-xs font-bold">NOT CHECKED IN</span>
                    ) : (
                      <span className="text-slate-300 text-xs tabular-nums">{s.checkIn}</span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>

      {/* Inventory */}
      <div className="rounded-lg border border-slate-800 bg-slate-900 overflow-hidden">
        <div className="px-4 sm:px-5 py-3 border-b border-slate-800">
          <span className="text-white text-sm font-bold">SITE INVENTORY — NEEDED VS ON HAND</span>
        </div>
        <div className="divide-y divide-slate-800/40">
          {INVENTORY.map(inv => (
            <div key={inv.jobId} className="px-4 sm:px-5 py-4">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-white text-sm font-bold font-mono">{inv.jobId}</span>
                <span className="text-slate-500 text-xs">{JOB_INFO[inv.jobId].name}</span>
              </div>
              <div className="space-y-2">
                {inv.items.map(item => {
                  const short = item.onHand < item.need
                  const key = reorderKey(inv.jobId, item.name)
                  const isReordered = reordered.has(key)
                  return (
                    <div key={item.name} className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
                      <span className="text-slate-300 flex-1 min-w-[140px]">{item.name}</span>
                      <span className={`tabular-nums text-xs ${short ? 'text-red-400 font-bold' : 'text-slate-500'}`}>
                        {item.onHand} / {item.need} {item.unit}
                      </span>
                      {short && (
                        isReordered ? (
                          <span className="text-green-400 text-xs">✓ Auto-reordered — ETA tomorrow AM</span>
                        ) : (
                          <button
                            onClick={() => sendReorder(inv.jobId, item.name)}
                            className="text-xs px-2 py-1 rounded bg-amber-700/30 border border-amber-700 text-amber-400 hover:bg-amber-700/50 transition-colors"
                          >
                            ⚠ Short {item.need - item.onHand} — AI: Reorder Now
                          </button>
                        )
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
