import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Parents for Future is for all parents, not just activists.</p>\n<p>Their brand is an invitation to other parents to join the movement, and a message to those in power. Bold typography and a broad colour palette creates unexpected combinations, helping PFF communicate a spectrum of emotions from sober and urgent to joyful and celebratory.</p>";

				const frontmatter = {"title":"A growing movement of grown-ups."};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/parentsforfuture/Section1.md";
				const url = undefined;
				function rawContent() {
					return "Parents for Future is for all parents, not just activists.\n\nTheir brand is an invitation to other parents to join the movement, and a message to those in power. Bold typography and a broad colour palette creates unexpected combinations, helping PFF communicate a spectrum of emotions from sober and urgent to joyful and celebratory. ";
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
