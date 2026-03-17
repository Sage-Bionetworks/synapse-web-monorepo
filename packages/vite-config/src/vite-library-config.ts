import type { UserConfig } from 'vite'

/**
 * Returns a Vite configuration for generating an ESM + CJS library bundle
 * with code-split chunks.
 *
 * @param entry - The library entry point(s).
 */
export function libraryBuildConfig(entry: string | string[]): UserConfig {
  return {
    build: {
      sourcemap: true,
      emptyOutDir: true,
      outDir: './dist',
      lib: {
        entry,
        fileName: 'index',
        formats: ['es', 'cjs'],
      },
    },
  }
}

/**
 * Returns a Vite configuration for generating an ESM-only library build
 * that preserves the source module structure (one output file per source file).
 *
 * This enables deep imports like `my-package/components/Foo` to resolve
 * to `dist/components/Foo.js` without needing complex exports map configuration.
 *
 * @param entry - The library entry point(s), typically a glob of all source files.
 */
export function preserveModulesBuildConfig(
  entry: string | string[],
): UserConfig {
  return {
    build: {
      sourcemap: true,
      emptyOutDir: true,
      outDir: './dist',
      lib: {
        entry,
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
}
