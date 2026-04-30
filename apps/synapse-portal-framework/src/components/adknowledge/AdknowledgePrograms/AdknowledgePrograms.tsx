import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import styles from './AdknowledgePrograms.module.scss'
import HexGrid, {
  HexRowData,
} from 'synapse-react-client/components/HexGrid/HexGrid'
import { useNavigate, Link as RouterLink } from 'react-router'
import { useState } from 'react'
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'
import { ImageFileHandle } from 'synapse-react-client/components/widgets/ImageFileHandle'

type AdknowledgeProgramsProps = {
  sql: string
}

function AdknowledgePrograms({ sql }: AdknowledgeProgramsProps) {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<HexRowData | null>(null)
  const isMobile = useMediaQuery('(max-width: 1100px)')

  const getDetailsUrl = (data: HexRowData) =>
    `/Explore/Programs/DetailsPage?Program=${encodeURIComponent(data.title)}`

  const handleRowClick = (data: HexRowData) => {
    // for mobile, navigate to the details page on click. For desktop, set the selected program to show details in the sidebar
    if (isMobile) {
      navigate(getDetailsUrl(data))
      return
    }
    setSelected(data)
  }

  return (
    <Stack className={styles.adknowledgeProgramsContainer}>
      <Button
        variant="contained"
        className={styles.adknowledgeProgramsButton}
        href="https://sagebionetworks.jira.com/servicedesk/customer/portal/12/group/34"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contribute Data
      </Button>
      <div className={styles.layoutWrapper}>
        <HexGrid
          sql={sql}
          titleColName="Program"
          imageColName="Homepage Image"
          descriptionColName="Short Description"
          onRowClick={handleRowClick}
        />
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
                  fileHandleId: selected.imageFileHandleId ?? '',
                  associateObjectId: selected.entityId,
                  associateObjectType: FileHandleAssociateType.TableEntity,
                }}
                imgProps={{ className: styles.sidebarIcon }}
              />
              <Typography variant="headline3" className={styles.sidebarTitle}>
                {selected.title}
              </Typography>
              <Typography variant="body1" className={styles.sidebarDetails}>
                {selected.description}
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
    </Stack>
  )
}

export default AdknowledgePrograms
