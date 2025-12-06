import React from 'react'
import { Box, Typography } from '@mui/material'
import exploreIcon from './assets/explore_icon.png'
import uncoverIcon from './assets/uncover_icon.png'
import accessIcon from './assets/access_icon.png'
import { PortalSectionHeader } from 'synapse-react-client'

export function IconSquare({ iconUrl, headline, description }) {
  return (
    <div>
      <Box
        sx={theme => ({
          width: '100px',
          height: '100px',
          backgroundImage: `url(${iconUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          [theme.breakpoints.down('sm')]: {
            margin: 'auto',
          },
        })}
      ></Box>
      <Typography
        variant="headline3"
        sx={{
          mb: '10px',
          maxWidth: '100%',
          fontWeight: 400,
        }}
      >
        {headline}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: '100%',
          fontSize: '13px',
        }}
      >
        {description}
      </Typography>
    </div>
  )
}

const ELGettingStarted = (): React.ReactNode => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        display: 'grid',
        padding: { xs: '40px', md: '80px' },
        gridTemplateColumns: { xs: '1fr', md: '1fr 3fr' },
        gap: { xs: '50px', md: '80px' },
      }}
    >
      <PortalSectionHeader
        reverseButtonAndText
        title="Getting Started"
        summaryText="We provide all the help you need for navigating the portal and
        accelerating your research."
        buttonText="Visit Our Help Section"
        link="https://help.eliteportal.org/help/"
        sx={{
          h2: {
            fontSize: '24px',
            width: '100%',
            borderColor: 'rgba(255, 255, 255, 0.40)',
            color: 'primary.contrastText',
          },
          '& p': { fontSize: '16px', color: 'primary.contrastText' },
          '.MuiButton-root': { border: '1px solid white' },
        }}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
        }}
      >
        <IconSquare
          iconUrl={exploreIcon}
          headline="Explore"
          description="Get the latest data, publications, and news from the Exceptional
         Longevity Research community"
        />
        <IconSquare
          iconUrl={accessIcon}
          headline="Access"
          description="Download data, review metadata, and obtain method summaries for
          the latest groundbreaking studies."
        />
        <IconSquare
          iconUrl={uncoverIcon}
          headline="Uncover"
          description="Analyze and transform the data using translational research tools
          and AI/ML models. Make a longevity breakthrough. Then repeat."
        />
      </Box>
    </Box>
  )
}

export default ELGettingStarted
