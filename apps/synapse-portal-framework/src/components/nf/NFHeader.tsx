import { Box, Typography } from '@mui/material'
import HeaderSearchBox from '../HeaderSearchBox'
import Header from '../Header'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries'

const NFHeader = () => {
  const searchPlaceholder =
    'Search for neurofibromatosis related data and resources'
  const searchExampleTerms = [
    'Justo Turpis',
    'Nostra',
    'Fames',
    'Rhoncus',
    'Pharetra enim',
    'Aliquet',
    'Ridiculus',
    'Penatibus',
    'Accumsan quisque',
    'Patient Advocacy',
  ]
  const isFeatureEnabled = useGetFeatureFlag(
    FeatureFlagEnum.PORTAL_SEARCH_HEADER,
  )
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
          A home for Neurofibromatosis research resources
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '18px', lineHeight: '144%' }}
        >
          The NF Data Portal was created to help openly explore and share NF
          datasets, analysis tools, resources, and publications related to
          neurofibromatosis and schwannomatosis. Anyone can join the NF Open
          Science Initiative (NF-OSI) to contribute!
        </Typography>
      </Box>
    </>
  )
  return (
    <>
      {isFeatureEnabled ? (
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
      ) : (
        <Header />
      )}
    </>
  )
}

export default NFHeader
