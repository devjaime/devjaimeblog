import type { APIRoute } from "astro";
import { llmsTextResponse } from "../lib/llms";

export const prerender = true;

// Alias kept for visitors and crawlers that try the singular filename.
export const GET: APIRoute = llmsTextResponse;
