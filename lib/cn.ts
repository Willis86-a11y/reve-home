/** Tiny classNames joiner — no dependency, keeps the bundle small. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
