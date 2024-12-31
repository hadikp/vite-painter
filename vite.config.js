import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  /* server: {
    proxy: {
      '/blog': {
        target: 'http://localhost:5174/blog', // A VitePress szervered címe (ha külön futtatod)
        rewrite: (path) => path.replace(/^\/blog/, ''), // Átírás a helyes útvonalra
      },
    },
  }, */
})
