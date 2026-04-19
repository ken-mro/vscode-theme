import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const THEMES_SRC = resolve(__dirname, '..', '.vscode-themes');
const PUBLIC_THEMES = resolve(__dirname, 'public', 'themes');

function buildManifest(): { name: string; file: string }[] {
  const files = readdirSync(THEMES_SRC).filter((f) => f.endsWith('.json')).sort();
  return files.map((file) => ({ name: file.replace(/\.json$/, ''), file }));
}

function copyThemesPlugin(): Plugin {
  return {
    name: 'copy-vscode-themes',
    configureServer(server) {
      const serve = (urlPath: string) => {
        if (!urlPath.startsWith('/themes/')) return null;
        const rel = urlPath.slice('/themes/'.length);
        if (rel === 'index.json') {
          return JSON.stringify(buildManifest());
        }
        if (/^[\w.-]+\.json$/.test(rel)) {
          const full = join(THEMES_SRC, rel);
          if (existsSync(full)) return readFileSync(full, 'utf-8');
        }
        return null;
      };
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();
        const body = serve(req.url.split('?')[0]);
        if (body === null) return next();
        res.setHeader('content-type', 'application/json; charset=utf-8');
        res.end(body);
      });
    },
    buildStart() {
      mkdirSync(PUBLIC_THEMES, { recursive: true });
      for (const { file } of buildManifest()) {
        const src = readFileSync(join(THEMES_SRC, file), 'utf-8');
        writeFileSync(join(PUBLIC_THEMES, file), src);
      }
      writeFileSync(
        join(PUBLIC_THEMES, 'index.json'),
        JSON.stringify(buildManifest(), null, 2),
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), copyThemesPlugin()],
  server: { port: 5173 },
});
