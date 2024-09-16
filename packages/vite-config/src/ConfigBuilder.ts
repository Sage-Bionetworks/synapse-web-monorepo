import { getPluginConfig, PluginConfigOptions } from './pluginConfig.js'
import viteConfig from './vite-config.js'
import { mergeConfig } from 'vitest/config'
import viteLibraryConfig from './vite-library-config.js'
import vitestConfig from './vitest-config.js'

export class ConfigBuilder {
  private includeReactConfig = false
  private includeLibraryConfig = false
  private buildLibEntry: string | string[] | undefined = undefined
  private includeVitestConfig = false
  private pluginConfigOptions: PluginConfigOptions = {}
  private configOverrides: Record<string, any> | null = null

  setIncludeReactConfig(includeReactConfig: boolean): ConfigBuilder {
    this.includeReactConfig = includeReactConfig
    return this
  }

  setIncludeVitestConfig(includeVitestConfig: boolean): ConfigBuilder {
    this.includeVitestConfig = includeVitestConfig
    return this
  }

  setBuildLibEntry(buildLibEntry: string | string[]): ConfigBuilder {
    this.buildLibEntry = buildLibEntry
    return this
  }

  setIncludeLibraryConfig(includeLibraryConfig: boolean): ConfigBuilder {
    this.includeLibraryConfig = includeLibraryConfig
    return this
  }

  setPluginConfigOptions(
    pluginConfigOptions: PluginConfigOptions,
  ): ConfigBuilder {
    this.pluginConfigOptions = pluginConfigOptions
    return this
  }

  setConfigOverrides(configOverrides: Record<string, any>): ConfigBuilder {
    this.configOverrides = configOverrides
    return this
  }

  build() {
    let config = viteConfig
    if (this.includeLibraryConfig) {
      if (!this.buildLibEntry) {
        throw new Error(
          'buildLibEntry must be provided when includeLibraryConfig is true',
        )
      }
      config = mergeConfig(config, viteLibraryConfig)
      config = mergeConfig(config, {
        build: { lib: { entry: this.buildLibEntry } },
      })
    }
    if (this.includeVitestConfig) {
      config = mergeConfig(config, vitestConfig)
    }
    if (this.pluginConfigOptions) {
      config = mergeConfig(config, {
        plugins: getPluginConfig({
          includeReactPlugins: this.includeReactConfig,
          includeLibraryPlugins: this.includeLibraryConfig,
        }),
      })
    }
    if (this.configOverrides) {
      config = mergeConfig(config, this.configOverrides)
    }

    return config
  }
}
