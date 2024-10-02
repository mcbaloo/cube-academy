import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
   base: "/cube-academy/",
  plugins: [react()],
  resolve: {
    alias: {
      data: "./src/data",
    }
  }
})
