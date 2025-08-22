/* empty css                                                                    */
import { d as createComponent, i as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import { $ as $$BlogLayout } from './BlogLayout_COI89YL8.mjs';

const html = () => "<h1 id=\"que-es-rabbitmq-y-como-implementarlo-en-nestjs\">Que es rabbitMQ y como implementarlo en nestjs</h1>\n<p>RabbitMQ es un software de intermediación de mensajes de código abierto que se utiliza para enviar y recibir mensajes entre aplicaciones y…</p>\n<hr>\n<h3 id=\"que-es-rabbitmq-y-como-implementarlo-ennestjs\">Que es rabbitMQ y como implementarlo en nestjs</h3>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*SmGSlOwpeP5v3mmxUusRMw.png\" alt=\"\"></p>\n<p>RabbitMQ es un software de intermediación de mensajes de código abierto que se utiliza para enviar y recibir mensajes entre aplicaciones y sistemas distribuidos. Es una implementación del protocolo de Advanced Message Queuing Protocol (AMQP) y permite que las aplicaciones se comuniquen de manera asíncrona y escalable.</p>\n<p>RabbitMQ funciona como un intermediario entre las aplicaciones, recibiendo mensajes de una aplicación y entregándolos a otra. Estos mensajes se pueden enviar de forma segura, confiable y rápida. RabbitMQ se utiliza comúnmente en aplicaciones empresariales, en particular en aquellas que requieren una comunicación de alta disponibilidad y de alta velocidad entre sistemas distribuidos.</p>\n<p>RabbitMQ se puede integrar con varios lenguajes de programación y plataformas, incluyendo Java, Python, Ruby, .NET, entre otros. Además, RabbitMQ ofrece diversas características, como la capacidad de encolar mensajes, enrutarlos según criterios específicos, implementar políticas de recuperación de errores y soporte para clústeres.</p>\n<p>Para implementar RabbitMQ en NestJS, puedes seguir los siguientes pasos:</p>\n<p>Instala el paquete <code>amqplib</code> para Node.js utilizando el administrador de paquetes npm:</p>\n<p>npm install amqplib</p>\n<p>Importa el módulo <code>AMQPModule</code> de NestJS y configura la conexión a RabbitMQ en el archivo <code>app.module.ts</code>:</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*P4pxjatoEWiBgv5Zn_D_kQ.png\" alt=\"\"></p>\n<p>Crea un consumidor que escuche mensajes de una cola específica en el archivo <code>consumer.service.ts</code>:</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*JNmmr2GaGsl5-isUJarBpQ.png\" alt=\"\"></p>\n<p>En este ejemplo, el consumidor está configurado para escuchar mensajes con la clave de enrutamiento “my-routing-key” en la cola “my-queue” del intercambio “my-exchange”.</p>\n<p>Crea un productor que envíe mensajes a una cola específica en el archivo <code>producer.service.ts</code>:</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*C5M3EPAyz5z31S_rgw6olA.png\" alt=\"\"></p>\n<p>En este ejemplo, el productor envía un mensaje con el contenido especificado a la cola “my-queue”.</p>\n<p>Finalmente, puedes inyectar los servicios <code>ConsumerService</code> y <code>ProducerService</code> donde sea necesario y utilizarlos para recibir y enviar mensajes, respectivamente.</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*b6eYRwVHod6jyadeeWfmKA.png\" alt=\"\"></p>\n<p>En este ejemplo, el controlador expone una ruta GET que utiliza el servicio <code>ProducerService</code> para enviar un mensaje a la cola “my-queue”.</p>\n<p>Espero que esto te ayude a implementar RabbitMQ en NestJS. ¡Buena suerte!</p>\n<p>By <a href=\"https://medium.com/@devjaime\">Jaime Hernández</a> on <a href=\"https://medium.com/p/8a8f1a97df5f\">March 18, 2023</a>.</p>\n<p><a href=\"https://medium.com/@devjaime/que-es-rabbitmq-y-como-implementarlo-en-nestjs-8a8f1a97df5f\">Canonical link</a></p>\n<p>Exported from <a href=\"https://medium.com\">Medium</a> on March 15, 2025.</p>";

				const frontmatter = {"layout":"../../layouts/BlogLayout.astro","title":"Que es rabbitMQ y como implementarlo en nestjs","description":"","tags":["code","rabbitMQ","nestjs"],"time":4,"featured":true,"timestamp":"2023-03-18T12:20:32-0300","filename":"2023-03-18_Que-es-rabbitMQ-y-como-implementarlo-en-nestjs-8a8f1a97df5f"};
				const file = "/Users/devjaime/Documents/devjaimeblog/src/pages/blog/2023-03-18_Que-es-rabbitMQ-y-como-implementarlo-en-nestjs-8a8f1a97df5f.md";
				const url = "/blog/2023-03-18_Que-es-rabbitMQ-y-como-implementarlo-en-nestjs-8a8f1a97df5f";
				function rawContent() {
					return "   \n                                        \n                                                       \n               \n                                    \n       \n              \n                                     \n                                                                                  \n   \n\nQue es rabbitMQ y como implementarlo en nestjs\n==============================================\n\nRabbitMQ es un software de intermediación de mensajes de código abierto que se utiliza para enviar y recibir mensajes entre aplicaciones y…\n\n* * *\n\n### Que es rabbitMQ y como implementarlo en nestjs\n\n![](https://cdn-images-1.medium.com/max/800/1*SmGSlOwpeP5v3mmxUusRMw.png)\n\nRabbitMQ es un software de intermediación de mensajes de código abierto que se utiliza para enviar y recibir mensajes entre aplicaciones y sistemas distribuidos. Es una implementación del protocolo de Advanced Message Queuing Protocol (AMQP) y permite que las aplicaciones se comuniquen de manera asíncrona y escalable.\n\nRabbitMQ funciona como un intermediario entre las aplicaciones, recibiendo mensajes de una aplicación y entregándolos a otra. Estos mensajes se pueden enviar de forma segura, confiable y rápida. RabbitMQ se utiliza comúnmente en aplicaciones empresariales, en particular en aquellas que requieren una comunicación de alta disponibilidad y de alta velocidad entre sistemas distribuidos.\n\nRabbitMQ se puede integrar con varios lenguajes de programación y plataformas, incluyendo Java, Python, Ruby, .NET, entre otros. Además, RabbitMQ ofrece diversas características, como la capacidad de encolar mensajes, enrutarlos según criterios específicos, implementar políticas de recuperación de errores y soporte para clústeres.\n\nPara implementar RabbitMQ en NestJS, puedes seguir los siguientes pasos:\n\nInstala el paquete `amqplib` para Node.js utilizando el administrador de paquetes npm:\n\nnpm install amqplib\n\nImporta el módulo `AMQPModule` de NestJS y configura la conexión a RabbitMQ en el archivo `app.module.ts`:\n\n![](https://cdn-images-1.medium.com/max/800/1*P4pxjatoEWiBgv5Zn_D_kQ.png)\n\nCrea un consumidor que escuche mensajes de una cola específica en el archivo `consumer.service.ts`:\n\n![](https://cdn-images-1.medium.com/max/800/1*JNmmr2GaGsl5-isUJarBpQ.png)\n\nEn este ejemplo, el consumidor está configurado para escuchar mensajes con la clave de enrutamiento “my-routing-key” en la cola “my-queue” del intercambio “my-exchange”.\n\nCrea un productor que envíe mensajes a una cola específica en el archivo `producer.service.ts`:\n\n![](https://cdn-images-1.medium.com/max/800/1*C5M3EPAyz5z31S_rgw6olA.png)\n\nEn este ejemplo, el productor envía un mensaje con el contenido especificado a la cola “my-queue”.\n\nFinalmente, puedes inyectar los servicios `ConsumerService` y `ProducerService` donde sea necesario y utilizarlos para recibir y enviar mensajes, respectivamente.\n\n![](https://cdn-images-1.medium.com/max/800/1*b6eYRwVHod6jyadeeWfmKA.png)\n\nEn este ejemplo, el controlador expone una ruta GET que utiliza el servicio `ProducerService` para enviar un mensaje a la cola \"my-queue\".\n\nEspero que esto te ayude a implementar RabbitMQ en NestJS. ¡Buena suerte!\n\nBy [Jaime Hernández](https://medium.com/@devjaime) on [March 18, 2023](https://medium.com/p/8a8f1a97df5f).\n\n[Canonical link](https://medium.com/@devjaime/que-es-rabbitmq-y-como-implementarlo-en-nestjs-8a8f1a97df5f)\n\nExported from [Medium](https://medium.com) on March 15, 2025.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"que-es-rabbitmq-y-como-implementarlo-en-nestjs","text":"Que es rabbitMQ y como implementarlo en nestjs"},{"depth":3,"slug":"que-es-rabbitmq-y-como-implementarlo-ennestjs","text":"Que es rabbitMQ y como implementarlo en nestjs"}];
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
