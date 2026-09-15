import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ERP vs AI Integration",
  description:
    "See how AI-powered workflow integration compares to traditional ERP systems like JobBoss2, ProShop, and Global Shop Solutions.",
};

const tableRows = [
  {
    category: "Time to deployment",
    erp: "6 – 18 months",
    ai: "3 – 5 weeks",
    winner: "ai",
  },
  {
    category: "Staff training required",
    erp: "3 – 6 months, billed separately",
    ai: "Built for your team from day one",
    winner: "ai",
  },
  {
    category: "Annual cost (50+ users)",
    erp: "$60K – $240K in licensing alone",
    ai: "Scoped to your operation",
    winner: "ai",
  },
  {
    category: "Adapts as you grow",
    erp: "You adapt to the software",
    ai: "System adapts to you",
    winner: "ai",
  },
  {
    category: "Quoting accuracy",
    erp: "Manual estimates, stale pricing",
    ai: "Live pricing + your actual job history",
    winner: "ai",
  },
  {
    category: "Gets smarter over time",
    erp: "No — same system year after year",
    ai: "Yes — every job improves it",
    winner: "ai",
  },
  {
    category: "Roadmap control",
    erp: "Vendor's release schedule",
    ai: "Your priorities, your timeline",
    winner: "ai",
  },
  {
    category: "Support after go-live",
    erp: "Ticket queue and training videos",
    ai: "Same team that built it",
    winner: "ai",
  },
  {
    category: "Works with existing systems",
    erp: "Replaces — requires data migration",
    ai: "Integrates — no migration needed",
    winner: "ai",
  },
];

const scenario = [
  {
    step: "01",
    label: "Material pricing",
    erp: "Estimator pulls from a supplier list that may be 2–3 weeks out of date.",
    ai: "System connects to live supplier pricing. Every quote reflects today's actual cost.",
  },
  {
    step: "02",
    label: "Labour calculation",
    erp: "Based on experience and intuition. Varies by who is quoting.",
    ai: "Calculated from your actual historical job data. Consistent every time.",
  },
  {
    step: "03",
    label: "Time to produce quote",
    erp: "2 – 4 hours for a complex job. Your best estimator, tied up.",
    ai: "Minutes. Your estimator reviews and approves rather than builds from scratch.",
  },
  {
    step: "04",
    label: "Margin outcome",
    erp: "Find out if you priced it right when the job closes — weeks later.",
    ai: "Margin flagged before the quote goes out. Adjust before you commit.",
  },
  {
    step: "05",
    label: "What happens next time",
    erp: "Same process. System learned nothing.",
    ai: "System incorporates the job data. Next similar quote is more accurate.",
  },
];

const complaints = [
  {
    system: "JobBoss2",
    quote:
      "$10K in initial costs turned into well over $40K — purchasing and scheduling still not working.",
  },
  {
    system: "ProShop",
    quote:
      "Expensive and not very user-friendly. When you ask questions you get referred to long training videos.",
  },
  {
    system: "Global Shop",
    quote:
      "They prioritize acquiring new customers over supporting existing ones.",
  },
];

export default function ComparePage() {
  return (
    <div className="overflow-x-hidden bg-[#0a0a0a] text-white">
      {/* Nav */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Hollinger AI"
              width={148}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
          <Link
            href="/diagnose"
            className="rounded-sm bg-blue-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500"
          >
            Get a Quote
          </Link>
        </div>
      </header>

      <main className="pt-20">

        {/* Hero */}
        <section className="border-b border-zinc-800 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              The Honest Comparison
            </p>
            <h1 className="mb-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Yesterday&apos;s solution.
              <br />
              <span className="text-zinc-500">Or a system that grows with you.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
              ERP systems were built to organize where you are. AI integration is built to move with where you&apos;re going. The difference compounds every quarter.
            </p>
          </div>
        </section>

        {/* Split Hero Cards */}
        <section className="border-b border-zinc-800 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-2">

              {/* ERP Side */}
              <div className="bg-zinc-900/60 p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Traditional ERP
                </p>
                <p className="mb-8 text-2xl font-semibold text-zinc-400">
                  JobBoss2 · ProShop · Global Shop
                </p>
                <ul className="space-y-4">
                  {[
                    "Records what happened",
                    "You adapt to the software",
                    "6–18 month implementation",
                    "Expensive training programs",
                    "Stale pricing and manual estimates",
                    "Same system in year five as year one",
                    "Support disappears after the sale",
                    "Roadmap controlled by the vendor",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                      <span className="text-base text-zinc-500">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 border-t border-zinc-800 pt-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                    Built for the 1990s. Updated since. Unchanged in what matters.
                  </p>
                </div>
              </div>

              {/* AI Side */}
              <div className="bg-[#0a0a0a] p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                  Hollinger AI Integration
                </p>
                <p className="mb-8 text-2xl font-semibold text-white">
                  Built around your operation
                </p>
                <ul className="space-y-4">
                  {[
                    "Learns from what happens — gets smarter every job",
                    "System adapts to how you work",
                    "In production in 3–5 weeks",
                    "Your team runs it from day one",
                    "Live pricing connected to real supplier data",
                    "More accurate in year five than year one",
                    "Same team that built it stays involved",
                    "Your roadmap. Your priorities.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span className="text-base text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 border-t border-zinc-800 pt-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                    Built for where your business is going.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="border-b border-zinc-800 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              Head to Head
            </p>
            <h2 className="mb-16 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              The numbers side by side.
            </h2>

            <div className="overflow-hidden border border-zinc-800">
              {/* Header */}
              <div className="grid grid-cols-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-500" />
                <div className="border-l border-zinc-800 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Traditional ERP
                </div>
                <div className="border-l border-zinc-800 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-blue-500">
                  Hollinger AI
                </div>
              </div>

              {tableRows.map((row, i) => (
                <div
                  key={row.category}
                  className={`grid grid-cols-3 border-b border-zinc-800 last:border-0 ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-zinc-900/20"}`}
                >
                  <div className="px-6 py-5 text-sm font-semibold text-white">
                    {row.category}
                  </div>
                  <div className="border-l border-zinc-800 px-6 py-5 text-sm text-zinc-500">
                    {row.erp}
                  </div>
                  <div className="border-l border-zinc-800 px-6 py-5 text-sm font-medium text-blue-400">
                    {row.ai}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real World Scenario */}
        <section className="border-b border-zinc-800 bg-zinc-900/20 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              Real World
            </p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Quoting the same job. Two very different outcomes.
            </h2>
            <p className="mb-16 max-w-2xl text-base leading-relaxed text-zinc-400">
              Walk through what actually happens when your estimator sits down to quote a complex fabrication job — with an ERP system vs. an AI-integrated system.
            </p>

            <div className="space-y-px border border-zinc-800">
              {/* Column headers */}
              <div className="grid grid-cols-[80px_1fr_1fr] border-b border-zinc-800 bg-zinc-900/50">
                <div className="px-4 py-4" />
                <div className="border-l border-zinc-800 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  ERP System
                </div>
                <div className="border-l border-zinc-800 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-blue-500">
                  Hollinger AI
                </div>
              </div>

              {scenario.map((s, i) => (
                <div
                  key={s.step}
                  className={`grid grid-cols-[80px_1fr_1fr] border-b border-zinc-800 last:border-0 ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-zinc-900/20"}`}
                >
                  <div className="flex flex-col justify-center px-4 py-6">
                    <p className="text-2xl font-semibold text-zinc-800">{s.step}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-600">{s.label}</p>
                  </div>
                  <div className="border-l border-zinc-800 px-6 py-6">
                    <p className="text-sm leading-relaxed text-zinc-500">{s.erp}</p>
                  </div>
                  <div className="border-l border-zinc-800 px-6 py-6">
                    <p className="text-sm leading-relaxed text-zinc-300">{s.ai}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Gap Visual */}
        <section className="border-b border-zinc-800 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              The Growth Gap
            </p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              The longer you wait, the wider it gets.
            </h2>
            <p className="mb-16 max-w-2xl text-base leading-relaxed text-zinc-400">
              Every quarter a competitor runs on AI-assisted quoting while you run on manual estimates is a quarter they are winning jobs at margin that you are losing — or winning at a loss.
            </p>

            <div className="grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-3">
              {[
                {
                  year: "Year 1",
                  erp: "Still in implementation. Staff in training. No production value yet.",
                  ai: "In production by week 5. Quoting faster. Margin improving.",
                },
                {
                  year: "Year 2",
                  erp: "System finally stable. Team adapted. Same accuracy as before.",
                  ai: "Two years of job data improving every estimate. Competitors wondering how you're winning.",
                },
                {
                  year: "Year 5",
                  erp: "Waiting on vendor roadmap for features you needed in year two.",
                  ai: "System is five years smarter than the day it was built. Built around your growth, not a product catalogue.",
                },
              ].map((item) => (
                <div key={item.year} className="bg-[#0a0a0a] p-10">
                  <p className="mb-6 text-4xl font-semibold text-zinc-800">{item.year}</p>
                  <div className="mb-6 border-l-2 border-zinc-700 pl-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-600">ERP</p>
                    <p className="text-sm leading-relaxed text-zinc-500">{item.erp}</p>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-600">AI</p>
                    <p className="text-sm leading-relaxed text-zinc-300">{item.ai}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Complaints */}
        <section className="border-b border-zinc-800 bg-zinc-900/20 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              From Their Own Customers
            </p>
            <h2 className="mb-16 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Don&apos;t take our word for it.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {complaints.map((c) => (
                <div key={c.system} className="border border-zinc-800 bg-[#0a0a0a] p-8">
                  <p className="mb-6 text-4xl font-semibold leading-none text-zinc-700">&ldquo;</p>
                  <p className="flex-1 text-base leading-relaxed text-zinc-400">{c.quote}</p>
                  <div className="mt-8 border-t border-zinc-800 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                      Verified {c.system} User
                    </p>
                    <p className="text-xs text-zinc-700">Source: Capterra / G2</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              Ready to Move Forward
            </p>
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Your competitors are not waiting.
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-zinc-400">
              Tell us what you&apos;re trying to fix. No pitch deck. No hard sell. A direct conversation about your operation and what AI can actually do for it — in weeks, not years.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/diagnose"
                className="rounded-sm bg-blue-600 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500"
              >
                Get Your Assessment
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-medium uppercase tracking-wider text-zinc-400 transition-colors hover:text-white"
              >
                Talk to Us Directly →
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Hollinger AI"
              width={120}
              height={32}
              className="object-contain"
            />
          </Link>
          <p className="text-xs text-zinc-600">
            © 2026 Hollinger AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
