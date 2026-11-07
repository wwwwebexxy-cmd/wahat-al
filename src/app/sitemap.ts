import { MetadataRoute } from 'next';
import { site, navLinks } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntry = {
    url: site.url,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  };

  const sectionEntries = navLinks.map((link) => ({
    url: `${site.url}/${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [baseEntry, ...sectionEntries];
}
