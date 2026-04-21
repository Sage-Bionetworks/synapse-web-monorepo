import { Button, Stack } from '@mui/material'
import styles from './AdknowledgePrograms.module.scss'
import HexGrid from 'synapse-react-client/components/HexGrid/HexGrid'

type AdknowledgeProgramsProps = {
  sql: string
}

function AdknowledgePrograms({ sql }: AdknowledgeProgramsProps) {
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
      <HexGrid
        sql={sql}
        titleColName="Program"
        imageColName="Homepage Image"
        descriptionColName="Short Description"
      />
    </Stack>
  )
}

export default AdknowledgePrograms
