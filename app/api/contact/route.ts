import { NextResponse } from 'next/server';

type Payload = {
  type?: string;
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  preferredTime?: string;
  website?: string; // honeypot — should always be empty
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Ugyldig forespørgsel.' }, { status: 400 });
  }

  // Bot caught by the honeypot: pretend success so it doesn't retry.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const type = body.type === 'tilbud' ? 'tilbud' : 'moede';

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Udfyld venligst navn og en gyldig e-mail.' },
      { status: 400 },
    );
  }

  const submission = {
    type, // 'moede' = book a meeting · 'tilbud' = request an offer
    name,
    email,
    company: (body.company ?? '').trim(),
    message: (body.message ?? '').trim(),
    preferredTime: (body.preferredTime ?? '').trim(),
    receivedAt: new Date().toISOString(),
  };

  // ---------------------------------------------------------------------------
  // TODO: SEND THE SUBMISSION SOMEWHERE. Pick ONE and wire it up:
  //
  //   • Email    — Resend / Postmark / SendGrid / Nodemailer
  //                await resend.emails.send({ to: 'hej@revehome.dk', subject: ..., text: ... })
  //   • CRM      — HubSpot / Pipedrive / Salesforce REST API
  //   • Webhook  — Zapier / Make / Slack incoming webhook:
  //                await fetch(process.env.CONTACT_WEBHOOK_URL!, {
  //                  method: 'POST',
  //                  headers: { 'Content-Type': 'application/json' },
  //                  body: JSON.stringify(submission),
  //                })
  //
  // Store secrets (API keys, webhook URLs) in .env.local — never commit them.
  // ---------------------------------------------------------------------------
  console.log('[contact] new submission:', submission);

  return NextResponse.json({ ok: true });
}
