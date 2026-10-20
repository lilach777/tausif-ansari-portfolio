/**
 * ALL SITE CONTENT LIVES HERE.
 *
 * Rule for every line: it is either a measurable before → after, or something
 * Tausif directly owned. Anything left as `null` / "" is hidden on the page
 * rather than shown as a guess. Fill it in when you have the verified fact.
 * Never use the em dash character anywhere in this file.
 */

export const profile = {
  name: "Tausif Ansari",
  email: "tausifansari3283@gmail.com",
  xHandle: "Creator3283",
  booking: "https://calendly.com/tausifansari",
  resume: "/Tausif-Ansari-_Community-Manager-Resume_20260625_222127_0000.pdf",
};

export const hero = {
  eyebrow: "Web3 community & social growth",
  headline: "I take early-stage web3 accounts from nothing to real reach.",
  sub: "I run community and social growth for Web3 teams, from Discord operations and ambassador programs to reply-led X growth.",
};

export type Stat = {
  value: number;
  decimals: number;
  prefix?: string;
  suffix: string;
  label: string;
  context: string;
};

/** Exactly four. Do not add a fifth. */
export const impact: Stat[] = [
  {
    // FereAI 6.8M + NovaSwap 1.1M + Defx 500K + BimaBTC 1.9M. TinyFish has no verified number.
    value: 10.3,
    decimals: 1,
    suffix: "M",
    label: "X impressions",
    context: "Across four quantified client accounts",
  },
  {
    value: 13,
    decimals: 0,
    suffix: "x",
    label: "FereAI improvement",
    context: "Weekly X impression rate, after vs. before",
  },
  {
    value: 10,
    decimals: 0,
    suffix: "K",
    label: "Discord members from 1,920",
    context: "FereAI Discord server · Nov 2025 to May 2026",
  },
  {
    value: 4.7,
    decimals: 1,
    suffix: "%",
    label: "NovaSwap engagement",
    context: "Engagement rate on 1.1M impressions",
  },
];

export type Metric = { value: string; label: string };

export type Evidence = {
  src: string;
  full: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  /** Optional shaded region marking a period that is NOT attributable to Tausif. Fractions of image size. */
  excluded?: { left: number; right: number; top: number; bottom: number; label: string };
};

/**
 * Every case study is a Crowwd Labs client account (shown as "Crowwd Labs client").
 * Ownership-led studies simply omit `before` / `after`.
 */
export type CaseStudy = {
  id: string;
  name: string;
  descriptor: string;
  headline: string;
  /** Omit when there is no honest "before" number. */
  before?: { value: string; label: string };
  /** Omit when there is no verified headline number. */
  after?: { value: string; label: string };
  timeframe?: string;
  /** Verified numbers, or plain-text scope details for ownership-led studies. */
  metrics: Metric[];
  /** true when `metrics` are words (scope), not numbers: rendered smaller. */
  scopeMetrics?: boolean;
  owned: string[];
  evidence?: Evidence;
};

export const work: CaseStudy[] = [
  {
    id: "fereai",
    name: "FereAI",
    descriptor: "AI agent platform · X account @fere_ai",
    headline: "~15K weekly impressions before → 6.8M over eight months in the analytics window.",
    before: { value: "~15K", label: "Impressions / week" },
    after: { value: "6.8M", label: "Impressions" },
    timeframe: "My work: Nov 2025 to May 2026 · X window Sep 2025 to Apr 2026",
    metrics: [
      { value: "13x", label: "vs. prior weekly rate" },
      { value: "192.4K", label: "Engagements" },
      { value: "21.7K", label: "Profile visits" },
      { value: "1,920 → 10K", label: "Discord members" },
    ],
    owned: [
      "Owned the X engagement strategy for @fere_ai, built on reply-led reach.",
      "Took the account from ~15K impressions a week to 13x that rate.",
      "Grew the FereAI Discord from 1,920 to 10K members between Nov 2025 and May 2026.",
      "Reported engagement, sentiment and growth back to the FereAI team.",
    ],
    evidence: {
      src: "/evidence/fereai-x-analytics-1600.webp",
      full: "/evidence/fereai-x-analytics-full.webp",
      width: 1600,
      height: 921,
      alt: "X Analytics account overview for @fere_ai, 1 Sep 2025 to 27 Apr 2026: 6.8M impressions, 2.8% engagement rate, 192.4K engagements, 21.7K profile visits.",
      caption:
        "X Analytics, @fere_ai. The export window runs 1 Sep 2025 to 27 Apr 2026. I started in Nov 2025, so Sep to Oct (shaded) is the pre-existing baseline, not my work. The 6.8M total covers the full window, baseline included.",
      excluded: { left: 0.3305, right: 0.4575, top: 0.235, bottom: 0.525, label: "Baseline · before me" },
    },
  },
  {
    id: "novaswap",
    name: "NovaSwap",
    descriptor: "DEX · X account @Novaswap",
    headline: "Zero to 1.1M impressions at 4.7% engagement in under four months.",
    before: { value: "0", label: "Impressions" },
    after: { value: "1.1M", label: "Impressions" },
    timeframe: "Under four months",
    metrics: [
      { value: "4.7%", label: "Engagement rate" },
      { value: "53.9K", label: "Engagements" },
      { value: "<4 mo", label: "Timeframe" },
    ],
    owned: [
      "Owned the growth execution behind NovaSwap’s zero → 1.1M impressions at 4.7% engagement.",
      "Ran reply-led reach and account-level engagement on @Novaswap.",
      "Ran NovaSwap’s Discord and Telegram community operations.",
    ],
    evidence: {
      src: "/evidence/novaswap-x-analytics-1600.webp",
      full: "/evidence/novaswap-x-analytics-full.webp",
      width: 1600,
      height: 922,
      alt: "X Analytics account overview for @Novaswap, 1 Nov 2025 to 27 Apr 2026: 1.1M impressions, 4.7% engagement rate, 53.9K engagements, 9K profile visits.",
      caption: "X Analytics, @Novaswap, 1 Nov 2025 to 27 Apr 2026. Near-zero impressions through November, then the climb.",
    },
  },
  {
    id: "defx",
    name: "Defx",
    descriptor: "The third account I ran simultaneously",
    headline: "500K impressions, run in parallel with FereAI and NovaSwap.",
    after: { value: "500K", label: "Impressions · third account run simultaneously" },
    timeframe: "Simultaneous with FereAI and NovaSwap",
    metrics: [],
    owned: ["Ran Defx’s X engagement campaigns while operating FereAI and NovaSwap at the same time."],
    // TODO: add a Defx X Analytics screenshot here (same shape as FereAI's `evidence`).
  },
  {
    id: "bimabtc",
    name: "BimaBTC",
    descriptor: "Discord, Telegram & X",
    headline: "Owned BimaBTC’s X account and community operations across Discord and Telegram.",
    // 1.9M is the X Analytics total for 1 Sep 2025 to 27 Apr 2026 (see screenshot).
    after: { value: "1.9M", label: "X impressions" },
    timeframe: "X Analytics window: 1 Sep 2025 to 27 Apr 2026",
    scopeMetrics: true,
    metrics: [
      { value: "X account", label: "Ran" },
      { value: "Discord + Telegram", label: "Community operations" },
      { value: "Moderation", label: "Day-to-day" },
    ],
    owned: [
      "Ran BimaBTC’s X account: 1.9M X impressions in the analytics window.",
      "Owned Discord and Telegram community operations and moderation.",
      "Reported community engagement, sentiment and growth back to the client.",
    ],
    evidence: {
      src: "/evidence/bimabtc-x-analytics-1600.webp",
      full: "/evidence/bimabtc-x-analytics-full.webp",
      width: 1600,
      height: 919,
      alt: "X Analytics account overview for @BimaBTC, 1 Sep 2025 to 27 Apr 2026: 1.9M impressions, 1.6% engagement rate, 30.5K engagements, 3.3K profile visits.",
      caption:
        "X Analytics, @BimaBTC. The export window runs 1 Sep 2025 to 27 Apr 2026, and the 1.9M total covers all of it. My Crowwd Labs work began Nov 2025, so Sep to Oct (shaded) predates me.",
      excluded: { left: 0.3305, right: 0.4575, top: 0.235, bottom: 0.525, label: "Before me" },
    },
  },
  {
    // Ownership-led: no verified TinyFish metrics or screenshots exist. Not counted in 10.3M.
    id: "tinyfish",
    name: "TinyFish",
    descriptor: "Discord & Telegram Operations",
    headline:
      "Built and ran the Discord server for a Crowwd Labs hackathon, delivered session recordings to the client, and managed the community operation through the event.",
    scopeMetrics: true,
    metrics: [
      { value: "Hackathon", label: "Event" },
      { value: "Discord server", label: "Built and ran" },
      { value: "Session recordings", label: "Delivered" },
    ],
    owned: [
      "Built and ran the Discord server for the hackathon.",
      "Delivered session recordings to the client.",
      "Managed the community operation through the event.",
    ],
  },
];

export type Role = {
  org: string;
  title: string;
  /** Shown when the role is not current. Use "to" for ranges, never a dash. */
  period?: string;
  /** Shows the green CURRENT tag in place of a date. */
  current?: boolean;
  /** Client accounts run under this role (shown above the ownership points). */
  clients?: string[];
  /** One precise ownership line. Crowwd Labs alone carries its quantified client results. */
  points: string[];
};

export const experience: Role[] = [
  {
    org: "Hemi Labs",
    title: "Community Moderator",
    current: true,
    points: ["Own Discord and Telegram community operations for Hemi Labs."],
  },
  {
    org: "Crowwd Labs",
    title: "Community Manager & Social Engagement Specialist",
    period: "Nov 2025 to May 2026",
    clients: ["FereAI", "NovaSwap", "Defx", "BimaBTC", "TinyFish"],
    points: [
      // The FereAI analytics window starts Sep 2025, before I joined in Nov 2025, so the line says so.
      "Owned X engagement strategy for FereAI: ~15K weekly impressions before → 6.8M over the eight-month analytics window (Sep 2025 to Apr 2026; I joined Nov 2025).",
      "Owned NovaSwap’s growth execution from zero to 1.1M impressions in under four months at 4.7% engagement.",
      "Ran Defx as a third account in parallel, reaching 500K impressions.",
      "Ran BimaBTC and TinyFish as additional Crowwd Labs client accounts.",
    ],
  },
  {
    org: "4DLabs",
    title: "Moderator",
    current: true,
    points: ["Own day-to-day moderation and community operations across 4DLabs."],
  },
  {
    org: "Odyssey",
    title: "Ambassador",
    current: true,
    points: ["Represent Odyssey as an Ambassador and drive community engagement."],
  },
  {
    org: "Hyperbolic AI",
    title: "HyperMod & Lead Ambassador",
    period: "2024 to 2025",
    points: ["Owned regional community engagement as HyperMod and Lead Ambassador."],
  },
  {
    org: "Swisstronik",
    title: "Lead Ambassador",
    period: "2024 to 2025",
    points: ["Led the ambassador program and represented the ecosystem across community channels and events."],
  },
  {
    org: "DehouseAI",
    title: "Community Moderator",
    period: "2025",
    points: ["Owned Discord moderation, onboarding and user support."],
  },
];

/** Exactly five. */
export const capabilities = [
  {
    title: "Discord / Telegram Operations",
    line: "Server structure, moderation systems, onboarding flows and day-to-day community operations.",
  },
  {
    title: "Community Growth",
    line: "Growth loops, engagement systems and retention mechanics for early-stage Web3 communities.",
  },
  {
    title: "X Engagement & Reply-Led Reach",
    line: "Strategic replies and account-level engagement designed to turn small accounts into high-reach accounts.",
  },
  {
    title: "Ambassador Programs",
    line: "Program structure, regional/community activation and contributor management.",
  },
  {
    title: "Reporting & Analytics",
    line: "Turning platform data into clear growth, engagement and performance reporting.",
  },
];

export const toolkit = [
  { group: "Community", tools: ["Discord", "Telegram"] },
  { group: "Growth", tools: ["X", "Zealy", "Galxe", "Layer3"] },
  { group: "Analytics", tools: ["Dune", "X Analytics"] },
];

export const contact = {
  headline: "Need real reach, not another community dashboard?",
  sub: "Tell me the account and where it is today. I’ll tell you what I’d run.",
};
