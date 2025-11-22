import { CheckCircleTwoTone } from '@mui/icons-material'
import { Box, Tooltip, Typography } from '@mui/material'

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
  Excellent: '#88C48A',
  Good: '#B0D982',
  Fair: '#FBDA79',
  Poor: '#F6B260',
  Minimal: '#ED8E87',
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
  const tooltipText = `This tool is rated as ${completenessCategory} based on the completeness of information in our database`

  return (
    <Tooltip title={tooltipText} arrow>
      <Box
        sx={{
          color: 'grey.700',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '5px',
        }}
      >
        <CheckCircleTwoTone sx={{ color, fontSize: '1.25rem' }} />
        <Typography sx={{ fontWeight: 'bold' }}>
          {completenessCategory}
        </Typography>
        <Typography>completeness</Typography>
      </Box>
    </Tooltip>
  )
}
