import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Component } from 'react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      data: "./src/data",
    }
  }
})
