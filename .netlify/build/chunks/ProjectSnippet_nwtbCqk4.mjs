import { c as createAstro, d as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate } from './astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import { b as $$Anchor } from './Layout_DlgPCaAv.mjs';

const $$Astro = createAstro("https://devjaime.com");
const $$ProjectSnippet = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectSnippet;
  const { title, description, url, githubUrl, liveUrl, tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-3 pb-8"> <div class="flex flex-col gap-3 sm:flex-row sm:justify-between"> ${renderComponent($$result, "Anchor", $$Anchor, { "url": url, "class": "text-xl" }, { "default": ($$result2) => renderTemplate`${title}` })} <div class="flex gap-2"> ${githubUrl ? renderTemplate`${renderComponent($$result, "Anchor", $$Anchor, { "url": githubUrl, "class": "text-base", "external": true }, { "default": ($$result2) => renderTemplate`
GitHub
` })}` : null} ${liveUrl ? renderTemplate`${renderComponent($$result, "Anchor", $$Anchor, { "url": liveUrl, "class": "text-base", "external": true }, { "default": ($$result2) => renderTemplate`
Live
` })}` : null} </div> </div> <p class="zag-text zag-transition"> ${description} </p> <div class="flex flex-row wrap gap-2"> ${tags.map((tag) => renderTemplate`<span class="-zag-text -zag-bg zag-transition px-2 py-1 text-sm font-semibold"> ${tag} </span>`)} </div> </div>`;
}, "/Users/devjaime/Documents/devjaimeblog/src/components/ProjectSnippet.astro", void 0);

export { $$ProjectSnippet as $ };
