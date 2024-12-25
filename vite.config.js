import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {
  NodeModulesPolyfillPlugin,
} from "@esbuild-plugins/node-modules-polyfill";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
        esbuildOptions: {
            // Node.js global to browser globalThis
            define: {
                global: 'globalThis'
            },
            // Enable esbuild polyfill plugins
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    buffer: true
                })
            ]
        }
    },
  plugins: [react(), NodeModulesPolyfillPlugin({
    process: true,
    buffer: true,
  })],
})
