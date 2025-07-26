# devjaime - Portafolio Personal

Portafolio personal de Jaime Hernández, ingeniero de software chileno especializado en inteligencia artificial, desarrollo backend y arquitecturas cloud.

## 🚀 Características

### ✅ SEO Optimizado
- **Meta tags completos**: Open Graph, Twitter Cards, structured data
- **Sitemap.xml**: Generado automáticamente con prioridades optimizadas
- **robots.txt**: Configurado para motores de búsqueda y LLMs
- **llms.txt**: Archivo especializado para asistentes de IA
- **Structured Data**: Schema.org markup para mejor indexación
- **Canonical URLs**: Prevención de contenido duplicado

### 🎨 Diseño y UX
- **Modo oscuro/claro**: Automático basado en preferencias del sistema
- **Diseño responsivo**: Optimizado para todos los dispositivos
- **Accesibilidad WCAG 2.1**: Navegación por teclado, screen readers
- **Tipografía legible**: IBM Plex Mono para código, fuentes optimizadas
- **Skip links**: Navegación rápida para usuarios de teclado

### ⚡ Rendimiento
- **Astro Framework**: Generación estática para máxima velocidad
- **TailwindCSS**: CSS optimizado y purgado automáticamente
- **Lazy loading**: Imágenes y recursos cargados bajo demanda
- **Preconnect**: Conexiones optimizadas a dominios externos
- **Cache headers**: Configuración optimizada para Netlify

### 🔧 Tecnologías

- **Framework**: Astro 5.x
- **Styling**: TailwindCSS 4.x
- **Language**: TypeScript
- **Deployment**: Netlify
- **Analytics**: GoatCounter
- **Comments**: Giscus (GitHub Discussions)

## 📁 Estructura del Proyecto

```
devjaimeblog/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── common/         # Componentes básicos
│   │   ├── home/           # Componentes de la página principal
│   │   └── ...
│   ├── layouts/            # Layouts de páginas
│   ├── lib/                # Utilidades y configuración
│   ├── pages/              # Páginas del sitio
│   │   ├── blog/           # Artículos del blog
│   │   └── projects/       # Páginas de proyectos
│   └── styles/             # Estilos globales
├── public/                 # Archivos estáticos
│   ├── robots.txt          # Configuración para crawlers
│   ├── sitemap.xml         # Mapa del sitio
│   ├── llms.txt            # Archivo para LLMs
│   └── site.webmanifest    # PWA manifest
└── ...
```

## 🚀 Optimizaciones Implementadas

### SEO Básico y Avanzado
- ✅ Meta tags dinámicos por página
- ✅ Open Graph y Twitter Cards
- ✅ Structured Data (Schema.org)
- ✅ Canonical URLs
- ✅ Sitemap.xml optimizado
- ✅ robots.txt configurado para LLMs
- ✅ Keywords y descripciones optimizadas

### Accesibilidad
- ✅ Navegación por teclado
- ✅ ARIA labels y roles
- ✅ Skip links
- ✅ Focus visible
- ✅ Contraste de colores optimizado
- ✅ Screen reader friendly

### Rendimiento
- ✅ Lazy loading de imágenes
- ✅ CSS y JS optimizados
- ✅ Preconnect a dominios externos
- ✅ Cache headers configurados
- ✅ Compresión de assets

### LLM Optimization
- ✅ Archivo llms.txt estructurado
- ✅ Contenido semántico optimizado
- ✅ Metadatos para asistentes de IA
- ✅ Estructura HTML clara

## 🛠️ Desarrollo

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/devjaime/devjaimeblog.git
cd devjaimeblog

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

### Variables de Entorno

El proyecto utiliza variables globales en `src/lib/variables.ts` para configurar:
- Información personal y profesional
- URLs de redes sociales
- Metadatos del sitio
- Configuración de SEO

## 📊 Métricas de Rendimiento

- **Lighthouse Score**: 95+ en todas las categorías
- **Core Web Vitals**: Optimizados
- **SEO Score**: 100/100
- **Accessibility**: WCAG 2.1 AA compliant

## 🌐 Despliegue

El sitio está configurado para desplegarse automáticamente en Netlify con:
- Headers de seguridad optimizados
- Cache headers para rendimiento
- Redirects configurados
- Compresión automática

## 📝 Blog

Los artículos se escriben en Markdown en `src/pages/blog/` con frontmatter que incluye:
- Título y descripción
- Tags para categorización
- Fecha de publicación
- Estado de featured
- Metadatos para SEO

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Website**: [devjaime.com](https://devjaime.com)
- **GitHub**: [@devjaime](https://github.com/devjaime)
- **LinkedIn**: [devjaime](https://www.linkedin.com/in/devjaime)
- **Twitter**: [@hsjhernandez](https://twitter.com/hsjhernandez)

---

Desarrollado con ❤️ en Chile 🇨🇱