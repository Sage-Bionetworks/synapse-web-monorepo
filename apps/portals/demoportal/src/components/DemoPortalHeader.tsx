import React from 'react'
import { Box, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import { visuallyHidden } from 'synapse-react-client'
import HeaderSearchBox from '@sage-bionetworks/synapse-portal-framework/components/HeaderSearchBox'
import { usePortalContext } from '@sage-bionetworks/synapse-portal-framework/components/PortalContext'

type DemoPortalHeaderProps = {
  headerImageURL?: string
}

const animationPhrases = ['your resources', 'datasets', 'files']

const searchPlaceholder = 'Search for data and resources'
const searchExampleTerms = ['datasets', 'files']

const DemoPortalHeader = (props: DemoPortalHeaderProps): React.ReactNode => {
  const { portalName, portalDescription } = usePortalContext()
  const { headerImageURL } = props

  const background = headerImageURL
    ? `linear-gradient(90deg, #2360A6 35.64%, rgba(35, 96, 166, 0.00) 77.15%), url(${headerImageURL}) lightgray 0px -170.097px / 100% 247.253% no-repeat`
    : 'linear-gradient(135deg, #2d3e80 0%, #526bb6 60%, #7b93d1 100%)'

  const discoverAndExplore = (
    <Box sx={{ color: 'grey.100' }}>
      Discover and explore&nbsp;
      <Box
        component="span"
        sx={theme => ({
          [theme.breakpoints.up('sm')]: {
            display: 'block',
          },
          [theme.breakpoints.down('sm')]: {
            minHeight: '150px',
          },
        })}
      >
        <TypeAnimation
          aria-hidden="true"
          sequence={animationPhrases.flatMap(phrase => [phrase, 3000])}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          style={{ fontWeight: 700, color: '#76E9F0' }}
        />
        <Box component="span" sx={visuallyHidden}>
          {animationPhrases.join(', ')}
        </Box>
      </Box>
    </Box>
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
          background,
        }}
      >
        <Box
          sx={{
            margin: 0,
            flex: 1,
            padding: { xs: '40px', lg: '40px 55px' },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '42px', md: '48px' },
              fontWeight: 'bold',
              marginBottom: '15px',
              lineHeight: '54px',
            }}
          >
            Welcome to the {portalName}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '26px', md: '36px' },
              fontWeight: 700,
              marginBottom: '15px',
              lineHeight: '42px',
            }}
          >
            {discoverAndExplore}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#FFFFFF', fontSize: '18px', lineHeight: '144%' }}
          >
            {portalDescription}
          </Typography>
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

export default DemoPortalHeader
