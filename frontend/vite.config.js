import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Exposes the server to your local network
    port: 5173        // Optional, but can set if you want to fix the port
  }
})
