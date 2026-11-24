import { mergeConfig } from 'vite'
import {
  baseConfig,
  nodePolyfillsPlugin,
  reactPlugins,
  vitestConfig,
} from 'vite-config'
import { getAccountAppContentSecurityPolicy } from 'vite-config/accountAppsContentSecurityPolicy'
import { contentSecurityPolicyPlugin } from 'vite-config/contentSecurityPolicyHtml'

const config = mergeConfig(
  baseConfig,
  mergeConfig(vitestConfig, {
    plugins: [
      nodePolyfillsPlugin(),
      ...reactPlugins(),
      contentSecurityPolicyPlugin(env =>
        getAccountAppContentSecurityPolicy('synapse-oauth-signin', env),
      ),
    ],
    test: {
      include: ['src/test/**/*.test.[jt]s?(x)'],
      setupFiles: ['src/test/setupTests.ts'],
    },
  }),
)

export default config
