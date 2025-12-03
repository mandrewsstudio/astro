import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Purpose Disruptors act as a guide and a pathfinder for the advertising industry, showing agencies the way towards a sustainable future. The logo symbol — two shapes representing “PD” — can be broken up, repeated, shuffled and cropped in to as a spotlight device, both shining a light and reearranging the landscape in their movement and dynamism.</p>";

				const frontmatter = {"title":"Lighting the way"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/purposedisruptors/Section2.md";
				const url = undefined;
				function rawContent() {
					return "\nPurpose Disruptors act as a guide and a pathfinder for the advertising industry, showing agencies the way towards a sustainable future. The logo symbol — two shapes representing \"PD\" — can be broken up, repeated, shuffled and cropped in to as a spotlight device, both shining a light and reearranging the landscape in their movement and dynamism. ";
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
