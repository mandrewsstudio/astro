import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>An important aspect of the rebrand was defining how DearTomorrow use words. Establishing a clear, inviting, poetic and sincere tone of voice has meant they can use a consistent tone whether communicating on Instagram, in person or on a funding application.</p>\n<p>The brand has enabled DearTomorrow to properly convey the power and gravity of their work, and of their participants’ contributions. It’s also enabled them to communicate more clearly both to the public and to their funders.</p>\n<p>“We’ve seen a noticeable uplift across our digital channels, and more meaningful connections with funders and collaborators to our refreshed identity and clearer messaging”\n— Sandra Freij, Creative Lead, DearTomorrow</p>";

				const frontmatter = {"title":"Confidence and connection"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/deartomorrow/Section4.md";
				const url = undefined;
				function rawContent() {
					return "\nAn important aspect of the rebrand was defining how DearTomorrow use words. Establishing a clear, inviting, poetic and sincere tone of voice has meant they can use a consistent tone whether communicating on Instagram, in person or on a funding application.\n\nThe brand has enabled DearTomorrow to properly convey the power and gravity of their work, and of their participants' contributions. It's also enabled them to communicate more clearly both to the public and to their funders.\n\n\"We've seen a noticeable uplift across our digital channels, and more meaningful connections with funders and collaborators to our refreshed identity and clearer messaging\"\n— Sandra Freij, Creative Lead, DearTomorrow ";
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
