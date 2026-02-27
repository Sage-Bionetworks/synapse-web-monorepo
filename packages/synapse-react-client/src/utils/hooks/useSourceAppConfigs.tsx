import SourceAppImage from '@/components/SourceAppImage'
import SynapseClient from '@/synapse-client'
import Palettes from '@/theme/palette/Palettes'
import { Realm } from '@sage-bionetworks/synapse-client'
import { PaletteOptions } from '@mui/material'
import { ReactNode, useMemo } from 'react'
import { BUNDLE_MASK_QUERY_RESULTS } from '../SynapseConstants'
import { QueryFilter } from '@sage-bionetworks/synapse-types'
import { useQueries, useSuspenseQuery } from '@tanstack/react-query'
import { useSynapseContext } from '../context/SynapseContext'
import { tableQueryUseQueryDefaults } from '@/synapse-queries'
import { getRealmByIdQueryOptions } from '@/synapse-queries/realm/useRealmPrincipals'

export type SourceAppConfig = {
  appId: string // app ID used in the query params
  appURL: string // URL that points to the production version of this app
  friendlyName: string
  logo: ReactNode
  palette: PaletteOptions
  description: string
  requestAffiliation: boolean // If set to true, a special screen is shown requesting the user to fill out UserProfile.company
  isPublicized: boolean // If set to true, this will be included in the list of the available Sage Resources
  shortDescription: string
  defaultRealm: Realm
}

// A static SourceAppConfig to use as a fallback in case the request to get source app configs fails
export const STATIC_SOURCE_APP_CONFIG: SourceAppConfig = {
  appId: 'synapse.org',
  appURL: '',
  description: '',
  friendlyName: 'Synapse',
  requestAffiliation: false,
  logo: <></>,
  isPublicized: true,
  palette: { ...Palettes.palette },
  shortDescription: '',
  defaultRealm: {
    id: '0',
    name: 'Synapse',
  },
}

// Stable array reference to prevent infinite re-renders
const FALLBACK_SOURCE_APP_CONFIGS = [STATIC_SOURCE_APP_CONFIG]

type SourceAppConfigWithRealmId = Omit<SourceAppConfig, 'defaultRealm'> & {
  realmId: string
}

export const useSourceAppConfigs = (
  sourceAppConfigTableID: string,
  additionalFilters?: QueryFilter[],
): SourceAppConfig[] | undefined => {
  const { accessToken, synapseClient, keyFactory } = useSynapseContext()

  const queryBundleRequest = {
    entityId: sourceAppConfigTableID,
    query: {
      sql: `SELECT * FROM ${sourceAppConfigTableID}`,
      limit: 75,
      additionalFilters,
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType:
      'org.sagebionetworks.repo.model.table.QueryBundleRequest' as const,
  }

  const { data: tableQueryResult } = useSuspenseQuery({
    ...tableQueryUseQueryDefaults,
    queryKey: keyFactory.getEntityTableQueryResultWithAsyncStatusQueryKey(
      queryBundleRequest,
      false,
    ),
    queryFn: async () => {
      try {
        return await SynapseClient.getQueryTableAsyncJobResults(
          queryBundleRequest,
          accessToken,
        )
      } catch (_error) {
        // Return null on error to signal fallback behavior
        return null
      }
    },
  })

  const rowSet = tableQueryResult?.responseBody?.queryResult?.queryResults

  // transform row data to SourceAppConfigWithRealmId[]
  const headers = rowSet?.headers
  const appIdColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'appId',
  )!
  const appURLColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'appURL',
  )!
  const friendlyNameColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'friendlyName',
  )!
  const descriptionColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'description',
  )!
  const logoFileHandleColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'logo',
  )!
  const requestAffiliationColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'requestAffiliation',
  )!
  const primaryColorColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'primaryColor',
  )!
  const secondaryColorColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'secondaryColor',
  )!
  const isPublicizedColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'isPublicized',
  )!
  const shortDescriptionColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'shortDescription',
  )!
  const realmIdColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'realmId',
  )!

  const rows = rowSet?.rows

  // Extract configs with realmIds first
  const configsWithRealmId: SourceAppConfigWithRealmId[] | undefined = useMemo(
    () =>
      rows?.map(row => {
        const rowVals = row.values
        const fileHandleId = rowVals[logoFileHandleColIndex]
        const friendlyName = rowVals[friendlyNameColIndex] ?? ''
        const logo = (
          <SourceAppImage
            sourceAppConfigTableID={sourceAppConfigTableID}
            fileHandleId={fileHandleId}
            friendlyName={friendlyName}
          />
        )
        const appPalette: PaletteOptions = {
          ...Palettes.palette,
          primary: Palettes.generatePalette(
            rowVals[primaryColorColIndex] ?? '',
          ),
          secondary: Palettes.generatePalette(
            rowVals[secondaryColorColIndex] ?? '',
          ),
        }
        const appId =
          rowVals[appIdColIndex] == null ? '' : rowVals[appIdColIndex]
        const appURL =
          rowVals[appURLColIndex] == null ? '' : rowVals[appURLColIndex]
        const description =
          rowVals[descriptionColIndex] == null
            ? ''
            : rowVals[descriptionColIndex]
        const shortDescription =
          rowVals[shortDescriptionColIndex] == null
            ? ''
            : rowVals[shortDescriptionColIndex]
        const requestAffiliation =
          rowVals[requestAffiliationColIndex] == null
            ? false
            : rowVals[requestAffiliationColIndex] == 'true'
        const isPublicized =
          rowVals[isPublicizedColIndex] == null
            ? true
            : rowVals[isPublicizedColIndex] == 'true'
        const realmId =
          rowVals[realmIdColIndex] == null ? '0' : rowVals[realmIdColIndex]
        return {
          appId,
          appURL,
          description,
          friendlyName,
          requestAffiliation,
          logo,
          isPublicized,
          palette: appPalette,
          shortDescription,
          realmId,
        }
      }),
    [
      rows,
      logoFileHandleColIndex,
      friendlyNameColIndex,
      sourceAppConfigTableID,
      primaryColorColIndex,
      secondaryColorColIndex,
      appIdColIndex,
      appURLColIndex,
      descriptionColIndex,
      shortDescriptionColIndex,
      requestAffiliationColIndex,
      isPublicizedColIndex,
      realmIdColIndex,
    ],
  )

  // Fetch all realms in parallel
  const realmQueries = useQueries({
    queries:
      configsWithRealmId?.map(config =>
        getRealmByIdQueryOptions(config.realmId, keyFactory, synapseClient),
      ) ?? [],
  })

  // Combine configs with realm data
  return useMemo(() => {
    // If query returned null (error case) or no rowSet, return static config fallback
    if (!tableQueryResult || !rowSet) {
      return FALLBACK_SOURCE_APP_CONFIGS
    }

    if (!configsWithRealmId) return undefined

    // Check if all realm queries have succeeded
    const allRealmsLoaded = realmQueries.every(query => query.isSuccess)
    if (!allRealmsLoaded) return undefined

    return configsWithRealmId.map((config, index) => {
      const realm = realmQueries[index].data
      return {
        ...config,
        defaultRealm: realm,
      }
    })
  }, [configsWithRealmId, realmQueries, tableQueryResult, rowSet])
}
