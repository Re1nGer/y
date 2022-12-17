import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/y/",
  plugins: [react()],
  css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@import "./src/index.scss";`
    }
  }
},
})
