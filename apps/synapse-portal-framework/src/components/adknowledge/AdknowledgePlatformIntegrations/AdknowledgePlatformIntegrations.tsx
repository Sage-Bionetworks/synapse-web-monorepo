import { Button, Stack } from '@mui/material'
import styles from './AdknowledgePlatformIntegrations.module.scss'
import { ReactComponent as CavaticaLogo } from '../assets/cavatica.svg'
import { ReactComponent as TerraLogo } from '../assets/terra.svg'
import { ReactComponent as ADDILogo } from '../assets/addi.svg'
import { Link as RouterLink } from 'react-router'

export default function AdknowledgePlatformIntegrations() {
  return (
    <Stack className={styles.platformIntegrationsContainer}>
      <Button
        component={RouterLink}
        to="/Analysis%20Platforms"
        variant="contained"
        className={styles.platformIntegrationsButton}
      >
        Enable TRE Integrations
      </Button>
      <div className={styles.platformIntegrationsLogoContainer}>
        <a
          href="https://www.alzheimersdata.org/"
          target="_blank"
          rel="noreferrer"
        >
          <ADDILogo />
        </a>
        <a href="https://www.cavatica.org/" target="_blank" rel="noreferrer">
          <CavaticaLogo />
        </a>
        <a href="https://terra.bio/" target="_blank" rel="noreferrer">
          <TerraLogo />
        </a>
      </div>
    </Stack>
  )
}
