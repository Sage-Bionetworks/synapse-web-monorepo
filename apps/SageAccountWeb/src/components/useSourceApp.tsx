import { sageAccountWebThemeOverrides } from '@/style/theme'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useLocalStorageValue } from '@react-hookz/web'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
} from 'react'
import { getSearchParam } from '../URLUtils'
import { SourceAppConfig } from './SourceAppConfigs'
import {
  STATIC_SOURCE_APP_CONFIG,
  useSourceAppConfigs,
} from 'synapse-react-client/utils/hooks/useSourceAppConfigs'
import { useLastLoginInfoState } from 'synapse-react-client/components/Authentication/LastLoginInfo'
import { defaultMuiThemeOptions } from 'synapse-react-client/react-ui/theme/DefaultTheme'

export type SourceAppContextType = SourceAppConfig

const SOURCE_APP_ID_QUERY_PARAM_KEY = 'appId'
const SOURCE_APP_ID_LOCALSTORAGE_KEY = 'sourceAppId'
export const SYNAPSE_SOURCE_APP_ID = 'synapse.org'
export const ARCUS_SOURCE_APP_ID = 'arcusbio'

/**
 * This must be exported to use the context in class components.
 */
export const SourceAppContext = createContext<SourceAppContextType>(
  STATIC_SOURCE_APP_CONFIG,
)

export type SourceAppContextProviderProps = PropsWithChildren<{
  sourceAppId?: string
}>

function useConfigureSourceAppFromQueryParams() {
  const { set: setLocalStorageAppId } = useLocalStorageValue(
    SOURCE_APP_ID_LOCALSTORAGE_KEY,
  )

  useEffect(() => {
    const appIdFromSearchParam = getSearchParam(SOURCE_APP_ID_QUERY_PARAM_KEY)
    if (appIdFromSearchParam) {
      setLocalStorageAppId(appIdFromSearchParam)
    }
  }, [setLocalStorageAppId])
}

/**
 * Synchronizes the current state of the `currentSourceAppName` localStorage value.
 * The value may be used at a later date in the Login component to inform a user if they have a OneSage account
 * that was used for a different application.
 */
export function useSynchronizeCurrentSourceAppNameForLogin(
  sourceApp?: SourceAppConfig,
) {
  const { currentSourceAppNameState } = useLastLoginInfoState()
  const { value: idFromLocalStorage } = useLocalStorageValue(
    SOURCE_APP_ID_LOCALSTORAGE_KEY,
  )

  useEffect(() => {
    if (idFromLocalStorage && sourceApp?.friendlyName) {
      currentSourceAppNameState.set(sourceApp.friendlyName)
    }
  }, [idFromLocalStorage, currentSourceAppNameState, sourceApp?.friendlyName])
}

/**
 * Provides context for the 'source app', which will be used for theming and branding so this app feels connected to the application the user is coming from.
 *
 * @param props sourceAppId: An optional source app ID to use. If not provided, the source app ID will be read from localStorage, or default to 'SAGE'.
 */
export function SourceAppProvider(props: SourceAppContextProviderProps) {
  const { children, sourceAppId: idFromProps } = props

  useConfigureSourceAppFromQueryParams()
  useSynchronizeCurrentSourceAppNameForLogin()

  const { value: idFromLocalStorage, set: setIdFromLocalStorage } =
    useLocalStorageValue(SOURCE_APP_ID_LOCALSTORAGE_KEY)

  const sourceAppId = idFromProps ?? idFromLocalStorage

  const sourceAppConfigs = useSourceAppConfigs(
    import.meta.env.VITE_SOURCE_APP_CONFIGS_TABLE_ID,
  )
  const defaultSageSourceApp =
    sourceAppConfigs?.find(config => config.appId === SYNAPSE_SOURCE_APP_ID) ??
    STATIC_SOURCE_APP_CONFIG

  // PORTALS-2746: Find target source app.  Fallback to synapse.org source app if target not found.
  const sourceApp = sourceAppConfigs?.find(
    config => config.appId === sourceAppId,
  )
  if (sourceAppConfigs !== undefined && sourceApp == undefined) {
    console.error(
      `Source appId '${sourceAppId}' not found in the Synapse configuration table (${
        import.meta.env.VITE_SOURCE_APP_CONFIGS_TABLE_ID
      })!`,
    )
    if (idFromProps == null) {
      // The invalid sourceAppId came from localStorage; reset it to the default
      setIdFromLocalStorage(SYNAPSE_SOURCE_APP_ID)
    }
  }

  const theme = useMemo(() => {
    if (sourceApp?.palette) {
      return createTheme(defaultMuiThemeOptions, sageAccountWebThemeOverrides, {
        palette: sourceApp.palette,
      })
    } else {
      return createTheme(defaultMuiThemeOptions, sageAccountWebThemeOverrides)
    }
  }, [sourceApp?.palette])

  return (
    <SourceAppContext.Provider value={sourceApp ?? defaultSageSourceApp}>
      {/* The theme is determined by the sourceApp, so render the ThemeProvider here*/}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SourceAppContext.Provider>
  )
}

export function useSourceApp(): SourceAppContextType {
  const context = useContext(SourceAppContext)
  if (context === undefined) {
    console.error('useSourceApp must be used within a SourceAppProvider')
    return STATIC_SOURCE_APP_CONFIG
  }
  return context
}

/**
 * useSourceAppId can be used if the only needed value is the source app ID, and
 * the appId is not provided via props to the context provider.
 * Will be much faster than useSourceApp, which uses the source app config table
 * @returns
 */
export function useSourceAppId(): string | undefined {
  useConfigureSourceAppFromQueryParams()
  const { value: appId } = useLocalStorageValue(SOURCE_APP_ID_LOCALSTORAGE_KEY)
  const appIdString = typeof appId === 'string' ? appId : undefined
  return appIdString
}
