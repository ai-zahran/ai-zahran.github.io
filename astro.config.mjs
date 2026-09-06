// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { katexPlugin } from './src/lib/katex-plugin.ts';
import { tableScrollPlugin } from './src/lib/table-plugin.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://ai-zahran.github.io',
  integrations: [mdx(), sitemap()],
  markdown: {
    // Math is written as `$$...$$` and rendered by KaTeX at build time, so no
    // math library reaches the browser. Single-dollar math stays off because
    // posts contain prices and shell variables (`$9,000`, `$PATH`) that would
    // otherwise be parsed as math.
    processor: satteri({
      features: { math: { singleDollarTextMath: false } },
      mdastPlugins: [katexPlugin],
      hastPlugins: [tableScrollPlugin],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
