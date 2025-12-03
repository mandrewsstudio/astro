import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>At it’s core, the brand allows Purpose Disruptors to lay out the facts in simple black-and-white, with an emphasis on clarity. But it can also be expressive and imaginative. Rather than a wide-ranging colour-palette, we created these vivid background images, derived from macro shots of nature, amped up and accelerated into hyperreality.</p>\n<p>These trippy images can be used to bring colour and vibracy to layouts, and they tie back to the connection to nature which is so key to Purpose Disruptors’ approach,</p>";

				const frontmatter = {"title":"Authoritative and Inspiring"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/purposedisruptors/Section3.md";
				const url = undefined;
				function rawContent() {
					return "At it's core, the brand allows Purpose Disruptors to lay out the facts in simple black-and-white, with an emphasis on clarity. But it can also be expressive and imaginative. Rather than a wide-ranging colour-palette, we created these vivid background images, derived from macro shots of nature, amped up and accelerated into hyperreality.\n\nThese trippy images can be used to bring colour and vibracy to layouts, and they tie back to the connection to nature which is so key to Purpose Disruptors' approach, ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
