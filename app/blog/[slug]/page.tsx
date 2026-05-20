import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "../posts";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const BASE = "https://hollingerai.online";
  return {
    title: `${post.title} | Hollinger AI Power Solutions`,
    description: post.excerpt,
    keywords: ["AI integration", "Vancouver", "workflow automation", post.category],
    authors: [{ name: "Hollinger AI Power Solutions", url: BASE }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${BASE}/blog/${slug}`,
      siteName: "Hollinger AI Power Solutions",
      images: [{ url: `${BASE}/hero.png`, width: 1978, height: 1114, alt: post.title }],
      publishedTime: new Date(post.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${BASE}/hero.png`],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = posts.findIndex((p) => p.slug === slug);
  const prev = posts[index - 1] ?? null;
  const next = posts[index + 1] ?? null;

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
              href="/blog"
              className="text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
            >
              ← All Insights
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

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        <div className="mb-12 border-b border-zinc-800 pb-12">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {post.category}
            </span>
            <span className="text-xs text-zinc-600">{post.readTime}</span>
          </div>
          <h1 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm text-zinc-500">{post.date}</p>
        </div>

        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-zinc-300">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-20 border-t border-zinc-800 pt-12">
          <div className="mb-12 max-w-lg">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Ready to apply this?
            </p>
            <p className="mb-6 text-2xl font-semibold leading-snug tracking-tight text-white">
              Talk to someone who has actually done it.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center rounded-sm bg-blue-600 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500"
            >
              Book a Strategy Call
            </a>
          </div>

          {(prev || next) && (
            <div className="grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-2">
              {prev && (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="group bg-[#0a0a0a] p-8 transition-colors hover:bg-zinc-900/60"
                >
                  <p className="mb-2 text-xs uppercase tracking-widest text-zinc-600">
                    ← Previous
                  </p>
                  <p className="text-sm font-semibold text-zinc-300 transition-colors group-hover:text-white">
                    {prev.title}
                  </p>
                </Link>
              )}
              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group bg-[#0a0a0a] p-8 transition-colors hover:bg-zinc-900/60 md:text-right"
                >
                  <p className="mb-2 text-xs uppercase tracking-widest text-zinc-600">
                    Next →
                  </p>
                  <p className="text-sm font-semibold text-zinc-300 transition-colors group-hover:text-white">
                    {next.title}
                  </p>
                </Link>
              )}
            </div>
          )}
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
