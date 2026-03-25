"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

interface ContactFormProps {
  apps: { slug: string; name: string }[];
}

function ContactFormInner({ apps }: ContactFormProps) {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("app") ?? "";

  const [app, setApp] = useState(
    apps.find((a) => a.slug === preselected) ? preselected : ""
  );
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ app, email, message }),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
      setEmail("");
      setMessage("");
      setApp("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-border bg-card p-8 max-w-lg">
        <p className="text-foreground font-medium">Message sent!</p>
        <p className="text-foreground/60 mt-1 text-sm">
          We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-accent hover:underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-5">
      <div>
        <label htmlFor="app" className="block text-sm font-medium mb-1.5">
          App
        </label>
        <select
          id="app"
          value={app}
          onChange={(e) => setApp(e.target.value)}
          required
          className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="" disabled>
            Select an app
          </option>
          {apps.map((a) => (
            <option key={a.slug} value={a.slug}>
              {a.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Your email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
          className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-foreground text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="Describe your issue or question..."
          className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-foreground text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. You can also reach us at{" "}
          <a
            href="mailto:contact@getevox.fit"
            className="underline underline-offset-4"
          >
            contact@getevox.fit
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent/90 transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

export function ContactForm({ apps }: ContactFormProps) {
  return (
    <Suspense>
      <ContactFormInner apps={apps} />
    </Suspense>
  );
}
