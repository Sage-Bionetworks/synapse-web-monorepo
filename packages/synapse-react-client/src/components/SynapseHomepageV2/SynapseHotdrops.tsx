import {
  useGetEntityHeaders,
  useGetQueryResultBundleWithAsyncStatus,
} from '@/synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { SynapseHotDropItem } from './SynapseHotdropsItem'
import { ReferenceList } from '@sage-bionetworks/synapse-types'

export type SynapseHotDropsProps = {
  tableId: string
}

export function SynapseHotDrops({ tableId }: SynapseHotDropsProps) {
  const { data } = useGetQueryResultBundleWithAsyncStatus({
    entityId: tableId,
    query: {
      sql: `SELECT entity_id FROM ${tableId}`,
      limit: 10,
      sort: [{ column: 'created_on', direction: 'DESC' }],
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))

  const rowSet = data?.responseBody?.queryResult?.queryResults

  const references: ReferenceList = rowSet
    ? rowSet.rows.map(row => ({
        targetId: row.values[0]!,
      }))
    : []
  const { data: entityHeaders } = useGetEntityHeaders(references, {
    enabled: references?.length > 0,
  })
  if (!entityHeaders) {
    return <></>
  }

  return (
    <>
      <Box
        sx={{
          color: 'primary.100',
          display: 'grid',
          justifyItems: 'start',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '9px',
          maxWidth: '1300px',
          gridTemplateColumns: isMobileView ? '100%' : '50% 50%',
          m: 'auto',
          pt: isMobileView ? '0px' : '80px',
          pb: isMobileView ? '40px' : '60px',
        }}
      >
        {entityHeaders.results.map((entityHeader, index) => (
          <SynapseHotDropItem
            key={entityHeader.id}
            entityHeader={entityHeader}
            isMobileView={isMobileView}
          />
        ))}
      </Box>
    </>
  )
}
