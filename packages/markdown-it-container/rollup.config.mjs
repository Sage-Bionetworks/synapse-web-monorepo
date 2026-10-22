import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { babel } from '@rollup/plugin-babel'
import { readFileSync } from 'node:fs'

const pkg = JSON.parse(readFileSync(new URL('package.json', import.meta.url)))
const pkgName = 'markdown-it-container'
const globalName = 'markdownitContainer'

const config_umd_full = {
  input: 'index.mjs',
  output: [
    {
      file: `dist/${pkgName}.js`,
      format: 'umd',
      name: globalName,
      plugins: [
        // Here terser is used only to force ascii output
        terser({
          mangle: false,
          compress: false,
          format: {
            comments: 'all',
            beautify: true,
            ascii_only: true,
            indent_level: 2,
          },
        }),
      ],
    },
    {
      file: `dist/${pkgName}.min.js`,
      format: 'umd',
      name: globalName,
      plugins: [
        terser({
          format: { ascii_only: true },
        }),
      ],
    },
  ],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    {
      banner() {
        return `/*! ${pkg.name} ${pkg.version} https://github.com/${pkg.repository} @license ${pkg.license} */`
      },
    },
  ],
}

const config_cjs_no_deps = {
  input: 'index.mjs',
  output: {
    file: 'dist/index.cjs.js',
    format: 'cjs',
  },
  external: Object.keys(pkg.dependencies || {}),
  plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
}

const config = process.env.CJS_ONLY
  ? [config_cjs_no_deps]
  : [config_umd_full, config_cjs_no_deps]

export default config
