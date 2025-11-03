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
import type { Color } from '@mui/material/styles'
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
  const isAuthenticated = !!accessToken
  const registrationLink = useOneSageURL('/register1')
  const theme = useTheme()
  const isSmallView = useMediaQuery(theme.breakpoints.down('md'))
  const sageResourcesURL = useOneSageURL('/sageresources')
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
          color={(theme.palette.primary as unknown as Color)[900]}
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
            Applications
          </Button>
          <Button
            sx={{ ...navTextButtonSx, mr: '15px' }}
            href="https://sagebionetworks.org/"
            target="_blank"
          >
            Sage Bionetworks
          </Button>
          {!isAuthenticated && (
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
          {!isAuthenticated && (
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
          {isAuthenticated && (
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
        allResourcesUrl={sageResourcesURL.toString()}
      />
      <SageResourcesPopover
        anchorEl={sageSolutionsAnchorEl}
        onClose={handleCloseSageSolutions}
        filterByType="SageSolution"
        resourceName="Applications"
        description="Innovative tools in the Synapse ecosystem promoting crowd-sourced data science competitions, translational research, and more"
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
                handleCloseMobileMenu()
              }}
            >
              Applications
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
            {!isAuthenticated && (
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
            {!isAuthenticated && (
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
            {isAuthenticated && (
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
