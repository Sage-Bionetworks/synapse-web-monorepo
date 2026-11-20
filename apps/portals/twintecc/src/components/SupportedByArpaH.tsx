import { Box, Link, Typography } from '@mui/material'
import { CIRCLE_PROGRAM_URL } from '@/config/resources'
import arpaHLogo from '../assets/arpah-logo.svg?url'
import styles from './SupportedByArpaH.module.scss'

export default function SupportedByArpaH() {
  return (
    <Box component="section" className={styles.section}>
      <img src={arpaHLogo} alt="ARPA-H" className={styles.logo} />
      <Box>
        <Typography variant="h2" className={styles.title}>
          Twin-TECC is supported by ARPA-H
        </Typography>
        <Typography className={styles.description}>
          The Twin-TECC portal is funded by Agreement Number AY2AX000255, from
          the Advanced Research Projects Agency for Health (ARPA-H). You can
          find more information about the CIRCLE program on its ARPA-H website.{' '}
          <Link
            href={CIRCLE_PROGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Visit the CIRCLE website
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}
