import { Stack, Box, Typography } from '@mui/material'
import { ReactComponent as HowToAccessDataLogo } from '../../../../portals/ampals/src/config/style/howToAccessDataLogo.svg'
import { ReactComponent as GeneExpressionOmnibusLogo } from '../../../../portals/ampals/src/config/style/geneExpressionOmnibus.svg'
import { ReactComponent as RDCADAP } from '../../../../portals/ampals/src/config/style/RDCADAP.svg'
import SynapseFullLogo from 'synapse-react-client/assets/icons/SynapseFullLogo'

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
        flexDirection: { xs: 'column', lg: 'row' },
        gap: { xs: '40px', lg: '80px' },
        padding: {
          xs: '40px',
          md: '60px 80px 80px 80px',
        },
      }}
    >
      {/* Left */}
      <Stack sx={{ alignItems: { xs: 'center', lg: 'initial' }, gap: '20px' }}>
        <Typography variant="headline1" sx={{ lineHeight: 'normal' }}>
          How to Access Data
        </Typography>
        {/* Todo */}
        {/* <Button
          variant="contained"
          component={Link}
          sx={{ width: { xs: '100%', sm: 'fit-content' }, padding: '6px 24px' }}
        >
          More about accessing data
        </Button> */}
        <Box sx={{ marginTop: 'auto' }}>
          <HowToAccessDataLogo />
        </Box>
      </Stack>
      {/* Right */}
      <Stack sx={{ gap: { xs: '40px', lg: '24px' } }}>
        <Box
          sx={{
            display: 'flex',
            gap: '40px',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {accessDataSteps.map((step, index) => (
            <Stack sx={{ gap: { xs: '10px', lg: 0 } }}>
              <Box
                sx={theme => ({
                  [theme.breakpoints.down('md')]: {
                    display: 'flex',
                    alignItems: 'center',
                    margin: 0,
                    gap: '8px',
                  },
                })}
              >
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
                    marginBottom: { xs: 0, md: '20px' },
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
              </Box>
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
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#F4F7FA',
          }}
        >
          <Stack sx={{ gap: '10px' }}>
            <Typography>
              The ALS Knowledge Portal indexes data from multiple repositories.
              Repositories have different procedures for requesting access to
              data, and you may need to make multiple requests to access data
              from them.
            </Typography>
            {/* Todo */}
            {/* <Link>
              Learn more about accessing data from the ALS Knowledge Portal
            </Link> */}
          </Stack>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              minWidth: { xs: 'initial', lg: '414px' },
              gap: '16px',
              justifyContent: { xs: 'center', lg: 'initial' },
              alignItems: 'center',
            }}
          >
            <a
              href="https://www.ncbi.nlm.nih.gov/geo/"
              target="_blank"
              rel="noreferrer"
            >
              <GeneExpressionOmnibusLogo />
            </a>
            <a
              href="https://c-path.org/programs/rdca-dap/"
              target="_blank"
              rel="noreferrer"
            >
              <RDCADAP />
            </a>
            <a
              href="https://www.synapse.org/Home:x"
              target="_blank"
              rel="noreferrer"
            >
              <SynapseFullLogo color={'#2E4761'} />
            </a>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default HowToAccessData
