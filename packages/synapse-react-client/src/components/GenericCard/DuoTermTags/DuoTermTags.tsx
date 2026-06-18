import { Box, Chip, Tooltip, Typography } from '@mui/material'
import { alpha, Theme } from '@mui/material/styles'
import type { SvgIconComponent } from '@mui/icons-material'
import ScienceOutlined from '@mui/icons-material/ScienceOutlined'
import MedicalServicesOutlined from '@mui/icons-material/MedicalServicesOutlined'
import CoronavirusOutlined from '@mui/icons-material/CoronavirusOutlined'
import LockOpenOutlined from '@mui/icons-material/LockOpenOutlined'
import GroupsOutlined from '@mui/icons-material/GroupsOutlined'
import HealingOutlined from '@mui/icons-material/HealingOutlined'
import MoneyOffOutlined from '@mui/icons-material/MoneyOffOutlined'
import BiotechOutlined from '@mui/icons-material/BiotechOutlined'
import ArticleOutlined from '@mui/icons-material/ArticleOutlined'
import HandshakeOutlined from '@mui/icons-material/HandshakeOutlined'
import GavelOutlined from '@mui/icons-material/GavelOutlined'
import PublicOutlined from '@mui/icons-material/PublicOutlined'
import HourglassEmptyOutlined from '@mui/icons-material/HourglassEmptyOutlined'
import ScheduleOutlined from '@mui/icons-material/ScheduleOutlined'
import PersonOutlined from '@mui/icons-material/PersonOutlined'
import AssignmentOutlined from '@mui/icons-material/AssignmentOutlined'
import ApartmentOutlined from '@mui/icons-material/ApartmentOutlined'
import ReplayOutlined from '@mui/icons-material/ReplayOutlined'
import HelpOutline from '@mui/icons-material/HelpOutline'
import { DuoCategory, DuoTerm, resolveDuoTerm } from './duoTerms'

/** Display variants under comparison for DESIGN-1740. */
export type DuoTagVariant = 'codeName' | 'compact' | 'badge'

export type DuoTermTagsProps = {
  /** Raw `dataUseModifiers` values (DUO term names). */
  terms: string[]
  /** `accessType` value, e.g. "Controlled Access" (used by the badge variant). */
  accessType?: string
  variant?: DuoTagVariant
}

// An icon per DUO code, keyed by code so the meaning reads at a glance.
const DUO_ICONS: Record<string, SvgIconComponent> = {
  'DUO:0000042': ScienceOutlined, // General Research Use
  'DUO:0000006': MedicalServicesOutlined, // Health/Medical/Biomedical
  'DUO:0000007': CoronavirusOutlined, // Disease Specific
  'DUO:0000004': LockOpenOutlined, // No Restriction
  'DUO:0000011': GroupsOutlined, // Population Origins/Ancestry
  'DUO:0000043': HealingOutlined, // Clinical Care Use
  'DUO:0000018': MoneyOffOutlined, // Not For Profit / non-commercial
  'DUO:0000016': BiotechOutlined, // Genetic Studies Only
  'DUO:0000019': ArticleOutlined, // Publication Required
  'DUO:0000020': HandshakeOutlined, // Collaboration Required
  'DUO:0000021': GavelOutlined, // Ethics Approval Required
  'DUO:0000022': PublicOutlined, // Geographical Restriction
  'DUO:0000024': HourglassEmptyOutlined, // Publication Moratorium
  'DUO:0000025': ScheduleOutlined, // Time Limit on Use
  'DUO:0000026': PersonOutlined, // User Specific Restriction
  'DUO:0000027': AssignmentOutlined, // Project Specific Restriction
  'DUO:0000028': ApartmentOutlined, // Institution Specific Restriction
  'DUO:0000029': ReplayOutlined, // Return to Database/Resource
}

const termIcon = (term: DuoTerm) => {
  const Icon = DUO_ICONS[term.code] ?? HelpOutline
  return <Icon />
}

// Color carries meaning: green = a use you may make, amber = a condition/
// obligation, red = commercial use prohibited (the headline concern). All
// terms are colored — none are bland — so the distinction is intentional.
const chipSx = (category: DuoCategory) => {
  switch (category) {
    case 'commercial':
      return {
        bgcolor: (theme: Theme) => alpha(theme.palette.error.main, 0.14),
        color: 'error.dark',
        fontWeight: 700,
        '& .MuiChip-icon': { color: 'error.dark' },
      }
    case 'restriction':
      return {
        bgcolor: (theme: Theme) => alpha(theme.palette.warning.main, 0.18),
        color: 'warning.dark',
        '& .MuiChip-icon': { color: 'warning.dark' },
      }
    case 'permission':
    default:
      return {
        bgcolor: (theme: Theme) => alpha(theme.palette.success.main, 0.15),
        color: 'success.dark',
        '& .MuiChip-icon': { color: 'success.dark' },
      }
  }
}

export default function DuoTermTags(props: DuoTermTagsProps) {
  const { terms, accessType, variant = 'codeName' } = props
  if (!terms || terms.length === 0) {
    return null
  }
  const resolved = terms.map(resolveDuoTerm)
  // Show the commercial restriction first, then other conditions, then
  // permissions, so limiting conditions read at a glance.
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
              icon={termIcon(t)}
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
            icon={termIcon(t)}
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
