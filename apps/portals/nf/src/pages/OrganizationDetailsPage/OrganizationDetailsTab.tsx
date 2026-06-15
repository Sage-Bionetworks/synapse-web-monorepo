import { datasetsSql, publicationsSql, studiesSql } from '@/config/resources'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { Box, Paper, Slider, Typography } from '@mui/material'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import QueryCount from 'synapse-react-client/components/QueryCount/QueryCount'
import { SynapsePlot } from 'synapse-react-client/components/Plot/SynapsePlot'
import { SynapseResearchNetworkPlot } from 'synapse-react-client/components/Plot/SynapsePublicationNetworkPlot'
import { SynapseMultiSeriesTimeSeriesPlot } from 'synapse-react-client/components/Plot/SynapseMultiSeriesTimeSeriesPlot'

const CONCRETETYPE =
  'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter' as const

const STUDY_STATUS_ORDER = ['Active', 'Completed']
const DATA_STATUS_ORDER = [
  'Available',
  'Under Embargo',
  'Data Pending',
  'Not Expected',
  'Rolling',
  'Partial',
]

function StatCard({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 4,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Typography
        component="div"
        sx={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}
      >
        {children}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {label}
      </Typography>
    </Paper>
  )
}

const NET_MIN_YEAR = 2015
const NET_MAX_YEAR = new Date().getFullYear()
const NET_YEAR_MARKS = Array.from(
  { length: NET_MAX_YEAR - NET_MIN_YEAR + 1 },
  (_, i) => {
    const y = NET_MIN_YEAR + i
    return { value: y, label: y % 2 === 1 ? String(y) : '' }
  },
)

function OrganizationResearchNetwork({
  fundingAgency,
}: {
  fundingAgency: string
}) {
  const [sliderYear, setSliderYear] = useState(NET_MAX_YEAR)
  const [committedYear, setCommittedYear] = useState(NET_MAX_YEAR)

  const yearClause =
    committedYear < NET_MAX_YEAR ? ` AND \`year\` <= ${committedYear}` : ''
  const dsYearClause =
    committedYear < NET_MAX_YEAR ? ` AND yearProcessed <= ${committedYear}` : ''

  const pubSql = `SELECT studyName, title FROM syn16857542 WHERE fundingAgency HAS ('${fundingAgency}')${yearClause}`
  const dsSql = `SELECT studyName, title FROM syn50913342 WHERE funder HAS ('${fundingAgency}')${dsYearClause}`

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Shows the publications and datasets produced by this funder's studies on
        the portal. Only studies with at least one linked publication or dataset
        are shown. Resources associated with more than one study are highlighted
        in red — these links reflect study acknowledgements, not necessarily
        data re-use. Toggle resource types using the controls on the left.
      </Typography>
      <Box sx={{ mb: 3, maxWidth: 520 }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, color: '#354A63', mb: 1 }}
        >
          {sliderYear < NET_MAX_YEAR
            ? `Outputs through ${sliderYear}`
            : 'All outputs (no year filter)'}
        </Typography>
        <Slider
          min={NET_MIN_YEAR}
          max={NET_MAX_YEAR}
          step={1}
          value={sliderYear}
          onChange={(_, v) => setSliderYear(v)}
          onChangeCommitted={(_, v) => setCommittedYear(v)}
          marks={NET_YEAR_MARKS}
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
        studyColorSql={`SELECT studyName, initiative FROM syn52694652 WHERE fundingAgency HAS ('${fundingAgency}')`}
        studyColorLabel="Initiative"
        height={580}
      />
    </Box>
  )
}

function OrganizationDetailsTab() {
  const { value: fundingAgency } = useDetailsPageContext('fundingAgency')

  if (fundingAgency == null) {
    return null
  }

  const fundingAgencyFilter = {
    concreteType: CONCRETETYPE,
    columnName: 'fundingAgency',
    operator: ColumnSingleValueFilterOperator.LIKE,
    values: [`%${fundingAgency}%`],
  }
  const funderFilter = {
    concreteType: CONCRETETYPE,
    columnName: 'funder',
    operator: ColumnSingleValueFilterOperator.LIKE,
    values: [`%${fundingAgency}%`],
  }

  const pipelineSql = `SELECT studyStatus, dataStatus, COUNT(*) AS n FROM syn52694652 WHERE fundingAgency HAS ('${fundingAgency}') GROUP BY studyStatus, dataStatus`
  const pubsByYearSql = `SELECT \`year\`, COUNT(*) AS n FROM syn16857542 WHERE fundingAgency HAS ('${fundingAgency}') AND \`year\` IS NOT NULL GROUP BY \`year\` ORDER BY \`year\``
  const dsByYearSql = `SELECT createdOn FROM syn50913342 WHERE funder LIKE '%${fundingAgency}%' AND createdOn IS NOT NULL`
  const studiesByYearSql =
    'SELECT MIN(createdOn) AS createdOn, id FROM syn52677631 WHERE createdOn IS NOT NULL GROUP BY id'

  return (
    <DetailsPageContent
      content={[
        {
          id: 'Overview',
          title: 'Overview',
          element: (
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={3}>
              <StatCard label="Studies">
                <QueryCount
                  query={{
                    sql: studiesSql,
                    additionalFilters: [fundingAgencyFilter],
                  }}
                />
              </StatCard>
              <StatCard label="Datasets">
                <QueryCount
                  query={{
                    sql: datasetsSql,
                    additionalFilters: [funderFilter],
                  }}
                />
              </StatCard>
              <StatCard label="Publications">
                <QueryCount
                  query={{
                    sql: publicationsSql,
                    additionalFilters: [fundingAgencyFilter],
                  }}
                />
              </StatCard>
            </Box>
          ),
        },
        {
          id: 'Data Pipeline',
          title: 'Data Pipeline',
          element: (
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Data release status breakdown by project activity status. Active
                projects are predominantly Under Embargo, while completed
                projects show a substantial proportion of Available data.
              </Typography>
              <SynapsePlot
                synapsePlotWidgetParams={{
                  query: pipelineSql,
                  type: 'bar',
                  xtitle: { text: 'Count' },
                  ytitle: { text: 'Project Status' },
                  crossTabConfig: {
                    rowOrder: STUDY_STATUS_ORDER,
                    groupOrder: DATA_STATUS_ORDER,
                    height: 240,
                    orientation: 'h',
                  },
                }}
              />
            </Box>
          ),
        },
        {
          id: 'Data Growth',
          title: 'Research Outputs Over Time',
          element: (
            <SynapseMultiSeriesTimeSeriesPlot
              series={[
                {
                  sql: pubsByYearSql,
                  label: 'Publications',
                  color: 'hsl(203, 43%, 44%)',
                },
                {
                  sql: dsByYearSql,
                  label: 'Datasets',
                  color: 'hsl(183, 38%, 43%)',
                },
                {
                  sql: studiesByYearSql,
                  label: 'Studies',
                  color: 'hsl(30, 55%, 48%)',
                },
              ]}
              periodLabel="Year"
              mode="cumulative"
              height={280}
            />
          ),
        },
        {
          id: 'Research Network',
          title: 'Research Network',
          element: (
            <OrganizationResearchNetwork fundingAgency={fundingAgency} />
          ),
        },
      ]}
    />
  )
}

export default OrganizationDetailsTab
