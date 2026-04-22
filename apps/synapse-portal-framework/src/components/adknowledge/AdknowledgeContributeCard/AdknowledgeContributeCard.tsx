import { Button, Stack, Typography } from '@mui/material'
import styles from './AdknowledgeContributeCard.module.scss'
import { ReactComponent as ContributeIcon } from '../assets/contribution.svg'

function AdknowledgeContributeCard() {
  return (
    <Stack className={styles.adknowledgeContributeCardContainer}>
      <ContributeIcon className={styles.contributeIcon} />
      <div className={styles.textContainer}>
        <Typography
          variant="headline1"
          className={styles.adknowledgeContributeCardTitle}
        >
          Participate in the Community Data Contribution Program
        </Typography>
        <Typography
          variant="smallText1"
          className={styles.adknowledgeContributeCardDescription}
        >
          The AD Community Contribution program welcomes researchers, citizen
          scientists, and data enthusiasts to share their unique findings,
          datasets, and analytical tools, fostering a collaborative environment
          to accelerate discoveries in Alzheimer's research.
        </Typography>
      </div>
      <Button
        variant="contained"
        className={styles.adknowledgeContributeCardButton}
        href="https://sagebionetworks.jira.com/servicedesk/customer/portal/12/group/34/create/829"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contribute Data as a Community Member
      </Button>
    </Stack>
  )
}

export default AdknowledgeContributeCard
