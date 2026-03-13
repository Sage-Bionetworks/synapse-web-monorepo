import { Box, Typography } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import React from 'react'
import ColorfulPortalCardWithChips from 'synapse-react-client/components/BasePortalCard/ColorfulPortalCardWithChips/ColorfulPortalCardWithChips'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdAndVersionFromSqlStatement } from 'synapse-react-client/utils/functions/index'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { ReactComponent as Vectors } from '../assets/newsVectors.svg'
import styles from './ChallengeNewsSection.module.scss'

type ChallengeNewsSectionProps = {
  sql: string
  borderRadiusPx?: number
  cardSize?: 'small' | 'medium' | 'large'
}

const ChallengeNewsSection = ({
  sql,
  borderRadiusPx,
  cardSize,
}: ChallengeNewsSectionProps): React.ReactNode => {
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
    useGetQueryResultBundle(queryBundleRequest)

  const dataRows = queryResultBundle?.queryResult?.queryResults.rows ?? []

  if (dataRows.length === 0) {
    return null
  }

  return (
    <Box className={styles.ChallengeNewsSection__root}>
      <Box className={styles.ChallengeNewsSection__headerSection}>
        <Vectors className={styles.ChallengeNewsSection__titleSectionVectors} />
        <Typography
          variant="headline1"
          className={styles.ChallengeNewsSection__sectionTitle}
        >
          Synapse Challenges in the News
        </Typography>
      </Box>
      <Box className={styles.ChallengeNewsSection__container}>
        {dataRows.map(row => {
          return (
            <ColorfulPortalCardWithChips
              cardSize={cardSize}
              key={row.rowId}
              description={
                row.values[getFieldIndex('description', queryResultBundle)] ??
                ''
              }
              descriptionTitle={
                row.values[
                  getFieldIndex('descriptionTitle', queryResultBundle)
                ] ?? ''
              }
              learnMoreLink={
                row.values[getFieldIndex('learnMoreLink', queryResultBundle)] ??
                ''
              }
              buttonOverrideText={
                row.values[
                  getFieldIndex('buttonOverrideText', queryResultBundle)
                ] ?? ''
              }
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

export default ChallengeNewsSection
