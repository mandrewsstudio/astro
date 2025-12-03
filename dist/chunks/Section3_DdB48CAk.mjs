import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>At the core of the DearTomorrow brand is a palette of gradients derived from photos of sunrise, evoking a time of day — calm, magical, energising — that perfectly fits the atmosphere they create.</p>\n<p>The main brand font, Louize by 205tf, has just the right amount of literary gravitas and personality. A supporting library of hand-drawn illustrations helps emphasise the human connection and intimacy of the project.</p>";

				const frontmatter = {"title":"The dawning light"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/deartomorrow/Section3.md";
				const url = undefined;
				function rawContent() {
					return "At the core of the DearTomorrow brand is a palette of gradients derived from photos of sunrise, evoking a time of day — calm, magical, energising — that perfectly fits the atmosphere they create.\n\nThe main brand font, Louize by 205tf, has just the right amount of literary gravitas and personality. A supporting library of hand-drawn illustrations helps emphasise the human connection and intimacy of the project. ";
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
