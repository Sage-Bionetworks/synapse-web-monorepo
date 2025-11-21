import { CheckCircleTwoTone } from '@mui/icons-material'
import { Tooltip } from '@mui/material'

export type CompletenessCategory =
  | 'Excellent'
  | 'Good'
  | 'Fair'
  | 'Poor'
  | 'Minimal'

type CompletenessIndicatorProps = {
  completenessCategory: string
}

const COMPLETENESS_COLORS: Record<CompletenessCategory, string> = {
  Excellent: '#4caf50',
  Good: '#8bc34a',
  Fair: '#ffc107',
  Poor: '#ff9800',
  Minimal: '#f44336',
}

function isValidCompletenessCategory(
  value: string,
): value is CompletenessCategory {
  return value in COMPLETENESS_COLORS
}

export function CompletenessIndicator({
  completenessCategory,
}: CompletenessIndicatorProps) {
  if (!isValidCompletenessCategory(completenessCategory)) {
    return null
  }

  const color = COMPLETENESS_COLORS[completenessCategory]
  const tooltipText = `This tool is rated as ${completenessCategory.toLowerCase()} based on the completeness of information in our database`

  return (
    <Tooltip title={tooltipText} arrow>
      <CheckCircleTwoTone sx={{ color, fontSize: '1.25rem' }} />
    </Tooltip>
  )
}
