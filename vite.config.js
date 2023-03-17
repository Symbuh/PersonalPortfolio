import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  publicDir: 'public',
  plugins: [react()],
  assetFileTypes: ['css', 'svg', 'png', 'jpeg', 'gif', 'bin', 'gltf'],
});
