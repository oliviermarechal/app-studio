import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Indie developer building simple, useful mobile apps.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight mb-6">About</h1>

      <div className="space-y-4 text-foreground/80 leading-relaxed max-w-2xl">
        <p>
          I&apos;m Olivier, an indie developer who ships mobile apps. I focus on
          building products that are simple, fast, and actually useful.
        </p>
        <p>
          My stack revolves around <strong className="text-foreground">React Native</strong>,{" "}
          <strong className="text-foreground">TypeScript</strong>,{" "}
          <strong className="text-foreground">Go</strong>, and{" "}
          <strong className="text-foreground">PostgreSQL</strong>. I build
          full-stack: from the API to the App Store.
        </p>
        <p>
          Philosophy: ship small, iterate fast, keep it lean. No bloat, no
          over-engineering. If an app can solve one problem well, it&apos;s worth
          building.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-muted">
          Want to work together?{" "}
          <a
            href="mailto:contact@getevox.fit"
            className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
          >
            contact@getevox.fit
          </a>
        </p>
      </div>
    </div>
  );
}
