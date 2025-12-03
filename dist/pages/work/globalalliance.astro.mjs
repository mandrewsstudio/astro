import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$WorkLayout, a as $$WorkPara, b as $$WorkItemWide } from '../../chunks/WorkItemWide_zg5zheVA.mjs';
import { $ as $$WorkGrid } from '../../chunks/WorkGrid_hD3m1I3N.mjs';
import { $ as $$WorkItem } from '../../chunks/WorkItem_CAMYvGAH.mjs';
import { g as getEntryBySlug } from '../../chunks/_astro_content_CgKsLwnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Globalalliance = createComponent(async ($$result, $$props, $$slots) => {
  const section1 = await getEntryBySlug("globalalliance", "section1");
  const { Content: Section1Content } = await section1.render();
  return renderTemplate`${renderComponent($$result, "WorkLayout", $$WorkLayout, { "title": "Global Alliance for a Green New Deal" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "WorkPara", $$WorkPara, { "title": section1.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section1Content", Section1Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/gagnd/GAGND-1.avif", "alt": "Global Alliance project" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/gagnd/GAGND-2.avif", "alt": "Global Alliance project" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/gagnd/GAGND-3.avif", "alt": "Global Alliance project" })} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/gagnd/GAGND-4.avif", "alt": "Global Alliance project" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/gagnd/GAGND-6.avif", "alt": "Global Alliance project" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/gagnd/GAGND-7.avif", "alt": "Global Alliance project" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/gagnd/GAGND-8.avif", "alt": "Global Alliance project" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/gagnd/GAGND-9.avif", "alt": "Global Alliance project" })} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/gagnd/GAGND-10.avif", "alt": "Global Alliance project" })} ` })}`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/pages/work/globalalliance.astro", void 0);

const $$file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/pages/work/globalalliance.astro";
const $$url = "/work/globalalliance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Globalalliance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
