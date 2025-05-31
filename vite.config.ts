import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/cv_en_ligne/',
  plugins: [react()],
  build: {
    assetsInlineLimit: 0 // empêche Vite de base64-inliner les petites images
  }  
})