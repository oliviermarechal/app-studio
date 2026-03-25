import type { Metadata } from "next";
import { apps } from "@/data/apps";
import { AppCard } from "@/components/app-card";

export const metadata: Metadata = {
  title: "Apps",
  description: "All apps built by OM Studio. Mobile apps for fitness, games, and utilities.",
};

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Apps</h1>
      <p className="text-muted mb-10">Everything I&apos;ve shipped.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {apps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </div>
  );
}
