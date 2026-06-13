import { Box, Container, Link, Typography } from '@mui/material'
import HeaderSearchBox from '@sage-bionetworks/synapse-portal-framework/components/HeaderSearchBox'
import favicon from '/favicon.svg?url'

const SEARCH_EXAMPLES = [
  'cutaneous neurofibroma',
  'drug screening',
  'vision restoration',
  'schwann',
  'malignant tumors',
  'whole genome sequencing',
  'study with data available',
  'patient reported outcomes',
]

/**
 * Homepage hero — light gradient, dark text, matches the NF Data Portal design system.
 * Search is prominent and integrated here (also accessible from the Search nav link).
 */
export default function NFHero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'linear-gradient(135deg, #D6EBF7 0%, #EAF2F8 40%, #F5F9FC 100%)',
        borderBottom: '1px solid #DDE3EA',
      }}
    >
      {/* decorative watermark */}
      <Box
        component="img"
        src={favicon}
        aria-hidden
        sx={{
          position: 'absolute',
          right: -60,
          top: -40,
          width: { xs: 240, md: 420 },
          height: { xs: 240, md: 420 },
          opacity: 0.18,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ py: { xs: 5, md: 8 }, position: 'relative' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: { xs: 4, lg: 6 },
            alignItems: { lg: 'center' },
          }}
        >
          {/* Left: mission text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: '#1B2A41',
                mb: 2.5,
              }}
            >
              Open data for NF research
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.0625rem',
                lineHeight: 1.55,
                color: '#354A63',
              }}
            >
              The NF Data Portal is a community-driven platform that makes
              neurofibromatosis research data findable, accessible, and reusable
              — accelerating discoveries for NF1, NF2-related schwannomatosis,
              and non-NF2 schwannomatosis.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.0625rem',
                lineHeight: 1.55,
                color: '#354A63',
                mt: 1.5,
              }}
            >
              <Link
                href="https://sagebionetworks.us7.list-manage.com/subscribe?u=b146de537186191a9d2110f3a&id=063befda5a"
                target="_blank"
                underline="hover"
                sx={{ color: '#125e81', fontWeight: 600 }}
              >
                Subscribe to the NF-OSI Newsletter
              </Link>{' '}
              to learn about new datasets, tools, publications, funding
              opportunities, and other portal updates.
            </Typography>
          </Box>

          {/* Right: search box */}
          <Box sx={{ flex: 1, maxWidth: { lg: 520 } }}>
            <HeaderSearchBox
              searchExampleTerms={SEARCH_EXAMPLES}
              searchPlaceholder="Search studies, datasets, files, tools…"
              path="/Search"
              sx={{
                '& > :first-child': {
                  background: 'rgba(255,255,255,0.85)',
                  borderRadius: '8px',
                  border: '1px solid #DDE3EA',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
