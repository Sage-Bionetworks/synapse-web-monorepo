import React from 'react'
import { Box, Typography } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdAndVersionFromSqlStatement } from 'synapse-react-client/utils/functions'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import styles from './NewChallengesSection.module.scss'
import { ReactComponent as Vectors } from '../assets/newChallengesVectors.svg'
import ColorfulPortalCardWithChips from 'synapse-react-client/components/BasePortalCard/ColorfulPortalCardWithChips/ColorfulPortalCardWithChips'
import { stringListToArray } from 'synapse-react-client/utils/functions/StringUtils'
import filterRowsByLandingPageSection from '../../../utils/filterRowsByLandingPageSection'

type NewChallengesSectionProps = {
  sql: string
  borderRadiusPx?: number
}

const NewChallengesSection = ({
  sql,
  borderRadiusPx,
}: NewChallengesSectionProps): React.ReactNode => {
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

  const filteredDataRows = filterRowsByLandingPageSection(
    'new',
    dataRows,
    queryResultBundle!,
  )

  return (
    <Box className={styles.NewChallengesSection__root}>
      <Box className={styles.NewChallengesSection__headerSection}>
        <Vectors className={styles.NewChallengesSection__titleSectionVectors} />
        <Typography
          variant="headline1"
          className={styles.NewChallengesSection__sectionTitle}
        >
          New Challenges
        </Typography>
      </Box>
      <Box className={styles.NewChallengesSection__container}>
        {filteredDataRows.map(row => {
          const chips =
            row.values[getFieldIndex('chips', queryResultBundle)] ?? ''
          const chipsArray = stringListToArray(chips)

          return (
            <ColorfulPortalCardWithChips
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
              learnMoreLink={
                row.values[getFieldIndex('learnMoreLink', queryResultBundle)] ??
                ''
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

export default NewChallengesSection
