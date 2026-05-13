"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const questions = [
  {
    id: "industry",
    question: "What type of business are you?",
    options: [
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
    ],
  },
  {
    id: "problem",
    question: "What's the primary problem you want to solve?",
    options: [
      "Too much manual data entry or reporting",
      "Slow or inconsistent quoting and estimating",
      "Communication gaps between teams or departments",
      "Quality control and error tracking",
      "Scheduling and job management",
      "Customer follow-up and document handling",
    ],
  },
  {
    id: "team_size",
    question: "How many people are involved in this process?",
    options: ["Just me", "2–5 people", "6–15 people", "16–50 people", "50+ people"],
  },
  {
    id: "time_spent",
    question: "How much time per week is spent on this problem?",
    options: [
      "Less than 2 hours",
      "2–5 hours",
      "5–10 hours",
      "10–20 hours",
      "More than 20 hours",
    ],
  },
  {
    id: "tools",
    question: "What tools does your team currently use?",
    options: [
      "Spreadsheets (Excel / Google Sheets)",
      "ERP or job management software",
      "Email and shared drives only",
      "Industry-specific software (e.g. Procore, Shopify, QuickBooks)",
      "Custom or in-house systems",
      "Mostly paper-based",
    ],
  },
  {
    id: "urgency",
    question: "How quickly do you need this running?",
    options: [
      "As soon as possible — it's urgent",
      "Within the next 1–2 months",
      "Within 3–6 months",
      "No hard deadline — exploring options",
    ],
  },
  {
    id: "success",
    question: "What does success look like to you?",
    options: [
      "My team spends less time on repetitive tasks",
      "Fewer errors and less rework",
      "Faster turnaround on quotes or jobs",
      "Better visibility into what's happening day-to-day",
      "Reduced reliance on any one person",
    ],
  },
  {
    id: "budget",
    question: "What is your budget range for this project?",
    options: [
      "$5,000 – $15,000",
      "$15,000 – $35,000",
      "$35,000 – $75,000",
      "$75,000+",
      "I need a quote before committing",
    ],
  },
];

type Answers = Record<string, string>;

function QuoteDisplay({ quote }: { quote: string }) {
  const sections = [
    { key: "RECOMMENDED APPROACH", label: "Recommended Approach" },
    { key: "ESTIMATED TIMELINE", label: "Estimated Timeline" },
    { key: "INVESTMENT RANGE", label: "Investment Range" },
    { key: "WHAT YOU CAN EXPECT", label: "What You Can Expect" },
  ];

  const parsed: Record<string, string> = {};
  let remaining = quote;

  for (let i = 0; i < sections.length; i++) {
    const current = sections[i].key;
    const next = sections[i + 1]?.key;
    const startIdx = remaining.indexOf(current);
    if (startIdx === -1) continue;
    const afterHeader = remaining.slice(startIdx + current.length).trimStart();
    const endIdx = next ? afterHeader.indexOf(next) : afterHeader.length;
    parsed[current] = (endIdx === -1 ? afterHeader : afterHeader.slice(0, endIdx)).trim();
    if (next) remaining = afterHeader.slice(endIdx === -1 ? 0 : endIdx);
  }

  return (
    <div className="space-y-8">
      {sections.map(({ key, label }) =>
        parsed[key] ? (
          <div key={key}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              {label}
            </p>
            <div className="text-zinc-300 leading-relaxed whitespace-pre-line">
              {parsed[key]}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default function DiagnosePage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [otherValues, setOtherValues] = useState<Record<string, string>>({});
  const [showOther, setShowOther] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const current = questions[step];
  const total = questions.length;
  const progress = Math.round((step / total) * 100);

  const handleSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: option }));
    setShowOther((prev) => ({ ...prev, [current.id]: false }));
    setTimeout(() => {
      if (step < total - 1) {
        setStep((s) => s + 1);
      } else {
        submitAnswers();
      }
    }, 300);
  };

  const handleOtherToggle = () => {
    setShowOther((prev) => ({ ...prev, [current.id]: true }));
    setAnswers((prev) => ({ ...prev, [current.id]: otherValues[current.id] || "" }));
  };

  const handleOtherChange = (value: string) => {
    setOtherValues((prev) => ({ ...prev, [current.id]: value }));
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  };

  const canProceed =
    answers[current.id] !== undefined && answers[current.id].trim() !== "";

  const handleNext = () => {
    if (step < total - 1) {
      setStep((s) => s + 1);
    } else {
      submitAnswers();
    }
  };

  const submitAnswers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setQuote(data.quote);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-white">
        <Header />
        <main className="flex flex-1 items-center justify-center px-6">
          <div className="text-center">
            <div className="mb-6 h-1 w-48 overflow-hidden rounded-full bg-zinc-800 mx-auto">
              <div className="h-full w-full origin-left animate-pulse bg-blue-600" />
            </div>
            <p className="text-zinc-400 text-sm">Preparing your assessment…</p>
          </div>
        </main>
      </div>
    );
  }

  if (quote) {
    return (
      <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-white">
        <Header />
        <main className="flex-1 px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              Your Assessment
            </p>
            <h1 className="mb-12 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              Here&apos;s what we&apos;d recommend.
            </h1>
            <QuoteDisplay quote={quote} />
            <div className="mt-14 border-t border-zinc-800 pt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-sm bg-blue-600 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500"
              >
                Talk to Us
              </Link>
              <button
                onClick={() => {
                  setStep(0);
                  setAnswers({});
                  setOtherValues({});
                  setShowOther({});
                  setQuote(null);
                }}
                className="text-sm font-medium uppercase tracking-wider text-zinc-500 transition-colors hover:text-white"
              >
                Start Over
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-white">
      <Header />
      <main className="flex flex-1 flex-col px-6 py-16">
        <div className="mx-auto w-full max-w-2xl">
          <div className="mb-10">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Question {step + 1} of {total}
              </p>
              <p className="text-xs text-zinc-600">{progress}% complete</p>
            </div>
            <div className="h-0.5 w-full bg-zinc-800">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <h2 className="mb-8 text-2xl font-semibold leading-snug tracking-tight text-white md:text-3xl">
            {current.question}
          </h2>

          <div className="space-y-3">
            {current.options.map((option) => {
              const selected =
                answers[current.id] === option && !showOther[current.id];
              return (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`w-full rounded-sm border px-5 py-4 text-left text-sm font-medium transition-colors ${
                    selected
                      ? "border-blue-600 bg-blue-600/10 text-white"
                      : "border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-600 hover:text-white"
                  }`}
                >
                  {option}
                </button>
              );
            })}

            {!showOther[current.id] ? (
              <button
                onClick={handleOtherToggle}
                className="w-full rounded-sm border border-zinc-800 bg-zinc-900/40 px-5 py-4 text-left text-sm font-medium text-zinc-500 transition-colors hover:border-zinc-600 hover:text-zinc-300"
              >
                Other…
              </button>
            ) : (
              <div className="rounded-sm border border-blue-600 bg-blue-600/10 p-4">
                <input
                  autoFocus
                  type="text"
                  placeholder="Describe your situation…"
                  value={otherValues[current.id] || ""}
                  onChange={(e) => handleOtherChange(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
                />
              </div>
            )}
          </div>

          {error && (
            <p className="mt-6 text-sm text-red-400">{error}</p>
          )}

          <div className="mt-10 flex items-center gap-6">
            <button
              onClick={handleNext}
              disabled={!canProceed}
              className={`rounded-sm px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-colors ${
                canProceed
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-zinc-800 text-zinc-600 cursor-not-allowed"
              }`}
            >
              {step === total - 1 ? "Get Assessment" : "Next"}
            </button>
            {step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="text-sm font-medium uppercase tracking-wider text-zinc-500 transition-colors hover:text-white"
              >
                Back
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-zinc-800 px-6 py-4">
      <div className="mx-auto max-w-6xl">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Hollinger AI Power Solutions"
            width={148}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 py-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs text-zinc-600">
          © 2026 Hollinger AI Power Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
