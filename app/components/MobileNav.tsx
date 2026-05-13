"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Team", href: "#team" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "/blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className="flex flex-col items-center justify-center gap-[5px] md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <span className="block h-px w-6 bg-white" />
        <span className="block h-px w-6 bg-white" />
        <span className="block h-px w-4 self-start bg-white" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0a] px-6 py-4">
          <div className="flex items-center justify-between">
            <Image
              src="/logo.png"
              alt="Hollinger AI Power Solutions"
              width={148}
              height={40}
              className="object-contain"
            />
            <button
              onClick={close}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center text-zinc-400 transition-colors hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="mt-16 flex flex-1 flex-col gap-2">
            {links.map(({ label, href }) =>
              href.startsWith("/") ? (
                <Link
                  key={label}
                  href={href}
                  onClick={close}
                  className="border-b border-zinc-800 py-5 text-2xl font-semibold tracking-tight text-white transition-colors hover:text-zinc-300"
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  onClick={close}
                  className="border-b border-zinc-800 py-5 text-2xl font-semibold tracking-tight text-white transition-colors hover:text-zinc-300"
                >
                  {label}
                </a>
              )
            )}
          </nav>

          <div className="pb-8 pt-10 flex flex-col gap-3">
            <Link
              href="/diagnose"
              onClick={close}
              className="flex w-full items-center justify-center rounded-sm bg-blue-600 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500"
            >
              Get a Quote
            </Link>
            <a
              href="mailto:contact@hollingerai.online"
              className="flex w-full items-center justify-center rounded-sm border border-zinc-700 py-4 text-sm font-semibold uppercase tracking-widest text-zinc-300 transition-colors hover:text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
}
