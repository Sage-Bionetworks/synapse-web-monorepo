import { Chip, Tooltip } from '@mui/material'
import { ReactElement, ReactNode } from 'react'

export type FacetValueChipProps = {
  /** The chip label. */
  label: ReactNode
  /** Optional leading icon. */
  icon?: ReactElement
  /** Optional tooltip content. When set, the chip is wrapped in a Tooltip. */
  tooltipTitle?: ReactNode
  /** When provided, the chip shows a delete/remove button that calls this. */
  onDelete?: () => void
  /** Cap the width and truncate long labels with an ellipsis (full text in tooltip). */
  truncate?: boolean
  className?: string
}

const MAX_CHIP_WIDTH = 220

// One source of truth for the shape, neutral tint, icon, and delete-icon hover
// styling shared by DUO tags, facet-value chips, and active-filter pills.
const chipSx = {
  bgcolor: 'var(--synapse-secondary-action-color-alpha-10)',
  color: 'var(--synapse-text-color-dark)',
  minWidth: 0,
  '&:hover': { bgcolor: 'var(--synapse-secondary-action-color-alpha-20)' },
  '& .MuiChip-icon': { color: 'inherit' },
  '& .MuiChip-deleteIcon': { color: 'inherit', opacity: 0.7 },
  '& .MuiChip-deleteIcon:hover': { color: 'inherit', opacity: 1 },
}

/**
 * The shared chip used to render a facet value (or DUO term) consistently
 * wherever it appears: in the facet sidebar, as an active-filter pill, and on
 * cards. Owning the icon, tooltip (placement fixed here), and delete affordance
 * in one place keeps the styling identical across those contexts.
 */
export default function FacetValueChip(props: FacetValueChipProps) {
  const { label, icon, tooltipTitle, onDelete, truncate, className } = props
  const chip = (
    <Chip
      className={className}
      size="small"
      icon={icon}
      label={label}
      onDelete={onDelete}
      sx={{
        ...chipSx,
        ...(truncate ? { maxWidth: `min(${MAX_CHIP_WIDTH}px, 100%)` } : {}),
      }}
    />
  )
  return tooltipTitle ? (
    <Tooltip title={tooltipTitle} placement="top">
      {chip}
    </Tooltip>
  ) : (
    chip
  )
}
