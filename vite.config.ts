/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '~', replacement: resolve(__dirname, '/assets') },
    ],
  },
  build: { chunkSizeWarningLimit: 1600 },
})
