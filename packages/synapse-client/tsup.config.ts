import { defineConfig } from 'tsup'

export default defineConfig({
  entry: { index: './src/index.ts' },
  format: ['esm', 'cjs'],
  dts: false, // handled by tsc
})
