import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeaderSearchBox from '@sage-bionetworks/synapse-portal-framework/components/HeaderSearchBox'
import { FTSConfig } from 'synapse-react-client/components/SynapseTable/SearchV2'

export type StandardsHeaderProps = {
  sql: string
  ftsConfig: FTSConfig
}

const StandardsHeader = (props: StandardsHeaderProps): React.ReactNode => {
  const searchPlaceholder = 'Search for a biomedical data standard'
  const searchExampleTerms = [
    'Imaging',
    'Integration',
    'Acquisition',
    'File formats',
    'Ontologies',
    'Machine learning platform',
    'Datasheets',
  ]

  const content = (
    <>
      <Box
        sx={{
          margin: 0,
          color: '#FFFF',
        }}
      >
        <Typography
          variant="headline1"
          sx={{
            fontSize: { xs: '42px', md: '48px' },
            fontWeight: 'bold',
            marginBottom: '15px',
            lineHeight: '54px',
          }}
        >
          Welcome to the Bridge2AI Standards Explorer
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '18px', lineHeight: '144%' }}
        >
          This portal is designed to support the Grand Challenges in biomedical
          data and artificial intelligence. By categorizing standards based on
          these challenges, the registry helps researchers and developers
          identify relevant tools and guidelines, foster collaboration, and
          accelerates progress toward solving complex scientific problems.
        </Typography>
        <Button
          variant="outlined"
          size="large"
          color="lightPrimary"
          href="/Explore"
          sx={{ mt: '20px' }}
        >
          Explore research Standards
        </Button>
        {/* not working yet, but was part of branch that I needed to
            get https://github.com/Sage-Bionetworks/synapse-web-monorepo/pull/1871
            working
        <Button
          variant="outlined"
          size="large"
          color="lightPrimary"
          href="/DataSetExplore"
          sx={{ mt: '20px', marginLeft: '10px' }}
        >
          Explore data sets
        </Button>
        */}
      </Box>
    </>
  )
  return (
    <header id="header">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0',
        }}
      >
        <Box
          sx={{
            margin: 0,
            flex: 1,
            padding: { xs: '40px', lg: '40px 80px' },
          }}
        >
          {content}
        </Box>
        <HeaderSearchBox
          searchExampleTerms={searchExampleTerms}
          searchPlaceholder={searchPlaceholder}
          path="/Search"
          sx={{
            flex: 1,
            '& > :first-child': {
              background: 'rgba(184, 204, 226, 0.60)',
            },
          }}
        />
      </Box>
    </header>
  )
}

export default StandardsHeader
