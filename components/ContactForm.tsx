'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/cn';
import { site, type ConversionType } from '@/lib/site';

const fieldBase =
  'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-ink focus:outline-none';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm({ initialType = 'moede' }: { initialType?: ConversionType }) {
  const [type, setType] = useState<ConversionType>(initialType);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const isMeeting = type === 'moede';

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('submitting');
    setError('');

    const payload = { ...Object.fromEntries(new FormData(form).entries()), type };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Noget gik galt. Prøv venligst igen.');
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Noget gik galt. Prøv venligst igen.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8 text-center sm:p-10">
        <h3 className="font-serif text-2xl text-ink">Tak for din henvendelse</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-body">
          Vi har modtaget din besked og vender tilbage inden for én hverdag.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-ink underline underline-offset-4 hover:decoration-2"
        >
          Send en ny henvendelse
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
      {/* Toggle: book a meeting vs request an offer */}
      <fieldset>
        <legend className="sr-only">Hvad ønsker du?</legend>
        <div
          role="radiogroup"
          aria-label="Vælg henvendelse"
          className="grid grid-cols-2 gap-1 rounded-full border border-line bg-cream p-1"
        >
          {[site.cta.primary, site.cta.secondary].map((opt) => {
            const active = type === opt.type;
            return (
              <button
                key={opt.type}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setType(opt.type)}
                className={cn(
                  'rounded-full px-4 py-2.5 text-sm font-medium transition-colors',
                  active ? 'bg-ink text-on-dark' : 'text-body hover:text-ink',
                )}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 space-y-4">
        {/* Honeypot — hidden from humans, catches bots. Leave it empty. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <Field label="Navn" name="name" required autoComplete="name" />
        <Field label="E-mail" name="email" type="email" required autoComplete="email" />
        <Field label="Virksomhed" name="company" optional autoComplete="organization" />

        {isMeeting && (
          <Field label="Ønsket tidspunkt" name="preferredTime" optional placeholder="fx tirsdag formiddag" />
        )}

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-ink">
            {isMeeting ? 'Kort om jeres projekt' : 'Beskriv opgaven'}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={isMeeting ? 'Hvad drømmer I om?' : 'Hvad skal vi give et tilbud på?'}
            className={cn(fieldBase, 'resize-none')}
          />
        </div>
      </div>

      {isMeeting && (
        // TODO (booking): To let visitors pick a slot directly, embed a Cal.com or
        // Calendly inline widget here and you can remove the "Ønsket tidspunkt" field above.
        <p className="mt-4 rounded-xl border border-dashed border-line bg-cream px-4 py-3 text-xs leading-relaxed text-muted">
          Foretrækker du at vælge tid med det samme? Her kan en Cal.com- eller Calendly-kalender
          indlejres.
        </p>
      )}

      {status === 'error' && (
        <p role="alert" className="mt-4 text-sm text-[#9a3b3b]">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-on-dark transition-colors hover:bg-ink-hover disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sender …' : isMeeting ? 'Send og book møde' : 'Send forespørgsel'}
      </button>
      <p className="mt-3 text-center text-xs text-muted">Vi vender tilbage inden for én hverdag.</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  optional = false,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-ink">
        {label}
        {required && <span className="text-taupe-deep"> *</span>}
        {optional && <span className="text-muted"> (valgfrit)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={fieldBase}
      />
    </div>
  );
}
