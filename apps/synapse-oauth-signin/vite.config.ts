import { mergeConfig } from 'vite'
import {
  baseConfig,
  nodePolyfillsPlugin,
  reactPlugins,
  vitestConfig,
} from 'vite-config'
import {
  getAccountAppAllowedSources,
  getSynapseEndpointsFromEnv,
} from 'vite-config/accountAppsContentSecurityPolicy'
import { contentSecurityPolicyPlugin } from 'vite-config/contentSecurityPolicyHtml'

const config = mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [
      nodePolyfillsPlugin(),
      ...reactPlugins(),
      contentSecurityPolicyPlugin(env =>
        getAccountAppAllowedSources(
          'synapse-oauth-signin',
          getSynapseEndpointsFromEnv(env),
        ),
      ),
    ],
    test: {
      include: ['src/test/**/*.test.[jt]s?(x)'],
      setupFiles: ['src/test/setupTests.ts'],
    },
  }),
)

export default config
