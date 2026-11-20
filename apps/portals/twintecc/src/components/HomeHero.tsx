import ScienceOutlined from '@mui/icons-material/ScienceOutlined'
import { Box, Button, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { storeRedirectURLForOneSageLoginAndGotoURL } from 'synapse-react-client/utils/AppUtils/index'
import { useSynapseContext } from 'synapse-react-client/utils/context/index'
import { useOneSageURL } from 'synapse-react-client/utils/hooks/useOneSageURL'
import { MODELS_EXPLORE_PATH, TWINTECC_HELP_EMAIL } from '@/config/resources'
import styles from './HomeHero.module.scss'

function PerformerTeamAction() {
  const { isAuthenticated } = useSynapseContext()
  const oneSageUrl = useOneSageURL()

  if (isAuthenticated) {
    return (
      <Button
        component={RouterLink}
        to={MODELS_EXPLORE_PATH}
        variant="contained"
        color="secondary"
        className={styles.action}
      >
        Work on a Model
      </Button>
    )
  }
  return (
    <Button
      variant="contained"
      color="secondary"
      className={styles.action}
      onClick={() =>
        storeRedirectURLForOneSageLoginAndGotoURL(oneSageUrl.toString())
      }
    >
      Sign In to Your Account
    </Button>
  )
}

export default function HomeHero() {
  return (
    <Box component="section" className={styles.hero}>
      <Box className={styles.content}>
        <Typography className={styles.betaBadge}>
          <ScienceOutlined fontSize="inherit" />
          <span>
            <strong>Beta!</strong> Some features are still in progress
          </span>
        </Typography>
        <Typography variant="h1" className={styles.title}>
          A shared home for researchers advancing ICU care under ARPA-H’s CIRCLE
          program.
        </Typography>
        <Typography className={styles.summary}>
          The Twin-TECC Portal is the intake and discovery hub for digital twin
          models developed through CIRCLE, ARPA-H’s program to transform care
          for critically ill patients. CIRCLE teams are building computational
          models that track how a patient’s immune system responds during
          critical illness, with the goal of helping clinicians intervene before
          organ damage takes hold.
        </Typography>
        <Typography className={styles.performerTeams}>
          For Performer Teams
        </Typography>
        <PerformerTeamAction />
        <Typography className={styles.help}>
          For help accessing your project, contact{' '}
          <Link href={`mailto:${TWINTECC_HELP_EMAIL}`} className={styles.email}>
            {TWINTECC_HELP_EMAIL}
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}
