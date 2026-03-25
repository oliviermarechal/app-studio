export interface PrivacySection {
  title: string;
  content: string;
  items?: { label: string; description: string; url?: string }[];
}

export interface App {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  webUrl?: string;
  supportEmail: string;
  screenshots?: string[];
  icon?: string;
  stack: string[];
  status: "live" | "coming-soon";
  privacySections?: PrivacySection[];
}

export const apps: App[] = [
  {
    slug: "evox",
    name: "Evox Training",
    tagline: "Train, track, and benchmark your functional fitness.",
    description:
      "Evox is a mobile app built for CrossFit and Hyrox athletes. Advanced timers (AMRAP, EMOM, Tabata, For Time), AI-powered workout import, session tracking with PR detection, performance graphs, and a complete movement & benchmark database. 400+ downloads in less than 2 months.",
    appStoreUrl: "https://apps.apple.com/app/id6754575831",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.loxx.evox",
    webUrl: "https://getevox.fit",
    supportEmail: "contact@getevox.fit",
    icon: "/icons/evox.png",
    stack: ["React Native", "Expo", "TypeScript", "Go", "PostgreSQL"],
    status: "live",
  },
  {
    slug: "scorefast",
    name: "ScoreFast",
    tagline: "The simplest score keeper for your games.",
    description:
      "ScoreFast is a lightweight mobile scorekeeper. Add players, track scores with customizable increments, save game presets, undo mistakes. Clean, fast, no clutter. Built to live autonomously with minimal maintenance.",
    supportEmail: "contact@getevox.fit",
    icon: "/icons/scorefast.png",
    stack: ["React Native", "Expo", "TypeScript"],
    status: "live",
    privacySections: [
      {
        title: "1. Data Collection",
        content:
          "ScoreFast does not collect, store, or share any personal data. All game data (scores, player names, presets) is stored locally on your device and is never transmitted to any server.",
      },
      {
        title: "2. Third-Party Services",
        content:
          "ScoreFast uses the following third-party services:",
        items: [
          {
            label: "Google AdMob (free version only)",
            description:
              "Displays ads. AdMob may collect device identifiers for ad delivery. We request non-personalized ads only.",
            url: "https://policies.google.com/privacy",
          },
          {
            label: "RevenueCat",
            description:
              "Manages in-app purchases. RevenueCat processes purchase transactions and entitlement status.",
            url: "https://www.revenuecat.com/privacy",
          },
        ],
      },
      {
        title: "3. Data Storage",
        content:
          "All app data is stored locally on your device using on-device storage. No data is sent to external servers. There is no cloud sync, no account system, and no remote database.",
      },
      {
        title: "4. Analytics & Tracking",
        content:
          "ScoreFast does not use any analytics, crash reporting, or tracking tools. The app does not track your behavior or usage patterns.",
      },
      {
        title: "5. Children's Privacy",
        content:
          "ScoreFast does not knowingly collect any personal information from children. Since no personal data is collected from any user, the app is safe for all ages.",
      },
      {
        title: "6. Changes to This Policy",
        content:
          "We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated date.",
      },
    ],
  },
  {
    slug: "novatech-ai-tycoon",
    name: "NovaTech: AI Tycoon",
    tagline: "Build your AI empire, one tap at a time.",
    description:
      "An idle tycoon game where you build an AI empire. Manage 9 AI businesses, hire managers, train models across quality tiers, prestige with neural resets, complete daily quests, and climb the ranks. Cyberpunk-themed UI with offline earnings.",
    supportEmail: "contact@getevox.fit",
    icon: "/icons/novatech.png",
    stack: ["React Native", "Expo", "TypeScript"],
    status: "coming-soon",
  },
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}
