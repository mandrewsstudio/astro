import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Through our workshops with the OKC team, we discovered an essential tension at the heart of the brand that needs to be communicated. Collaborative sessions with members across the globe — including Brazil, Australia, UK, Kenya, Poland, USA, Canada, and more — helped us understand what drives this passionate group of activists and organisers.</p>\n<p>Being a movement made of parents and families, the concept of care runs through the whole network. But care isn’t always soft. Care is community, support, empathy — yes — but also advocacy, solidarity and political pressure. From the beginning we established that the brand needs to carve out a space that is both inviting and inspiring, warm and fierce, joyful and forceful.</p>";

				const frontmatter = {"title":"Care, Louder"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/ourkidsclimate/Section2.md";
				const url = undefined;
				function rawContent() {
					return "Through our workshops with the OKC team, we discovered an essential tension at the heart of the brand that needs to be communicated. Collaborative sessions with members across the globe — including Brazil, Australia, UK, Kenya, Poland, USA, Canada, and more — helped us understand what drives this passionate group of activists and organisers.\n\nBeing a movement made of parents and families, the concept of care runs through the whole network. But care isn't always soft. Care is community, support, empathy — yes — but also advocacy, solidarity and political pressure. From the beginning we established that the brand needs to carve out a space that is both inviting and inspiring, warm and fierce, joyful and forceful.";
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
