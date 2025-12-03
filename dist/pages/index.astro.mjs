import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as addAttribute } from '../chunks/astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D34zpB6Z.mjs';
import { $ as $$WorkGrid } from '../chunks/WorkGrid_hD3m1I3N.mjs';
import { a as getCollection, g as getEntryBySlug } from '../chunks/_astro_content_CgKsLwnD.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$HomeShowcase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="showcase"> ${renderComponent($$result, "WorkGrid", $$WorkGrid, { "columns": 3 }, { "default": ($$result2) => renderTemplate` <div class="work-item" data-label="Our Kids' Climate"> <a href="../work/ourkidsclimate/" style="border-bottom: none"> <img src="../images/ourkidsclimate/OKC-Posters-Landscape.avif" style="object-position: left;" alt="Project 4"> </a> </div> <div class="work-item" data-label="Dear Tomorrow"> <a href="../work/deartomorrow/"> <img src="../images/InProgress-Home-DearTomorrow.avif" alt="Project 4"> </a> </div> <div class="work-item" data-label="Purpose Disruptors"> <a href="../work/purposedisruptors/"> <img src="../images/InProgress-Home-PurposeDisruptors.avif" alt="Project 2"> </a> </div> ` })} </section> `;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/components/HomeShowcase.astro", void 0);

const $$Homeblog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("thoughts");
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  const recentPosts = sortedPosts.slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<div style="margin: 12em 2.5em ;"> ${renderComponent($$result, "WorkGrid", $$WorkGrid, { "columns": 4 }, { "default": async ($$result2) => renderTemplate` <div>Thoughts in progress</div> ${recentPosts.map((post) => renderTemplate`<div> <!-- Featured Image --> ${post.data.featuredImage && renderTemplate`<div> <a style="border:none;"${addAttribute(`/thoughts/${post.slug}/`, "href")}><img${addAttribute(post.data.featuredImage, "src")}${addAttribute(post.data.title, "alt")} style="width: 100%"></a> </div>`} <!-- Post Content --> <div><a style="border:none;"${addAttribute(`/thoughts/${post.slug}/`, "href")}> <h3 style="margin: 5px 0 0 0;"> ${post.data.title} </h3> <p style="padding-right:10px">${post.data.description}</p> <p><small>${new Date(post.data.date).toLocaleDateString()}</small></p></a> </div> </div>`)}` })} </div>`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/components/Homeblog.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const section1 = await getEntryBySlug("home", "section1");
  const section2 = await getEntryBySlug("home", "section2");
  const section3 = await getEntryBySlug("home", "section3");
  const section4 = await getEntryBySlug("home", "section4");
  await getEntryBySlug("home", "section5");
  const { Content: Section1Content } = await section1.render();
  const { Content: Section2Content } = await section2.render();
  const { Content: Section3Content } = await section3.render();
  const { Content: Section4Content } = await section4.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": section1.data.title, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="intro" data-astro-cid-j7pv25f6> <div class="scroll-move-right" data-astro-cid-j7pv25f6> <div class="inpro" data-astro-cid-j7pv25f6><img src="/images/In-Prog.svg" data-astro-cid-j7pv25f6></div> </div> <div class="scroll-move-right" data-astro-cid-j7pv25f6> <div class="gress" style="margin-left: -25px;" data-astro-cid-j7pv25f6> <img src="/images/gress.svg" data-astro-cid-j7pv25f6> <div class="loader" data-astro-cid-j7pv25f6> <img src="/images/IPLogoWhite.gif" data-astro-cid-j7pv25f6> </div></div> </div> <h1 data-astro-cid-j7pv25f6>${section1.data.title}</h1> <a href="/work/" style="border-bottom: none" data-astro-cid-j7pv25f6> <video autoplay muted loop playsinline data-astro-cid-j7pv25f6> <source src="/images/IP-Intro-25_2.mp4" type="video/mp4" data-astro-cid-j7pv25f6>
Your browser does not support the video tag.
</video> </a> </section>  <section class="more" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="text" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>${section2.data.title}</h2> ${renderComponent($$result2, "Section2Content", Section2Content, { "data-astro-cid-j7pv25f6": true })} <a class="button"${addAttribute(section2.data.buttonLink, "href")} data-astro-cid-j7pv25f6> ${section2.data.buttonText} </a> </div> </div> <div class="scroll-move-left" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "HomeShowcase", $$HomeShowcase, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/components/HomeShowcase.astro", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> </section>  <div class="scroll-move-right" data-astro-cid-j7pv25f6> <div class="highlight-grid" style="margin:200px 0 0 -25px" data-astro-cid-j7pv25f6> <div class="highlight-item"${addAttribute(`background: url('${section3.data.image}') no-repeat center; background-size: cover;`, "style")} data-astro-cid-j7pv25f6></div> <div class="highlight-text" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Section3Content", Section3Content, { "data-astro-cid-j7pv25f6": true })} <a class="button"${addAttribute(section3.data.buttonLink, "href")} data-astro-cid-j7pv25f6> ${section3.data.buttonText} </a> </div> </div> </div> <div class="scroll-move-left" data-astro-cid-j7pv25f6> <div class="highlight-grid" data-astro-cid-j7pv25f6> <div class="highlight-text" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Section4Content", Section4Content, { "data-astro-cid-j7pv25f6": true })} <a class="button"${addAttribute(section4.data.buttonLink, "href")} data-astro-cid-j7pv25f6> ${section4.data.buttonText} </a> </div> <div class="highlight-item"${addAttribute(`background: url('${section4.data.image}') no-repeat center; background-size: cover;`, "style")} data-astro-cid-j7pv25f6></div> </div> </div> ${renderComponent($$result2, "HomeBlog", $$Homeblog, { "data-astro-cid-j7pv25f6": true })}  ` })} `;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/pages/index.astro", void 0);

const $$file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
