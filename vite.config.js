/** @jsxImportSource react */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Ensure the React plugin is added
  build: {
    outDir: "dist", // Make sure this is set correctly
  }
});
