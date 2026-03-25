import type { Metadata } from "next";
import { apps } from "@/data/apps";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with any of our apps.",
};

export default function SupportPage() {
  const liveApps = apps.filter((a) => a.status === "live");

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight mb-3">Support</h1>
      <p className="text-foreground/60 mb-10 max-w-lg">
        Have a question, found a bug, or need help? Send us a message and
        we&apos;ll get back to you as soon as possible.
      </p>

      <ContactForm apps={liveApps.map((a) => ({ slug: a.slug, name: a.name }))} />
    </div>
  );
}
