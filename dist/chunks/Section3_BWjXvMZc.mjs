import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Starting in London the campaign has rolled through Cardiff and Edinburgh, appearing Out of Home and online, with a crowdsourced digital campaign allowing people to show their own examples of egregious Carspreading.</p>\n<p>Since the start of the campaign, policies to tackle Carspreading are making headway, with Cardiff becoming the fist city to introduce higher parking charges for heavier and larger vehicles, while many other councils are considering similar moves.</p>";

				const frontmatter = {"title":"A cross-country road trip"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/carspreading/Section3.md";
				const url = undefined;
				function rawContent() {
					return "Starting in London the campaign has rolled through Cardiff and Edinburgh, appearing Out of Home and online, with a crowdsourced digital campaign allowing people to show their own examples of egregious Carspreading.\n\nSince the start of the campaign, policies to tackle Carspreading are making headway, with Cardiff becoming the fist city to introduce higher parking charges for heavier and larger vehicles, while many other councils are considering similar moves. ";
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
