import { useMemo, useState } from 'react'
import { Box, Chip, Container, Slider, Typography } from '@mui/material'
import { SynapseResearchNetworkPlot } from 'synapse-react-client/components/Plot/SynapsePublicationNetworkPlot'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

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
  const toolSql = 'SELECT studyName, resourceName FROM syn51730943'

  // All funders: color by funder to distinguish CTF/NTAP/GFF.
  // Single funder selected: color by initiative (funder is already implicit from the filter).
  const colorSql = selectedFunder
    ? 'SELECT studyName, initiative FROM syn52694652'
    : 'SELECT studyName, fundingAgency FROM syn52694652'
  const colorLabel = selectedFunder ? 'Initiative' : 'Funder'

  function toggleFunder(key: string) {
    setSelectedFunder(prev => (prev === key ? null : key))
  }

  // Open-access usage stats (no login required)
  const { data: statsProjectData } = useGetQueryResultBundle({
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: {
      sql: 'SELECT project_id, n_downloads, n_unique_users, egress_size_in_b, export_date FROM syn55259224',
    },
    entityId: 'syn55259224',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  })
  const { data: studyMapData } = useGetQueryResultBundle({
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: { sql: 'SELECT studyId, studyName FROM syn52694652' },
    entityId: 'syn52694652',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  })

  const studyStatsRows = useMemo(() => {
    if (!statsProjectData || !studyMapData) return undefined
    const idToName = new Map<string, string>()
    ;(studyMapData.queryResult?.queryResults?.rows ?? []).forEach(row => {
      const studyId = String(row.values?.[0] ?? '').trim()
      const studyName = String(row.values?.[1] ?? '').trim()
      if (studyId && studyId !== 'null' && studyName && studyName !== 'null')
        idToName.set(studyId, studyName)
    })
    const latestByProject = new Map<
      string,
      { downloads: number; users: number; egressB: number; exportDate: number }
    >()
    ;(statsProjectData.queryResult?.queryResults?.rows ?? []).forEach(row => {
      const projectId = String(row.values?.[0] ?? '').trim()
      if (!projectId || projectId === 'null') return
      const downloads = Number(row.values?.[1] ?? 0) || 0
      const users = Number(row.values?.[2] ?? 0) || 0
      const egressB = Number(row.values?.[3] ?? 0) || 0
      const exportDate = Number(row.values?.[4] ?? 0) || 0
      const existing = latestByProject.get(projectId)
      if (!existing || exportDate > existing.exportDate)
        latestByProject.set(projectId, {
          downloads,
          users,
          egressB,
          exportDate,
        })
    })
    const rows: Array<{
      studyName: string
      n_unique_users: number
      n_downloads: number
      egress_size_in_gb: number
    }> = []
    latestByProject.forEach((stats, projectId) => {
      const studyName = idToName.get(projectId)
      if (!studyName) return
      rows.push({
        studyName,
        n_unique_users: stats.users,
        n_downloads: stats.downloads,
        egress_size_in_gb: stats.egressB / 1_000_000_000,
      })
    })
    return rows
  }, [statsProjectData, studyMapData])

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
            Shows the publications, datasets, and tools produced by NF studies
            on the portal. Only studies with at least one linked resource are
            shown. Resources associated with more than one study are highlighted
            in red — these links reflect study acknowledgements, not necessarily
            data re-use. Filter by funder or drag the slider to explore how the
            network grew over time. Bubble size metrics (unique users,
            downloads, egress) reflect all-time totals and are not affected by
            the year filter.
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
          toolSql={toolSql}
          studyStatsRows={studyStatsRows}
          studyColorSql={colorSql}
          studyColorLabel={colorLabel}
          height={600}
        />
      </Container>
    </Box>
  )
}
