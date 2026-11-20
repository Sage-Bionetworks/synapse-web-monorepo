import { Box, Button, Link, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'
import { Link as RouterLink } from 'react-router'
import { ReactComponent as HowToAccessDataLogo } from '../../portal-assets/howToAccessDataLogo.svg'
import { ReactComponent as GeneExpressionOmnibusLogo } from '../../portal-assets/geneExpressionOmnibus.svg'
import { ReactComponent as RdcaDapLogo } from '../../portal-assets/RDCADAP.svg'
import SynapseFullLogo from 'synapse-react-client/assets/icons/SynapseFullLogo'

export type HowToAccessDataProps = {
  /** Portal route for the full "How to Access Data" instructions page */
  moreInfoPath: string
}

type AccessSource = {
  title: string
  description: string
  logo: ReactNode
  href: string
}

const ACCESS_SOURCES: AccessSource[] = [
  {
    title: 'Open access',
    description:
      'Datasets in the Gene Expression Omnibus (GEO) are public. No request is needed.',
    logo: <GeneExpressionOmnibusLogo />,
    href: 'https://www.ncbi.nlm.nih.gov/geo/',
  },
  {
    title: 'Controlled access',
    description:
      'Datasets hosted in Synapse need a Synapse account and an approved data access request.',
    logo: <SynapseFullLogo color={'#2E4761'} />,
    href: 'https://www.synapse.org/Home:x',
  },
  {
    title: 'External application',
    description:
      'Critical Path Institute datasets are requested through RDCA-DAP, which has its own process.',
    logo: <RdcaDapLogo />,
    href: 'https://c-path.org/programs/rdca-dap/',
  },
]

const HowToAccessData = ({ moreInfoPath }: HowToAccessDataProps): ReactNode => {
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
      <Stack sx={{ alignItems: { xs: 'center', lg: 'initial' }, gap: '20px' }}>
        <Typography variant="headline1" sx={{ lineHeight: 'normal' }}>
          How to Access Data
        </Typography>
        <Button
          variant="contained"
          component={RouterLink}
          to={moreInfoPath}
          sx={{ width: { xs: '100%', sm: 'fit-content' }, padding: '6px 24px' }}
        >
          More about accessing data
        </Button>
        <Box sx={{ marginTop: 'auto' }}>
          <HowToAccessDataLogo />
        </Box>
      </Stack>
      <Stack sx={{ gap: { xs: '40px', lg: '24px' } }}>
        <Typography sx={{ lineHeight: '22.4px' }}>
          The ALS Knowledge Portal brings together data from multiple
          repositories. How you get access depends on where a dataset is hosted.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '40px',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {ACCESS_SOURCES.map(source => (
            <Stack key={source.title} sx={{ gap: '10px', flex: 1 }}>
              <Box
                component="a"
                href={source.href}
                target="_blank"
                rel="noreferrer"
                aria-label={source.title}
                sx={{ height: '48px', display: 'flex', alignItems: 'center' }}
              >
                {source.logo}
              </Box>
              <Typography variant="headline3" sx={{ lineHeight: 'normal' }}>
                {source.title}
              </Typography>
              <Typography sx={{ lineHeight: '22.4px' }}>
                {source.description}
              </Typography>
            </Stack>
          ))}
        </Box>
        <Box sx={{ padding: '20px', backgroundColor: '#F4F7FA' }}>
          <Typography>
            You may need to make separate requests to each repository.{' '}
            <Link component={RouterLink} to={moreInfoPath}>
              Learn more about accessing data from the ALS Knowledge Portal
            </Link>
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default HowToAccessData
