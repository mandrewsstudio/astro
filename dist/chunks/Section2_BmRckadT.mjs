import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Making difficult concepts engaging and understandable. Making actions clear and the future desirable.</p>";

				const frontmatter = {"title":"Clarity"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/about/Section2.md";
				const url = undefined;
				function rawContent() {
					return "Making difficult concepts engaging and understandable. Making actions clear and the future desirable. ";
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
