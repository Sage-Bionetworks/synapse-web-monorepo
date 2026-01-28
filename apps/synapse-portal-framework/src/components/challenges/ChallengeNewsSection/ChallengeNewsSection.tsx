import React from 'react'
import { Box, Typography } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdAndVersionFromSqlStatement } from 'synapse-react-client/utils/functions'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import styles from './ChallengeNewsSection.module.scss'
import { ReactComponent as Vectors } from '../assets/newsVectors.svg'
import ColorfulPortalCardWithChips from 'synapse-react-client/components/BasePortalCard/ColorfulPortalCardWithChips/ColorfulPortalCardWithChips'

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
          const chips = row.values[getFieldIndex('chips', queryResultBundle)]
          let chipsArray: string[]

          if (Array.isArray(chips)) {
            chipsArray = chips.map(String)
          } else {
            try {
              const parsed = JSON.parse(chips ?? '[]')
              chipsArray = Array.isArray(parsed)
                ? parsed.map(String)
                : [String(parsed)]
            } catch {
              chipsArray = chips ? [String(chips)] : []
            }
          }

          return (
            <ColorfulPortalCardWithChips
              cardSize={cardSize}
              key={row.rowId}
              title={
                row.values[getFieldIndex('title', queryResultBundle)] ?? ''
              }
              subtitle={
                row.values[getFieldIndex('challengeName', queryResultBundle)] ??
                ''
              }
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
              chips={chipsArray}
              tag={
                row.values[
                  getFieldIndex('registrationStatus', queryResultBundle)
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
