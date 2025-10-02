import { Box, Link, Stack, Typography } from '@mui/material'
import styles from './ClassicSupportedByNIABanner.module.scss'
import { ReactComponent as NIALogo } from '../assets/NIA.svg'

const ClassicSupportedByNIABanner = () => {
  return (
    <Box className={styles.root}>
      <NIALogo className={styles.logo} />
      <Stack className={styles.textContainer}>
        <Typography variant="headline1">
          CLASSIC is supported by the National Institute on Aging (NIA)
        </Typography>
        <p className={styles.bodyText}>
          The CLASSIC portal is funded by award number U24AG081810, from the
          National Institute on Aging (NIA). You can find more information about
          the NIA and its research initiatives on the NIA website.{' '}
          <Link
            href="https://www.nia.nih.gov"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Visit the NIA website
          </Link>
        </p>
      </Stack>
    </Box>
  )
}

export default ClassicSupportedByNIABanner
