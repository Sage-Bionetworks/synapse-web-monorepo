import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {
  AppUtils,
  IconSvg,
  StandaloneLoginForm,
  SynapseComponents,
  SynapseHookUtils,
  SynapseQueries,
  SystemUseNotification,
  useSynapseContext,
} from 'synapse-react-client'
import { NavLink, useMatch } from 'react-router-dom'
import NavUserLink from '../components/NavUserLink'
import { ConfigRoute, GenericRoute } from '../types/portal-config'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Link,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material'
import { useLogInDialogContext } from './LogInDialogContext'
import { useNavigate } from 'react-router-dom'
import { RESPONSIVE_SIDE_PADDING } from '../utils'
import { usePortalContext } from './PortalContext'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'

function DropdownNavButton(props) {
  const { route } = props
  const match = useMatch({ path: route.path, end: route.path === '/' })
  const isSmallView = useMediaQuery(theme => theme.breakpoints.down('lg'))

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const navLinkChildItems = route.children.map(childRoute => {
    const LinkElement = childRoute.path.startsWith('http') ? Link : NavLink
    return (
      <MenuItem
        key={childRoute.path}
        className={'dropdown-item SRC-primary-background-color-hover'}
      >
        <LinkElement
          className="dropdown-item SRC-nested-color"
          to={childRoute.path}
          style={{ textDecoration: 'none' }}
          onClick={handleClose}
          target={childRoute.path.startsWith('http') ? '_blank' : '_self'}
          rel={'noopener noreferrer'}
        >
          {childRoute.name}
          {/*// target={target ?? '_self'}*/}
        </LinkElement>
      </MenuItem>
    )
  })

  return (
    <>
      {isSmallView && (
        <Accordion
          disableGutters
          elevation={0}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <AccordionSummary
            className={'nav-button-container nav-button center-content'}
            expandIcon={<ExpandMoreIcon />}
            sx={{
              '&.Mui-expanded': {
                backgroundColor: 'secondary.main',
                '.MuiAccordionSummary-content,.MuiSvgIcon-root': {
                  color: 'white',
                },
              },
            }}
          >
            {route.name}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              p: 0,
              '.MuiMenuItem-root': {
                pl: 4,
                minHeight: '50px',
                '&:hover': {
                  backgroundColor: 'primary.main',
                },
              },
            }}
          >
            {navLinkChildItems}
          </AccordionDetails>
        </Accordion>
      )}
      {!isSmallView && (
        <>
          <Menu
            className={'portal-nav-menu'}
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {navLinkChildItems}
          </Menu>
          <Button
            className={`nav-button-container nav-button center-content ${
              match ? 'active' : ''
            }`}
            onClick={handleClick}
            endIcon={<ExpandMoreIcon />}
            sx={{
              '&:hover': {
                textDecoration: 'none',
              },
            }}
          >
            {route.name}
          </Button>
        </>
      )}
    </>
  )
}

type SynapseSettingLink = {
  text: string
  hasBorder?: boolean
  settingSubPath?: string
}

export type NavbarConfig = {
  routes: {
    name: string
    icon?: string
    path: string
    children?: { name: string; path: string }[]
  }[]
}

const synapseQuickLinks: SynapseSettingLink[] = [
  {
    text: 'Profile',
  },
  {
    text: 'Projects',
    settingSubPath: 'projects',
  },
  {
    text: 'Teams',
    settingSubPath: 'teams',
  },
  {
    text: 'Challenges',
    settingSubPath: 'challenges',
  },
]

function Navbar() {
  const { navbarConfig, logoHeaderConfig } = usePortalContext()
  const { accessToken } = useSynapseContext()
  const isSignedIn = !!accessToken
  const navigate = useNavigate()
  const { data: userProfile } = SynapseQueries.useGetCurrentUserProfile()
  const isPortalsDropdownEnabled = SynapseQueries.useGetFeatureFlag(
    FeatureFlagEnum.PORTALS_DROPDOWN,
  )
  const [showMenu, setShowMenu] = useState(false)
  const openBtnRef = React.useRef<HTMLDivElement>(null)

  const { refreshSession, clearSession, twoFactorAuthSSOErrorResponse } =
    AppUtils.useApplicationSessionContext()

  const { showLoginDialog, setShowLoginDialog } = useLogInDialogContext()

  if (twoFactorAuthSSOErrorResponse) {
    setShowLoginDialog(true)
  }

  useEffect(() => {
    function handleClickOutside(e: Event) {
      const node = e.target as HTMLElement
      if (
        openBtnRef &&
        !(openBtnRef.current === node || node?.closest('.dropdown-toggle'))
      ) {
        setShowMenu(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  // given the hash, decide if the link should have a bottom border
  const getBorder = (name: string = '') => {
    if (name === '') {
      // special case the home page
      return
    }
    const hash = window.location.hash.substring(2)
    return hash.includes(name) ? 'bottom-border' : ''
  }

  const goToTop = () => {
    window.scroll({ top: 0 })
  }

  const getLinkHref = (
    route: GenericRoute,
    topLevelTo?: string,
    includeQueryParams?: boolean,
  ) => {
    const { path, link } = route
    let href = link ?? `/${topLevelTo}/${path}`
    const indexOfQuestionMark = href.indexOf('?')
    if (!includeQueryParams && indexOfQuestionMark > -1) {
      href = href.slice(0, indexOfQuestionMark)
    }
    return href
  }

  const { name, icon, hideLogin = false } = logoHeaderConfig
  const imageElement = icon ? (
    <img
      id="header-logo-image"
      alt="navigation logo"
      className="nav-logo"
      src={icon}
    />
  ) : (
    <></>
  )
  const nameElement = name ? (
    <span style={{ marginLeft: 10 }}>{name}</span>
  ) : (
    <></>
  )
  const hostname = window.location.hostname.toLowerCase()
  // for now, we only support login in the dev environment (localstorage) or from a .synapse.org subdomain (http-only secure cookie)
  const isSynapseSubdomainOrLocal =
    (hostname.endsWith('.synapse.org') ||
      hostname.includes('127.0.0.1') ||
      hostname.includes('localhost')) &&
    !hideLogin

  const registrationPageUrl = SynapseHookUtils.useOneSageURL('/register1')
  const accountSettingsUrl = SynapseHookUtils.useOneSageURL(
    '/authenticated/myaccount',
  )
  const [portalResourcesAnchorEl, setPortalResourcesAnchorEl] =
    useState<HTMLElement | null>(null)
  const handleClosePortalResources = () => {
    setPortalResourcesAnchorEl(null)
  }
  return (
    <React.Fragment>
      <Box
        component={'nav'}
        className={
          !showMenu
            ? 'flex-display nav top-nav'
            : 'flex-display nav top-nav mb-active'
        }
        sx={RESPONSIVE_SIDE_PADDING}
      >
        <div className="nav-logo-container">
          <NavLink
            onClick={goToTop}
            style={{ display: 'flex', alignItems: 'center' }}
            to="/"
            id="home-link"
          >
            <>
              {imageElement} {nameElement}
            </>
          </NavLink>
        </div>
        <div
          className="nav-mobile-menu-btn mb-open"
          onClick={() => {
            setShowMenu(true)
          }}
          ref={openBtnRef}
        >
          MENU
        </div>
        <div
          className="nav-mobile-menu-btn mb-close"
          onClick={() => {
            setShowMenu(false)
          }}
        >
          <span>&#10005;</span>
        </div>
        <div className="nav-link-container">
          {isSignedIn &&
            isSynapseSubdomainOrLocal && ( // mobile sign out
              <div className="center-content nav-button nav-button-signin mobile-signout-container">
                <Button
                  id="signin-button"
                  color="secondary"
                  variant="contained"
                  className="signout-button-mb"
                  onClick={() => {
                    clearSession()
                  }}
                >
                  Sign Out
                </Button>
              </div>
            )}
          {!isSignedIn &&
            isSynapseSubdomainOrLocal && ( // desktop sign in
              <div className="center-content nav-button-signin">
                <Button
                  id="signin-button"
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    setShowLoginDialog(true)
                  }}
                >
                  Sign&nbsp;In
                </Button>
                <Dialog
                  onClose={() => {
                    setShowLoginDialog(false)
                  }}
                  open={showLoginDialog}
                >
                  <IconButton
                    aria-label={'Close'}
                    onClick={() => {
                      setShowLoginDialog(false)
                    }}
                    sx={{ marginLeft: 'auto' }}
                  >
                    <IconSvg
                      icon={'close'}
                      wrap={false}
                      sx={{ color: 'grey.700' }}
                    />
                  </IconButton>
                  <DialogContent dividers={false}>
                    <StandaloneLoginForm
                      registerAccountUrl={registrationPageUrl.toString()}
                      twoFactorAuthenticationRequired={
                        twoFactorAuthSSOErrorResponse
                      }
                      onBeginOAuthSignIn={() => {
                        AppUtils.preparePostSSORedirect()
                      }}
                      sessionCallback={() => {
                        refreshSession().then(() => {
                          AppUtils.redirectAfterSSO(navigate)
                        })
                      }}
                    />
                    <SystemUseNotification maxWidth={'325px'} />
                  </DialogContent>
                </Dialog>
              </div>
            )}

          {isSignedIn &&
            userProfile &&
            isSynapseSubdomainOrLocal && ( // desktop version, show dropdown
              <>
                <Dropdown className="user-loggedIn">
                  <Dropdown.Toggle
                    variant="light"
                    id="user-menu-button"
                    aria-label="User Dropdown Menu"
                  >
                    <NavUserLink userProfile={userProfile} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="nav-user-menu portal-nav-menu">
                    <Dropdown.Item className="SRC-primary-background-color-hover SRC-nested-color border-bottom-1">
                      Signed in as&nbsp;
                      <strong>{userProfile.userName}</strong>
                    </Dropdown.Item>
                    {synapseQuickLinks.map(el => {
                      const borderBottomClass = el.hasBorder
                        ? 'border-bottom-1'
                        : ''
                      return (
                        <Dropdown.Item
                          key={el.text}
                          className={`SRC-primary-background-color-hover SRC-nested-color ${borderBottomClass}`}
                          href={`https://www.synapse.org/Profile:${
                            userProfile.ownerId
                          }${el.settingSubPath ? `/${el.settingSubPath}` : ''}`}
                        >
                          {el.text}
                        </Dropdown.Item>
                      )
                    })}
                    <Dropdown.Item
                      key="DownloadV2"
                      onClick={() => {
                        navigate('/DownloadCart')
                      }}
                      className="SRC-primary-background-color-hover SRC-nested-color border-bottom-1"
                    >
                      Downloads
                    </Dropdown.Item>
                    <Dropdown.Item
                      key="Settings"
                      className="SRC-primary-background-color-hover SRC-nested-color border-bottom-1"
                      href={accountSettingsUrl.toString()}
                    >
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item // desktop sign out
                      className="SRC-primary-background-color-hover SRC-nested-color"
                      onClick={() => {
                        clearSession()
                      }}
                    >
                      Sign Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <a
                  className="user-loggedIn-mb" // mobile version, shows the user icon and name, no dropdown
                  href={`https://www.synapse.org/Profile:${userProfile.ownerId}/projects/all`}
                >
                  <NavUserLink userProfile={userProfile} />
                </a>
              </>
            )}
          {isSignedIn && (
            <SynapseComponents.ShowDownloadV2
              className="nav-button nav-button-container center-content"
              to="/DownloadCart"
            />
          )}
          {isPortalsDropdownEnabled && (
            <>
              <a
                className="nav-button nav-button-container center-content"
                onClick={event =>
                  setPortalResourcesAnchorEl(event.currentTarget)
                }
              >
                Portals
              </a>
              <SynapseComponents.SageResourcesPopover
                anchorEl={portalResourcesAnchorEl}
                onClose={handleClosePortalResources}
              />
            </>
          )}
          {navbarConfig.routes.toReversed().map((route, index) => {
            if (route.children) {
              return (
                <DropdownNavButton route={route}>
                  {route.name}
                </DropdownNavButton>
              )
            }
            if (route.path) {
              if (route.path.startsWith('http')) {
                return (
                  <Link
                    href={route.path}
                    key={route.name}
                    className={'nav-button-container nav-button center-content'}
                    target={'_blank'}
                  >
                    {route.name}
                  </Link>
                )
              }
              return (
                <NavLink
                  to={route.path}
                  key={route.name}
                  className={'nav-button-container nav-button center-content'}
                >
                  {route.name}
                </NavLink>
              )
            }
            return 'dropdown'
          })}
        </div>
      </Box>
      <div className="spacer" />
    </React.Fragment>
  )
}

export default Navbar
