import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Hollinger AI Power Solutions",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-white">
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

      <main className="flex flex-1 flex-col items-start justify-center px-6">
        <div className="mx-auto max-w-6xl w-full">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
            404
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            This page doesn't exist.
          </h1>
          <p className="mb-10 max-w-md text-lg leading-relaxed text-zinc-400">
            The page you're looking for has moved or never existed. Let's get
            you back somewhere useful.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex items-center rounded-sm bg-blue-600 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500"
            >
              Back to Home
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium uppercase tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              Read Our Insights →
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-800 px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs text-zinc-600">
            © 2026 Hollinger AI Power Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
