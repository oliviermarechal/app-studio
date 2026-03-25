import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apps, getAppBySlug } from "@/data/apps";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return {};

  return {
    title: `Privacy Policy - ${app.name}`,
    description: `Privacy policy for ${app.name}.`,
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();

  const hasCustomPolicy = app.privacySections && app.privacySections.length > 0;

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Link
        href={`/apps/${app.slug}`}
        className="text-sm text-muted hover:text-foreground transition-colors mb-6 inline-block"
      >
        &larr; Back to {app.name}
      </Link>

      <h1 className="text-3xl font-bold tracking-tight mb-8">
        Privacy Policy &mdash; {app.name}
      </h1>

      <div className="prose prose-invert max-w-2xl space-y-6 text-foreground/80 leading-relaxed">
        <p>
          <strong className="text-foreground">Last updated:</strong> March 25,
          2026
        </p>

        {hasCustomPolicy ? (
          app.privacySections!.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
                {section.title}
              </h2>
              <p>{section.content}</p>
              {section.items && (
                <ul className="mt-3 space-y-3 list-none pl-0">
                  {section.items.map((item) => (
                    <li key={item.label} className="pl-4 border-l-2 border-foreground/20">
                      <strong className="text-foreground">{item.label}</strong>
                      {" — "}
                      {item.description}
                      {item.url && (
                        <>
                          {" "}
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
                          >
                            Privacy policy
                          </a>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
        ) : (
          <>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
              1. Data Collection
            </h2>
            <p>
              {app.name} collects minimal data necessary to provide its core
              functionality. We may collect anonymous usage analytics to improve
              the app experience. No personal data is sold to third parties.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
              2. Account Data
            </h2>
            <p>
              If {app.name} offers account creation, we store your email address
              solely for authentication purposes. You can request deletion of
              your account and associated data at any time.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
              3. Third-Party Services
            </h2>
            <p>
              The app may use third-party services (analytics, crash reporting,
              advertising) that collect anonymized data according to their own
              privacy policies.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
              4. Data Storage
            </h2>
            <p>
              Your data is stored securely. Most app data is stored locally on
              your device. When cloud sync is available, data is encrypted in
              transit.
            </p>
          </>
        )}

        <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
          Contact
        </h2>
        <p>
          For any questions about this privacy policy, contact us at{" "}
          <a
            href={`mailto:${app.supportEmail}`}
            className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
          >
            {app.supportEmail}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
