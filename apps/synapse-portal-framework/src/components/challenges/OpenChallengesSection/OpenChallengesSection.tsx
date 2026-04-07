import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Button, Typography } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { Link as RouterLink } from 'react-router'
import { SynapseConstants } from 'synapse-react-client'
import ColorfulPortalCardWithChips from 'synapse-react-client/components/BasePortalCard/ColorfulPortalCardWithChips/ColorfulPortalCardWithChips'
import { useGetFullTableQueryResults } from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdAndVersionFromSqlStatement } from 'synapse-react-client/utils/functions/index'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import getChallengeKeywordsFromRow from '../../../utils/getChallengeKeywordsFromRow'
import { ReactComponent as Vectors } from '../assets/openChallengesVectors.svg'
import styles from './OpenChallengesSection.module.scss'

type OpenChallengesSectionProps = {
  sql: string
  borderRadiusPx?: number
}

const OpenChallengesSection = ({
  sql,
  borderRadiusPx,
}: OpenChallengesSectionProps): React.ReactNode => {
  const { entityId } = parseEntityIdAndVersionFromSqlStatement(sql)

  const queryBundleRequest: QueryBundleRequest = {
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: entityId ?? '',
    query: { sql },
  }

  const { data: queryResultBundle } =
    useGetFullTableQueryResults(queryBundleRequest)

  const dataRows = queryResultBundle?.queryResult?.queryResults.rows ?? []

  return (
    <Box className={styles.OpenChallengesSection__root}>
      <Box className={styles.OpenChallengesSection__headerSection}>
        <Box className={styles.OpenChallengesSection__titleWrapper}>
          <Vectors
            className={styles.OpenChallengesSection__titleSectionVectors}
          />
          <Typography
            variant="headline1"
            className={styles.OpenChallengesSection__sectionTitle}
          >
            OpenChallenges
          </Typography>
        </Box>
        <Typography
          variant="body1"
          className={styles.OpenChallengesSection__sectionSubtitle}
        >
          A curated collection of crowdsourced challenges within Synapse and
          beyond.
        </Typography>
      </Box>
      <Box className={styles.OpenChallengesSection__container}>
        {dataRows.map(row => {
          const chipsArray = getChallengeKeywordsFromRow(row, queryResultBundle)

          return (
            <ColorfulPortalCardWithChips
              key={row.rowId}
              title={
                row.values[getFieldIndex('title', queryResultBundle)] ?? ''
              }
              description={
                row.values[getFieldIndex('description', queryResultBundle)] ??
                ''
              }
              learnMoreLink={
                row.values[getFieldIndex('learnMoreLink', queryResultBundle)] ??
                ''
              }
              chips={chipsArray}
              tag={row.values[getFieldIndex('status', queryResultBundle)] ?? ''}
              backgroundImage={
                row.values[
                  getFieldIndex('backgroundImage', queryResultBundle)
                ] ?? ''
              }
              backgroundColor={
                row.values[getFieldIndex('cardColor', queryResultBundle)] ?? ''
              }
              entityId={entityId}
              borderRadiusPx={borderRadiusPx}
            />
          )
        })}
      </Box>
      <Button
        component={RouterLink}
        variant="outlined"
        to="/OpenChallenges"
        endIcon={<ArrowForwardIcon />}
        className={styles.OpenChallengesSection__viewChallengeListButton}
      >
        View All Challenges
      </Button>
    </Box>
  )
}

export default OpenChallengesSection
