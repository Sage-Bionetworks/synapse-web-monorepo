import { SourceAppConfig } from './SourceAppConfigs'
import { PaletteOptions } from '@mui/material'
import React from 'react'
import {
  Palettes,
  SynapseConstants,
  SynapseQueries,
} from 'synapse-react-client'
import SourceAppImage from './SourceAppImage'
import { sourceAppConfigTableID } from '../resources'

// A static SourceAppConfig to use as a fallback in case the request to get source app configs fails
export const STATIC_SOURCE_APP_CONFIG: SourceAppConfig = {
  appId: '',
  appURL: '',
  description: '',
  friendlyName: 'Sage Bionetworks',
  requestAffiliation: false,
  logo: <></>,
  isPublicized: true,
  palette: { ...Palettes.palette },
}

export const useSourceAppConfigs = (): SourceAppConfig[] | undefined => {
  const { data: tableQueryResult } =
    SynapseQueries.useGetQueryResultBundleWithAsyncStatus({
      entityId: sourceAppConfigTableID,
      query: {
        sql: `SELECT * FROM ${sourceAppConfigTableID}`,
        limit: 75,
      },
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
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

  const rows = rowSet?.rows
  return rows?.map(row => {
    const rowVals = row.values
    const fileHandleId = rowVals[logoFileHandleColIndex]
    const logo = <SourceAppImage fileHandleId={fileHandleId} />
    const appPalette: PaletteOptions = {
      ...Palettes.palette,
      primary: Palettes.generatePalette(rowVals[primaryColorColIndex] ?? ''),
      secondary: Palettes.generatePalette(
        rowVals[secondaryColorColIndex] ?? '',
      ),
    }
    const sourceAppConfig: SourceAppConfig = {
      appId: rowVals[appIdColIndex] ?? '',
      appURL: rowVals[appURLColIndex] ?? '',
      description: rowVals[descriptionColIndex] ?? '',
      friendlyName: rowVals[friendlyNameColIndex] ?? '',
      requestAffiliation:
        rowVals[requestAffiliationColIndex] == 'true' ?? false,
      logo,
      isPublicized: rowVals[isPublicizedColIndex] == 'true' ?? true,
      palette: appPalette,
    }
    return sourceAppConfig
  })
}
