import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import { useSourceAppConfigs } from '@/utils/hooks'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import { ChevronRightTwoTone } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import {
  ColumnSingleValueQueryFilter,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'

export type SynapsePortalBannersProps = {
  entityId: string
  dataCatalogEntityId?: string
  sourceAppConfigTableID?: string
}

/**
 *
 * @param props
 */
export default function SynapsePortalBanners({
  entityId,
  dataCatalogEntityId = 'syn61609402',
  sourceAppConfigTableID = 'syn45291362',
}: SynapsePortalBannersProps) {
  const dataCatalogAdditionalFilters: ColumnSingleValueQueryFilter[] = [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: 'id',
      operator: ColumnSingleValueFilterOperator.EQUAL,
      values: [entityId],
    },
  ]
  const { data: dataCatalogData } = useGetQueryResultBundleWithAsyncStatus({
    entityId: dataCatalogEntityId,
    query: {
      sql: `SELECT appId, link FROM ${dataCatalogEntityId}`,
      additionalFilters: dataCatalogAdditionalFilters,
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })

  const rowSet = dataCatalogData?.responseBody?.queryResult?.queryResults
  const hasPortalBanners = !!rowSet && rowSet?.rows.length > 0

  const appIds = rowSet?.rows.map(row => row.values[0]) as string[]

  const sourceAppConfigFilters: ColumnSingleValueQueryFilter[] = [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: 'appId',
      operator: ColumnSingleValueFilterOperator.EQUAL,
      values: appIds,
    },
  ]
  const sourceAppConfigs = useSourceAppConfigs(
    sourceAppConfigTableID,
    sourceAppConfigFilters,
  )
  const hasSourceAppConfigs = !!sourceAppConfigs && sourceAppConfigs.length > 0

  if (!hasPortalBanners || !hasSourceAppConfigs) {
    return <></>
  }

  // we have source app configs associated to this entity, let's render the banners
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        width: '100%',
        alignItems: 'center',
      }}
    >
      {sourceAppConfigs.map((appConfig, index) => {
        const dataCatalogRow = rowSet.rows.find(row => {
          return row.values[0] === appConfig.appId
        })
        const link = dataCatalogRow?.values[1] || appConfig.appURL
        return (
          <Box
            key={index}
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            flex={1}
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              padding: '16px',
              justifyContent: 'space-between',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
              textDecoration: 'none',
              pointer: 'cursor',
              '&:hover': {
                textDecoration: 'none !important',
              },
              width: '100%',
              alignItems: 'center',
              mt: '10px',
              mb: '10px',
            }}
          >
            <Box
              flex={1}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '10px',
              }}
            >
              <Box
                sx={{
                  '> *': {
                    height: '60px',
                  },
                }}
              >
                {appConfig?.logo}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  mr: '10px',
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  This resource is part of a Portal
                </Typography>
                <Typography variant="body1">
                  {' '}
                  Access it on the {appConfig.friendlyName}
                </Typography>
              </Box>
            </Box>
            <ChevronRightTwoTone />
          </Box>
        )
      })}
    </Box>
  )
}
