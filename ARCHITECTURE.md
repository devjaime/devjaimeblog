# Arquitectura Frontend (Astro Blog / Portfolio)

## Objetivos de la reorganización
1. Eliminar duplicación al cargar contenido (artículos y proyectos).
2. Introducir un punto único de acceso con caché en memoria (durante runtime) para listas de contenido.
3. Facilitar futuras extensiones (paginación, búsqueda, feeds RSS, categorías, i18n).
4. Mantener compatibilidad sin romper imports existentes (`list.ts`, `featured.ts`).

## Capas
| Capa | Archivo(s) | Responsabilidad |
|------|------------|-----------------|
| Data Load | `utils.ts (processContentInDir)` | Acceso bajo nivel a filesystem / glob. |
| Servicios de Contenido | `contentLoaders.ts` | Composición, caché, filtros (featured). |
| Export Legacy | `list.ts`, `featured.ts` | Backward compatibility (re-export). |
| Presentación | Componentes `.astro` | Render UI.

## Uso recomendado
```ts
import { loadArticles, loadFeaturedArticles } from "@/lib/contentLoaders";
const articles = await loadArticles();
```

## Extender con paginación (ejemplo futuro)
```ts
export const loadArticlesPage = async (page = 1, pageSize = 20) => {
  const all = await loadArticles();
  const start = (page - 1) * pageSize;
  return { total: all.length, page, pageSize, items: all.slice(start, start + pageSize) };
};
```

## Notas
- El caché es simple (variable módulo). Reset automático entre builds / hot reload.
- Se puede reemplazar por un adaptador (Redis / KV) si en el futuro se habilita SSR distribuido.
