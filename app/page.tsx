import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./components/MobileNav";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Hollinger AI Power Solutions",
  description:
    "AI workflow integration for operations teams that need results. Client-obsessed from day one.",
};

const services = [
  {
    title: "Workflow Automation",
    description:
      "Eliminate the manual overhead killing your team's time. We identify the bottlenecks and automate them — without disrupting what already works.",
  },
  {
    title: "AI Integration",
    description:
      "Connect your existing stack to purpose-built AI. No rebuilds. No migrations that drag for months. Clean, fast, functional.",
  },
  {
    title: "Strategy & Deployment",
    description:
      "From audit to production in weeks, not quarters. We build the roadmap and then we execute it. One team, start to finish.",
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We audit your current workflows and identify where AI creates real ROI — not theoretical upside.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We build the integration plan around your stack, your team, and your timeline.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "We ship. You see results. No six-month handoff. No follow-on contract to make the first one work.",
  },
];

const results = [
  { stat: "3–5 wks", label: "Average time to deployment" },
  { stat: "40%", label: "Average reduction in process time" },
  { stat: "42+", label: "Enterprise clients" },
  { stat: "$12M+", label: "Estimated annual savings delivered" },
];

const team = [
  {
    name: "Justin Strange",
    title: "Founder & Managing Director",
    bio: "Built the firm after two decades simplifying how organizations operate. His focus has always been the same: find where complexity is costing the business and eliminate it. AI is just the most powerful tool he has had to do that with.",
    image: "/team_justin.png",
  },
  {
    name: "Catherine Rhodes",
    title: "Chief Operating Officer",
    bio: "Former operations director at regional firms where every dollar spent had to be justified and every process had to actually work. Joined Hollinger AI to run delivery with that same standard. Clients describe her as the reason engagements finish on time.",
    image: "/team_catherine.png",
  },
  {
    name: "Daniel Park",
    title: "Head of AI Engineering",
    bio: "Led engineering teams at two AI-native startups before joining Hollinger AI. Specializes in connecting large language models to legacy infrastructure without rebuilding what already works.",
    image: "/team_daniel.png",
  },
  {
    name: "Marcus Webb",
    title: "Senior Client Advisor",
    bio: "Brings 25 years of C-suite operations experience across financial services, insurance, and retail. Advises on engagement strategy and serves as senior relationship lead on complex deployments.",
    image: "/team_james.png",
  },
  {
    name: "Sophia Reyes",
    title: "Director of Client Success",
    bio: "Former management consultant who got tired of handing over decks and leaving. She joined a firm that stays until the work is done. Now she makes sure every client can say the same.",
    image: "/team_sophia.png",
  },
  {
    name: "Ryan Calloway",
    title: "Director of Strategy",
    bio: "Operations background in healthcare and professional services. Responsible for making sure every engagement starts with the right problem, not the most interesting one.",
    image: "/team_ryan.png",
  },
];

const testimonials = [
  {
    quote:
      "We went from 40 hours of manual reconciliation per week to under four. Hollinger built it, tested it, and handed it over running. That was eight months ago. It hasn't missed a beat.",
    name: "Rachel Torres",
    title: "VP of Operations",
    company: "Meridian Logistics Group",
  },
  {
    quote:
      "Every AI vendor we spoke to wanted a six-month discovery phase. Hollinger was in production in five weeks. The difference is they came in already knowing what the problem was.",
    name: "Michael Brennan",
    title: "Chief Operating Officer",
    company: "Harwick Capital",
  },
  {
    quote:
      "What I didn't expect was how available they stayed after go-live. Most firms disappear. These people picked up the phone. That matters more than the technology.",
    name: "Yvonne Castillo",
    title: "Director of Clinical Operations",
    company: "Northgate Health Systems",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#0a0a0a] text-white">
      {/* Nav */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image
            src="/logo.png"
            alt="Hollinger AI Power Solutions"
            width={148}
            height={40}
            className="object-contain"
            priority
          />
          <nav className="hidden items-center gap-8 md:flex">
            {[
              { label: "Services", href: "#services" },
              { label: "Process", href: "#how-it-works" },
              { label: "Results", href: "#results" },
              { label: "Team", href: "#team" },
              { label: "About", href: "#about" },
              { label: "Insights", href: "/blog" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) =>
              href.startsWith("/") ? (
                <Link
                  key={label}
                  href={href}
                  className="text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  className="text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
                >
                  {label}
                </a>
              )
            )}
          </nav>
          <Link
            href="/diagnose"
            className="hidden rounded-sm bg-blue-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500 md:inline-flex"
          >
            Get a Quote
          </Link>
          <MobileNav />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
          <Image
            src="/hero.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/65" />
          <div className="relative z-10 flex flex-col items-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              AI Workflow Integration
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              AI that works.
              <br />
              <span className="text-zinc-300">Without the complexity.</span>
            </h1>
            <ul className="mt-8 space-y-3 text-left">
              {[
                "Built around your operation — not a packaged product",
                "Custom-designed and simple for your team to run",
                "Backed by the people who built it, start to finish",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#faq"
                className="rounded-sm bg-blue-600 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500"
              >
                Learn More
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium uppercase tracking-wider text-zinc-300 transition-colors hover:text-white"
              >
                See How It Works →
              </a>
            </div>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
              {[
                "Bespoke to your operation",
                "Ready to run from day one",
                "Selective engagements only",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-blue-500" />
                  <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="services" className="border-t border-zinc-800 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              What We Do
            </p>
            <h2 className="mb-16 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              We build AI that fits your operation.
              <br />
              Not the other way around.
            </h2>
            <div className="grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="bg-[#0a0a0a] p-10">
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="border-t border-zinc-800 bg-zinc-900/20 px-6 py-14">
          <div className="mx-auto max-w-6xl">
            <p className="mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Industries We Serve
            </p>
            <div className="grid grid-cols-2 gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-5 lg:grid-cols-5">
              {[
                "Manufacturing & Production",
                "Industrial Operations",
                "Fabrication & Trades",
                "Logistics & Supply Chain",
                "Construction & Trades",
                "Healthcare & Medical",
                "Hospitality & Food Service",
                "Retail & Distribution",
                "Energy & Utilities",
                "Professional Services",
              ].map((industry) => (
                <div
                  key={industry}
                  className="bg-zinc-900/40 px-6 py-5 text-sm font-medium text-zinc-300"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="border-t border-zinc-800 px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              How It Works
            </p>
            <h2 className="mb-16 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              Three steps. No exceptions.
            </h2>
            <div className="grid gap-16 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number}>
                  <p className="mb-4 text-5xl font-semibold text-zinc-800">
                    {step.number}
                  </p>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="border-t border-zinc-800 bg-zinc-900/30">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2">
              <div className="px-6 py-24 md:py-32">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                  Results
                </p>
                <h2 className="mb-16 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  The numbers matter.
                </h2>
                <div className="grid grid-cols-2 gap-12">
                  {results.map((item) => (
                    <div key={item.label}>
                      <p className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                        {item.stat}
                      </p>
                      <p className="mt-2 text-sm leading-snug text-zinc-400">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[400px] overflow-hidden md:min-h-0">
                <Image
                  src="/results.png"
                  alt="Hollinger AI team working"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/30" />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-zinc-800 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              About
            </p>
            <div className="grid items-start gap-16 md:grid-cols-2">
              <div>
                <h2 className="mb-8 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                  We work with operations leaders.
                  <br />
                  Not their IT departments.
                </h2>
                <div className="space-y-5 text-zinc-400">
                  <p className="text-base leading-relaxed">
                    Hollinger AI Power Solutions is an AI workflow integration
                    firm. We work with organizations that have real operational
                    complexity — and no patience for solutions that take 18
                    months to show value.
                  </p>
                  <p className="text-base leading-relaxed">
                    Our team has deployed AI inside manufacturing facilities,
                    industrial operations, logistics businesses, and trades
                    organizations — the kinds of businesses where a broken
                    process has a real dollar cost and a theoretical solution is
                    worth nothing. We don't sell strategy. We sell outcomes, and
                    we stay until the outcome is real.
                  </p>
                  <p className="text-base leading-relaxed">
                    Client obsession isn't a value on our website. It's the
                    reason clients call us back. If you need a solution your
                    team can actually run — without calling us every time
                    something changes, without a six-month training program, and
                    without a follow-on contract to make the first one work —
                    you are describing exactly what we build.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/about.png"
                  alt="Hollinger AI leadership"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a] to-transparent px-6 pb-6 pt-16">
                  <p className="text-base font-semibold text-white">David Mercer</p>
                  <p className="text-sm text-blue-500">Chief AI Officer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="border-t border-zinc-800 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              Management Team
            </p>
            <h2 className="mb-16 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              People who have done this before.
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {team.map((member) => (
                <div key={member.name}>
                  <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-xs uppercase tracking-widest text-zinc-700">
                          Photo Coming
                        </p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-sm text-blue-500">{member.title}</p>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-zinc-800 bg-zinc-900/30 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              Client Testimonials
            </p>
            <h2 className="mb-16 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Don't take our word for it.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col border border-zinc-800 bg-[#0a0a0a] p-8"
                >
                  <p className="mb-6 text-4xl font-semibold leading-none text-blue-600">
                    &ldquo;
                  </p>
                  <p className="flex-1 text-base leading-relaxed text-zinc-300">
                    {t.quote}
                  </p>
                  <div className="mt-8 border-t border-zinc-800 pt-6">
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-zinc-500">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-zinc-800 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              FAQ
            </p>
            <h2 className="mb-16 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              Questions we get before every engagement.
            </h2>
            <div className="divide-y divide-zinc-800">
              {[
                {
                  q: "We're not a tech company. Is AI actually relevant to us?",
                  a: "That's exactly who we work with. Manufacturers, industrial operations, trades businesses, and logistics firms have some of the highest concentrations of repetitive, manual processes — quoting, scheduling, job tracking, inventory, compliance documentation. These are the workflows where AI creates the most immediate ROI. You don't need to be a tech company to benefit. You just need processes worth fixing.",
                },
                {
                  q: "How long does an engagement take?",
                  a: "Most deployments are in production within three to five weeks. That covers the audit, the integration build, testing, and handoff. Larger or more complex workflows take longer, but we scope that clearly before we start. We don't begin an engagement without a realistic timeline on the table.",
                },
                {
                  q: "Do you work with our existing software and equipment?",
                  a: "Yes. We build around what you already have. We don't require you to change platforms, buy new software, or retrain your team on a new system. The integration fits into your existing operation — that's the point.",
                },
                {
                  q: "Do we need to hire technical staff to manage it after deployment?",
                  a: "No. Every solution we build is designed for your team to run without technical expertise. We stay involved after go-live and handle any issues that come up. You're not on your own the moment we hand it over.",
                },
                {
                  q: "What makes Hollinger AI different from other AI vendors?",
                  a: "Most vendors sell platforms or pitch transformation. We sell a specific outcome for a specific problem, build it, and stay until it works. We take on a limited number of engagements so every client gets a bespoke solution and direct access to the people who built it — not an account manager reading from a script.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="grid gap-6 py-8 md:grid-cols-2 md:gap-16">
                  <p className="text-base font-semibold leading-snug text-white">
                    {q}
                  </p>
                  <p className="text-base leading-relaxed text-zinc-400">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-zinc-800 px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                  Contact Us
                </p>
                <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                  Ready to get to work?
                </h2>
                <p className="mb-10 text-base leading-relaxed text-zinc-400">
                  Tell us what you're trying to fix. No pitch deck, no
                  discovery questionnaire — just a direct conversation about
                  your operation.
                </p>
                <ContactForm />
              </div>
              <div className="space-y-8 border-l border-zinc-800 pl-16">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Address
                  </p>
                  <p className="text-base text-zinc-300">
                    422 Richards Street, #170
                    <br />
                    Vancouver, BC V6B 2Z4
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Email
                  </p>
                  <a
                    href="mailto:contact@hollingerai.online"
                    className="text-base text-zinc-300 transition-colors hover:text-white"
                  >
                    contact@hollingerai.online
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Response Time
                  </p>
                  <p className="text-base text-zinc-300">
                    Within one business day. Always.
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Engagements
                  </p>
                  <p className="text-base text-zinc-300">
                    We take on a limited number of engagements each quarter.
                    Every client gets a bespoke solution and a dedicated team
                    — not a hand-off to a junior account manager.
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
              <Image
                src="/logo.png"
                alt="Hollinger AI Power Solutions"
                width={130}
                height={36}
                className="mb-4 object-contain"
              />
              <p className="text-sm leading-relaxed text-zinc-500">
                AI workflow integration for operations teams that need results.
                Without the complexity.
              </p>
            </div>

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Navigation
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Services", href: "#services" },
                  { label: "Process", href: "#how-it-works" },
                  { label: "Results", href: "#results" },
                  { label: "Team", href: "#team" },
                  { label: "About", href: "#about" },
                  { label: "Insights", href: "/blog" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith("/") ? (
                      <Link
                        href={href}
                        className="text-sm text-zinc-500 transition-colors hover:text-white"
                      >
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        className="text-sm text-zinc-500 transition-colors hover:text-white"
                      >
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Contact
              </p>
              <div className="space-y-3">
                <p className="text-sm text-zinc-500">
                  422 Richards Street, #170
                  <br />
                  Vancouver, BC V6B 2Z4
                </p>
                <a
                  href="mailto:contact@hollingerai.online"
                  className="block text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  contact@hollingerai.online
                </a>
                <p className="text-sm text-zinc-500">
                  Response within one business day.
                </p>
                <a
                  href="mailto:contact@hollingerai.online"
                  className="mt-4 inline-flex rounded-sm bg-blue-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center">
            <p className="text-xs text-zinc-600">
              © 2026 Hollinger AI Power Solutions. All rights reserved.
            </p>
            <p className="text-xs text-zinc-600">
              hollingerai.online
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
