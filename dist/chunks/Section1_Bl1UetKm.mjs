import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>DearTomorrow helps people engage with the climate crisis on an emotional level, with poetry and heart. Backed by cutting edge behavioural research, DearTomorrow has an outsized influence on the field of communication and climate change.</p>\n<p>Their new identity closely reflects how they’ve grown in confidence as an organisation, creating a whole new look and feel around the tentative potential at its core: Write today, change tomorrow.</p>";

				const frontmatter = {"title":"Write today, change tomorrow."};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/deartomorrow/Section1.md";
				const url = undefined;
				function rawContent() {
					return "DearTomorrow helps people engage with the climate crisis on an emotional level, with poetry and heart. Backed by cutting edge behavioural research, DearTomorrow has an outsized influence on the field of communication and climate change.\n\nTheir new identity closely reflects how they’ve grown in confidence as an organisation, creating a whole new look and feel around the tentative potential at its core: Write today, change tomorrow. \n";
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
