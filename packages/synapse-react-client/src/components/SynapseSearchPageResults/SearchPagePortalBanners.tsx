import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import { useSourceAppConfigs } from '@/utils/hooks'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import { Box, Link, Typography } from '@mui/material'
import {
  ColumnSingleValueQueryFilter,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'

export type SearchPagePortalBannersProps = {
  entityIds: string[]
  dataCatalogEntityId?: string
  sourceAppConfigTableID?: string
}

/**
 * Portal banner based on entities found in the first page of search results.
 */
export default function SearchPagePortalBanners({
  entityIds,
  dataCatalogEntityId = 'syn61609402',
  sourceAppConfigTableID = 'syn45291362',
}: SearchPagePortalBannersProps) {
  // Query data catalog to find portal mappings for the entity IDs
  const dataCatalogAdditionalFilters: ColumnSingleValueQueryFilter[] =
    entityIds.length > 0
      ? [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
            columnName: 'id',
            operator: ColumnSingleValueFilterOperator.IN,
            values: entityIds,
          },
        ]
      : []

  const { data: dataCatalogData } = useGetQueryResultBundleWithAsyncStatus(
    {
      entityId: dataCatalogEntityId,
      query: {
        sql: `SELECT appId, link FROM ${dataCatalogEntityId}`,
        additionalFilters: dataCatalogAdditionalFilters,
      },
      partMask: BUNDLE_MASK_QUERY_RESULTS,
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    },
    {
      enabled: entityIds.length > 0,
    },
  )

  const rowSet = dataCatalogData?.responseBody?.queryResult?.queryResults
  const hasPortalBanners = !!rowSet && rowSet?.rows.length > 0
  const appIds = rowSet?.rows.map(row => row.values[0]) as string[]

  // Get source app configurations for the found portal app IDs
  const sourceAppConfigFilters: ColumnSingleValueQueryFilter[] =
    appIds && appIds.length > 0
      ? [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
            columnName: 'appId',
            operator: ColumnSingleValueFilterOperator.IN,
            values: appIds,
          },
        ]
      : []

  const sourceAppConfigs = useSourceAppConfigs(
    sourceAppConfigTableID,
    sourceAppConfigFilters,
  )
  const hasSourceAppConfigs = !!sourceAppConfigs && sourceAppConfigs.length > 0

  if (!hasPortalBanners || !hasSourceAppConfigs) {
    return null
  }

  return (
    <>
      {sourceAppConfigs.map((appConfig, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: 'flex',
              padding: '32px',
              backgroundColor: 'secondary.100',
              borderRadius: '8px',
              transition: 'background-color 0.3s',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '50px',
              boxShadow:
                '0 4px 10px 0 rgba(0, 0, 0, 0.10), 0 1px 1px 0 rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box>
              <Typography
                variant="smallText1"
                sx={{ color: 'grey.900', mt: '4px', lineHeight: '20px' }}
              >
                Looks like you’re searching for information about{' '}
                {appConfig.shortDescription}{' '}
                <Link
                  component={'a'}
                  href={appConfig.appURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: theme => `${theme.palette.grey[900]} !important`,
                    textDecorationColor: theme =>
                      `${theme.palette.grey[900]} !important`,
                  }}
                >
                  Visit the {appConfig.friendlyName}
                </Link>
                . {appConfig.description}
              </Typography>
            </Box>
            <Box
              sx={{
                '> *': {
                  height: '48px',
                  width: 'auto',
                },
              }}
            >
              {appConfig?.logo}
            </Box>
          </Box>
        )
      })}
    </>
  )
}
