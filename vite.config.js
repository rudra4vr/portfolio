import { defineConfig } from 'vite';

export default defineConfig({
    root: './',
    publicDir: 'public',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true
    },
    server: {
        port: 3000,
        open: true
    }
}); 