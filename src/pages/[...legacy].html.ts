import type { APIContext, GetStaticPaths } from 'astro';
import legacyUrls from '../data/legacy-urls.json';

/*
 * The Jekyll site published posts at /:categories/:y/:m/:d/:filename.html and
 * those URLs are still in the wild. Each one is rebuilt here as a stub that
 * bounces to the new address. This is an endpoint rather than a page so the
 * output keeps the literal `.html` ending instead of becoming a directory.
 *
 * GitHub Pages serves static files only, so redirecting means a meta refresh;
 * the canonical link is what actually moves search ranking to the new URL.
 */
export const getStaticPaths: GetStaticPaths = () =>
  Object.entries(legacyUrls).map(([from, to]) => ({
    params: { legacy: from.replace(/^\//, '').replace(/\.html$/, '') },
    props: { to },
  }));

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET({ props, site }: APIContext) {
  const to = props.to as string;
  const canonical = new URL(to, site).href;
  const href = escapeHtml(to);

  const body = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Moved</title>
    <link rel="canonical" href="${escapeHtml(canonical)}">
    <meta http-equiv="refresh" content="0; url=${href}">
    <meta name="robots" content="noindex, follow">
  </head>
  <body>
    <p>This post has moved to <a href="${href}">${href}</a>.</p>
  </body>
</html>
`;

  return new Response(body, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
