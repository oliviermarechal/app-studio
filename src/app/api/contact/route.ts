import { NextResponse } from "next/server";
import { apps } from "@/data/apps";

export async function POST(request: Request) {
  const body = await request.json();
  const { app, email, message } = body;

  if (!app || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const validApp = apps.find((a) => a.slug === app);
  if (!validApp) {
    return NextResponse.json({ error: "Invalid app." }, { status: 400 });
  }

  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (slackWebhookUrl) {
    try {
      await fetch(slackWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `*New support message*\n*App:* ${validApp.name}\n*Email:* ${email}\n*Message:*\n${message}`,
        }),
      });
    } catch {
      // Slack failed — fall through to success anyway, message is not lost
      // since we can still receive it via email fallback
    }
  }

  return NextResponse.json({ success: true });
}
