import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "client", "src"),
      "@shared": path.resolve(process.cwd(), "shared"),
      "@assets": path.resolve(process.cwd(), "attached_assets"),
    },
  },
  root: path.resolve(process.cwd(), "client"),
  build: {
    outDir: path.resolve(process.cwd(), "dist", "public"),
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: path.resolve(process.cwd(), "client", "index.html"),
    }
  },
  optimizeDeps: {
    include: [
      '@tanstack/react-query',
      'react',
      'react-dom',
      'wouter',
      'framer-motion',
      'zod',
      'react-hook-form'
    ]
  },
});