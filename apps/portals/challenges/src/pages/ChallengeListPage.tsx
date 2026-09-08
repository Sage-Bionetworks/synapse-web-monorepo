import { allChallengesSearch } from '@/config/synapseConfig/allChallenges'
import { Typography } from '@mui/material'
import React from 'react'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import styles from './ChallengeListPage.module.scss'

const ChallengeListPage = (): React.ReactNode => {
  return (
    <>
      <div className={styles.banner}>
        <img
          className={styles.bannerLeft}
          src="/openChallengesBannerLeft.svg"
        />
        <img
          className={styles.bannerRight}
          src="/openChallengesBannerRight.svg"
        />
      </div>
      <div className={styles.titleSection}>
        <img
          className={styles.titleSectionVectors}
          src="/openChallengesVectors.svg"
        />
        <Typography variant="h3" className={styles.title}>
          Open Challenges
        </Typography>
      </div>
      <div className={styles.content}>
        <SearchQueryWrapperPlotNav
          {...allChallengesSearch}
          shouldDeepLink={true}
        />
      </div>
    </>
  )
}

export default ChallengeListPage
