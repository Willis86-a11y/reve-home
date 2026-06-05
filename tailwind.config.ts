import type { Config } from 'tailwindcss';

/**
 * Design tokens live as CSS variables (R G B channels) in app/globals.css.
 * Tailwind maps friendly class names onto them via the `<alpha-value>`
 * placeholder, so opacity modifiers work too (bg-cream/85, border-line/60).
 * One source of truth for the palette.
 *
 *   bg-cream  text-ink  text-body  text-muted
 *   bg-taupe  border-line  bg-ink text-on-dark  ...
 */
const token = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: token('--cream'),
        'cream-soft': token('--cream-soft'),
        surface: token('--surface'),
        ink: token('--ink'),
        'ink-hover': token('--ink-hover'),
        body: token('--body'),
        muted: token('--muted'),
        taupe: token('--taupe'),
        'taupe-deep': token('--taupe-deep'),
        sand: token('--sand'),
        line: token('--line'),
        'on-dark': token('--on-dark'),
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
        prose: '60ch',
      },
      letterSpacing: {
        label: '0.18em',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
