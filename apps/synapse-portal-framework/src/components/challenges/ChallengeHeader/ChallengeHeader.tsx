import { Box, Stack, Typography } from '@mui/material'
import styles from './ChallengeHeader.module.scss'
import { ReactComponent as HeaderImg } from '../assets/challengeHeaderImg.svg'
import { ReactComponent as SageLogo } from '../assets/sageBionetworksLogo.svg'

const ChallengeHeader = () => {
  return (
    <Box className={styles.root}>
      <Box className={styles.imageWrapper}>
        <HeaderImg className={styles.headerImg} />
      </Box>
      <Stack className={styles.textContainer}>
        <Typography variant="headline1" className={styles.headerText}>
          Help find the next <span className={styles.eclipse}>cure.</span>
        </Typography>
        <Typography variant="headline2">
          Crowd-sourced challenge-based benchmarking is an emerging paradigm for
          the development and unbiased assessment of tools and algorithms that
          aim to translate biological and biomedical big data into useful
          knowledge. By distributing problems to large communities of expert
          volunteers, complex biological, health care, and life sciences
          questions can be addressed efficiently and quickly, while
          incentivizing adoption of new standards.
        </Typography>
        <Stack>
          <Typography variant="headline1" className={styles.classLogo}>
            Powered by
          </Typography>
          <SageLogo className={styles.sageLogo} />
        </Stack>
      </Stack>
    </Box>
  )
}

export default ChallengeHeader
