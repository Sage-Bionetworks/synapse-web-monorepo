import BlinkingLiveIcon from '@/assets/homepage/BlinkingLiveIcon'
import { backgroundInlineJpeg } from '@/assets/homepage/header-splash'
import image1 from '@/assets/homepage/image1.svg?url'
import SageFullLogo from '@/assets/icons/SageFullLogo'
import {
  defaultHomepageText,
  h2Sx,
  homepageBodyText,
  sidePadding,
  titleSx,
} from '@/components/SynapseHomepageV2/HomepageStyles'
import { SAGE_OFFERINGS_HELP_URL } from '@/utils/SynapseConstants'
import {
  Box,
  Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import { SynapseByTheNumbers } from './SynapseByTheNumbers'
import { SynapseFeaturedDatasets } from './SynapseFeaturedDatasets'
import { SynapseFeatures } from './SynapseFeatures'
import { SynapseHomepageChatSearch } from './SynapseHomepageChatSearch'
import { SynapseHomepageNavBar } from './SynapseHomepageNavBar'
import { SynapseInAction } from './SynapseInAction'
import { SynapsePartners } from './SynapsePartners'
import { SynapsePlans } from './SynapsePlans'
import { SynapseSearchChips } from './SynapseSearchChips'
import { SynapseTrendingProjects } from './SynapseTrendingProjects'
import SynapseHotdropsBackground from './SynapseHotdropsBackground'
import { SynapseHotDrops } from './SynapseHotdrops'

export const synapseInActionTable = 'syn61670075'
export const past30DaysDownloadMetricsTable = 'syn61597084'
export const generalStatsMetricsTable = 'syn61588123'
export const featuredDatasetsTable = 'syn61609402'
export const searchAutocompleteTable = 'syn61670515'
export const newAndTrendingTable = 'syn69860278'

export type SynapseHomepageV2Props = {
  gotoPlace: (href: string) => void
}

export function SynapseHomepageV2({ gotoPlace }: SynapseHomepageV2Props) {
  const theme = useTheme()
  const tinyView = useMediaQuery('(max-width:385px)')
  const isDesktopView = useMediaQuery(theme.breakpoints.up('lg'))
  //optimization - prioritize loading above-the-fold content (delay loading below the fold)
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <SynapseHomepageNavBar gotoPlace={gotoPlace} />
      <Box
        sx={{
          position: 'relative',
          pb: {
            xs: '30px',
            md: '80px',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            background: `url(${backgroundInlineJpeg}) lightgray 50% / cover no-repeat`,
            minHeight: {
              xs: '550px',
              sm: '400px',
              md: '600px',
            },
            width: '100%',
            height: '100%',
            content: "''",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            clipPath: {
              xs: 'polygon(0 0, 100% 0, 100% 80%, 0% 100%)',
              md: 'polygon(0 0, 100% 0, 100% 65%, 0% 100%)',
            },
          }}
        >
          {' '}
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          p: {
            xs: '20px',
            lg: '80px 0px 0px 0px',
          },
          minHeight: tinyView
            ? '390px'
            : {
                xs: '330px',
                sm: '215px',
                md: '300px', //larger font
                lg: undefined,
              },
        }}
      >
        <Typography variant="headline1" sx={titleSx}>
          Explore the data
        </Typography>
        <Typography variant="headline1" sx={titleSx}>
          behind&nbsp;
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'the next cure',
              3000,
              'the next diagnostic',
              3000,
              'the next preventive therapy',
              3000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
            style={{
              color: '#B5D3CE',
            }}
          />
        </Typography>
      </Box>

      {/* Search */}
      <Box
        sx={{
          pt: { xs: '10px', md: '70px' },
          pr: '15px',
          maxWidth: '600px',
          m: 'auto',
        }}
      >
        <SynapseHomepageChatSearch gotoPlace={gotoPlace} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '1500px',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          mt: '30px',
          flexWrap: 'wrap',
          ml: { xs: '5px', md: 'auto' },
          mr: { xs: '5px', md: 'auto' },
        }}
      >
        {/* Hard-coded popular searches because these Chips are above the fold and immediately visible. Any delay showing these chips is a problem.
        The hope is that these "popularSearches" will not change much over time, since they represent the types of data in the platform.
        */}
        <SynapseSearchChips gotoPlace={gotoPlace} />
      </Box>
      <Box
        sx={{
          backgroundColor: '#F5F9F9',
          mt: { xs: '50px', md: '100px' },
        }}
      >
        <Box
          sx={{
            display: { xs: 'relative', lg: 'grid' },
            maxWidth: '1500px',
            gridTemplateColumns: '50% 50%',
            margin: 'auto',
            height: { lg: '608px' }, //force container to the same height as the image
          }}
        >
          <Box
            sx={{
              p: { xs: '25px', lg: '70px 0px 25px 60px' },
              svg: {
                maxWidth: '100%',
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: {
                xs: 'center',
                md: 'flex-start',
              },
            }}
            ref={ref} // use this UI to trigger loading the rest of the page content
          >
            <SageFullLogo width={350} />
            <Typography
              variant="headline2"
              sx={{
                ...defaultHomepageText,
                fontSize: {
                  xs: '24px',
                  md: '40px',
                },
                lineHeight: {
                  xs: '140%',
                  md: '60px',
                },
                maxWidth: '600px',
                color: 'secondary.600',
                mt: '20px',
                fontWeight: 400,
                mb: '35px',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              Created by <strong>Sage Bionetworks</strong>, Synapse empowers
              biomedical researchers with tools for open science and
              collaboration, forging a path to optimal human health.
            </Typography>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              href="https://www.sagebionetworks.org"
              target="_blank"
              sx={{
                p: '5px 25px',
                width: {
                  xs: '100%',
                  md: 'auto',
                },
              }}
            >
              About Sage Bionetworks
            </Button>
          </Box>
          {isDesktopView && (
            <Box sx={{ height: '100%', justifySelf: 'end' }}>
              <img src={image1} alt={''} />
            </Box>
          )}
        </Box>
      </Box>

      {/* Below the fold content... */}
      {inView && (
        <Box>
          <Box>
            <Box sx={{ padding: { xs: '45px 40px', md: '80px 25px' } }}>
              <Typography
                variant="headline1"
                sx={{
                  ...defaultHomepageText,
                  textAlign: 'center',
                  mt: '100px',
                  fontSize: { xs: '32px', md: '40px' },
                  lineHeight: '42px',
                  mb: '30px',
                }}
              >
                We partner with scientific leaders
              </Typography>
              <Box sx={{ m: 'auto', maxWidth: '750px' }}>
                <Typography
                  variant="headline1"
                  sx={{
                    ...homepageBodyText,
                    textAlign: 'center',
                    mb: '60px',
                  }}
                >
                  Synapse is your ecosystem for responsible data sharing,
                  innovative data reuse, and collaboration.
                </Typography>
              </Box>
              <SynapsePartners />
            </Box>
            <Box
              sx={{
                pb: {
                  xs: '100px',
                  md: '220px',
                },
                clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0% 100%)',
                backgroundColor: 'white',
                zIndex: 100,
              }}
            />
            <Box
              sx={{
                ...sidePadding,
                backgroundColor: '#223549',
                pt: {
                  xs: '90px',
                  md: '200px',
                },
                mt: {
                  xs: '-90px',
                  md: '-200px',
                },
                pb: '5px',
              }}
            >
              <Box
                sx={{
                  margin: 'auto',
                  maxWidth: '1500px',
                }}
              >
                <Typography
                  variant="headline1"
                  sx={{
                    ...h2Sx,
                    textAlign: 'center',
                    mt: '100px',
                    mb: '10px',
                    color: 'white',
                  }}
                >
                  Synapse by the numbers
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    ...homepageBodyText,
                    textAlign: 'center',
                    mb: '70px',
                    color: 'white',
                  }}
                >
                  <BlinkingLiveIcon sx={{ pt: '7px' }} /> Live
                </Typography>
                <SynapseByTheNumbers metricsTable={generalStatsMetricsTable} />
                <Typography
                  variant="headline2"
                  sx={{
                    ...defaultHomepageText,
                    textAlign: 'center',
                    fontSize: '36px',
                    lineHeight: '40px',
                    mt: '60px',
                    mb: '25px',
                    color: 'white',
                    fontWeight: 400,
                  }}
                >
                  Projects trending last month
                </Typography>
                <SynapseTrendingProjects
                  past30DaysDownloadMetricsTable={
                    past30DaysDownloadMetricsTable
                  }
                />
              </Box>
            </Box>
            <Box
              sx={{
                mt: '-3px',
                pb: {
                  xs: '100px',
                  md: '220px',
                },
                clipPath: 'polygon(0 0, 100% 2px, 0 100%, 0% 0%)',
                backgroundColor: '#223549',
                zIndex: 100,
              }}
            />
          </Box>
          <Box sx={{ ml: { xs: '5px', md: '20px' } }}>
            <Typography
              variant="headline1"
              sx={{
                ...h2Sx,
                textAlign: 'center',
                pt: { xs: '45px', md: '75px' },
                pb: '30px',
              }}
            >
              New &amp; Trending
            </Typography>
            <Box sx={{ m: 'auto' }}>
              <Typography
                variant="headline1"
                sx={{
                  ...homepageBodyText,
                  textAlign: 'center',
                  mb: { xs: '30px', md: '60px' },
                }}
              >
                A sample of public projects and datasets recently created on
                Synapse by researchers like you
              </Typography>
            </Box>
            <Box sx={{ position: 'relative', minHeight: '500px' }}>
              <SynapseHotdropsBackground />
              <SynapseHotDrops tableId={newAndTrendingTable} />
            </Box>
          </Box>
          <Box
            sx={{
              pb: {
                xs: '100px',
                md: '220px',
              },
              clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)',
              backgroundColor: '#172430',
              zIndex: 100,
            }}
          />
          <Box
            sx={{
              ...sidePadding,
              backgroundColor: '#172430',
              mt: '-1px',
              pt: {
                xs: '50px',
                md: '20px',
              },
            }}
          >
            <Box sx={{ m: 'auto', maxWidth: '1500px' }}>
              <Typography
                variant="headline1"
                sx={{
                  ...h2Sx,
                  color: 'white',
                  maxWidth: '700px',
                  pb: {
                    xs: '20px',
                    sm: '100px',
                  },
                  textAlign: {
                    xs: 'center',
                    md: 'left',
                  },
                }}
              >
                Made for biomedical data reuse and discovery
              </Typography>
              <SynapseFeatures />
            </Box>
          </Box>
          <Box sx={{ ml: { xs: '5px', md: '20px' } }}>
            <Typography
              variant="headline1"
              sx={{
                ...h2Sx,
                textAlign: 'center',
                padding: { xs: '45px 0', md: '75px 0' },
              }}
            >
              Featured datasets
            </Typography>
            <SynapseFeaturedDatasets sourceTable={featuredDatasetsTable} />
            <Box sx={{ p: '20px 10px' }}>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                onClick={() => {
                  gotoPlace('/DataCatalog:0')
                }}
                sx={{
                  m: 'auto',
                  display: 'block',
                  p: '5px 25px',
                  width: {
                    xs: '100%',
                    md: 'auto',
                  },
                }}
              >
                View More Datasets
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              pb: {
                xs: '100px',
                md: '220px',
              },
              clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)',
              backgroundColor: '#f5f9f9',
              zIndex: -100,
              mt: {
                xs: '-100px',
                md: '-220px',
              },
              position: 'relative',
            }}
          />
          <Box
            sx={{
              backgroundColor: '#f5f9f9',
              pb: { xs: '10px', md: '0px' },
            }}
          >
            <Typography
              variant="headline1"
              sx={{
                ...h2Sx,
                textAlign: 'center',
                pt: '75px',
                position: 'relative',
                zIndex: 100,
                backgroundColor: 'rgba(245, 249, 249, .8)',
                borderRadius: '12px',
                ml: { xs: '5px', md: '20px' },
              }}
            >
              Synapse in action
            </Typography>
            <Box sx={{ m: 'auto', maxWidth: '1100px' }}>
              <Typography
                variant="headline1"
                sx={{
                  ...homepageBodyText,
                  textAlign: 'center',
                  mt: '50px',
                  mb: '100px',
                  position: 'relative',
                  zIndex: 100,
                  ml: '5px',
                  mr: '5px',
                  backgroundColor: 'rgba(245, 249, 249, .8)',
                  borderRadius: '12px',
                }}
              >
                Explore real-world case studies and success stories showcasing
                how researchers use Synapse to drive innovative biomedical
                discoveries and improve health outcomes.
              </Typography>
            </Box>
            <SynapseInAction tableId={synapseInActionTable} />
          </Box>
          <Box
            sx={{
              ...sidePadding,
              backgroundColor: '#223549',
              pb: '200px',
              position: 'relative',
              zIndex: 100,
            }}
          >
            <Box
              sx={{
                maxWidth: '1200px',
                m: 'auto',
              }}
            >
              <Typography
                variant="headline1"
                sx={{
                  ...h2Sx,
                  color: 'white',
                  pt: '75px',
                }}
              >
                Plans
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  ...homepageBodyText,
                  color: 'white',
                  pt: '20px',
                }}
              >
                Synapse is free and open source for all. We offer different
                plans to help you if you need extra storage or help with your
                data management.
              </Typography>
              <Link
                href={SAGE_OFFERINGS_HELP_URL}
                target="_blank"
                sx={{
                  color: 'white !important',
                  textDecorationColor: 'white !important',
                  pt: '20px',
                  pb: '30px',
                  display: 'block',
                }}
              >
                Learn more about our plans
              </Link>
              <SynapsePlans />
            </Box>
          </Box>
          <Box
            sx={{
              pb: {
                xs: '100px',
                md: '220px',
              },
              clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)',
              backgroundColor: '#172430',
              zIndex: 101,
              mt: {
                xs: '-100px',
                md: '-220px',
              },
              position: 'relative',
            }}
          />
        </Box>
      )}
    </Box>
  )
}

export default SynapseHomepageV2
