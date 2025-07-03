import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { SynapseConstants } from '@/utils'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import {
  buildSustainabilitySql,
  getDial,
  getMetricValues,
  getSelectedColumns,
  SUSTAINABILITY_ICON_COLORS,
  SustainabilityScorecardBaseProps,
} from './SustainabilityScorecardUtils'
import { Box, Card, Skeleton, Stack, Typography, useTheme } from '@mui/material'
import { ReactNode } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import { useSearchParams } from 'react-router'

export type SustainabilityScorecardSummaryProps =
  SustainabilityScorecardBaseProps & {
    text: React.ReactNode
  }

type MetricSummaryRowProps = {
  label: string
  text: ReactNode
  index: number
  metricValues: string[]
}

const MetricSummaryRow = ({
  label,
  text,
  metricValues,
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
      {metricValues[index] === 'true' ? (
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
  scoreDescriptorColumnName,
  searchParamKey,
  filterColumn,
}: SustainabilityScorecardSummaryProps) => {
  const theme = useTheme()
  const [searchParams] = useSearchParams()
  const searchValue = searchParams.get(searchParamKey)

  const selectedColumns = getSelectedColumns(
    metricsConfig,
    scoreDescriptorColumnName,
  )

  const sql = buildSustainabilitySql(
    entityId,
    filterColumn,
    searchValue,
    selectedColumns,
  )

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

  if (isLoading) {
    return <Skeleton width={'100%'} height={'90px'} />
  }

  const data = queryResultBundle?.queryResult!.queryResults

  const scoreDescriptorColIndex = getFieldIndex(
    scoreDescriptorColumnName,
    queryResultBundle,
  )

  const scoreDescriptor = data?.rows[0].values[scoreDescriptorColIndex]

  const dial = getDial(scoreDescriptor ?? '', true)

  const metricValues = getMetricValues(
    data?.rows[0],
    queryResultBundle,
    metricsConfig,
  )

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
            <MetricSummaryRow
              label={metric.label}
              text={metric.text}
              index={index}
              metricValues={metricValues}
            />
          </Box>
        ))}
      </Card>
    </Stack>
  )
}

export default SustainabilityScorecardSummary
