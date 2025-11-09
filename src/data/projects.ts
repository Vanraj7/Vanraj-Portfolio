/* eslint-disable prettier/prettier */
import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  // {
  //   index: 0,
  //   title: "🔐 PiVault - Hard & Cold Crypto Wallet with Raspberry Pi",
  //   href: "/projects",
  //   tags: ["Python", "Raspberry Pi", "BlueWallet", "BIP39", "PSBT", "QR"],
  //   image: {
  //     LIGHT: "/images/projects/pivaultLight.webp",
  //     DARK: "/images/projects/pivaultDark.webp",
  //   },
  // },
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
  // {
  //   index: 2,
  //   title: "🛡️ Fake Review Detection System",
  //   href: "/projects",
  //   tags: ["Python", "NLP", "Scikit-learn", "Gradio", "Anomaly Detection", "Sentiment"],
  //   image: {
  //     LIGHT: "/images/projects/fakereviewLight.webp",
  //     DARK: "/images/projects/fakereviewDark.webp",
  //   },
  // },
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
  // {
  //   index: 5,
  //   title: "🌊 Outer Banks Compiler - Themed Programming Language & Compiler",
  //   href: "/projects",
  //   tags: ["Flex", "Bison", "Compiler", "Language Design", "Academic"],
  //   image: {
  //     LIGHT: "/images/projects/outerbanksLight.webp",
  //     DARK: "/images/projects/outerbanksDark.webp",
  //   },
  // },
  // {
  //   index: 6,
  //   title: "💧 Smart Irrigation System - Soil Moisture & IoT (Blynk)",
  //   href: "/projects",
  //   tags: ["IoT", "Arduino", "ESP8266", "Blynk", "Sensor Integration", "Automation"],
  //   image: {
  //     LIGHT: "/images/projects/smartIrrigationLight.webp",
  //     DARK: "/images/projects/smartIrrigationDark.webp",
  //   },
  // },
  {
    index: 7,
    title: "🧪 Sauce Demo App - Selenium Automation",
    href: "https://github.com/Vanraj7/RetailAutomation",
    tags: ["Selenium", "Python", "Automation", "Exploratory Testing"],
    image: {
      LIGHT: "/images/projects/sauceDemoLight.webp",
      DARK: "/images/projects/sauceDemoDark.webp",
    },
  },
  {
    index: 8,
    title: "🔐 Dashboard Login Automation - Janitri",
    href: "https://github.com/Vanraj7/janitri-login-automation",
    tags: ["Java", "Selenium WebDriver", "TestNG", "POM", "Automation"],
    image: {
      LIGHT: "/images/projects/dashboardLoginLight.webp",
      DARK: "/images/projects/dashboardLoginDark.webp",
    },
  },
  {
    index: 9,
    title: "🗂️ Ask Manager – Task Management System",
    href: "https://github.com/Vanraj7/task-manager",
    tags: ["Node.js", "Express", "MySQL", "React", "JWT", "Sequelize", "REST API"],
    image: {
      LIGHT: "/images/projects/askManagerLight.webp",
      DARK: "/images/projects/askManagerDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "PiVault",
    description:
      "Secure air-gapped Bitcoin wallet using Raspberry Pi and Python. Offline PSBT signing with BlueWallet and QR-based transfer. Implements BIP39 and encrypted key storage for full offline protection.",
    sourceCodeHref: "#",
    liveWebsiteHref: undefined,
  },
  {
    name: "MERN Agent & Leads Management",
    description:
      "Full-stack MERN app with Admin (JWT auth), agent management and CSV/XLSX lead upload. Equal lead distribution among agents with phone-based duplicate prevention and a React + Tailwind admin dashboard.",
    sourceCodeHref: "#",
    liveWebsiteHref: undefined,
  },
  {
    name: "Fake Review Detection",
    description:
      "NLP & ML system to detect fake airline reviews using feature engineering and models like Logistic Regression, Isolation Forest and One-Class SVM. Ensemble voting + Gradio frontend with confidence scoring.",
    sourceCodeHref: "#",
    liveWebsiteHref: undefined,
  },
  {
    name: "Gau Seva",
    description:
      "Nonprofit tech initiative blending digital outreach and donations to support cow welfare and community engagement. Designed and deployed donation platform for mindful giving and campaigns.",
    sourceCodeHref: "#",
    liveWebsiteHref: undefined,
  },
  {
    name: "Stocky Rewards",
    description:
      "Backend to assign stock rewards to users for onboarding, referrals and milestones. APIs for rewards, portfolio valuation, ledger with double-entry tracking and hourly price updates via cron.",
    sourceCodeHref: "#",
    liveWebsiteHref: undefined,
  },
  {
    name: "Outer Banks Compiler",
    description:
      "The Outer Banks Compiler is a themed programming language and compiler project inspired by the charm and raw energy of the Outer Banks. Built using powerful tools like Flex and Bison, it brings a structured yet aesthetically engaging approach to programming language design. Through simplified syntax and coastal metaphors, it makes learning compiler concepts intuitive and engaging perfect for academic exploration and creative expression.",
    sourceCodeHref: "#",
    liveWebsiteHref: undefined,
  },
  {
    name: "Smart Irrigation System",
    description:
      "This smart irrigation system uses NodeMCU (ESP8266), a soil moisture sensor, and a relay pump. Extra sensors (DHT11, LDR) enhance monitoring, with data sent to Blynk IoT for tracking, control, and alerts. It saves water, boosts plant health, and cuts manual effort through automation.",
    sourceCodeHref: "#",
    liveWebsiteHref: undefined,
  },
  {
    name: "Sauce Demo App",
    description:
      "Designed a comprehensive test including test case design, bug reporting, exploratory testing, and automation. Developed a Selenium Python script to automate login, product selection, and cart verification on the Sauce Demo App. Ensured 100% reproducibility of key test cases and accelerated regression testing.",
    sourceCodeHref: "https://github.com/Vanraj7/RetailAutomation",
    liveWebsiteHref: undefined,
  },
  {
    name: "Dashboard Login Automation",
    description:
      "Automated the Janitri Dashboard login page using Java, Selenium WebDriver, TestNG, and Page Object Model (POM). Designed manual test cases (functional, negative, UI, boundary) and automated scenarios including password masking toggle, error handling, and element presence validation. Improved test coverage by 40% and reduced manual testing effort.",
    sourceCodeHref: "https://github.com/Vanraj7/janitri-login-automation",
    liveWebsiteHref: undefined,
  },
  {
    name: "Ask Manager",
    description:
      "Created a full-stack Task Manager with JWT authentication, role-based access (Admin/User), and CRUD operations. Built a REST API with Node.js + Express + MySQL and a React frontend for secure task management. Integrated Swagger API docs and Sequelize ORM. Optimized backend with input validation and indexing, improving API response times by 30%.",
    sourceCodeHref: "https://github.com/Vanraj7/task-manager",
    liveWebsiteHref: undefined,
  },
];
