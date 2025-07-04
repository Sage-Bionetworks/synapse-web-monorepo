import { ReactComponent as LightDialPosition1 } from '../../assets/sustainability/dialPosition1.svg'
import { ReactComponent as LightDialPosition2 } from '../../assets/sustainability/dialPosition2.svg'
import { ReactComponent as LightDialPosition3 } from '../../assets/sustainability/dialPosition3.svg'
import { ReactComponent as LightDialPosition4 } from '../../assets/sustainability/dialPosition4.svg'
import { ReactComponent as DarkDialPosition1 } from '../../assets/sustainability/darkDialPosition1.svg'
import { ReactComponent as DarkDialPosition2 } from '../../assets/sustainability/darkDialPosition2.svg'
import { ReactComponent as DarkDialPosition3 } from '../../assets/sustainability/darkDialPosition3.svg'
import { ReactComponent as DarkDialPosition4 } from '../../assets/sustainability/darkDialPosition4.svg'
import { Box, Stack, Tooltip } from '@mui/material'
import { ReactElement } from 'react'
import { InfoTwoTone } from '@mui/icons-material'
import { QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'
import { getFieldIndex } from '@/utils/functions/queryUtils'

export const SUSTAINABILITY_ICON_COLORS = {
  check: '#52A31C',
  close: '#C13415',
}

export type MetricsConfig = {
  /** Name of the metric column in the table */
  key: string
  /** Display label for the metric */
  label: string
  /** Shown as a tooltip in SustainabilityScorecard and as summary text in SustainabilityScorecardSummary */
  text?: string
}

export type SustainabilityScorecardBaseProps = {
  entityId: string
  metricsConfig: MetricsConfig[]
  /** Name of the URL search parameter used to filter the data. */
  searchParamKey: string
  /** The name of the column in the table to apply the filter to. */
  filterColumn: string
  scoreDescriptorColumnName: string
}

/**
 * Maps each metric key to its value in the row
 * Returns an array of metric values in the same order as `metricsConfig`
 */
export const getMetricValues = (
  row: Row | undefined,
  queryResultBundle: QueryResultBundle | undefined,
  metricsConfig: MetricsConfig[],
) => {
  if (!row) return []
  return metricsConfig.map(metric => {
    const index = getFieldIndex(metric.key, queryResultBundle)
    return row.values[index] ?? ''
  })
}

export const getSelectedColumns = (
  metricsConfig: MetricsConfig[],
  scoreDescriptorColumnName: string,
): string[] =>
  metricsConfig.map(metric => metric.key).concat(scoreDescriptorColumnName)

export const buildSustainabilitySql = (
  entityId: string,
  filterColumn: string,
  searchValue: string | null,
  selectedColumns: string[],
): string => {
  return `SELECT ${selectedColumns.join(
    ', ',
  )} FROM ${entityId} WHERE "${filterColumn}" = '${searchValue}'`
}

// Returns a SVG dial image corresponding to the score descriptor (e.g. "foundational", "intermediate", etc.)
export const getDial = (
  scoreDescriptor: string,
  isScorecardSummary?: boolean,
) => {
  type ScoreDescriptor = 'Foundational' | 'Developing' | 'Maturing' | 'Stable'

  const toolTipText = {
    Foundational:
      'Early-stage sustainability with opportunities for contributions',
    Developing: 'Strong in key sustainability areas',
    Maturing: 'Demonstrates strong sustainable practices',
    Stable: 'Maintained with long-term resilience in mind',
  }

  // Render dark dial
  // Displayed on Sustainability and Reusability Report tab of entity details page
  const renderDarkDial = (
    DialComponent: ReactElement,
    label: string,
  ): ReactElement => (
    <Stack sx={{ alignItems: 'center', gap: '10px' }}>
      {DialComponent}
      {label}
    </Stack>
  )

  // Render light dial with tooltip
  // Displayed on entity header of details page
  const renderLightDial = (
    DialComponent: ReactElement,
    label: ScoreDescriptor,
  ): ReactElement => (
    <Stack sx={{ alignItems: 'center', gap: '10px' }}>
      {DialComponent}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {label}
        <Tooltip title={toolTipText[label]}>
          <InfoTwoTone sx={{ width: '18px', height: '18px' }} />
        </Tooltip>
      </Box>
    </Stack>
  )

  const lightDials: Record<string, ReactElement> = {
    foundational: renderLightDial(<LightDialPosition1 />, 'Foundational'),
    developing: renderLightDial(<LightDialPosition2 />, 'Developing'),
    maturing: renderLightDial(<LightDialPosition3 />, 'Maturing'),
    stable: renderLightDial(<LightDialPosition4 />, 'Stable'),
  }

  const darkDials: Record<string, ReactElement> = {
    foundational: renderDarkDial(<DarkDialPosition1 />, 'Foundational'),
    developing: renderDarkDial(<DarkDialPosition2 />, 'Developing'),
    maturing: renderDarkDial(<DarkDialPosition3 />, 'Maturing'),
    stable: renderDarkDial(<DarkDialPosition4 />, 'Stable'),
  }

  const key = scoreDescriptor.toLowerCase()
  const selectedDials = isScorecardSummary ? darkDials : lightDials

  if (key in selectedDials) {
    return selectedDials[key]
  }
  return <LightDialPosition1 />
}
