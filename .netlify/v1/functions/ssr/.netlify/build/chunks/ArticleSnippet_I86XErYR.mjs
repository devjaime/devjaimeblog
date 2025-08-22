import { c as createAstro, d as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate } from './astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import { p as processArticleDate } from './utils_CNYgIkb5.mjs';
import { b as $$Anchor } from './Layout_DlgPCaAv.mjs';

const $$Astro = createAstro("https://devjaime.com");
const $$ArticleSnippet = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleSnippet;
  const { title, description, url, duration, timestamp } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="zag-text zag-transition flex flex-col gap-3 pb-8"> ${renderComponent($$result, "Anchor", $$Anchor, { "url": url, "class": "text-xl" }, { "default": ($$result2) => renderTemplate`${title}` })} <p class=""> ${description} </p> <div class="zag-muted zag-transition flex justify-between items-center"> ${timestamp ? renderTemplate`<p>${processArticleDate(timestamp)}</p>` : null} ${duration ? renderTemplate`<p>${duration}</p>` : null} </div> </div>`;
}, "/Users/devjaime/Documents/devjaimeblog/src/components/ArticleSnippet.astro", void 0);

export { $$ArticleSnippet as $ };
