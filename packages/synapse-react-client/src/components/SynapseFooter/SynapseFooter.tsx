import { ReactComponent as Facebook } from '@/assets/homepage/facebook.svg'
import { ReactComponent as Github } from '@/assets/homepage/github.svg'
import { ReactComponent as Instagram } from '@/assets/homepage/instagram.svg'
import { ReactComponent as LinkedIn } from '@/assets/homepage/linkedin.svg'
import { ReactComponent as Twitter } from '@/assets/homepage/twitter.svg'
import { ReactComponent as Youtube } from '@/assets/homepage/youtube.svg'
import SageFullLogo from '@/assets/icons/SageFullLogo'
import SynapseFullLogo from '@/assets/icons/SynapseFullLogo'
import { useSynapseContext } from '@/utils'
import { useOneSageURL } from '@/utils/hooks/useOneSageURL'
import { Box, Button, Typography } from '@mui/material'
import ExperimentalMode from '../ExperimentalMode'
import { PLANS_LINK } from '../SynapseHomepageV2/SynapseHomepageNavBar'
import { SynapseLinksColumn } from './SynapseLinksColumn'

export type SynapseFooterProps = {
  portalVersion: string
  srcVersion: string
  repoVersion: string
  gotoPlace: (href: string) => void
  onExperimentalModeToggle: (newValue: boolean) => void
}

const currentYear = new Date().getFullYear()
export function SynapseFooter({
  portalVersion,
  srcVersion,
  repoVersion,
  gotoPlace,
  onExperimentalModeToggle,
}: SynapseFooterProps) {
  const { isAuthenticated } = useSynapseContext()
  const registrationUrl = useOneSageURL('/register1')
  const sageResourcesUrl = useOneSageURL('/sageresources')

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          backgroundColor: 'primary.800',
          p: '50px 50px 20px 50px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            rowGap: '50px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <SynapseFullLogo color="white" />
            <Typography
              variant="body1Italic"
              sx={{ color: 'primary.200', fontSize: '13px', mb: '25px' }}
            >
              Powered by Sage Bionetworks
            </Typography>
            {!isAuthenticated && (
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  fontSize: '32px',
                  lineHeight: '46px',
                  fontWeight: 400,
                  mb: '30px',
                }}
              >
                Sign up for Synapse today
              </Typography>
            )}
            {!isAuthenticated && (
              <Box sx={{ display: 'flex', columnGap: '20px' }}>
                <Button
                  variant="outlined"
                  color="lightPrimary"
                  onClick={() => {
                    gotoPlace('/LoginPlace:0')
                  }}
                >
                  Login to Synapse
                </Button>
                <Button
                  variant="contained"
                  color="lightPrimary"
                  href={registrationUrl.toString()}
                >
                  Register Now
                </Button>
              </Box>
            )}
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                columnGap: '60px',
                rowGap: '40px',
                flexWrap: 'wrap',
              }}
            >
              <SynapseLinksColumn
                category="Synapse"
                synapseLinks={[
                  {
                    text: 'Contact Us',
                    props: {
                      href: 'https://sagebionetworks.jira.com/servicedesk/customer/portals',
                    },
                  },
                  {
                    text: 'Plans',
                    props: {
                      href: PLANS_LINK,
                      target: '_self',
                    },
                  },
                  {
                    text: 'Data Portals',
                    props: { href: sageResourcesUrl.toString() },
                  },
                  {
                    text: 'Donate',
                    props: { href: 'https://sagebionetworks.org/donate' },
                  },
                ]}
              />
              <SynapseLinksColumn
                category="Resources"
                synapseLinks={[
                  {
                    text: 'Blog',
                    props: { href: 'https://blog.synapse.org/' },
                  },
                  {
                    text: 'FAQs',
                    props: {
                      href: 'https://help.synapse.org/docs/FAQ.2047967233.html',
                    },
                  },
                  {
                    text: 'Documentation',
                    props: { href: 'https://help.synapse.org/docs/' },
                  },
                  {
                    text: 'Python Client',
                    props: {
                      href: 'https://python-docs.synapse.org/en/stable/',
                    },
                  },
                ]}
              />
              <SynapseLinksColumn
                category="Sage Bionetworks"
                synapseLinks={[
                  {
                    text: 'Sage Home Page',
                    props: { href: 'https://sagebionetworks.org/' },
                  },
                  {
                    text: 'Report Violations',
                    props: {
                      href: 'https://sagebionetworks.jira.com/servicedesk/customer/portal/20',
                    },
                  },
                  {
                    text: 'Trust Center',
                    props: { href: 'https://sagebionetworks.org/trust-center' },
                  },
                ]}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: 'center',
            mt: '60px',
            rowGap: '40px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              columnGap: '20px',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: undefined },
            }}
          >
            <SageFullLogo textColor="white" width={285} />
            <Typography
              variant="body1"
              sx={{
                color: 'primary.200',
                fontSize: '18px',
              }}
            >
              © Sage Bionetworks {currentYear}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              columnGap: '15px',
              svg: {
                '&:hover': {
                  stroke: 'rgba(255, 255, 255, .4)',
                  // fill: 'rgba(245, 246, 241, .05)',  //uncomment if extra emphasis is needed
                },
              },
            }}
          >
            <a
              href="https://github.com/Sage-Bionetworks"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://twitter.com/sagebio"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/company/sage-bionetworks"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://www.facebook.com/sagebionetworks/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/sagebionetworks/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCiWTMRdO82wNq6o8JOs3WzQ"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube />
            </a>
          </Box>
        </Box>
      </Box>
      {/* Versions and experimental mode */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          backgroundColor: '#121B23',
          alignItems: 'center',
          p: '15px 50px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            columnGap: '40px',
            rowGap: '0px',
            color: 'primary.300',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
            }}
          >
            portal: {portalVersion}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
            }}
          >
            synapse-react-client: {srcVersion}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
            }}
          >
            repo: {repoVersion}
          </Typography>
        </Box>
        <ExperimentalMode onExperimentalModeToggle={onExperimentalModeToggle} />
      </Box>
    </Box>
  )
}

export default SynapseFooter
