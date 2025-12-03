import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D34zpB6Z.mjs';
import { a as getCollection } from '../chunks/_astro_content_CgKsLwnD.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("thoughts");
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-r2b435tp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" style="padding-bottom: 20px" data-astro-cid-r2b435tp> <div class="work-para" data-astro-cid-r2b435tp> <h2 data-astro-cid-r2b435tp>Thinking in progress</h2> </div> ${sortedPosts.map((post) => renderTemplate`<article style="margin-bottom: 3rem; display: grid; grid-template-columns: 200px 1fr; gap: 2rem; align-items: start;" data-astro-cid-r2b435tp> <!-- Featured Image --> ${post.data.featuredImage && renderTemplate`<div data-astro-cid-r2b435tp> <img${addAttribute(post.data.featuredImage, "src")}${addAttribute(post.data.title, "alt")} style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;" data-astro-cid-r2b435tp> </div>`} <!-- Post Content --> <div data-astro-cid-r2b435tp> <h2 style="margin-top: 0;" data-astro-cid-r2b435tp> <a${addAttribute(`/thoughts/${post.slug}/`, "href")} data-astro-cid-r2b435tp>${post.data.title}</a> </h2> <p data-astro-cid-r2b435tp><em data-astro-cid-r2b435tp>${post.data.description}</em></p> <p data-astro-cid-r2b435tp><small data-astro-cid-r2b435tp>Published ${new Date(post.data.date).toLocaleDateString()}</small></p> </div> </article>`)} </div> ` })} `;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/pages/thoughts/index.astro", void 0);

const $$file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/pages/thoughts/index.astro";
const $$url = "/thoughts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
