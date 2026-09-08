'use client'

import { useState } from 'react'
import './contracting.css'
import Sidebar from './components/Sidebar'
import JobCostCommand from './components/JobCostCommand'
import CostOverrunAlerts from './components/CostOverrunAlerts'
import MilestonePayments from './components/MilestonePayments'
import CrewSiteCommand from './components/CrewSiteCommand'

// Pre-seeded: crew on JOB-2603 has been on standby ~52 min when the demo
// loads — a rotted subfloor was found mid-tear-out. Keeps the standby-cost
// counter already burning and the auto change-order already in flight on
// first look.
const INITIAL_OVERRUN_EVENTS = [
  {
    id: 'OV-001',
    jobId: 'JOB-2603',
    category: 'Structural / Unforeseen Condition',
    description: 'Rotted subfloor + joist found behind tub surround — not in original scope',
    amount: 4300,
    idleCrew: 2,
    reportedBy: 'M. Reyes (Lead Carpenter)',
    timestamp: Date.now() - 52 * 60 * 1000,
    status: 'awaiting client approval',
  },
]

export default function Dashboard() {
  const [view, setView] = useState('command')
  const [overrunEvents, setOverrunEvents] = useState(INITIAL_OVERRUN_EVENTS)

  const addOverrunEvent = (event) => {
    setOverrunEvents(prev => [
      ...prev,
      {
        ...event,
        id: `OV-${String(prev.length + 1).padStart(3, '0')}`,
        timestamp: Date.now(),
        status: 'awaiting client approval',
      },
    ])
  }

  const approveOverrun = (id) => {
    setOverrunEvents(prev => prev.map(e => e.id === id ? { ...e, status: 'approved — applied to invoice' } : e))
  }

  return (
    <div className="contracting-root flex flex-col md:flex-row md:h-screen bg-slate-950 text-slate-100 md:overflow-hidden">
      <Sidebar view={view} setView={setView} overrunEvents={overrunEvents} />
      <main className="flex-1 md:overflow-y-auto min-w-0">
        {view === 'command'    && <JobCostCommand overrunEvents={overrunEvents} approveOverrun={approveOverrun} />}
        {view === 'overrun'    && <CostOverrunAlerts overrunEvents={overrunEvents} onSubmit={addOverrunEvent} approveOverrun={approveOverrun} setView={setView} />}
        {view === 'milestones' && <MilestonePayments />}
        {view === 'crew'       && <CrewSiteCommand />}
      </main>
    </div>
  )
}
