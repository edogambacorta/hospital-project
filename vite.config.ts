import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/styles/_variables.scss" as *;`,
        includePaths: [path.resolve(__dirname, 'src/styles')]
      }
    }
  }
})
