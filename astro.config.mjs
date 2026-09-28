import { defineConfig } from 'astro/config';

// ポート 14321 は LPortMan に予約済み (Astro の既定 4321 は他と衝突しやすい)
export default defineConfig({
  site: 'https://lancard-aikawa.github.io',
  server: { port: 14321 },
  trailingSlash: 'always',
});
