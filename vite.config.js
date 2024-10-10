import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    assetsDir: 'assets',  // Specify the folder for assets (default is 'assets')
  },
  base:"/final-port/"
})
