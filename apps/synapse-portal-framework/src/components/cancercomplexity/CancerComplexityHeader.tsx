import { Box, Typography, Link, useTheme } from '@mui/material'
import HeaderSearchBox from '../HeaderSearchBox'
import Header from '../Header'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries'
import { AddAlertTwoTone } from '@mui/icons-material'
import { TypeAnimation } from 'react-type-animation'

const CancerComplexityHeader = () => {
  const theme = useTheme()
  const searchPlaceholder = 'Search for cancer related data and resources'
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
  const roles = [
    { value: 'researcher', label: 'Researcher' },
    { value: 'principalInvestigator', label: 'Principal Investigator' },
    { value: 'funder', label: 'Funder' },
    { value: 'trainee', label: 'Trainee' },
    { value: 'patientAdvocate', label: 'Patient Advocate' },
  ]

  const discoverAndExplore = (
    <Box sx={{ color: 'grey.100' }}>
      Discover and explore recent research&nbsp;
      <Box
        component={'span'}
        sx={theme => ({
          [theme.breakpoints.up('md')]: {
            display: 'block',
          },
        })}
      ></Box>
      on&nbsp;
      <Box
        component={'span'}
        sx={theme => ({
          [theme.breakpoints.down('md')]: {
            display: 'block',
            minHeight: '100px',
          },
          [theme.breakpoints.down('sm')]: {
            minHeight: '150px',
          },
        })}
      >
        <TypeAnimation
          sequence={[
            'cancer',
            3000,
            'metastasis',
            3000,
            'tumor-immune microenvironment',
            3000,
            'drug resistance',
            3000,
            'tumor heterogeneity',
            3000,
            'software analysis tools',
            3000,
            'tumor progression',
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          style={{
            fontWeight: 700,
            color: '#35E7C6',
          }}
        />
      </Box>
    </Box>
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
          Welcome to the Cancer Complexity Knowledge Portal
        </Typography>
        <Typography
          variant="headline1"
          sx={{
            fontSize: { xs: '24px', md: '32px' },
            fontWeight: 'bold',
            marginBottom: '15px',
            lineHeight: '54px',
          }}
        >
          {discoverAndExplore}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '18px', lineHeight: '144%' }}
        >
          The Cancer Complexity Knowledge Portal or CCKP connects researchers to
          datasets, research tools, and publications to advance cancer biology
          and translational research. Access data from leading NCI-supported
          programs, explore computational methods, and find insights from
          peer-reviewed studies.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '18px', lineHeight: '144%' }}
        >
          <Link
            href="https://sagebionetworks.us7.list-manage.com/subscribe?u=b146de537186191a9d2110f3a&id=e933dc6962"
            target="_blank"
            sx={{
              color: 'white',
              '&:hover': { color: 'white', textDecorationColor: 'white' },
              '&:focus': { color: 'white' },
              textDecorationColor: 'white',
              marginTop: '15px',
              display: 'block',
            }}
          >
            <AddAlertTwoTone
              sx={{ width: '24px', height: '24px', mb: '-5px', mr: '7px' }}
            />
            Subscribe to our newsletter
          </Link>
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
              roles={roles}
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

export default CancerComplexityHeader
