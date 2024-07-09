import { resolve } from 'path'
import { mergeConfig } from 'vite'
import viteConfig from 'vite-config'
import packageJson from './package.json'

const SynapseReactClientVersion = packageJson.version

const externals = [
  'react', // Use regex ^$ because we do want to bundle 'react/jsx-transform'
  'react-dom',
  'react-router',
  'react-router-dom',
  'react-measure',
  'react-bootstrap',
  'plotly.js-basic-dist',
  'react-plotly.js',
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
  'universal-cookie',
]

const globals = {
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

export default mergeConfig(viteConfig, {
  root: '.',
  define: {
    _SRC_VERSION: JSON.stringify(SynapseReactClientVersion),
  },
  build: {
    emptyOutDir: false,
    outDir: './dist/umd',
    lib: {
      entry: resolve(__dirname, 'src/umd.index.ts'),
      name: 'SRC',
      fileName: () => 'synapse-react-client.production.min.cjs',
      formats: ['umd'],
      commonjsOptions: { transformMixedEsModules: true },
    },
    rollupOptions: {
      external: externals,
      output: {
        globals,
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'style.css')
            return 'synapse-react-client.production.min.css'
          return assetInfo.name
        },
      },
    },
  },
})
