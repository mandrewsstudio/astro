import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"if-youre-a-designer-or-creative-interested-in-collaborating-send-mike-a-message-with-a-bit-about-yourself\">If you’re a designer or creative interested in collaborating, <a href=\"%22mailto:mike@inprogress.studio%22\">send Mike a message</a> with a bit about yourself.</h3>\n<h3 id=\"if-you-want-to-chat-about-climate-change-and-the-future-of-the-creative-industry-lets-get-a-coffee\">If you want to chat about climate change and the future of the creative industry, <a href=\"%22https://calendar.app.google/n3fUmodesdK8S7cN8%22\">let’s get a coffee.</a></h3>";

				const frontmatter = {"title":"Bottom right"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/about/Section9.md";
				const url = undefined;
				function rawContent() {
					return "### If you’re a designer or creative interested in collaborating, [send Mike a message](%22mailto:mike@inprogress.studio%22) with a bit about yourself.\n\n### If you want to chat about climate change and the future of the creative industry, [let’s get a coffee.](%22https://calendar.app.google/n3fUmodesdK8S7cN8%22)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"if-youre-a-designer-or-creative-interested-in-collaborating-send-mike-a-message-with-a-bit-about-yourself","text":"If you’re a designer or creative interested in collaborating, send Mike a message with a bit about yourself."},{"depth":3,"slug":"if-you-want-to-chat-about-climate-change-and-the-future-of-the-creative-industry-lets-get-a-coffee","text":"If you want to chat about climate change and the future of the creative industry, let’s get a coffee."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
