import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSWC from 'vite-plugin-react-swc';

export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    reactSWC(),
  ],
});