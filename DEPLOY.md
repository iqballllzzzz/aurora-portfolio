# Deploy ke Vercel

Situs ini di-build sebagai **SPA statis** (tidak butuh SSR runtime).

## Langkah

1. Push repo ke GitHub/GitLab/Bitbucket.
2. Di Vercel: **Add New Project → Import** repo tersebut.
3. Vercel akan otomatis membaca `vercel.json`:
   - Build command: `vite build`
   - Output: `dist/client`
   - Semua route di-rewrite ke `index.html` (client-side routing TanStack Router).
4. Klik **Deploy**. Selesai.

## Catatan

- Tidak perlu set framework preset (sudah `null` di `vercel.json`).
- Tidak perlu environment variables kecuali kamu menambahkan integrasi (Supabase dsb).
- File `wrangler.jsonc` dan `src/server.ts` hanya dipakai sandbox preview Lovable; di Vercel diabaikan.
