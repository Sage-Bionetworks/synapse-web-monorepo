import { Box, Typography, Link } from '@mui/material'
import HeaderSearchBox from '../HeaderSearchBox'
import Header from '../Header'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries'
import { AddAlertTwoTone } from '@mui/icons-material'

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
    { value: 'student', label: 'Student' },
    { value: 'patientAdvocate', label: 'Patient Advocate' },
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
          Welcome to the Cancer Complexity Knowledge Portal
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
            sx={{ width: '16px', height: '16px', marginRight: '7px' }}
          />
          Subscribe to our newsletter
        </Link>
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
