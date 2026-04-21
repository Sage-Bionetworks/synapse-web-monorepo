import styles from './HexGrid.module.scss'
import { parseEntityIdFromSqlStatement } from 'synapse-react-client/utils/functions/SqlFunctions'
import {
  FileHandleAssociateType,
  QueryBundleRequest,
  Row,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import { useGetFullTableQueryResults } from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { ImageFileHandle } from 'synapse-react-client/components/widgets/ImageFileHandle'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import { useState } from 'react'
import { Button, ButtonBase, Typography, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router'
import { Link as RouterLink } from 'react-router'

export type HexGridProps = {
  sql: string
  titleColName: string
  imageColName: string
  descriptionColName: string
}

function HexGrid({
  sql,
  titleColName,
  imageColName,
  descriptionColName,
}: HexGridProps) {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<Row | null>(null)

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

  const programColumnIndex = getFieldIndex(titleColName, queryResultBundle)

  const homepageImageColumnIndex = getFieldIndex(
    imageColName,
    queryResultBundle,
  )

  const shortDescriptionColumnIndex = getFieldIndex(
    descriptionColName,
    queryResultBundle,
  )

  const getDetailsUrl = (row: Row) =>
    `/Explore/Programs/DetailsPage?Program=${encodeURIComponent(
      row.values[programColumnIndex] ?? '',
    )}`

  const SIDEBAR_BREAKPOINT = '(max-width: 1100px)'
  const isMobile = useMediaQuery(SIDEBAR_BREAKPOINT)

  const handleHexClick = (row: Row) => {
    // for mobile, navigate to the details page on click. For desktop, set the selected program to show details in the sidebar
    if (isMobile) {
      navigate(getDetailsUrl(row))
      return
    }
    setSelected(row)
  }

  return (
    <div className={styles.hexSlat}>
      <div className={styles.layoutWrapper}>
        <div className={styles.gridWrapper}>
          <ul className={styles.hexGrid}>
            {dataRows.map(program => (
              <ButtonBase
                component="li"
                key={program.rowId}
                className={styles.hex}
                onClick={() => handleHexClick(program)}
              >
                <div className={styles.hexIn}>
                  <Typography variant="headline3" className={styles.hexTitle}>
                    {program.values[programColumnIndex]}
                  </Typography>
                  <ImageFileHandle
                    fileHandleAssociation={{
                      fileHandleId:
                        program.values[homepageImageColumnIndex] ?? '',
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

        <aside className={styles.sidebar}>
          {!selected ? (
            <div className={styles.sidebarEmpty}>
              <Typography variant="body1">
                Select a tile to view details
              </Typography>
            </div>
          ) : (
            <div>
              <ImageFileHandle
                fileHandleAssociation={{
                  fileHandleId: selected.values[homepageImageColumnIndex] ?? '',
                  associateObjectId: entityId,
                  associateObjectType: FileHandleAssociateType.TableEntity,
                }}
                imgProps={{ className: styles.sidebarIcon }}
              />
              <Typography variant="headline3" className={styles.sidebarTitle}>
                {selected.values[programColumnIndex]}
              </Typography>
              <Typography variant="body1" className={styles.sidebarDetails}>
                {selected.values[shortDescriptionColumnIndex]}
              </Typography>
              <Button
                component={RouterLink}
                to={getDetailsUrl(selected)}
                className={styles.sidebarBtn}
                variant="contained"
              >
                View Program
              </Button>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

export default HexGrid
