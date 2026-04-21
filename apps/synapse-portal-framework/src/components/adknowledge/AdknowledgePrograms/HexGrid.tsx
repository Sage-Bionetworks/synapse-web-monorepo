// import { useState } from 'react'
import styles from './HexGrid.module.scss'
// import { Button } from '@mui/material'
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
import { Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useNavigate } from 'react-router'

type HexGridProps = {
  sql: string
}

function HexGrid({ sql }: HexGridProps) {
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

  enum ExpectedColumns {
    PROGRAM = 'Program',
    HOMEPAGE_IMAGE = 'Homepage Image',
    SHORT_DESCRIPTION = 'Short Description',
  }

  const programColumnIndex = getFieldIndex(
    ExpectedColumns.PROGRAM,
    queryResultBundle,
  )

  const homepageImageColumnIndex = getFieldIndex(
    ExpectedColumns.HOMEPAGE_IMAGE,
    queryResultBundle,
  )

  const shortDescriptionColumnIndex = getFieldIndex(
    ExpectedColumns.SHORT_DESCRIPTION,
    queryResultBundle,
  )

  const getDetailsUrl = (row: Row) =>
    `/Explore/Programs/DetailsPage?Program=${encodeURIComponent(
      row.values[programColumnIndex] ?? '',
    )}`

  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))

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
            {dataRows.map((program, index) => (
              <li
                key={index}
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
              </li>
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
                href={getDetailsUrl(selected)}
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
