import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://in-progress-astro.vercel.app");
const $$WorkGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkGrid;
  const { columns = 2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`work-grid work-grid-${columns}`, "class")} data-astro-cid-pcxayahm> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/components/WorkGrid.astro", void 0);

export { $$WorkGrid as $ };
