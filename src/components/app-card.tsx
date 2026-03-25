import Link from "next/link";
import type { App } from "@/data/apps";

export function AppCard({ app }: { app: App }) {
  return (
    <Link
      href={`/apps/${app.slug}`}
      className="block rounded-lg border border-border bg-card p-6 hover:border-muted transition-colors"
    >
      <div className="flex items-start gap-4">
        {app.icon && (
          <div className="w-14 h-14 rounded-xl bg-border/50 flex items-center justify-center overflow-hidden shrink-0">
            <img src={app.icon} alt={app.name} className="w-14 h-14 rounded-xl" />
          </div>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-lg">{app.name}</h3>
            {app.status === "coming-soon" && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                Coming soon
              </span>
            )}
          </div>
          <p className="text-muted text-sm mt-1">{app.tagline}</p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {app.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded bg-border text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
