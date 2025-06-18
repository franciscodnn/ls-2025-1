import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';

import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // As suas configurações do Vite podem ser adicionadas aqui
  // Por exemplo, para plugins:
  plugins: [
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about/index.html'),
      },
    },
  },
});
