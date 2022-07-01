import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "@/": fileURLToPath(new URL("./src", import.meta.url)),
  //     "@/config": fileURLToPath(new URL("./src/config", import.meta.url)),
  //     "@/assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
  //     "@/components": fileURLToPath(new URL("./src/components", import.meta.url)),
  //     "@/pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
  //     "@/utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
  //     "@/styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
  //     "@/constants": fileURLToPath(new URL("./src/constants", import.meta.url)),
  //     "@/services": fileURLToPath(new URL("./src/services", import.meta.url)),
  //     "@/store": fileURLToPath(new URL("./src/store", import.meta.url)),
  //     "@/router": fileURLToPath(new URL("./src/router", import.meta.url)),
  //     "@/i18n": fileURLToPath(new URL("./src/i18n", import.meta.url)),
  //     "@/api": fileURLToPath(new URL("./src/api", import.meta.url)),
  //     "@/mock": fileURLToPath(new URL("./src/mock", import.meta.url)),
  //   },
  // },
  resolve: {
    // 路径别名
    alias: {
      '@/': resolve(__dirname, './src'),
      '@/config': resolve(__dirname, './src/config'),
      '@/components': resolve(__dirname, './src/components'),
      '@/styles': resolve(__dirname, './src/styles'),
      '@/utils': resolve(__dirname, './src/utils'),
      '@/assets': resolve(__dirname, './src/assets'),
      '@/pages': resolve(__dirname, './src/pages'),
      '@/routes': resolve(__dirname, './src/routes'),
      '@/store': resolve(__dirname, './src/store'),
    },
  }
})

