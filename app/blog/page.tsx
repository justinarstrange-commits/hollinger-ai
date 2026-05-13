import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Insights | Hollinger AI Power Solutions",
  description:
    "Perspectives on enterprise AI deployment, workflow integration, and operational transformation.",
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
            >
              ← Back to Home
            </Link>
            <a
              href="/#contact"
              className="rounded-sm bg-blue-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500"
            >
              Book a Call
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-36">
        <div className="mb-16 border-b border-zinc-800 pb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
            Insights
          </p>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            What we know about making AI work.
          </h1>
        </div>

        <div className="grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-[#0a0a0a] p-10 transition-colors hover:bg-zinc-900/60"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                  {post.category}
                </span>
                <span className="text-xs text-zinc-600">{post.readTime}</span>
              </div>
              <h2 className="mb-4 text-xl font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-zinc-200">
                {post.title}
              </h2>
              <p className="mb-8 flex-1 text-sm leading-relaxed text-zinc-400">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-600">{post.date}</span>
                <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 transition-colors group-hover:text-white">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="text-xs text-zinc-600">
            © 2026 Hollinger AI Power Solutions. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            AI that works. We obsess over the rest.
          </p>
        </div>
      </footer>
    </div>
  );
}
