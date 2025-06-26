import { Box, Link, Skeleton, Stack, Tooltip, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { SynapseConstants } from '@/utils'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'

import { SxProps, Theme } from '@mui/material'
import {
  getDial,
  getMetricValues,
  SUSTAINABILITY_ICON_COLORS,
} from './SustainabilityScorecardUtils'
import { InfoTwoTone } from '@mui/icons-material'
import { CheckIcon } from '@/assets/icons/terms/CheckIcon'

export type MetricsConfig = {
  key: string
  label: string
  text?: string
}

export type SustainabilityScorecardProps = {
  entityId: string
  sustainabilityReportLink: string
  metricsConfig: MetricsConfig[]
  toolName?: string
  sx?: SxProps<Theme>
}

type MetricRowProps = {
  metrics: string[]
  metricsConfig: MetricsConfig[]
}

const MetricRow = ({ metrics, metricsConfig }: MetricRowProps) => {
  return (
    <>
      {metricsConfig.map((metric, index) => (
        <Box sx={{ display: 'flex', padding: '4px 20px' }} key={metric.key}>
          <Typography
            variant="smallText1"
            sx={{ alignItems: 'center', display: 'flex', gap: '8px' }}
          >
            {metric.label}
            <Tooltip title={metric.text} placement="top">
              <InfoTwoTone
                sx={{
                  width: '18px',
                  height: '18px',
                  color: 'primary.contrastText',
                }}
              />
            </Tooltip>
          </Typography>
          {metrics[index] === 'true' ? (
            <Box
              sx={{
                backgroundColor: SUSTAINABILITY_ICON_COLORS.check,
                borderRadius: '50%',
                width: 18,
                height: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 'auto',
              }}
            >
              <CheckIcon
                sx={{ color: 'primary.contrastText', fontSize: '11px' }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                backgroundColor: SUSTAINABILITY_ICON_COLORS.close,
                borderRadius: '50%',
                width: 18,
                height: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 'auto',
              }}
            >
              <CloseIcon
                sx={{ color: 'primary.contrastText', fontSize: '14px' }}
              />
            </Box>
          )}
        </Box>
      ))}
    </>
  )
}

enum ExpectedColumns {
  DEPENDENCY_FILES = 'dependencyFiles',
  TEST_FILES = 'testFiles',
  README_FILES = 'readmeFiles',
  SCORE_DESCRIPTOR = 'scoreDescriptor',
}

const SustainabilityScorecard = ({
  entityId,
  sustainabilityReportLink,
  metricsConfig,
  toolName,
  sx,
}: SustainabilityScorecardProps) => {
  const selectedColumns = metricsConfig
    .map(metric => metric.key)
    .concat(ExpectedColumns.SCORE_DESCRIPTOR)

  console.log('toolname in sustainability scorecard', toolName)

  const sql = `SELECT ${selectedColumns.join(', ')} FROM ${entityId}`

  console.log('og sql', sql)

  const sustainabilitySql = `SELECT * FROM '${entityId} WHERE "tool.toolName" = '${toolName}'`

  const queryBundleRequest: QueryBundleRequest = {
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    query: {
      sql: sustainabilitySql,
    },
  }

  const { data: queryResultBundle, isLoading } =
    useGetQueryResultBundle(queryBundleRequest)

  const data = queryResultBundle?.queryResult!.queryResults

  console.log('queryResultBundle', queryResultBundle)
  console.log('data', data)

  const scoreDescriptorColIndex = getFieldIndex(
    ExpectedColumns.SCORE_DESCRIPTOR,
    queryResultBundle,
  )

  const scoreDescriptor = data?.rows[0].values[scoreDescriptorColIndex]

  const metrics = getMetricValues(
    data?.rows[0],
    queryResultBundle,
    metricsConfig,
  )
  const dial = getDial(scoreDescriptor ?? '')

  if (isLoading) {
    return <Skeleton width={'100%'} height={'100%'} />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '20px',
        gap: '20px',
        ...sx,
      }}
    >
      <Stack sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Typography variant="subsectionHeader">Sustainability Index</Typography>
        {dial}
      </Stack>
      <Stack sx={{ flex: 1, gap: '2px' }}>
        <MetricRow metrics={metrics} metricsConfig={metricsConfig} />
        <Link href={sustainabilityReportLink} sx={{ padding: '4px 20px' }}>
          View this tool’s sustainability and reusability report
        </Link>
      </Stack>
    </Box>
  )
}

export default SustainabilityScorecard
