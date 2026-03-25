import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apps, getAppBySlug } from "@/data/apps";
import { StoreButton } from "@/components/store-button";
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
    title: app.name,
    description: app.tagline,
  };
}

export default async function AppDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="flex items-start gap-5 mb-8">
        {app.icon && (
          <div className="w-20 h-20 rounded-2xl bg-border/50 flex items-center justify-center overflow-hidden shrink-0">
            <img src={app.icon} alt={app.name} className="w-20 h-20 rounded-2xl" />
          </div>
        )}
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{app.name}</h1>
            {app.status === "coming-soon" && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                Coming soon
              </span>
            )}
          </div>
          <p className="text-muted text-lg mt-1">{app.tagline}</p>
        </div>
      </div>

      <div className="flex gap-3 mb-10">
        {app.appStoreUrl && (
          <StoreButton href={app.appStoreUrl} store="app-store" />
        )}
        {app.playStoreUrl && (
          <StoreButton href={app.playStoreUrl} store="play-store" />
        )}
        {app.webUrl && (
          <a
            href={app.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium hover:bg-card transition-colors"
          >
            Website
          </a>
        )}
      </div>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
          About
        </h2>
        <p className="text-foreground/80 leading-relaxed">{app.description}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
          Stack
        </h2>
        <div className="flex gap-2 flex-wrap">
          {app.stack.map((tech) => (
            <span
              key={tech}
              className="text-sm px-3 py-1 rounded bg-border text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {app.screenshots && app.screenshots.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
            Screenshots
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {app.screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${app.name} screenshot ${i + 1}`}
                className="h-80 rounded-lg border border-border"
              />
            ))}
          </div>
        </section>
      )}

      <div className="flex gap-6 pt-6 border-t border-border text-sm text-muted">
        <Link
          href={`/privacy/${app.slug}`}
          className="hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href={`/support?app=${app.slug}`}
          className="hover:text-foreground transition-colors"
        >
          Support
        </Link>
      </div>
    </div>
  );
}
