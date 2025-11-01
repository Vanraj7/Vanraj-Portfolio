import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "🔐 PiVault - Hard & Cold Crypto Wallet with Raspberry Pi",
    href: "/projects",
    tags: ["Python", "Raspberry Pi", "BlueWallet", "BIP39", "PSBT", "QR"],
    image: {
      LIGHT: "/images/projects/pivaultLight.webp",
      DARK: "/images/projects/pivaultDark.webp",
    },
  },
  {
    index: 1,
    title: "🏢 MERN Stack Agent & Leads Management",
    href: "/projects",
    tags: ["MERN", "JWT", "React", "Tailwind", "Node.js", "MongoDB", "CSV"],
    image: {
      LIGHT: "/images/projects/mernAgentLight.webp",
      DARK: "/images/projects/mernAgentDark.webp",
    },
  },
  {
    index: 2,
    title: "🛡️ Fake Review Detection System",
    href: "/projects",
    tags: ["Python", "NLP", "Scikit-learn", "Gradio", "Anomaly Detection", "Sentiment"],
    image: {
      LIGHT: "/images/projects/fakereviewLight.webp",
      DARK: "/images/projects/fakereviewDark.webp",
    },
  },
  {
    index: 3,
    title: "🐄 Gau Seva",
    href: "/projects",
    tags: ["Nonprofit", "Donations", "Community", "Tech for Good"],
    image: {
      LIGHT: "/images/projects/gausevaLight.webp",
      DARK: "/images/projects/gausevaDark.webp",
    },
  },
  {
    index: 4,
    title: "📈 Stocky Rewards",
    href: "/projects",
    tags: ["Backend", "Stock APIs", "Node.js", "Cron", "Finance", "Double-entry"],
    image: {
      LIGHT: "/images/projects/stockyLight.webp",
      DARK: "/images/projects/stockyDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "PiVault",
    // favicon: "/images/projects/logos/pivault.ico",
    // imageUrl: [
    //   "/images/projects/pivaultLight.webp",
    //   "/images/projects/pivaultDark.webp",
    // ],
    description:
      "Secure air-gapped Bitcoin wallet using Raspberry Pi and Python. Offline PSBT signing with BlueWallet and QR-based transfer. Implements BIP39 and encrypted key storage for full offline protection.",
    sourceCodeHref: "#",
    liveWebsiteHref: undefined,
  },
  {
    name: "MERN Agent & Leads Management",
    // favicon: "/images/projects/logos/mern-agent.ico",
    // imageUrl: [
    //   "/images/projects/mernAgentLight.webp",
    //   "/images/projects/mernAgentDark.webp",
    // ],
    description:
      "Full-stack MERN app with Admin (JWT auth), agent management and CSV/XLSX lead upload. Equal lead distribution among agents with phone-based duplicate prevention and a React + Tailwind admin dashboard.",
    sourceCodeHref: "#",
    liveWebsiteHref: undefined,
  },
  {
    name: "Fake Review Detection",
    // favicon: "/images/projects/logos/fakereview.ico",
    // imageUrl: [
    //   "/images/projects/fakereviewLight.webp",
    //   "/images/projects/fakereviewDark.webp",
    // ],
    description:
      "NLP & ML system to detect fake airline reviews using feature engineering and models like Logistic Regression, Isolation Forest and One-Class SVM. Ensemble voting + Gradio frontend with confidence scoring.",
    sourceCodeHref: "#",
    liveWebsiteHref: undefined,
  },
  {
    name: "Gau Seva",
    // favicon: "/images/projects/logos/gauseva.ico",
    // imageUrl: [
    //   "/images/projects/gausevaLight.webp",
    //   "/images/projects/gausevaDark.webp",
    // ],
    description:
      "Nonprofit tech initiative blending digital outreach and donations to support cow welfare and community engagement. Designed and deployed donation platform for mindful giving and campaigns.",
    sourceCodeHref: "#",
    liveWebsiteHref: undefined,
  },
  {
    name: "Stocky Rewards",
    // favicon: "/images/projects/logos/stocky.ico",
    // imageUrl: [
    //   "/images/projects/stockyLight.webp",
    //   "/images/projects/stockyDark.webp",
    // ],
    description:
      "Backend to assign stock rewards to users for onboarding, referrals and milestones. APIs for rewards, portfolio valuation, ledger with double-entry tracking and hourly price updates via cron.",
    sourceCodeHref: "#",
    liveWebsiteHref: undefined,
  },
];
