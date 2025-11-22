import { CheckCircleTwoTone } from '@mui/icons-material'
import { Box, Tooltip, Typography } from '@mui/material'
import styles from './CompletenessIndicator.module.scss'

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
  Excellent: styles.excellentColor,
  Good: styles.goodColor,
  Fair: styles.fairColor,
  Poor: styles.poorColor,
  Minimal: styles.minimalColor,
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
      <Box className={styles.CompletenessIndicator__container}>
        <CheckCircleTwoTone
          className={styles.CompletenessIndicator__icon}
          sx={{ color }}
        />
        <Typography className={styles.CompletenessIndicator__categoryText}>
          {completenessCategory}
        </Typography>
        <Typography>completeness</Typography>
      </Box>
    </Tooltip>
  )
}
