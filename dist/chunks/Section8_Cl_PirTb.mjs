import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"if-youre-an-organisation-looking-for-transformation-drop-an-email-to-lorna\">If you’re an organisation looking for transformation, <a href=\"%22mailto:lorna@inprogress.studio%22\">drop an email to Lorna</a>.</h3>";

				const frontmatter = {"title":"Bottom left"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/about/Section8.md";
				const url = undefined;
				function rawContent() {
					return "### If you’re an organisation looking for transformation, [drop an email to Lorna](%22mailto:lorna@inprogress.studio%22).";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"if-youre-an-organisation-looking-for-transformation-drop-an-email-to-lorna","text":"If you’re an organisation looking for transformation, drop an email to Lorna."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
