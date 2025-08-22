/* empty css                                                                    */
import { d as createComponent, i as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import { $ as $$BlogLayout } from './BlogLayout_COI89YL8.mjs';

const html = () => "<h1 id=\"que-es-kafka-y-como-implementarlo-en-nestjs\">Que es kafka y como implementarlo en nestjs</h1>\n<p>Apache Kafka es una plataforma de procesamiento de datos distribuida y escalable que se utiliza para la transmisión de datos en tiempo…</p>\n<hr>\n<h3 id=\"que-es-kafka-y-como-implementarlo-ennestjs\">Que es kafka y como implementarlo en nestjs</h3>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*2Y1zQLc-mze_2v95Od6jYQ.png\" alt=\"\"></p>\n<p>Apache Kafka es una plataforma de procesamiento de datos distribuida y escalable que se utiliza para la transmisión de datos en tiempo real. Es una plataforma de mensajería y streaming de eventos que permite la transferencia de datos de forma segura, confiable y en tiempo real entre aplicaciones y sistemas distribuidos.</p>\n<p>Kafka se basa en un modelo de publicación-suscripción, en el que los productores de datos publican mensajes en un tema (topic) y los consumidores se suscriben a ese tema para recibir los mensajes. Kafka puede manejar grandes cantidades de datos en tiempo real y distribuirlos a múltiples consumidores en paralelo.</p>\n<p>Kafka se utiliza comúnmente en aplicaciones empresariales, en particular en aquellas que requieren una comunicación de alta disponibilidad y de alta velocidad entre sistemas distribuidos. Además, Kafka es una plataforma flexible que se puede integrar con varios lenguajes de programación y herramientas, y cuenta con una comunidad activa de desarrolladores que contribuyen a su mejora y expansión.</p>\n<p>Entre las características principales de Kafka se incluyen la escalabilidad horizontal, la tolerancia a fallos, la replicación de datos, la capacidad de almacenamiento y la integración con herramientas de procesamiento de datos como Apache Spark, Apache Flink y Apache Storm.</p>\n<p>Como implementar kafka en Nestjs</p>\n<p>Para implementar Kafka en NestJS, puedes seguir los siguientes pasos:</p>\n<ol>\n<li>Instala los paquetes <code>@nestjs/microservices</code> y <code>kafkajs</code> usando npm:</li>\n</ol>\n<p>npm install @nestjs/microservices kafkajs</p>\n<p>2. Crea un módulo para Kafka en NestJS usando el generador de NestJS:</p>\n<p>nest generate module kafka</p>\n<p>3.- Importa el módulo <code>KafkaModule</code> en tu aplicación principal:</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*Pb0-k7RJNRt_k7mzA4BCrg.png\" alt=\"\"></p>\n<p>4.- Crea un servicio Kafka en el módulo <code>KafkaModule</code>:</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*jilP_fR8aeaHEhyI6zON5g.png\" alt=\"\"></p>\n<p>En el constructor del servicio, se crea una instancia de <code>Kafka</code> y se especifican los brokers y el ID del cliente. La función <code>sendMessage</code> se utiliza para enviar mensajes a un topic específico, mientras que la función <code>consumeMessages</code> se utiliza para consumir mensajes de un topic específico.</p>\n<p>5. Agrega un controlador en el módulo <code>KafkaModule</code> para manejar las solicitudes HTTP:</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*eHVRJ6NvcEgcn_xzzW39zQ.png\" alt=\"\"></p>\n<p>Este controlador contiene dos métodos, uno para enviar mensajes y otro para consumir mensajes. Ambos métodos llaman a las funciones del servicio <code>KafkaService</code> correspondientes.</p>\n<p>6. Agrega el controlador al módulo <code>KafkaModule</code>:</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*2eVzbuNjM-dfS_FDcPuH0A.png\" alt=\"\"></p>\n<p>7. Inicia la aplicación:</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*6TGk7Y7ffITYAYrSS58-3A.png\" alt=\"\"></p>\n<p>Estos son los pasos básicos para implementar Kafka en NestJS. Por supuesto, hay muchas otras configuraciones.</p>\n<p>By <a href=\"https://medium.com/@devjaime\">Jaime Hernández</a> on <a href=\"https://medium.com/p/657e60468356\">March 18, 2023</a>.</p>\n<p><a href=\"https://medium.com/@devjaime/que-es-kafka-y-como-implementarlo-en-nestjs-657e60468356\">Canonical link</a></p>\n<p>Exported from <a href=\"https://medium.com\">Medium</a> on March 15, 2025.</p>";

				const frontmatter = {"layout":"../../layouts/BlogLayout.astro","title":"Que es kafka y como implementarlo en nestjs","description":"","tags":["code","Kafka","Nestjs"],"time":4,"featured":true,"timestamp":"2023-03-18T12:20:32-0300","filename":"2023-03-18_Que-es-kafka-y-como-implementarlo-en-nestjs-657e60468356"};
				const file = "/Users/devjaime/Documents/devjaimeblog/src/pages/blog/2023-03-18_Que-es-kafka-y-como-implementarlo-en-nestjs-657e60468356.md";
				const url = "/blog/2023-03-18_Que-es-kafka-y-como-implementarlo-en-nestjs-657e60468356";
				function rawContent() {
					return "   \n                                        \n                                                    \n               \n                                 \n       \n              \n                                     \n                                                                               \n   \n\n\nQue es kafka y como implementarlo en nestjs\n===========================================\n\nApache Kafka es una plataforma de procesamiento de datos distribuida y escalable que se utiliza para la transmisión de datos en tiempo…\n\n* * *\n\n### Que es kafka y como implementarlo en nestjs\n\n![](https://cdn-images-1.medium.com/max/800/1*2Y1zQLc-mze_2v95Od6jYQ.png)\n\nApache Kafka es una plataforma de procesamiento de datos distribuida y escalable que se utiliza para la transmisión de datos en tiempo real. Es una plataforma de mensajería y streaming de eventos que permite la transferencia de datos de forma segura, confiable y en tiempo real entre aplicaciones y sistemas distribuidos.\n\nKafka se basa en un modelo de publicación-suscripción, en el que los productores de datos publican mensajes en un tema (topic) y los consumidores se suscriben a ese tema para recibir los mensajes. Kafka puede manejar grandes cantidades de datos en tiempo real y distribuirlos a múltiples consumidores en paralelo.\n\nKafka se utiliza comúnmente en aplicaciones empresariales, en particular en aquellas que requieren una comunicación de alta disponibilidad y de alta velocidad entre sistemas distribuidos. Además, Kafka es una plataforma flexible que se puede integrar con varios lenguajes de programación y herramientas, y cuenta con una comunidad activa de desarrolladores que contribuyen a su mejora y expansión.\n\nEntre las características principales de Kafka se incluyen la escalabilidad horizontal, la tolerancia a fallos, la replicación de datos, la capacidad de almacenamiento y la integración con herramientas de procesamiento de datos como Apache Spark, Apache Flink y Apache Storm.\n\nComo implementar kafka en Nestjs\n\nPara implementar Kafka en NestJS, puedes seguir los siguientes pasos:\n\n1.  Instala los paquetes `@nestjs/microservices` y `kafkajs` usando npm:\n\nnpm install @nestjs/microservices kafkajs\n\n2\\. Crea un módulo para Kafka en NestJS usando el generador de NestJS:\n\nnest generate module kafka\n\n3.- Importa el módulo `KafkaModule` en tu aplicación principal:\n\n![](https://cdn-images-1.medium.com/max/800/1*Pb0-k7RJNRt_k7mzA4BCrg.png)\n\n4.- Crea un servicio Kafka en el módulo `KafkaModule`:\n\n![](https://cdn-images-1.medium.com/max/800/1*jilP_fR8aeaHEhyI6zON5g.png)\n\nEn el constructor del servicio, se crea una instancia de `Kafka` y se especifican los brokers y el ID del cliente. La función `sendMessage` se utiliza para enviar mensajes a un topic específico, mientras que la función `consumeMessages` se utiliza para consumir mensajes de un topic específico.\n\n5\\. Agrega un controlador en el módulo `KafkaModule` para manejar las solicitudes HTTP:\n\n![](https://cdn-images-1.medium.com/max/800/1*eHVRJ6NvcEgcn_xzzW39zQ.png)\n\nEste controlador contiene dos métodos, uno para enviar mensajes y otro para consumir mensajes. Ambos métodos llaman a las funciones del servicio `KafkaService` correspondientes.\n\n6\\. Agrega el controlador al módulo `KafkaModule`:\n\n![](https://cdn-images-1.medium.com/max/800/1*2eVzbuNjM-dfS_FDcPuH0A.png)\n\n7\\. Inicia la aplicación:\n\n![](https://cdn-images-1.medium.com/max/800/1*6TGk7Y7ffITYAYrSS58-3A.png)\n\nEstos son los pasos básicos para implementar Kafka en NestJS. Por supuesto, hay muchas otras configuraciones.\n\nBy [Jaime Hernández](https://medium.com/@devjaime) on [March 18, 2023](https://medium.com/p/657e60468356).\n\n[Canonical link](https://medium.com/@devjaime/que-es-kafka-y-como-implementarlo-en-nestjs-657e60468356)\n\nExported from [Medium](https://medium.com) on March 15, 2025.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"que-es-kafka-y-como-implementarlo-en-nestjs","text":"Que es kafka y como implementarlo en nestjs"},{"depth":3,"slug":"que-es-kafka-y-como-implementarlo-ennestjs","text":"Que es kafka y como implementarlo en nestjs"}];
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
