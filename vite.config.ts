// filepath: c:\Users\nicolas.munoz\Downloads\Proyecto cafe\Lenos-de-Tabi\vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./",
})