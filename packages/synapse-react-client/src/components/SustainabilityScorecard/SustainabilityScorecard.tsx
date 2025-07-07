import { Box, Skeleton, Stack, Tooltip, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { SynapseConstants } from '@/utils'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'

import { SxProps, Theme } from '@mui/material'
import {
  buildSustainabilitySql,
  getDial,
  getMetricValues,
  getSelectedColumns,
  SUSTAINABILITY_ICON_COLORS,
  SustainabilityScorecardBaseProps,
} from './SustainabilityScorecardUtils'
import { InfoTwoTone } from '@mui/icons-material'
import { CheckIcon } from '@/assets/icons/terms/CheckIcon'
import { useSearchParams } from 'react-router'
import NoContentAvailable from '../SynapseTable/NoContentAvailable'

export type MetricsConfig = {
  /** Name of the metric column in the table */
  key: string
  /** Display label for the metric */
  label: string
  /** Shown as a tooltip in SustainabilityScorecard and as summary text in SustainabilityScorecardSummary */
  text?: string
}

export type SustainabilityScorecardProps = SustainabilityScorecardBaseProps & {
  sx?: SxProps<Theme>
}

type MetricRowProps = {
  metricValues: string[]
  metricsConfig: MetricsConfig[]
}

const MetricRow = ({ metricValues, metricsConfig }: MetricRowProps) => {
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
          {metricValues[index] === 'true' ? (
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

/* SustainabilityScorecard component displays sustainability metrics and a dial based on the sustainability score of the entity. */
const SustainabilityScorecard = ({
  entityId,
  metricsConfig,
  searchParamKey,
  filterColumn,
  scoreDescriptorColumnName,
  sx,
}: SustainabilityScorecardProps) => {
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
    return <Skeleton width={'100%'} height={'100%'} />
  }

  const data = queryResultBundle?.queryResult!.queryResults

  if (data?.rows?.length === 0) {
    return (
      <Stack sx={{ display: 'flex', padding: '20px', ...sx }}>
        <Typography sx={{ paddingBottom: '20px' }} variant="subsectionHeader">
          Sustainability Index
        </Typography>
        <NoContentAvailable />
      </Stack>
    )
  }

  const scoreDescriptorColIndex = getFieldIndex(
    scoreDescriptorColumnName,
    queryResultBundle,
  )

  const scoreDescriptor = data?.rows[0].values[scoreDescriptorColIndex]

  const metricValues = getMetricValues(
    data?.rows[0],
    queryResultBundle,
    metricsConfig,
  )
  const dial = getDial(scoreDescriptor ?? '')

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
        <MetricRow metricValues={metricValues} metricsConfig={metricsConfig} />
        {/* TODO: Add sustainability report link when available */}
        {/* {sustainabilityReportLink && (
          <Link href={sustainabilityReportLink} sx={{ padding: '4px 20px' }}>
            View this tool’s sustainability and reusability report
          </Link>
        )} */}
      </Stack>
    </Box>
  )
}

export default SustainabilityScorecard
