import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>DearTomorrow helps people understand and process their relationship to Climate Change, its causes and its consequences. They’ve found that the simple act of writing a letter enables people to confront their thoughts and feelings about the future and take lasting action to protect it.</p>\n<p>An organisation rooted in love, connection and courage, and backed by rigourous behavioural science, DearTomorrow’s brand has to exude empathy while empowering participants.</p>";

				const frontmatter = {"title":"Write the future"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/deartomorrow/Section2.md";
				const url = undefined;
				function rawContent() {
					return "DearTomorrow helps people understand and process their relationship to Climate Change, its causes and its consequences. They've found that the simple act of writing a letter enables people to confront their thoughts and feelings about the future and take lasting action to protect it.\n\nAn organisation rooted in love, connection and courage, and backed by rigourous behavioural science, DearTomorrow's brand has to exude empathy while empowering participants. ";
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
