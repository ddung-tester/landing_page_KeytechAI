import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Touch to force Vite reload
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})

