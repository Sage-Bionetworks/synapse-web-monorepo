import { Box } from '@mui/material'

export const RAIL_CELL_WIDTH = 18

export const COLORS = {
  rail: '#9ca3af',
  anchorBg: '#fef3c7',
  partial: 'rgba(217, 119, 6, 0.18)',
  partialBorder: 'rgba(217, 119, 6, 0.5)',
  partialText: '#92400e',
  toggleBg: 'rgba(255, 255, 255, 0.65)',
  toggleText: '#1f2937',
  toggleBorder: 'rgba(0,0,0,0.15)',
  breadcrumb: '#6b7280',
  breadcrumbSeg: '#1d4ed8',
  link: '#1d4ed8',
}

export function depthTint(depth: number): string {
  const alpha = Math.min(0.08 + depth * 0.05, 0.33)
  return `rgba(59, 130, 246, ${alpha})`
}

export function topicHref(id: string): string {
  return `/Explore/DataTopic/DetailsPage?id=${encodeURIComponent(id)}`
}

export type RailKind = 'vline' | 'tee' | 'corner' | 'empty'

type RailCellProps = { kind: RailKind }
export function RailCell({ kind }: RailCellProps) {
  if (kind === 'empty') {
    return <Box sx={{ width: RAIL_CELL_WIDTH, flexShrink: 0 }} />
  }
  const vert =
    kind === 'corner'
      ? { top: -2, height: 'calc(50% + 2px)' }
      : { top: -2, bottom: -2 }
  const showHoriz = kind === 'tee' || kind === 'corner'
  return (
    <Box
      sx={{
        width: RAIL_CELL_WIDTH,
        flexShrink: 0,
        position: 'relative',
        alignSelf: 'stretch',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-0.5px)',
          width: '1px',
          background: COLORS.rail,
          ...vert,
        }}
      />
      {showHoriz && (
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            right: 0,
            height: '1px',
            background: COLORS.rail,
          }}
        />
      )}
    </Box>
  )
}

export type ToggleState =
  | 'expanded'
  | 'partial'
  | 'collapsed'
  | 'disabled'
  | 'leaf'

type TogglePillProps = {
  state: ToggleState
  count: number
  title: string
  onClick?: () => void
}
export function TogglePill({ state, count, title, onClick }: TogglePillProps) {
  if (state === 'leaf') return null
  const arrow = state === 'expanded' ? '▼' : state === 'partial' ? '◐' : '▶'
  const isPartial = state === 'partial'
  const isExpanded = state === 'expanded'
  const isDisabled = state === 'disabled'
  return (
    <Box
      component="span"
      title={title}
      onClick={isDisabled ? undefined : onClick}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '3px',
        minWidth: 28,
        height: 18,
        px: '5px',
        border: '1px solid',
        borderColor: isPartial
          ? COLORS.partialBorder
          : isExpanded
          ? 'rgba(0,0,0,0.25)'
          : COLORS.toggleBorder,
        borderRadius: '3px',
        background: isPartial
          ? COLORS.partial
          : isExpanded
          ? 'rgba(255,255,255,0.9)'
          : COLORS.toggleBg,
        color: isPartial ? COLORS.partialText : COLORS.toggleText,
        fontSize: '10px',
        lineHeight: 1,
        fontFamily: 'ui-monospace, monospace',
        userSelect: 'none',
        opacity: isDisabled ? 0.35 : 1,
        cursor: isDisabled ? 'default' : onClick ? 'pointer' : 'default',
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: 9 }}>{arrow}</span>
      <span>{count}</span>
    </Box>
  )
}
