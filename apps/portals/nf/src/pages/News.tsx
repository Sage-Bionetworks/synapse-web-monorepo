import { useState } from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Link,
  Typography,
} from '@mui/material'
import {
  Article,
  Biotech,
  Campaign,
  Groups,
  OpenInNew,
  RssFeed,
} from '@mui/icons-material'

type Category = 'portal' | 'funder' | 'research' | 'community'

type NewsSource = {
  name: string
  description: string
  url: string
  category: Category
  social?: { platform: string; url: string }[]
}

const SOURCES: NewsSource[] = [
  {
    name: 'NF-OSI Updates',
    description:
      'Portal announcements, new datasets, feature releases, and open science initiatives from the NF Open Science Initiative.',
    url: 'https://github.com/nf-osi',
    category: 'portal',
    social: [
      { platform: 'GitHub', url: 'https://github.com/nf-osi' },
      {
        platform: 'Newsletter',
        url: 'https://sagebionetworks.us7.list-manage.com/subscribe?u=b146de537186191a9d2110f3a&id=063befda5a',
      },
    ],
  },
  {
    name: "Children's Tumor Foundation (CTF)",
    description:
      'Driving research toward treatments and a cure for NF1, NF2, and schwannomatosis.',
    url: 'https://www.ctf.org/news/',
    category: 'funder',
    social: [
      { platform: 'Blog', url: 'https://www.ctf.org/news/' },
      { platform: 'Twitter/X', url: 'https://twitter.com/ctf_org' },
    ],
  },
  {
    name: 'Neurofibromatosis Therapeutic Acceleration Program (NTAP)',
    description:
      'Accelerating development of therapies for NF1-related tumors through academic-industry partnerships.',
    url: 'https://www.ntap.us.com/news',
    category: 'funder',
    social: [{ platform: 'News', url: 'https://www.ntap.us.com/news' }],
  },
  {
    name: 'Gilbert Family Foundation (GFF)',
    description:
      'Funding NF2-focused research and supporting patients affected by NF2-related schwannomatosis.',
    url: 'https://gilbertfamilyfoundation.org/',
    category: 'funder',
    social: [
      { platform: 'Website', url: 'https://gilbertfamilyfoundation.org/' },
    ],
  },
  {
    name: 'NF Research Initiative (NFRI)',
    description:
      'Coordinating NF research funding and accelerating discovery across the NF spectrum.',
    url: 'https://nfresearch.org/',
    category: 'funder',
    social: [{ platform: 'Website', url: 'https://nfresearch.org/' }],
  },
  {
    name: 'Sage Bionetworks',
    description:
      'Sage Bionetworks operates Synapse, the collaborative data platform underlying the NF Data Portal, and supports open science infrastructure for NF research.',
    url: 'https://sagebionetworks.org/news/',
    category: 'research',
    social: [
      { platform: 'Blog', url: 'https://sagebionetworks.org/news/' },
      { platform: 'Twitter/X', url: 'https://twitter.com/sagebio' },
    ],
  },
  {
    name: 'NF Network',
    description:
      'Community hub for the NF research community, sharing protocols, datasets, and collaborative opportunities.',
    url: 'https://nfnetwork.org/',
    category: 'community',
    social: [{ platform: 'Website', url: 'https://nfnetwork.org/' }],
  },
  {
    name: 'NF Midwest',
    description:
      'Regional NF advocacy and patient support sharing research updates.',
    url: 'https://www.nfmidwest.org/news/',
    category: 'community',
    social: [{ platform: 'News', url: 'https://www.nfmidwest.org/news/' }],
  },
]

const CATEGORY_META: Record<
  Category,
  { label: string; color: string; icon: React.ReactNode }
> = {
  portal: {
    label: 'Portal & NF-OSI',
    color: '#125e81',
    icon: <Campaign sx={{ fontSize: 14 }} />,
  },
  funder: {
    label: 'Funder',
    color: '#1B7A4A',
    icon: <Biotech sx={{ fontSize: 14 }} />,
  },
  research: {
    label: 'Research',
    color: '#5B3FA6',
    icon: <Article sx={{ fontSize: 14 }} />,
  },
  community: {
    label: 'Community',
    color: '#B05C0A',
    icon: <Groups sx={{ fontSize: 14 }} />,
  },
}

const FILTERS: { key: Category | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'portal', label: 'Portal & NF-OSI' },
  { key: 'funder', label: 'Funder' },
  { key: 'research', label: 'Research' },
  { key: 'community', label: 'Community' },
]

export default function News() {
  const [activeFilter, setActiveFilter] = useState<Category | 'all'>('all')

  const filtered =
    activeFilter === 'all'
      ? SOURCES
      : SOURCES.filter(s => s.category === activeFilter)

  return (
    <Box sx={{ bgcolor: '#F5F7FA', minHeight: '100vh', pb: 8 }}>
      {/* Page header */}
      <Box
        sx={{
          background: 'linear-gradient(180deg, #EAF2F8 0%, #F5F9FC 100%)',
          borderBottom: '1px solid #DDE3EA',
          py: { xs: 5, md: 7 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#125e81',
              mb: 1.5,
            }}
          >
            NF Data Portal
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 700,
              color: '#1B2A41',
              mb: 2,
            }}
          >
            NF Community News &amp; Updates
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#354A63', fontSize: '1.0625rem', maxWidth: 640 }}
          >
            Stay connected with the NF research community — funders, research
            labs, patient advocacy organizations, and the NF Data Portal itself.
          </Typography>
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mt: 2.5 }}
          >
            <RssFeed sx={{ fontSize: 18, color: '#125e81' }} />
            <Link
              href="https://sagebionetworks.us7.list-manage.com/subscribe?u=b146de537186191a9d2110f3a&id=063befda5a"
              target="_blank"
              underline="hover"
              sx={{ color: '#125e81', fontWeight: 700, fontSize: '0.9rem' }}
            >
              Subscribe to the NF-OSI Newsletter
            </Link>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pt: 5 }}>
        {/* Filter chips */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
          {FILTERS.map(f => (
            <Chip
              key={f.key}
              label={f.label}
              clickable
              onClick={() => setActiveFilter(f.key)}
              variant={activeFilter === f.key ? 'filled' : 'outlined'}
              sx={{
                fontWeight: 600,
                fontSize: '0.8125rem',
                bgcolor: activeFilter === f.key ? '#125e81' : 'transparent',
                color: activeFilter === f.key ? '#fff' : '#125e81',
                borderColor: '#125e81',
                '&:hover': {
                  bgcolor:
                    activeFilter === f.key ? '#0e4d6a' : 'rgba(18,94,129,0.08)',
                },
              }}
            />
          ))}
        </Box>

        {/* Cards grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 2.5,
          }}
        >
          {filtered.map(source => {
            const meta = CATEGORY_META[source.category]
            return (
              <Card
                key={source.name}
                elevation={0}
                sx={{
                  border: '1px solid #DDE3EA',
                  borderRadius: 2,
                  bgcolor: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardActionArea
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ flex: 1, alignItems: 'flex-start', p: 0 }}
                >
                  <CardContent sx={{ p: 2.5 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: 1,
                      }}
                    >
                      <Chip
                        icon={meta.icon as React.ReactElement}
                        label={meta.label}
                        size="small"
                        sx={{
                          fontSize: '0.7rem',
                          height: 22,
                          bgcolor: `${meta.color}18`,
                          color: meta.color,
                          fontWeight: 700,
                          border: 'none',
                        }}
                      />
                      <OpenInNew
                        sx={{
                          fontSize: 14,
                          color: '#8A9BB0',
                          flexShrink: 0,
                          mt: 0.25,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: '#1B2A41',
                        fontSize: '0.9375rem',
                        lineHeight: 1.3,
                        mt: 1,
                        mb: 0.75,
                      }}
                    >
                      {source.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#354A63',
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {source.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {source.social && source.social.length > 0 && (
                  <Box
                    sx={{
                      px: 2.5,
                      pb: 2,
                      pt: 0,
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 0.75,
                    }}
                  >
                    {source.social.map(s => (
                      <Chip
                        key={s.platform}
                        label={s.platform}
                        size="small"
                        component="a"
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        clickable
                        sx={{
                          fontSize: '0.75rem',
                          height: 24,
                          bgcolor: '#EAF2F8',
                          color: meta.color,
                          fontWeight: 600,
                          '&:hover': { bgcolor: '#d4e8f3' },
                        }}
                      />
                    ))}
                  </Box>
                )}
              </Card>
            )
          })}
        </Box>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#8A9BB0' }}>
            Know a resource that should be listed here?{' '}
            <Link
              href="https://github.com/nf-osi/nf-metadata-dictionary/issues"
              target="_blank"
              underline="hover"
              sx={{ color: '#125e81' }}
            >
              Open an issue on GitHub
            </Link>{' '}
            or reach out via the NF-OSI newsletter.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
