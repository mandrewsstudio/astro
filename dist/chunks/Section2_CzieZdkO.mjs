import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>We specialise in branding and design for nonprofits, grassroots campaigns and responsible companies.</p>";

				const frontmatter = {"title":"We think great design makes good work better.","buttonText":"Our Work →","buttonLink":"/work"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/home/Section2.md";
				const url = undefined;
				function rawContent() {
					return "\nWe specialise in branding and design for nonprofits, grassroots campaigns and responsible companies.\n\n";
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
