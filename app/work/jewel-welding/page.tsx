import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jewel Welding, Jipsi QC dashboard",
  description:
    "A ten item QC system for a structural steel fabrication shop in the Lower Mainland: cross referencing, hold point gating, OCR of paper travellers, and a live QC dashboard. Fixed fee, delivered by Hollinger AI.",
  openGraph: {
    title: "Jewel Welding, Jipsi QC dashboard | Hollinger AI",
    description:
      "Ten item QC build for a structural steel fabricator. Cross referencing, hold point gating, OCR, live dashboard.",
    url: "https://hollingerai.online/work/jewel-welding",
    siteName: "Hollinger AI",
    images: [{ url: "/results.png", width: 1600, height: 900, alt: "Jipsi QC dashboard" }],
    type: "article",
    locale: "en_CA",
  },
};

// Drawn from the live Jipsi build. Confirm against Work Order HAI-JWF-2026-002 which items are Phase 1 and which are Phase 2.
const phaseOne = [
  "Job master: one record per job carrying drawings, revisions, and every document that references it",
  "Transmittal cover letter generator and a transmittal log that doubles as the document register",
  "Submittal status tracking",
  "Digital QCF-100 cut in, QCF-101 fit up, and QCF-102 welding inspection forms with signed PDF output",
  "QCF-103 bolt up field installation and QCF-104 weld traveller forms with signed PDF output",
  "Welder qualification matcher: the welder assigned must hold a current qualification for the procedure, or the assignment is blocked",
  "Welder continuity tracker so lapsed qualifications surface before a weld, not after",
  "Personnel certifications register and calibration tracker with expiry dates",
  "Weld procedure search across the shop's WPS library",
  "Scan to PDF: paper travellers, mill certs, and inspection sheets digitized, named by job, and filed against the job record",
];

const outcomes = [
  { stat: "5", label: "paper inspection forms replaced with digital forms and signed PDF output" },
  { stat: "0", label: "welder assignments possible without a current qualification on file" },
  { stat: "1", label: "job record that every transmittal, submittal, cert, and scan is filed against" },
  { stat: "2", label: "phases, each on its own fixed fee work order" },
];

// Fill in when Jewel supplies a quote. The block does not render while this is empty.
const clientQuote = { text: "", name: "", title: "" };

export default function JewelWeldingCaseStudy() {
  return (
    <div className="overflow-x-hidden bg-[#0a0a0a] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/">
            <Image src="/logo.png" alt="Hollinger AI" width={148} height={40} className="object-contain" priority />
          </Link>
          <Link href="/#contact" className="rounded-sm bg-blue-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500">
            Talk to Justin
          </Link>
        </div>
      </header>

      <main className="pt-32">
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Work · Case study</p>
            <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Jewel Welding. Jipsi QC dashboard.
            </h1>
            <p className="text-lg text-zinc-400">
              Structural steel fabrication and coatings, Maple Ridge, BC. Phase 1 delivered 2026 and in daily use. Phase 2 in progress.
            </p>
          </div>
        </section>

        <section className="relative h-[420px] w-full overflow-hidden border-y border-zinc-800 bg-zinc-900">
          <Image src="/results.png" alt="Jipsi QC dashboard on a shop monitor" fill className="object-cover object-center" />
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl space-y-16">
            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-white md:text-3xl">The problem</h2>
              <div className="space-y-4 text-base leading-relaxed text-zinc-400">
                <p>
                  Five QC inspection forms lived on paper. Transmittals were assembled by hand. Welder qualifications, continuity, calibration dates, and personnel certifications were tracked in separate places and checked from memory. Nothing in the workflow stopped a welder from being assigned to a procedure he was not current on, and finding the status of any job&apos;s inspections meant walking the floor.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-white md:text-3xl">What was built</h2>
              <p className="mb-6 text-base leading-relaxed text-zinc-400">Phase 1. Ten items on a single fixed fee work order.</p>
              <ol className="divide-y divide-zinc-800 border-y border-zinc-800">
                {phaseOne.map((item, i) => (
                  <li key={i} className="grid grid-cols-[48px_1fr] items-baseline gap-4 py-4">
                    <span className="text-sm font-semibold tabular-nums text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-base text-zinc-300">{item}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-base leading-relaxed text-zinc-400">
                Phase 2 was scoped from the QC Manager&apos;s follow up notes after the system was in daily use. Items include equipment downtime reporting and fleet dispatch with a truck departure checklist.
              </p>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-white md:text-3xl">What changed</h2>
              <div className="grid gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
                {outcomes.map((o) => (
                  <div key={o.label} className="bg-[#0a0a0a] p-8">
                    <p className="text-4xl font-semibold tracking-tight text-white">{o.stat}</p>
                    <p className="mt-2 text-sm leading-snug text-zinc-400">{o.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {clientQuote.text && (
              <div className="border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
                <p className="mb-4 text-4xl font-semibold leading-none text-blue-600">&ldquo;</p>
                <p className="text-lg leading-relaxed text-zinc-200">{clientQuote.text}</p>
                <div className="mt-6 border-t border-zinc-800 pt-4">
                  <p className="text-sm font-semibold text-white">{clientQuote.name}</p>
                  <p className="text-xs text-zinc-500">{clientQuote.title}, Jewel Welding</p>
                </div>
              </div>
            )}

            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-white md:text-3xl">Engagement structure</h2>
              <p className="text-base leading-relaxed text-zinc-400">
                Phase 1 delivered as a fixed fee work order with an itemized scope. Phase 2 scoped and priced separately after Phase 1 was in use. The client owns the code and the data.
              </p>
            </div>

            <div className="border-t border-zinc-800 pt-12">
              <Link
                href="/#contact"
                className="inline-flex rounded-sm bg-blue-600 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500"
              >
                Talk to Justin about your shop
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-600">© 2026 Hollinger AI. All rights reserved.</p>
          <a href="https://www.hollinger-holdings.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-zinc-700 transition-colors hover:text-zinc-400">
            A Hollinger Holdings company
          </a>
        </div>
      </footer>
    </div>
  );
}
