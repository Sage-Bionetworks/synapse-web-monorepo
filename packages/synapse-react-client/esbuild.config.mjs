import svgrPlugin from 'esbuild-plugin-svgr'
import { sassPlugin } from 'esbuild-sass-plugin'
import ESBuildNodePolyfillsPlugin from 'esbuild-plugin-node-polyfills'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import esbuild from 'esbuild'
import GlobalsPlugin from 'esbuild-plugin-globals'
import packageJson from './package.json' assert { type: 'json' }
import glob from 'tiny-glob'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-router': 'ReactRouter',
  'react-router-dom': 'ReactRouterDOM',
  'react-transition-group': 'ReactTransitionGroup',
  'react-bootstrap': 'ReactBootstrap',
  'react-plotly.js/factory': 'createPlotlyComponent',
  'rss-parser': 'Parser',
  'react-mailchimp-subscribe': 'ReactMailchimpSubscribe',
  'plotly.js-basic-dist': 'Plotly',
  '@rjsf/core': 'JSONSchemaForm',
  'react-measure': 'ReactMeasure',
  markdownit: 'markdownit',
  markdownitSynapse: 'markdownitSynapse',
  markdownitSub: 'markdownitSub',
  markdownitSup: 'markdownitSup',
  markdownitCentertext: 'markdownitCentertext',
  markdownitSynapseHeading: 'markdownitSynapseHeading',
  markdownitSynapseTable: 'markdownitSynapseTable',
  markdownitStrikethroughAlt: 'markdownitStrikethroughAlt',
  markdownitContainer: 'markdownitContainer',
  markdownitEmphasisAlt: 'markdownitEmphasisAlt',
  markdownitInlineComments: 'markdownitInlineComments',
  markdownitBr: 'markdownitBr',
  markdownitMath: 'markdownitMath',
  'universal-cookie': 'UniversalCookie',
}

/** @type {import('esbuild').BuildOptions} */
const esBuildSharedOptions = {
  bundle: true,
  platform: 'browser',
  target: 'es2015',
  tsconfig: 'tsconfig.json',
  plugins: [
    sassPlugin({
      loadPaths: ['../../node_modules', 'node_modules'],
    }),
    svgrPlugin({
      ref: true,
      namedExport: 'ReactComponent',
      exportType: 'named',
    }),
    NodeModulesPolyfillPlugin(),
  ],
}

/** @type {import('esbuild').BuildOptions} */
const esBuildUmdOptions = {
  ...esBuildSharedOptions,
  entryPoints: ['src/umd.index.ts'],
  globalName: 'SRC',
  plugins: [...esBuildSharedOptions.plugins, GlobalsPlugin(globals)],
  external: [
    '^react$', // Use regex ^$ because we do want to bundle 'react/jsx-transform'
    'react-dom',
    'react-router',
    'react-router-dom',
    'react-measure',
    'react-bootstrap',
    'react-plotly.js/factory',
    'plotly.js-basic-dist',
    '@rjsf/core',
    'katex',
    'rss-parser',
    'react-mailchimp-subscribe',
    'markdownit',
    'markdownitSynapse',
    'markdownitSub',
    'markdownitSup',
    'markdownitCentertext',
    'markdownitSynapseHeading',
    'markdownitSynapseTable',
    'markdownitStrikethroughAlt',
    'markdownitContainer',
    'markdownitEmphasisAlt',
    'markdownitInlineComments',
    'markdownitBr',
    'markdownitMath',
    'react-transition-group',
    'universal-cookie',
  ],
}

/**
 * Any `index.ts` file will be built as an entrypoint, so one could import from e.g. 'synapse-react-client/components/MyComponent'
 */
const entryPoints = ['./src/index.ts'] //await glob('./src/**/index.ts')

const esBuildCommonJsOptions = {
  ...esBuildSharedOptions,
  entryPoints: entryPoints,
  format: 'cjs',
  packages: 'external',
}

const esBuildEsmOptions = {
  ...esBuildSharedOptions,
  entryPoints: entryPoints,
  format: 'esm',
  packages: 'external',
}

const options = {
  umd: esBuildUmdOptions,
  // cjs: esBuildCommonJsOptions,
  esm: esBuildEsmOptions,
}

Object.keys(options).forEach(key => {
  const option = options[key]
  // Development build
  esbuild.build({
    ...option,
    minify: false,
    sourcemap: true,
    // outdir: `./dist/${key}`,
    outfile: `./dist/${key}/synapse-react-client.development.js`,
  })

  // Production build
  esbuild
    .build({
      ...option,
      minify: true,
      sourcemap: false,
      metafile: true,
      // outdir: `./dist/${key}`,
      outfile: `./dist/${key}/synapse-react-client.production.min.js`,
    })
    .then(result => {
      const metafile = result.metafile
      const outputMb = Object.entries(metafile.outputs).forEach(
        ([key, value]) => {
          console.log(`${key}: ${(value.bytes / 1024 / 1024).toFixed(2)} MB`)
        },
      )

      // TODO: Use the metafile to determine the impact of each bundled dependency.
    })
})
