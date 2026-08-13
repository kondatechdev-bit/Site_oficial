import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        sobre: path.resolve(__dirname, 'pages/sobre.html'),
        servicos: path.resolve(__dirname, 'pages/servicos.html'),
        projetos: path.resolve(__dirname, 'pages/projetos.html'),
        produtos: path.resolve(__dirname, 'pages/produtos.html'),
        equipe: path.resolve(__dirname, 'pages/equipe.html'),
        blog: path.resolve(__dirname, 'pages/blog.html'),
        roadmap: path.resolve(__dirname, 'pages/roadmap.html'),
        suporte: path.resolve(__dirname, 'pages/suporte.html'),
        contato: path.resolve(__dirname, 'pages/contato.html'),
        apoiar: path.resolve(__dirname, 'pages/apoiar.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
