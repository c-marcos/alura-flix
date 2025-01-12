import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitePluginCommonjs from 'vite-plugin-commonjs';
import path from 'path';

export default defineConfig({
  server: {
    proxy: {
      '/videos': 'https://github.com/c-marcos/videos-api'
    }
  },
  plugins: [
    react(),
    vitePluginCommonjs() // Para lidar com módulos CommonJS
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  optimizeDeps: {
    include: ['pouchdb-browser'], // Garantir que o PouchDB seja otimizado
  },
  build: {
    commonjsOptions: {
      include: [/pouchdb/], // Garantir que o PouchDB seja incluído no processo de construção
    },
  },
});

