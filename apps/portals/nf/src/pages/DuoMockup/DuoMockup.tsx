import { useMemo } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import GenericCard from 'synapse-react-client/components/GenericCard/GenericCard'
import { GenericCardIcon } from 'synapse-react-client/components/GenericCard/GenericCardIcon'
import DuoTermTags from 'synapse-react-client/components/GenericCard/DuoTermTags/DuoTermTags'
import { ALL_DUO_TERMS } from 'synapse-react-client/components/GenericCard/DuoTermTags/duoTerms'
import { datasetsSql } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import { datasetCardConfiguration } from '@/config/synapseConfigs/datasets'

// A couple of representative real dataset cards that carry DUO terms.
const SQL = `${datasetsSql} WHERE dataUseModifiers IS NOT NULL LIMIT 2`

// Real dataset cards with DUO tags surfaced in the metadata section.
const cardConfiguration: CardConfiguration = {
  ...datasetCardConfiguration,
  genericCardSchema: {
    ...datasetCardConfiguration.genericCardSchema!,
    dataUseModifiersColumnName: 'dataUseModifiers',
  },
}

// Synthetic examples so every term (and a few multi-term datasets) is shown.
type Example = { title: string; description: string; terms: string[] }
const MULTI_EXAMPLES: Example[] = [
  {
    title: 'Example — biomedical, non-commercial, attribution required',
    description:
      'A dataset carrying several conditions at once, including a commercial-use restriction.',
    terms: ['DUO:0000006', 'DUO:0000046', 'DUOplus7'],
  },
  {
    title: 'Example — disease-specific with access conditions',
    description:
      'Disease-specific research with ethics approval, geographic, and collaboration requirements.',
    terms: ['DUO:0000007', 'DUO:0000021', 'DUO:0000022', 'DUO:0000020'],
  },
]

export default function DuoMockup() {
  const examples: Example[] = useMemo(
    () => [
      ...MULTI_EXAMPLES,
      ...ALL_DUO_TERMS.map(t => ({
        title: t.name,
        description: t.definition,
        terms: [t.code],
      })),
    ],
    [],
  )

  const renderExample = (ex: Example, i: number) => (
    <GenericCard
      key={i}
      type="DATASET"
      title={ex.title}
      description={ex.description}
      icon={<GenericCardIcon type="DATASET" useTypeForIcon />}
      labels={[
        {
          columnDisplayName: 'Data Usage Restrictions',
          value: <DuoTermTags terms={ex.terms} />,
        },
        { columnDisplayName: 'Assay', value: 'RNA-seq' },
        { columnDisplayName: 'Species', value: 'Homo sapiens' },
      ]}
    />
  )

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" sx={{ mb: 1 }}>
        DUO data-use tags on dataset cards — mockup
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
        Data Use Ontology terms surfaced as a “Data Usage Restrictions” row in
        the card’s metadata section. Full term names are shown, colored by kind
        (green = permitted use, red = commercial restriction, blue = obligation,
        amber = use limit); hover a tag for its definition and ontology code
        (DESIGN-1740 / PORTALS-4282).
      </Typography>

      <Typography variant="sectionTitle" sx={{ display: 'block', mb: 1 }}>
        All DUO values
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
        Every term in the vocabulary, rendered together. Long names truncate
        with “…” and show the full name + definition on hover.
      </Typography>
      <Box sx={{ mb: 4 }}>
        <DuoTermTags terms={ALL_DUO_TERMS.map(t => t.code)} />
      </Box>

      <Typography variant="sectionTitle" sx={{ display: 'block', mb: 1 }}>
        Live dataset cards
      </Typography>
      <Stack sx={{ mb: 4 }}>
        <CardContainerLogic
          sql={SQL}
          columnAliases={columnAliases}
          cardConfiguration={cardConfiguration}
        />
      </Stack>

      <Typography variant="sectionTitle" sx={{ display: 'block', mb: 1 }}>
        Every term (synthetic examples)
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
        One card per DUO term (plus Sage DUO-Plus Attribution), and a couple of
        datasets with multiple terms.
      </Typography>
      <Stack gap={2}>{examples.map(renderExample)}</Stack>
    </Container>
  )
}
