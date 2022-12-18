import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { dependencies } from './package.json';
function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/y/",
  plugins: [react()],
  css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@import "./src/index.scss";`
    }
  },
},
build: {
  sourcemap: false,
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        ...renderChunks(dependencies),
      },
    },
  },
},
});