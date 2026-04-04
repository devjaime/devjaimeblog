import type { APIRoute } from "astro";

// Datos de la propiedad Coquimbo
const propiedad = {
  nombre: "Casa Coquimbo - Altos del Mirador",
  direccion: "Coquimbo, Chile",
  tipo: "casa",
  precioCompraUF: 2400,
  valorActualUF: 3500,
  mesesArrendada: 4,
  fechaInicioArriendo: "2025-12-01",
  arriendoMensualCLP: 500000,
  dividendoMensualUF: 0,
  dividendosPagados: 4,
  dividendosTotales: 300,
  banco: "Banco Estado",
  contribucionesCLP: 0,
  gastosComunesCLP: 0,
};

// UF histórica (actualizar mensualmente)
const ufHistory = [
  { fecha: "2025-12", valor: 38000 },
  { fecha: "2026-01", valor: 38200 },
  { fecha: "2026-02", valor: 38400 },
  { fecha: "2026-03", valor: 38500 },
  { fecha: "2026-04", valor: 38500 },
];

// Plusvalía calculada
const plusvaliaUF = propiedad.valorActualUF - propiedad.precioCompraUF;
const plusvaliaPorcentaje = ((plusvaliaUF / propiedad.precioCompraUF) * 100).toFixed(1);
const valorActualCLP = propiedad.valorActualUF * ufHistory[ufHistory.length - 1].valor;
const precioCompraCLP = propiedad.precioCompraUF * ufHistory[0].valor;

// Rentabilidad bruta anual
const arriendoAnualCLP = propiedad.arriendoMensualCLP * 12;
const rentabilidadBruta = ((arriendoAnualCLP / valorActualCLP) * 100).toFixed(2);

// Dividendos restantes
const dividendosRestantes = propiedad.dividendosTotales - propiedad.dividendosPagados;
const anosRestantes = Math.round(dividendosRestantes / 12);

// Próxima subida de arriendo
const mesesRestantesSubida = Math.max(0, 12 - propiedad.mesesArrendada);
const proximaSubidaArriendo = new Date(propiedad.fechaInicioArriendo);
proximaSubidaArriendo.setMonth(proximaSubidaArriendo.getMonth() + 12);
const nuevoArriendoCLP = Math.round(propiedad.arriendoMensualCLP * 1.04);

// Mantenciones programadas
const mantenciones = [
  { nombre: "Revisión techumbre", frecuencia: "Anual", ultima: "2025-06", proxima: "2026-06", costo: 80000 },
  { nombre: "Mantención calefacción", frecuencia: "Anual", ultima: "2025-04", proxima: "2026-04", costo: 45000 },
  { nombre: "Limpieza alcantarillado", frecuencia: "Bianual", ultima: "2025-01", proxima: "2027-01", costo: 60000 },
  { nombre: "Revisión extintores", frecuencia: "Anual", ultima: "2025-12", proxima: "2026-12", costo: 25000 },
  { nombre: "Pintura exterior", frecuencia: "3 años", ultima: "2024-01", proxima: "2027-01", costo: 500000 },
];

// UF actual
const ufActual = ufHistory[ufHistory.length - 1].valor;
const ufCambio = ufHistory.length > 1 
  ? ((ufActual - ufHistory[ufHistory.length - 2].valor) / ufHistory[ufHistory.length - 2].valor * 100).toFixed(2)
  : 0;

// Timeline
const timeline = [
  { fecha: "2026-04", evento: "Revisión mercado arriendo", tipo: "info" },
  { fecha: "2026-06", evento: "Mantención techumbre", tipo: "warning" },
  { fecha: "2026-12", evento: "Aumento arriendo", tipo: "success" },
  { fecha: "2027-01", evento: "Pintura exterior", tipo: "info" },
  { fecha: "2028-2029", evento: "target: Segunda propiedad", tipo: "target" },
];

// Metas
const metas = {
  segundaPropiedad: {
    objetivo: "2028-2029",
    objetivoCLP: 60000000,
    ahorradoCLP: 15000000,
    porcentaje: 25,
  },
  prepagos: [
    { fecha: "2025-12", montoUF: 5, descripcion: "Prepago inicial" },
  ],
};

export const GET: APIRoute = async () => {
  const data = {
    timestamp: new Date().toISOString(),
    propiedad,
    uf: {
      actual: ufActual,
      cambio: parseFloat(ufCambio),
      historial: ufHistory,
    },
    valorizacion: {
      precioCompraUF: propiedad.precioCompraUF,
      precioCompraCLP,
      valorActualUF: propiedad.valorActualUF,
      valorActualCLP,
      plusvaliaUF,
      plusvaliaPorcentaje: parseFloat(plusvaliaPorcentaje),
    },
    arriendo: {
      actual: propiedad.arriendoMensualCLP,
      nuevo: nuevoArriendoCLP,
      fechaSubida: proximaSubidaArriendo.toISOString().split("T")[0],
      mesesRestantes: mesesRestantesSubida,
      rentabilidadBruta: parseFloat(rentabilidadBruta),
      ingresoAnualCLP: arriendoAnualCLP,
    },
    credito: {
      dividendosPagados: propiedad.dividendosPagados,
      dividendosTotales: propiedad.dividendosTotales,
      dividendosRestantes,
      anosRestantes,
      progreso: ((propiedad.dividendosPagados / propiedad.dividendosTotales) * 100).toFixed(2),
    },
    mantenciones,
    timeline,
    metas,
  };

  return new Response(JSON.stringify(data, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
