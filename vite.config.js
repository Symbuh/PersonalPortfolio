import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import compression from 'vite-plugin-compression';

export default defineConfig({
  publicDir: 'public',
  plugins: [
    react(),
    compression({
      ext: '.gz',
      algorithm: 'gzip',
      filter: /\.(bin|gltf)$/,
      deleteOriginFile: true,
    }),
  ],
  assetFileTypes: ['css', 'svg', 'png', 'jpeg', 'gif', 'bin', 'gltf'],
});
