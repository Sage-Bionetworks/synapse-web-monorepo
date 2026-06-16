import type { MetaDescriptor } from 'react-router'
import {
  Box,
  Button,
  Container,
  Link,
  Skeleton,
  Typography,
} from '@mui/material'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import FundersLogoRow from '../components/FundersLogoRow'
import {
  newDatasetsSql,
  datasetCardConfiguration,
  columnAliases as datasetColumnAliases,
} from '../config/synapseConfigs/datasets'
import {
  newToolsSql,
  toolsCardConfiguration,
} from '../config/synapseConfigs/tools'
import NFStatsBanner from '../components/NFStatsBanner'
import NFHero from '../components/NFHero'

const TOP_TOOLS_USAGE_SQL =
  'SELECT resourceId, COUNT(publicationId) AS pubCount FROM syn26486841 GROUP BY resourceId ORDER BY pubCount DESC'
const ELIGIBLE_TOOLS_SQL =
  'SELECT resourceId FROM syn51734076 WHERE publicationId IS NOT NULL AND funderId IS NOT NULL'

function TopToolsByPublications() {
  const { data: usageData, isLoading: usageLoading } = useGetQueryResultBundle({
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: { sql: TOP_TOOLS_USAGE_SQL },
    entityId: 'syn26486841',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  })
  const { data: eligibleData, isLoading: eligibleLoading } =
    useGetQueryResultBundle({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      query: { sql: ELIGIBLE_TOOLS_SQL },
      entityId: 'syn51734076',
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    })

  if (usageLoading || eligibleLoading) {
    return (
      <Box
        sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}
      >
        {[0, 1, 2].map(i => (
          <Skeleton
            key={i}
            variant="rectangular"
            height={200}
            sx={{ borderRadius: 2 }}
          />
        ))}
      </Box>
    )
  }

  const eligibleIds = new Set(
    eligibleData?.queryResult?.queryResults?.rows
      ?.map(row => row.values?.[0])
      .filter((v): v is string => Boolean(v)),
  )

  // Keep pubCount alongside id so tied tools share the same CASE rank
  const rankedIds =
    usageData?.queryResult?.queryResults?.rows
      ?.map(row => ({
        id: String(row.values?.[0] ?? '').trim(),
        count: Number(row.values?.[1] ?? 0),
      }))
      .filter(({ id }) => id !== '' && id !== 'null' && eligibleIds.has(id))
      .slice(0, 3) ?? []

  const ids = rankedIds.map(({ id }) => id)

  let sql = newToolsSql
  if (ids.length > 0) {
    // Tools with equal pubCount get the same CASE rank; resourceName ASC breaks the tie
    const caseWhen = rankedIds
      .map(({ id, count }) => {
        const rank = rankedIds.filter(x => x.count > count).length
        return `WHEN '${id}' THEN ${rank}`
      })
      .join(' ')
    sql = `SELECT * FROM syn51730943 WHERE resourceId IN (${ids
      .map(id => `'${id}'`)
      .join(', ')}) ORDER BY CASE resourceId ${caseWhen} ELSE ${
      ids.length
    } END, resourceName ASC`
  }

  return (
    <CardContainerLogic
      initialLimit={3}
      sql={sql}
      cardConfiguration={toolsCardConfiguration}
    />
  )
}

export function meta(): MetaDescriptor[] {
  const portalDescription = import.meta.env.VITE_PORTAL_DESCRIPTION
  const portalUrl = `https://${import.meta.env.VITE_PORTAL_KEY}.synapse.org`
  return [
    { title: import.meta.env.VITE_PORTAL_NAME },
    { name: 'description', content: portalDescription },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'DataCatalog',
        '@id': portalUrl,
        keywords: [
          'neurofibromatosis',
          'schwannomatosis',
          'NF1',
          'NF2',
          'RASopathies',
          'rare tumor syndrome',
          'genetics',
          'tumor biology',
          'biomedical research',
          'Human Data',
          'Life Science',
        ],
        description:
          'The NF Data Portal provides a data repository for neurofibromatosis type 1 and schwannomatosis research data, aimed at improving understanding and treatment of the disorder.',
        name: 'NF Data Portal',
        provider: [
          {
            '@type': 'Organization',
            '@id': 'Sage Bionetworks',
            name: 'Sage Bionetworks',
            url: 'https://www.synapse.org/',
          },
        ],
        alternateName: 'Neurofibromatosis Data Portal',
      },
    },
  ]
}

function SectionCTA({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        component="a"
        href={href}
        variant="text"
        sx={{
          color: '#125e81',
          fontWeight: 700,
          fontSize: '0.9rem',
          textTransform: 'none',
          px: 0,
        }}
      >
        {children} →
      </Button>
    </Box>
  )
}

export default function HomePage() {
  return (
    <>
      <NFHero />
      <NFStatsBanner />

      {/* Featured Datasets — white bg */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              mb: 3,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 700,
                color: '#1B2A41',
              }}
            >
              Featured Datasets
            </Typography>
            <SectionCTA href="/Explore/Datasets">View all datasets</SectionCTA>
          </Box>
          <CardContainerLogic
            initialLimit={3}
            columnAliases={datasetColumnAliases}
            sql={newDatasetsSql}
            cardConfiguration={datasetCardConfiguration}
          />
        </Container>
      </Box>

      {/* Tools — light gray bg */}
      <Box sx={{ bgcolor: '#F5F7FA', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              mb: 3,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 700,
                color: '#1B2A41',
              }}
            >
              Tools the NF Community is Using
            </Typography>
            <SectionCTA href="/Explore/Tools">View all tools</SectionCTA>
          </Box>
          <TopToolsByPublications />
        </Container>
      </Box>

      {/* Funders — white bg */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 700,
                color: '#1B2A41',
              }}
            >
              Funding the{' '}
              <Link
                href="/About/Our-Mission"
                underline="hover"
                sx={{ color: 'inherit', fontWeight: 'inherit' }}
              >
                NF Open Science Initiative
              </Link>
            </Typography>
          </Box>
          <FundersLogoRow />
        </Container>
      </Box>
    </>
  )
}
