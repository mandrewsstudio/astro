import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$WorkLayout, a as $$WorkPara, b as $$WorkItemWide } from '../../chunks/WorkItemWide_zg5zheVA.mjs';
import { $ as $$WorkGrid } from '../../chunks/WorkGrid_hD3m1I3N.mjs';
import { $ as $$WorkItem } from '../../chunks/WorkItem_CAMYvGAH.mjs';
import { g as getEntryBySlug } from '../../chunks/_astro_content_CgKsLwnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Ourkidsclimate = createComponent(async ($$result, $$props, $$slots) => {
  const section1 = await getEntryBySlug("ourkidsclimate", "section1");
  const section2 = await getEntryBySlug("ourkidsclimate", "section2");
  const section3 = await getEntryBySlug("ourkidsclimate", "section3");
  const section4 = await getEntryBySlug("ourkidsclimate", "section4");
  const section5 = await getEntryBySlug("ourkidsclimate", "section5");
  const { Content: Section1Content } = await section1.render();
  const { Content: Section2Content } = await section2.render();
  const { Content: Section3Content } = await section3.render();
  const { Content: Section4Content } = await section4.render();
  const { Content: Section5Content } = await section5.render();
  return renderTemplate`${renderComponent($$result, "WorkLayout", $$WorkLayout, { "title": "Our Kids' Climate" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "WorkPara", $$WorkPara, { "title": section1.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section1Content", Section1Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "video", "src": "/images/ourkidsclimate/OKC-Endframe-Landscape.mp4" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "video", "src": "/images/ourkidsclimate/OKC-Power-of-Parents-Portrait.mp4" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/ourkidsclimate/OKC-Logo-Photo-1.avif", "alt": "Project" })} ` })}  ${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section2.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section2Content", Section2Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "video", "src": "/images/ourkidsclimate/OKC-Endframe-Landscape.mp4" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "video", "src": "/images/ourkidsclimate/OKC-Power-of-Parents-Portrait.mp4" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/ourkidsclimate/OKC-Logo-Photo-1.avif", "alt": "Project" })} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/ourkidsclimate/OKC-Logo-Sketch.jpg", "alt": "Sketch" })}  ${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section3.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section3Content", Section3Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/ourkidsclimate/OKC-Logo-reverse.avif", "alt": "Reverse" })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "video", "src": "/images/ourkidsclimate/OKC-Logo-Placement-Landscape.mp4" })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/ourkidsclimate/OKC-Tshirt-green_1.avif", "alt": "Merch" })}  ${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section4.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section4Content", Section4Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/ourkidsclimate/OKC-Posters-Landscape.avif", "alt": "Posters" })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/ourkidsclimate/OKC-Tote-1-square.avif", "alt": "Tote 1" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/ourkidsclimate/OKC-Tote-2-square.avif", "alt": "Tote 2" })} ` })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 4 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/ourkidsclimate/9-OKC-Community-2.avif", "alt": "Community" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/ourkidsclimate/10-OKC-Fellowships-2.avif", "alt": "Fellowships" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/ourkidsclimate/11-OKC-Microgrants-2.avif", "alt": "Microgrants" })} ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/ourkidsclimate/12-OKC-Campaigns-2.avif", "alt": "Campaigns" })} ` })}  ${renderComponent($$result2, "WorkPara", $$WorkPara, { "subtitle": section5.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Section5Content", Section5Content, {})} ` })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/ourkidsclimate/OKC-Patterns.webp", "alt": "Patterns" })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/ourkidsclimate/OKC-Pitch-Deck.avif", "alt": "Pitch Deck" })} ${renderComponent($$result2, "WorkItemWide", $$WorkItemWide, { "type": "image", "src": "/images/ourkidsclimate/OKC-Guidelines.avif", "alt": "Guidelines" })} ` })}`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/pages/work/ourkidsclimate.astro", void 0);

const $$file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/pages/work/ourkidsclimate.astro";
const $$url = "/work/ourkidsclimate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ourkidsclimate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
