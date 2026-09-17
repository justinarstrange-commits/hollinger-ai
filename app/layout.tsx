import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const url = "https://hollingerai.online";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hollingerai.online/#organization",
      "name": "Hollinger AI",
      "url": "https://hollingerai.online",
      "slogan": "Applied AI Performance Systems",
      "description": "Custom AI operations software for industrial and fabrication companies in British Columbia. A division of Hollinger Holdings Corporation.",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Hollinger Holdings Corporation",
        "url": "https://www.hollinger-holdings.com"
      },
      "founder": {
        "@type": "Person",
        "name": "Justin Strange",
        "jobTitle": "Founder"
      },
      "sameAs": ["https://www.hollinger-holdings.com"]
    },
    {
      "@type": "Person",
      "name": "Justin Strange",
      "jobTitle": "Founder",
      "worksFor": { "@id": "https://hollingerai.online/#organization" },
      "sameAs": ["https://www.hollinger-holdings.com/leadership/"]
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(url),
  verification: {
    google: "f-ku-NPU3c8qh4B3WalKDRXvgHh_yjOpmA0lvGkwxtU",
  },
  title: {
    default: "Hollinger AI | Applied AI Performance Systems",
    template: "%s | Hollinger AI",
  },
  description:
    "Hollinger AI builds custom AI operations software for industrial and trades businesses in BC. Fixed fee, delivered in weeks, owned by you. A division of Hollinger Holdings Corporation.",
  keywords: ["Hollinger AI", "Justin Strange", "AI operations software", "custom software BC", "QC dashboard", "Hollinger Holdings", "custom software Vancouver"],
  authors: [{ name: "Justin Strange" }],
  creator: "Justin Strange",
  openGraph: {
    siteName: "Hollinger AI",
    images: [{ url: "/hero.png", width: 1978, height: 1114, alt: "Hollinger AI" }],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
