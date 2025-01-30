import { resolve } from 'path'
import { ConfigBuilder } from 'vite-config'
import { version } from './package.json'

// The set of dependencies that will NOT be included in our UMD bundle. The dependency will be loaded from the global object matching the dependency key's value in this object.
const globalExternals = {
  katex: 'katex',
  react: 'React',
  'react-dom': 'ReactDOM',
  'plotly.js-basic-dist': 'Plotly',
  'react-plotly.js': 'createPlotlyComponent',
  'rss-parser': 'Parser',
  'react-mailchimp-subscribe': 'ReactMailchimpSubscribe',
  markdownit: 'markdownit',
  markdownitSynapse: 'markdownitSynapse',
  markdownitSub: 'markdownitSub',
  markdownitSup: 'markdownitSup',
  markdownitCentertext: 'markdownitCentertext',
  markdownitSynapseHeading: 'markdownitSynapseHeading',
  markdownitSynapseTable: 'markdownitSynapseTable',
  markdownitStrikethroughAlt: 'markdownitStrikethroughAlt',
  markdownitContainer: 'markdownitContainer',
  markdownitInlineComments: 'markdownitInlineComments',
  markdownitBr: 'markdownitBr',
  markdownitMath: 'markdownitMath',
  'universal-cookie': 'UniversalCookie',
}

/**
 * A Vite configuration to create a UMD bundle for Synapse React Client. This bundle is primarily used to include Synapse
 * React Client code in the Synapse Web Client, which does not use a JavaScript bundler that could bundle the ES module.
 */
const config = new ConfigBuilder()
  .setIncludeReactConfig(true)
  // For our UMD bundle, we don't want to generate types or externalize all dependencies, so don't include the default library config.
  .setConfigOverrides({
    root: '.',
    build: {
      sourcemap: true,
      emptyOutDir: false,
      outDir: './dist/umd',
      minify: true,
      lib: {
        entry: resolve(__dirname, 'src/umd.index.ts'),
        name: 'SRC',
        fileName: () => 'synapse-react-client.production.min.js',
        formats: ['umd'],
      },
      rollupOptions: {
        external: Object.keys(globalExternals),
        output: {
          globals: globalExternals,
          banner: `/*! SRC v${version} */`,
          assetFileNames: (assetInfo: { name: string }) => {
            if (assetInfo.name === 'style.css')
              return 'synapse-react-client.production.min.css'
            return assetInfo.name
          },
        },
      },
    },
  })
  .build()

export default config
