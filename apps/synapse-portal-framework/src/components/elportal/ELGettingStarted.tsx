import { Box, Button, Typography } from '@mui/material'
import exploreIcon from './assets/explore_icon.png'
import uncoverIcon from './assets/uncover_icon.png'
import accessIcon from './assets/access_icon.png'

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
          color: 'white',
          fontWeight: 400,
        }}
      >
        {headline}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: '100%',
          color: 'white',
          fontSize: '13px',
        }}
      >
        {description}
      </Typography>
    </div>
  )
}

const ELGettingStarted = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        display: 'grid',
        padding: { xs: '40px', md: '80px' },
        gridTemplateColumns: { xs: '1fr', md: '1fr 3fr' },
        gap: { xs: '50px', md: '80px' },
      }}
    >
      <Box
        sx={{
          borderTop: '3px solid #ffffff88',
          py: '20px',
        }}
      >
        <Typography
          variant="headline2"
          sx={{
            width: '100%',
            color: 'white',
            fontSize: '24px',
          }}
        >
          Getting Started
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '100%',
            my: '16px',
            color: 'white',
            fontStyle: 'italic',
            fontSize: '13px',
            lineHeight: '20px',
          }}
        >
          We provide all the help you need for navigating the portal and
          accelerating your research.
        </Typography>
        <Button
          variant="contained"
          href="https://help.eliteportal.org/help/"
          rel="noopener noreferrer"
          target="_blank"
          sx={theme => ({
            border: '1px solid white',
            padding: '6px 24px',
            fontSize: '14px',
            [theme.breakpoints.down('sm')]: {
              width: '100%',
            },
          })}
        >
          Visit Our Help Section
        </Button>
      </Box>
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
