import { Box, SxProps, PaletteOptions } from '@mui/material'
import React from 'react'
import { Typography } from 'synapse-react-client'
import { useGetQueryResultBundleWithAsyncStatus } from 'synapse-react-client/dist/utils/hooks/SynapseAPI'
import { BUNDLE_MASK_QUERY_RESULTS } from 'synapse-react-client/dist/utils/SynapseConstants'
import { SourceAppConfig } from './SourceAppConfigs'
import palette, {
  generatePalette,
} from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import SourceAppImage from './SourceAppImage'
import Skeleton from '@mui/material/Skeleton'
import { SkeletonTable } from 'synapse-react-client/dist/assets/skeletons/SkeletonTable'

export type SourceAppProps = {
  isAccountCreationTextVisible?: boolean
}

/**
 * This is where the app specific UI will be shown
 * @param props
 * @returns
 */
export const SourceApp = (props: SourceAppProps) => {
  const { isAccountCreationTextVisible = false } = props
  return (
    <>
      <div className="SourceAppLogo">{useSourceApp()?.logo}</div>
      {isAccountCreationTextVisible && (
        <div>
          <p>
            A Sage account is required to log into{' '}
            {useSourceApp()?.friendlyName}.
          </p>
          <p>Create an account to get started.</p>
        </div>
      )}
    </>
  )
}

export const SourceAppLogo: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  const sourceAppConfig = useSourceApp()
  return (
    <Box className="SourceAppLogo" sx={sx}>
      {sourceAppConfig ? (
        sourceAppConfig.logo
      ) : (
        <Skeleton variant="rectangular" width={420} height={60} />
      )}
    </Box>
  )
}

export const SourceAppDescription = () => {
  const sourceAppConfig = useSourceApp()
  return sourceAppConfig ? (
    <Typography className="description" variant="body1">
      {sourceAppConfig?.description}
    </Typography>
  ) : (
    <SkeletonTable numRows={7} numCols={1} />
  )
}

export const useSourceAppConfigs = (): SourceAppConfig[] | undefined => {
  const { data: tableQueryResult } = useGetQueryResultBundleWithAsyncStatus({
    entityId: 'syn45291362',
    query: {
      sql: `SELECT * FROM syn45291362`,
      limit: 75,
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

  const rows = rowSet?.rows
  return rows?.map(row => {
    const rowVals = row.values
    const fileHandleId = rowVals[logoFileHandleColIndex]
    const logoHref = `https://repo-prod.prod.sagebase.org/file/v1/file/${fileHandleId}?fileAssociateType=TableEntity&fileAssociateId=syn45291362&redirect=true`
    const logo = <SourceAppImage href={logoHref} />
    const appPalette: PaletteOptions = {
      ...palette,
      primary: generatePalette(rowVals[primaryColorColIndex] ?? ''),
      secondary: generatePalette(rowVals[secondaryColorColIndex] ?? ''),
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

export const useSourceApp = (
  targetSourceAppId?: string,
): SourceAppConfig | undefined => {
  const sourceAppId = targetSourceAppId ?? localStorage.getItem('sourceAppId')
  const sourceAppConfigs = useSourceAppConfigs()
  return sourceAppConfigs?.find(config => config.appId === sourceAppId)
}

export default SourceApp
