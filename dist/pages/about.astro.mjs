import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D34zpB6Z.mjs';
import { $ as $$WorkGrid } from '../chunks/WorkGrid_hD3m1I3N.mjs';
import { $ as $$WorkItem } from '../chunks/WorkItem_CAMYvGAH.mjs';
import { g as getEntryBySlug } from '../chunks/_astro_content_CgKsLwnD.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const section1 = await getEntryBySlug("about", "section1");
  const section2 = await getEntryBySlug("about", "section2");
  const section3 = await getEntryBySlug("about", "section3");
  const section4 = await getEntryBySlug("about", "section4");
  const section5 = await getEntryBySlug("about", "section5");
  const section6 = await getEntryBySlug("about", "section6");
  const section7 = await getEntryBySlug("about", "section7");
  const section8 = await getEntryBySlug("about", "section8");
  const section9 = await getEntryBySlug("about", "section9");
  const { Content: Section1Content } = await section1.render();
  const { Content: Section2Content } = await section2.render();
  const { Content: Section3Content } = await section3.render();
  const { Content: Section4Content } = await section4.render();
  const { Content: Section5Content } = await section5.render();
  const { Content: Section6Content } = await section6.render();
  const { Content: Section7Content } = await section7.render();
  const { Content: Section8Content } = await section8.render();
  const { Content: Section9Content } = await section9.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" style="padding-top:4.5rem"> <div class="work-para"> <h1>${section1.data.title}</h1> <div> ${renderComponent($$result2, "Section1Content", Section1Content, {})} </div> </div> </div> <section id="contact" style="background-color: #fff; margin: 5em 0 5em 0"> <div class="container"> <div class="arrow"> <img src="/images/arrow.svg" alt="Arrow pointing right"> </div> <div class="work-grid"> <img src=""> </div> <div class="work-grid-3" style="padding: 3em 0 7em 0; border-bottom: 1px solid #fff"> <div class="work-item"> <h3>${section2.data.title}</h3> ${renderComponent($$result2, "Section2Content", Section2Content, {})} </div> <div class="work-item"> <h3>${section3.data.title}</h3> ${renderComponent($$result2, "Section3Content", Section3Content, {})} </div> <div class="work-item"> <h3>${section4.data.title}</h3> ${renderComponent($$result2, "Section4Content", Section4Content, {})} </div> </div> </div> </section> <div class="container"> <div class="about-grid" style="padding-bottom: 2em"> <div class="work-item" style="padding-right: 10%"> <p>${section5.data.title}</p> </div> <div class="work-item" style="padding-right: 10%"> ${renderComponent($$result2, "Section5Content", Section5Content, {})}</div> </div> ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 6 }, { "default": async ($$result3) => renderTemplate` <div class="work-item"></div> <div class="work-item"></div> <div class="work-item"></div> ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/about/Lorna-Jones-In-Progress.avif", "alt": "Community" })} <div class="work-item"> ${renderComponent($$result3, "Section6Content", Section6Content, {})}</div> ` })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 6 }, { "default": async ($$result3) => renderTemplate` <div class="work-item"></div> <div class="work-item"></div> <div class="work-item"></div> <div class="work-item"></div> <div class="work-item"> ${renderComponent($$result3, "Section7Content", Section7Content, {})}</div> ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/about/Mike-Andrews-In-Progress-portrait.avif", "alt": "Community" })} ` })} ${renderComponent($$result2, "WorkGrid", $$WorkGrid, { "columns": 2 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkItem", $$WorkItem, { "type": "image", "src": "/images/Studio.avif", "alt": "Community" })} <div class="work-item"> ${renderComponent($$result3, "Section8Content", Section8Content, {})} ${renderComponent($$result3, "Section9Content", Section9Content, {})} </div> ` })} <div class="work-item-wide" style="margin: 1em 0"> <img src="/images/Studio.avif" alt="Mike & Lorna"> </div> <div class="about-grid" style="padding: 1em 0"> <div class="work-item"> <h3>${renderComponent($$result2, "Section8Content", Section8Content, {})} </h3> </div> <div class="work-item"> <h3>${renderComponent($$result2, "Section9Content", Section9Content, {})} </h3> </div> </div> </div> ` })}`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/pages/about.astro", void 0);

const $$file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
