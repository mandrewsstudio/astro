import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Have you noticed how cars get bigger every year? Does it feel like our streets are getting smaller? This phenomenon is known as ‘Carspreading’</p>\n<p>In collaboration with <a href=\"https://seriouspeople.co/\">Serious People</a> and <a href=\"https://cleancitiescampaign.org/carspreading\">Clean Cities</a>, we helped introduce the term into the lexicon with a distinctive visual identity inspired by vintage car manuals and common sense.</p>";

				const frontmatter = {"title":"When big cars make our cities smaller"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/carspreading/Section1.md";
				const url = undefined;
				function rawContent() {
					return "Have you noticed how cars get bigger every year? Does it feel like our streets are getting smaller? This phenomenon is known as 'Carspreading'\n\nIn collaboration with [Serious People](https://seriouspeople.co/) and [Clean Cities](https://cleancitiescampaign.org/carspreading), we helped introduce the term into the lexicon with a distinctive visual identity inspired by vintage car manuals and common sense. ";
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
