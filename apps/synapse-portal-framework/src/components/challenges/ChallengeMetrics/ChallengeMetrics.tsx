import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
import styles from './ChallengeMetrics.module.scss'
import { ReactComponent as BkgImage } from '../assets/metricsBkg.svg'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdFromSqlStatement } from 'synapse-react-client/utils/functions'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'

interface StatContainerProps {
  stat: string
  label: string
  description: string
}

type ChallengeMetricsProps = {
  sql: string
}

const StatContainer = ({
  stat,
  label,
  description,
}: StatContainerProps): React.ReactNode => (
  <Stack className={styles.statContainer}>
    <Typography variant="headline1" className={styles.statHeaderText}>
      {stat}
    </Typography>
    <Typography className={styles.statLabelText}>{label}</Typography>
    <Typography className={styles.statDescriptionText}>
      {description}
    </Typography>
  </Stack>
)

const ChallengeMetrics = ({ sql }: ChallengeMetricsProps): React.ReactNode => {
  const entityId = parseEntityIdFromSqlStatement(sql)

  const queryBundleRequest: QueryBundleRequest = {
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    query: {
      sql,
    },
  }

  const { data: queryResultBundle } =
    useGetQueryResultBundle(queryBundleRequest)

  const dataRows = queryResultBundle?.queryResult!.queryResults.rows ?? []

  enum ExpectedColumns {
    TITLE = 'title',
    DESCRIPTION = 'description',
    METRIC_VALUE = 'metric_value',
  }

  const metricValueColumnIndex = getFieldIndex(
    ExpectedColumns.METRIC_VALUE,
    queryResultBundle,
  )

  const titleColumnIndex = getFieldIndex(
    ExpectedColumns.TITLE,
    queryResultBundle,
  )

  const descriptionColumnIndex = getFieldIndex(
    ExpectedColumns.DESCRIPTION,
    queryResultBundle,
  )

  return (
    <Box className={styles.root}>
      <BkgImage className={styles.bkgImage} preserveAspectRatio="none" />
      <Stack className={styles.metricsContainer}>
        {dataRows.map((metric, idx) => {
          return (
            <StatContainer
              key={idx}
              stat={metric.values[metricValueColumnIndex] ?? ''}
              label={metric.values[titleColumnIndex] ?? ''}
              description={metric.values[descriptionColumnIndex] ?? ''}
            />
          )
        })}
      </Stack>
    </Box>
  )
}

export default ChallengeMetrics
