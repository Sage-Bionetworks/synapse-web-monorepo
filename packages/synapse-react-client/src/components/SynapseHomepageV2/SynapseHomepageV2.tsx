import React, { useState } from 'react'
import {
  Box,
  Button,
  SxProps,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Chip,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  IconButton,
} from '@mui/material'
import SynapseFullLogo from '../../assets/icons/SynapseFullLogo'
import { TypeAnimation } from 'react-type-animation'
import { Search } from '../../assets/themed_icons'
import { useOneSageURL } from '../../utils/hooks'
import { ReactComponent as Image1 } from '../../assets/homepage/image1.svg'
import { useSynapseContext } from '../../utils'
import { SynapseTrendingDatasets } from './SynapseTrendingDatasets'
import { SynapseByTheNumbers } from './SynapseByTheNumbers'
import { SynapseFeatures } from './SynapseFeatures'
import { SynapseInAction } from './SynapseInAction'
import { backgroundInlineJpeg } from '../../assets/homepage/header-splash'
import { SynapsePartners } from './SynapsePartners'
import { SynapsePlans } from './SynapsePlans'
import { useInView } from 'react-intersection-observer'
import { SynapseFooter } from '../SynapseFooter/SynapseFooter'
import SageFullLogo from 'src/assets/icons/SageFullLogo'
import { LoginTwoTone, MenuTwoTone } from '@mui/icons-material'
import { SynapseFeaturedDatasets } from './SynapseFeaturedDatasets'

export type SynapseHomepageV2Props = {}

const onSearch = (value: string) => {
  window.location.assign(`/Search:${encodeURIComponent(value)}`)
}
const synapseInActionTable = 'syn61670075'
const past30DaysDownloadMetricsTable = 'syn61597084'
const generalStatsMetricsTable = 'syn61588163'
const featuredDatasetsTable = 'syn61609402'

const popularSearches = [
  "Alzheimer's Disease",
  'Parkinson',
  'Neurofibromatosis',
  'HTAN',
  'ukb-ppp',
  'ROSMAP',
  'GENIE',
]
const LOGIN_LINK = '/LoginPlace:0'
const MY_DASHBOARD_LINK = '/Profile:v'

export const darkTextColor = '#22252A'
export const homepageBodyText: SxProps = {
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '34px',
  color: darkTextColor,
}

export const SynapseHomepageV2: React.FunctionComponent<
  SynapseHomepageV2Props
> = ({}) => {
  const { accessToken } = useSynapseContext()
  const isSignedIn = !!accessToken
  const registrationLink = useOneSageURL('/register1')
  const resourcesLink = useOneSageURL('/sageresources')
  const theme = useTheme()
  const isDesktopView = useMediaQuery(theme.breakpoints.up('lg'))
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
  const [searchValue, setSearchValue] = useState('')

  // mobile view nav bar menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  //optimization - prioritize loading above-the-fold content (delay loading below the fold)
  const { ref, inView } = useInView({ triggerOnce: true })
  const navButtonSx: SxProps = {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 400,
  }
  const h2Sx: SxProps = {
    fontSize: '52px',
    fontWeight: 600,
    lineHeight: '62px',
    color: darkTextColor,
  }

  const defaultHomepageText: SxProps = {
    color: darkTextColor,
    fontWeight: 600,
  }
  const titleSx: SxProps = {
    ...defaultHomepageText,
    fontWeight: 300,
    fontSize: '72px',
    lineHeight: '82px',
    color: 'white',
  }
  return (
    <Box>
      {/* Top nav bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 15px',
        }}
      >
        {/* Logo */}
        <SynapseFullLogo textColor="#0B1218" />
        {/* Menu Items */}
        {/* Desktop nav bar, and a mobile hamburger dropdown menu nav bar that contain the same options */}
        {!isMobileView && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <Button
              sx={navButtonSx}
              href={resourcesLink.toString()}
              target="_blank"
            >
              Portals
            </Button>
            <Button
              sx={{ ...navButtonSx, marginRight: '15px' }}
              href="https://sagebionetworks.org/"
              target="_blank"
            >
              Sage Bionetworks
            </Button>
            {isSignedIn && (
              <Button
                size="large"
                variant="contained"
                color="secondary"
                href={MY_DASHBOARD_LINK}
              >
                View My Dashboard
              </Button>
            )}
            {!isSignedIn && (
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                href={LOGIN_LINK}
              >
                Login
              </Button>
            )}
            {!isSignedIn && (
              <Button
                size="large"
                variant="contained"
                color="secondary"
                href={registrationLink.toString()}
              >
                Register Now
              </Button>
            )}
          </Box>
        )}
        {isMobileView && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton size="large" onClick={handleClick}>
              <MenuTwoTone />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {!isSignedIn && (
                <MenuItem
                  onClick={() => {
                    window.open(registrationLink.toString(), '_blank')
                    handleClose()
                  }}
                >
                  <Button variant="contained" color="secondary">
                    Register Now
                  </Button>
                </MenuItem>
              )}
              {!isSignedIn && (
                <MenuItem
                  onClick={() => {
                    window.open(LOGIN_LINK, '_blank')
                    handleClose()
                  }}
                >
                  <ListItemIcon>
                    <LoginTwoTone fontSize="small" />
                  </ListItemIcon>
                  Login
                </MenuItem>
              )}
              {isSignedIn && (
                <MenuItem
                  onClick={() => {
                    window.open(MY_DASHBOARD_LINK, '_blank')
                    handleClose()
                  }}
                >
                  View My Dashboard
                </MenuItem>
              )}
              <Divider />
              <MenuItem
                onClick={() => {
                  window.open(resourcesLink.toString(), '_blank')
                  handleClose()
                }}
              >
                Portals
              </MenuItem>
              <MenuItem
                onClick={() => {
                  window.open('https://sagebionetworks.org/', '_blank')
                  handleClose()
                }}
              >
                Sage Bionetworks
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Box>
      <Box sx={{ position: 'relative', paddingBottom: '80px' }}>
        <Box
          sx={{
            position: 'absolute',
            background: `url(${backgroundInlineJpeg}) lightgray 50% / cover no-repeat`,
            minHeight: '600px',
            width: '100%',
            height: '100%',
            content: "''",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            clipPath: 'polygon(0 0, 100% 0, 100% 65%, 0% 100%)',
          }}
        >
          {' '}
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          padding: isDesktopView ? '80px 0px 0px 0px' : '20px',
          minHeight: isMobileView ? '550px' : undefined,
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
      {/* TODO: currated/hardcoded dropdown list of searches */}
      <Box
        sx={{
          paddingTop: '70px',
          maxWidth: '600px',
          margin: 'auto',
        }}
      >
        <FormControl fullWidth sx={{ m: 1 }}>
          <OutlinedInput
            startAdornment={
              <InputAdornment
                position="start"
                sx={{ marginLeft: '20px', marginRight: '18px' }}
              >
                <Search size={32} fill="#172430" />
              </InputAdornment>
            }
            placeholder="Search Synapse"
            sx={{ fontSize: '24px', borderRadius: 96.6 }}
            onSubmit={() => onSearch(searchValue)}
            onChange={event => setSearchValue(event.target.value)}
          />
        </FormControl>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '30px',
          flexWrap: 'wrap',
        }}
      >
        {popularSearches.map(value => {
          return (
            <Chip
              key={value}
              label={value}
              onClick={() => onSearch(value)}
              variant="outlined"
              // by default, on hover the background color changes to mostly transparent (4%), which looks terrible on top of the header splash image
              sx={{
                color: '#2A5850',
                backgroundColor: '#DAE9E7',
                '&:hover': { backgroundColor: '#f5f5f3 !important' },
              }}
            />
          )
        })}
      </Box>
      <Box
        sx={{
          display: isDesktopView ? 'grid' : 'relative',
          gridTemplateColumns: '50% 50%',
          backgroundColor: '#DAE9E7',
          marginTop: '150px',
          height: isDesktopView ? '608px' : undefined, //force container to the same height as the image
        }}
      >
        <Box
          sx={{ padding: isDesktopView ? '70px 0px 25px 60px' : '25px' }}
          ref={ref} // use this UI to trigger loading the rest of the page content
        >
          <SageFullLogo width={350} />
          <Typography
            variant="headline2"
            sx={{
              ...defaultHomepageText,
              fontSize: '40px',
              lineHeight: '60px',
              maxWidth: '600px',
              color: '#38756A',
              marginTop: '20px',
              fontWeight: 400,
              marginBottom: '35px',
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
            sx={{ padding: '5px 25px' }}
          >
            About Sage Bionetworks
          </Button>
        </Box>
        {isDesktopView && (
          <Box sx={{ height: '100%', justifySelf: 'end' }}>
            <Image1 />
          </Box>
        )}
      </Box>
      {/* Below the fold content... */}
      {inView && (
        <Box>
          <Box>
            <Typography
              variant="headline1"
              sx={{
                ...defaultHomepageText,
                textAlign: 'center',
                marginTop: '100px',
                fontSize: '40px',
                lineHeight: '72px',
                letterSpacing: '-0.56px',
              }}
            >
              We partner with scientific leaders
            </Typography>
            <Box sx={{ margin: 'auto', maxWidth: '750px' }}>
              <Typography
                variant="headline1"
                sx={{
                  ...homepageBodyText,
                  textAlign: 'center',
                  marginBottom: '60px',
                }}
              >
                Synapse is your ecosystem for responsible data sharing,
                innovative data reuse, and collaboration.
              </Typography>
            </Box>
            <SynapsePartners />
            <Box
              sx={{
                paddingBottom: '220px',
                clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0% 100%)',
                backgroundColor: 'white',
                zIndex: 100,
              }}
            />
            <Box
              sx={{
                backgroundColor: '#223549',
                paddingTop: '200px',
                marginTop: '-200px',
                paddingLeft: '50px',
                paddingRight: '50px',
                paddingBottom: '5px',
              }}
            >
              <Typography
                variant="headline1"
                sx={{
                  ...h2Sx,
                  textAlign: 'center',
                  marginTop: '100px',
                  marginBottom: '60px',
                  color: 'white',
                }}
              >
                Synapse by the numbers
              </Typography>
              <SynapseByTheNumbers metricsTable={generalStatsMetricsTable} />
              <Typography
                variant="headline2"
                sx={{
                  ...defaultHomepageText,
                  textAlign: 'center',
                  fontSize: '36px',
                  lineHeight: '40px',
                  marginTop: '60px',
                  marginBottom: '25px',
                  color: 'white',
                }}
              >
                Datasets trending this week
              </Typography>
              <SynapseTrendingDatasets
                past30DaysDownloadMetricsTable={past30DaysDownloadMetricsTable}
              />
            </Box>
            <Box
              sx={{
                paddingBottom: '220px',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 0%)',
                backgroundColor: '#223549',
                zIndex: 100,
              }}
            />
          </Box>
          <Box
            sx={{
              paddingTop: '300px',
              marginTop: '-220px',
              backgroundColor: '#172430',
            }}
          />

          <Box
            sx={{
              backgroundColor: '#172430',
              paddingLeft: '50px',
            }}
          >
            <Box sx={{ margin: 'auto', maxWidth: '1500px' }}>
              <Typography
                variant="headline1"
                sx={{
                  ...h2Sx,
                  color: 'white',
                  maxWidth: '700px',
                  paddingBottom: '100px',
                }}
              >
                Made for biomedical data reuse and discovery
              </Typography>
              <SynapseFeatures />
            </Box>
          </Box>
          <Box sx={{ marginLeft: '20px' }}>
            <Typography
              variant="headline1"
              sx={{
                ...h2Sx,
                textAlign: 'center',
                paddingTop: '75px',
                paddingBottom: '75px',
              }}
            >
              Featured datasets
            </Typography>
            <SynapseFeaturedDatasets sourceTable={featuredDatasetsTable} />
          </Box>
          <Box
            sx={{
              paddingBottom: '190px',
              clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)',
              backgroundColor: '#f5f9f9',
              zIndex: -100,
              marginTop: '-190px',
              position: 'relative',
            }}
          />
          <Box
            sx={{
              backgroundColor: '#f5f9f9',
              paddingBottom: '150px',
            }}
          >
            <Typography
              variant="headline1"
              sx={{
                ...h2Sx,
                textAlign: 'center',
                paddingTop: '75px',
                position: 'relative',
                zIndex: 100,
                backgroundColor: 'rgba(245, 249, 249, .8)',
                borderRadius: '12px',
              }}
            >
              Synapse in action
            </Typography>
            <Box sx={{ margin: 'auto', maxWidth: '1100px' }}>
              <Typography
                variant="headline1"
                sx={{
                  ...homepageBodyText,
                  textAlign: 'center',
                  marginTop: '50px',
                  marginBottom: '100px',
                  position: 'relative',
                  zIndex: 100,
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
              backgroundColor: '#223549',
              paddingLeft: '50px',
              paddingRight: '50px',
              paddingBottom: '200px',
              position: 'relative',
              zIndex: 100,
            }}
          >
            <Box
              sx={{
                maxWidth: '1200px',
                margin: 'auto',
              }}
            >
              <Typography
                variant="headline1"
                sx={{
                  ...h2Sx,
                  color: 'white',
                  paddingTop: '75px',
                }}
              >
                Pricing and Plans
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  ...homepageBodyText,
                  color: 'white',
                  paddingTop: '20px',
                  paddingBottom: '80px',
                }}
              >
                Synapse is free and open source for all. We offer different
                plans to help you if you need extra storage or help with your
                data management. Find out about managed plans
              </Typography>
              <SynapsePlans />
            </Box>
          </Box>
          <Box
            sx={{
              paddingBottom: '190px',
              clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)',
              backgroundColor: '#172430',
              zIndex: 101,
              marginTop: '-190px',
              position: 'relative',
            }}
          />
          {/* TODO: remove footer from here (it will be added on SWC side to all pages!) */}
          <SynapseFooter
            gotoPlace={() => {}}
            portalVersion="portalV1"
            repoVersion="repo V1"
            srcVersion="SRC v1"
            reportViolationCallback={() => {}}
          />
        </Box>
      )}
    </Box>
  )
}

export default SynapseHomepageV2
