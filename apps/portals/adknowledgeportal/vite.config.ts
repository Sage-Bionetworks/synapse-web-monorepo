import { mergeConfig } from 'vite'
import { portalsViteConfig } from 'vite-config'
import { analyzer } from 'vite-bundle-analyzer'
// Unless absolutely necessary, all changes should go into the shared vite configuration, not the individual portal configuration
const config = mergeConfig(portalsViteConfig, {
  plugins: [analyzer],
})

export default config
