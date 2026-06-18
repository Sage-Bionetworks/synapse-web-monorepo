import { useMemo, useState } from 'react'
import {
  Box,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import GenericCard from 'synapse-react-client/components/GenericCard/GenericCard'
import { GenericCardIcon } from 'synapse-react-client/components/GenericCard/GenericCardIcon'
import DuoTermTags, {
  DuoTagVariant,
} from 'synapse-react-client/components/GenericCard/DuoTermTags/DuoTermTags'
import { ALL_DUO_TERMS } from 'synapse-react-client/components/GenericCard/DuoTermTags/duoTerms'
import type { DuoPlacement } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { datasetsSql } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import { datasetCardConfiguration } from '@/config/synapseConfigs/datasets'

// A couple of representative real dataset cards that carry DUO terms.
const SQL = `${datasetsSql} WHERE dataUseModifiers IS NOT NULL LIMIT 2`

const VARIANTS: { value: DuoTagVariant; label: string }[] = [
  { value: 'codeName', label: 'Code + name' },
  { value: 'compact', label: 'Compact codes' },
  { value: 'badge', label: 'Access badge + tags' },
]

const PLACEMENTS: { value: DuoPlacement; label: string }[] = [
  { value: 'belowTitle', label: 'Below title' },
  { value: 'header', label: 'With dataset header' },
  { value: 'actions', label: 'With download buttons' },
  { value: 'metadata', label: 'In metadata section' },
]

// Synthetic examples so every DUO code (and a few multi-code datasets) is shown.
type Example = {
  title: string
  description: string
  terms: string[]
  access: string
}
const MULTI_EXAMPLES: Example[] = [
  {
    title: 'Example — biomedical, non-commercial, publication required',
    description:
      'A dataset carrying several conditions at once, including a commercial-use restriction.',
    terms: [
      'Health or Medical or Biomedical Research',
      'Not For Profit Use Only',
      'Publication Required',
    ],
    access: 'Controlled Access',
  },
  {
    title: 'Example — disease-specific with access conditions',
    description:
      'Disease-specific research with ethics approval, geographic, and collaboration requirements.',
    terms: [
      'Disease Specific Research',
      'Ethics Approval Required',
      'Geographical Restriction',
      'Collaboration Required',
    ],
    access: 'Controlled Access',
  },
]

export default function DuoMockup() {
  const [variant, setVariant] = useState<DuoTagVariant>('codeName')
  const [placement, setPlacement] = useState<DuoPlacement>('belowTitle')

  const cardConfiguration = useMemo<CardConfiguration>(
    () => ({
      ...datasetCardConfiguration,
      genericCardSchema: {
        ...datasetCardConfiguration.genericCardSchema!,
        dataUseModifiersColumnName: 'dataUseModifiers',
        accessTypeColumnName: 'accessType',
        dataUseModifiersVariant: variant,
        dataUseModifiersPlacement: placement,
      },
    }),
    [variant, placement],
  )

  const examples: Example[] = useMemo(
    () => [
      ...MULTI_EXAMPLES,
      ...ALL_DUO_TERMS.map(t => ({
        title: t.name,
        description: t.description,
        terms: [t.name],
        access:
          t.category === 'permission' ? 'Public Access' : 'Controlled Access',
      })),
    ],
    [],
  )

  // Place the DUO tags into the same card slot the real card uses for each
  // placement option, so the synthetic examples match the live cards.
  const renderExample = (ex: Example, i: number) => {
    const duo = (
      <DuoTermTags terms={ex.terms} accessType={ex.access} variant={variant} />
    )
    const labels = [
      ...(placement === 'metadata'
        ? [{ columnDisplayName: 'Data Usage Restrictions', value: duo }]
        : []),
      { columnDisplayName: 'Assay', value: 'RNA-seq' },
      { columnDisplayName: 'Species', value: 'Homo sapiens' },
    ]
    return (
      <GenericCard
        key={i}
        type="DATASET"
        title={ex.title}
        description={ex.description}
        icon={<GenericCardIcon type="DATASET" useTypeForIcon />}
        labels={labels}
        cardTypeAdornment={placement === 'header' ? duo : undefined}
        belowTitleContent={placement === 'belowTitle' ? duo : undefined}
        cardTopButtons={placement === 'actions' ? duo : undefined}
      />
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" sx={{ mb: 1 }}>
        DUO data-use tags on dataset cards — mockup
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
        Surfacing Data Use Ontology terms (from <code>dataUseModifiers</code>)
        as EGA-style labelled codes on the NF dataset card. Switch the display
        style and the location to compare (DESIGN-1740 / PORTALS-4282).
        Commercial-use restrictions are emphasized.
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={3}
        sx={{ mb: 4, flexWrap: 'wrap' }}
      >
        <Box>
          <Typography variant="smallText1" sx={{ fontWeight: 600 }}>
            Display style
          </Typography>
          <Box>
            <ToggleButtonGroup
              size="small"
              exclusive
              value={variant}
              onChange={(_e, v: DuoTagVariant | null) => v && setVariant(v)}
            >
              {VARIANTS.map(v => (
                <ToggleButton key={v.value} value={v.value}>
                  {v.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        </Box>
        <Box>
          <Typography variant="smallText1" sx={{ fontWeight: 600 }}>
            Location on card
          </Typography>
          <Box>
            <ToggleButtonGroup
              size="small"
              exclusive
              value={placement}
              onChange={(_e, v: DuoPlacement | null) => v && setPlacement(v)}
            >
              {PLACEMENTS.map(p => (
                <ToggleButton key={p.value} value={p.value}>
                  {p.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        </Box>
      </Stack>

      <Typography variant="sectionTitle" sx={{ display: 'block', mb: 1 }}>
        Live dataset cards
      </Typography>
      <Box sx={{ mb: 4 }}>
        <CardContainerLogic
          key={`${variant}-${placement}`}
          sql={SQL}
          columnAliases={columnAliases}
          cardConfiguration={cardConfiguration}
        />
      </Box>

      <Typography variant="sectionTitle" sx={{ display: 'block', mb: 1 }}>
        Every DUO code (synthetic examples)
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
        One card per DUO term, plus a couple of datasets with multiple terms.
        Commercial-use restriction (NCU) shown in the emphasized style.
      </Typography>
      <Stack gap={2}>{examples.map(renderExample)}</Stack>
    </Container>
  )
}
