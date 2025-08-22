import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, p as Fragment, f as addAttribute, m as maybeRenderHead, l as renderSlot } from './astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import { $ as $$Layout, G as GLOBAL, a as $$Section } from './Layout_DlgPCaAv.mjs';
import { g as getShortDescription, p as processArticleDate, a as generateSourceUrl } from './utils_CNYgIkb5.mjs';
import { $ as $$Prose } from './Prose_8JP5hBzl.mjs';

const $$Astro = createAstro("https://devjaime.com");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { frontmatter } = Astro2.props;
  const shortDescription = getShortDescription(frontmatter.description);
  const articleDate = processArticleDate(frontmatter.timestamp);
  const sourceUrl = generateSourceUrl(frontmatter.filename, "blog");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "class": "pt-8" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-4 mt-8 mb-16"> <h1 class="text-3xl sm:text-4xl leading-normal sm:leading-normal font-display"> ${frontmatter.title} </h1> <div class="flex justify-between"> <span>${articleDate}</span> <span>${frontmatter.time} min</span> </div> </div> ${renderComponent($$result3, "Prose", $$Prose, {}, { "default": ($$result4) => renderTemplate` ${renderSlot($$result4, $$slots["default"])} ` })} <p class="pt-8">~${GLOBAL.username}</p> ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <title>${frontmatter.title} • ${GLOBAL.username}</title> <meta name="description"${addAttribute(frontmatter.description, "content")}> <meta property="og:title"${addAttribute(`${frontmatter.title} \u2022 ${GLOBAL.username}`, "content")}> <meta property="og:description"${addAttribute(shortDescription, "content")}> <meta property="og:image"${addAttribute(`${GLOBAL.rootUrl}/${GLOBAL.profileImage}`, "content")}> <meta property="og:url"${addAttribute(frontmatter.url, "content")}> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${addAttribute(`${frontmatter.title} \u2022 ${GLOBAL.username}`, "content")}> <meta name="twitter:description"${addAttribute(shortDescription, "content")}> <meta name="twitter:image"${addAttribute(`${GLOBAL.rootUrl}/${GLOBAL.profileImage}`, "content")}> <meta http-equiv="content-language" content="en"> <meta name="language" content="English"> <link rel="canonical"${addAttribute(sourceUrl, "href")}> ` })}` })}`;
}, "/Users/devjaime/Documents/devjaimeblog/src/layouts/BlogLayout.astro", void 0);

export { $$BlogLayout as $ };
