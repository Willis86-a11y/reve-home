# Rêve Home — marketing site

A minimal, high-conversion marketing site built with **Next.js (App Router) + TypeScript + Tailwind CSS**.
Every page funnels toward one primary action — **Book et møde** — with **Indhent et tilbud** as the
quiet secondary path. Both lead to the same short form on `/kontakt`.

Design: colour palette taken from [revehome.dk](https://revehome.dk) (warm cream, taupe accent,
near-black ink), layout restraint inspired by [m-kae.com](https://m-kae.com). Headlines in
Playfair Display, body/UI in Inter.

---

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build
npm run start        # serve the production build
```

> Requires Node 18.18+ (Node 20+ recommended). `npm install` and the first build fetch the
> Google fonts via `next/font`, so you need network access the first time.

---

## Project structure

```
app/
  layout.tsx            Root layout — fonts, global metadata, <Header/> + <Footer/>
  page.tsx              Home (Hero → What we do → How it works → Proof → Closing CTA)
  om-os/page.tsx        About
  cases/page.tsx        Work / cases grid
  kontakt/page.tsx      Contact + booking (the conversion page)
  api/contact/route.ts  Form endpoint — **where submissions are handled**
  globals.css           Design tokens (CSS variables) + base styles + scroll animation
  opengraph-image.tsx   Auto-generated social preview card
  robots.ts, sitemap.ts SEO
  icon.svg              Favicon

components/              Reusable UI (Header, Footer, Hero, ContactForm, Button, …)

lib/
  site.ts               Brand, navigation, CTAs, contact details
  content.ts            All marketing copy (hero, steps, cases, about, …)
  cn.ts                 Tiny className helper

public/images/          Placeholder SVGs — swap for real photography
```

---

## Where to edit things

| I want to change… | Edit |
|---|---|
| **Colours** | `app/globals.css` — the `:root` tokens (`--cream`, `--taupe`, `--ink`, …). Names are mapped to Tailwind classes in `tailwind.config.ts`. Change a hex in one place; it updates site-wide. |
| **Copy / text** | `lib/content.ts` (page content) and `lib/site.ts` (brand name, tagline, contact). |
| **CTAs** (labels + links) | `lib/site.ts` → `cta.primary` / `cta.secondary`. Used by the header, hero, page endings and footer. |
| **Navigation** | `lib/site.ts` → `nav`. |
| **Contact details** | `lib/site.ts` → `contact`. |
| **Where the form sends submissions** | `app/api/contact/route.ts` — see the big `TODO` block (email / CRM / webhook). |
| **Images** | Replace files in `public/images/` (keep the names) or point `content.ts` at new paths. See below. |
| **Fonts** | `app/layout.tsx` (`next/font`) + `tailwind.config.ts` → `fontFamily`. |

---

## The conversion form

- One short form on `/kontakt` with a toggle at the top: **Book et møde** vs **Indhent et tilbud**.
- The header/hero/footer CTAs link with `?type=moede` or `?type=tilbud`, which preselects the toggle.
- Fields: name, email, company (optional), message. When *Book et møde* is selected, an optional
  **“Ønsket tidspunkt”** field appears, plus a marked placeholder where you can embed a
  **Cal.com / Calendly** scheduler later (`components/ContactForm.tsx`).
- Includes a honeypot for basic spam protection and inline success/error states.

**Hooking up submissions:** open `app/api/contact/route.ts` and complete the `TODO` — send an email
(Resend/Postmark/Nodemailer), push to a CRM, or POST to a webhook (Zapier/Make/Slack). Right now it
validates input and `console.log`s the submission. Keep API keys in `.env.local`.

---

## Swapping placeholder images for real photos

All imagery uses `next/image`. Placeholders live in `public/images/*.svg` and are clearly marked.

1. Drop real photos into `public/images/` (JPG/WebP/AVIF recommended) and update the paths in
   `lib/content.ts` (e.g. `image: '/images/hero.jpg'`).
2. Once you're no longer serving SVGs through `next/image`, you can remove the
   `images` block (the `dangerouslyAllowSVG` settings) from `next.config.mjs`.

Image alt text lives next to each path in `lib/content.ts` — keep it descriptive for accessibility/SEO.

---

## Design tokens (the palette)

Defined once in `app/globals.css`:

| Token | Hex | Use |
|---|---|---|
| `--cream` | `#EBE9E5` | Page background |
| `--cream-soft` | `#F2F0EB` | Alternating sections |
| `--ink` | `#343839` | Headlines, primary buttons, dark band |
| `--body` | `#515151` | Body text |
| `--muted` | `#5C584F` | Eyebrows / secondary text |
| `--taupe` | `#A5977C` | Accent — borders, numerals, active states |
| `--taupe-deep` | `#847963` | Deeper accent |
| `--sand` | `#E7D3AE` | Hairlines, labels on dark |

> Note on the accent: taupe doesn’t have enough contrast for small text on cream, so it’s used for
> borders, large numerals and active UI. The **primary button is ink** (near-black on cream, ~9:1) —
> accessible and high-converting. Taupe remains the visual accent throughout.

---

## Accessibility & SEO

- Semantic landmarks, skip-link, visible keyboard focus, labelled form fields, alt text everywhere.
- Per-page `metadata` (title/description/canonical) + Open Graph + auto-generated OG image.
- `robots.ts` + `sitemap.ts`. Set your real domain in `lib/site.ts` → `url`.
- Motion respects `prefers-reduced-motion`.

---

## Notes

- No UI/animation libraries — just Tailwind + a tiny IntersectionObserver for scroll reveals.
- All copy is placeholder-but-realistic **Danish**. Search for `TODO` to find things meant to be replaced.
