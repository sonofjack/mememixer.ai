import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "vercel",
  // Ensure compatibility with Vercel's serverless functions
  compatibilityDate: "2025-01-01",
});
