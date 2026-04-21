import { Button, Stack, Typography } from '@mui/material'
import styles from './AdknowledgePrograms.module.scss'
import HexGrid from './HexGrid'

type AdknowledgeProgramsProps = {
  sql: string
}

function AdknowledgePrograms({ sql }: AdknowledgeProgramsProps) {
  return (
    <div className={styles.adknowledgeProgramsContainer}>
      <Stack className={styles.adknowledgeTitleSection}>
        <Typography
          variant="headline1"
          className={styles.adknowledgeProgramsTitle}
        >
          Programs
        </Typography>
        <Typography
          variant="smallText1"
          className={styles.adknowledgeProgramsDescription}
        >
          These initiatives accelerate breakthroughs by producing, curating, and
          providing access to extensive datasets and resources relevant to
          AD/ADRD. Delve into program-specific data to drive forward your own
          research.
        </Typography>
        <Button
          variant="contained"
          className={styles.adknowledgeProgramsButton}
          href="https://sagebionetworks.jira.com/servicedesk/customer/portal/12/group/34"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute Data
        </Button>
      </Stack>
      <div className="adknowledgeProgramsVisualization">
        <HexGrid sql={sql} />
      </div>
    </div>
  )
}

export default AdknowledgePrograms
