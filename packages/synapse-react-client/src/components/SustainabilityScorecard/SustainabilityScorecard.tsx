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
import { useSearchParams } from 'react-router'

export type MetricsConfig = {
  /** Name of the metric column in the table */
  key: string
  /** Display label for the metric */
  label: string
  /** Shown as a tooltip in SustainabilityScorecard and as summary text in SustainabilityScorecardSummary */
  text?: string
}

export type SustainabilityScorecardProps = {
  entityId: string
  sustainabilityReportLink: string
  metricsConfig: MetricsConfig[]
  /** Name of the URL search parameter used to filter the data. */
  searchParamKey: string
  /** The name of the column in the table to apply the filter to. */
  filterColumn: string
  // should we have prop for score?
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
  ALMANACK_SCORE = 'AlmanackScore',
}

/* SustainabilityScorecard component displays sustainability metrics and a dial based on the sustainability score of the entity. */
const SustainabilityScorecard = ({
  entityId,
  sustainabilityReportLink,
  metricsConfig,
  searchParamKey,
  filterColumn,
  sx,
}: SustainabilityScorecardProps) => {
  const selectedColumns = metricsConfig
    .map(metric => metric.key)
    // .concat(ExpectedColumns.SCORE_DESCRIPTOR)
    .concat(ExpectedColumns.ALMANACK_SCORE)

  const [searchParams] = useSearchParams()
  const searchValue = searchParams.get(searchParamKey ?? '')

  const sql = `SELECT ${selectedColumns.join(', ')} FROM ${entityId}`

  // const sustainabilitySql = `SELECT * FROM ${entityId} WHERE "${filterColumn}" = '${searchValue}'`
  const sustainabilitySql = `SELECT ${selectedColumns.join(
    ', ',
  )} FROM ${entityId} WHERE "${filterColumn}" = '${searchValue}'` // ideally use this and update storybook

  console.log('filterColumn', filterColumn)

  console.log('sus', sustainabilitySql)
  // console.log('sus 2', sustainabilitySql2)

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
    // ExpectedColumns.SCORE_DESCRIPTOR,
    ExpectedColumns.ALMANACK_SCORE,
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
