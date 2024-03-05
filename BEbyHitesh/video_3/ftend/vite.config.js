import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:3002',
    }
  },
  plugins: [react()],
})

//Proxy Forwards Request: The proxy forwards the request to the appropriate destination server based on its configuration or rules. This server could be another web server, an API server, or any other type of server.
