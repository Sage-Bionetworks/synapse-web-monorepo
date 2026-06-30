import { Box, Link, SvgIcon } from '@mui/material'
import type { SvgIconProps } from '@mui/material'
import type { ComponentType, ReactElement, ReactNode } from 'react'
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
import BlockOutlined from '@mui/icons-material/BlockOutlined'
import RuleOutlined from '@mui/icons-material/RuleOutlined'
import HelpOutline from '@mui/icons-material/HelpOutline'
import {
  DuoCategory,
  DuoTerm,
  duoRegistryUrl,
  resolveDuoTerm,
} from './duoTerms'
import FacetValueChip from '@/components/widgets/facet-nav/FacetValueChip'
import type { RenderedFacetValueChip } from '@/components/QueryVisualizationWrapper/QueryVisualizationContext'

export type DuoTermTagsProps = {
  /** Raw `dataUseModifiers` values (ontology codes or term names). */
  terms: string[]
}

// `@mui/icons-material` (the classic Material Icons set) has no DNA/helix glyph,
// so the genetic-studies term uses Google's Material Symbols "genetics" icon,
// inlined here as an MUI SvgIcon so it inherits chip sizing and color like the
// rest. (Material Symbols, Apache-2.0.)
const GeneticsIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M5 23v-1q0-3.475 1.45-5.637t4-4.363q-2.55-2.2-4-4.362T5 2V1h2v1q0 .275.013.513T7.05 3h9.9q.025-.25.038-.488T17 2V1h2v1q0 3.475-1.45 5.638t-4 4.362q2.55 2.2 4 4.363T19 22v1h-2v-1q0-.275-.012-.513T16.95 21h-9.9q-.025.25-.037.488T7 22v1zM8.45 7h7.1q.325-.475.563-.95T16.55 5h-9.1q.2.55.437 1.038T8.45 7M12 10.7q.5-.425.975-.85t.9-.85h-3.75q.425.425.9.85t.975.85M10.125 15h3.75q-.425-.425-.9-.85T12 13.3q-.5.425-.975.85t-.9.85M7.45 19h9.1q-.2-.55-.437-1.037T15.55 17h-7.1q-.325.475-.562.95T7.45 19" />
  </SvgIcon>
)

// An icon per code so the meaning reads at a glance.
const DUO_ICONS: Record<string, ComponentType> = {
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
  'DUO:0000016': GeneticsIcon, // Genetic Studies Only (Material Symbols)
  'DUO:0000015': BlockOutlined, // No General Methods Research
  'DUO:0000044': BlockOutlined, // Population/Ancestry Prohibited
  'DUO:0000012': RuleOutlined, // Research Specific Restrictions
}

const termIcon = (term: DuoTerm): ReactElement => {
  const Icon = DUO_ICONS[term.code] ?? HelpOutline
  return <Icon />
}

// Primary use first (the dataset's purpose), then the conditions that limit it.
const ORDER: Record<DuoCategory, number> = {
  permission: 0,
  commercial: 1,
  obligation: 2,
  limit: 3,
}

// The rich tooltip for a DUO term: full name, abbreviation, ontology code
// (linked to the registry when available), and definition.
function duoTooltipTitle(t: DuoTerm): ReactNode {
  const url = duoRegistryUrl(t)
  return (
    <>
      <strong>{t.name}</strong>
      <br />
      {t.abbr}
      {t.code ? ' · ' : ''}
      {url ? (
        <Link href={url} target="_blank" rel="noopener" color="inherit">
          {t.code}
        </Link>
      ) : (
        t.code
      )}
      <br />
      {t.definition}
    </>
  )
}

/** Renders a dataset's DUO data-use modifiers as a row of chips (used on cards). */
export default function DuoTermTags(props: DuoTermTagsProps) {
  const { terms } = props
  if (!terms || terms.length === 0) {
    return null
  }
  const sorted = terms
    .map(resolveDuoTerm)
    .sort((a, b) => ORDER[a.category] - ORDER[b.category])

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 0.75,
        minWidth: 0,
        maxWidth: '100%',
      }}
    >
      {sorted.map((t, i) => (
        <FacetValueChip
          key={i}
          label={t.name}
          icon={termIcon(t)}
          tooltipTitle={duoTooltipTitle(t)}
        />
      ))}
    </Box>
  )
}

/**
 * Builds a `renderFacetValue` function (for `QueryVisualizationWrapper`) that
 * returns the chip content for the given DUO column's enumeration facet values
 * — used by both the facet sidebar and the active-filter pills, which render it
 * through the shared `FacetValueChip`. Other columns fall through to text.
 *
 * Portals only need to declare the DUO column (via the card schema's
 * `dataUseModifiersColumnName`) rather than each defining their own handler.
 */
export function createDuoFacetValueRenderer(duoColumnName: string) {
  return (
    columnName: string,
    value: string,
  ): RenderedFacetValueChip | undefined => {
    if (columnName !== duoColumnName) {
      return undefined
    }
    const t = resolveDuoTerm(value)
    return {
      value: t.name,
      icon: termIcon(t),
      tooltipTitle: duoTooltipTitle(t),
    }
  }
}
