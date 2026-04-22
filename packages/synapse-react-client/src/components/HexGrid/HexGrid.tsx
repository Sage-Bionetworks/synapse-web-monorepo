import styles from './HexGrid.module.scss'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import {
  FileHandleAssociateType,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '@/utils'
import { useGetFullTableQueryResults } from '@/synapse-queries/entity/useGetQueryResultBundle'
import { ImageFileHandle } from '@/components/widgets/ImageFileHandle'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { ButtonBase, Typography } from '@mui/material'

// Column values resolved by name so consumers don't need the indices that are only known inside HexGrid.
export type HexRowData = {
  title: string
  imageFileHandleId: string | null
  description: string | null
  entityId: string
}

type HexGridProps = {
  sql: string
  titleColName: string
  imageColName: string
  descriptionColName: string
  onRowClick?: (rowData: HexRowData) => void
}

function HexGrid({
  sql,
  titleColName,
  imageColName,
  descriptionColName,
  onRowClick,
}: HexGridProps) {
  const entityId = parseEntityIdFromSqlStatement(sql)
  const queryBundleRequest: QueryBundleRequest = {
    entityId,
    query: { sql },
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  }

  const { data: queryResultBundle } =
    useGetFullTableQueryResults(queryBundleRequest)

  const dataRows = queryResultBundle?.queryResult?.queryResults.rows ?? []

  const titleColIndex = getFieldIndex(titleColName, queryResultBundle)

  const imageColIndex = getFieldIndex(imageColName, queryResultBundle)

  const descColIndex = getFieldIndex(descriptionColName, queryResultBundle)

  return (
    <div className={styles.hexSlat}>
      <div className={styles.gridWrapper}>
        <ul className={styles.hexGrid}>
          {dataRows.map(row => (
            <ButtonBase
              component="li"
              key={row.rowId}
              className={styles.hex}
              onClick={() =>
                onRowClick?.({
                  title: row.values[titleColIndex] ?? '',
                  imageFileHandleId: row.values[imageColIndex] ?? null,
                  description: row.values[descColIndex] ?? null,
                  entityId,
                })
              }
            >
              <div className={styles.hexIn}>
                <Typography variant="headline3" className={styles.hexTitle}>
                  {row.values[titleColIndex]}
                </Typography>
                <ImageFileHandle
                  fileHandleAssociation={{
                    fileHandleId: row.values[imageColIndex] ?? '',
                    associateObjectId: entityId,
                    associateObjectType: FileHandleAssociateType.TableEntity,
                  }}
                  imgProps={{ className: styles.hexIcon }}
                />
              </div>
            </ButtonBase>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HexGrid
