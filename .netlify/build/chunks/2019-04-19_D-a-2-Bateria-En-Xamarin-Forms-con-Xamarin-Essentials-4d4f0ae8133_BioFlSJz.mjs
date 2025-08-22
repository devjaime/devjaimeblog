/* empty css                                                                    */
import { d as createComponent, i as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_C7nAViGe.mjs';
import 'kleur/colors';
import { $ as $$BlogLayout } from './BlogLayout_COI89YL8.mjs';

const html = () => "<h1 id=\"día-2-bateria-en-xamarin-forms-con-xamarin-essentials\">Día 2 Bateria En Xamarin Forms con Xamarin Essentials</h1>\n<p>En este articulo cubriré la experiencia con el segundo sensor a probar en este caso es la batería de nuestro dispositivo.</p>\n<hr>\n<h3 id=\"día-2-bateria-en-xamarin-forms-con-xamarin-essentials-1\">Día 2 Bateria En Xamarin Forms con Xamarin Essentials</h3>\n<p>En este articulo cubriré la experiencia con el segundo sensor a probar en este caso es la batería de nuestro dispositivo.</p>\n<p>La Api que captura el sensor de Batería permite verificar la información de esta y monitorear los cambios, proporciona información sobre el estado de ahorro de energía del dispositivo, que indica si el dispositivo se está ejecutando en un modo de bajo consumo.</p>\n<p>Un ejemplo de uso seria el siguiente:</p>\n<p>Las aplicaciones deben evitar el procesamiento en segundo plano si el estado de ahorro de energía del dispositivo está activado.</p>\n<p>Para esto debemos comenzar de la siguiente forma:</p>\n<p>Creamos un nuevo proyecto en visual studio</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*vVren6nk6s4y4jYa9tj1rQ.png\" alt=\"\"></p>\n<p>Seleccionamos una plantilla de Xamarin.Form multiplataforma.</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*7OQvoRukg6h3sZcIlUhQkA.png\" alt=\"\"></p>\n<p>Elegimos el nombre de nuestra Solución</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*lojCSObhbHrzk_zhTO95kQ.png\" alt=\"\"></p>\n<p>Seleccionamos una plantilla en blanco con nuestras plataformas de destino, en este caso Android / IOS</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*APIH6o54MdmLHqGUQM3EHQ.png\" alt=\"\"></p>\n<p>y creamos nuestra solución.</p>\n<p>Damos Click derecho sobre nuestra solución y agregamos el package nuGet xamarin.essentials, lo agregamos en nuestra solución para los proyectos involucrados</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*juy6Pq8MsiJmJTEZ3xqPeg.png\" alt=\"\"></p>\n<p>Crearemos la siguiente estructura de carpetas en nuestra aplicación (Si ya vienes del primer post te darás cuenta que es la misma estructura de carpetas y puedes copiarlas directamente del repositorio). Esto solo es para que nuestro patrón de diseño MVVM funcione correctamente.</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*sBY979qvtTTXwex_2iJAww.png\" alt=\"\"></p>\n<p>En nuestra vista carpeta View agregaremos una nueva page llamada BatteryPage</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*R-TaMw1p67zeeLHnvCKFYQ.png\" alt=\"\"></p>\n<p>y en nuestro ViewModel agregaremos una clase llamada BatteryViewModel.cs</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*oB9pwRkoUTUEOSqMyIgdCw.png\" alt=\"\"></p>\n<p>En nuestra vista xaml debemos agregar el siguiente código</p>\n<p>En la clase de nuestra vista debemos agregar el siguiente código.</p>\n<p>En nuestro viewmodel debemos agregar lo siguiente:</p>\n<p>Tambien debes agregar los permisos en el proyecto Android para que esto funcione</p>\n<p>AssemblyInfo.cs</p>\n<p>[assembly: UsesPermission(Android.Manifest.Permission.BatteryStats)]</p>\n<p>AndroidManifest.xml</p>\n<uses-permission android:name=\"”android.permission.BATTERY\\_STATS”\">\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*fxREiDRru0AHrFevX4PGtg.png\" alt=\"\"></p>\n<p>El resultado final de nuestra app sera el siguiente:</p>\n<p><img src=\"https://cdn-images-1.medium.com/max/800/1*C_7EnEA10KKiqSadOu8zVw.png\" alt=\"\"></p>\n<p>Puedes descargar el código fuente de esta app desde:</p>\n<p><a href=\"https://github.com/devjaime/Bateria\" title=\"https://github.com/devjaime/Bateria\"><strong>devjaime/Bateria</strong><br>\n_Sensor de bateria con Xamarin Essentials Xamarin Forms - devjaime/Bateria_github.com</a><a href=\"https://github.com/devjaime/Bateria\"></a></p>\n<p>By <a href=\"https://medium.com/@devjaime\">Jaime Hernández</a> on <a href=\"https://medium.com/p/4d4f0ae8133\">April 19, 2019</a>.</p>\n<p><a href=\"https://medium.com/@devjaime/d%C3%ADa-2-bateria-en-xamarin-forms-con-xamarin-essentials-4d4f0ae8133\">Canonical link</a></p>\n<p>Exported from <a href=\"https://medium.com\">Medium</a> on March 15, 2025.</p></uses-permission>";

				const frontmatter = {"layout":"../../layouts/BlogLayout.astro","title":"Día 2 Bateria En Xamarin Forms con Xamarin Essentials","description":"","tags":["code","Xamarin"],"time":4,"featured":true,"timestamp":"2019-04-19T12:20:31-0300","filename":"2019-04-19_D-a-2-Bateria-En-Xamarin-Forms-con-Xamarin-Essentials-4d4f0ae8133"};
				const file = "/Users/devjaime/Documents/devjaimeblog/src/pages/blog/2019-04-19_D-a-2-Bateria-En-Xamarin-Forms-con-Xamarin-Essentials-4d4f0ae8133.md";
				const url = "/blog/2019-04-19_D-a-2-Bateria-En-Xamarin-Forms-con-Xamarin-Essentials-4d4f0ae8133";
				function rawContent() {
					return "   \n                                        \n                                                              \n               \n                         \n       \n              \n                                     \n                                                                                        \n   \n\n\nDía 2 Bateria En Xamarin Forms con Xamarin Essentials\n=====================================================\n\nEn este articulo cubriré la experiencia con el segundo sensor a probar en este caso es la batería de nuestro dispositivo.\n\n* * *\n\n### Día 2 Bateria En Xamarin Forms con Xamarin Essentials\n\nEn este articulo cubriré la experiencia con el segundo sensor a probar en este caso es la batería de nuestro dispositivo.\n\nLa Api que captura el sensor de Batería permite verificar la información de esta y monitorear los cambios, proporciona información sobre el estado de ahorro de energía del dispositivo, que indica si el dispositivo se está ejecutando en un modo de bajo consumo.\n\nUn ejemplo de uso seria el siguiente:\n\nLas aplicaciones deben evitar el procesamiento en segundo plano si el estado de ahorro de energía del dispositivo está activado.\n\nPara esto debemos comenzar de la siguiente forma:\n\nCreamos un nuevo proyecto en visual studio\n\n![](https://cdn-images-1.medium.com/max/800/1*vVren6nk6s4y4jYa9tj1rQ.png)\n\nSeleccionamos una plantilla de Xamarin.Form multiplataforma.\n\n![](https://cdn-images-1.medium.com/max/800/1*7OQvoRukg6h3sZcIlUhQkA.png)\n\nElegimos el nombre de nuestra Solución\n\n![](https://cdn-images-1.medium.com/max/800/1*lojCSObhbHrzk_zhTO95kQ.png)\n\nSeleccionamos una plantilla en blanco con nuestras plataformas de destino, en este caso Android / IOS\n\n![](https://cdn-images-1.medium.com/max/800/1*APIH6o54MdmLHqGUQM3EHQ.png)\n\ny creamos nuestra solución.\n\nDamos Click derecho sobre nuestra solución y agregamos el package nuGet xamarin.essentials, lo agregamos en nuestra solución para los proyectos involucrados\n\n![](https://cdn-images-1.medium.com/max/800/1*juy6Pq8MsiJmJTEZ3xqPeg.png)\n\nCrearemos la siguiente estructura de carpetas en nuestra aplicación (Si ya vienes del primer post te darás cuenta que es la misma estructura de carpetas y puedes copiarlas directamente del repositorio). Esto solo es para que nuestro patrón de diseño MVVM funcione correctamente.\n\n![](https://cdn-images-1.medium.com/max/800/1*sBY979qvtTTXwex_2iJAww.png)\n\nEn nuestra vista carpeta View agregaremos una nueva page llamada BatteryPage\n\n![](https://cdn-images-1.medium.com/max/800/1*R-TaMw1p67zeeLHnvCKFYQ.png)\n\ny en nuestro ViewModel agregaremos una clase llamada BatteryViewModel.cs\n\n![](https://cdn-images-1.medium.com/max/800/1*oB9pwRkoUTUEOSqMyIgdCw.png)\n\nEn nuestra vista xaml debemos agregar el siguiente código\n\nEn la clase de nuestra vista debemos agregar el siguiente código.\n\nEn nuestro viewmodel debemos agregar lo siguiente:\n\nTambien debes agregar los permisos en el proyecto Android para que esto funcione\n\nAssemblyInfo.cs\n\n\\[assembly: UsesPermission(Android.Manifest.Permission.BatteryStats)\\]\n\nAndroidManifest.xml\n\n<uses-permission android:name=”android.permission.BATTERY\\_STATS” />\n\n![](https://cdn-images-1.medium.com/max/800/1*fxREiDRru0AHrFevX4PGtg.png)\n\nEl resultado final de nuestra app sera el siguiente:\n\n![](https://cdn-images-1.medium.com/max/800/1*C_7EnEA10KKiqSadOu8zVw.png)\n\nPuedes descargar el código fuente de esta app desde:\n\n[**devjaime/Bateria**  \n_Sensor de bateria con Xamarin Essentials Xamarin Forms - devjaime/Bateria_github.com](https://github.com/devjaime/Bateria \"https://github.com/devjaime/Bateria\")[](https://github.com/devjaime/Bateria)\n\nBy [Jaime Hernández](https://medium.com/@devjaime) on [April 19, 2019](https://medium.com/p/4d4f0ae8133).\n\n[Canonical link](https://medium.com/@devjaime/d%C3%ADa-2-bateria-en-xamarin-forms-con-xamarin-essentials-4d4f0ae8133)\n\nExported from [Medium](https://medium.com) on March 15, 2025.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"día-2-bateria-en-xamarin-forms-con-xamarin-essentials","text":"Día 2 Bateria En Xamarin Forms con Xamarin Essentials"},{"depth":3,"slug":"día-2-bateria-en-xamarin-forms-con-xamarin-essentials-1","text":"Día 2 Bateria En Xamarin Forms con Xamarin Essentials"}];
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
