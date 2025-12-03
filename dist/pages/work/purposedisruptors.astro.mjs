import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$WorkLayout, a as $$WorkPara, b as $$WorkItemWide } from '../../chunks/WorkItemWide_zg5zheVA.mjs';
import { $ as $$WorkGrid } from '../../chunks/WorkGrid_hD3m1I3N.mjs';
import { $ as $$WorkItem } from '../../chunks/WorkItem_CAMYvGAH.mjs';
import { g as getEntryBySlug } from '../../chunks/_astro_content_CgKsLwnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Purposedisruptors = createComponent(async ($$result, $$props, $$slots) => {
  const section1 = await getEntryBySlug("electrify", "section1");
  const section2 = await getEntryBySlug("electrify", "section2");
  const section3 = await getEntryBySlug("electrify", "section3");
  const { Content: Section1Content } = await section1.render();
  const { Content: Section2Content } = await section2.render();
  const { Content: Section3Content } = await section3.render();
  return renderTemplate`---
${renderComponent($$result, "WorkLayout", $$WorkLayout, { "title": "Purpose Disruptors" }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "WorkPara", $$WorkPara, { "title": section1.data.title }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Section1Content", Section1Content, {})}` })}${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/purposedisruptors/PurposeDisruptors-1.avif", "alt": "Purpose Disruptors project" })}${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/purposedisruptors/PurposeDisruptors-2.avif", "alt": "Purpose Disruptors project" })}${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/purposedisruptors/PurposeDisruptors-3.avif", "alt": "Purpose Disruptors project" })}` })}${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/purposedisruptors/PurposeDisruptors-4.avif", "alt": "Purpose Disruptors project" })}${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section2.data.title }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Section2Content", Section2Content, {})}` })}${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "video", "src": "/images/purposedisruptors/PD-Concept.mp4" })}${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/purposedisruptors/AE1-Covers.avif", "alt": "Purpose Disruptors covers" })}${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/purposedisruptors/AE2-Spreads-Mockup.avif", "alt": "Purpose Disruptors spreads" })}${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/purposedisruptors/Beyond the Chaos Graphs.avif", "alt": "Beyond the Chaos graphs" })}` })}${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/purposedisruptors/PD-Montages01.avif", "alt": "Purpose Disruptors montages" })}${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section3.data.title }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Section3Content", Section3Content, {})}` })}${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/purposedisruptors/WARP-1-Wide.avif", "alt": "Warp image 1" })}${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/purposedisruptors/WARP-2-Wide.avif", "alt": "Warp image 2" })}${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/purposedisruptors/WARP-3-Wide.avif", "alt": "Warp image 3" })}${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/purposedisruptors/WARP-5-Wide.avif", "alt": "Warp image 5" })}` })}${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/purposedisruptors/PD-Montages02.avif", "alt": "Purpose Disruptors montages 02" })}${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/purposedisruptors/PurposeDisruptors-12.avif", "alt": "Purpose Disruptors project 12" })}${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/purposedisruptors/PurposeDisruptors-11.avif", "alt": "Purpose Disruptors project 11" })}` })}`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/pages/work/purposedisruptors.astro", void 0);

const $$file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/pages/work/purposedisruptors.astro";
const $$url = "/work/purposedisruptors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Purposedisruptors,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
