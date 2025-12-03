import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$WorkLayout, a as $$WorkPara, b as $$WorkItemWide } from '../../chunks/WorkItemWide_zg5zheVA.mjs';
import { $ as $$WorkGrid } from '../../chunks/WorkGrid_hD3m1I3N.mjs';
import { $ as $$WorkItem } from '../../chunks/WorkItem_CAMYvGAH.mjs';
import { g as getEntryBySlug } from '../../chunks/_astro_content_CgKsLwnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Agencyfornature = createComponent(async ($$result, $$props, $$slots) => {
  const section1 = await getEntryBySlug("agencyfornature", "section1");
  const { Content: Section1Content } = await section1.render();
  return renderTemplate`${renderComponent($$result, "WorkLayout", $$WorkLayout, { "title": "Agency for Nature" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "WorkPara", $$WorkPara, { "title": section1.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section1Content", Section1Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/agencyfornature/Agency-for-Nature-1.avif", "alt": "Agency for Nature project" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/agencyfornature/Agency-for-Nature-2.avif", "alt": "Agency for Nature project" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/agencyfornature/Agency-for-Nature-3.avif", "alt": "Agency for Nature project" })} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/agencyfornature/Agency-for-Nature-4.avif", "alt": "Agency for Nature project" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/agencyfornature/Agency-for-Nature-6.avif", "alt": "Agency for Nature project" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/agencyfornature/Agency-for-Nature-7.avif", "alt": "Agency for Nature project" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/agencyfornature/Agency-for-Nature-8.avif", "alt": "Agency for Nature project" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/agencyfornature/Agency-for-Nature-9.avif", "alt": "Agency for Nature project" })} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/agencyfornature/Agency-for-Nature-10.avif", "alt": "Agency for Nature project" })} ` })}`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/pages/work/agencyfornature.astro", void 0);

const $$file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/pages/work/agencyfornature.astro";
const $$url = "/work/agencyfornature";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Agencyfornature,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
