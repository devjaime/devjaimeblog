import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, l as renderSlot, r as renderTemplate, i as renderComponent, n as renderScript, o as renderHead, u as unescapeHTML } from './astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                    */

const $$Astro$3 = createAstro("https://devjaime.com");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["p-4 max-w-2xl mx-auto", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/devjaime/Documents/devjaimeblog/src/components/common/Section.astro", void 0);

const GLOBAL = {
  // Site metadata
  username: "devjaime",
  rootUrl: "https://devjaime.com",
  // English content
  shortDescription: "AI & Software Engineering | Founder of CodeIA | Cloud, Backend & Automation",
  longDescription: "Chilean software engineer specialized in artificial intelligence, cloud computing and backend development. With experience in Golang, PostgreSQL, LangChain and microservices, creates scalable AI-driven solutions. Founder of CodeIA, passionate about automation and emerging technologies.",
  heroDescription: "Chilean software engineer specialized in artificial intelligence, backend development and cloud architectures. Founder of CodeIA, passionate about creating scalable and automated solutions.",
  connectButton: "Connect",
  viewCodeButton: "View Code",
  profileAlt: "Jaime Hernández - Software Engineer specialized in AI",
  // Social media links
  githubProfile: "https://github.com/devjaime/",
  twitterProfile: "https://twitter.com/hsjhernandez",
  linkedinProfile: "https://www.linkedin.com/in/devjaime/",
  // Common text names used throughout the site
  articlesName: "Articles",
  projectsName: "Projects",
  viewAll: "View All",
  // Common descriptions used throughout the site
  noArticles: "No featured articles yet.",
  noProjects: "No featured projects yet.",
  // Blog metadata
  blogTitle: "My Thoughts and Reflections",
  blogShortDescription: "Practical wisdom, unfiltered thoughts and opinions about technology.",
  blogLongDescription: "Web development, technology trends and occasionally programming mistakes. Technical articles about AI, backend and software development.",
  // Project metadata
  projectTitle: "Projects and Code",
  projectShortDescription: "A list of my web development projects and developer tools.",
  projectLongDescription: "All my projects, including frontend and full-stack applications. From AI solutions to modern web applications.",
  // Profile image
  profileImage: "devjaime.webp",
  // Menu items
  menu: {
    home: "/",
    projects: "/projects",
    blog: "/blog"
  }};

const $$Astro$2 = createAstro("https://devjaime.com");
const $$Anchor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Anchor;
  const { url, external, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute([
    "zag-offset underline font-medium flex items-center focus:outline-2 focus:outline-offset-2 focus:outline-zag-dark dark:focus:outline-zag-light",
    className
  ], "class:list")}${addAttribute(external ? "_blank" : "_self", "target")}${addAttribute(Astro2.props["aria-label"], "aria-label")}> ${renderSlot($$result, $$slots["default"])} ${external ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512"> <path class="zag-fill zag-transition" fill-rule="evenodd" d="M362.666 149.333V320H320l-.001-97.831l-154.51 154.51l-30.169-30.17L289.829 192h-97.83v-42.666z"></path> </svg>` : null} </a>`;
}, "/Users/devjaime/Documents/devjaimeblog/src/components/common/Anchor.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="mt-16 mb-8"> ${renderComponent($$result, "Section", $$Section, { "class": "mb-4" }, { "default": ($$result2) => renderTemplate` <div class="zag-border-b zag-transition pb-4 flex flex-col sm:flex-row sm:flex-nowrap gap-8 sm:items-center"> <ul class="flex flex-col gap-2"> ${Object.entries(GLOBAL.menu).map((i) => renderTemplate`<li> ${renderComponent($$result2, "Anchor", $$Anchor, { "url": i[1] }, { "default": ($$result3) => renderTemplate`${i[0]}` })} </li>`)} </ul> <div class="flex flex-start items-start gap-4 w-full"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="zag-fill zag-transition w-8 h-8 min-h-8 min-w-8 max-h-8 max-w-8 -translate-y-2"><path fill="currentColor" d="m10 7l-2 4h3v6H5v-6l2-4zm8 0l-2 4h3v6h-6v-6l2-4z"></path></svg> <p id="quote" class="zag-text zag-transition"></p> </div> <div class="flex flex-row sm:flex-col gap-4"> ${renderTemplate`${renderComponent($$result2, "Anchor", $$Anchor, { "url": GLOBAL.githubProfile, "aria-label": "GitHub Profile" }, { "default": ($$result3) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"> <path class="zag-fill zag-transition" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path> </svg> ` })}`} ${renderTemplate`${renderComponent($$result2, "Anchor", $$Anchor, { "url": GLOBAL.twitterProfile, "aria-label": "Twitter Profile" }, { "default": ($$result3) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"> <path class="zag-fill zag-transition" d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"></path> </svg> ` })}`} ${renderTemplate`${renderComponent($$result2, "Anchor", $$Anchor, { "url": GLOBAL.linkedinProfile, "aria-label": "LinkedIn Profile" }, { "default": ($$result3) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"> <path class="zag-fill zag-transition" fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.12 19h-3.08v-9h3.08v9zm-1.54-10.29c-.99 0-1.79-.8-1.79-1.79s.8-1.79 1.79-1.79 1.79.8 1.79 1.79-.8 1.79-1.79 1.79zm13.16 10.29h-3.08v-4.89c0-1.16-.02-2.64-1.61-2.64s-1.86 1.26-1.86 2.57v4.96h-3.08v-9h2.96v1.23h.04c.41-.78 1.4-1.6 2.88-1.6 3.08 0 3.65 2.03 3.65 4.66v4.71z"></path> </svg> ` })}`} </div> </div> ` })} <p class="zag-text zag-transition text-center text-sm font-medium">
&copy; ${year} ${GLOBAL.username}. All rights reserved.
</p> </footer> ${renderScript($$result, "/Users/devjaime/Documents/devjaimeblog/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/devjaime/Documents/devjaimeblog/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<button class="border-none bg-none focus:outline-2 focus:outline-offset-2 focus:outline-zag-dark dark:focus:outline-zag-light" id="themeToggle" aria-label="Theme Toggle"> <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="Theme toggle"> <path class="zag-transition fill-neutral-900 dark:fill-transparent" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path> <path class="zag-transition fill-transparent dark:fill-neutral-100" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path> </svg> </button> <script>\n  const theme = (() => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme") ?? "light";\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n\n  if (theme === "light") {\n    document.documentElement.classList.remove("dark");\n  } else {\n    document.documentElement.classList.add("dark");\n  }\n\n  window.localStorage.setItem("theme", theme);\n\n  const handleToggleClick = () => {\n    const element = document.documentElement;\n    element.classList.toggle("dark");\n\n    const isDark = element.classList.contains("dark");\n    localStorage.setItem("theme", isDark ? "dark" : "light");\n  };\n\n  document\n    .getElementById("themeToggle")\n    ?.addEventListener("click", handleToggleClick);\n<\/script>'])), maybeRenderHead());
}, "/Users/devjaime/Documents/devjaimeblog/src/components/ThemeToggle.astro", void 0);

const $$Astro$1 = createAstro("https://devjaime.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="zag-bg zag-border-b zag-transition sticky top-0 w-full z-10" role="banner"> <div class="zag-bg zag-transition sm:hidden relative z-50 py-4 flex items-center"> <button class="px-4" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="main-navigation" id="menu-toggle"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" class="zag-fill zag-transition" aria-hidden="true"> <path d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"></path> </svg> </button> </div> <nav id="main-navigation" class="zag-bg zag-border-b zag-transition fixed sm:relative inset-x-0 top-0 h-auto sm:px-4 flex justify-between flex-col gap-8 py-4 text-xl sm:flex-row max-w-2xl mx-auto sm:pt-4 sm:border-none" role="navigation" aria-label="Main navigation"> <div class="flex flex-col font-mono font-medium gap-4 sm:flex-row px-4 sm:px-0 mt-16 sm:mt-0"> ${Object.entries(GLOBAL.menu).map(([key, url]) => renderTemplate`${renderComponent($$result, "Anchor", $$Anchor, { "url": url, "aria-current": Astro2.url.pathname === url ? "page" : void 0 }, { "default": ($$result2) => renderTemplate`${key === "home" ? "Home" : key === "projects" ? "Projects" : "Blog"}` })}`)} </div> <div class="flex gap-4 justify-between px-4 sm:px-0"> ${renderTemplate`${renderComponent($$result, "Anchor", $$Anchor, { "url": GLOBAL.githubProfile, "aria-label": "devjaime's GitHub repository", "class": "hover:scale-110 transition-transform" }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="zag-fill zag-transition" aria-hidden="true"> <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path> </svg> ` })}`} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> </nav> </header> ${renderScript($$result, "/Users/devjaime/Documents/devjaimeblog/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/devjaime/Documents/devjaimeblog/src/components/Header.astro", void 0);

const $$AIParticles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="ai-particles-container" id="ai-particles" data-astro-cid-exxt3a5z> <!-- Las partículas se generarán dinámicamente con JavaScript --> </div>  ${renderScript($$result, "/Users/devjaime/Documents/devjaimeblog/src/components/AIParticles.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/devjaime/Documents/devjaimeblog/src/components/AIParticles.astro", void 0);

createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="chat-widget ai-glow" data-astro-cid-ryytxnzt> <div class="chat-header" data-astro-cid-ryytxnzt> <span class="title" data-astro-cid-ryytxnzt>Asistente de devjaime</span> <span class="status" id="chat-status" data-astro-cid-ryytxnzt>offline</span> </div> <div class="chat-messages" id="chat-messages" data-astro-cid-ryytxnzt></div> <form class="chat-input" id="chat-form" data-astro-cid-ryytxnzt> <input type="text" id="chat-text" placeholder="Escribe tu mensaje..." autocomplete="off" data-astro-cid-ryytxnzt> <button type="submit" class="send" data-astro-cid-ryytxnzt>Enviar</button> </form> <div class="hint" data-astro-cid-ryytxnzt>Tu mensaje se procesa en tu equipo si Ollama está corriendo.</div> <noscript>Activa JavaScript para usar el chat.</noscript>  ${renderScript($$result, "/Users/devjaime/Documents/devjaimeblog/src/components/ChatWidget.astro?astro&type=script&index=0&lang.ts")} </div>`;
}, "/Users/devjaime/Documents/devjaimeblog/src/components/ChatWidget.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://devjaime.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "devjaime • AI & Software Engineering",
    description = "Chilean software engineer specialized in artificial intelligence, cloud computing and backend development. With experience in Golang, PostgreSQL, LangChain and microservices.",
    image = "/devjaime.webp",
    canonical,
    type = "website",
    publishedTime,
    modifiedTime,
    author = "Jaime Hernández",
    tags = [],
    noindex = false
  } = Astro2.props;
  const canonicalUrl = canonical || Astro2.url.href;
  const ogImage = new URL(image, Astro2.url).href;
  return renderTemplate(_b || (_b = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><!-- SEO Meta Tags --><title>', '</title><meta name="description"', '><meta name="author"', '><meta name="robots"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale" content="en_US"><meta property="og:site_name" content="devjaime"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:creator" content="@hsjhernandez"><!-- Article specific meta tags -->', "", "", "", '<!-- Favicon and Icons --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><!-- Preconnect to external domains --><link rel="preconnect" href="https://fonts.bunny.net"><link rel="preconnect" href="https://giscus.app"><link rel="dns-prefetch" href="https://gc.zgo.at"><!-- Fonts --><link href="https://fonts.bunny.net/css?family=ibm-plex-mono:400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet"><!-- Structured Data --><script type="application/ld+json">', '</script><!-- Generator --><meta name="generator"', '><!-- Theme Color --><meta name="theme-color" content="#10b981" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#065f46" media="(prefers-color-scheme: dark)"><!-- Additional meta tags --><meta name="keywords" content="Jaime Hernández, software engineer, AI, artificial intelligence, Golang, Python, backend development, cloud computing, microservices, PostgreSQL, LangChain, Chile, Latin America"><meta name="geo.region" content="CL"><meta name="geo.country" content="Chile"><meta name="language" content="English"><meta http-equiv="content-language" content="en">', '<!-- Analytics --><script data-goatcounter="https://devjaime.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>', '</head> <body class="zag-bg zag-text zag-transition font-mono antialiased"> <!-- AI Particles Background --> ', ' <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-md z-50">\nSkip to main content\n</a> ', ' <main id="main-content" class="overflow-x-hidden"> ', " </main> <!-- Comments - Only load on blog posts --> ", " ", " <!-- AI Animation Scripts --> ", " ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(author, "content"), addAttribute(noindex ? "noindex, nofollow" : "index, follow", "content"), addAttribute(canonicalUrl, "href"), addAttribute(type, "content"), addAttribute(canonicalUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(canonicalUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), type === "article" && publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`, type === "article" && modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>`, type === "article" && author && renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`, tags.length > 0 && tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebSite",
    "name": title,
    "description": description,
    "url": canonicalUrl,
    "image": ogImage,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://devjaime.com",
      "sameAs": [
        "https://github.com/devjaime/",
        "https://twitter.com/hsjhernandez",
        "https://www.linkedin.com/in/devjaime/"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "devjaime",
      "url": "https://devjaime.com"
    },
    ...type === "article" && {
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "headline": title,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      }
    }
  })), addAttribute(Astro2.generator, "content"), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "AIParticles", $$AIParticles, {}), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), Astro2.url.pathname.includes("/blog/") && renderTemplate(_a || (_a = __template(['<script src="https://giscus.app/client.js" data-repo="devjaime/devjaimeblog" data-repo-id="R_kgDOOJEERg" data-category="Q&A" data-category-id="DIC_kwDOOJEERs4ColNL" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="bottom" data-theme="preferred_color_scheme" data-lang="en" crossorigin="anonymous" async>\n      </script>']))), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "/Users/devjaime/Documents/devjaimeblog/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), false);
}, "/Users/devjaime/Documents/devjaimeblog/src/layouts/Layout.astro", void 0);

export { $$Layout as $, GLOBAL as G, $$Section as a, $$Anchor as b };
