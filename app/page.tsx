import type { Metadata } from "next";
import Image from "next/image";
import MobileNav from "./components/MobileNav";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Hollinger AI | Applied AI Performance Systems",
  description:
    "Hollinger AI builds custom AI operations software for industrial and trades businesses in British Columbia. Fixed fee builds, delivered in weeks, owned by you.",
  keywords: [
    "AI operations software BC",
    "custom software Vancouver",
    "QC dashboard software",
    "workflow automation BC",
    "Hollinger AI",
    "Justin Strange",
  ],
  openGraph: {
    title: "Hollinger AI | Applied AI Performance Systems",
    description:
      "Custom AI operations software for industrial and trades businesses in BC. Fixed fee, delivered in weeks, you own the code.",
    url: "https://hollingerai.online",
    siteName: "Hollinger AI",
    images: [{ url: "/hero.png", width: 1978, height: 1114, alt: "Hollinger AI" }],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hollinger AI",
    description: "Custom AI operations software for industrial and trades businesses. Fixed fee, delivered in weeks.",
    images: ["/hero.png"],
  },
};

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const buildItems = [
  {
    title: "Cross referencing",
    description:
      "Job numbers, drawing revisions, weld maps, inspection records, and certifications checked against each other so a mismatch surfaces before the part ships.",
  },
  {
    title: "Safety gating",
    description:
      "A job cannot advance past a hold point until the required inspection, sign off, or document is on file. Not a warning. The next step does not exist until the record does.",
  },
  {
    title: "OCR digitization",
    description:
      "Paper travellers, mill certs, and inspection sheets scanned and turned into searchable records tied to the job.",
  },
  {
    title: "Dashboards",
    description:
      "What is in QC, what is blocked, what is overdue. Visible to the shop floor and the office at the same time.",
  },
];

const moreWork = [
  {
    client: "Craftsmen Contracting",
    sector: "Renovation contractor",
    logo: "/craftsmen-logo.png",
    summary:
      "A job management system for a renovation business. Estimates and phases, a day sheet crews fill in from a phone, receipts, change orders, and a client review page. Built from the office manager's own requirements, one email at a time.",
    items: ["Job list and intake", "Estimate and phase builder", "Day sheet and receipts capture", "Change orders with client review"],
  },
  {
    client: "Cass MacLeod Real Estate Team",
    sector: "Real estate",
    logo: "/cass-headshot.jpg",
    summary:
      "A command centre for a Maple Ridge realtor: lead generation, Google presence, and social media management in one place, so the agent spends the day with clients instead of dashboards.",
    items: ["Lead capture and qualification", "Google Business presence", "Social media scheduling", "Single operator dashboard"],
  },
  {
    client: "Structural Fabrication Shop",
    sector: "Fabrication & coatings",
    logo: "/logo.png",
    summary:
      "A ten item QC system for a structural steel fabrication shop in the Lower Mainland: digitized inspection forms, a welder qualification matcher, a transmittal generator, and a live QC dashboard. Delivered on a fixed fee work order and in daily use.",
    items: ["Digitized QC inspection forms with signed PDF output", "Welder qualification matcher", "Transmittal generator and document register", "Scan to PDF for travellers and mill certs"],
  },
  {
    client: "Apex Medical Supplies",
    sector: "Medical supplies",
    logo: "/logo.png",
    summary: "Details to follow.",
    items: [],
  },
  {
    client: "Comet Construction",
    sector: "Construction",
    logo: "/logo.png",
    summary: "Details to follow.",
    items: [],
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnostic",
    description:
      "A site visit and a written itemized scope. You see every item and its price before anything is built.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Fixed fee, fixed scope. Changes go through a signed change order with its own price, never a surprise invoice.",
  },
  {
    number: "03",
    title: "Handover",
    description:
      "Code, documentation, and training delivered. You own the system. Support is available under a separate agreement if you want it.",
  },
];

const team = [
  { name: "Justin Strange", role: "Scopes, builds, deploys, and supports every system.", link: "https://justinstrange.site" },
  { name: "Catherine Rhodes", role: "Operations: scheduling, work order tracking, and delivery follow through." },
  { name: "Daniel Park", role: "Engineering: code review, testing, and deployment checks." },
  { name: "Marcus Webb", role: "Process: mapping how the shop works today before anything is built." },
  { name: "Sophia Reyes", role: "Client success: onboarding, training materials, and post delivery check ins." },
  { name: "Ryan Calloway", role: "Strategy: scope structure, phasing, and pricing review." },
];

const faqs = [
  {
    q: "We are not a tech company. Is this for us?",
    a: "Yes. Every client runs a shop, a crew, or a client book, not a software team. The system is built around how your floor already works, and your team runs it without technical staff.",
  },
  {
    q: "How long does a build take?",
    a: "Phase 1 for a recent fabrication client went from signed work order to daily use in [N] weeks. Most first builds land in a similar range. You get a date in the scope, not an estimate.",
  },
  {
    q: "Does it work with our existing software?",
    a: "Usually. The diagnostic covers what you run today and what it can and cannot export. If an integration is not possible, you hear that in the scope, priced as a manual step, not discovered later.",
  },
  {
    q: "What does it cost?",
    a: "Fixed fee, itemized, quoted after the diagnostic. First builds for shops in the 20 to 200 person range have ranged from the mid teens to the mid forty thousands, depending on how many items are in scope. There is no hourly billing and no retainer.",
  },
  {
    q: "Who does the work?",
    a: "Justin Strange builds every system personally. There is no handoff to a junior team.",
  },
  {
    q: "What happens after delivery?",
    a: "You own the code and the data. Ongoing support and further phases are available under separate agreements if you want them. Nothing obliges you to continue.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hollingerai.online/#organization",
      "name": "Hollinger AI",
      "url": "https://hollingerai.online",
      "logo": "https://hollingerai.online/logo.png",
      "image": "https://hollingerai.online/hero.png",
      "description": "Custom AI operations software for industrial and fabrication companies in British Columbia.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "422 Richards Street, #170",
        "addressLocality": "Vancouver",
        "addressRegion": "BC",
        "postalCode": "V6B 2Z4",
        "addressCountry": "CA",
      },
      "founder": {
        "@type": "Person",
        "@id": "https://justinstrange.site/#person",
        "name": "Justin Strange",
        "url": "https://justinstrange.site",
        "jobTitle": "Founder",
        "sameAs": ["https://justinstrange.site", "https://www.hollinger-holdings.com/leadership/"],
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "Hollinger Holdings Corporation",
        "url": "https://www.hollinger-holdings.com",
      },
      "areaServed": ["Vancouver", "Lower Mainland", "Fraser Valley", "British Columbia"],
      "knowsAbout": [
        "Quality control software",
        "Fabrication shop operations",
        "OCR digitization",
        "Safety gating logic",
        "Custom operations software",
      ],
      "sameAs": ["https://www.hollinger-holdings.com", "https://justinstrange.site"],
    },
    {
      "@type": "Person",
      "@id": "https://justinstrange.site/#person",
      "name": "Justin Strange",
      "url": "https://justinstrange.site",
      "jobTitle": "Founder",
      "worksFor": { "@id": "https://hollingerai.online/#organization" },
      "sameAs": ["https://justinstrange.site", "https://www.hollinger-holdings.com/leadership/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://hollingerai.online/#website",
      "url": "https://hollingerai.online",
      "name": "Hollinger AI",
      "publisher": { "@id": "https://hollingerai.online/#organization" },
    },
  ],
};

const navClass =
  "text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-white";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image src="/logo.png" alt="Hollinger AI" width={148} height={40} className="object-contain" priority />
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className={navClass}>
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-sm bg-blue-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500 md:inline-flex"
          >
            Talk to Justin
          </a>
          <MobileNav />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pb-20 pt-32 text-center">
          <Image src="/hero.png" alt="" fill priority className="object-cover object-center" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#0a0a0a]/70" />
          <div className="relative z-10 flex flex-col items-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">HOLLINGER AI</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Applied AI Performance Systems.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Quality control, job tracking, document digitization, and the logic that connects them. Built for your operation, fixed fee, delivered in weeks. You own the code.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#work"
                className="rounded-sm bg-blue-600 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500"
              >
                See our work
              </a>
              <a href="#contact" className="text-sm font-medium uppercase tracking-wider text-zinc-300 transition-colors hover:text-white">
                Talk to Justin
              </a>
            </div>
          </div>
        </section>

        {/* What it is */}
        <section className="border-t border-zinc-800 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">What it is</p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                  The system that sits in the gaps between your ERP, your spreadsheet, and your paper traveller.
                </h2>
              </div>
              <div className="space-y-5 text-base leading-relaxed text-zinc-400">
                <p>
                  Most shops and trades businesses run on paper, spreadsheets, and whatever the ERP will not do. The gaps between those systems are where rework, missed inspections, and late paperwork come from.
                </p>
                <p>
                  Hollinger AI builds the system that closes those gaps, scoped and built for your operation. No account manager, no offshore team, no subscription that holds your data hostage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What a build includes */}
        <section className="border-t border-zinc-800 bg-zinc-900/20 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">What a build typically includes</p>
            <h2 className="mb-16 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              Four things every shop asks for. Scoped to yours.
            </h2>
            <div className="grid gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
              {buildItems.map((item) => (
                <div key={item.title} className="bg-[#0a0a0a] p-10">
                  <h3 className="mb-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-base leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="border-t border-zinc-800 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Work</p>
            <h2 className="mb-16 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              Fixed fee builds, delivered and in daily use.
            </h2>

            <div className="grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-2">
              {moreWork.map((w) => (
                <div key={w.client} className="bg-[#0a0a0a] p-10">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-zinc-900">
                      <Image src={w.logo} alt={w.client} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-600">{w.sector}</p>
                      <h3 className="text-lg font-semibold text-white">{w.client}</h3>
                    </div>
                  </div>
                  <p className="mb-6 text-base leading-relaxed text-zinc-400">{w.summary}</p>
                  <ul className="space-y-2">
                    {w.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-6 border border-zinc-800 bg-[#0a0a0a] p-8 md:flex-row md:items-start">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                <Image src="/cass-headshot.jpg" alt="Cass MacLeod" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <p className="mb-4 text-4xl font-semibold leading-none text-blue-600">&ldquo;</p>
                <p className="flex-1 text-base leading-relaxed text-zinc-300">
                  I wish I would have had access to this years ago. Absolutely unbelievable what adding the AI does for generating leads. It works while I sleep and hands me qualified buyers ready to move. This changes everything.
                </p>
                <div className="mt-6 border-t border-zinc-800 pt-4">
                  <p className="text-sm font-semibold text-white">Cass MacLeod</p>
                  <p className="text-xs text-zinc-500">Cass MacLeod Real Estate Team · Maple Ridge, BC · Royal LePage Wolstencroft Realty</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-t border-zinc-800 bg-zinc-900/20 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">How the engagement works</p>
            <h2 className="mb-16 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              One scope. One fee. One person.
            </h2>
            <div className="grid gap-16 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number}>
                  <p className="mb-4 text-5xl font-semibold text-zinc-800">{step.number}</p>
                  <h3 className="mb-3 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-base leading-relaxed text-zinc-400">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 max-w-2xl border-t border-zinc-800 pt-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">Who this is for</p>
              <p className="text-base leading-relaxed text-zinc-400">
                Shops, contractors, trades, and owner led service businesses in British Columbia that run on paper, spreadsheets, and one person&apos;s memory. If you are a software company looking for a subcontractor, this is not the right fit.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="border-t border-zinc-800 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Team</p>
            <h2 className="mb-16 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              How the work gets done.
            </h2>
            <div className="divide-y divide-zinc-800 border-y border-zinc-800">
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className={`grid gap-2 py-6 md:grid-cols-[220px_1fr] md:gap-10 ${i === 0 ? "bg-zinc-900/30 px-4 md:px-6" : "px-4 md:px-6"}`}
                >
                  <div>
                    <p className="text-base font-semibold text-white">{member.name}</p>
                    {"link" in member && member.link && (
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-xs font-medium uppercase tracking-widest text-zinc-500 transition-colors hover:text-white"
                      >
                        justinstrange.site
                      </a>
                    )}
                  </div>
                  <p className="text-base leading-relaxed text-zinc-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-zinc-800 bg-zinc-900/20 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">About</p>
            <div className="grid items-start gap-16 md:grid-cols-2">
              <div>
                <h2 className="mb-8 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                  Too specific for a product company. Too small for a consultancy.
                </h2>
                <div className="space-y-5 text-base leading-relaxed text-zinc-400">
                  <p>
                    Hollinger AI exists because the software operations businesses actually need is too specific for a product company to build and too small for a consultancy to price sanely. A shop with 60 people does not need an enterprise QMS. It needs the things it does every day to talk to each other, and a hard stop when a step gets missed.
                  </p>
                  <p>
                    <a href="https://justinstrange.site" target="_blank" rel="noopener noreferrer" className="text-zinc-300 underline underline-offset-2 transition-colors hover:text-white">Justin Strange</a>
                    {" "}has been self employed since 2004 and leads every engagement personally, scoping and building each system with a small team handling operations, engineering, and client success.
                  </p>
                  <p>
                    Hollinger AI is a division of Hollinger Holdings Corporation, Vancouver, BC.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image src="/about.png" alt="Hollinger AI" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-zinc-800 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">FAQ</p>
            <h2 className="mb-16 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              Questions shops ask before the first site visit.
            </h2>
            <div className="divide-y divide-zinc-800">
              {faqs.map(({ q, a }) => (
                <div key={q} className="grid gap-6 py-8 md:grid-cols-2 md:gap-16">
                  <p className="text-base font-semibold leading-snug text-white">{q}</p>
                  <p className="text-base leading-relaxed text-zinc-400">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-zinc-800 bg-zinc-900/20 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Contact</p>
                <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                  What is the shop losing time on?
                </h2>
                <p className="mb-10 text-base leading-relaxed text-zinc-400">
                  Justin Strange builds every system personally and takes on a small number of engagements at a time. Tell him what the floor deals with and he will come out and walk it with you.
                </p>
                <ContactForm />
              </div>
              <div className="space-y-8 border-l border-zinc-800 pl-16">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">Address</p>
                  <p className="text-base text-zinc-300">
                    422 Richards Street, #170
                    <br />
                    Vancouver, BC V6B 2Z4
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">Email</p>
                  <a href="mailto:contact@hollingerai.online" className="text-base text-zinc-300 transition-colors hover:text-white">
                    contact@hollingerai.online
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">Response time</p>
                  <p className="text-base text-zinc-300">Within one business day.</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">Service area</p>
                  <p className="text-base text-zinc-300">
                    Fabrication and industrial shops across the Lower Mainland and Fraser Valley. Site visits are part of every diagnostic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <Image src="/logo.png" alt="Hollinger AI" width={130} height={36} className="mb-4 object-contain" />
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                Applied AI Performance Systems
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Custom AI operations software for fabrication and industrial shops.
              </p>
              <a
                href="https://www.hollinger-holdings.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-xs text-zinc-700 transition-colors hover:text-zinc-400"
              >
                A Hollinger Holdings company
              </a>
            </div>

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-500">Navigation</p>
              <ul className="space-y-3">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-zinc-500 transition-colors hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-500">Contact</p>
              <div className="space-y-3">
                <p className="text-sm text-zinc-500">
                  422 Richards Street, #170
                  <br />
                  Vancouver, BC V6B 2Z4
                </p>
                <a href="mailto:contact@hollingerai.online" className="block text-sm text-zinc-500 transition-colors hover:text-white">
                  contact@hollingerai.online
                </a>
                <p className="text-sm text-zinc-500">Response within one business day.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center">
            <p className="text-xs text-zinc-600">© 2026 Hollinger AI. All rights reserved.</p>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-zinc-500">Hollinger AI</p>
              <a
                href="https://www.hollinger-holdings.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs uppercase tracking-widest text-zinc-700 transition-colors hover:text-zinc-400"
              >
                A Hollinger Holdings company
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
