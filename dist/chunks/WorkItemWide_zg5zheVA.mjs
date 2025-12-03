import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot, b as addAttribute } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_D34zpB6Z.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://in-progress-astro.vercel.app");
const $$WorkLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WorkLayout;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section id="case"> <div class="container"> <article class="case-study-content"> ${renderSlot($$result2, $$slots["default"])} </article> </div> </section> </main> ` })}`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/layouts/WorkLayout.astro", void 0);

const $$Astro$1 = createAstro("https://in-progress-astro.vercel.app");
const $$WorkPara = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WorkPara;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="work-para"> ${title && renderTemplate`<h1>${title}</h1>`} ${subtitle && renderTemplate`<h3>${subtitle}</h3>`} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/components/WorkPara.astro", void 0);

const $$Astro = createAstro("https://in-progress-astro.vercel.app");
const $$WorkItemWide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkItemWide;
  const { type, src, alt = "", videoType = "video/mp4" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="work-item-wide"> ${type === "video" ? renderTemplate`<video autoplay muted loop playsinline> <source${addAttribute(src, "src")}${addAttribute(videoType, "type")}>
Your browser does not support the video tag.
</video>` : renderTemplate`<img${addAttribute(src, "src")}${addAttribute(alt, "alt")}>`} </div>`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/components/WorkItemWide.astro", void 0);

export { $$WorkLayout as $, $$WorkPara as a, $$WorkItemWide as b };
