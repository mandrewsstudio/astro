import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://in-progress-astro.vercel.app");
const $$WorkItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkItem;
  const { type, src, alt = "", videoType = "video/mp4" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="work-item"> ${type === "video" ? renderTemplate`<video autoplay muted loop playsinline> <source${addAttribute(src, "src")}${addAttribute(videoType, "type")}> </video>` : renderTemplate`<img${addAttribute(src, "src")}${addAttribute(alt, "alt")}>`} </div>`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/components/WorkItem.astro", void 0);

export { $$WorkItem as $ };
