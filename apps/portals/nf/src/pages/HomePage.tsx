import type { MetaDescriptor } from 'react-router'
import { Box, Button, Container, Link, Typography } from '@mui/material'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
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
          <CardContainerLogic
            initialLimit={3}
            sql={newToolsSql}
            cardConfiguration={toolsCardConfiguration}
          />
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
