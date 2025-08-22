/* empty css                                                                            */
import { d as createComponent, i as renderComponent, r as renderTemplate, p as Fragment, f as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import { $ as $$Layout, G as GLOBAL, a as $$Section } from '../chunks/Layout_DlgPCaAv.mjs';
import { $ as $$ArticleSnippet } from '../chunks/ArticleSnippet_I86XErYR.mjs';
import { a as articles } from '../chunks/list_BGUfWIbR.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "class": "my-8" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center gap-4 pt-8 pb-16"> <h1 class="font-display text-3xl sm:text-4xl leading-loose">${GLOBAL.articlesName}</h1> </div> <ul> ${articles.map((project) => renderTemplate`<li> ${renderComponent($$result3, "ArticleSnippet", $$ArticleSnippet, { "title": project.title, "description": project.description, "duration": `${project.time} min`, "url": project.filename, "timestamp": project.timestamp })} </li>`)} </ul> ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <title>${GLOBAL.blogTitle} • ${GLOBAL.username}</title> <meta name="description"${addAttribute(GLOBAL.blogLongDescription, "content")}> <meta property="og:title"${addAttribute(`${GLOBAL.blogTitle} \u2022 ${GLOBAL.username}`, "content")}> <meta property="og:description"${addAttribute(GLOBAL.blogShortDescription, "content")}> <meta property="og:image"${addAttribute(`${GLOBAL.rootUrl}/${GLOBAL.profileImage}`, "content")}> <meta property="og:url"${addAttribute(`${GLOBAL.rootUrl}/blog`, "content")}> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${addAttribute(`${GLOBAL.blogTitle} \u2022 ${GLOBAL.username}`, "content")}> <meta name="twitter:description"${addAttribute(GLOBAL.blogShortDescription, "content")}> <meta name="twitter:image"${addAttribute(`${GLOBAL.rootUrl}/${GLOBAL.profileImage}`, "content")}> <meta http-equiv="content-language" content="en"> <meta name="language" content="English"> <link rel="canonical"${addAttribute(`${GLOBAL.rootUrl}/blog`, "href")}> ` })}` })}`;
}, "/Users/devjaime/Documents/devjaimeblog/src/pages/blog/index.astro", void 0);

const $$file = "/Users/devjaime/Documents/devjaimeblog/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
