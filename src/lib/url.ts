const EXTERNAL = /^(?:[a-z][a-z\d+\-.]*:|\/\/|#)/i;
const HAS_EXTENSION = /\.[a-z\d]+$/i;

/**
 * Builds an internal link that respects the GitHub Pages base path (`/portfolio`)
 * and the site's trailing-slash convention. External URLs and hash links pass through.
 */
export function url(path = '/'): string {
  if (EXTERNAL.test(path)) return path;

  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const [pathname = '', hash] = path.split('#');
  let clean = `/${pathname.replace(/^\/+/, '')}`;
  if (!clean.endsWith('/') && !HAS_EXTENSION.test(clean)) clean += '/';

  return `${base}${clean}${hash ? `#${hash}` : ''}`;
}

/** Absolute URL for canonical links, Open Graph and structured data. */
export function absoluteUrl(path: string, site: URL | string | undefined): string {
  const origin = site ?? 'https://codeanik.github.io';
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path.startsWith(import.meta.env.BASE_URL) ? path : url(path), origin).href;
}

/** Normalises a pathname for active-link comparisons. */
export function normalizePath(pathname: string): string {
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}
