import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/om-os', '/cases', '/kontakt'];
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
