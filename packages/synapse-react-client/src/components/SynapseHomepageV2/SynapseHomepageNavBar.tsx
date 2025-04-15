import SynapseFullLogo from '@/assets/icons/SynapseFullLogo'
import { useSynapseContext } from '@/utils'
import { useOneSageURL } from '@/utils/hooks'
import { Close, MenuOutlined } from '@mui/icons-material'
import {
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  styled,
  SxProps,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { ColorPartial } from '@mui/material/styles/createPalette'
import { MouseEvent, useState } from 'react'
import SageResourcesPopover from '../SageResourcesPopover'

const LOGIN_LINK = '/LoginPlace:0'
const HOMEPAGE_LINK = '/Home:x'
export const PLANS_LINK = '/Plans:0'
const DASHBOARD_LINK = '/Profile:v/projects/all'

const navTextButtonSx: SxProps = {
  fontSize: '18px',
  lineHeight: '24px',
  fontWeight: 400,
}
const navButtonSx: SxProps = {
  borderRadius: '0',
  p: {
    xs: '7px 10px',
    sm: '7px 30px',
  },
}
const StyledMenu = styled(Menu)(() => ({
  '& .MuiPaper-root': {
    width: '100vw',
    height: '100vh',
    maxWidth: '100vw',
    maxHeight: '100vh',
    margin: 0,
    top: '0 !important',
    left: '0 !important',
    transform: 'none',
  },
}))

const StyledMenuItem = styled(MenuItem)(() => ({
  fontSize: '36px',
  fontWeight: 200,
  lineHeight: '32px',
  height: '80px',
  paddingLeft: '30px',
}))

export type SynapseHomepageNavBarProps = {
  gotoPlace: (href: string) => void
}

export function SynapseHomepageNavBar({
  gotoPlace,
}: SynapseHomepageNavBarProps) {
  const { accessToken } = useSynapseContext()
  const isLoggedIn = !!accessToken
  const registrationLink = useOneSageURL('/register1')
  const theme = useTheme()
  const isSmallView = useMediaQuery(theme.breakpoints.down('md'))

  // mobile view nav bar menu
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] =
    useState<null | HTMLElement>(null)
  const handleClickMobileMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setMobileMenuAnchorEl(event.currentTarget)
  }
  const handleCloseMobileMenu = () => {
    setMobileMenuAnchorEl(null)
  }

  // Portals dropdown
  const [portalResourcesAnchorEl, setPortalResourcesAnchorEl] =
    useState<HTMLElement | null>(null)
  const handleClosePortalResources = () => {
    setPortalResourcesAnchorEl(null)
  }

  // Sage solutions dropdown
  const [sageSolutionsAnchorEl, setSageSolutionsAnchorEl] =
    useState<HTMLElement | null>(null)
  const handleCloseSageSolutions = () => {
    setSageSolutionsAnchorEl(null)
  }

  const onLoginClicked = () => {
    // Navigate to the LoginPlace, which will set a cookie that will be used to redirect back from OneSage
    gotoPlace(LOGIN_LINK)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: '5px',
        p: {
          xs: '10px 5px',
          sm: '20px 15px',
        },
      }}
    >
      {/* Logo */}
      <a onClick={() => gotoPlace(HOMEPAGE_LINK)}>
        <SynapseFullLogo
          textColor={(theme.palette.primary as ColorPartial)[900]!}
        />
      </a>
      {/* Menu Items */}
      {/* Desktop nav bar, and a mobile hamburger dropdown menu nav bar that contain the same options */}
      {!isSmallView && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Button sx={navTextButtonSx} onClick={() => gotoPlace(PLANS_LINK)}>
            Plans
          </Button>
          <Button
            sx={navTextButtonSx}
            onClick={event => setPortalResourcesAnchorEl(event.currentTarget)}
          >
            Portals
          </Button>
          <Button
            sx={navTextButtonSx}
            onClick={event => setSageSolutionsAnchorEl(event.currentTarget)}
          >
            Solutions
          </Button>
          <Button
            sx={{ ...navTextButtonSx, mr: '15px' }}
            href="https://sagebionetworks.org/"
            target="_blank"
          >
            Sage Bionetworks
          </Button>
          {!isLoggedIn && (
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              sx={navButtonSx}
              onClick={onLoginClicked}
            >
              Login
            </Button>
          )}
          {!isLoggedIn && (
            <Button
              size="large"
              variant="contained"
              color="secondary"
              sx={navButtonSx}
              href={registrationLink.toString()}
            >
              Register Now
            </Button>
          )}
          {isLoggedIn && (
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              sx={navButtonSx}
              onClick={() => {
                gotoPlace(DASHBOARD_LINK)
              }}
            >
              View Dashboard
            </Button>
          )}
        </Box>
      )}
      <SageResourcesPopover
        anchorEl={portalResourcesAnchorEl}
        onClose={handleClosePortalResources}
        filterByType="SynapsePortal"
      />
      <SageResourcesPopover
        anchorEl={sageSolutionsAnchorEl}
        onClose={handleCloseSageSolutions}
        filterByType="SageSolution"
        resourceName="Solutions"
        description="Innovative tools of the Synapse ecosystem to accelerate data curation and crowd-sourced data science competitions"
      />
      {isSmallView && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            columnGap: '10px',
          }}
        >
          <IconButton
            color="secondary"
            sx={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: '0',
              ml: '70px',
            }}
            onClick={handleClickMobileMenu}
          >
            <MenuOutlined />
          </IconButton>
          <StyledMenu
            anchorEl={mobileMenuAnchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(mobileMenuAnchorEl)}
            onClose={handleCloseMobileMenu}
            MenuListProps={{
              style: {
                width: '100%',
                height: '100%',
              },
            }}
          >
            <IconButton
              onClick={handleCloseMobileMenu}
              sx={{
                position: 'absolute',
                top: 5,
                right: 5,
                zIndex: 1,
                color: 'secondary.main',
                borderWidth: 1,
                borderStyle: 'solid',
                borderRadius: '0',
              }}
            >
              <Close />
            </IconButton>
            <StyledMenuItem
              sx={{ mt: '70px' }}
              onClick={() => {
                gotoPlace(PLANS_LINK)
                handleCloseMobileMenu()
              }}
            >
              Plans
            </StyledMenuItem>
            <StyledMenuItem
              onClick={event => {
                setPortalResourcesAnchorEl(event.currentTarget)
                handleCloseMobileMenu()
              }}
            >
              Portals
            </StyledMenuItem>
            <StyledMenuItem
              onClick={event => {
                setSageSolutionsAnchorEl(event.currentTarget)
                handleCloseSageSolutions()
              }}
            >
              Solutions
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => {
                window.open('https://sagebionetworks.org/', '_blank')
                handleCloseMobileMenu()
              }}
            >
              Sage Bionetworks
            </StyledMenuItem>

            <Divider sx={{ pt: '100px' }} />
            {!isLoggedIn && (
              <StyledMenuItem
                sx={{ mt: '30px', color: 'secondary.main' }}
                onClick={() => {
                  window.open(registrationLink.toString(), '_blank')
                  handleCloseMobileMenu()
                }}
              >
                Register Now
              </StyledMenuItem>
            )}
            {!isLoggedIn && (
              <StyledMenuItem
                sx={{ mb: '40px' }}
                onClick={() => {
                  handleCloseMobileMenu()
                  onLoginClicked()
                }}
              >
                Log In
              </StyledMenuItem>
            )}
            {isLoggedIn && (
              <StyledMenuItem
                sx={{ mb: '40px', color: 'secondary.main' }}
                onClick={() => {
                  handleCloseMobileMenu()
                  gotoPlace(DASHBOARD_LINK)
                }}
              >
                View Dashboard
              </StyledMenuItem>
            )}
          </StyledMenu>
        </Box>
      )}
    </Box>
  )
}
