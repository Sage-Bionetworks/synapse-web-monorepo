import { Box, Typography, Link } from '@mui/material'
import HeaderSearchBox from '../HeaderSearchBox'
import Header from '../Header'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries'
import { AddAlertTwoTone } from '@mui/icons-material'
import { TypeAnimation } from 'react-type-animation'
import headerBackground from '../assets/cckp-header-background.jpeg'

const CancerComplexityHeader = () => {
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
      Discover and explore resources&nbsp;
      <Box
        component={'span'}
        sx={theme => ({
          [theme.breakpoints.up('md')]: {
            display: 'block',
          },
        })}
      ></Box>
      about&nbsp;
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
            color: '#76E9F0',
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
            fontSize: { xs: '26px', md: '36px' },
            fontWeight: '700',
            marginBottom: '15px',
            lineHeight: '42px',
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
              background: `linear-gradient(90deg, rgba(70, 61, 201, 0.90) 25%, rgba(70, 61, 201, 0.00) 100%), url(${headerBackground}) lightgray 0px -170.097px / 100% 247.253% no-repeat;`,
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
