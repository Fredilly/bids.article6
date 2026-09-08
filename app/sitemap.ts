import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bids.article6.org';

  return [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/sample-review`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
