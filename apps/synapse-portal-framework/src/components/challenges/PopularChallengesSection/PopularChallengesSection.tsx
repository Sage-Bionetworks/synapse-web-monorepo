import { Box, Typography } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import React from 'react'
import ColorfulPortalCardWithChips from 'synapse-react-client/components/BasePortalCard/ColorfulPortalCardWithChips/ColorfulPortalCardWithChips'
import { useGetFullTableQueryResults } from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdAndVersionFromSqlStatement } from 'synapse-react-client/utils/functions/index'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import getChallengeKeywordsFromRow from '../../../utils/getChallengeKeywordsFromRow'
import { ReactComponent as Vectors } from '../assets/popularChallengesVectors.svg'
import styles from './PopularChallengesSection.module.scss'

type PopularChallengesSectionProps = {
  sql: string
  borderRadiusPx?: number
}

const PopularChallengesSection = ({
  sql,
  borderRadiusPx,
}: PopularChallengesSectionProps): React.ReactNode => {
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
    <Box className={styles.PopularChallengesSection__root}>
      <Box className={styles.PopularChallengesSection__headerSection}>
        <Vectors
          className={styles.PopularChallengesSection__titleSectionVectors}
        />
        <Typography
          variant="headline1"
          className={styles.PopularChallengesSection__sectionTitle}
        >
          Popular Challenges
        </Typography>
      </Box>
      <Box className={styles.PopularChallengesSection__container}>
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
    </Box>
  )
}

export default PopularChallengesSection
