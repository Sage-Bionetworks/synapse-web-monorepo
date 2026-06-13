import type { MetaDescriptor } from 'react-router'
import { Box, Container, Typography } from '@mui/material'
import { SynapseMultiSeriesTimeSeriesPlot } from 'synapse-react-client/components/Plot/SynapseMultiSeriesTimeSeriesPlot'
import FundersLogoRow from '../components/FundersLogoRow'
import ResearchOutputNetworkSection from '../components/ResearchOutputNetworkSection'

export function meta(): MetaDescriptor[] {
  return [
    { title: 'Our Mission — NF Data Portal' },
    {
      name: 'description',
      content:
        'The NF Data Portal mission: accelerate NF research through open, FAIR data sharing across the neurofibromatosis community.',
    },
  ]
}

const PUB_BY_YEAR_SQL =
  'SELECT `year`, COUNT(*) AS n FROM syn16857542 WHERE `year` IS NOT NULL GROUP BY `year` ORDER BY `year`'
const DS_BY_YEAR_SQL =
  'SELECT createdOn FROM syn50913342 WHERE createdOn IS NOT NULL'
// One row per unique study entity at its Synapse creation date
const STUDY_BY_YEAR_SQL =
  'SELECT MIN(createdOn) AS createdOn, id FROM syn52677631 WHERE createdOn IS NOT NULL GROUP BY id'

export default function OurMissionPage() {
  return (
    <>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          background:
            'linear-gradient(135deg, #D6EBF7 0%, #EAF2F8 40%, #F5F9FC 100%)',
          borderBottom: '1px solid #DDE3EA',
          py: { xs: 6, md: 9 },
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#1B2A41',
              mb: 3,
            }}
          >
            Fueling Collaboration to End NF
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.65,
              color: '#354A63',
              maxWidth: 780,
              mx: 'auto',
              textAlign: 'left',
            }}
          >
            The NF Data Portal is a free, open-science platform built to
            centralise and share research data across the neurofibromatosis and
            schwannomatosis community. By making data FAIR — Findable,
            Accessible, Interoperable, and Reusable — we accelerate the pace of
            discovery and ensure every dataset contributes to the collective
            fight against NF.
          </Typography>
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {[
              {
                heading: 'Open Science',
                body: 'All data deposited in the portal is released under open or controlled-access licenses, making it available to researchers worldwide without barriers.',
              },
              {
                heading: 'FAIR Data',
                body: 'We apply the FAIR principles at every stage — from curation to publication — so that data remains discoverable and usable long after a study ends.',
              },
              {
                heading: 'Community-Driven',
                body: 'The portal is shaped by the NF research community: investigators, patients, funders, and advocates who share the goal of better treatments.',
              },
            ].map(({ heading, body }) => (
              <Box key={heading}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#125e81',
                    mb: 1,
                  }}
                >
                  {heading}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#354A63', lineHeight: 1.65 }}
                >
                  {body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Portal Growth */}
      <Box sx={{ bgcolor: '#F5F7FA', py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 700,
                color: '#1B2A41',
                mb: 1,
              }}
            >
              Better Science Together
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: '#354A63', lineHeight: 1.65, maxWidth: 680 }}
            >
              Every dataset, publication, and tool deposited in the portal
              represents a researcher choosing to share their work openly. The
              cumulative impact of that generosity — fuelled by our funders — is
              visible below.
            </Typography>
          </Box>
          <SynapseMultiSeriesTimeSeriesPlot
            series={[
              {
                sql: PUB_BY_YEAR_SQL,
                label: 'Publications',
                color: 'hsl(203, 43%, 44%)',
              },
              {
                sql: DS_BY_YEAR_SQL,
                label: 'Datasets',
                color: 'hsl(183, 38%, 43%)',
              },
              {
                sql: STUDY_BY_YEAR_SQL,
                label: 'Studies',
                color: 'hsl(30, 55%, 48%)',
              },
            ]}
            periodLabel="Year"
            mode="cumulative"
            height={300}
          />
        </Container>
      </Box>

      {/* Research Network */}
      <ResearchOutputNetworkSection />

      {/* Funders */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              color: '#1B2A41',
              mb: 4,
              textAlign: 'center',
            }}
          >
            Funding the NF Open Science Initiative
          </Typography>
          <FundersLogoRow />
        </Container>
      </Box>
    </>
  )
}
