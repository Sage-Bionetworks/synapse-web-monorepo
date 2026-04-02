import { Box, Typography } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import React from 'react'
import ColorfulPortalCardWithChips from 'synapse-react-client/components/BasePortalCard/ColorfulPortalCardWithChips/ColorfulPortalCardWithChips'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdAndVersionFromSqlStatement } from 'synapse-react-client/utils/functions/index'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import styles from './GetInvolvedSection.module.scss'

type GetInvolvedSectionProps = {
  sql: string
  borderRadiusPx?: number
  cardSize?: 'small' | 'medium' | 'large'
}

const GetInvolvedSection = ({
  sql,
  borderRadiusPx,
  cardSize,
}: GetInvolvedSectionProps): React.ReactNode => {
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

  return (
    <Box className={styles.GetInvolvedSection__root}>
      <Box className={styles.GetInvolvedSection__header}>
        <Typography
          variant="headline1"
          className={styles.GetInvolvedSection__sectionTitle}
        >
          Get Involved
        </Typography>
      </Box>
      <Box className={styles.GetInvolvedSection__container}>
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

export default GetInvolvedSection
