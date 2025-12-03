import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$WorkLayout, a as $$WorkPara, b as $$WorkItemWide } from '../../chunks/WorkItemWide_zg5zheVA.mjs';
import { $ as $$WorkGrid } from '../../chunks/WorkGrid_hD3m1I3N.mjs';
import { $ as $$WorkItem } from '../../chunks/WorkItem_CAMYvGAH.mjs';
import { g as getEntryBySlug } from '../../chunks/_astro_content_CgKsLwnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Electrifylondon = createComponent(async ($$result, $$props, $$slots) => {
  const section1 = await getEntryBySlug("electrify", "section1");
  const section2 = await getEntryBySlug("electrify", "section2");
  const section3 = await getEntryBySlug("electrify", "section3");
  const { Content: Section1Content } = await section1.render();
  const { Content: Section2Content } = await section2.render();
  const { Content: Section3Content } = await section3.render();
  return renderTemplate`${renderComponent($$result, "WorkLayout", $$WorkLayout, { "title": "Electrify London" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "WorkPara", $$WorkPara, { "title": section1.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section1Content", Section1Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/electrify/Electrify-1-Leaflet.avif" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/electrify/Electrify-9-Poster.avif" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/electrify/Electrify-3-Event.avif", "alt": "Project" })} ` })} ${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section2.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section2Content", Section2Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/electrify/Electrify-4-Mood.avif", "alt": "Sketch" })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "video", "src": "/images/electrify/Electrify-5-EVs-sequence.mp4", "alt": "Sketch" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "video", "src": "/images/electrify/Electrify-6-Poster.mp4" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/electrify/Electrify-7-Lanyard.avif", "alt": "Project" })} ` })} ${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section3.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section3Content", Section3Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/electrify/Electrify-8-Leaflet.avif", "alt": "Reverse" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/electrify/Electrify-9-Poster.avif" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/electrify/Electrify-10-Photo.avif", "alt": "Project" })} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/electrify/Electrify-11-Panel.avif", "alt": "Merch" })} ` })}`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/pages/work/electrifylondon.astro", void 0);

const $$file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/pages/work/electrifylondon.astro";
const $$url = "/work/electrifylondon";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Electrifylondon,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
