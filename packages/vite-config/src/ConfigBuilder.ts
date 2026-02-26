import { getPluginConfig, PluginConfigOptions } from './pluginConfig.js'
import baseConfig from './baseConfig.js'
import { mergeConfig } from 'vitest/config'
import {
  viteLibraryConfig,
  viteLibraryPreserveModulesConfig,
} from './vite-library-config.js'
import vitestConfig from './vitest-config.js'

export class ConfigBuilder {
  private includeLibraryConfig = false
  private preserveModules = false
  private buildLibEntry: string | string[] | undefined = undefined
  private includeVitestConfig = false
  private pluginConfigOptions: PluginConfigOptions = {}
  private configOverrides: Record<string, any> | null = null

  setIncludeReactConfig(includeReactConfig: boolean): ConfigBuilder {
    this.pluginConfigOptions.includeReactPlugins = includeReactConfig
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

  /**
   * When true, the library build will produce one output file per source module
   * (preserving the src/ directory structure in dist/) instead of code-split chunks.
   *
   * This enables consuming apps to resolve deep imports like
   * `my-package/components/Foo` directly to `dist/components/Foo.js`.
   *
   * Output is ESM-only (no CJS). Type declarations are emitted per-file
   * instead of a single rolled-up index.d.ts.
   */
  setPreserveModules(preserveModules: boolean): ConfigBuilder {
    this.preserveModules = preserveModules
    return this
  }

  setIncludeLibraryConfig(
    includeLibraryConfig: boolean,
    externalizeDepsOptions?: Parameters<
      typeof getPluginConfig
    >[0]['externalizeDepsOptions'],
  ): ConfigBuilder {
    this.includeLibraryConfig = includeLibraryConfig
    this.pluginConfigOptions.externalizeDepsOptions = externalizeDepsOptions
    return this
  }

  setConfigOverrides(configOverrides: Record<string, any>): ConfigBuilder {
    this.configOverrides = configOverrides
    return this
  }

  build() {
    let config = baseConfig
    if (this.includeLibraryConfig) {
      if (!this.buildLibEntry) {
        throw new Error(
          'buildLibEntry must be provided when includeLibraryConfig is true',
        )
      }
      const libraryConfig = this.preserveModules
        ? viteLibraryPreserveModulesConfig
        : viteLibraryConfig
      config = mergeConfig(config, libraryConfig)
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
          ...this.pluginConfigOptions,
          includeLibraryPlugins: this.includeLibraryConfig,
          preserveModules: this.preserveModules,
        }),
      })
    }
    if (this.configOverrides) {
      config = mergeConfig(config, this.configOverrides)
    }

    return config
  }
}
