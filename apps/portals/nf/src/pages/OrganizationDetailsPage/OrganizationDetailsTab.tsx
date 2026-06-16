import { datasetsSql, publicationsSql, studiesSql } from '@/config/resources'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { Box, Paper, Skeleton, Slider, Typography } from '@mui/material'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { useMemo, useState } from 'react'
import QueryCount from 'synapse-react-client/components/QueryCount/QueryCount'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
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
  const toolSql = `SELECT studyName, resourceName FROM syn51730943`

  // Open-access usage stats: project_id → stats (no login required)
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
    // Group by project_id, keep the row with the latest export_date
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
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Shows the publications, datasets, and tools produced by this funder's
        studies on the portal. Only studies with at least one linked resource
        are shown. Resources associated with more than one study are highlighted
        in red — these links reflect study acknowledgements, not necessarily
        data re-use. Toggle resource types using the controls on the left.
        Bubble size metrics (unique users, downloads, egress) reflect all-time
        totals and are not affected by the year filter.
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
        toolSql={toolSql}
        studyStatsRows={studyStatsRows}
        studyColorSql={`SELECT studyName, initiative FROM syn52694652 WHERE fundingAgency HAS ('${fundingAgency}')`}
        studyColorLabel="Initiative"
        height={580}
      />
    </Box>
  )
}

const FUNDER_UUID: Record<string, string> = {
  CTF: 'e57a7c37-49e9-4466-8f38-5226f3525460',
  NTAP: '57ded652-4826-4058-bfb6-1c61ac8bd357',
  GFF: '55d4b7cf-3cd9-49ba-9f9e-e44b7f917330',
}

function ToolsStatCount({ fundingAgency }: { fundingAgency: string }) {
  const funderId = FUNDER_UUID[fundingAgency] ?? null

  const { data: countData, isLoading } = useGetQueryResultBundle(
    {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      query: {
        sql: `SELECT resourceId FROM syn51734076 WHERE funderId = '${
          funderId ?? ''
        }' GROUP BY resourceId`,
      },
      entityId: 'syn51734076',
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
    },
    { enabled: funderId != null },
  )

  if (isLoading) {
    return (
      <Skeleton
        variant="text"
        width={64}
        sx={{ fontSize: 'inherit', display: 'inline-block' }}
      />
    )
  }
  return <>{(countData?.queryCount ?? 0).toLocaleString()}</>
}

function OrganizationUsageStatsCards({
  fundingAgency,
}: {
  fundingAgency: string
}) {
  // Step 1: study IDs for this funder
  const { data: funderStudyData, isLoading: studyLoading } =
    useGetQueryResultBundle({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      query: {
        sql: `SELECT studyId FROM syn52694652 WHERE fundingAgency HAS ('${fundingAgency}')`,
      },
      entityId: 'syn52694652',
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    })
  // Step 2: open-access download/egress stats (no login required)
  const { data: statsData, isLoading: statsLoading } = useGetQueryResultBundle({
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: {
      sql: 'SELECT project_id, n_downloads, n_unique_users, egress_size_in_b, export_date FROM syn55259224',
    },
    entityId: 'syn55259224',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  })
  // Step 3: storage metrics — cumulative GB added per project
  const { data: storageData, isLoading: storageLoading } =
    useGetQueryResultBundle({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      query: {
        sql: 'SELECT projectId, SUM(`Storage Added (GB)`) AS total_gb FROM syn59647930 GROUP BY projectId',
      },
      entityId: 'syn59647930',
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    })

  const { totalUsers, totalDownloads, totalEgressTB, totalStorageTB } =
    useMemo(() => {
      if (!funderStudyData || !statsData || !storageData)
        return {
          totalUsers: 0,
          totalDownloads: 0,
          totalEgressTB: 0,
          totalStorageTB: 0,
        }
      const funderStudyIds = new Set<string>()
      ;(funderStudyData.queryResult?.queryResults?.rows ?? []).forEach(row => {
        const studyId = String(row.values?.[0] ?? '').trim()
        if (studyId && studyId !== 'null') funderStudyIds.add(studyId)
      })
      // Download/egress: keep latest snapshot per project
      const latestByProject = new Map<
        string,
        {
          downloads: number
          users: number
          egressB: number
          exportDate: number
        }
      >()
      ;(statsData.queryResult?.queryResults?.rows ?? []).forEach(row => {
        const projectId = String(row.values?.[0] ?? '').trim()
        if (
          !projectId ||
          projectId === 'null' ||
          !funderStudyIds.has(projectId)
        )
          return
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
      let totalUsers = 0,
        totalDownloads = 0,
        totalEgressB = 0
      latestByProject.forEach(({ users, downloads, egressB }) => {
        totalUsers += users
        totalDownloads += downloads
        totalEgressB += egressB
      })
      // Storage: sum all GB added across months, then filter to funder projects
      let totalStorageGB = 0
      ;(storageData.queryResult?.queryResults?.rows ?? []).forEach(row => {
        const projectId = String(row.values?.[0] ?? '').trim()
        if (
          !projectId ||
          projectId === 'null' ||
          !funderStudyIds.has(projectId)
        )
          return
        totalStorageGB += Number(row.values?.[1] ?? 0) || 0
      })
      return {
        totalUsers,
        totalDownloads,
        totalEgressTB: totalEgressB / 1e12,
        totalStorageTB: totalStorageGB / 1000,
      }
    }, [funderStudyData, statsData, storageData])

  const isLoading = studyLoading || statsLoading || storageLoading

  if (isLoading) {
    return (
      <>
        {[0, 1, 2, 3].map(i => (
          <StatCard key={i} label="Loading…">
            <Skeleton
              variant="text"
              width={80}
              sx={{ fontSize: 'inherit', display: 'inline-block' }}
            />
          </StatCard>
        ))}
      </>
    )
  }

  return (
    <>
      <StatCard label="Unique Users">
        {totalUsers > 0 ? totalUsers.toLocaleString() : '—'}
      </StatCard>
      <StatCard label="Downloads">
        {totalDownloads > 0 ? totalDownloads.toLocaleString() : '—'}
      </StatCard>
      <StatCard label="TB Data Stored">
        {totalStorageTB > 0 ? totalStorageTB.toFixed(2) : '—'}
      </StatCard>
      <StatCard label="TB Egress">
        {totalEgressTB > 0 ? totalEgressTB.toFixed(2) : '—'}
      </StatCard>
    </>
  )
}

function OrganizationDataGrowthSection({
  fundingAgency,
}: {
  fundingAgency: string
}) {
  const funderId = FUNDER_UUID[fundingAgency] ?? null

  // Step 1: all tools (with or without publication) for this funder
  const { data: toolsPubData } = useGetQueryResultBundle(
    {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      query: {
        sql: `SELECT resourceId, publicationId FROM syn51734076 WHERE funderId = '${
          funderId ?? ''
        }'`,
      },
      entityId: 'syn51734076',
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    },
    { enabled: funderId != null },
  )
  // Step 2: publication dates (joined in JS to get year per tool)
  const { data: pubDateData } = useGetQueryResultBundle({
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: {
      sql: 'SELECT publicationId, publicationDateUnix FROM syn26486839 WHERE publicationDateUnix IS NOT NULL',
    },
    entityId: 'syn26486839',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  })

  // JS join: publicationId → year → earliest year per tool → count per year
  const toolsTimeSeriesData = useMemo<Map<string, number> | undefined>(() => {
    if (!toolsPubData || !pubDateData || funderId == null) return undefined
    const pubYearMap = new Map<string, string>()
    ;(pubDateData.queryResult?.queryResults?.rows ?? []).forEach(row => {
      const pubId = String(row.values?.[0] ?? '').trim()
      const rawUnix = Number(row.values?.[1] ?? 0)
      if (!pubId || pubId === 'null' || !rawUnix) return
      // publicationDateUnix may be seconds or ms — apply same check as normalizePeriod
      const ms = rawUnix > 1e11 ? rawUnix : rawUnix * 1000
      pubYearMap.set(pubId, String(new Date(ms).getFullYear()))
    })
    const toolEarliestYear = new Map<string, string>()
    ;(toolsPubData.queryResult?.queryResults?.rows ?? []).forEach(row => {
      const resourceId = String(row.values?.[0] ?? '').trim()
      const publicationId = String(row.values?.[1] ?? '').trim()
      if (!resourceId || resourceId === 'null') return
      // Tools without a linked publication get no year — they are not yet datable
      if (!publicationId || publicationId === 'null') return
      const year = pubYearMap.get(publicationId)
      if (!year) return
      const existing = toolEarliestYear.get(resourceId)
      if (!existing || year < existing) toolEarliestYear.set(resourceId, year)
    })
    const yearCount = new Map<string, number>()
    toolEarliestYear.forEach(year => {
      yearCount.set(year, (yearCount.get(year) ?? 0) + 1)
    })
    return yearCount
  }, [toolsPubData, pubDateData, funderId])

  const pubsByYearSql = `SELECT \`year\`, COUNT(*) AS n FROM syn16857542 WHERE fundingAgency HAS ('${fundingAgency}') AND \`year\` IS NOT NULL GROUP BY \`year\` ORDER BY \`year\``
  const dsByYearSql = `SELECT createdOn FROM syn50913342 WHERE funder LIKE '%${fundingAgency}%' AND createdOn IS NOT NULL`
  const studiesByYearSql =
    'SELECT MIN(createdOn) AS createdOn, id FROM syn52677631 WHERE createdOn IS NOT NULL GROUP BY id'

  return (
    <Box>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', mb: 1 }}
      >
        Cumulative research outputs by year. Tool counts are based on the
        earliest linked development publication date; tools without a dated
        development publication are not included in the Tools series.
      </Typography>
      <SynapseMultiSeriesTimeSeriesPlot
        series={[
          {
            sql: studiesByYearSql,
            label: 'Studies',
            color: 'hsl(30, 55%, 48%)',
            symbol: 'circle',
          },
          {
            sql: dsByYearSql,
            label: 'Datasets',
            color: 'hsl(183, 38%, 43%)',
            symbol: 'square',
          },
          {
            sql: pubsByYearSql,
            label: 'Publications',
            color: 'hsl(203, 43%, 44%)',
            symbol: 'diamond',
          },
          ...(toolsTimeSeriesData != null
            ? [
                {
                  data: toolsTimeSeriesData,
                  label: 'Tools',
                  color: 'hsl(262, 47%, 45%)',
                  symbol: 'triangle-up',
                },
              ]
            : []),
        ]}
        periodLabel="Year"
        mode="cumulative"
        height={280}
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

  return (
    <DetailsPageContent
      content={[
        {
          id: 'Overview',
          title: 'Overview',
          element: (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={3}>
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
                <StatCard label="Tools">
                  <ToolsStatCount fundingAgency={fundingAgency} />
                </StatCard>
              </Box>
              <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={3}>
                <OrganizationUsageStatsCards fundingAgency={fundingAgency} />
              </Box>
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
            <OrganizationDataGrowthSection fundingAgency={fundingAgency} />
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
