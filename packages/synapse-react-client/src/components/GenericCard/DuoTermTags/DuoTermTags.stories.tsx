import { Box, Stack, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { GenericCard } from '@/components/GenericCard/GenericCard'
import { GenericCardIcon } from '@/components/GenericCard/GenericCardIcon'
import { EnumFacetFilterOption } from '@/components/widgets/query-filter/EnumFacetFilter/EnumFacetFilterOption'
import SelectionCriteriaPill from '@/components/widgets/facet-nav/SelectionCriteriaPill'
import FacetValueChip from '@/components/widgets/facet-nav/FacetValueChip'
import DuoTermTags, { createDuoFacetValueRenderer } from './DuoTermTags'
import { ALL_DUO_TERMS } from './duoTerms'

// Renders a DUO facet value the way the facet sidebar does: the shared chip,
// truncated, with the tooltip placed to the right (matching EnumFacetFilter).
const renderDuoFacetValue = createDuoFacetValueRenderer('duo')
function DuoChip(props: { code: string; truncate?: boolean }) {
  const { code, truncate = false } = props
  const content = renderDuoFacetValue('duo', code)!
  return (
    <FacetValueChip
      label={content.label}
      icon={content.icon}
      tooltipTitle={content.tooltipTitle}
      placement="right"
      truncate={truncate}
    />
  )
}

/**
 * Renders Data Use Ontology (DUO) `dataUseModifiers` values as labelled tags.
 * The tags use a single neutral, theme-driven color (not color-coded by
 * category); meaning is conveyed by the icon, label, and a tooltip with the
 * term's definition and a link to its ontology entry.
 *
 * The same renderer is used in three places: dataset cards (full names), the
 * "Data Use Modifiers" facet (truncated to fit the sidebar), and the
 * active-filter ("results filtered by") pills (full names, with a delete icon).
 */
const meta = {
  title: 'Explore/GenericCard/DuoTermTags',
  component: DuoTermTags,
} satisfies Meta<typeof DuoTermTags>
export default meta
type Story = StoryObj<typeof meta>

/** A few terms together, as they'd appear on a card with several conditions. */
export const Default: Story = {
  args: {
    terms: ['DUO:0000006', 'DUO:0000046', 'DUOplus7'],
  },
}

/** Every term in the vocabulary, grouped by category and shown with full names. */
export const AllTerms: Story = {
  args: {
    terms: ALL_DUO_TERMS.map(t => t.code),
  },
}

/**
 * In the facet sidebar the tags are truncated to a fixed max width (full name
 * still available in the tooltip) so long names don't blow out the column.
 */
export const TruncatedForFacetSidebar: Story = {
  args: { terms: [] },
  render: () => (
    <Box
      sx={{
        width: 320,
        p: 2,
        border: theme => `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
      }}
    >
      <Typography
        variant="smallText1"
        sx={{ fontWeight: 600, mb: 1, display: 'block' }}
      >
        Data Use Modifiers
      </Typography>
      {ALL_DUO_TERMS.map((t, i) => (
        <EnumFacetFilterOption
          key={t.code}
          id={t.code}
          inputType="checkbox"
          isDropdown={false}
          checked={false}
          count={(i * 7) % 130}
          label={<DuoChip code={t.code} truncate={true} />}
          onChange={() => {}}
          onHover={() => {}}
        />
      ))}
    </Box>
  ),
}

/**
 * On a dataset card, DUO terms appear as a metadata row labeled with the DUO
 * column's display name (e.g. "Data Use Modifiers", matching the facet), with
 * full term names.
 */
export const OnADatasetCard: Story = {
  args: { terms: [] },
  render: () => (
    <Stack gap={2} sx={{ maxWidth: 900 }}>
      <GenericCard
        type="DATASET"
        title="Whole-genome sequencing of NF1-associated tumors"
        description="A representative dataset carrying several data-use conditions, including a commercial-use restriction and an attribution requirement."
        icon={<GenericCardIcon type="DATASET" useTypeForIcon />}
        labels={[
          {
            columnDisplayName: 'Data Use Modifiers',
            value: (
              <DuoTermTags terms={['DUO:0000006', 'DUO:0000046', 'DUOplus7']} />
            ),
          },
          { columnDisplayName: 'Assay', value: 'Whole Genome Sequencing' },
          { columnDisplayName: 'Species', value: 'Homo sapiens' },
        ]}
      />
      <GenericCard
        type="DATASET"
        title="Disease-specific cohort with access conditions"
        description="Disease-specific research with ethics approval, geographic, and collaboration requirements."
        icon={<GenericCardIcon type="DATASET" useTypeForIcon />}
        labels={[
          {
            columnDisplayName: 'Data Use Modifiers',
            value: (
              <DuoTermTags
                terms={[
                  'DUO:0000007',
                  'DUO:0000021',
                  'DUO:0000022',
                  'DUO:0000020',
                ]}
              />
            ),
          },
          { columnDisplayName: 'Assay', value: 'RNA-seq' },
        ]}
      />
    </Stack>
  ),
}

/**
 * In the active-filter ("results filtered by") row, each selected DUO value is
 * a single deletable chip — the same chip design as a plain (non-DUO) filter
 * pill, shown here alongside one for size comparison.
 */
export const AsActiveFilterPills: Story = {
  args: { terms: [] },
  render: () => (
    <div className="TotalQueryResults">
      <div
        className="TotalQueryResults__selections"
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {['DUO:0000006', 'DUO:0000042', 'DUO:0000046'].map(code => {
          const content = renderDuoFacetValue('duo', code)!
          return (
            <SelectionCriteriaPill
              key={code}
              label={content.label}
              icon={content.icon}
              tooltipText={content.tooltipTitle}
              onRemoveFilter={() => {}}
            />
          )
        })}
        <SelectionCriteriaPill
          key="year"
          label="2022"
          tooltipText="Year Processed: 2022"
          onRemoveFilter={() => {}}
        />
      </div>
    </div>
  ),
}
