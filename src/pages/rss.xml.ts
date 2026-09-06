import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/posts';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: `${site.name} — Writing`,
    description: site.tagline,
    site: context.site ?? site.url,
    items: posts
      .filter((post) => !post.data.draft)
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        categories: post.data.tags,
        link: `/blog/${post.id}/`,
      })),
    customData: '<language>en</language>',
  });
}
