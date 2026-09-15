import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ERP vs AI — A Briefing for Fabrication Shops | Hollinger AI",
  description:
    "An honest comparison of traditional ERP systems and AI integration for fabrication and manufacturing operations.",
};

export default function FabricationPage() {
  return (
    <div className="overflow-x-hidden bg-[#0a0a0a] text-white">

      {/* ─── OPENING ─── */}
      <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-20">
        <Image src="/hero.png" alt="" fill priority className="object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#0a0a0a]/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{backgroundImage:"linear-gradient(#3b82f6 1px,transparent 1px),linear-gradient(90deg,#3b82f6 1px,transparent 1px)",backgroundSize:"72px 72px"}} />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Logo only — no nav */}
          <div className="pt-6 pb-24">
            <Image src="/logo.png" alt="Hollinger AI" width={130} height={35} className="object-contain opacity-80" />
          </div>

          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              An Operations Briefing · Fabrication &amp; Manufacturing
            </p>
            <h1 className="mb-8 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-7xl">
              Operations software<br />
              hasn&apos;t changed much<br />
              in thirty years.<br />
              <span className="text-blue-400">What is possible has.</span>
            </h1>
            <p className="mb-12 max-w-2xl text-xl leading-relaxed text-zinc-400">
              This is an honest comparison. ERP systems are not bad software. They solved a real problem. But the world has moved. Software that learns, adapts, and improves itself every day is a different category entirely.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#comparison" className="rounded-sm bg-blue-600 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500">
                See the Comparison
              </a>
              <a href="#erp-reality" className="text-sm font-medium uppercase tracking-wider text-zinc-500 transition-colors hover:text-white">
                What ERP Users Say →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 01: FAIR CREDIT ─── */}
      <section className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">01 · The Fair Assessment</p>
          <div className="grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-2">

            {/* ERP column */}
            <div className="space-y-4 bg-zinc-900/50 p-10">
              <h2 className="mb-6 text-2xl font-semibold leading-tight tracking-tight text-zinc-400 md:text-3xl">
                ERP systems are good software.<br />
                <span className="text-zinc-600">For a problem that is already solved.</span>
              </h2>
              <div className="space-y-4 text-zinc-500">
                <p className="text-sm leading-relaxed">
                  JobBoss2, ProShop, and Global Shop Solutions were built by people who understood job shops. They organized the chaos of running a fabrication operation: jobs, materials, scheduling, invoicing. All in one place. For their time, that was genuinely valuable work.
                </p>
                <p className="text-sm leading-relaxed">
                  These are not failing products. They have large customer bases and legitimate track records. If you need a structured platform to manage jobs and keep your shop floor organized, they deliver that.
                </p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  The honest limitation is not what they do. It is what they cannot do. They were never designed to do it.
                </p>
              </div>
              <div className="space-y-3 pt-4">
                <div className="border border-zinc-800 bg-zinc-900/60 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">What ERP does well</p>
                  <ul className="space-y-2">
                    {["Organizes your job data", "Tracks inventory and materials", "Manages scheduling", "Produces standard reports", "Connects your business functions"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                        <span className="text-sm text-zinc-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-zinc-800 bg-zinc-900/60 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-600">What ERP was never built to do</p>
                  <ul className="space-y-2">
                    {["Learn from your data", "Get smarter over time", "Correct its own errors", "Operate when you don't", "Adapt without a consultant"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-700" />
                        <span className="text-sm text-zinc-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Hollinger AI column */}
            <div className="relative space-y-4 bg-[#0a0a0a] p-10" style={{boxShadow:"inset 0 0 80px rgba(37,99,235,0.04)"}}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
              <h2 className="mb-6 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                Hollinger AI is a different category.<br />
                <span className="text-blue-400">Built for what comes next.</span>
              </h2>
              <div className="space-y-4 text-zinc-400">
                <p className="text-sm leading-relaxed">
                  Hollinger AI is not a replacement for ERP. It is a different kind of system entirely. Where ERP records and organizes, AI learns and acts. Where ERP requires your team to adapt to software, this system adapts to your team.
                </p>
                <p className="text-sm leading-relaxed">
                  Every job processed teaches it more about how your operation runs. Every quote built makes the next one more accurate. The system does not stay the same year after year. It compounds.
                </p>
                <p className="text-sm leading-relaxed text-zinc-200 font-medium">
                  The question is not whether ERP is good software. The question is whether good software from thirty years ago is the right tool for where your business is going.
                </p>
              </div>
              <div className="space-y-3 pt-4">
                <div className="border border-blue-900/30 bg-blue-950/10 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-500">What Hollinger AI does</p>
                  <ul className="space-y-2">
                    {["Learns from every job you run", "Gets more accurate over time", "Detects and corrects its own errors", "Operates 24 hours a day, 7 days a week", "Adapts as your operation changes"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        <span className="text-sm text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-blue-900/20 bg-blue-950/5 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">What this means for your shop specifically</p>
                  <ul className="space-y-2">
                    {["Quotes built on live pricing, not last month's list", "Estimator hours recovered and redeployed", "Bids you were passing on become bids you win", "Margin surprises stop happening", "One system across office, shop, and field"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                        <span className="text-sm text-zinc-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 02: THE COMPARISON ─── */}
      <section id="comparison" className="border-t border-zinc-800 bg-zinc-900/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">02 · The Comparison</p>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            One records what happened.<br />
            <span className="text-zinc-500">One changes what happens next.</span>
          </h2>
          <p className="mb-16 max-w-xl text-base leading-relaxed text-zinc-500">
            Both are legitimate tools. Only one gets smarter every day you use it.
          </p>

          {/* Big visual split */}
          <div className="mb-8 grid gap-px bg-zinc-800 md:grid-cols-2">
            <div className="bg-zinc-900/60 p-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Traditional ERP · 1990s Architecture</p>
              <p className="mb-10 text-3xl font-semibold leading-tight text-zinc-500 md:text-4xl">
                JobBoss2 · ProShop<br />
                <span className="text-zinc-600">Global Shop Solutions.</span>
              </p>
              <ul className="space-y-5">
                {[
                  "Stores your data. Does not think about it.",
                  "You adapt your business to the software.",
                  "6–18 months before you see a result.",
                  "3–6 month training program. Billed separately.",
                  "Same system in year five as year one.",
                  "Vendor controls the roadmap. You wait.",
                  "Errors sit until a human finds them.",
                  "Your best estimator holds all the knowledge.",
                  "Support disappears after the sale.",
                  "ERP installed: $60K–$240K/year. Ongoing.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 border-b border-zinc-800/60 pb-5 last:border-0 last:pb-0">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-700" />
                    <span className="text-lg leading-snug text-zinc-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-[#0a0a0a] p-12 ring-1 ring-blue-500/20" style={{boxShadow:"inset 0 0 80px rgba(37,99,235,0.06)"}}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">AI Integration · Built for Now</p>
              <p className="mb-10 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Hollinger AI<br />
                <span className="text-blue-400">Built around<br />your operation.</span>
              </p>
              <ul className="space-y-5">
                {[
                  "Reads your data, learns from it, acts on it.",
                  "Software adapts to how you already work.",
                  "Live and producing results in 3–5 weeks.",
                  "Walkthrough sessions. No training program.",
                  "Smarter in year five than year one. Significantly.",
                  "Your roadmap. Your priorities. Your timeline.",
                  "AI detects anomalies and self-corrects.",
                  "Knowledge encoded permanently. It never walks out the door.",
                  "Same engineer who built it. Direct line. Always.",
                  "Stage One: $18,500. You own it. No licence fees.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 border-b border-zinc-900 pb-5 last:border-0 last:pb-0">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <span className="text-lg leading-snug text-zinc-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed table */}
          <div className="overflow-x-auto">
          <div className="min-w-[640px] overflow-hidden border border-zinc-800">
            <div className="grid grid-cols-3 border-b border-zinc-800 bg-zinc-900/50">
              <div className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-600" />
              <div className="border-l border-zinc-800 px-5 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">ERP</div>
              <div className="border-l border-zinc-800 px-5 py-4 text-xs font-semibold uppercase tracking-widest text-blue-400">Hollinger AI</div>
            </div>
            {[
              { cat: "Quoting accuracy", erp: "Manual estimates off stale price lists, often weeks out of date", ai: "Live supplier feeds. Every quote priced on today's actual cost." },
              { cat: "After hours", erp: "System is idle. Nobody home.", ai: "247 AI agents running. RFQs processing. Margins being monitored." },
              { cat: "Material price spike", erp: "Discovered when a job bleeds margin. Weeks later.", ai: "Flagged in real time before the quote goes out. Every time." },
              { cat: "Self-correction", erp: "Errors sit until a human finds them.", ai: "System detects anomalies. Corrects what it can. Escalates what it can't." },
              { cat: "When you grow", erp: "More volume = more licences, more training, more consultants.", ai: "More volume = smarter system. Every job improves every estimate." },
              { cat: "Staff turnover", erp: "New hire learns the software. Weeks of lost productivity.", ai: "System already knows your jobs. New hire walks into a running operation." },
              { cat: "Year five", erp: "Same system. Same limitations. Bigger invoice.", ai: "Five years of job data. More accurate than any estimator alone." },
            ].map((row, i) => (
              <div key={row.cat} className={`grid grid-cols-3 border-b border-zinc-800 last:border-0 ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-zinc-900/20"}`}>
                <div className="px-5 py-5 text-sm font-semibold text-white">{row.cat}</div>
                <div className="border-l border-zinc-800 px-5 py-5 text-sm leading-relaxed text-zinc-500">{row.erp}</div>
                <div className="border-l border-blue-900/30 bg-blue-950/5 px-5 py-5 text-sm font-medium leading-relaxed text-blue-300">{row.ai}</div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 03: AI REVOLUTION QUOTES ─── */}
      <section className="border-t border-zinc-800 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">03 · What the World Is Saying</p>
          <h2 className="mb-16 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            This is not a trend.<br />
            <span className="text-zinc-500">It is the Fourth Industrial Revolution.</span>
          </h2>

          {/* Big stat strip */}
          <div className="mb-16 grid gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-2 md:grid-cols-4">
            {[
              { stat: "72%", label: "of manufacturers report reduced costs and improved efficiency after implementing AI" },
              { stat: "$3.70", label: "returned for every $1 invested in AI across enterprise deployments" },
              { stat: "20–50%", label: "task-level productivity uplift reported by manufacturers using AI" },
              { stat: "78%", label: "of enterprises had adopted AI by 2025. The gap between them and non-adopters is growing." },
            ].map((item) => (
              <div key={item.label} className="bg-[#0a0a0a] px-8 py-10">
                <p className="mb-3 text-5xl font-semibold tracking-tight text-white">{item.stat}</p>
                <p className="text-sm leading-relaxed text-zinc-500">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Pull quotes */}
          <div className="space-y-px border border-zinc-800">
            {[
              {
                quote: "AI is one of the most profound things we're working on as humanity. It's more profound than fire or electricity.",
                name: "Sundar Pichai",
                title: "CEO, Google",
              },
              {
                quote: "This is the real Fourth Industrial Revolution. For companies with a strong operational foundation, this is the moment that compounds the most.",
                name: "Eric Kutcher",
                title: "Senior Partner, McKinsey & Company",
              },
              {
                quote: "Manufacturing today is a high-tech industry. CEOs are investing in AI to pivot more quickly than in generations past. Of those who have implemented AI, more than 70% have already seen significant ROI.",
                name: "Randy Altschuler",
                title: "CEO, Xometry",
              },
              {
                quote: "Intelligent automation enables organizations to work today like the workplace of tomorrow — driving efficiency and agility that was not possible before.",
                name: "Reynolds C. Bish",
                title: "CEO, Kofax",
              },
            ].map((q) => (
              <div key={q.name} className="grid gap-6 bg-zinc-900/20 p-8 md:grid-cols-[1fr_200px]">
                <div>
                  <p className="mb-1 text-3xl font-semibold leading-none text-zinc-700">&ldquo;</p>
                  <p className="text-lg leading-relaxed text-zinc-200">{q.quote}</p>
                </div>
                <div className="self-end md:text-right">
                  <p className="text-sm font-semibold text-white">{q.name}</p>
                  <p className="text-xs text-zinc-500">{q.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The compounding argument */}
          <div className="mt-16 border border-blue-900/30 bg-blue-950/10 p-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">The Key Difference</p>
            <h3 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
              ERP does not get better.<br />AI gets better every single day.
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "It learns your operation", body: "Every RFQ processed, every quote built, every job completed teaches the system more about how your shop works. An ERP from year one looks identical to an ERP from year five. An AI system from year five is five years smarter than the one from year one." },
                { title: "It improves without intervention", body: "ERP requires you to call a consultant every time something needs to change. AI self-corrects, re-calibrates, and flags anomalies automatically. The system maintains itself. Your team does not." },
                { title: "The gap compounds", body: "Every quarter a competitor runs on AI-assisted quoting while you run on manual estimates is a quarter they are pricing more accurately and winning jobs at margins you cannot see. That gap does not stay static. It widens." },
              ].map((item) => (
                <div key={item.title}>
                  <p className="mb-3 text-sm font-semibold text-blue-300">{item.title}</p>
                  <p className="text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-blue-900/30 pt-8">
              <p className="text-xl font-semibold leading-snug text-zinc-200 md:text-2xl">
                Companies that do not adapt do not fall behind slowly.<br />
                <span className="text-zinc-500">They become irrelevant to customers who have already moved on. In fabrication, the shop that quotes faster, prices more accurately, and runs leaner wins the work. The one that does not stops being invited to bid.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 04: ERP USER COMPLAINTS ─── */}
      <section id="erp-reality" className="border-t border-zinc-800 bg-zinc-900/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">04 · The Reality Check</p>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            Again. These are solid products.<br />
            <span className="text-zinc-500">But their own customers tell the same story.</span>
          </h2>
          <p className="mb-16 max-w-2xl text-base leading-relaxed text-zinc-500">
            These are verified reviews from actual users of three widely used systems. Not our words. Theirs.
          </p>

          {/* JobBoss2 */}
          <div className="mb-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-4">JobBoss2</p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "$10K in initial costs turned into well over $40K — purchasing and scheduling still not working. The company admits it doesn't work but suggests paying more to fix it.",
                "The number of clicks to accomplish a simple task is unreal and extremely time consuming.",
                "It took several years to get it to perform as an accurate ERP.",
                "Training included is really bad — you're paying for the program before you can actually use it.",
              ].map((q) => (
                <div key={q} className="border border-zinc-800 bg-[#0a0a0a] p-6">
                  <p className="mb-4 text-2xl font-semibold leading-none text-zinc-800">&ldquo;</p>
                  <p className="text-sm leading-relaxed text-zinc-400">{q}</p>
                  <p className="mt-4 text-xs text-zinc-700">Verified user · Capterra / G2</p>
                </div>
              ))}
            </div>
          </div>

          {/* ProShop */}
          <div className="mb-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-4">ProShop</p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Expensive and not very user-friendly. Support is unsupportive — when you ask questions you get referred to long training videos that don't help.",
                "Feels focused on machine shop needs. Requires alternative methods for non-machine shop operations. Not a good fit if your work doesn't match their template.",
              ].map((q) => (
                <div key={q} className="border border-zinc-800 bg-[#0a0a0a] p-6">
                  <p className="mb-4 text-2xl font-semibold leading-none text-zinc-800">&ldquo;</p>
                  <p className="text-sm leading-relaxed text-zinc-400">{q}</p>
                  <p className="mt-4 text-xs text-zinc-700">Verified user · Capterra / G2</p>
                </div>
              ))}
            </div>
          </div>

          {/* Global Shop */}
          <div className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-4">Global Shop Solutions</p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Counter-intuitive. Critical features are hidden. You will need constant support — which they charge you for.",
                "They prioritize acquiring new customers over supporting existing ones. Customers left dissatisfied and transitioning to other systems.",
                "Global Shop does not test updates to see how they affect other parts of the system.",
                "Zero confidence in the financials produced by Global Shop.",
              ].map((q) => (
                <div key={q} className="border border-zinc-800 bg-[#0a0a0a] p-6">
                  <p className="mb-4 text-2xl font-semibold leading-none text-zinc-800">&ldquo;</p>
                  <p className="text-sm leading-relaxed text-zinc-400">{q}</p>
                  <p className="mt-4 text-xs text-zinc-700">Verified user · Capterra / G2</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-zinc-800 bg-[#0a0a0a] p-8">
            <p className="text-base leading-relaxed text-zinc-400">
              The pattern across all three is the same: long implementations, costs that double before anything works, training programs that leave teams behind, and support that disappears once the contract is signed. This is not a coincidence. It is a structural problem with the packaged ERP model. The vendor&apos;s incentive is selling the next seat, not making the current one work.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 05: THE LEADER'S ADVANTAGE ─── */}
      <section className="relative border-t border-zinc-800 overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"linear-gradient(#3b82f6 1px,transparent 1px),linear-gradient(90deg,#3b82f6 1px,transparent 1px)",backgroundSize:"60px 60px"}} />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">05 · The Business Case</p>
          <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            More efficient. More profitable.<br />
            <span className="text-blue-400">Visibly.</span>
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-zinc-400">
            The operations leaders who move on AI now are not doing it because it is fashionable. They are doing it because the numbers show up. In the bid log, in the margin report, in the conversations with ownership about why this quarter looked different from last year.
          </p>

          <div className="grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-3">
            {[
              {
                headline: "Your team quotes more. And wins more.",
                body: "Right now, estimator capacity is the ceiling on how many bids you can chase. Every RFQ that comes in when your estimators are buried is a job that goes to someone else. Remove the manual overhead and that ceiling lifts. More bids out means more contracts in. The ones you win are priced on accurate numbers, not hopeful ones.",
                metric: "$45K+",
                metricLabel: "Estimator capacity recovered per year",
              },
              {
                headline: "Margins improve. And stay improved.",
                body: "Margin erosion in fabrication usually comes from one place: estimates built on pricing that has already moved. Live material cost integration means every quote reflects what steel, aluminum, and coating actually cost today. The jobs you win make what they were supposed to make. The surprises stop coming.",
                metric: "97.3%",
                metricLabel: "Quote accuracy with live pricing vs 71% ERP average",
              },
              {
                headline: "The operation runs when you are not watching.",
                body: "247 AI agents monitoring jobs, pricing, margins, and RFQs around the clock. Anomalies flagged before they become problems. The shop floor, the office, and the field on the same picture at the same moment. An operation that can be seen clearly is an operation that can be run confidently. Far easier to explain to ownership when results need to be demonstrated.",
                metric: "24 / 7",
                metricLabel: "Agents active. No gaps. No off hours.",
              },
            ].map((item) => (
              <div key={item.headline} className="bg-[#0a0a0a] p-10">
                <p className="mb-6 text-4xl font-semibold tracking-tight text-white">{item.metric}</p>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-500">{item.metricLabel}</p>
                <div className="my-6 h-px bg-zinc-800" />
                <h3 className="mb-4 text-lg font-semibold leading-snug text-white">{item.headline}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>

          {/* The leadership paragraph */}
          <div className="mt-8 grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-2">
            <div className="bg-zinc-900/30 p-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">What the numbers show</p>
              <div className="space-y-4 text-zinc-400">
                <p className="text-base leading-relaxed">Fabrication shops that have deployed AI-assisted quoting consistently report the same three outcomes: quote volume goes up, margin accuracy improves, and the operations team stops being the bottleneck in the sales process.</p>
                <p className="text-base leading-relaxed">Those outcomes show up in the bid log. They show up in the margin report. They show up in the conversation with ownership at the end of the quarter when someone asks why the numbers looked different.</p>
              </div>
            </div>
            <div className="bg-[#0a0a0a] p-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-500">What it means for the person who made the call</p>
              <div className="space-y-4 text-zinc-300">
                <p className="text-base leading-relaxed">The operations leaders who brought AI in early are not explaining themselves. Their results are doing it for them.</p>
                <p className="text-base leading-relaxed">A faster quoting operation. A more accurate one. A team that is spending time on the work that requires judgement, not on the paperwork around it. That is the kind of change that is visible to everyone above and below the person who made it happen.</p>
                <p className="text-base font-medium leading-relaxed text-white">This is the decision that compounds. The ones that look obvious in hindsight always do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 06: COMMAND CENTRE ─── */}
      <section className="border-t border-zinc-800 bg-[#050508] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">06 · The Command Centre</p>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Management sees everything.<br />
            <span className="text-blue-400">Right now. Not tomorrow morning.</span>
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-zinc-500">
            ERP tells you what happened after the fact. The Hollinger AI command centre shows you what is happening at this moment across every job, every quote, every material price, and every crew. One screen. Always live.
          </p>

          {/* Dashboard mock */}
          <div className="overflow-hidden border border-zinc-800 bg-[#0a0a0a]">

            {/* Dashboard top bar */}
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-6 py-3">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-green-400">Live</span>
                </div>
                <span className="text-xs text-zinc-700">|</span>
                <span className="text-xs text-zinc-500">Sample Fabrication Shop</span>
              </div>
              <span className="text-xs tabular-nums text-zinc-700">Updated every 30 seconds</span>
            </div>

            {/* Top metric row */}
            <div className="grid border-b border-zinc-800 sm:grid-cols-4">
              {[
                { label: "Active Jobs", value: "14", sub: "3 flagged for review", color: "text-white", flag: true },
                { label: "Open RFQs", value: "7", sub: "2 processing now", color: "text-blue-400", flag: false },
                { label: "Avg Margin", value: "31.4%", sub: "vs 28.1% last month", color: "text-green-400", flag: false },
                { label: "Material Alerts", value: "2", sub: "Steel up 4.2% today", color: "text-amber-400", flag: true },
              ].map((m) => (
                <div key={m.label} className="border-r border-zinc-800 px-6 py-6 last:border-0">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-600">{m.label}</p>
                  <p className={`text-3xl font-semibold tracking-tight ${m.color}`}>{m.value}</p>
                  <p className="mt-1 text-xs text-zinc-600">{m.sub}</p>
                </div>
              ))}
            </div>

            {/* Middle row: job pipeline + alert feed */}
            <div className="grid border-b border-zinc-800 md:grid-cols-[1fr_320px]">

              {/* Job pipeline */}
              <div className="border-r border-zinc-800 p-6">
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-600">Job Pipeline</p>
                <div className="space-y-3">
                  {[
                    { job: "FAB-2841 · Structural Steel Package", status: "In Fabrication", pct: 68, color: "bg-blue-600" },
                    { job: "FAB-2844 · Industrial Coating Run", status: "Awaiting Materials", pct: 22, color: "bg-amber-500" },
                    { job: "FAB-2847 · Custom Handrail System", status: "Quoting", pct: 10, color: "bg-zinc-600" },
                    { job: "FAB-2839 · Tank Lining Contract", status: "QC Review", pct: 91, color: "bg-green-600" },
                    { job: "FAB-2833 · Mezzanine Structure", status: "Invoiced", pct: 100, color: "bg-zinc-700" },
                  ].map((j) => (
                    <div key={j.job}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-xs font-medium text-zinc-300">{j.job}</span>
                        <span className="text-xs text-zinc-600">{j.status}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-zinc-800">
                        <div className={`h-1.5 rounded-full ${j.color}`} style={{ width: `${j.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alert feed */}
              <div className="p-6">
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-600">Live Alerts</p>
                <div className="space-y-3">
                  {[
                    { type: "price", msg: "Steel HR sheet up 4.2%. 3 open quotes affected. Reviewed automatically.", time: "4 min ago", dot: "bg-amber-500" },
                    { type: "rfq", msg: "RFQ received. Material takeoff running. Quote ready in approx 18 min.", time: "11 min ago", dot: "bg-blue-500" },
                    { type: "margin", msg: "FAB-2841 margin holding at 33.1%. No action required.", time: "22 min ago", dot: "bg-green-500" },
                    { type: "flag", msg: "FAB-2844 material delay flagged. Estimated 2-day impact on schedule.", time: "1 hr ago", dot: "bg-red-500" },
                    { type: "rfq", msg: "After-hours RFQ processed and drafted. Awaiting estimator review.", time: "3 hrs ago", dot: "bg-blue-500" },
                  ].map((a, i) => (
                    <div key={i} className="flex items-start gap-3 border-b border-zinc-900 pb-3 last:border-0 last:pb-0">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                      <div>
                        <p className="text-xs leading-relaxed text-zinc-400">{a.msg}</p>
                        <p className="mt-0.5 text-xs text-zinc-700">{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="grid border-zinc-800 sm:grid-cols-3">
              {[
                { label: "Shop Floor", status: "All stations active", indicator: "bg-green-500" },
                { label: "Field Crews", status: "2 of 2 on site · FAB-2839", indicator: "bg-green-500" },
                { label: "After Hours Coverage", status: "AI agents active · No gaps", indicator: "bg-blue-500" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between border-r border-t border-zinc-800 px-6 py-4 last:border-r-0">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">{s.label}</p>
                    <p className="text-xs text-zinc-400">{s.status}</p>
                  </div>
                  <div className="relative flex h-2 w-2">
                    <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${s.indicator} opacity-60`} />
                    <span className={`relative inline-flex h-2 w-2 rounded-full ${s.indicator}`} />
                  </div>
                </div>
              ))}
            </div>

          </div>

          <p className="mt-6 text-xs leading-relaxed text-zinc-700">
            This is a representation of the live management view. Actual data reflects your jobs, materials, and crew in real time. ERP systems do not have a view like this. They never did.
          </p>
        </div>
      </section>

      {/* ─── SECTION 07: WHAT THIS MEANS FOR YOUR SHOP ─── */}
      <section className="border-t border-zinc-800 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">07 · What This Means for Your Shop</p>
          <h2 className="mb-16 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Your operation runs across<br />three surfaces. Right now,<br />
            <span className="text-zinc-500">they talk through inboxes and memory.</span>
          </h2>

          <div className="grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-3">
            {[
              {
                surface: "The Office",
                current: "Quotes the work, schedules the work, handles paperwork. Coordination happens through inboxes, phone calls, and printouts.",
                withAI: "RFQs parsed automatically on arrival. Material takeoffs assembled in minutes. Quotes built on live pricing. Your estimators price the work. The system handles everything around the work.",
              },
              {
                surface: "The Shop",
                current: "Fabricates and coats. Visibility into job status depends on who you ask and what they remember.",
                withAI: "Every job tracked in real time. Material alerts surface before they affect a quote. The shop floor and the office see the same picture at the same moment.",
              },
              {
                surface: "The Field",
                current: "Installs. Updates flow back through phone calls and individual check-ins. Coordination is a person's job.",
                withAI: "Field status feeds into the same operational view. Crew location, job progress, and installation status visible without a phone call.",
              },
            ].map((item) => (
              <div key={item.surface} className="bg-[#0a0a0a] p-8">
                <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-blue-500">{item.surface}</p>
                <div className="mb-6 border-l-2 border-zinc-800 pl-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-700">Today</p>
                  <p className="text-sm leading-relaxed text-zinc-500">{item.current}</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-blue-600">With AI</p>
                  <p className="text-sm leading-relaxed text-zinc-300">{item.withAI}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Numbers */}
          <div className="mt-8 grid gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-3">

            <div className="bg-[#0a0a0a] px-8 py-10">
              <p className="mb-2 text-4xl font-semibold tracking-tight text-white">8–12 hrs</p>
              <p className="mb-1 text-sm font-medium text-zinc-300">Recovered per estimator per week</p>
              <p className="text-xs text-zinc-600">Returned to pricing, client work, chasing the right bids</p>
            </div>

            {/* Quote turnaround — before/after */}
            <div className="bg-[#0a0a0a] px-8 py-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">Quote turnaround</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 rounded-sm border border-zinc-700 bg-zinc-800 px-4 py-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">Before</p>
                  <p className="text-3xl font-semibold text-zinc-400">2 days</p>
                </div>
                <div className="text-zinc-600 text-xl font-light">→</div>
                <div className="flex-1 rounded-sm border border-blue-600/50 bg-blue-600/20 px-4 py-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">After</p>
                  <p className="text-3xl font-semibold text-white">2–4 hours</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-zinc-600">Based on a recent Phase 1 build</p>
            </div>

            <div className="bg-[#0a0a0a] px-8 py-10">
              <p className="mb-2 text-4xl font-semibold tracking-tight text-white">$45K+</p>
              <p className="mb-1 text-sm font-medium text-zinc-300">Estimator capacity recovered per year</p>
              <p className="text-xs text-zinc-600">That capacity goes back to higher value production</p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CLOSE ─── */}
      <section className="relative border-t border-zinc-800 px-6 py-32 md:py-40">
        <Image src="/results.png" alt="" fill className="object-cover object-center opacity-10" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/92 to-[#0a0a0a]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">The Bottom Line</p>
          <h2 className="mb-8 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            ERP manages where you are.<br />
            AI moves with where you&apos;re going.
          </h2>
          <div className="mb-12 space-y-4 text-zinc-400">
            <p className="text-lg leading-relaxed">
              These ERP systems are good at what they were built to do. They were built to organize data. That problem is solved, and they solve it adequately.
            </p>
            <p className="text-lg leading-relaxed">
              What they cannot do, and were never designed to do, is learn. Every quote built on an ERP system this year looks exactly like a quote built on that same system ten years from now. The software does not change because you changed. It does not improve because your business improved.
            </p>
            <p className="text-lg font-medium leading-relaxed text-zinc-200">
              The system we build for your shop is the opposite of that. It learns your jobs. It learns your materials, your labour, your margin patterns. The more you run through it, the smarter it gets. It never stops.
            </p>
          </div>

          <div className="border border-zinc-700 p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">Ready to begin</p>
            <p className="mb-2 text-2xl font-semibold text-white">Justin Strange</p>
            <p className="mb-1 text-sm text-zinc-400">Founder · Hollinger AI</p>
            <p className="mb-6 text-sm text-zinc-500">A division of Hollinger Holdings Corporation</p>
            <a href="mailto:contact@hollingerai.online" className="inline-flex rounded-sm bg-blue-600 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500">
              contact@hollingerai.online
            </a>
          </div>
        </div>
      </section>

      {/* minimal footer */}
      <div className="border-t border-zinc-800/50 px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Image src="/logo.png" alt="Hollinger AI" width={100} height={28} className="object-contain opacity-40" />
          <p className="text-xs text-zinc-800">© 2026 Hollinger AI. All rights reserved.</p>
        </div>
      </div>

    </div>
  );
}
