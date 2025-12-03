import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>We’re particularly proud of this one. A logo that illustrates what’s at the heart of the organisation: our kids. We knew we wanted an iconic symbol that could defy translation, and show the love, care and joy intrinsic to the movement.</p>\n<p>When we realised the letters ‘OKC’, rotated 90°, resembled a child leaping over a horizon, we knew this had to be the logo.</p>";

				const frontmatter = {"title":"The Logo"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/ourkidsclimate/Section3.md";
				const url = undefined;
				function rawContent() {
					return "We're particularly proud of this one. A logo that illustrates what's at the heart of the organisation: our kids. We knew we wanted an iconic symbol that could defy translation, and show the love, care and joy intrinsic to the movement.\n\nWhen we realised the letters 'OKC', rotated 90°, resembled a child leaping over a horizon, we knew this had to be the logo.";
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
