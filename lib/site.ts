/**
 * SITE CONFIG — edit your brand, navigation, CTAs and contact details here.
 *
 * The two calls to action are defined once and reused across the whole site
 * (header, hero, page endings, footer). Change a label or destination here and
 * it updates everywhere.
 */

export type ConversionType = 'moede' | 'tilbud';

export type Cta = {
  label: string;
  href: string;
  type: ConversionType;
};

export const site = {
  name: 'Rêve Home',
  url: 'https://revehome.dk',
  locale: 'da_DK',
  lang: 'da',
  tagline: 'Skræddersyet boligdesign i skandinavisk ånd',
  description:
    'Rêve Home skaber rolige, tidløse hjem i skandinavisk ånd — fra første skitse til sidste detalje.',

  contact: {
    email: 'info@revehome.dk',
    phone: '+45 61 68 25 11',
    phoneHref: 'tel:+4561682511',
    address: {
      line1: 'Strandvejen 134',
      line2: '2900 Hellerup',
    },
    hours: 'Man–fre 10–17 · weekend efter aftale',
  },

  social: [{ label: 'Instagram', href: 'https://www.instagram.com/revehome.indretning/' }],

  nav: [
    { label: 'Om os', href: '/om-os' },
    { label: 'Cases', href: '/cases' },
    { label: 'Kontakt', href: '/kontakt' },
  ],

  cta: {
    primary: {
      label: 'Book et møde',
      href: 'mailto:info@revehome.dk',
      type: 'moede',
    } satisfies Cta,
    secondary: {
      label: 'Indhent et tilbud',
      href: 'mailto:info@revehome.dk',
      type: 'tilbud',
    } satisfies Cta,
  },
} as const;

export type Site = typeof site;