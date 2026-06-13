import { useState } from 'react'
import { Box, Chip, Container, Slider, Typography } from '@mui/material'
import { SynapseResearchNetworkPlot } from 'synapse-react-client/components/Plot/SynapsePublicationNetworkPlot'

const FUNDERS = [
  { key: 'CTF', label: 'CTF' },
  { key: 'NTAP', label: 'NTAP' },
  { key: 'GFF', label: 'GFF' },
]

const MIN_YEAR = 2015
const MAX_YEAR = new Date().getFullYear()

const YEAR_MARKS = Array.from({ length: MAX_YEAR - MIN_YEAR + 1 }, (_, i) => {
  const y = MIN_YEAR + i
  return { value: y, label: y % 2 === 1 ? String(y) : '' }
})

function buildPubSql(funder: string | null, year: number): string {
  const conds: string[] = []
  if (funder) conds.push(`fundingAgency HAS ('${funder}')`)
  if (year < MAX_YEAR) conds.push(`\`year\` <= ${year}`)
  const where = conds.length ? ` WHERE ${conds.join(' AND ')}` : ''
  return `SELECT studyName, title FROM syn16857542${where}`
}

function buildDsSql(funder: string | null, year: number): string {
  const conds: string[] = []
  if (funder) conds.push(`funder LIKE '%${funder}%'`)
  if (year < MAX_YEAR) conds.push(`yearProcessed <= ${year}`)
  const where = conds.length ? ` WHERE ${conds.join(' AND ')}` : ''
  return `SELECT studyName, title FROM syn50913342${where}`
}

export default function ResearchOutputNetworkSection() {
  const [selectedFunder, setSelectedFunder] = useState<string | null>(null)
  const [sliderYear, setSliderYear] = useState<number>(MAX_YEAR)
  const [committedYear, setCommittedYear] = useState<number>(MAX_YEAR)

  const pubSql = buildPubSql(selectedFunder, committedYear)
  const dsSql = buildDsSql(selectedFunder, committedYear)

  // All funders: color by funder to distinguish CTF/NTAP/GFF.
  // Single funder selected: color by initiative (funder is already implicit from the filter).
  const colorSql = selectedFunder
    ? 'SELECT studyName, initiative FROM syn52694652'
    : 'SELECT studyName, fundingAgency FROM syn52694652'
  const colorLabel = selectedFunder ? 'Initiative' : 'Funder'

  function toggleFunder(key: string) {
    setSelectedFunder(prev => (prev === key ? null : key))
  }

  return (
    <Box sx={{ bgcolor: '#fff', py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              color: '#1B2A41',
            }}
          >
            Our Research Network
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            Shows the publications and datasets produced by NF studies on the
            portal. Only studies with at least one linked publication or dataset
            are shown. Resources associated with more than one study are
            highlighted in red — these links reflect study acknowledgements, not
            necessarily data re-use. Filter by funder or drag the slider to
            explore how the network grew over time.
          </Typography>
        </Box>

        {/* Funder filter chips */}
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            mb: 3,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, color: '#354A63', mr: 0.5 }}
          >
            Funder:
          </Typography>
          <Chip
            label="All"
            onClick={() => setSelectedFunder(null)}
            color={selectedFunder === null ? 'primary' : 'default'}
            variant={selectedFunder === null ? 'filled' : 'outlined'}
            size="small"
          />
          {FUNDERS.map(f => (
            <Chip
              key={f.key}
              label={f.label}
              onClick={() => toggleFunder(f.key)}
              color={selectedFunder === f.key ? 'primary' : 'default'}
              variant={selectedFunder === f.key ? 'filled' : 'outlined'}
              size="small"
            />
          ))}
        </Box>

        {/* Year slider */}
        <Box sx={{ mb: 4, maxWidth: 600 }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, color: '#354A63', mb: 1 }}
          >
            {sliderYear < MAX_YEAR
              ? `Outputs through ${sliderYear}`
              : 'All outputs (no year filter)'}
          </Typography>
          <Slider
            min={MIN_YEAR}
            max={MAX_YEAR}
            step={1}
            value={sliderYear}
            onChange={(_, v) => setSliderYear(v)}
            onChangeCommitted={(_, v) => setCommittedYear(v)}
            marks={YEAR_MARKS}
            valueLabelDisplay="auto"
            sx={{
              color: '#125e81',
              '& .MuiSlider-markLabel': { fontSize: '0.7rem' },
            }}
          />
        </Box>

        <SynapseResearchNetworkPlot
          publicationSql={pubSql}
          datasetSql={dsSql}
          studyStatsSql="SELECT studyName, n_unique_users, n_downloads, egress_size_in_gb FROM syn55719099"
          studyColorSql={colorSql}
          studyColorLabel={colorLabel}
          height={600}
        />
      </Container>
    </Box>
  )
}
