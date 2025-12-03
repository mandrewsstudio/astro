import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BNkdbji7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>When it comes to a tagline, it pays to be direct. A simple statement of what we stand for — what we believe in, what we are protecting, what we exist to amplify — the Power of Parents.</p>\n<p>We also wanted to expand the definition, to include all parts of the global family, from the father- and mother- figures that aren’t related by blood, to those in the family and wider community that play a pivotal role in nurturing and protecting the next generation.</p>";

				const frontmatter = {"title":"The Power of Parents"};
				const file = "/Users/mike/Documents/MA Studio/🔜 Studio Rebrand 2025/↻ In Progress Toolkit/Website/Github/astro/src/content/ourkidsclimate/Section4.md";
				const url = undefined;
				function rawContent() {
					return "When it comes to a tagline, it pays to be direct. A simple statement of what we stand for — what we believe in, what we are protecting, what we exist to amplify — the Power of Parents.\n\nWe also wanted to expand the definition, to include all parts of the global family, from the father- and mother- figures that aren't related by blood, to those in the family and wider community that play a pivotal role in nurturing and protecting the next generation.";
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
