import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>We’re a small studio that creates big impact. Run by Mike and Lorna, In Progress specialises in design for nonprofits, grassroots campaigns and responsible companies.</p>";

				const frontmatter = {"title":"Partners in Progress"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/about/Section1.md";
				const url = undefined;
				function rawContent() {
					return "We’re a small studio that creates big impact. Run by Mike and Lorna, In Progress specialises in design for nonprofits, grassroots campaigns and responsible companies. \n";
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
