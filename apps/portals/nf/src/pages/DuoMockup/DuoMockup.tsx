import { useMemo, useState } from 'react'
import {
  Box,
  Card,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import DuoTermTags, {
  DuoTagVariant,
} from 'synapse-react-client/components/GenericCard/DuoTermTags/DuoTermTags'
import type { DuoPlacement } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { datasetsSql } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import { datasetCardConfiguration } from '@/config/synapseConfigs/datasets'

// A couple of representative real dataset cards that carry DUO terms.
const SQL = `${datasetsSql} WHERE dataUseModifiers IS NOT NULL LIMIT 3`

const VARIANTS: { value: DuoTagVariant; label: string }[] = [
  { value: 'codeName', label: 'Code + name' },
  { value: 'compact', label: 'Compact codes' },
  { value: 'badge', label: 'Access badge + tags' },
]

const PLACEMENTS: { value: DuoPlacement; label: string }[] = [
  { value: 'footer', label: 'Top of footer (current)' },
  { value: 'titleRight', label: 'Right of title' },
  { value: 'actions', label: 'With download buttons' },
  { value: 'icon', label: 'Under the icon' },
]

export default function DuoMockup() {
  const [variant, setVariant] = useState<DuoTagVariant>('codeName')
  const [placement, setPlacement] = useState<DuoPlacement>('titleRight')

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

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" sx={{ mb: 1 }}>
        DUO data-use tags on dataset cards — mockup
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
        Surfacing Data Use Ontology terms (from <code>dataUseModifiers</code>)
        as EGA-style labelled codes, on the real NF dataset card. Switch the
        display style and the location to compare (DESIGN-1740 / PORTALS-4282).
        Commercial-use restrictions are emphasized.
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={3}
        sx={{ mb: 3, flexWrap: 'wrap' }}
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

      <Card variant="outlined" sx={{ mb: 4, p: 2 }}>
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontWeight: 600,
            display: 'block',
            mb: 1,
          }}
        >
          Reference — every tag type in this style, including the commercial-use
          restriction (NCU), which most NF datasets don&apos;t currently carry
        </Typography>
        <DuoTermTags
          terms={[
            'General Research Use',
            'Health or Medical or Biomedical Research',
            'Not For Profit Use Only',
            'Publication Required',
            'Ethics Approval Required',
            'User Specific Restriction',
          ]}
          accessType="Controlled Access"
          variant={variant}
        />
      </Card>

      {/* Real dataset cards as the base. key forces a clean re-render on change. */}
      <CardContainerLogic
        key={`${variant}-${placement}`}
        sql={SQL}
        columnAliases={columnAliases}
        cardConfiguration={cardConfiguration}
      />
    </Container>
  )
}
