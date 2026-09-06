import { defineHastPlugin } from 'satteri';

/**
 * Wraps every table in a scroll container so a wide table scrolls inside its
 * own box. Without it the page body scrolls horizontally on narrow screens,
 * which the posts' multi-column data tables would otherwise cause.
 */
export const tableScrollPlugin = defineHastPlugin({
  name: 'table-scroll',
  element: {
    filter: ['table'],
    visit(node, ctx) {
      const parent = ctx.parent(node);
      const alreadyWrapped =
        parent?.type === 'element' &&
        parent.tagName === 'div' &&
        String(parent.properties?.className ?? '').includes('table-scroll');
      if (alreadyWrapped) return;

      ctx.wrapNode(node, { raw: '<div class="table-scroll"></div>' });
    },
  },
});
