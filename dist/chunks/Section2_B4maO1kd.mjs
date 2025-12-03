import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The world of automotive transport offers a rich history of design, from vintage Haynes manuals to iconic car advertising, to the visual language of our streets and highways.</p>\n<p>We drew on these visual cues to create an iconic advertising campaign that makes you look twice. Carspreading is an issue that most people understand, and policies like extra taxes and parking charges for larger vehicles are broadly popular, even with those who own SUVs themselves.</p>";

				const frontmatter = {"title":"Common sense and safety"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/carspreading/Section2.md";
				const url = undefined;
				function rawContent() {
					return "The world of automotive transport offers a rich history of design, from vintage Haynes manuals to iconic car advertising, to the visual language of our streets and highways.\n\nWe drew on these visual cues to create an iconic advertising campaign that makes you look twice. Carspreading is an issue that most people understand, and policies like extra taxes and parking charges for larger vehicles are broadly popular, even with those who own SUVs themselves. ";
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
