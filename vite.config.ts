// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// SPA mode: TanStack Start prerenders the shell to static HTML so the site
// can be deployed as plain static files (Vercel, Netlify, Cloudflare Pages, etc.)
// without needing an SSR runtime. src/server.ts is still used by the Lovable
// sandbox preview but is bypassed in static hosting.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
});
