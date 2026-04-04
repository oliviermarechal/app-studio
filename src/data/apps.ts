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
    tagline: "Build your AI empire from a garage to a quantum lab.",
    description:
      "NovaTech is an idle tycoon game where you build an AI empire from scratch. Start with a simple chatbot, scale to 9 AI businesses, hire AI managers to automate production, hit milestones for permanent multipliers, and release AI versions to earn synapses. Features a Quantum Lab with experiments, daily quests, login streaks, achievements, patents, timed events, and challenges. Cyberpunk-themed control room UI with offline earnings.",
    supportEmail: "contact@getevox.fit",
    icon: "/icons/novatech.png",
    stack: ["React Native", "Expo", "TypeScript", "i18next"],
    status: "live",
    privacySections: [
      {
        title: "1. Data Collection",
        content:
          "NovaTech: AI Tycoon does not collect, store, or share any personal data. All game progress (generators, upgrades, prestige data, achievements, quests) is stored locally on your device using AsyncStorage and is never transmitted to any external server.",
      },
      {
        title: "2. Third-Party Services",
        content:
          "NovaTech uses the following third-party services:",
        items: [
          {
            label: "Google AdMob",
            description:
              "Displays rewarded video ads (optional, to earn in-game bonuses). AdMob may collect device identifiers (IDFA) for ad delivery and personalization, subject to your App Tracking Transparency (ATT) consent on iOS. If you decline tracking, only non-personalized ads are shown. You can play the entire game without watching any ads.",
            url: "https://policies.google.com/privacy",
          },
          {
            label: "RevenueCat",
            description:
              "Manages optional in-app purchases (Starter Pack, VIP Pass, Synapse Pack, Quantum Pack). RevenueCat processes purchase transactions and entitlement status. No personal data beyond purchase receipts is shared.",
            url: "https://www.revenuecat.com/privacy",
          },
          {
            label: "Expo Insights",
            description:
              "Collects anonymous usage analytics (session count, app version) to help improve the game. No personally identifiable information is collected.",
            url: "https://expo.dev/privacy",
          },
          {
            label: "Expo Updates",
            description:
              "Delivers over-the-air updates to fix bugs and improve the game without requiring a full app store update. No personal data is collected.",
            url: "https://expo.dev/privacy",
          },
        ],
      },
      {
        title: "3. Data Storage",
        content:
          "All game data is stored locally on your device using AsyncStorage. There is no cloud sync, no account system, no login required, and no remote database. Your game progress stays on your device. Uninstalling the app will delete all saved data.",
      },
      {
        title: "4. Analytics & Tracking",
        content:
          "NovaTech uses Expo Insights for anonymous, aggregated analytics only (e.g., number of active users, app version distribution). We do not track individual user behavior, gameplay patterns, or personal information.",
      },
      {
        title: "5. Advertising & App Tracking Transparency",
        content:
          "On iOS 14.5+, NovaTech requests your permission via Apple's App Tracking Transparency (ATT) framework before allowing AdMob to use your device identifier (IDFA) for personalized advertising. If you decline, only non-personalized ads are shown. Your choice does not affect gameplay. The IDFA is used solely by Google AdMob for ad delivery and is not stored or processed by us. You can change your tracking preference at any time in your device Settings > Privacy & Security > Tracking.",
      },
      {
        title: "6. In-App Purchases",
        content:
          "NovaTech offers optional in-app purchases. All transactions are processed by Apple (App Store) or Google (Play Store) through RevenueCat. We do not have access to your payment information. The game is fully playable without any purchases.",
      },
      {
        title: "7. Push Notifications",
        content:
          "NovaTech may send local push notifications to remind you about offline earnings, available challenges, or login streak rewards. These notifications are scheduled locally on your device and do not involve any external server. You can disable them at any time in your device settings.",
      },
      {
        title: "8. Children's Privacy",
        content:
          "NovaTech does not knowingly collect any personal information from children under 13. Since no personal data is collected from any user, the app is safe for all ages. The game is rated 4+ and contains no objectionable content.",
      },
      {
        title: "9. Your Rights",
        content:
          "Since we do not collect or store any personal data on our servers, there is no personal data to access, modify, or delete. All game data is stored locally on your device and can be deleted by uninstalling the app.",
      },
      {
        title: "10. Changes to This Policy",
        content:
          "We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated effective date. Continued use of the app after changes constitutes acceptance of the updated policy.",
      },
      {
        title: "11. Contact",
        content:
          "If you have any questions about this privacy policy, please contact us at contact@getevox.fit.",
      },
    ],
  },
  {
    slug: "spin-it",
    name: "SpinIt",
    tagline: "Spin the Wheel — Random Picker.",
    description:
      "SpinIt is a fun and polished wheel spinner app. Create custom wheels, spin to pick a random option, and let chance decide. Perfect for games, decisions, giveaways, or just for fun. Save your wheels, customize colors, and enjoy smooth animations. No account needed — everything stays on your device.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.loxx.spinit",
    supportEmail: "contact@getevox.fit",
    icon: "/icons/spinit.png",
    stack: ["React Native", "Expo", "TypeScript", "Skia", "Reanimated"],
    status: "live",
    privacySections: [
      {
        title: "1. Data Collection",
        content:
          "SpinIt does not collect, store, or share any personal data. All your wheels, settings, and preferences are stored locally on your device using AsyncStorage and are never transmitted to any external server.",
      },
      {
        title: "2. Third-Party Services",
        content:
          "SpinIt uses the following third-party services:",
        items: [
          {
            label: "Google AdMob (free version only)",
            description:
              "Displays ads to support the free version of the app. AdMob may collect device identifiers for ad delivery. We request non-personalized ads only. You can remove all ads with a one-time purchase.",
            url: "https://policies.google.com/privacy",
          },
          {
            label: "RevenueCat",
            description:
              "Manages the optional one-time in-app purchase to remove ads. RevenueCat processes purchase transactions and entitlement status. No personal data beyond purchase receipts is shared.",
            url: "https://www.revenuecat.com/privacy",
          },
        ],
      },
      {
        title: "3. Data Storage",
        content:
          "All app data (custom wheels, settings, preferences) is stored locally on your device using AsyncStorage. There is no cloud sync, no account system, no login required, and no remote database. Uninstalling the app will delete all saved data.",
      },
      {
        title: "4. Analytics & Tracking",
        content:
          "SpinIt does not use any analytics, crash reporting, or tracking tools. The app does not track your behavior or usage patterns. AdMob may use device identifiers for ad targeting as described in Google's privacy policy.",
      },
      {
        title: "5. In-App Purchases",
        content:
          "SpinIt offers an optional one-time purchase to remove all ads. The transaction is processed by Apple (App Store) or Google (Play Store) through RevenueCat. We do not have access to your payment information. The app is fully functional without any purchase.",
      },
      {
        title: "6. Children's Privacy",
        content:
          "SpinIt does not knowingly collect any personal information from children under 13. Since no personal data is collected from any user, the app is safe for all ages.",
      },
      {
        title: "7. Your Rights",
        content:
          "Since we do not collect or store any personal data on our servers, there is no personal data to access, modify, or delete. All app data is stored locally on your device and can be deleted by uninstalling the app.",
      },
      {
        title: "8. Changes to This Policy",
        content:
          "We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated effective date. Continued use of the app after changes constitutes acceptance of the updated policy.",
      },
      {
        title: "9. Contact",
        content:
          "If you have any questions about this privacy policy, please contact us at contact@getevox.fit.",
      },
    ],
  },
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}
