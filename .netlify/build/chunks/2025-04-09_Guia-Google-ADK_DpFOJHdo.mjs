/* empty css                                                                    */
import { d as createComponent, i as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import { $ as $$BlogLayout } from './BlogLayout_COI89YL8.mjs';

const html = () => "<p>Google ha lanzado <a href=\"https://google.github.io/adk-docs/\">ADK (Agent Development Kit)</a>, un potente framework open source que te permite crear agentes de inteligencia artificial de forma modular, segura y escalable. ¿Quieres aprender desde lo más básico hasta construir sistemas complejos multiagente? Esta guía es para ti. 👇</p>\n<h2 id=\"-qué-es-google-adk\">🚀 ¿Qué es Google ADK?</h2>\n<p>ADK permite desarrollar agentes autónomos que razonan con modelos de lenguaje como Gemini, toman decisiones, usan herramientas externas (como APIs o ejecución de código), y pueden ser desplegados en producción con facilidad. Ofrece:</p>\n<ul>\n<li>Agentes LLM, secuenciales, paralelos, en bucle y personalizados.</li>\n<li>Herramientas como búsqueda en Google, ejecución de código y consumo de APIs.</li>\n<li>Evaluaciones integradas para medir desempeño.</li>\n<li>Buenas prácticas de IA responsable.</li>\n<li>Despliegue en Vertex AI, Cloud Run y contenedores Docker.</li>\n</ul>\n<h2 id=\"-tipos-de-agentes-disponibles\">🧠 Tipos de Agentes disponibles</h2>\n<ul>\n<li><strong>LlmAgent</strong>: Agentes impulsados por modelos de lenguaje. Interpretan el input del usuario y deciden qué herramientas usar.</li>\n<li><strong>SequentialAgent</strong>: Ejecuta agentes en orden fijo, ideal para pipelines.</li>\n<li><strong>ParallelAgent</strong>: Corre agentes en paralelo para tareas simultáneas.</li>\n<li><strong>LoopAgent</strong>: Ejecuta agentes repetidamente hasta cumplir una condición.</li>\n<li><strong>Agentes Personalizados</strong>: Heredan de <code>BaseAgent</code> y permiten crear lógicas complejas a medida.</li>\n</ul>\n<h2 id=\"-integración-con-herramientas\">🧰 Integración con Herramientas</h2>\n<p>Puedes conectar fácilmente funciones y servicios externos:</p>\n<ul>\n<li><strong>Ejecución de código</strong>: Usa código Python para resolver cálculos o tareas lógicas.</li>\n<li><strong>Consumo de APIs</strong>: Conecta APIs REST usando funciones Python o integraciones OpenAPI.</li>\n<li><strong>AgentTool</strong>: Usa otros agentes como herramientas, ideal para arquitecturas multiagente.</li>\n</ul>\n<h2 id=\"-evaluación-de-agentes\">🧪 Evaluación de Agentes</h2>\n<p>ADK te permite probar tus agentes antes de ir a producción. Define tests unitarios o evalsets con múltiples turnos, y verifica:</p>\n<ul>\n<li>Que se llamaron las herramientas correctas.</li>\n<li>Que se generó la respuesta esperada.</li>\n<li>Que el flujo de razonamiento es correcto.</li>\n</ul>\n<p>Puedes correr evaluaciones desde la CLI, con <code>pytest</code> o desde la interfaz web de desarrollo.</p>\n<h2 id=\"-prácticas-de-ia-responsable\">✅ Prácticas de IA Responsable</h2>\n<p>ADK promueve seguridad desde el diseño:</p>\n<ul>\n<li>Uso de permisos limitados para herramientas.</li>\n<li>Filtros de entrada y salida.</li>\n<li>Sandboxing para ejecución de código.</li>\n<li>Callbacks para monitoreo y validación.</li>\n<li>Evaluaciones continuas para detectar desviaciones.</li>\n</ul>\n<h2 id=\"️-despliegue-de-agentes\">☁️ Despliegue de Agentes</h2>\n<p>ADK permite desplegar tus agentes de forma sencilla:</p>\n<ul>\n<li><strong>Vertex AI Agent Engine</strong>: Infraestructura escalable de Google para agentes.</li>\n<li><strong>Cloud Run</strong>: Publica tu agente como servicio sin servidor (serverless).</li>\n<li><strong>Docker</strong>: Corre tus agentes en cualquier infraestructura con contenedores.</li>\n</ul>\n<p>ADK incluye CLI para desplegar con un solo comando y también puedes crear tu propio Dockerfile para personalizar.</p>\n<hr>\n<p>🎯 <strong>Conclusión:</strong> Google ADK es una herramienta poderosa para cualquier desarrollador o empresa que quiera construir agentes de IA modernos, seguros y funcionales. Desde un bot simple hasta un sistema multiagente complejo, puedes empezar hoy y escalar sin fricciones.</p>\n<p>¿Listo para crear tu primer agente? ¡Dale una mirada a la <a href=\"https://google.github.io/adk-docs/\">documentación oficial</a>! ✨</p>";

				const frontmatter = {"layout":"../../layouts/BlogLayout.astro","title":"Guía completa de Google ADK: Crea agentes inteligentes paso a paso","description":"Aprende a crear agentes de inteligencia artificial con Google ADK desde cero, integrando herramientas, desplegando en la nube y aplicando buenas prácticas de IA responsable.","tags":["Google ADK","Agentes Inteligentes","IA","Despliegue en la nube","Vertex AI","Cloud Run","Herramientas IA"],"time":8,"timestamp":"2025-04-09T10:00:00-0300","featured":true,"filename":"2025-04-09_Guia-Google-ADK"};
				const file = "/Users/devjaime/Documents/devjaimeblog/src/pages/blog/2025-04-09_Guia-Google-ADK.md";
				const url = "/blog/2025-04-09_Guia-Google-ADK";
				function rawContent() {
					return "   \n                                        \n                                                                           \n                                                                                                                                                                                            \n                                                                                                                        \n       \n                                     \n              \n                                      \n   \n\nGoogle ha lanzado [ADK (Agent Development Kit)](https://google.github.io/adk-docs/), un potente framework open source que te permite crear agentes de inteligencia artificial de forma modular, segura y escalable. ¿Quieres aprender desde lo más básico hasta construir sistemas complejos multiagente? Esta guía es para ti. 👇\n\n## 🚀 ¿Qué es Google ADK?\n\nADK permite desarrollar agentes autónomos que razonan con modelos de lenguaje como Gemini, toman decisiones, usan herramientas externas (como APIs o ejecución de código), y pueden ser desplegados en producción con facilidad. Ofrece:\n\n- Agentes LLM, secuenciales, paralelos, en bucle y personalizados.\n- Herramientas como búsqueda en Google, ejecución de código y consumo de APIs.\n- Evaluaciones integradas para medir desempeño.\n- Buenas prácticas de IA responsable.\n- Despliegue en Vertex AI, Cloud Run y contenedores Docker.\n\n## 🧠 Tipos de Agentes disponibles\n\n- **LlmAgent**: Agentes impulsados por modelos de lenguaje. Interpretan el input del usuario y deciden qué herramientas usar.\n- **SequentialAgent**: Ejecuta agentes en orden fijo, ideal para pipelines.\n- **ParallelAgent**: Corre agentes en paralelo para tareas simultáneas.\n- **LoopAgent**: Ejecuta agentes repetidamente hasta cumplir una condición.\n- **Agentes Personalizados**: Heredan de `BaseAgent` y permiten crear lógicas complejas a medida.\n\n## 🧰 Integración con Herramientas\n\nPuedes conectar fácilmente funciones y servicios externos:\n\n- **Ejecución de código**: Usa código Python para resolver cálculos o tareas lógicas.\n- **Consumo de APIs**: Conecta APIs REST usando funciones Python o integraciones OpenAPI.\n- **AgentTool**: Usa otros agentes como herramientas, ideal para arquitecturas multiagente.\n\n## 🧪 Evaluación de Agentes\n\nADK te permite probar tus agentes antes de ir a producción. Define tests unitarios o evalsets con múltiples turnos, y verifica:\n\n- Que se llamaron las herramientas correctas.\n- Que se generó la respuesta esperada.\n- Que el flujo de razonamiento es correcto.\n\nPuedes correr evaluaciones desde la CLI, con `pytest` o desde la interfaz web de desarrollo.\n\n## ✅ Prácticas de IA Responsable\n\nADK promueve seguridad desde el diseño:\n\n- Uso de permisos limitados para herramientas.\n- Filtros de entrada y salida.\n- Sandboxing para ejecución de código.\n- Callbacks para monitoreo y validación.\n- Evaluaciones continuas para detectar desviaciones.\n\n## ☁️ Despliegue de Agentes\n\nADK permite desplegar tus agentes de forma sencilla:\n\n- **Vertex AI Agent Engine**: Infraestructura escalable de Google para agentes.\n- **Cloud Run**: Publica tu agente como servicio sin servidor (serverless).\n- **Docker**: Corre tus agentes en cualquier infraestructura con contenedores.\n\nADK incluye CLI para desplegar con un solo comando y también puedes crear tu propio Dockerfile para personalizar.\n\n---\n\n🎯 **Conclusión:** Google ADK es una herramienta poderosa para cualquier desarrollador o empresa que quiera construir agentes de IA modernos, seguros y funcionales. Desde un bot simple hasta un sistema multiagente complejo, puedes empezar hoy y escalar sin fricciones.\n\n¿Listo para crear tu primer agente? ¡Dale una mirada a la [documentación oficial](https://google.github.io/adk-docs/)! ✨\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-qué-es-google-adk","text":"🚀 ¿Qué es Google ADK?"},{"depth":2,"slug":"-tipos-de-agentes-disponibles","text":"🧠 Tipos de Agentes disponibles"},{"depth":2,"slug":"-integración-con-herramientas","text":"🧰 Integración con Herramientas"},{"depth":2,"slug":"-evaluación-de-agentes","text":"🧪 Evaluación de Agentes"},{"depth":2,"slug":"-prácticas-de-ia-responsable","text":"✅ Prácticas de IA Responsable"},{"depth":2,"slug":"️-despliegue-de-agentes","text":"☁️ Despliegue de Agentes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
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
