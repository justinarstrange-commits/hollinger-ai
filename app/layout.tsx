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

export const metadata: Metadata = {
  title: "Hollinger AI Power Solutions",
  description:
    "AI workflow integration for operations teams that need results. Without the complexity.",
  metadataBase: new URL(url),
  openGraph: {
    title: "Hollinger AI Power Solutions",
    description:
      "AI workflow integration for operations teams that need results. Without the complexity.",
    url,
    siteName: "Hollinger AI Power Solutions",
    images: [
      {
        url: "/hero.png",
        width: 1978,
        height: 1114,
        alt: "Hollinger AI Power Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hollinger AI Power Solutions",
    description:
      "AI workflow integration for operations teams that need results. Without the complexity.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
