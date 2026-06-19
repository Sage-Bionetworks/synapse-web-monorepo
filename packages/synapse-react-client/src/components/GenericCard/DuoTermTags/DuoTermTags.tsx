import { Box, Chip, Link, Tooltip } from '@mui/material'
import { alpha, Theme } from '@mui/material/styles'
import type { SvgIconComponent } from '@mui/icons-material'
import ScienceOutlined from '@mui/icons-material/ScienceOutlined'
import MedicalServicesOutlined from '@mui/icons-material/MedicalServicesOutlined'
import CoronavirusOutlined from '@mui/icons-material/CoronavirusOutlined'
import GroupsOutlined from '@mui/icons-material/GroupsOutlined'
import HealingOutlined from '@mui/icons-material/HealingOutlined'
import LockOpenOutlined from '@mui/icons-material/LockOpenOutlined'
import MoneyOffOutlined from '@mui/icons-material/MoneyOffOutlined'
import ArticleOutlined from '@mui/icons-material/ArticleOutlined'
import HandshakeOutlined from '@mui/icons-material/HandshakeOutlined'
import GavelOutlined from '@mui/icons-material/GavelOutlined'
import ReplayOutlined from '@mui/icons-material/ReplayOutlined'
import FormatQuoteOutlined from '@mui/icons-material/FormatQuoteOutlined'
import PersonOutlined from '@mui/icons-material/PersonOutlined'
import AssignmentOutlined from '@mui/icons-material/AssignmentOutlined'
import ApartmentOutlined from '@mui/icons-material/ApartmentOutlined'
import PublicOutlined from '@mui/icons-material/PublicOutlined'
import ScheduleOutlined from '@mui/icons-material/ScheduleOutlined'
import HourglassEmptyOutlined from '@mui/icons-material/HourglassEmptyOutlined'
import BiotechOutlined from '@mui/icons-material/BiotechOutlined'
import BlockOutlined from '@mui/icons-material/BlockOutlined'
import RuleOutlined from '@mui/icons-material/RuleOutlined'
import HelpOutline from '@mui/icons-material/HelpOutline'
import {
  DuoCategory,
  DuoTerm,
  duoRegistryUrl,
  resolveDuoTerm,
} from './duoTerms'

export type DuoTermTagsProps = {
  /** Raw `dataUseModifiers` values (ontology codes or term names). */
  terms: string[]
}

// An icon per code so the meaning reads at a glance.
const DUO_ICONS: Record<string, SvgIconComponent> = {
  'DUO:0000042': ScienceOutlined, // General Research Use
  'DUO:0000006': MedicalServicesOutlined, // Health/Medical/Biomedical
  'DUO:0000007': CoronavirusOutlined, // Disease Specific
  'DUO:0000011': GroupsOutlined, // Population Origins/Ancestry
  'DUO:0000043': HealingOutlined, // Clinical Care Use
  'DUO:0000004': LockOpenOutlined, // No Restriction
  'DUO:0000046': MoneyOffOutlined, // Non-Commercial Use Only
  'DUO:0000018': MoneyOffOutlined, // Not-for-Profit, Non-Commercial
  'DUO:0000045': MoneyOffOutlined, // Not-for-Profit Organisation
  'DUO:0000019': ArticleOutlined, // Publication Required
  'DUO:0000020': HandshakeOutlined, // Collaboration Required
  'DUO:0000021': GavelOutlined, // Ethics Approval Required
  'DUO:0000029': ReplayOutlined, // Return to Database/Resource
  DUOplus7: FormatQuoteOutlined, // Attribution Required
  'DUO:0000026': PersonOutlined, // User Specific
  'DUO:0000027': AssignmentOutlined, // Project Specific
  'DUO:0000028': ApartmentOutlined, // Institution Specific
  'DUO:0000022': PublicOutlined, // Geographical Restriction
  'DUO:0000025': ScheduleOutlined, // Time Limit
  'DUO:0000024': HourglassEmptyOutlined, // Publication Moratorium
  'DUO:0000016': BiotechOutlined, // Genetic Studies Only
  'DUO:0000015': BlockOutlined, // No General Methods Research
  'DUO:0000044': BlockOutlined, // Population/Ancestry Prohibited
  'DUO:0000012': RuleOutlined, // Research Specific Restrictions
}

const termIcon = (term: DuoTerm) => {
  const Icon = DUO_ICONS[term.code] ?? HelpOutline
  return <Icon />
}

// Color carries meaning: green = a use you may make, red = commercial use
// prohibited, blue = an action the requester must take, amber = a limit on
// who/where/when/what. Every term is colored.
const chipSx = (category: DuoCategory) => {
  switch (category) {
    case 'permission':
      return {
        bgcolor: (theme: Theme) => alpha(theme.palette.success.main, 0.15),
        color: 'success.dark',
        '& .MuiChip-icon': { color: 'success.dark' },
      }
    case 'commercial':
      return {
        bgcolor: (theme: Theme) => alpha(theme.palette.error.main, 0.14),
        color: 'error.dark',
        '& .MuiChip-icon': { color: 'error.dark' },
      }
    case 'obligation':
      return {
        bgcolor: (theme: Theme) => alpha(theme.palette.info.main, 0.14),
        color: 'info.dark',
        '& .MuiChip-icon': { color: 'info.dark' },
      }
    case 'limit':
    default:
      return {
        bgcolor: (theme: Theme) => alpha(theme.palette.warning.main, 0.18),
        color: 'warning.dark',
        '& .MuiChip-icon': { color: 'warning.dark' },
      }
  }
}

// Primary use first (the dataset's purpose), then the conditions that limit it.
const ORDER: Record<DuoCategory, number> = {
  permission: 0,
  commercial: 1,
  obligation: 2,
  limit: 3,
}

export default function DuoTermTags(props: DuoTermTagsProps) {
  const { terms } = props
  if (!terms || terms.length === 0) {
    return null
  }
  const sorted = terms
    .map(resolveDuoTerm)
    .sort((a, b) => ORDER[a.category] - ORDER[b.category])

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
      {sorted.map((t, i) => {
        const url = duoRegistryUrl(t)
        return (
          <Tooltip
            key={i}
            title={
              <>
                <strong>{t.name}</strong>
                <br />
                {t.abbr}
                {t.code ? ' · ' : ''}
                {url ? (
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener"
                    color="inherit"
                  >
                    {t.code}
                  </Link>
                ) : (
                  t.code
                )}
                <br />
                {t.definition}
              </>
            }
          >
            <Chip
              size="small"
              icon={termIcon(t)}
              label={t.name}
              sx={chipSx(t.category)}
            />
          </Tooltip>
        )
      })}
    </Box>
  )
}
