import {
  Box,
  Link as MuiLink,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { getFieldIndex } from '@/utils/functions/queryUtils'

import { SxProps, Theme } from '@mui/material'
import {
  getMetricValues,
  SUSTAINABILITY_ICON_COLORS,
  SustainabilityScorecardBaseProps,
} from './SustainabilityScorecardUtils'
import { InfoTwoTone } from '@mui/icons-material'
import { CheckIcon } from '@/assets/icons/terms/CheckIcon'
import NoContentAvailable from '../SynapseTable/NoContentAvailable'
import Dial from './Dial'
import { Link as RouterLink, useLocation } from 'react-router'

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
  sustainabilityReportLink?: string
}

type MetricRowProps = {
  metricValues: string[]
  metricsConfig: MetricsConfig[]
}

const MetricRow = ({
  metricValues,
  metricsConfig,
}: MetricRowProps): React.ReactNode => {
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
  metricsConfig,
  scoreDescriptorColumnName,
  queryRequest,
  sx,
  sustainabilityReportLink,
}: SustainabilityScorecardProps): React.ReactNode => {
  const { data: queryResultBundle, isLoading } =
    useGetQueryResultBundle(queryRequest)
  const location = useLocation()
  const search = location.search

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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        padding: '20px',
        gap: '20px',
        ...sx,
      }}
    >
      <Stack sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Typography variant="subsectionHeader">Sustainability Index</Typography>
        <Dial scoreDescriptor={scoreDescriptor ?? ''} />
      </Stack>
      <Stack sx={{ flex: 1, gap: '2px' }}>
        <MetricRow metricValues={metricValues} metricsConfig={metricsConfig} />
        {sustainabilityReportLink && (
          <MuiLink
            component={RouterLink}
            to={{ pathname: sustainabilityReportLink, search }}
            sx={{ padding: '4px 20px', fontSize: '14px' }}
          >
            View this tool’s sustainability and reusability report
          </MuiLink>
        )}
      </Stack>
    </Box>
  )
}

export default SustainabilityScorecard
