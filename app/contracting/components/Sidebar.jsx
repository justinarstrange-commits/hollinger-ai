'use client'

import { useEffect, useState } from 'react'

// ── Icons (inline SVG — no extra dep) ──────────────────────────
const IconChart = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504
         1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125
         1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125
         1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0
         .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0
         1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125
         1.125-1.125h2.25C20.496 3 21 3.504 21
         4.125v15.75c0 .621-.504 1.125-1.125
         1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
)

const IconAlert = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18
         0Zm-8.25 3.375h.008v.008h-.008v-.008Z" />
  </svg>
)

const IconCash = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75
         3h15a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5h-15A1.5
         1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z" />
  </svg>
)

const IconHelmet = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0
         4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15
         19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331
         0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1
         11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375
         0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625
         2.625 0 0 1 5.25 0Z" />
  </svg>
)

const NAV = [
  { id: 'command',    label: 'Job Cost Command',  Icon: IconChart  },
  { id: 'overrun',    label: 'Cost Overrun Alerts', Icon: IconAlert  },
  { id: 'milestones', label: 'Milestone Payments',  Icon: IconCash   },
  { id: 'crew',       label: 'Crew & Site',         Icon: IconHelmet },
]

function StatusDot({ label, status }) {
  const dot = {
    ok:   'bg-green-500',
    warn: 'bg-amber-500 animate-pulse',
    err:  'bg-red-500 animate-pulse',
  }[status]
  return (
    <div className="flex items-center gap-2">
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
      <span className="text-xs text-slate-500">{label}</span>
    </div>
  )
}

function NavButton({ id, label, Icon, active, alerted, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-5 py-3 text-left text-sm transition-all
        border-l-2 relative
        ${active
          ? 'bg-slate-800 text-white border-green-500'
          : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200 border-transparent'
        }
      `}
    >
      <span className={active ? 'text-green-400' : 'text-slate-600'}>
        <Icon />
      </span>
      <span>{label}</span>

      {alerted && (
        <span className="ml-auto relative flex h-2 w-2">
          <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>
      )}
    </button>
  )
}

export default function Sidebar({ view, setView, overrunEvents }) {
  const [time, setTime] = useState(new Date())
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const hasOverrun = overrunEvents.some(e => e.status === 'awaiting client approval')
  const currentLabel = NAV.find(n => n.id === view)?.label

  const select = (id) => {
    setView(id)
    setMenuOpen(false)
  }

  return (
    <>
      {/* ── Mobile top bar ── */}
      <header className="md:hidden sticky top-0 z-30 flex items-center justify-between gap-3 px-4 py-2.5 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="bg-white rounded px-2 py-1.5 flex-shrink-0">
            <img src="/craftsmen-logo.png" alt="Craftsmen Contracting" style={{ width: '84px', display: 'block' }} />
          </div>
          <span className="text-slate-300 text-sm font-semibold truncate">{currentLabel}</span>
        </div>
        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
          className="relative flex-shrink-0 w-9 h-9 flex items-center justify-center rounded border border-slate-700 text-slate-300"
        >
          {hasOverrun && !menuOpen && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
          )}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18 18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            }
          </svg>
        </button>
      </header>

      {/* ── Mobile slide-down menu ── */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-20 bg-slate-950 overflow-y-auto pt-[57px]">
          <nav className="py-2 border-b border-slate-800">
            {NAV.map(({ id, label, Icon }) => (
              <NavButton
                key={id}
                id={id}
                label={label}
                Icon={Icon}
                active={view === id}
                alerted={id === 'overrun' && hasOverrun}
                onClick={() => select(id)}
              />
            ))}
          </nav>
          <div className="px-5 py-4 border-b border-slate-800">
            <div className="text-slate-600 text-xs uppercase tracking-widest mb-1">System Time</div>
            <div className="text-green-400 text-2xl font-bold tabular-nums tracking-tight">
              {time.toLocaleTimeString('en-CA', { hour12: false })}
            </div>
            <div className="text-slate-500 text-xs mt-0.5">
              {time.toLocaleDateString('en-CA', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="text-slate-600 text-xs mt-1">8 ACTIVE JOBS · PORT MOODY / TRI-CITIES</div>
          </div>
          <div className="px-5 py-4 space-y-2">
            <div className="text-slate-600 text-xs uppercase tracking-widest mb-3">System Health</div>
            <StatusDot label="Estimate Sync"     status="ok" />
            <StatusDot label="Site Check-Ins"    status="ok" />
            <StatusDot label="Supplier Feed"     status="ok" />
            <StatusDot label="Payment Gateway"   status={hasOverrun ? 'warn' : 'ok'} />
          </div>
        </div>
      )}

      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:flex md:flex-col w-56 flex-shrink-0 bg-slate-900 border-r border-slate-800 select-none">

        {/* Brand */}
        <div className="px-4 pt-4 pb-4 border-b border-slate-800">
          <div className="bg-white rounded-md px-3 py-2.5 inline-flex">
            <img
              src="/craftsmen-logo.png"
              alt="Craftsmen Contracting"
              style={{ width: '150px', display: 'block' }}
            />
          </div>
          <div className="text-slate-600 text-xs mt-2.5 uppercase tracking-widest">Job Cost OS v1.0</div>
        </div>

        {/* Clock */}
        <div className="px-5 py-4 border-b border-slate-800">
          <div className="text-slate-600 text-xs uppercase tracking-widest mb-1">System Time</div>
          <div className="text-green-400 text-2xl font-bold tabular-nums tracking-tight">
            {time.toLocaleTimeString('en-CA', { hour12: false })}
          </div>
          <div className="text-slate-500 text-xs mt-0.5">
            {time.toLocaleDateString('en-CA', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="text-slate-600 text-xs mt-1">8 ACTIVE JOBS · PORT MOODY / TRI-CITIES</div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-2">
          {NAV.map(({ id, label, Icon }) => (
            <NavButton
              key={id}
              id={id}
              label={label}
              Icon={Icon}
              active={view === id}
              alerted={id === 'overrun' && hasOverrun}
              onClick={() => setView(id)}
            />
          ))}
        </nav>

        {/* System health */}
        <div className="px-5 py-4 border-t border-slate-800 space-y-2">
          <div className="text-slate-600 text-xs uppercase tracking-widest mb-3">System Health</div>
          <StatusDot label="Estimate Sync"     status="ok" />
          <StatusDot label="Site Check-Ins"    status="ok" />
          <StatusDot label="Supplier Feed"     status="ok" />
          <StatusDot label="Payment Gateway"   status={hasOverrun ? 'warn' : 'ok'} />
        </div>

      </aside>
    </>
  )
}
