import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Our Kids’ Climate is a global family of parent-led groups working to\nprotect children from climate breakdown.</p>\n<p>Their new brand positions Our Kids’ Climate as a broad movement that\nwelcomes parents, families and communities from across the world, and\nallows them to more effectively champion their member leaders and amplify\ntheir influence on lawmakers and government institutions.</p>";

				const frontmatter = {"title":"A global family of changemakers"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/ourkidsclimate/Section1.md";
				const url = undefined;
				function rawContent() {
					return "Our Kids' Climate is a global family of parent-led groups working to\nprotect children from climate breakdown.\n\nTheir new brand positions Our Kids' Climate as a broad movement that\nwelcomes parents, families and communities from across the world, and\nallows them to more effectively champion their member leaders and amplify\ntheir influence on lawmakers and government institutions.";
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
