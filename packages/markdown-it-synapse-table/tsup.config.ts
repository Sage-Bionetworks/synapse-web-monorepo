import { defineConfig } from 'tsup'

const sharedConfig = {
  entry: { index: './src/index.ts' },
  minify: true,
  dts: true,
  clean: true,
}

const globalName = 'markdownitSynapseTable'

export default defineConfig([
  {
    ...sharedConfig,
    format: ['esm', 'cjs'],
  },
  {
    ...sharedConfig,
    format: ['iife'],
    globalName: globalName,
    esbuildOptions: (options, context) => {
      // Add footer so the default export is the plugin function, which maintains behavior of previously released bundles
      // See https://github.com/evanw/esbuild/issues/1182#issuecomment-1011414271
      options.footer = {
        js: `${globalName} = Object.assign(${globalName}.default, ${globalName})`,
      }
    },
  },
])
