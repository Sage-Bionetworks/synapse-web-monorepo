import { RESPONSIVE_SIDE_PADDING } from '@/utils'
import { Box, Button, Divider, Link, Menu, MenuItem } from '@mui/material'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import ShowDownloadV2 from 'synapse-react-client/components/DownloadCart/ShowDownloadV2'
import SageResourcesPopover from 'synapse-react-client/components/SageResourcesPopover/index'
import { useGetCurrentUserProfile } from 'synapse-react-client/synapse-queries/user/useUserBundle'
import {
  storeRedirectURLForOneSageLoginAndGotoURL,
  useApplicationSessionContext,
} from 'synapse-react-client/utils/AppUtils/'
import { useSynapseContext } from 'synapse-react-client/utils/context'
import {
  BackendDestinationEnum,
  getEndpoint,
} from 'synapse-react-client/utils/functions/index'
import { useOneSageURL } from 'synapse-react-client/utils/hooks/useOneSageURL'
import NavLink from '../NavLink'
import NavUserLink from '../NavUserLink'
import { usePortalContext } from '../PortalContext'
import { DropdownNavButton } from './DropdownNavButton'

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
  isPortalsDropdownEnabled: boolean
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

export default function Navbar() {
  const { navbarConfig, logoHeaderConfig } = usePortalContext()
  const { isAuthenticated } = useSynapseContext()
  const navigate = useNavigate()
  const { data: userProfile } = useGetCurrentUserProfile()
  const { isPortalsDropdownEnabled } = navbarConfig
  const [showMenu, setShowMenu] = useState(false)
  const openBtnRef = useRef<HTMLDivElement>(null)

  const { clearSession } = useApplicationSessionContext()

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

  const goToTop = () => {
    window.scroll({ top: 0 })
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

  const oneSageUrl = useOneSageURL()
  const accountSettingsUrl = useOneSageURL('/authenticated/myaccount')
  const [portalResourcesAnchorEl, setPortalResourcesAnchorEl] =
    useState<HTMLElement | null>(null)
  const handleClosePortalResources = () => {
    setPortalResourcesAnchorEl(null)
  }

  const [profileMenuAnchorEl, setProfileMenuAnchorEl] =
    useState<null | HTMLElement>(null)
  const profileMenuIsOpen = Boolean(profileMenuAnchorEl)
  const handleProfileMenuClick = (event: MouseEvent<HTMLElement>) => {
    setProfileMenuAnchorEl(event.currentTarget)
  }
  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null)
  }

  return (
    <>
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
          {isAuthenticated &&
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
          {!isAuthenticated &&
            isSynapseSubdomainOrLocal && ( // desktop sign in
              <div className="center-content nav-button-signin">
                <Button
                  id="signin-button"
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    storeRedirectURLForOneSageLoginAndGotoURL(
                      oneSageUrl.toString(),
                    )
                  }}
                >
                  Sign&nbsp;In
                </Button>
              </div>
            )}

          {isAuthenticated &&
            userProfile &&
            isSynapseSubdomainOrLocal && ( // desktop version, show dropdown
              <>
                <div className="user-loggedIn">
                  <button
                    id="user-menu-button"
                    aria-label="User Dropdown Menu"
                    onClick={e => {
                      handleProfileMenuClick(e)
                    }}
                  >
                    <NavUserLink userProfile={userProfile} />
                  </button>
                  <Menu
                    open={profileMenuIsOpen}
                    onClose={handleProfileMenuClose}
                    anchorEl={profileMenuAnchorEl}
                    className="nav-user-menu portal-nav-menu"
                  >
                    <div className="dropdown-item">
                      Signed in as&nbsp;
                      <strong>{userProfile.userName}</strong>
                    </div>
                    <Divider sx={{ my: 0 }} />
                    {synapseQuickLinks.map((el, i) => {
                      const borderBottomClass = el.hasBorder
                        ? 'border-bottom-1'
                        : ''
                      return (
                        <MenuItem
                          key={i}
                          component="a"
                          className={`dropdown-item SRC-primary-background-color-hover  ${borderBottomClass}`}
                          href={`${getEndpoint(
                            BackendDestinationEnum.PORTAL_ENDPOINT,
                          )}Profile:${userProfile.ownerId}${
                            el.settingSubPath ? `/${el.settingSubPath}` : ''
                          }`}
                        >
                          {el.text}
                        </MenuItem>
                      )
                    })}
                    <MenuItem
                      onClick={() => {
                        navigate('/DownloadCart')
                        handleProfileMenuClose()
                      }}
                      className="dropdown-item SRC-primary-background-color-hover"
                    >
                      Downloads
                    </MenuItem>
                    <MenuItem
                      component="a"
                      className={`dropdown-item SRC-primary-background-color-hover`}
                      href={`${getEndpoint(
                        BackendDestinationEnum.PORTAL_ENDPOINT,
                      )}RequestHistory:default`}
                    >
                      Access Requests
                    </MenuItem>
                    <Divider sx={{ my: 0 }} />
                    <MenuItem
                      component="a"
                      className="dropdown-item SRC-primary-background-color-hover"
                      href={accountSettingsUrl.toString()}
                    >
                      Settings
                    </MenuItem>
                    <Divider sx={{ my: 0 }} />
                    <MenuItem // desktop sign out
                      className="dropdown-item SRC-primary-background-color-hover"
                      onClick={() => {
                        clearSession()
                      }}
                    >
                      Sign Out
                    </MenuItem>
                  </Menu>
                </div>
                <div
                  className="user-loggedIn-mb" // mobile version, shows the user icon and name, no dropdown
                >
                  <a
                    href={`${getEndpoint(
                      BackendDestinationEnum.PORTAL_ENDPOINT,
                    )}/Profile:${userProfile.ownerId}/projects/all`}
                  >
                    <NavUserLink userProfile={userProfile} />
                  </a>
                  <div className="mb-user-extra">
                    <div className="user-fullname">
                      {userProfile?.firstName} {userProfile?.lastName}
                    </div>
                    <Link
                      href={accountSettingsUrl.toString()}
                      sx={{
                        textDecoration: '#e79776 underline',
                        color: '#404b63',
                        fontWeight: 'normal',
                      }}
                    >
                      View Account
                    </Link>
                  </div>
                </div>
              </>
            )}
          {isAuthenticated && (
            <ShowDownloadV2
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
              <SageResourcesPopover
                filterByType="SynapsePortal"
                anchorEl={portalResourcesAnchorEl}
                onClose={handleClosePortalResources}
              />
            </>
          )}
          {navbarConfig.routes.toReversed().map(route => {
            if (route.children) {
              return (
                <DropdownNavButton
                  route={route}
                  key={route.path}
                  onClickedNavLink={() => {
                    setShowMenu(false)
                  }}
                >
                  {route.name}
                </DropdownNavButton>
              )
            }
            return (
              <NavLink
                to={route.path}
                key={route.path}
                className={'nav-button-container nav-button center-content'}
              >
                {route.name}
              </NavLink>
            )
          })}
        </div>
      </Box>
      <div className="spacer" />
    </>
  )
}
