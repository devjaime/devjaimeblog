import type { APIRoute } from "astro";

const statusFile = "/tmp/openclaw-agent-status.json";

export const GET: APIRoute = async () => {
  try {
    const fs = await import("fs");
    
    if (!fs.existsSync(statusFile)) {
      return new Response(JSON.stringify({
        status: "unknown",
        lastUpdate: null,
        agent: "main",
        sessions: [],
        jobs: [],
        errors: []
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    const data = fs.readFileSync(statusFile, "utf-8");
    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      status: "error",
      error: String(error)
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
