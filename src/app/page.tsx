import { apps } from "@/data/apps";
import { AppCard } from "@/components/app-card";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <section className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Olivier Marechal
        </h1>
        <p className="text-muted text-lg max-w-lg">
          I build simple, useful mobile apps. Shipped fast, built to last.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-6">
          Apps
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>

      <section className="mt-20 pt-10 border-t border-border">
        <p className="text-muted">
          Need a similar app?{" "}
          <a
            href="mailto:contact@getevox.fit"
            className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
          >
            Get in touch
          </a>
          .
        </p>
      </section>
    </div>
  );
}
