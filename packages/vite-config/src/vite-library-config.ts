import type { UserConfig } from 'vite'

/**
 * Vite configuration snippet for generating an ESM + CJS library bundle
 * with code-split chunks (the default/legacy strategy).
 *
 * `entry` is intentionally omitted here — it MUST be provided via
 * ConfigBuilder.setBuildLibEntry(), which merges it in separately.
 * Using a placeholder (e.g. `entry: ''`) would cause mergeConfig to
 * concatenate the placeholder with the real entries.
 */
export const viteLibraryConfig: UserConfig = {
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: './dist',
    lib: {
      entry: [],
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
  },
}

/**
 * Vite configuration snippet for generating an ESM-only library build
 * that preserves the source module structure (one output file per source file).
 *
 * This enables deep imports like `my-package/components/Foo` to resolve
 * to `dist/components/Foo.js` without needing complex exports map configuration.
 *
 * `entry` is intentionally set to an empty array — it MUST be provided via
 * ConfigBuilder.setBuildLibEntry(), which merges it in separately.
 */
export const viteLibraryPreserveModulesConfig: UserConfig = {
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: './dist',
    lib: {
      entry: [],
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      },
    },
  },
}
