import { Stack, Link, Button, Box, Typography } from '@mui/material'
import { ReactComponent as HowToAccessDataLogo } from '../../../../portals/ampals/src/config/style/howToAccessDataLogo.svg'
const HowToAccessData = () => {
  const accessDataSteps = [
    {
      title: 'Select data',
      description:
        'Search, browse, or filter data on the ALS Knowledge Portal, then add it to your Download List.',
    },
    {
      title: 'Request access',
      description:
        'Through this website, or an external repository. We’ll point you to the right spot.',
    },
    {
      title: 'Analyze or download the data',
      description:
        'After being approved for access, follow the links in your email to use the data.',
    },
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        padding: {
          xs: '40px',
          md: '60px 80px 80px 80px',
        },
      }}
    >
      {/* Left */}
      <Stack>
        <Typography variant="headline1" sx={{ lineHeight: 'normal' }}>
          How to Access Data
        </Typography>
        <Button variant="contained" component={Link}>
          More about accessing data
        </Button>
        <HowToAccessDataLogo />
      </Stack>
      {/* Right */}
      <Stack sx={{ gap: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            gap: '40px',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {accessDataSteps.map((step, index) => (
            <Stack>
              <Box
                sx={{
                  padding: '13.5px 18px 13.5px 16.5px',
                  borderRadius: '22.125px',
                  background: 'rgba(20, 126, 248, 0.15)',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '24px',
                  }}
                >
                  {index + 1}
                </Typography>
              </Box>
              <Typography variant="headline3" sx={{ lineHeight: 'normal' }}>
                {step.title}
              </Typography>
              <Typography sx={{ lineHeight: '22.4px' }}>
                {step.description}
              </Typography>
            </Stack>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Stack sx={{ gap: '10px' }}>
            <Typography>
              The ALS Knowledge Portal indexes data from multiple repositories.
              Repositories have different procedures for requesting access to
              data, and you may need to make multiple requests to access data
              from them.
            </Typography>
            <Link>
              Learn more about accessing data from the ALS Knowledge Portal
            </Link>
          </Stack>
          <Box sx={{ display: 'flex' }}>icons</Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default HowToAccessData
