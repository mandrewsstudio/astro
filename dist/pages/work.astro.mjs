import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D34zpB6Z.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$WorkShowcase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="showcase"> <div class="container" style="padding-top: 0px!important;"> <div class="work-grid"> <div class="work-item" data-label="Our Kids' Climate"> <a href="../work/ourkidsclimate/" style="border-bottom: none"> <video autoplay muted loop playsinline> <source src="../images/ourkidsclimate/OKC-Endframe-Landscape.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> </a> </div> <div class="work-item" data-label="Dear Tomorrow"> <a href="../work/deartomorrow"> <img src="../images/InProgress-Home-DearTomorrow.avif" alt="Project 4"> </a> </div> <div class="work-item" data-label="Purpose Disruptors"> <a href="../work/purposedisruptors/"> <img src="../images/InProgress-Home-PurposeDisruptors.avif" alt="Project 2"> </a> </div> <div class="work-item" data-label="Electrify London"> <a href="../work/electrifylondon/"> <img src="../images/InProgress-Home-Electrify.avif" alt="Project 3"> </a> </div> <div class="work-item" data-label="Carspreading"> <a href="../work/carspreading/"> <img src="../images/InProgress-Home-Carspreading.avif" alt="Project 2"> </a> </div> <div class="work-item" data-label="Agency for Nature"> <a href="../work/agencyfornature/"> <img src="../images/InProgress-Home-AFN.avif" alt="Project 1"> </a> </div> <div class="work-item" data-label="Cargo Revolution"> <a href="../work/cargorevolution/"> <img src="../images/InProgress-Home-Cargo.avif" alt="Project 3"> </a> </div> <div class="work-item" data-label="Parents for Future"> <a href="../work/pff/"> <img src="../images/InProgress-Home-PFFUK2.avif" alt="Project 3"> </a> </div> <div class="work-item" data-label="Global Alliance"> <a href="../work/globalalliance/"> <img src="../images/InProgress-Home-GAGND.avif" alt="Project 4"> </a> </div> </div> </div> </section> `;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/components/WorkShowcase.astro", void 0);

const $$Work = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" style="padding-bottom: 20px"> <div class="work-para"> <h1>Brands, campaigns & design in progress</h1> </div> </div> ${renderComponent($$result2, "WorkShowcase", $$WorkShowcase, {})} <div class="container" style="margin-top: 6em; margin-bottom: 6em"> <div class="about-grid"> <div class="work-item"> <h2>Branding for better.</h2> </div> <div class="work-item"> <p>
If you’re rethinking your strategy or overhauling your identity, we can help integrate your
                        values, goals, and theory of change into the heart of your communications.
</p> <a class="button" href="../about/">Studio →</a> </div> </div> </div> ` })}`;
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/pages/work.astro", void 0);

const $$file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Work,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
