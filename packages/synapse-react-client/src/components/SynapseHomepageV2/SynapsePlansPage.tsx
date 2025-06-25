import {
  h2Sx,
  homepageBodyText,
} from '@/components/SynapseHomepageV2/HomepageStyles'
import { Box, Button, Typography } from '@mui/material'
import { SynapsePlans } from './SynapsePlans'
import { SynapseHomepageNavBar } from './SynapseHomepageNavBar'

export type SynapsePlansPageProps = {
  gotoPlace: (href: string) => void
}

export function SynapsePlansPage({ gotoPlace }: SynapsePlansPageProps) {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Box
        sx={{
          boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)',
        }}
      >
        <SynapseHomepageNavBar gotoPlace={gotoPlace} />
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          p: {
            xs: '30px',
            lg: '64px 0px',
          },
        }}
      >
        <Box sx={{ maxWidth: '900px', m: 'auto' }}>
          <Typography variant="headline1" sx={h2Sx}>
            Explore Synapse plans
          </Typography>
          <Typography
            variant="body1"
            sx={{
              ...homepageBodyText,
              pt: {
                xs: '20px',
                md: '48px',
              },
            }}
          >
            Sage offers multiple service plans to help you with your data
            sharing needs including NIH Data Management and Sharing plans.
          </Typography>
        </Box>
        <Box sx={{ py: { xs: '30px', md: '60px' } }}>
          <SynapsePlans />
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          p: {
            xs: '40px',
            lg: '60px 0px',
          },
          backgroundColor: '#172430',
        }}
      >
        <Box sx={{ maxWidth: '780px', m: 'auto' }}>
          <Typography
            variant="headline1"
            sx={{
              fontSize: { xs: '32px', md: '40px' },
              fontWeight: 600,
              color: 'white',
              lineHeight: { xs: '34px', md: '45px' },
            }}
          >
            Synapse gives you the tools to make your data discoverable
          </Typography>
        </Box>
        <Box sx={{ maxWidth: '900px', m: 'auto' }}>
          <Typography
            variant="body1"
            sx={{
              ...homepageBodyText,
              color: 'white',
              pt: '48px',
              pb: '44px',
            }}
          >
            Working on a grant proposal? Curious about what Synapse can do for
            you? Learn more about our plans and see which one is right for you.
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="light"
            href="https://sagebionetworks.jira.com/servicedesk/customer/portal/9/group/26/create/162"
            target="_blank"
            sx={{
              p: '5px 25px',
              width: {
                xs: '100%',
                md: 'auto',
              },
            }}
          >
            Contact us for more information
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SynapsePlansPage
