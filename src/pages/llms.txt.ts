import type { APIRoute } from "astro";
import { llmsTextResponse } from "../lib/llms";

export const prerender = true;

export const GET: APIRoute = llmsTextResponse;
