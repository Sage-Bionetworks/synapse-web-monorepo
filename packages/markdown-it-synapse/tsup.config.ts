import { defineConfig } from 'tsup'

const sharedConfig = { minify: true, dts: true, clean: true }

export default defineConfig([
  {
    ...sharedConfig,
    entry: { index: './src/index.ts' },
    format: ['esm', 'cjs'],
  },
  {
    ...sharedConfig,
    entry: { index: './src/index-umd.ts' },
    format: ['iife'],
    globalName: 'markdownitSynapse',
  },
])
