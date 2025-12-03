import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The Cargo Revolution is a rallying cry for urban businesses to switch to zero carbon deliveries.</p>\n<p>A great opportunity to create an identity that allows everyone—from councils to businesses to riders—to celebrate the passion, energy and real progress made by this community.</p>";

				const frontmatter = {"title":"A revolution on wheels."};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/cargorevolution/Section1.md";
				const url = undefined;
				function rawContent() {
					return " The Cargo Revolution is a rallying cry for urban businesses to switch to zero carbon deliveries.\n\nA great opportunity to create an identity that allows everyone—from councils to businesses to riders—to celebrate the passion, energy and real progress made by this community. ";
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
