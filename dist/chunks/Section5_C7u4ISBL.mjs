import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>One of the most important aspects of a brand is that people need to be able to use it! The Our Kids’ Climate brand is a kit of parts that come together to form a vibrant, impactful whole.</p>\n<p>The toolkit includes a bright, distinctive colour palette, a bold, clear and characterful brand font (Muoto by 205tf), and a range of textures and patterns that can be used to dial the volume of communications up and down.</p>\n<p>As always, we brought all these elements together, along with plenty of guidance and inspiration, into an online brand guideline document and a range of editable templates for things like presentations and social posts. The result is a brand that can speak loudly and clearly, with joy and with urgency, and help realise the potential of parents and families and their capacity to change the world.</p>";

				const frontmatter = {"title":"A vibrant toolkit"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/ourkidsclimate/Section5.md";
				const url = undefined;
				function rawContent() {
					return "One of the most important aspects of a brand is that people need to be able to use it! The Our Kids' Climate brand is a kit of parts that come together to form a vibrant, impactful whole.\n\nThe toolkit includes a bright, distinctive colour palette, a bold, clear and characterful brand font (Muoto by 205tf), and a range of textures and patterns that can be used to dial the volume of communications up and down.\n\nAs always, we brought all these elements together, along with plenty of guidance and inspiration, into an online brand guideline document and a range of editable templates for things like presentations and social posts. The result is a brand that can speak loudly and clearly, with joy and with urgency, and help realise the potential of parents and families and their capacity to change the world.";
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
