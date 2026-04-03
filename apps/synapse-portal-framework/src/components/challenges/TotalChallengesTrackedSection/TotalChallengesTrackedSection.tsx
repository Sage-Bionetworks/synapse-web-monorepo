import { Box, Typography } from '@mui/material'
import React from 'react'
import { QueryWrapperSynapsePlotRowClickEvent } from 'synapse-react-client'
import { SynapsePlot } from 'synapse-react-client/components/Plot/SynapsePlot'
import { generateCompressedQueryURL } from 'synapse-react-client/utils/functions/deepLinkingUtils'
import styles from './TotalChallengesTrackedSection.module.scss'

type TotalChallengesTrackedSectionProps = {
  allChallengesSql: string
}

const TotalChallengesTrackedSection = ({
  allChallengesSql,
}: TotalChallengesTrackedSectionProps): React.ReactNode => {
  const handlePlotClick = async (
    event: QueryWrapperSynapsePlotRowClickEvent,
  ) => {
    const year = event.row.values[0]
    if (!year || isNaN(Number(year))) return
    const initQuery = { sql: allChallengesSql }
    const hasWhere = /\bwhere\b/i.test(allChallengesSql)
    const currentQuery = {
      sql: `${allChallengesSql} ${
        hasWhere ? 'AND' : 'WHERE'
      } startYear <= ${year}`,
    }
    const url = await generateCompressedQueryURL(
      '/OpenChallenges/',
      0,
      currentQuery,
      initQuery,
    )
    window.location.href = url
  }

  return (
    <Box className={styles.TotalChallengesTrackedSection__root}>
      <Typography
        variant="headline1"
        className={styles.TotalChallengesTrackedSection__sectionTitle}
      >
        Total Challenges Tracked
      </Typography>
      <SynapsePlot
        synapsePlotWidgetParams={{
          query: 'SELECT startYear, cumulativeCount FROM syn74327949',
          type: 'bar',
          hoverinfo: 'y',
        }}
        customPlotParams={{
          selectedFacets: [],
          additionalFilters: [],
          onCustomPlotClick: event => {
            void handlePlotClick(event)
          },
        }}
      />
      <Typography
        variant="body1"
        color="textSecondary"
        textAlign="center"
        sx={{ mb: '50px' }}
      >
        *The plot does not include challenges that are planned beyond this year,
        or those with unspecified start dates.
      </Typography>
    </Box>
  )
}

export default TotalChallengesTrackedSection
