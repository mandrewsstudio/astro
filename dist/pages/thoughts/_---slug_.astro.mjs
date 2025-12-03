import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_D34zpB6Z.mjs';
import { a as getCollection } from '../../chunks/_astro_content_CgKsLwnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://in-progress-astro.vercel.app");
async function getStaticPaths() {
  const posts = await getCollection("thoughts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${post.data.title} - Thoughts` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="article"> <div class="standfirst"> <h4><a href="/thoughts">THOUGHTS IN PROGRESS</a></h4> <h1>${post.data.title}</h1> <h3>${post.data.description}</h3> </div> ${renderComponent($$result2, "Content", Content, {})} <!-- Closing GIF --> <img src="/images/Logo-Load-Tiny.gif" style="width: 25px; text-align: center; display: block; margin-left: auto; margin-right: auto; margin-top: 2rem"> </div> </div> ` })}`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/pages/thoughts/[...slug].astro", void 0);

const $$file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/pages/thoughts/[...slug].astro";
const $$url = "/thoughts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
