import { c as createComponent, a as renderTemplate, m as maybeRenderHead, d as createAstro, r as renderComponent, e as renderSlot, i as renderHead } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<nav> <!-- Keep the same structure as the original site so CSS and scripts work the same way.
             - .hero-section contains the logo (SVG or external image).
             - .title matches existing CSS that positions the site title.
        --> <section class="hero-section"> <a href="/" style="border:none;"> <img src="/images/logo.svg" alt="In Progress logo" class="Layer_2 logo"></a> </section> <div> <a href="/work/">Work</a> <a href="/about/">Studio</a> <a href="https://instagram.com/inprogress_studio" target="_blank">Follow</a> <a href="/">In Progress</a> </div> </nav> <!-- Load client-side scripts in order and only in the browser. --> <script type="module">
      // helper to load an external script and return a promise
      function loadScript(src, attrs = {}) {
        return new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = src;
          Object.keys(attrs).forEach(k => s.setAttribute(k, attrs[k]));
          s.onload = () => resolve(s);
          s.onerror = () => reject(new Error('Failed to load ' + src));
          document.head.appendChild(s);
        });
      }

      // Run only in the browser \u2014 load Glide first, then glide-init. logo-rotate is independent.
      (async () => {
        try {
          // Load logo-rotate early (it guards for missing nodes)
          await loadScript('/js/logo-rotate.js');

          // Load Glide from CDN, then our init script which checks for Glide
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/glide.min.js');
          await loadScript('/js/glide-init.js');
        } catch (e) {
          // Fail silently but keep a console message for debugging
          console.warn('Client script load error:', e);
        }
      })();
    <\/script>`])), maybeRenderHead());
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/components/Navigation.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<footer> <div class="nav" aria-label="Footer navigation" style="margin:0 2.5em"> <a href="/work/">Work</a> <a href="/about/">Studio</a> <a href="https://instagram.com/inprogress_studio" target="_blank">Follow</a> </div> <div class="inpro"> <img src="/images/In-Prog.svg"> </div> <div class="gress"> <img src="/images/gress.svg"> <div class="loader"> <img src="/images/IPLogoWhite.gif"> </div> </div> <div class="container"> <h3>Make your good work better</h3> <div class="columns"></div> <div class="columns"> <div style="flex:50%">Drop us a line:</div> <div style="flex:50%">hello@inprogress.studio</div> </div> <div class="columns"> <div style="flex:50%">Find us:</div> <div style="flex:50%">Studio 110, <br>South Block, Osborne St, Glasgow G1 5QH</div> </div> <div class="columns"> <div style="flex:50%">Follow us:</div> <div style="flex:50%">@inprogress_studio</div> </div> <div class="columns"> <div style="flex:50%">Insights & inspiration in progress:</div> </div> <script async src="https://eocampaign1.com/form/85c964c4-97a4-11ef-a88e-d18bdfaab7fa.js" data-form="85c964c4-97a4-11ef-a88e-d18bdfaab7fa"><\/script> <div> <a href="https://cleancreatives.org/firms" target="_blank"><img src="/images/Clean-Creatives-Seal.png" style="margin:10px 0 10px 0"></a> <a href="https://designdeclares.com/" target="_blank"><img src="/images/DesignDeclares1.png" style="margin:10px"></a> </div> <p style="font-size: 12px;">\xA9 M Andrews Studio Ltd trading as In Progress</p> </div> </footer>'])), maybeRenderHead());
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://in-progress-astro.vercel.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "In Progress Studio" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', ' - Branding and design for nonprofits and good businesses</title><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.core.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.theme.min.css"><link rel="icon" type="image/x-icon" href="/images/Logo-Load-Tiny.gif"><script data-goatcounter="https://inprogress.goatcounter.com/count" async src="//gc.zgo.at/count.js"><\/script>', "</head> <body> <header> ", " </header> ", " ", " </body></html>"])), title, renderHead(), renderComponent($$result, "Navigation", $$Navigation, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/mike/Documents/MA Studio/\u{1F51C} Studio Rebrand 2025/\u21BB In Progress Toolkit/Website/Github/astro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
