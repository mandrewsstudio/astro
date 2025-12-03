import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The Global Alliance for a Green New Deal is an international group of lawmakers creating a wave of positivity and political action. This forms the basis of the logo, and rolls out to all other communications.</p>\n<p>The movement is optimistic, encouraging and professional, with a bright, bold and confident identity.</p>";

				const frontmatter = {"title":"We can all flourish."};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/globalalliance/Section1.md";
				const url = undefined;
				function rawContent() {
					return "The Global Alliance for a Green New Deal is an international group of lawmakers creating a wave of positivity and political action. This forms the basis of the logo, and rolls out to all other communications.\n\nThe movement is optimistic, encouraging and professional, with a bright, bold and confident identity. ";
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
