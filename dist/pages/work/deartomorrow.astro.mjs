import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$WorkLayout, a as $$WorkPara, b as $$WorkItemWide } from '../../chunks/WorkItemWide_zg5zheVA.mjs';
import { $ as $$WorkGrid } from '../../chunks/WorkGrid_hD3m1I3N.mjs';
import { $ as $$WorkItem } from '../../chunks/WorkItem_CAMYvGAH.mjs';
import { g as getEntryBySlug } from '../../chunks/_astro_content_CgKsLwnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Deartomorrow = createComponent(async ($$result, $$props, $$slots) => {
  const section1 = await getEntryBySlug("deartomorrow", "section1");
  const section2 = await getEntryBySlug("deartomorrow", "section2");
  const section3 = await getEntryBySlug("deartomorrow", "section3");
  const section4 = await getEntryBySlug("deartomorrow", "section4");
  const { Content: Section1Content } = await section1.render();
  const { Content: Section2Content } = await section2.render();
  const { Content: Section3Content } = await section3.render();
  const { Content: Section4Content } = await section4.render();
  return renderTemplate`${renderComponent($$result, "WorkLayout", $$WorkLayout, { "title": "DearTomorrow" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "WorkPara", $$WorkPara, { "title": section1.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section1Content", Section1Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-11.avif" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-6.avif" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-3.avif", "alt": "Project" })} ` })} ${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section2.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section2Content", Section2Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/deartomorrow/DT-Posters.avif", "alt": "DearTomorrow Exhibition Posters" })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-NYC-1.avif", "alt": "DearTomorrow NYC Climate Week" })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-NYC-2.avif", "alt": "DearTomorrow NYC Climate Week" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-NYC-3.avif", "alt": "DearTomorrow Exhibition" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-NYC-4.avif", "alt": "DearTomorrow Exhibition" })} ` })} ${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section3.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section3Content", Section3Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-10.avif", "alt": "Write today, change tomorrow." })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-4.avif", "alt": "Imagine the future. Write the future. Transform the future." })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-8.avif", "alt": "Child with DearTomorrow letter that says 'Dear Tomorrow, I will plant more flowers.'" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-9.avif", "alt": "Will we be heroes or villains?" })} ` })} ${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section4.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section4Content", Section4Content, {})} ` })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-2.avif", "alt": "DearTomorrow Poster" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/deartomorrow/DearTomorrow-7.avif", "alt": "DearTomorrow Presentation" })} ` })} ` })}`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/pages/work/deartomorrow.astro", void 0);

const $$file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/pages/work/deartomorrow.astro";
const $$url = "/work/deartomorrow";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Deartomorrow,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
