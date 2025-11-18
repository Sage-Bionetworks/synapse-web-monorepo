import SourceAppImage from '@/components/SourceAppImage'
import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import Palettes from '@/react-ui/theme/palette'
import { PaletteOptions } from '@mui/material'
import { ReactNode } from 'react'
import { BUNDLE_MASK_QUERY_RESULTS } from '../SynapseConstants'
import { QueryFilter } from '@sage-bionetworks/synapse-types'

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
}

// A static SourceAppConfig to use as a fallback in case the request to get source app configs fails
export const STATIC_SOURCE_APP_CONFIG: SourceAppConfig = {
  appId: '',
  appURL: '',
  description: '',
  friendlyName: 'Synapse',
  requestAffiliation: false,
  logo: <></>,
  isPublicized: true,
  palette: { ...Palettes.palette },
  shortDescription: '',
}

export const useSourceAppConfigs = (
  sourceAppConfigTableID: string,
  additionalFilters?: QueryFilter[],
): SourceAppConfig[] | undefined => {
  const { data: tableQueryResult } = useGetQueryResultBundleWithAsyncStatus({
    entityId: sourceAppConfigTableID,
    query: {
      sql: `SELECT * FROM ${sourceAppConfigTableID}`,
      limit: 75,
      additionalFilters,
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })
  const rowSet = tableQueryResult?.responseBody?.queryResult?.queryResults
  // transform row data to SourceAppConfig[]
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

  const rows = rowSet?.rows
  return rows?.map(row => {
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
      primary: Palettes.generatePalette(rowVals[primaryColorColIndex] ?? ''),
      secondary: Palettes.generatePalette(
        rowVals[secondaryColorColIndex] ?? '',
      ),
    }
    const appId = rowVals[appIdColIndex] == null ? '' : rowVals[appIdColIndex]
    const appURL =
      rowVals[appURLColIndex] == null ? '' : rowVals[appURLColIndex]
    const description =
      rowVals[descriptionColIndex] == null ? '' : rowVals[descriptionColIndex]
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
    const sourceAppConfig: SourceAppConfig = {
      appId,
      appURL,
      description,
      friendlyName,
      requestAffiliation,
      logo,
      isPublicized,
      palette: appPalette,
      shortDescription,
    }
    return sourceAppConfig
  })
}
