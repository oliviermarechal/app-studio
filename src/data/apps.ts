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
  {
    slug: "meno",
    name: "Meno",
    tagline: "Comprenez votre ménopause. Reprenez le contrôle.",
    description:
      "Meno est un compagnon bienveillant pour traverser la ménopause. Loggez vos symptômes en quelques secondes (bouffées de chaleur, sommeil, humeur, brouillard mental, douleurs...), faites votre check-in du matin, suivez vos traitements, et préparez vos rendez-vous médecin avec un mémo automatique des points à aborder. Une analyse intelligente détecte les corrélations entre vos symptômes et votre quotidien (café, alcool, exercice, stress) pour vous aider à comprendre ce qui marche pour vous. Privacy-first : toutes vos données restent stockées localement sur votre téléphone, l'analyse IA se fait sur des données anonymisées. Conçue pour les femmes en périménopause et ménopause, en français.",
    supportEmail: "contact@getevox.fit",
    icon: "/icons/meno.png",
    stack: ["React Native", "Expo", "TypeScript", "Drizzle ORM", "SQLite", "NativeWind", "Go", "Claude AI"],
    status: "live",
    privacySections: [
      {
        title: "1. Notre engagement Privacy-First",
        content:
          "Meno est conçu autour d'un principe fondamental : vos données intimes vous appartiennent et restent sur votre téléphone. Nous ne stockons aucune donnée personnelle de santé sur nos serveurs. Pas de compte obligatoire, pas de cloud par défaut, pas de tracking comportemental.",
      },
      {
        title: "2. Données collectées",
        content:
          "Toutes les données que vous saisissez dans Meno (symptômes, intensité, check-ins du matin, traitements, événements lifestyle, notes, rendez-vous médicaux, points à aborder en consultation) sont stockées localement sur votre appareil dans une base de données SQLite gérée par Drizzle ORM. Ces données ne sont jamais transmises à nos serveurs. Aucun compte, aucun nom, aucun identifiant personnel, aucune information de contact n'est requis pour utiliser l'application.",
      },
      {
        title: "3. Analyse IA des patterns",
        content:
          "Lorsque vous demandez une analyse de vos données, Meno envoie un instantané anonymisé à notre fonction serverless dédiée (hébergée chez Scaleway), qui transmet la requête à Claude (Anthropic) pour détecter des patterns et corrélations. Cet instantané ne contient AUCUNE information personnelle identifiable :",
        items: [
          {
            label: "Ce qui est envoyé",
            description:
              "Statistiques agrégées sur les 30-90 derniers jours : fréquences de symptômes, intensités moyennes, types d'événements lifestyle, qualité de sommeil. Toutes les données sont anonymisées et agrégées avant l'envoi.",
          },
          {
            label: "Ce qui n'est jamais envoyé",
            description:
              "Vos notes textuelles libres, votre identité, vos coordonnées, votre localisation, le nom de votre médecin, les détails de vos rendez-vous, ou tout autre champ libre saisi dans l'application.",
          },
          {
            label: "Notre fonction d'analyse",
            description:
              "Notre fonction serverless agit uniquement comme un proxy sécurisé vers l'API Claude. Elle ne conserve aucune donnée, ne loggue aucune requête et ne stocke rien en base. Le code est volontairement minimaliste pour limiter la surface d'attaque.",
          },
          {
            label: "Anthropic (Claude AI)",
            description:
              "Anthropic traite la requête pour générer les insights et ne conserve pas les données au-delà du temps nécessaire au traitement. Voir leur politique de confidentialité.",
            url: "https://www.anthropic.com/privacy",
          },
        ],
      },
      {
        title: "4. Stockage local et persistance",
        content:
          "Toutes vos données sont stockées dans une base SQLite locale gérée par Drizzle ORM, protégée par le système de chiffrement de votre appareil (Data Protection sur iOS, File-Based Encryption sur Android). Si vous désinstallez Meno, toutes vos données sont définitivement supprimées. Aucune copie n'existe ailleurs.",
      },
      {
        title: "5. Sauvegarde cloud (optionnelle, Premium)",
        content:
          "Vous pouvez activer une sauvegarde chiffrée vers iCloud (iOS) ou Google Drive (Android) — uniquement si vous le souhaitez et si vous êtes utilisatrice Premium. Cette sauvegarde est chiffrée de bout en bout : nous ne pouvons pas lire vos données. La clé de chiffrement reste sur votre appareil.",
      },
      {
        title: "6. Apple HealthKit / Google Fit (optionnel)",
        content:
          "Avec votre permission explicite, Meno peut lire des données de santé (sommeil, fréquence cardiaque, activité physique) depuis Apple HealthKit ou Google Fit pour enrichir l'analyse de patterns. Ces données restent localement traitées et ne sont jamais envoyées à nos serveurs. Vous pouvez révoquer cette permission à tout moment dans les réglages de votre appareil.",
      },
      {
        title: "7. Abonnement Premium",
        content:
          "Meno propose un abonnement Premium optionnel (4,99€/mois ou 47,99€/an). Les transactions sont gérées par Apple (App Store) ou Google (Play Store) via RevenueCat.",
        items: [
          {
            label: "RevenueCat",
            description:
              "Gère la validation des abonnements et l'état d'accès Premium. Reçoit uniquement un identifiant anonyme d'abonnement, jamais vos données de santé.",
            url: "https://www.revenuecat.com/privacy",
          },
        ],
      },
      {
        title: "8. Aucune publicité, aucun tracking",
        content:
          "Meno ne contient aucune publicité, aucun tracker comportemental, aucun pixel d'analytics tiers. Nous ne vendons pas, ne louons pas et ne partageons pas vos données avec des courtiers en données ou des annonceurs. Jamais.",
      },
      {
        title: "9. Notifications",
        content:
          "Meno peut envoyer des notifications locales (check-in du matin, rappels de RDV) si vous l'autorisez. Ces notifications sont planifiées localement sur votre appareil et ne passent par aucun serveur externe. Vous pouvez les désactiver à tout moment.",
      },
      {
        title: "10. Vos droits (RGPD)",
        content:
          "En tant qu'application privacy-first, Meno respecte pleinement le RGPD :",
        items: [
          {
            label: "Droit d'accès",
            description:
              "Toutes vos données sont accessibles depuis l'application. Une fonction d'export complet (CSV/JSON) est disponible.",
          },
          {
            label: "Droit à la suppression",
            description:
              "Désinstaller l'application supprime définitivement toutes vos données. Vous pouvez aussi effacer vos données individuellement depuis les réglages de l'app.",
          },
          {
            label: "Droit à la portabilité",
            description:
              "Export complet de vos données au format CSV ou JSON depuis les réglages de l'application.",
          },
        ],
      },
      {
        title: "11. Avertissement médical",
        content:
          "Meno n'est pas un dispositif médical et ne remplace pas l'avis d'un professionnel de santé. L'application est un outil de suivi personnel et d'observation. Les insights et corrélations générés sont des observations statistiques, pas des diagnostics ou recommandations médicales. Consultez toujours un professionnel de santé pour toute question médicale.",
      },
      {
        title: "12. Modifications de cette politique",
        content:
          "Cette politique de confidentialité peut être mise à jour. Toute modification sera notifiée dans l'application et reflétée sur cette page avec une date de mise à jour.",
      },
      {
        title: "13. Contact",
        content:
          "Pour toute question concernant cette politique de confidentialité ou vos données, contactez-nous à contact@getevox.fit.",
      },
    ],
  },
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}
