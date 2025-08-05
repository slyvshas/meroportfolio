import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    // Handle client-side routing
    historyApiFallback: true,
    // Proxy for Sanity API to avoid CORS issues
    proxy: {
      '/api/sanity': {
        target: 'https://58bp78pe.api.sanity.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/sanity/, ''),
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      },
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  // Handle client-side routing in development
  preview: {
    port: 3000,
    historyApiFallback: true
  }
}); 