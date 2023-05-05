import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import rollupNodePolyFill from "rollup-plugin-polyfill-node";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: { port: 3000 },
  build: {
    outDir: "./build",
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      // @ts-ignore
      plugins: [rollupNodePolyFill()],
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true,
      },
    }),
  ],
  define: {
    __TEST__: JSON.stringify(false),
    __DEV__: JSON.stringify(false),
  },
  optimizeDeps: {
    include: ["synapse-react-client"],
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  resolve: {
    alias: {
      src: resolve(__dirname, "/src"),
      process: "process/browser",
      path: "path-browserify",
      timers: "timers-browserify",
      fs: "memfs",
      https: "https-browserify",
      stream: "stream-browserify",
      http: "stream-http",
      buffer: "buffer/",
      util: "util",
    },
  },
});
