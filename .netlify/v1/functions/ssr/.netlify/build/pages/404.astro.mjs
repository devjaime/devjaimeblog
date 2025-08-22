/* empty css                                                                            */
import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section } from '../chunks/Layout_DlgPCaAv.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class": "mt-16" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl sm:text-4xl font-display pb-8">
Well, this is awkward
</h1> <h2 class="text-xl sm:text-2xl pb-8">404 - Page not found</h2> <p>
It seems that this page does not exist. If you want to return to safety, <a class="underline underline-offset-4 font-medium" href="/">click here to go home</a>.
</p> ` })} ` })}`;
}, "/Users/devjaime/Documents/devjaimeblog/src/pages/404.astro", void 0);

const $$file = "/Users/devjaime/Documents/devjaimeblog/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
