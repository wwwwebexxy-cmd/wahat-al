import { MetadataRoute } from 'next';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntry = {
    url: site.url,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  };

  return [baseEntry];
}
