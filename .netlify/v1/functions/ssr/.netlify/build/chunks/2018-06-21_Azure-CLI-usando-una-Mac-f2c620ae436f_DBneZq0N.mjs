/* empty css                                                                    */
import { d as createComponent, i as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import { $ as $$BlogLayout } from './BlogLayout_COI89YL8.mjs';

const html = () => "<p>Azure CLI usando una Mac</p>\n<h1 id=\"azure-cli-usando-una-mac\">Azure CLI usando una Mac</h1>\n<p>Video tutorial a continuación</p>\n<hr>\n<h3 id=\"azure-cli-usando-unamac\">Azure CLI usando una Mac</h3>\n<p>Video tutorial a continuación</p>\n<p>El <strong>Azure CLI 2.0</strong> proporciona una experiencia de línea de comandos para la gestión de los recursos Azure. Puedes usarlo con Azure Cloud Shell que se encuentra dentro de su navegador web, o puede instalarlo en macOS, Linux y Windows. En esta publicación, lo instalaremos en una Mac.</p>\n<p>Azure CLI 2.0 en una Mac es instalar <a href=\"https://brew.sh/\">Homebrew</a> . Básicamente, homebrew es un administrador de paquetes para Mac que facilita la instalación de la aplicación.</p>\n<p>Una vez que esté instalado, se deben ejecutar estos dos comandos:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>brew update brew install azure-cli</span></span></code></pre>\n<p>El primer comando simplemente actualiza la base de datos homebrew y el siguiente comando instala Azure CLI 2.0 como se muestra a continuación.</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/0*GXQowmNeNDtJVaZI.png\" alt=\"\"></p>\n<p>Pueden escribir <code>az h</code>para obtener la documentación de ayuda o vaya a <a href=\"https://aka.ms/cli\">aka.ms/cli</a> para leer los documentos.</p>\n<h3 id=\"inicia-sesión-enazure\">Inicia sesión en Azure</h3>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/0*S7KvV0xYMQSbp_E3.png\" alt=\"\"></p>\n<h3 id=\"usar-el-az-logincomando-para-iniciar-sesión-en-su-cuenta-de-azure-verás-el-siguiente-mensaje\">usar el <code>az login</code>comando para iniciar sesión en su cuenta de Azure. Verás el siguiente mensaje:</h3>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>To sign in, use a web browser to open the page https://aka.ms/devicelogin and enter the code XXX to authenticate.</span></span></code></pre>\n<p>Abra un navegador web y vaya a <a href=\"https://microsoft.com/devicelogin\">https://microsoft.com/devicelogin</a> ingrese su código. Se te pedirá que ingreses el código para autenticarte.</p>\n<p>Vuelva a la aplicación de terminal y verá algo similar a lo siguiente si inició sesión correctamente:</p>\n<p>Tenga en cuenta que siempre puede volver a esta pantalla con la <code>az account</code>lista. Ahora puede intentar crear una máquina virtual de Ubuntu utilizando solo la CLI. <a href=\"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-cli\">Aquí</a> hay un excelente documento para comenzar.</p>\n<p>Asegúrese de leer los <a href=\"https://docs.microsoft.com/en-us/cli/azure/overview\">documentos CLI</a> completos para obtener más información.</p>\n<p>Este articulo fue basado en el blog <a href=\"https://www.michaelcrump.net/azure-tips-and-tricks34/\">https://www.michaelcrump.net/azure-tips-and-tricks34/</a></p>\n<hr>\n<p><em>Originally published at</em> <a href=\"http://lawebdelprogramador.cl/bloglawebdelprogramador/2018/06/21/azure-cli-usando-una-mac/\"><em>lawebdelprogramador.cl</em></a> <em>on June 21, 2018.</em></p>\n<p>By <a href=\"https://medium.com/@devjaime\">Jaime Hernández</a> on <a href=\"https://medium.com/p/f2c620ae436f\">June 21, 2018</a>.</p>\n<p><a href=\"https://medium.com/@devjaime/azure-cli-usando-una-mac-f2c620ae436f\">Canonical link</a></p>\n<p>Exported from <a href=\"https://medium.com\">Medium</a> on March 15, 2025.</p>";

				const frontmatter = {"layout":"../../layouts/BlogLayout.astro","title":"Azure CLI usando una Mac","description":"","tags":["code","azure"],"time":4,"featured":true,"timestamp":"2018-06-21T12:20:31-0300","filename":"2018-06-21_Azure-CLI-usando-una-Mac-f2c620ae436f"};
				const file = "/Users/devjaime/Documents/devjaimeblog/src/pages/blog/2018-06-21_Azure-CLI-usando-una-Mac-f2c620ae436f.md";
				const url = "/blog/2018-06-21_Azure-CLI-usando-una-Mac-f2c620ae436f";
				function rawContent() {
					return "   \n                                        \n                                 \n               \n                       \n       \n              \n                                     \n                                                            \n   \n\nAzure CLI usando una Mac\n\nAzure CLI usando una Mac\n========================\n\nVideo tutorial a continuación\n\n* * *\n\n### Azure CLI usando una Mac\n\nVideo tutorial a continuación\n\nEl **Azure CLI 2.0** proporciona una experiencia de línea de comandos para la gestión de los recursos Azure. Puedes usarlo con Azure Cloud Shell que se encuentra dentro de su navegador web, o puede instalarlo en macOS, Linux y Windows. En esta publicación, lo instalaremos en una Mac.\n\nAzure CLI 2.0 en una Mac es instalar [Homebrew](https://brew.sh/) . Básicamente, homebrew es un administrador de paquetes para Mac que facilita la instalación de la aplicación.\n\nUna vez que esté instalado, se deben ejecutar estos dos comandos:\n\n    brew update brew install azure-cli\n\nEl primer comando simplemente actualiza la base de datos homebrew y el siguiente comando instala Azure CLI 2.0 como se muestra a continuación.\n\n![](https://cdn-images-1.medium.com/max/800/0*GXQowmNeNDtJVaZI.png)\n\nPueden escribir `az h`para obtener la documentación de ayuda o vaya a [aka.ms/cli](https://aka.ms/cli) para leer los documentos.\n\n### Inicia sesión en Azure\n\n![](https://cdn-images-1.medium.com/max/800/0*S7KvV0xYMQSbp_E3.png)\n\n### usar el `az login`comando para iniciar sesión en su cuenta de Azure. Verás el siguiente mensaje:\n\n    To sign in, use a web browser to open the page https://aka.ms/devicelogin and enter the code XXX to authenticate.\n\nAbra un navegador web y vaya a [https://microsoft.com/devicelogin](https://microsoft.com/devicelogin) ingrese su código. Se te pedirá que ingreses el código para autenticarte.\n\nVuelva a la aplicación de terminal y verá algo similar a lo siguiente si inició sesión correctamente:\n\nTenga en cuenta que siempre puede volver a esta pantalla con la `az account`lista. Ahora puede intentar crear una máquina virtual de Ubuntu utilizando solo la CLI. [Aquí](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-cli) hay un excelente documento para comenzar.\n\nAsegúrese de leer los [documentos CLI](https://docs.microsoft.com/en-us/cli/azure/overview) completos para obtener más información.\n\nEste articulo fue basado en el blog [https://www.michaelcrump.net/azure-tips-and-tricks34/](https://www.michaelcrump.net/azure-tips-and-tricks34/)\n\n* * *\n\n_Originally published at_ [_lawebdelprogramador.cl_](http://lawebdelprogramador.cl/bloglawebdelprogramador/2018/06/21/azure-cli-usando-una-mac/) _on June 21, 2018._\n\nBy [Jaime Hernández](https://medium.com/@devjaime) on [June 21, 2018](https://medium.com/p/f2c620ae436f).\n\n[Canonical link](https://medium.com/@devjaime/azure-cli-usando-una-mac-f2c620ae436f)\n\nExported from [Medium](https://medium.com) on March 15, 2025.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"azure-cli-usando-una-mac","text":"Azure CLI usando una Mac"},{"depth":3,"slug":"azure-cli-usando-unamac","text":"Azure CLI usando una Mac"},{"depth":3,"slug":"inicia-sesión-enazure","text":"Inicia sesión en Azure"},{"depth":3,"slug":"usar-el-az-logincomando-para-iniciar-sesión-en-su-cuenta-de-azure-verás-el-siguiente-mensaje","text":"usar el az logincomando para iniciar sesión en su cuenta de Azure. Verás el siguiente mensaje:"}];
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
