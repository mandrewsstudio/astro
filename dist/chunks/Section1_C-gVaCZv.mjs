import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Purpose Disruptors are pioneers of the advertising sector, working with agencies to accelerate their climate transition, and holding the industry to account on its emissions.</p>\n<p>Their new identity reflects their influential position in the industry, allowing them to communicate to their audience of creative directors and CEOs with a confidence that matches their impact.</p>";

				const frontmatter = {"title":"This way to the future"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/purposedisruptors/Section1.md";
				const url = undefined;
				function rawContent() {
					return "Purpose Disruptors are pioneers of the advertising sector, working with agencies to accelerate their climate transition, and holding the industry to account on its emissions.\n\nTheir new identity reflects their influential position in the industry, allowing them to communicate to their audience of creative directors and CEOs with a confidence that matches their impact. ";
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
