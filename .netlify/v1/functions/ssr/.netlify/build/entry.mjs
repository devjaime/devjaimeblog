import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_S19e_-21.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/chat.astro.mjs');
const _page3 = () => import('./pages/blog/2018-06-21_azure-cli-usando-una-mac-f2c620ae436f.astro.mjs');
const _page4 = () => import('./pages/blog/2018-07-31_el-l-mite-de-la-nube-con-arquitectura-serveless-y-azure-function-8512fe987ad3.astro.mjs');
const _page5 = () => import('./pages/blog/2018-07-31_instalaci-n-de-flutter-en-mac-os-e8378735f071.astro.mjs');
const _page6 = () => import('./pages/blog/2018-08-04_dise-o-y-desarrollo-unidos-en-una-herramienta-para-flutter-una-idea-genial--706fb5977d7c.astro.mjs');
const _page7 = () => import('./pages/blog/2018-09-02_el-desarrollo-m-vil-nativo-est--muerto---83f3638de3de.astro.mjs');
const _page8 = () => import('./pages/blog/2018-11-07_creando-una-biblioteca-simple-usando-cli-angular-7-y-desplegando-en-azure-d8c9d66668bd.astro.mjs');
const _page9 = () => import('./pages/blog/2019-03-10_publicaci-n-de-una-app-flutter-en-google-play-store-57b07092092c.astro.mjs');
const _page10 = () => import('./pages/blog/2019-03-18_hablemos-de-test-driver-development-tdd-f191095baf0e.astro.mjs');
const _page11 = () => import('./pages/blog/2019-03-26_xamarin-essentials-un-d-a-cada-sensor-398f864e225a.astro.mjs');
const _page12 = () => import('./pages/blog/2019-04-03_lo-que-m-s-me-ha-gustado-de-visual-studio-2019-81cc74e757da.astro.mjs');
const _page13 = () => import('./pages/blog/2019-04-03_visual-studio-2019-algunos-detalles-interesantes-db20d60a36f4.astro.mjs');
const _page14 = () => import('./pages/blog/2019-04-17_d-a-uno-xamarin-essential-acelerometro-517507ef7615.astro.mjs');
const _page15 = () => import('./pages/blog/2019-04-19_d-a-2-bateria-en-xamarin-forms-con-xamarin-essentials-4d4f0ae8133.astro.mjs');
const _page16 = () => import('./pages/blog/2019-04-19_d-a-3-geocoding-xamarinforms-con-api-xamarinessentials-f8b8b8f37c5d.astro.mjs');
const _page17 = () => import('./pages/blog/2019-04-20_d-a-4-geolocation-xamarinforms-con-api-xamarinessentials-fe79dbb3c9e5.astro.mjs');
const _page18 = () => import('./pages/blog/2019-04-24_scraping-stack-overflow-usando-python-22ad9e2af5a4.astro.mjs');
const _page19 = () => import('./pages/blog/2019-05-06_microsoft-build-2019-para-desarrolladores-xamarin-ae39a9bb88eb.astro.mjs');
const _page20 = () => import('./pages/blog/2019-05-10_flutter-google-i-o-19-dise-o-material-y-pantallas-adaptativas-8d76e0888ef5.astro.mjs');
const _page21 = () => import('./pages/blog/2019-05-11_anuncios-de-productos-google-i-o-2019-8af563af0b30.astro.mjs');
const _page22 = () => import('./pages/blog/2019-05-11_una-peque-a-reflexi-n-y-palabras-de-optimismo-de-un-desarrollador-80feb272a3a4.astro.mjs');
const _page23 = () => import('./pages/blog/2019-05-17_probando-flutterweb-en-windows-primera-parte-86a672b0b280.astro.mjs');
const _page24 = () => import('./pages/blog/2019-07-17_flutter-cloud-aws-articulo-en-espa-ol-parte-1-de-3-ec31304ed06c.astro.mjs');
const _page25 = () => import('./pages/blog/2019-09-06_microfrontend-4eecf1498cd1.astro.mjs');
const _page26 = () => import('./pages/blog/2020-12-06_mi-primer-api-en-golang-9461996753dc.astro.mjs');
const _page27 = () => import('./pages/blog/2020-12-06_my-first-api-in-golang-ea9c3e707e13.astro.mjs');
const _page28 = () => import('./pages/blog/2021-03-21_-listo-para-comenzar-a-codificar-con-flutter-en-2021--73baf56d6b8c.astro.mjs');
const _page29 = () => import('./pages/blog/2021-03-21_d-a-1--instalaci-n-y-configuraci-n-de-flutter-ea8bbc44e060.astro.mjs');
const _page30 = () => import('./pages/blog/2021-03-21_dart-null-safety--una-gu-a-para-los-tipos-que-no-aceptan-valores-nulos-44767a116da0.astro.mjs');
const _page31 = () => import('./pages/blog/2021-03-21_mejores-consejos-y-trucos-de-dart-que-todo-desarrollador-de-flutter-debe-conocer-959e8daac7ba.astro.mjs');
const _page32 = () => import('./pages/blog/2021-03-22_d-a-2--lenguaje-dart-2b3ac415015f.astro.mjs');
const _page33 = () => import('./pages/blog/2021-03-23_d-a-3--arquitectura-flutter-y-configuraci-n-del-proyecto-9307aa98b4fe.astro.mjs');
const _page34 = () => import('./pages/blog/2021-03-27_kubernetes--para-inexpertos--introducci-n-9b28fe51dfe.astro.mjs');
const _page35 = () => import('./pages/blog/2021-04-02_aceptar-pagos-de-criptomonedas-para-tu-ecommerce-con-coinbase-commerce-a8f4bc4ea272.astro.mjs');
const _page36 = () => import('./pages/blog/2021-04-06_angular-arquitectura-hexagonal---hipotesis--a2cfa0b94a07.astro.mjs');
const _page37 = () => import('./pages/blog/2021-10-11_d-a-4--widgets-flutter---dise-os-b-sicos-y-responsivos-5468a0af808b.astro.mjs');
const _page38 = () => import('./pages/blog/2021-10-12_hojas-de-trucos-c75eba513a33.astro.mjs');
const _page39 = () => import('./pages/blog/2021-11-06_-qu--hace-a-un-desarrollador-10x--49efa7c00ebf.astro.mjs');
const _page40 = () => import('./pages/blog/2022-04-05_que-es-cookiecutter-django---9d51d68950bc.astro.mjs');
const _page41 = () => import('./pages/blog/2022-04-06_que-es-celery-en-django-con-python-19050ac30c41.astro.mjs');
const _page42 = () => import('./pages/blog/2022-04-07_comandos--tiles-de-git-454276c8074.astro.mjs');
const _page43 = () => import('./pages/blog/2022-04-11_algunas-de-mis-suscripciones-de-youtube-que-m-s-recomiendo---especial-des-f3522900ac6f.astro.mjs');
const _page44 = () => import('./pages/blog/2022-04-11_certificaciones-gratuitas-a2bdc684ac61.astro.mjs');
const _page45 = () => import('./pages/blog/2022-04-12_volviendo-a-estudiar-frontend-2fbb026d3c5.astro.mjs');
const _page46 = () => import('./pages/blog/2022-04-13_c-mo-usar-la-biblioteca-rich-con-python-db09f1752c94.astro.mjs');
const _page47 = () => import('./pages/blog/2022-04-14_comprender-los-webhooks-25dcf883f698.astro.mjs');
const _page48 = () => import('./pages/blog/2022-04-14_recursos-para-desarrolladores-web-2022-2eeb82838720.astro.mjs');
const _page49 = () => import('./pages/blog/2022-04-15_c-mo-configuro-mi-entorno-de-desarrollo-en-macos--2022--963b61495275.astro.mjs');
const _page50 = () => import('./pages/blog/2022-04-15_desarrollo-de-api-restful-con-python--django-y-django-rest-framework-e6f019dbe177.astro.mjs');
const _page51 = () => import('./pages/blog/2022-04-16_introducci-n-a-c-mo-funciona-kafka-e-implementaci-n-usando-python-client-e34b727a472a.astro.mjs');
const _page52 = () => import('./pages/blog/2022-04-21_microservicios-de-python-con-grpc-3ff25126b6eb.astro.mjs');
const _page53 = () => import('./pages/blog/2022-04-24_que-es-pnpm----37553a828c1b.astro.mjs');
const _page54 = () => import('./pages/blog/2022-04-25_que-es-vite-y-como-funciona-m-s-rapido-que-webpack-132f45efa4e4.astro.mjs');
const _page55 = () => import('./pages/blog/2022-05-01_como-empezar-en-el-an-lisis-de-datos-con-python-1bdaf79e8ccb.astro.mjs');
const _page56 = () => import('./pages/blog/2022-05-04_que-es-github-actions--6266b6f5846b.astro.mjs');
const _page57 = () => import('./pages/blog/2022-05-07_pyscript--python-en-el-navegador-de83a7cde1b8.astro.mjs');
const _page58 = () => import('./pages/blog/2022-05-21_flutter-3-0-5f8a6e000380.astro.mjs');
const _page59 = () => import('./pages/blog/2022-05-29_visual-studio-code-para-el-desarrollo-de-flutter-256dbd13b453.astro.mjs');
const _page60 = () => import('./pages/blog/2022-08-15_pruebas-a-b-vs-canary-release-vs-despliegue-azul-verde-9f12904f9aa0.astro.mjs');
const _page61 = () => import('./pages/blog/2022-08-21_qu--es-webauthn--c-mo-autenticar-usuarios-sin-contrase-a-9828697d93a0.astro.mjs');
const _page62 = () => import('./pages/blog/2022-10-22_mi-proceso-de-pensamiento-de-desarrollo-para-frontend-con-frontendmentor-io-6387837a90a6.astro.mjs');
const _page63 = () => import('./pages/blog/2023-03-17_como-obtener-la-certificaci-n-aws-cloud-practitioner-f029fea2f1df.astro.mjs');
const _page64 = () => import('./pages/blog/2023-03-17_joi-y-class-validator-bd842fa59cb5.astro.mjs');
const _page65 = () => import('./pages/blog/2023-03-17_que-es-lens-kubernetes-d1822b55e132.astro.mjs');
const _page66 = () => import('./pages/blog/2023-03-18_que-es-kafka-y-como-implementarlo-en-nestjs-657e60468356.astro.mjs');
const _page67 = () => import('./pages/blog/2023-03-18_que-es-rabbitmq-y-como-implementarlo-en-nestjs-8a8f1a97df5f.astro.mjs');
const _page68 = () => import('./pages/blog/2023-04-11_actualizar-nestjs-8-x-x-a-9-x-x-eb5ec4c16135.astro.mjs');
const _page69 = () => import('./pages/blog/2023-04-11_como-implementar-chatgpt-a-visual-studio-code--diferencias-con-github-copilot-y-github-copilot-x-62e20fd8cf88.astro.mjs');
const _page70 = () => import('./pages/blog/2023-04-11_is-it-possible-to-implement-chatgpt-in-visual-studio-code--147441a3006b.astro.mjs');
const _page71 = () => import('./pages/blog/2023-04-11_ruta-de-aprendizaje-para-ingles-de-a1-a-b2-8748aa01ed97.astro.mjs');
const _page72 = () => import('./pages/blog/2023-04-11_ruta-de-aprendizaje-para-las-certificaciones-de-aws-e28d8d5a8e65.astro.mjs');
const _page73 = () => import('./pages/blog/2023-04-11_ruta-de-aprendizaje-para-las-certificaciones-de-azure-2bba78a77d85.astro.mjs');
const _page74 = () => import('./pages/blog/2023-04-11_ruta-de-aprendizaje-para-las-certificaciones-gcp-5cf74c463589.astro.mjs');
const _page75 = () => import('./pages/blog/2023-04-11_rutina-de-ejercicios-para-una-persona-con-sobrepeso-y-sedentaria--a8278c82c83f.astro.mjs');
const _page76 = () => import('./pages/blog/2023-05-25_explorando-qwik--un-nuevo-marco-para-el-desarrollo-web-de-alta-velocidad-30a9b0753932.astro.mjs');
const _page77 = () => import('./pages/blog/2023-09-18_estrategias-de-redis-en-microservicios--potenciando-el-rendimiento-y-la-escalabilidad-555e5e3be4ba.astro.mjs');
const _page78 = () => import('./pages/blog/2023-09-18_explorando-jsonb-en-postgresql--almacenamiento-y-consultas-flexibles-6c1a98d2162f.astro.mjs');
const _page79 = () => import('./pages/blog/2023-10-07_utilizando-query-builder-y-query-runner-en-nestjs-para-una-interacci-n-eficiente-con-bases-de-datos-953fa226955b.astro.mjs');
const _page80 = () => import('./pages/blog/2023-10-14_entendiendo-el-patr-n-adaptador-en-typescript-con-pruebas-unitarias-9604f3209baa.astro.mjs');
const _page81 = () => import('./pages/blog/2023-10-21_implementando-el-patr-n-saga-en-microservicios--garantizando-la-integridad-de-las-transacciones-3f3063ea2abc.astro.mjs');
const _page82 = () => import('./pages/blog/2023-11-04_advantages-of-investing-in-properties-through-a-corporation--country-chile--11e44cfb955d.astro.mjs');
const _page83 = () => import('./pages/blog/2023-11-05_custom-e-commerce-development-and-scalability--building-your-unique-online-store-8c242b2b6b9d.astro.mjs');
const _page84 = () => import('./pages/blog/2023-11-05_how-to-profit-from-your-properties-through-platforms-like-airbnb-with-the-help-of-a-reliable--1ca6cd2dc305.astro.mjs');
const _page85 = () => import('./pages/blog/2023-11-05_what-is-kafka-and-how-to-implement-it-in-nestjs-8036b06701d0.astro.mjs');
const _page86 = () => import('./pages/blog/2023-11-11_cutting-edge-web-development-with-next-js--turning-ideas-into-reality-0468321b7a63.astro.mjs');
const _page87 = () => import('./pages/blog/2023-11-11_explorando-m-s-profundamente-en-flutter-29596ee9bcb5.astro.mjs');
const _page88 = () => import('./pages/blog/2023-11-11_exploring-deeper-into-flutter-93f86d8c7cab.astro.mjs');
const _page89 = () => import('./pages/blog/2023-11-11_flutter--transformando-ideas-en-aplicaciones-m-viles-exitosas-6bf89b040e8e.astro.mjs');
const _page90 = () => import('./pages/blog/2023-11-11_flutter--transforming-ideas-into-successful-mobile-applications-a89626954a0d.astro.mjs');
const _page91 = () => import('./pages/blog/2023-11-12_crafting-the-ultimate-guide-on-writing-a-microservices-architecture-design-doc--crucial-steps-for--ba9271330787.astro.mjs');
const _page92 = () => import('./pages/blog/2023-11-12_creando-la-gu-a-definitiva-para-escribir-un-design-doc-de-arquitectura-de-microservicios--pasos--8c8203cbc762.astro.mjs');
const _page93 = () => import('./pages/blog/2023-11-12_simplificando-la-vida-diaria-con-automatizaci-n-y-python--un-viaje-por-la-inteligencia-artificial-99e2a684cb63.astro.mjs');
const _page94 = () => import('./pages/blog/2023-11-12_simplifying-daily-life-with-automation-and-python--a-journey-into-artificial-intelligence-b4d1c283a33e.astro.mjs');
const _page95 = () => import('./pages/blog/2023-12-08_c-mo-construir-un-cajero-autom-tico-de-bitcoin--compra-segura-con-billetes-chilenos-y-monedas--171d88ee72d7.astro.mjs');
const _page96 = () => import('./pages/blog/2023-12-08_how-to-build-a-bitcoin-atm--secure-purchases-with-chilean-banknotes-and-3d-printed-coins-ceec84bff6dc.astro.mjs');
const _page97 = () => import('./pages/blog/2023-12-09_comparaci-n-de-caracter-sticas-de-monitoreo--datadog--new-relic-y-dynatrace-664447dd8260.astro.mjs');
const _page98 = () => import('./pages/blog/2023-12-09_comparison-of-monitoring-features--datadog--new-relic--and-dynatrace-71483753d719.astro.mjs');
const _page99 = () => import('./pages/blog/2023-12-16_-qu--son-las-incrustaciones-de-vectores-en-ia-y-llm--5e4a4bce454e.astro.mjs');
const _page100 = () => import('./pages/blog/2023-12-16_construyendo-nuevas-ideas-de-negocio-para-un-desarrollo-de-software-exitoso-en-un-contexto--cf7fbc3b8363.astro.mjs');
const _page101 = () => import('./pages/blog/2023-12-16_what-are-vector-embeddings-in-ai-and-llm--d40732c27f82.astro.mjs');
const _page102 = () => import('./pages/blog/2024-01-06_rust-en-el-desarrollo-de-backend-moderno--ventajas--desventajas-e-ideas-para-el-futuro-97fd32bc5873.astro.mjs');
const _page103 = () => import('./pages/blog/2024-01-06_rust-in-modern-backend-development--advantages--disadvantages--and-ideas-for-the-future-164928673be3.astro.mjs');
const _page104 = () => import('./pages/blog/2024-06-09_c-mo-mantenerse-trabajando-remotamente-con-un-buen-sueldo-en-tecnolog-a--enfoque-en-javascript--5f0c0309c649.astro.mjs');
const _page105 = () => import('./pages/blog/2024-06-09_how-to-maintain-a-high-paying-remote-job-in-technology--focus-on-javascript--microservices--aec24df28a9e.astro.mjs');
const _page106 = () => import('./pages/blog/2024-06-23_integraci-n-de-golang-con-la-api-de-chatgpt-4cefdc0d6a62.astro.mjs');
const _page107 = () => import('./pages/blog/2024-06-23_migrando-microservicios-de-nestjs-con-typescript-a-go--una-semana-de-descubrimientos-c754ff0cea6a.astro.mjs');
const _page108 = () => import('./pages/blog/2024-07-02_explorando-los-modelos-de-lenguaje--ollama--mistral--llama--gemini-y-claude-90b378fcc343.astro.mjs');
const _page109 = () => import('./pages/blog/2024-07-11_tutorial--consolidaci-n-y-subida-de-datos-a-firestore-usando-python-e9fcb4eebac7.astro.mjs');
const _page110 = () => import('./pages/blog/2024-07-12_integraci-n-de-nats-en-una-arquitectura-de-microservicios-con-nestjs--docker-y-postgresql-51af9319c1d0.astro.mjs');
const _page111 = () => import('./pages/blog/2024-07-26_gu-a-definitiva-para-la-organizaci-n-de-proyectos-en-golang-65d666e06ab4.astro.mjs');
const _page112 = () => import('./pages/blog/2024-08-03_construyendo-subconsultas-eficientes-en-postgresql-con-ctes--ejemplos-en-retail-y-banca-a60c8ae0780a.astro.mjs');
const _page113 = () => import('./pages/blog/2024-08-05_langchain-para-dummies--gu-a-completa-desde-la-instalaci-n-hasta-su-utilizaci-n-8dc3df92f048.astro.mjs');
const _page114 = () => import('./pages/blog/2024-08-06_perplexity-para-dummies--casos-de-uso-pr-cticos-908a0fd8fc4c.astro.mjs');
const _page115 = () => import('./pages/blog/2024-08-07_vercel-ai-para-developers-dummies--una-introducci-n-sencilla-con-next-js-8e38ca2ae813.astro.mjs');
const _page116 = () => import('./pages/blog/2024-08-08_rag-for-dummies--una-gu-a-sencilla-para-entender-la-generaci-n-aumentada-por-recuperaci-n-294b71a28e15.astro.mjs');
const _page117 = () => import('./pages/blog/2024-08-09_rust-for-dummies--una-introducci-n-sencilla-a-un-lenguaje-poderoso-d064cb133e8a.astro.mjs');
const _page118 = () => import('./pages/blog/2024-08-10_manejo-de-fechas-y-horas-en-golang-a9770422e4da.astro.mjs');
const _page119 = () => import('./pages/blog/2024-08-16_enhancing-sql-query-generation-with-large-language-models--llms---my-learning-journey-81f116646314.astro.mjs');
const _page120 = () => import('./pages/blog/2024-08-22_-por-qu--openai-necesita-un-head-of-latam-en-am-rica-latina--baa4d4b4ddda.astro.mjs');
const _page121 = () => import('./pages/blog/2024-08-22_why-does-openai-need-a-head-of-latam-in-latin-america--fcd5406da369.astro.mjs');
const _page122 = () => import('./pages/blog/2024-08-28_haystack--construyendo-aplicaciones-de-ia-con-componentes-modulares-02d1ae93a849.astro.mjs');
const _page123 = () => import('./pages/blog/2024-09-11_astra-db--la-base-de-datos-en-la-nube-basada-en-apache-cassandra-8d570ecc4a6c.astro.mjs');
const _page124 = () => import('./pages/blog/2024-09-12_creating-a-source-of-truth-like-wikipedia-using-rust-and-blockchain-to-combat-fake-news-aa489fdd6188.astro.mjs');
const _page125 = () => import('./pages/blog/2024-09-21_pinecone--un-almac-n-de-vectores-optimizado-para-la-b-squeda-de-similitudes-ea747ae4762b.astro.mjs');
const _page126 = () => import('./pages/blog/2024-09-23_---langchain-vs--llamaindex---qu--herramienta-de-ia-deber-as-usar--fe9c7014e3fd.astro.mjs');
const _page127 = () => import('./pages/blog/2024-09-23_cursor--el-futuro-de-la-programaci-n-con-ia-y-c-mo-migrar-desde-vs-code-0d3cfb18e712.astro.mjs');
const _page128 = () => import('./pages/blog/2024-09-23_desbloqueando-el-potencial-del-razonamiento-en-modelos-de-lenguaje--gpt-4--llama-3-1--71d7a39eee96.astro.mjs');
const _page129 = () => import('./pages/blog/2024-09-23_langchain---qu--es-mejor--function-calling-o-react--un-an-lisis-comparativo-8bba2d7b4885.astro.mjs');
const _page130 = () => import('./pages/blog/2024-09-23_mejorando-la-b-squeda-sem-ntica-con-faiss--pinecone-y-langchain--un-caso-real-con-twitter-d656afb87e7b.astro.mjs');
const _page131 = () => import('./pages/blog/2024-09-25_llama-3-2--potenciando-la-ia-en-dispositivos-m-viles-y-edge-computing-af664d6b76d7.astro.mjs');
const _page132 = () => import('./pages/blog/2024-09-28_el-futuro-de-la-ia--competir-con-las-big-tech-y-las-nuevas-tendencias-58582a61f1a5.astro.mjs');
const _page133 = () => import('./pages/blog/2024-09-28_orion--la-revoluci-n-de-las-gafas-de-realidad-aumentada-por-meta-dd4204828e9c.astro.mjs');
const _page134 = () => import('./pages/blog/2024-09-30_notebook-lm--el-futuro-de-la-creaci-n-de-contenidos-automatizados-fe0168d5c461.astro.mjs');
const _page135 = () => import('./pages/blog/2024-10-01_groq---una-revoluci-n-en-el-hardware-de-ia-y-apis-para-inferencia-en-tiempo-real-3df6df5e8992.astro.mjs');
const _page136 = () => import('./pages/blog/2024-10-01_implementaci-n-de-un-sistema-de-recomendaciones-personalizado-en-retail-usando-ia-con-rag--google--4b0ba349a82c.astro.mjs');
const _page137 = () => import('./pages/blog/2024-10-01_reflection-agents--mejorando-la-inteligencia-artificial-mediante-la-autorreflexi-n-ef6dff638423.astro.mjs');
const _page138 = () => import('./pages/blog/2024-10-09_---14-tips-para-programar-sistemas-multiagentes-con-bases-de-datos-vectoriales-usando-langchain-y--0e7e219f248d.astro.mjs');
const _page139 = () => import('./pages/blog/2024-10-12_balancing-income-and-well-being--how-software-engineers-can-earn-well-while-taking-care-of-their--9549b73b86b1.astro.mjs');
const _page140 = () => import('./pages/blog/2024-11-16_claude-3-5-y-el-uso-de-computadora--un-salto-cu-ntico-en-la-automatizaci-n-de-tareas-ac4f6ec31d2f.astro.mjs');
const _page141 = () => import('./pages/blog/2024-12-08_comenzando-con-hugging-face--gu-a-completa-para-modelos-open-source-e45ba51be887.astro.mjs');
const _page142 = () => import('./pages/blog/2024-12-12_aws-certified-ai-practitioner--aif-c01---c-mo-aplicar-sus-conocimientos-en-casos-pr-cticos-df270cffd3cb.astro.mjs');
const _page143 = () => import('./pages/blog/2024-12-17_introducci-n-a-la-seguridad-en-el-mundo-de-la-ia--protegiendo-el-futuro-inteligente-fd385b35e71a.astro.mjs');
const _page144 = () => import('./pages/blog/2024-12-19_ai-agent-develop--agentes-inteligentes-con-langchain-y-langgraph-3226c5971fa2.astro.mjs');
const _page145 = () => import('./pages/blog/2024-12-20_c-mo-funciona-el-modelo-o1--principios--ejemplos-reales-y-c-digo-funcional-670e2d94c708.astro.mjs');
const _page146 = () => import('./pages/blog/2024-12-21_continuando-con-el-modelo-o1--casos-de-uso-avanzados-y-ejecuci-n-planificada-1930ca9b641e.astro.mjs');
const _page147 = () => import('./pages/blog/2024-12-28_continuando-con-el-modelo-o1--casos-de-uso-avanzados-y-ejecuci-n-planificada-2377137147fb.astro.mjs');
const _page148 = () => import('./pages/blog/2024-12-29_metaprompting-con-o1--optimizando-rutinas-basadas-en-llms-ba41a6e3b55e.astro.mjs');
const _page149 = () => import('./pages/blog/2025-01-01_c-mo-prepararte-y-certificarte-como-neo4j-certified-professional-1e290129c26f.astro.mjs');
const _page150 = () => import('./pages/blog/2025-01-08_inteligencia-artificial-generativa--casos-de-uso-t-cnicos-y-aplicaciones-reales-59f94d4aaa42.astro.mjs');
const _page151 = () => import('./pages/blog/2025-01-10_passkey-authentication--a-modern-security-solution-for-apps-6141fc898a73.astro.mjs');
const _page152 = () => import('./pages/blog/2025-01-17_comprendiendo-la-diferencia-entre-pagerank-y-articlerank--un-an-lisis-en-la-ciencia-de-datos-con--e32c9f519d0b.astro.mjs');
const _page153 = () => import('./pages/blog/2025-02-19_---rug-pull-en-criptomonedas--c-mo-funciona-esta-estafa-y-c-mo-evitarla-3bfe33a62efb.astro.mjs');
const _page154 = () => import('./pages/blog/2025-02-19_---rug-pulls-in-cryptocurrency--how-this-scam-works-and-how-to-avoid-it-ea427349ec9f.astro.mjs');
const _page155 = () => import('./pages/blog/2025-03-09_vistas-materializadas--cron-jobs-y-microservicios-en-go-2d3a35c4391f.astro.mjs');
const _page156 = () => import('./pages/blog/2025-03-12_implementaci-n-de-un-flujo-de-trabajo-interactivo-con-llamaindex-en-jupyter-notebook-2b9edf6b8586.astro.mjs');
const _page157 = () => import('./pages/blog/2025-03-23_mcp-model-context-protocol.astro.mjs');
const _page158 = () => import('./pages/blog/2025-03-28_bff-golang-openapi.astro.mjs');
const _page159 = () => import('./pages/blog/2025-03-29_bff-golang-parte2.astro.mjs');
const _page160 = () => import('./pages/blog/2025-03-30_bff-golang-parte3.astro.mjs');
const _page161 = () => import('./pages/blog/2025-04-01_bff-golang-parte4.astro.mjs');
const _page162 = () => import('./pages/blog/2025-04-02_bff-golang-parte5.astro.mjs');
const _page163 = () => import('./pages/blog/2025-04-06_carrera-ia-andrewng.astro.mjs');
const _page164 = () => import('./pages/blog/2025-04-07_langflow-launch-week.astro.mjs');
const _page165 = () => import('./pages/blog/2025-04-08_autorag-casos-practicos.astro.mjs');
const _page166 = () => import('./pages/blog/2025-04-09_guia-google-adk.astro.mjs');
const _page167 = () => import('./pages/blog/2025-04-12_vectorizacion-autorag.astro.mjs');
const _page168 = () => import('./pages/blog/2025-04-13_entrena-tu-llm.astro.mjs');
const _page169 = () => import('./pages/blog/2025-04-16_ai-code-assistants.astro.mjs');
const _page170 = () => import('./pages/blog/2025-04-19_json-ai-inspector.astro.mjs');
const _page171 = () => import('./pages/blog/2025-04-20_mcp-inspector.astro.mjs');
const _page172 = () => import('./pages/blog/2025-04-23_cascade-agents.astro.mjs');
const _page173 = () => import('./pages/blog/2025-05-01_kaggle-ia-generativa.astro.mjs');
const _page174 = () => import('./pages/blog/2025-05-01_llms-txt.astro.mjs');
const _page175 = () => import('./pages/blog/2025-05-02_uv-python.astro.mjs');
const _page176 = () => import('./pages/blog/2025-05-09_go-oracle-docker-debug-story.astro.mjs');
const _page177 = () => import('./pages/blog/2025-05-09_go-oracle-docker-debug-story-en.astro.mjs');
const _page178 = () => import('./pages/blog/2025-05-12_fastmcp-servidores-python-inteligentes.astro.mjs');
const _page179 = () => import('./pages/blog/2025-05-18_ai-browser-agents.astro.mjs');
const _page180 = () => import('./pages/blog/2025-05-25_livekit-agentes.astro.mjs');
const _page181 = () => import('./pages/blog/2025-07-06_go-journey-from-skeptic-to-believer.astro.mjs');
const _page182 = () => import('./pages/blog/2025-08-03_como-construir-agentes-efectivos-segun-anthropic-con-ejemplos-concretos.astro.mjs');
const _page183 = () => import('./pages/blog/2025-08-05_gpt-oss-de-openai-la-nueva-ia-abierta-que-impulsa-la-productividad-de-las-startups.astro.mjs');
const _page184 = () => import('./pages/blog/2025-08-22_serverless-llm-options.astro.mjs');
const _page185 = () => import('./pages/blog/go-journey-from-skeptic-to-believer.astro.mjs');
const _page186 = () => import('./pages/blog.astro.mjs');
const _page187 = () => import('./pages/projects/ai-development-project.astro.mjs');
const _page188 = () => import('./pages/projects/azure-serverless-architecture.astro.mjs');
const _page189 = () => import('./pages/projects/carta-digital-restaurant.astro.mjs');
const _page190 = () => import('./pages/projects/copilotkit.astro.mjs');
const _page191 = () => import('./pages/projects/flutter-mobile-app.astro.mjs');
const _page192 = () => import('./pages/projects/fullstack-web-app.astro.mjs');
const _page193 = () => import('./pages/projects/impresion3d-marvel-demo.astro.mjs');
const _page194 = () => import('./pages/projects/json-ai-inspector.astro.mjs');
const _page195 = () => import('./pages/projects/nextjs-ecommerce-platform.astro.mjs');
const _page196 = () => import('./pages/projects.astro.mjs');
const _page197 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/chat.ts", _page2],
    ["src/pages/blog/2018-06-21_Azure-CLI-usando-una-Mac-f2c620ae436f.md", _page3],
    ["src/pages/blog/2018-07-31_El-l-mite-de-la-nube-con-arquitectura-Serveless-y-Azure-Function-8512fe987ad3.md", _page4],
    ["src/pages/blog/2018-07-31_Instalaci-n-de-Flutter-en-Mac-OS-e8378735f071.md", _page5],
    ["src/pages/blog/2018-08-04_Dise-o-y-desarrollo-unidos-en-una-herramienta-para-Flutter-una-idea-genial--706fb5977d7c.md", _page6],
    ["src/pages/blog/2018-09-02_El-desarrollo-m-vil-nativo-est--muerto---83f3638de3de.md", _page7],
    ["src/pages/blog/2018-11-07_Creando-una-biblioteca-simple-usando-CLI-angular-7-y-desplegando-en-azure-d8c9d66668bd.md", _page8],
    ["src/pages/blog/2019-03-10_Publicaci-n-de-una-app-Flutter-en-google-play-store-57b07092092c.md", _page9],
    ["src/pages/blog/2019-03-18_Hablemos-de-Test-Driver-Development-TDD-f191095baf0e.md", _page10],
    ["src/pages/blog/2019-03-26_Xamarin-Essentials-un-d-a-cada-sensor-398f864e225a.md", _page11],
    ["src/pages/blog/2019-04-03_Lo-que-m-s-me-ha-gustado-de-visual-studio-2019-81cc74e757da.md", _page12],
    ["src/pages/blog/2019-04-03_Visual-Studio-2019-algunos-detalles-interesantes-db20d60a36f4.md", _page13],
    ["src/pages/blog/2019-04-17_D-a-uno-Xamarin-Essential-Acelerometro-517507ef7615.md", _page14],
    ["src/pages/blog/2019-04-19_D-a-2-Bateria-En-Xamarin-Forms-con-Xamarin-Essentials-4d4f0ae8133.md", _page15],
    ["src/pages/blog/2019-04-19_D-a-3-Geocoding-XamarinForms-con-Api-XamarinEssentials-f8b8b8f37c5d.md", _page16],
    ["src/pages/blog/2019-04-20_D-a-4-Geolocation-XamarinForms-con-Api-XamarinEssentials-fe79dbb3c9e5.md", _page17],
    ["src/pages/blog/2019-04-24_Scraping-Stack-Overflow-Usando-Python-22ad9e2af5a4.md", _page18],
    ["src/pages/blog/2019-05-06_Microsoft-Build-2019-para-desarrolladores-Xamarin-ae39a9bb88eb.md", _page19],
    ["src/pages/blog/2019-05-10_Flutter-Google-I-O-19-dise-o-material-y-pantallas-adaptativas-8d76e0888ef5.md", _page20],
    ["src/pages/blog/2019-05-11_Anuncios-de-productos-Google-I-O-2019-8af563af0b30.md", _page21],
    ["src/pages/blog/2019-05-11_Una-peque-a-reflexi-n-y-palabras-de-optimismo-de-un-desarrollador-80feb272a3a4.md", _page22],
    ["src/pages/blog/2019-05-17_Probando-FlutterWeb-en-windows-primera-parte-86a672b0b280.md", _page23],
    ["src/pages/blog/2019-07-17_Flutter-Cloud-AWS-articulo-en-espa-ol-parte-1-de-3-ec31304ed06c.md", _page24],
    ["src/pages/blog/2019-09-06_MicroFrontEnd-4eecf1498cd1.md", _page25],
    ["src/pages/blog/2020-12-06_Mi-primer-API-en-Golang-9461996753dc.md", _page26],
    ["src/pages/blog/2020-12-06_My-first-API-in-Golang-ea9c3e707e13.md", _page27],
    ["src/pages/blog/2021-03-21_-Listo-para-comenzar-a-codificar-con-Flutter-en-2021--73baf56d6b8c.md", _page28],
    ["src/pages/blog/2021-03-21_D-a-1--instalaci-n-y-configuraci-n-de-Flutter-ea8bbc44e060.md", _page29],
    ["src/pages/blog/2021-03-21_Dart-Null-Safety--una-gu-a-para-los-tipos-que-no-aceptan-valores-nulos-44767a116da0.md", _page30],
    ["src/pages/blog/2021-03-21_Mejores-consejos-y-trucos-de-Dart-que-todo-desarrollador-de-Flutter-debe-conocer-959e8daac7ba.md", _page31],
    ["src/pages/blog/2021-03-22_D-a-2--Lenguaje-Dart-2b3ac415015f.md", _page32],
    ["src/pages/blog/2021-03-23_D-a-3--Arquitectura-Flutter-y-configuraci-n-del-proyecto-9307aa98b4fe.md", _page33],
    ["src/pages/blog/2021-03-27_kubernetes--para-inexpertos--introducci-n-9b28fe51dfe.md", _page34],
    ["src/pages/blog/2021-04-02_Aceptar-pagos-de-criptomonedas-para-tu-ecommerce-con-CoinBase-Commerce-a8f4bc4ea272.md", _page35],
    ["src/pages/blog/2021-04-06_Angular-Arquitectura-Hexagonal---hipotesis--a2cfa0b94a07.md", _page36],
    ["src/pages/blog/2021-10-11_D-a-4--widgets-Flutter---dise-os-b-sicos-y-responsivos-5468a0af808b.md", _page37],
    ["src/pages/blog/2021-10-12_Hojas-de-trucos-c75eba513a33.md", _page38],
    ["src/pages/blog/2021-11-06_-Qu--hace-a-un-desarrollador-10x--49efa7c00ebf.md", _page39],
    ["src/pages/blog/2022-04-05_Que-es-Cookiecutter-Django---9d51d68950bc.md", _page40],
    ["src/pages/blog/2022-04-06_Que-es-Celery-en-django-con-Python-19050ac30c41.md", _page41],
    ["src/pages/blog/2022-04-07_Comandos--tiles-de-git-454276c8074.md", _page42],
    ["src/pages/blog/2022-04-11_Algunas-de-mis-suscripciones-de-youtube-que-m-s-recomiendo---especial-des-f3522900ac6f.md", _page43],
    ["src/pages/blog/2022-04-11_Certificaciones-gratuitas-a2bdc684ac61.md", _page44],
    ["src/pages/blog/2022-04-12_Volviendo-a-estudiar-Frontend-2fbb026d3c5.md", _page45],
    ["src/pages/blog/2022-04-13_C-mo-usar-la-biblioteca-Rich-con-Python-db09f1752c94.md", _page46],
    ["src/pages/blog/2022-04-14_Comprender-los-webhooks-25dcf883f698.md", _page47],
    ["src/pages/blog/2022-04-14_Recursos-para-desarrolladores-web-2022-2eeb82838720.md", _page48],
    ["src/pages/blog/2022-04-15_C-mo-configuro-mi-entorno-de-desarrollo-en-macOS--2022--963b61495275.md", _page49],
    ["src/pages/blog/2022-04-15_Desarrollo-de-API-Restful-con-Python--Django-y-Django-Rest-Framework-e6f019dbe177.md", _page50],
    ["src/pages/blog/2022-04-16_Introducci-n-a-c-mo-funciona-Kafka-e-implementaci-n-usando-Python-client-e34b727a472a.md", _page51],
    ["src/pages/blog/2022-04-21_Microservicios-de-Python-con-gRPC-3ff25126b6eb.md", _page52],
    ["src/pages/blog/2022-04-24_Que-es-pnpm----37553a828c1b.md", _page53],
    ["src/pages/blog/2022-04-25_Que-es-Vite-y-como-funciona-m-s-rapido-que-webpack-132f45efa4e4.md", _page54],
    ["src/pages/blog/2022-05-01_Como-empezar-en-el-An-lisis-de-datos-con-Python-1bdaf79e8ccb.md", _page55],
    ["src/pages/blog/2022-05-04_Que-es-Github-Actions--6266b6f5846b.md", _page56],
    ["src/pages/blog/2022-05-07_PyScript--Python-en-el-navegador-de83a7cde1b8.md", _page57],
    ["src/pages/blog/2022-05-21_Flutter-3-0-5f8a6e000380.md", _page58],
    ["src/pages/blog/2022-05-29_Visual-Studio-Code-para-el-desarrollo-de-flutter-256dbd13b453.md", _page59],
    ["src/pages/blog/2022-08-15_Pruebas-A-B-vs-Canary-Release-vs-Despliegue-Azul-Verde-9f12904f9aa0.md", _page60],
    ["src/pages/blog/2022-08-21_Qu--es-WebAuthn--C-mo-autenticar-usuarios-sin-contrase-a-9828697d93a0.md", _page61],
    ["src/pages/blog/2022-10-22_Mi-proceso-de-pensamiento-de-desarrollo-para-Frontend-con-Frontendmentor-io-6387837a90a6.md", _page62],
    ["src/pages/blog/2023-03-17_Como-obtener-la-certificaci-n-AWS-Cloud-Practitioner-f029fea2f1df.md", _page63],
    ["src/pages/blog/2023-03-17_Joi-y-Class-validator-bd842fa59cb5.md", _page64],
    ["src/pages/blog/2023-03-17_Que-es-Lens-Kubernetes-d1822b55e132.md", _page65],
    ["src/pages/blog/2023-03-18_Que-es-kafka-y-como-implementarlo-en-nestjs-657e60468356.md", _page66],
    ["src/pages/blog/2023-03-18_Que-es-rabbitMQ-y-como-implementarlo-en-nestjs-8a8f1a97df5f.md", _page67],
    ["src/pages/blog/2023-04-11_Actualizar-Nestjs-8-x-x-a-9-x-x-eb5ec4c16135.md", _page68],
    ["src/pages/blog/2023-04-11_Como-implementar-chatGPT-a-visual-studio-code--diferencias-con-github-copilot-y-github-copilot-X-62e20fd8cf88.md", _page69],
    ["src/pages/blog/2023-04-11_Is-it-possible-to-implement-ChatGPT-in-Visual-Studio-Code--147441a3006b.md", _page70],
    ["src/pages/blog/2023-04-11_Ruta-de-aprendizaje-para-ingles-de-A1-a-B2-8748aa01ed97.md", _page71],
    ["src/pages/blog/2023-04-11_Ruta-de-aprendizaje-para-las-certificaciones-de-AWS-e28d8d5a8e65.md", _page72],
    ["src/pages/blog/2023-04-11_Ruta-de-aprendizaje-para-las-certificaciones-de-Azure-2bba78a77d85.md", _page73],
    ["src/pages/blog/2023-04-11_Ruta-de-aprendizaje-para-las-certificaciones-GCP-5cf74c463589.md", _page74],
    ["src/pages/blog/2023-04-11_Rutina-de-ejercicios-para-una-persona-con-sobrepeso-y-sedentaria--a8278c82c83f.md", _page75],
    ["src/pages/blog/2023-05-25_Explorando-Qwik--Un-Nuevo-Marco-para-el-Desarrollo-Web-de-Alta-Velocidad-30a9b0753932.md", _page76],
    ["src/pages/blog/2023-09-18_Estrategias-de-Redis-en-Microservicios--Potenciando-el-Rendimiento-y-la-Escalabilidad-555e5e3be4ba.md", _page77],
    ["src/pages/blog/2023-09-18_Explorando-JSONB-en-PostgreSQL--Almacenamiento-y-Consultas-Flexibles-6c1a98d2162f.md", _page78],
    ["src/pages/blog/2023-10-07_Utilizando-Query-Builder-y-Query-Runner-en-NestJS-para-una-Interacci-n-Eficiente-con-Bases-de-Datos-953fa226955b.md", _page79],
    ["src/pages/blog/2023-10-14_Entendiendo-el-Patr-n-Adaptador-en-TypeScript-con-Pruebas-Unitarias-9604f3209baa.md", _page80],
    ["src/pages/blog/2023-10-21_Implementando-el-Patr-n-Saga-en-Microservicios--Garantizando-la-Integridad-de-las-Transacciones-3f3063ea2abc.md", _page81],
    ["src/pages/blog/2023-11-04_Advantages-of-Investing-in-Properties-Through-a-Corporation--Country-Chile--11e44cfb955d.md", _page82],
    ["src/pages/blog/2023-11-05_Custom-E-commerce-Development-and-Scalability--Building-Your-Unique-Online-Store-8c242b2b6b9d.md", _page83],
    ["src/pages/blog/2023-11-05_How-to-Profit-from-Your-Properties-through-Platforms-like-Airbnb-with-the-Help-of-a-Reliable--1ca6cd2dc305.md", _page84],
    ["src/pages/blog/2023-11-05_What-is-Kafka-and-How-to-Implement-it-in-NestJS-8036b06701d0.md", _page85],
    ["src/pages/blog/2023-11-11_Cutting-Edge-Web-Development-with-Next-js--Turning-Ideas-into-Reality-0468321b7a63.md", _page86],
    ["src/pages/blog/2023-11-11_Explorando-m-s-Profundamente-en-Flutter-29596ee9bcb5.md", _page87],
    ["src/pages/blog/2023-11-11_Exploring-Deeper-into-Flutter-93f86d8c7cab.md", _page88],
    ["src/pages/blog/2023-11-11_Flutter--Transformando-Ideas-en-Aplicaciones-M-viles-Exitosas-6bf89b040e8e.md", _page89],
    ["src/pages/blog/2023-11-11_Flutter--Transforming-Ideas-into-Successful-Mobile-Applications-a89626954a0d.md", _page90],
    ["src/pages/blog/2023-11-12_Crafting-the-Ultimate-Guide-on-Writing-a-Microservices-Architecture-Design-Doc--Crucial-Steps-for--ba9271330787.md", _page91],
    ["src/pages/blog/2023-11-12_Creando-la-Gu-a-Definitiva-para-Escribir-un-Design-Doc-de-Arquitectura-de-Microservicios--Pasos--8c8203cbc762.md", _page92],
    ["src/pages/blog/2023-11-12_Simplificando-la-Vida-Diaria-con-Automatizaci-n-y-Python--Un-Viaje-por-la-Inteligencia-Artificial-99e2a684cb63.md", _page93],
    ["src/pages/blog/2023-11-12_Simplifying-Daily-Life-with-Automation-and-Python--A-Journey-into-Artificial-Intelligence-b4d1c283a33e.md", _page94],
    ["src/pages/blog/2023-12-08_C-mo-Construir-un-Cajero-Autom-tico-de-Bitcoin--Compra-Segura-con-Billetes-Chilenos-y-Monedas--171d88ee72d7.md", _page95],
    ["src/pages/blog/2023-12-08_How-to-Build-a-Bitcoin-ATM--Secure-Purchases-with-Chilean-Banknotes-and-3D-Printed-Coins-ceec84bff6dc.md", _page96],
    ["src/pages/blog/2023-12-09_Comparaci-n-de-Caracter-sticas-de-Monitoreo--DataDog--New-Relic-y-Dynatrace-664447dd8260.md", _page97],
    ["src/pages/blog/2023-12-09_Comparison-of-Monitoring-Features--DataDog--New-Relic--and-Dynatrace-71483753d719.md", _page98],
    ["src/pages/blog/2023-12-16_-Qu--son-las-Incrustaciones-de-Vectores-en-IA-y-LLM--5e4a4bce454e.md", _page99],
    ["src/pages/blog/2023-12-16_Construyendo-Nuevas-Ideas-de-Negocio-para-un-desarrollo-de-software-exitoso-en-un-Contexto--cf7fbc3b8363.md", _page100],
    ["src/pages/blog/2023-12-16_What-are-Vector-Embeddings-in-AI-and-LLM--d40732c27f82.md", _page101],
    ["src/pages/blog/2024-01-06_Rust-en-el-Desarrollo-de-Backend-Moderno--Ventajas--Desventajas-e-Ideas-para-el-Futuro-97fd32bc5873.md", _page102],
    ["src/pages/blog/2024-01-06_Rust-in-Modern-Backend-Development--Advantages--Disadvantages--and-Ideas-for-the-Future-164928673be3.md", _page103],
    ["src/pages/blog/2024-06-09_C-mo-Mantenerse-Trabajando-Remotamente-con-un-Buen-Sueldo-en-Tecnolog-a--Enfoque-en-JavaScript--5f0c0309c649.md", _page104],
    ["src/pages/blog/2024-06-09_How-to-Maintain-a-High-Paying-Remote-Job-in-Technology--Focus-on-JavaScript--Microservices--aec24df28a9e.md", _page105],
    ["src/pages/blog/2024-06-23_Integraci-n-de-Golang-con-la-API-de-ChatGPT-4cefdc0d6a62.md", _page106],
    ["src/pages/blog/2024-06-23_Migrando-Microservicios-de-NestJS-con-TypeScript-a-Go--Una-Semana-de-Descubrimientos-c754ff0cea6a.md", _page107],
    ["src/pages/blog/2024-07-02_Explorando-los-Modelos-de-Lenguaje--Ollama--Mistral--LLaMA--Gemini-y-Claude-90b378fcc343.md", _page108],
    ["src/pages/blog/2024-07-11_Tutorial--Consolidaci-n-y-Subida-de-Datos-a-Firestore-usando-Python-e9fcb4eebac7.md", _page109],
    ["src/pages/blog/2024-07-12_Integraci-n-de-NATS-en-una-Arquitectura-de-Microservicios-con-NestJS--Docker-y-PostgreSQL-51af9319c1d0.md", _page110],
    ["src/pages/blog/2024-07-26_Gu-a-Definitiva-para-la-Organizaci-n-de-Proyectos-en-Golang-65d666e06ab4.md", _page111],
    ["src/pages/blog/2024-08-03_Construyendo-Subconsultas-Eficientes-en-PostgreSQL-con-CTEs--Ejemplos-en-Retail-y-Banca-a60c8ae0780a.md", _page112],
    ["src/pages/blog/2024-08-05_LangChain-para-Dummies--Gu-a-Completa-desde-la-Instalaci-n-hasta-su-Utilizaci-n-8dc3df92f048.md", _page113],
    ["src/pages/blog/2024-08-06_Perplexity-para-Dummies--Casos-de-Uso-Pr-cticos-908a0fd8fc4c.md", _page114],
    ["src/pages/blog/2024-08-07_Vercel-AI-para-Developers-Dummies--Una-Introducci-n-Sencilla-con-Next-js-8e38ca2ae813.md", _page115],
    ["src/pages/blog/2024-08-08_RAG-for-Dummies--Una-Gu-a-Sencilla-para-Entender-la-Generaci-n-Aumentada-por-Recuperaci-n-294b71a28e15.md", _page116],
    ["src/pages/blog/2024-08-09_Rust-for-Dummies--Una-Introducci-n-Sencilla-a-un-Lenguaje-Poderoso-d064cb133e8a.md", _page117],
    ["src/pages/blog/2024-08-10_Manejo-de-Fechas-y-Horas-en-Golang-a9770422e4da.md", _page118],
    ["src/pages/blog/2024-08-16_Enhancing-SQL-Query-Generation-with-Large-Language-Models--LLMs---My-Learning-Journey-81f116646314.md", _page119],
    ["src/pages/blog/2024-08-22_-Por-qu--OpenAI-Necesita-un-Head-of-Latam-en-Am-rica-Latina--baa4d4b4ddda.md", _page120],
    ["src/pages/blog/2024-08-22_Why-Does-OpenAI-Need-a-Head-of-Latam-in-Latin-America--fcd5406da369.md", _page121],
    ["src/pages/blog/2024-08-28_Haystack--Construyendo-Aplicaciones-de-IA-con-Componentes-Modulares-02d1ae93a849.md", _page122],
    ["src/pages/blog/2024-09-11_Astra-DB--La-Base-de-Datos-en-la-Nube-Basada-en-Apache-Cassandra-8d570ecc4a6c.md", _page123],
    ["src/pages/blog/2024-09-12_Creating-a-Source-of-Truth-Like-Wikipedia-Using-Rust-and-Blockchain-to-Combat-Fake-News-aa489fdd6188.md", _page124],
    ["src/pages/blog/2024-09-21_Pinecone--Un-Almac-n-de-Vectores-Optimizado-para-la-B-squeda-de-Similitudes-ea747ae4762b.md", _page125],
    ["src/pages/blog/2024-09-23_---LangChain-vs--LlamaIndex---Qu--herramienta-de-IA-deber-as-usar--fe9c7014e3fd.md", _page126],
    ["src/pages/blog/2024-09-23_Cursor--El-Futuro-de-la-Programaci-n-con-IA-y-C-mo-Migrar-desde-VS-Code-0d3cfb18e712.md", _page127],
    ["src/pages/blog/2024-09-23_Desbloqueando-el-Potencial-del-Razonamiento-en-Modelos-de-Lenguaje--GPT-4--LLaMA-3-1--71d7a39eee96.md", _page128],
    ["src/pages/blog/2024-09-23_LangChain---Qu--es-mejor--Function-Calling-o-ReAct--Un-An-lisis-Comparativo-8bba2d7b4885.md", _page129],
    ["src/pages/blog/2024-09-23_Mejorando-la-B-squeda-Sem-ntica-con-Faiss--Pinecone-y-LangChain--Un-Caso-Real-con-Twitter-d656afb87e7b.md", _page130],
    ["src/pages/blog/2024-09-25_Llama-3-2--Potenciando-la-IA-en-dispositivos-m-viles-y-edge-computing-af664d6b76d7.md", _page131],
    ["src/pages/blog/2024-09-28_El-Futuro-de-la-IA--Competir-con-las-Big-Tech-y-las-Nuevas-Tendencias-58582a61f1a5.md", _page132],
    ["src/pages/blog/2024-09-28_Orion--La-Revoluci-n-de-las-Gafas-de-Realidad-Aumentada-por-Meta-dd4204828e9c.md", _page133],
    ["src/pages/blog/2024-09-30_Notebook-LM--El-Futuro-de-la-Creaci-n-de-Contenidos-Automatizados-fe0168d5c461.md", _page134],
    ["src/pages/blog/2024-10-01_Groq---Una-Revoluci-n-en-el-Hardware-de-IA-y-APIs-para-Inferencia-en-Tiempo-Real-3df6df5e8992.md", _page135],
    ["src/pages/blog/2024-10-01_Implementaci-n-de-un-Sistema-de-Recomendaciones-Personalizado-en-Retail-usando-IA-con-RAG--Google--4b0ba349a82c.md", _page136],
    ["src/pages/blog/2024-10-01_Reflection-Agents--Mejorando-la-inteligencia-artificial-mediante-la-autorreflexi-n-ef6dff638423.md", _page137],
    ["src/pages/blog/2024-10-09_---14-Tips-para-Programar-Sistemas-Multiagentes-con-Bases-de-Datos-Vectoriales-usando-LangChain-y--0e7e219f248d.md", _page138],
    ["src/pages/blog/2024-10-12_Balancing-Income-and-Well-being--How-Software-Engineers-Can-Earn-Well-While-Taking-Care-of-Their--9549b73b86b1.md", _page139],
    ["src/pages/blog/2024-11-16_Claude-3-5-y-el-Uso-de-Computadora--Un-Salto-Cu-ntico-en-la-Automatizaci-n-de-Tareas-ac4f6ec31d2f.md", _page140],
    ["src/pages/blog/2024-12-08_Comenzando-con-Hugging-Face--Gu-a-Completa-para-Modelos-Open-Source-e45ba51be887.md", _page141],
    ["src/pages/blog/2024-12-12_AWS-Certified-AI-Practitioner--AIF-C01---C-mo-aplicar-sus-conocimientos-en-casos-pr-cticos-df270cffd3cb.md", _page142],
    ["src/pages/blog/2024-12-17_Introducci-n-a-la-Seguridad-en-el-Mundo-de-la-IA--Protegiendo-el-Futuro-Inteligente-fd385b35e71a.md", _page143],
    ["src/pages/blog/2024-12-19_AI-Agent-Develop--Agentes-Inteligentes-con-LangChain-y-LangGraph-3226c5971fa2.md", _page144],
    ["src/pages/blog/2024-12-20_C-mo-Funciona-el-Modelo-O1--Principios--Ejemplos-Reales-y-C-digo-Funcional-670e2d94c708.md", _page145],
    ["src/pages/blog/2024-12-21_Continuando-con-el-Modelo-O1--Casos-de-Uso-Avanzados-y-Ejecuci-n-Planificada-1930ca9b641e.md", _page146],
    ["src/pages/blog/2024-12-28_Continuando-con-el-Modelo-O1--Casos-de-Uso-Avanzados-y-Ejecuci-n-Planificada-2377137147fb.md", _page147],
    ["src/pages/blog/2024-12-29_Metaprompting-con-O1--Optimizando-Rutinas-Basadas-en-LLMs-ba41a6e3b55e.md", _page148],
    ["src/pages/blog/2025-01-01_C-mo-Prepararte-y-Certificarte-como-Neo4j-Certified-Professional-1e290129c26f.md", _page149],
    ["src/pages/blog/2025-01-08_Inteligencia-Artificial-Generativa--Casos-de-Uso-T-cnicos-y-Aplicaciones-Reales-59f94d4aaa42.md", _page150],
    ["src/pages/blog/2025-01-10_Passkey-Authentication--A-Modern-Security-Solution-for-Apps-6141fc898a73.md", _page151],
    ["src/pages/blog/2025-01-17_Comprendiendo-la-Diferencia-entre-PageRank-y-ArticleRank--Un-An-lisis-en-la-Ciencia-de-Datos-con--e32c9f519d0b.md", _page152],
    ["src/pages/blog/2025-02-19_---Rug-Pull-en-Criptomonedas--C-mo-Funciona-esta-Estafa-y-C-mo-Evitarla-3bfe33a62efb.md", _page153],
    ["src/pages/blog/2025-02-19_---Rug-Pulls-in-Cryptocurrency--How-This-Scam-Works-and-How-to-Avoid-It-ea427349ec9f.md", _page154],
    ["src/pages/blog/2025-03-09_Vistas-Materializadas--Cron-Jobs-y-Microservicios-en-Go-2d3a35c4391f.md", _page155],
    ["src/pages/blog/2025-03-12_Implementaci-n-de-un-Flujo-de-Trabajo-Interactivo-con-LlamaIndex-en-Jupyter-Notebook-2b9edf6b8586.md", _page156],
    ["src/pages/blog/2025-03-23_MCP-Model-Context-Protocol.md", _page157],
    ["src/pages/blog/2025-03-28_BFF-Golang-OpenAPI.md", _page158],
    ["src/pages/blog/2025-03-29_BFF-Golang-Parte2.md", _page159],
    ["src/pages/blog/2025-03-30_BFF-Golang-Parte3.md", _page160],
    ["src/pages/blog/2025-04-01_BFF-Golang-Parte4.md", _page161],
    ["src/pages/blog/2025-04-02_BFF-Golang-Parte5.md", _page162],
    ["src/pages/blog/2025-04-06_Carrera-IA-AndrewNg.md", _page163],
    ["src/pages/blog/2025-04-07_Langflow-Launch-Week.md", _page164],
    ["src/pages/blog/2025-04-08_AutoRAG-Casos-Practicos.md", _page165],
    ["src/pages/blog/2025-04-09_Guia-Google-ADK.md", _page166],
    ["src/pages/blog/2025-04-12_Vectorizacion-AutoRAG.md", _page167],
    ["src/pages/blog/2025-04-13_Entrena-tu-LLM.md", _page168],
    ["src/pages/blog/2025-04-16_ai-code-assistants.md", _page169],
    ["src/pages/blog/2025-04-19_json-ai-inspector.md", _page170],
    ["src/pages/blog/2025-04-20_mcp-inspector.md", _page171],
    ["src/pages/blog/2025-04-23_cascade-agents.md", _page172],
    ["src/pages/blog/2025-05-01_kaggle-ia-generativa.md", _page173],
    ["src/pages/blog/2025-05-01_llms-txt.md", _page174],
    ["src/pages/blog/2025-05-02_uv-python.md", _page175],
    ["src/pages/blog/2025-05-09_go-oracle-docker-debug-story.md", _page176],
    ["src/pages/blog/2025-05-09_go-oracle-docker-debug-story-en.md", _page177],
    ["src/pages/blog/2025-05-12_fastmcp-servidores-python-inteligentes.md", _page178],
    ["src/pages/blog/2025-05-18_ai-browser-agents.md", _page179],
    ["src/pages/blog/2025-05-25_livekit-agentes.md", _page180],
    ["src/pages/blog/2025-07-06_go-journey-from-skeptic-to-believer.md", _page181],
    ["src/pages/blog/2025-08-03_Como-construir-agentes-efectivos-segun-Anthropic-con-ejemplos-concretos.md", _page182],
    ["src/pages/blog/2025-08-05_GPT-OSS-de-OpenAI-la-nueva-IA-abierta-que-impulsa-la-productividad-de-las-startups.md", _page183],
    ["src/pages/blog/2025-08-22_serverless-llm-options.md", _page184],
    ["src/pages/blog/go-journey-from-skeptic-to-believer.md", _page185],
    ["src/pages/blog/index.astro", _page186],
    ["src/pages/projects/ai-development-project.md", _page187],
    ["src/pages/projects/azure-serverless-architecture.md", _page188],
    ["src/pages/projects/carta-digital-restaurant.md", _page189],
    ["src/pages/projects/copilotkit.md", _page190],
    ["src/pages/projects/flutter-mobile-app.md", _page191],
    ["src/pages/projects/fullstack-web-app.md", _page192],
    ["src/pages/projects/impresion3d-marvel-demo.md", _page193],
    ["src/pages/projects/json-ai-inspector.md", _page194],
    ["src/pages/projects/nextjs-ecommerce-platform.md", _page195],
    ["src/pages/projects/index.astro", _page196],
    ["src/pages/index.astro", _page197]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2574c3f2-8c83-4f33-b1c4-bf91db9afdd7"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
