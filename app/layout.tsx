import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tausif Ansari | Web3 Community & Social Growth",
  description:
    "I take early-stage web3 accounts from nothing to real reach. FereAI: ~15K impressions/week to 6.8M. NovaSwap: zero to 1.1M at 4.7% engagement.",
};

export const viewport: Viewport = { themeColor: "#09090a" };

// Fonts load from Google Fonts at runtime (free), so builds never depend on fetching them.
const fonts =
  "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Instrument+Serif:ital@1&family=JetBrains+Mono:wght@400;500&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={fonts} />
      </head>
      <body>{children}</body>
    </html>
  );
}
