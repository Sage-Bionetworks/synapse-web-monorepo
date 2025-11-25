import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import { ReactComponent as LongevityLogo } from './assets/longevityconsortiumlogo.svg'
import styles from './FundingBanner.module.scss'

export const FundingBanner: React.FC = () => {
  return (
    <Box className={styles.bannerContainer}>
      <Box className={styles.contentWrapper}>
        <Box className={styles.logoBox}>
          <LongevityLogo className={styles.logo} />
        </Box>
        <Box className={styles.textContent}>
          <Typography variant="body1" className={styles.headlineText}>
            Seeking U.S. Researchers: Apply by January 26, 2026
          </Typography>
          <Typography variant="body1" className={styles.mainText}>
            For up to <strong>$132,500</strong> to expand Exceptional Longevity
            research with NIA-funded data.{' '}
            <Link
              href="https://www.longevityconsortium.org/funding-opportunity/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkText}
            >
              View the full FOA and submission requirements here.
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default FundingBanner
