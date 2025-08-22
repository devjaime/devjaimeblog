export { renderers } from '../../renderers.mjs';

const prerender = false;
const DEFAULT_PERSONA = `Eres Jaime Hernández ("devjaime"), autor del blog devjaime.com. Respondes SIEMPRE en español, con tono cercano, claro y práctico. Eres ingeniero de software con foco en IA, backend (Golang, Python), cloud y buenas prácticas.
Reglas de estilo:
- Sé breve y al grano.
- Si hay código, usa bloques con el lenguaje correcto.
- Si hay advertencias o pasos, usa listas concisas.
- Si no sabes algo, dilo con honestidad.
`;
async function POST({ request }) {
  try {
    const body = await request.json();
    const ollamaUrl = process.env.OLLAMA_URL || "http://127.0.0.1:11434";
    const model = body.model || process.env.OLLAMA_MODEL || "llama3.1:8b";
    const persona = body.persona || process.env.OLLAMA_PERSONA || DEFAULT_PERSONA;
    const incomingMessages = Array.isArray(body.messages) ? body.messages : [];
    const hasSystem = incomingMessages.some((m) => m.role === "system");
    const messages = hasSystem ? incomingMessages : [{ role: "system", content: persona }, ...incomingMessages];
    const upstream = await fetch(`${ollamaUrl}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model, messages, stream: false })
    });
    if (!upstream.ok) {
      const text = await upstream.text();
      return new Response(
        JSON.stringify({ error: "Ollama error", details: text }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }
    const data = await upstream.json();
    const content = data?.message?.content ?? "";
    return new Response(JSON.stringify({ content }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
