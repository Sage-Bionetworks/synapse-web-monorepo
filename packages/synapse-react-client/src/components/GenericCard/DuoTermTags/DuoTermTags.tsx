import { Box, Chip, Tooltip, Typography } from '@mui/material'
import { alpha, Theme } from '@mui/material/styles'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import MoneyOffOutlinedIcon from '@mui/icons-material/MoneyOffOutlined'
import { DuoCategory, resolveDuoTerm } from './duoTerms'

/** Display variants under comparison for DESIGN-1740. */
export type DuoTagVariant = 'codeName' | 'compact' | 'badge'

export type DuoTermTagsProps = {
  /** Raw `dataUseModifiers` values (DUO term names). */
  terms: string[]
  /** `accessType` value, e.g. "Controlled Access" (used by the badge variant). */
  accessType?: string
  variant?: DuoTagVariant
}

// Per-category chip styling. Commercial-use restriction is emphasized since
// that is the headline concern from the external feedback.
const chipSx = (category: DuoCategory) => {
  switch (category) {
    case 'commercial':
      return {
        bgcolor: 'warning.main',
        color: 'warning.contrastText',
        fontWeight: 700,
        '& .MuiChip-icon': { color: 'warning.contrastText' },
      }
    case 'restriction':
      return {
        bgcolor: 'transparent',
        color: 'text.secondary',
        border: (theme: Theme) => `1px solid ${theme.palette.divider}`,
      }
    case 'permission':
    default:
      return {
        bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, 0.1),
        color: 'primary.dark',
      }
  }
}

const categoryIcon = (category: DuoCategory) => {
  if (category === 'commercial') {
    return <MoneyOffOutlinedIcon />
  }
  if (category === 'restriction') {
    return <LockOutlinedIcon />
  }
  return undefined
}

export default function DuoTermTags(props: DuoTermTagsProps) {
  const { terms, accessType, variant = 'codeName' } = props
  if (!terms || terms.length === 0) {
    return null
  }
  const resolved = terms.map(resolveDuoTerm)
  // Show restrictions first so the limiting conditions read at a glance.
  const order: Record<DuoCategory, number> = {
    commercial: 0,
    restriction: 1,
    permission: 2,
  }
  const sorted = [...resolved].sort(
    (a, b) => order[a.category] - order[b.category],
  )

  if (variant === 'compact') {
    // Code-only chips; full name + description on hover.
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {sorted.map((t, i) => (
          <Tooltip
            key={i}
            title={
              <>
                <strong>{t.name}</strong>
                {t.code ? ` (${t.code})` : ''}
                <br />
                {t.description}
              </>
            }
          >
            <Chip
              size="small"
              icon={categoryIcon(t.category)}
              label={t.abbr}
              sx={{ ...chipSx(t.category), fontWeight: 600 }}
            />
          </Tooltip>
        ))}
      </Box>
    )
  }

  const codeNameChips = (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
      {sorted.map((t, i) => (
        <Tooltip key={i} title={t.description}>
          <Chip
            size="small"
            icon={categoryIcon(t.category)}
            label={
              <>
                <Box component="span" sx={{ fontWeight: 700 }}>
                  {t.abbr}
                </Box>
                <Box component="span" sx={{ opacity: 0.85 }}>
                  {' · '}
                  {t.name}
                </Box>
              </>
            }
            sx={chipSx(t.category)}
          />
        </Tooltip>
      ))}
    </Box>
  )

  if (variant === 'badge') {
    const controlled = /control/i.test(accessType ?? '')
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
        {accessType && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: controlled ? 'warning.main' : 'success.main',
              }}
            />
            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              {accessType}
            </Typography>
          </Box>
        )}
        {codeNameChips}
      </Box>
    )
  }

  // 'codeName' (default)
  return codeNameChips
}
