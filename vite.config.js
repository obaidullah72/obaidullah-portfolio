import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // three.js + R3F form one large chunk, but it is lazy-loaded after first paint.
    chunkSizeWarningLimit: 1000,
  },
})
