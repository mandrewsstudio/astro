import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The Agency for Nature from Purpose Disruptors brings together the best young creative talent to work for the most sought after client: Mother Nature.</p>\n<p>Our vibrant and unexpected campaign identity reflects the weirdness as well as the beauty of nature, designed to come to life on social media and online, and in landmark creative events.</p>\n<p>Check out the creatives’ work at <a href=\"http://agencyfornature.com\">agencyfornature.com</a></p>";

				const frontmatter = {"title":"What if nature had its own agency?"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/agencyfornature/Section1.md";
				const url = undefined;
				function rawContent() {
					return "The Agency for Nature from Purpose Disruptors brings together the best young creative talent to work for the most sought after client: Mother Nature.\n\nOur vibrant and unexpected campaign identity reflects the weirdness as well as the beauty of nature, designed to come to life on social media and online, and in landmark creative events.\n\nCheck out the creatives’ work at [agencyfornature.com](http://agencyfornature.com)";
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
