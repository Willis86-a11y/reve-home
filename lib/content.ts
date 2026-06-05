/**
 * MARKETING COPY — all the words on the site live here.
 *
 * Everything is placeholder-but-realistic Danish copy for Rêve Home.
 * Swap the strings for your real content; the layout adapts automatically.
 * Images are referenced by path — see /public/images and the README for how
 * to drop in real photography.
 */

export type WhatWeDoItem = {
  title: string;
  body: string;
};

export type Step = {
  step: string;
  title: string;
  body: string;
};

export type MetricIcon = 'home' | 'design' | 'recommend';

export type Metric = {
  value: string;
  label: string;
  icon: MetricIcon;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export type CaseItem = {
  title: string;
  meta: string;
  image: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export const home = {
  hero: {
    eyebrow: 'Skræddersyet boligdesign',
    // Plays on "rêve" (fransk for drøm).
    headline: 'Hjem, der er drømt frem\ntil mindste detalje.',
    support:
      'Vi tegner og indretter hele boligen som én sammenhængende fortælling — rolig, tidløs og helt jeres egen.',
    image: '/images/hero-home.jpg',
    imageAlt: 'Holdet bag Rêve Home i studiets showroom',
  },

  whatWeDo: {
    eyebrow: 'Hvad vi gør',
    heading: 'Ét studie. Hele rejsen.',
    items: [
      {
        title: 'Helhedsdesign',
        body: 'Vi tegner og indretter hele boligen som ét sammenhængende udtryk — fra planløsning til den sidste lampe.',
      },
      {
        title: 'Skræddersyede løsninger',
        body: 'Møbler, materialer og detaljer udvælges og tilpasses jeres hjem. Intet er tilfældigt, alt er bevidst.',
      },
      {
        title: 'Fra idé til indflytning',
        body: 'Vi styrer processen hele vejen og koordinerer håndværk og leverancer, så I bare kan glæde jer.',
      },
    ] as WhatWeDoItem[],
  },

  howItWorks: {
    eyebrow: 'Sådan arbejder vi',
    heading: 'En enkel proces, hele vejen.',
    steps: [
      {
        step: '01',
        title: 'Møde',
        body: 'Vi mødes og taler om jeres ønsker, rammer og drømme — uforpligtende.',
      },
      {
        step: '02',
        title: 'Oplæg',
        body: 'I får et gennemarbejdet designoplæg og et klart overslag at sige ja til.',
      },
      {
        step: '03',
        title: 'Design',
        body: 'Vi udvikler materialer, farver og møblering ned til mindste detalje.',
      },
      {
        step: '04',
        title: 'Udførelse',
        body: 'Vi koordinerer leverandører og håndværkere, så processen forløber roligt.',
      },
      {
        step: '05',
        title: 'Indflytning',
        body: 'Jeres nye hjem står færdigt — klar til at blive levet i.',
      },
    ] as Step[],
  },

  proof: {
    metrics: [
      { value: '120+', label: 'indrettede hjem', icon: 'home' },
      { value: '15 år', label: 'med skræddersyet design', icon: 'design' },
      { value: '9,8/10', label: 'vil anbefale os', icon: 'recommend' },
    ] as Metric[],
    testimonial: {
      quote:
        'Rêve Home forvandlede vores hus til et hjem, vi aldrig har lyst til at forlade. Roligt, gennemtænkt og fuldstændig os.',
      name: 'Familien Holm',
      detail: 'Villa i Hellerup',
    } as Testimonial,
  },

  // Two compact "vibe" shots shown under the trust metrics.
  gallery: {
    images: [
      { src: '/images/work-moodboard.png', alt: 'Materialeprøver, farver og teksturer fra et Rêve Home-projekt' },
      { src: '/images/case-4.jpg', alt: 'Placeholder — detalje fra et Rêve Home-projekt' },
    ] as GalleryImage[],
  },

  closing: {
    heading: 'Lad os skabe jeres drømmehjem.',
    support:
      'Book et uforpligtende møde, eller indhent et tilbud. Vi vender altid tilbage inden for én hverdag.',
  },
};

export const about = {
  eyebrow: 'Om os',
  heading: 'Et lille studie med\nstor omsorg for detaljen.',
  image: '/images/about-team.jpg',
  imageAlt: 'Placeholder — portræt fra Rêve Homes studie',
  paragraphs: [
    'Rêve Home er et skandinavisk design- og indretningsstudie. Vi tror på, at et hjem skal være roligt at komme hjem til — gennemtænkt, varmt og uden støj.',
    'Vi arbejder med få projekter ad gangen, så hvert hjem får den tid og opmærksomhed, det fortjener. Fra den første skitse til den sidste detalje er vi med hele vejen.',
    'Vores tilgang er enkel: lyt grundigt, tegn præcist og vælg materialer, der kun bliver smukkere med årene.',
  ],
  closing: {
    heading: 'Skal vi tale om jeres hjem?',
    support: 'Et møde forpligter til ingenting — det er bare en god start.',
  },
};

export const cases = {
  eyebrow: 'Udvalgte cases',
  heading: 'Hjem, vi har\nbragt til live.',
  intro:
    'Et udsnit af de boliger, vi har tegnet og indrettet. Hvert projekt er skræddersyet til menneskene, der bor der.',
  items: [
    { title: 'Villa i Hellerup', meta: 'Totalrenovering · 240 m²', image: '/images/case-1.jpg' },
    { title: 'Lejlighed på Frederiksberg', meta: 'Indretning · 110 m²', image: '/images/case-2.jpg' },
    { title: 'Sommerhus i Tisvilde', meta: 'Helhedsdesign · 160 m²', image: '/images/case-3.jpg' },
    { title: 'Penthouse i Aarhus', meta: 'Materialer & møblering · 180 m²', image: '/images/case-4.jpg' },
    { title: 'Rækkehus i Gentofte', meta: 'Køkken & bad · 140 m²', image: '/images/case-5.jpg' },
    { title: 'Byhus i København K', meta: 'Totalindretning · 200 m²', image: '/images/case-6.jpg' },
  ] as CaseItem[],
  closing: {
    heading: 'Forestil jer jeres eget hjem her.',
    support: 'Book et møde, så taler vi om mulighederne — eller indhent et tilbud.',
  },
};
