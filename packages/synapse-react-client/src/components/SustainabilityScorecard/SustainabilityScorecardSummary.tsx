import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { SynapseConstants } from '@/utils'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import {
  getDial,
  getMetricValues,
  SUSTAINABILITY_ICON_COLORS,
} from './SustainabilityScorecardUtils'
import { Box, Card, Skeleton, Stack, Typography, useTheme } from '@mui/material'
import { ReactNode } from 'react'
import { MetricsConfig } from './SustainabilityScorecard'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'

export type SustainabilityScorecardSummaryProps = {
  entityId: string
  text: ReactNode
  metricsConfig: MetricsConfig[]
}

type MetricSummaryRowProps = {
  label: string
  text: ReactNode
  index: number
  metrics: string[]
}

enum ExpectedColumns {
  DEPENDENCY_FILES = 'dependencyFiles',
  TEST_FILES = 'testFiles',
  README_FILES = 'readmeFiles',
  SCORE_DESCRIPTOR = 'scoreDescriptor',
}

const MetricSummaryRowProps = ({
  label,
  text,
  metrics,
  index,
}: MetricSummaryRowProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '24px 32px',
        alignItems: 'center',
      }}
    >
      <div>
        <Typography variant="headline3" sx={{ marginBottom: '12px' }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ color: 'grey.700' }}>
          {text}
        </Typography>
      </div>
      {metrics[index] === 'true' ? (
        <CheckCircleIcon
          sx={{
            marginLeft: 'auto',
            fill: SUSTAINABILITY_ICON_COLORS.check,
            width: '32px',
            height: '32px',
          }}
        />
      ) : (
        <CancelIcon
          sx={{
            marginLeft: 'auto',
            fill: SUSTAINABILITY_ICON_COLORS.close,
            width: '32px',
            height: '32px',
          }}
        />
      )}
    </Box>
  )
}

const SustainabilityScorecardSummary = ({
  entityId,
  text,
  metricsConfig,
}: SustainabilityScorecardSummaryProps) => {
  const theme = useTheme()
  const sql = `SELECT ${ExpectedColumns.DEPENDENCY_FILES}, ${ExpectedColumns.TEST_FILES}, ${ExpectedColumns.README_FILES}, ${ExpectedColumns.SCORE_DESCRIPTOR} FROM ${entityId}`

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
  const { data: queryResultBundle, isLoading } =
    useGetQueryResultBundle(queryBundleRequest)

  const data = queryResultBundle?.queryResult!.queryResults

  const scoreDescriptorColIndex = getFieldIndex(
    ExpectedColumns.SCORE_DESCRIPTOR,
    queryResultBundle,
  )

  const scoreDescriptor = data?.rows[0].values[scoreDescriptorColIndex]

  const dial = getDial(scoreDescriptor ?? '', true)

  const metrics = getMetricValues(
    data?.rows[0],
    queryResultBundle,
    metricsConfig,
  )

  if (isLoading) {
    return <Skeleton width={'100%'} height={'90px'} />
  }

  return (
    <Stack>
      <Box
        sx={{
          display: 'flex',
          gap: '40px',
          marginBottom: '30px',
          padding: '4px 12px 4px 0px',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="headline1" sx={{ marginBottom: '10px' }}>
            Sustainability Index
          </Typography>
          {text}
        </Box>
        {dial}
      </Box>
      <Card>
        {metricsConfig.map((metric, index) => (
          <Box
            key={metric.key}
            sx={{
              borderBottom:
                index !== metricsConfig.length - 1
                  ? `1px solid ${theme.palette.grey[300]}`
                  : undefined,
            }}
          >
            <MetricSummaryRowProps
              label={metric.label}
              text={metric.text}
              index={index}
              metrics={metrics}
            />
          </Box>
        ))}
      </Card>
    </Stack>
  )
}

export default SustainabilityScorecardSummary
