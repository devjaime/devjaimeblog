/**
 * Smart Replenishment Agent — Mock data
 * Datos simulados con fines de mockup de alta fidelidad.
 */

// ---------- Panel 4: Tendencias (últimos 30 días) ----------
function buildTrendSeries(base, growth, volatility) {
  const points = [];
  let value = base;
  for (let day = 1; day <= 30; day++) {
    const noise = (Math.sin(day * 1.3) + Math.sin(day * 0.7)) * volatility;
    value = base + (base * growth * (day / 30)) + noise * base * 0.05;
    points.push(Math.max(0, Math.round(value)));
  }
  return points;
}

const dayLabels = Array.from({ length: 30 }, (_, i) => `${i + 1}`);

window.trendsSeries = {
  labels: dayLabels,
  views: buildTrendSeries(12000, 2.8, 1.1),
  saves: buildTrendSeries(2200, 3.4, 0.9),
  shares: buildTrendSeries(900, 2.1, 0.7),
};

window.topTrends = [
  { rank: 1, name: '#Gorpcore', score: 340 },
  { rank: 2, name: '#OutdoorLife', score: 210 },
  { rank: 3, name: '#WinterStyle', score: 178 },
  { rank: 4, name: '#TrailRunning', score: 142 },
  { rank: 5, name: '#UrbanHiking', score: 96 },
];

// ---------- Panel 5: Tabla de reposición sugerida ----------
// Cada fila incluye su detalle explicable (Panel 6) en `detail`.
window.replenishRows = [
  {
    priority: 'alta',
    store: 'Parque Arauco',
    sku: '987654',
    product: 'Zapatilla Outdoor X2',
    size: '42',
    color: 'Negro/Verde',
    stock: 2,
    demand: 26,
    order: 24,
    confidence: 96,
    reason: 'Tendencia TikTok #Gorpcore +340%, quiebre proyectado día 3',
    detail: {
      reasons: [
        'Tendencia TikTok #Gorpcore +340% en 7 días',
        'Stock crítico detectado (2 unidades, cobertura 2.3 días)',
        'Demanda histórica alta para esta categoría en la tienda',
        'Segmento anónimo compatible (afinidad outdoor alta)',
        'Clima proyectado favorable para uso de la prenda',
      ],
      variables: ['Ventas históricas', 'Inventario', 'Estacionalidad', 'Clima', 'Redes sociales', 'Ubicación geográfica'],
    },
  },
  {
    priority: 'media',
    store: 'Alto Las Condes',
    sku: '554433',
    product: 'Chaqueta Outdoor Z',
    size: 'L',
    color: 'Verde Oliva',
    stock: 0,
    demand: 15,
    order: 15,
    confidence: 91,
    reason: 'Demanda histórica alta + clima frío proyectado',
    detail: {
      reasons: [
        'Quiebre de stock actual (0 unidades)',
        'Demanda histórica alta en temporada de invierno',
        'Clima proyectado: descenso de temperatura próximos 10 días',
        'Sin señal fuerte de tendencia social — prioridad media',
      ],
      variables: ['Ventas históricas', 'Inventario', 'Estacionalidad', 'Clima'],
    },
  },
  {
    priority: 'baja',
    store: 'Plaza Vespucio',
    sku: '112233',
    product: 'Polera Y',
    size: 'M',
    color: 'Blanco',
    stock: 50,
    demand: 12,
    order: 0,
    confidence: 88,
    reason: 'Stock suficiente para cobertura de 18 días',
    detail: {
      reasons: [
        'Stock actual cubre 18 días de demanda proyectada',
        'Producto timeless, sin urgencia de reposición',
        'Sin riesgo de quiebre detectado en el horizonte de revisión',
      ],
      variables: ['Ventas históricas', 'Inventario', 'Estacionalidad'],
    },
  },
  {
    priority: 'alta',
    store: 'Costanera Center',
    sku: '778899',
    product: 'Bototo Trail Runner',
    size: '40',
    color: 'Café',
    stock: 1,
    demand: 22,
    order: 21,
    confidence: 94,
    reason: 'Spillover desde Parque Arauco + tendencia #TrailRunning',
    detail: {
      reasons: [
        'Efecto spillover: clientes migran desde Parque Arauco en quiebre',
        'Tendencia #TrailRunning +142% en redes sociales',
        'Stock crítico (1 unidad) frente a demanda proyectada de 22',
        'Tienda elegible como ship-from-store para su zona web',
      ],
      variables: ['Ventas históricas', 'Inventario', 'Redes sociales', 'Ubicación geográfica'],
    },
  },
  {
    priority: 'media',
    store: 'Mall Plaza Egaña',
    sku: '334455',
    product: 'Mochila Urbana 20L',
    size: 'Única',
    color: 'Negro',
    stock: 4,
    demand: 10,
    order: 8,
    confidence: 85,
    reason: 'Aumento de búsquedas categoría "urban hiking"',
    detail: {
      reasons: [
        'Aumento de búsquedas +18% en categoría urban hiking',
        'Segmento anónimo con afinidad media a accesorios outdoor',
        'Cobertura actual de 5 días, dentro de rango aceptable',
      ],
      variables: ['Ventas históricas', 'Inventario', 'Redes sociales'],
    },
  },
  {
    priority: 'alta',
    store: 'Portal La Dehesa',
    sku: '998877',
    product: 'Parka Impermeable',
    size: 'XL',
    color: 'Azul Marino',
    stock: 0,
    demand: 19,
    order: 19,
    confidence: 97,
    reason: 'Clima proyectado lluvioso + quiebre inminente',
    detail: {
      reasons: [
        'Quiebre de stock actual (0 unidades)',
        'Clima proyectado: lluvia sostenida próximos 7 días',
        'Demanda histórica alta en este cluster de clientes',
        'Producto sin sustituto directo en el surtido de la tienda',
      ],
      variables: ['Inventario', 'Clima', 'Ventas históricas', 'Ubicación geográfica'],
    },
  },
  {
    priority: 'baja',
    store: 'Espacio Urbano Maipú',
    sku: '445566',
    product: 'Calcetín Térmico Pack 3',
    size: 'Única',
    color: 'Gris',
    stock: 80,
    demand: 14,
    order: 0,
    confidence: 82,
    reason: 'Producto timeless, stock cubre 25+ días',
    detail: {
      reasons: [
        'Producto timeless de reposición continua',
        'Stock actual cubre más de 25 días de demanda',
        'Sin señales de tendencia ni estacionalidad relevantes',
      ],
      variables: ['Inventario', 'Ventas históricas'],
    },
  },
  {
    priority: 'media',
    store: 'Mall Plaza Norte',
    sku: '667788',
    product: 'Polerón Gorpcore Oversize',
    size: 'XL',
    color: 'Beige',
    stock: 3,
    demand: 17,
    order: 14,
    confidence: 93,
    reason: 'Tendencia #Gorpcore + afinidad de segmento alta',
    detail: {
      reasons: [
        'Tendencia #Gorpcore con alta afinidad en el segmento anónimo de la zona',
        'Stock bajo (3 unidades) frente a demanda proyectada',
        'Producto fashion/trend: decaimiento de score en 10-14 días',
      ],
      variables: ['Redes sociales', 'Inventario', 'Ventas históricas', 'Ubicación geográfica'],
    },
  },
  {
    priority: 'alta',
    store: 'Mall Plaza Vespucio Sur',
    sku: '223344',
    product: 'Zapatilla Trekking Impermeable',
    size: '39',
    color: 'Gris/Naranjo',
    stock: 2,
    demand: 20,
    order: 18,
    confidence: 95,
    reason: 'Quiebre proyectado día 2, alta prioridad logística',
    detail: {
      reasons: [
        'Quiebre proyectado en día 2 sin reposición',
        'Alta prioridad logística: ventana de despacho próxima a cerrar',
        'Demanda proyectada consistente con temporada de lluvias',
      ],
      variables: ['Inventario', 'Ventas históricas', 'Clima'],
    },
  },
  {
    priority: 'baja',
    store: 'Florida Center',
    sku: '889900',
    product: 'Short Deportivo',
    size: 'S',
    color: 'Negro',
    stock: 60,
    demand: 9,
    order: 0,
    confidence: 79,
    reason: 'Fuera de temporada, sin señales de tendencia',
    detail: {
      reasons: [
        'Producto fuera de temporada (categoría verano)',
        'Sin señales de tendencia social relevantes',
        'Stock actual muy por encima de la demanda proyectada',
      ],
      variables: ['Estacionalidad', 'Inventario', 'Ventas históricas'],
    },
  },
];
