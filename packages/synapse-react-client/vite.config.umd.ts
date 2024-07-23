import { resolve } from 'path'
import { defineConfig, mergeConfig } from 'vite'
import viteConfig from 'vite-config'
import { version } from './package.json'

// The set of dependencies that will NOT be included in our UMD bundle. The dependency will be loaded from the global object matching the dependency key's value in this object.
const globalExternals = {
  katex: 'katex',
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-router': 'ReactRouter',
  'react-router-dom': 'ReactRouterDOM',
  'react-bootstrap': 'ReactBootstrap',
  'plotly.js-basic-dist': 'Plotly',
  'react-plotly.js': 'createPlotlyComponent',
  'rss-parser': 'Parser',
  'react-mailchimp-subscribe': 'ReactMailchimpSubscribe',
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

/**
 * A Vite configuration to create a UMD bundle for Synapse React Client. This bundle is primarily used to include Synapse
 * React Client code in the Synapse Web Client, which does not use a JavaScript bundler that could bundle the ES module.
 */
export default defineConfig(({ mode = 'production' }) =>
  mergeConfig(viteConfig, {
    root: '.',
    build: {
      emptyOutDir: false,
      outDir: './dist/umd',
      minify: mode === 'production',
      lib: {
        entry: resolve(__dirname, 'src/umd.index.ts'),
        name: 'SRC',
        fileName: () =>
          mode === 'production'
            ? 'synapse-react-client.production.min.js'
            : 'synapse-react-client.development.js',
        formats: ['umd'],
      },
      rollupOptions: {
        external: Object.keys(globalExternals),
        output: {
          globals: globalExternals,
          banner: `/*! SRC v${version} */`,
          assetFileNames: assetInfo => {
            if (assetInfo.name === 'style.css')
              return mode === 'production'
                ? 'synapse-react-client.production.min.css'
                : 'synapse-react-client.development.css'
            return assetInfo.name
          },
        },
      },
    },
  }),
)
