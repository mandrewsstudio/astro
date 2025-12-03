import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$WorkLayout, a as $$WorkPara, b as $$WorkItemWide } from '../../chunks/WorkItemWide_zg5zheVA.mjs';
import { $ as $$WorkGrid } from '../../chunks/WorkGrid_hD3m1I3N.mjs';
import { $ as $$WorkItem } from '../../chunks/WorkItem_CAMYvGAH.mjs';
import { g as getEntryBySlug } from '../../chunks/_astro_content_CgKsLwnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Carspreading = createComponent(async ($$result, $$props, $$slots) => {
  const section1 = await getEntryBySlug("carspreading", "section1");
  const section2 = await getEntryBySlug("carspreading", "section2");
  const section3 = await getEntryBySlug("carspreading", "section3");
  const { Content: Section1Content } = await section1.render();
  const { Content: Section2Content } = await section2.render();
  const { Content: Section3Content } = await section3.render();
  return renderTemplate`${renderComponent($$result, "WorkLayout", $$WorkLayout, { "title": "Carspreading" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "WorkPara", $$WorkPara, { "title": section1.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section1Content", Section1Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "video", "src": "/images/carspreading/Carspreading-intro.mp4" })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/carspreading/Carspreading-Billboards.webp", "alt": "Carspreading billboards" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/carspreading/Carspreading-Edinburgh-1.avif", "alt": "Carspreading Edinburgh" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/carspreading/Carspreading-Cardiff-posters.avif", "alt": "Carspreading Cardiff posters" })} ` })} ${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section2.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section2Content", Section2Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/carspreading/Carspreading-Inspo.avif", "alt": "Carspreading inspiration" })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/carspreading/Carspreading-icons-16-9(1).avif", "alt": "Carspreading icons" })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/carspreading/Carspreading-BW.avif", "alt": "Carspreading black and white" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/carspreading/cs-example-1.avif", "alt": "Carspreading example" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/carspreading/CS-Example-2.avif", "alt": "Carspreading example" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/carspreading/cs-example-3.avif", "alt": "Carspreading example" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/carspreading/cs-example-4.avif", "alt": "Carspreading example" })} ` })} ${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section3.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section3Content", Section3Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/carspreading/Carspreading-Edinburgh-2.avif", "alt": "Carspreading Edinburgh campaign" })} ` })}`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/pages/work/carspreading.astro", void 0);

const $$file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/pages/work/carspreading.astro";
const $$url = "/work/carspreading";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Carspreading,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
