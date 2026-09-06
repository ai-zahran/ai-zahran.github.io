import katex from 'katex';
import { defineMdastPlugin } from 'satteri';

/**
 * Renders math at build time so no math library is shipped to the browser.
 *
 * This runs in the mdast phase, on Sätteri's `math` and `inlineMath` nodes,
 * rather than after they become `<code class="language-math">` elements — by
 * that point the syntax highlighter has already claimed the display blocks and
 * styled them as code.
 *
 * Sätteri's plugins are a visitor API, not unified/rehype plugins, so
 * `rehype-katex` cannot be used here: it would be accepted and silently do
 * nothing.
 */
function render(source: string, displayMode: boolean): string | null {
  try {
    return katex.renderToString(source, {
      displayMode,
      throwOnError: false,
      strict: false,
      output: 'html',
    });
  } catch {
    return null;
  }
}

export const katexPlugin = defineMdastPlugin({
  name: 'katex',

  math(node, ctx) {
    const html = render(node.value, true);
    if (html === null) {
      ctx.report({ message: `KaTeX could not render display math: ${node.value}`, node, severity: 'warning' });
      return;
    }
    ctx.replaceNode(node, { type: 'html', value: html });
  },

  inlineMath(node, ctx) {
    const html = render(node.value, false);
    if (html === null) {
      ctx.report({ message: `KaTeX could not render inline math: ${node.value}`, node, severity: 'warning' });
      return;
    }
    ctx.replaceNode(node, { type: 'html', value: html });
  },
});
