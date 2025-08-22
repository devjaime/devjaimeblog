import { d as createComponent, c as createAstro, i as renderComponent, r as renderTemplate, p as Fragment, f as addAttribute, m as maybeRenderHead, l as renderSlot } from './astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import { g as getShortDescription, a as generateSourceUrl } from './utils_CNYgIkb5.mjs';
import { $ as $$Prose } from './Prose_8JP5hBzl.mjs';
import { $ as $$Layout, G as GLOBAL, a as $$Section, b as $$Anchor } from './Layout_DlgPCaAv.mjs';

const $$Astro = createAstro("https://devjaime.com");
const $$ProjectLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectLayout;
  const { frontmatter } = Astro2.props;
  const shortDescription = getShortDescription(frontmatter.description);
  const sourceUrl = generateSourceUrl(frontmatter.filename, "projects");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "class": "mt-8" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-4 mt-8 mb-16"> <h1 class="text-3xl sm:text-4xl leading-tight font-display"> ${frontmatter.title} </h1> <div class="flex text-sm gap-2"> ${frontmatter.tags ? frontmatter.tags.map((tag) => renderTemplate`<span class="-zag-text -zag-bg zag-transition font-semibold py-1 px-2"> ${tag} </span>`) : null} </div> <div class="flex gap-2"> ${frontmatter.githubUrl ? renderTemplate`${renderComponent($$result3, "Anchor", $$Anchor, { "url": frontmatter.githubUrl, "class": "text-base", "external": true }, { "default": ($$result4) => renderTemplate`
GitHub
` })}` : null} ${frontmatter.liveUrl ? renderTemplate`${renderComponent($$result3, "Anchor", $$Anchor, { "url": frontmatter.liveUrl, "class": "text-base", "external": true }, { "default": ($$result4) => renderTemplate`
Live
` })}` : null} </div> </div> ${renderComponent($$result3, "Prose", $$Prose, {}, { "default": ($$result4) => renderTemplate` ${renderSlot($$result4, $$slots["default"])} ` })} ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <title>${frontmatter.title} • ${GLOBAL.username}</title> <meta name="description"${addAttribute(frontmatter.description, "content")}> <meta property="og:title"${addAttribute(`${frontmatter.title} \u2022 ${GLOBAL.username}`, "content")}> <meta property="og:description"${addAttribute(shortDescription, "content")}> <meta property="og:image"${addAttribute(`${GLOBAL.rootUrl}/${GLOBAL.profileImage}`, "content")}> <meta property="og:url"${addAttribute(frontmatter.url, "content")}> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${addAttribute(`${frontmatter.title} \u2022 ${GLOBAL.username}`, "content")}> <meta name="twitter:description"${addAttribute(shortDescription, "content")}> <meta name="twitter:image"${addAttribute(`${GLOBAL.rootUrl}/${GLOBAL.profileImage}`, "content")}> <meta http-equiv="content-language" content="en"> <meta name="language" content="English"> <link rel="canonical"${addAttribute(sourceUrl, "href")}> ` })}` })}`;
}, "/Users/devjaime/Documents/devjaimeblog/src/layouts/ProjectLayout.astro", void 0);

export { $$ProjectLayout as $ };
