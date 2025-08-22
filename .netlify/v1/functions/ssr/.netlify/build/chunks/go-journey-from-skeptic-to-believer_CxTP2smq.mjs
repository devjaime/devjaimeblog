/* empty css                                                                    */
import { d as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {};
				const file = "/Users/devjaime/Documents/devjaimeblog/src/pages/blog/go-journey-from-skeptic-to-believer.md";
				const url = "/blog/go-journey-from-skeptic-to-believer";
				function rawContent() {
					return "";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
