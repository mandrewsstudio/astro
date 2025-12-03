import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>In Progress supports brands and projects that strive to make the world a better place.</p>\n<p>If we don’t believe in it, we don’t do it.</p>";

				const frontmatter = {"title":"Para 1","image":"/images/Studio.avif","buttonText":"Our Studio →","buttonLink":"/about/"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/home/Section3.md";
				const url = undefined;
				function rawContent() {
					return "\nIn Progress supports brands and projects that strive to make the world a better place.\n\nIf we don’t believe in it, we don’t do it.\n";
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
