import {
  useGetEntityHeaders,
  useGetQueryResultBundleWithAsyncStatus,
} from '@/synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import { Box } from '@mui/material'
import { SynapseHotDropItem } from './SynapseHotdropsItem'
import { ReferenceList } from '@sage-bionetworks/synapse-types'
import styles from './HotdropsAndNews.module.scss'

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
      <Box className={styles.container} sx={{ color: 'primary.100' }}>
        {entityHeaders.results.map(entityHeader => (
          <SynapseHotDropItem
            key={entityHeader.id}
            entityHeader={entityHeader}
          />
        ))}
      </Box>
    </>
  )
}
