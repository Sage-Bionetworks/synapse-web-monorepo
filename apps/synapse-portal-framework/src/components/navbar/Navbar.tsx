import { Box, Button } from '@mui/material'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useNavigate } from 'react-router-dom'
import {
  AppUtils,
  storeRedirectURLForOneSageLoginAndGotoURL,
  SynapseComponents,
  SynapseHookUtils,
  SynapseQueries,
  useSynapseContext,
} from 'synapse-react-client'
import { RESPONSIVE_SIDE_PADDING } from '../../utils'
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

  const { clearSession } = AppUtils.useApplicationSessionContext()

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

  const oneSageUrl = SynapseHookUtils.useOneSageURL()
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
                    storeRedirectURLForOneSageLoginAndGotoURL(
                      oneSageUrl.toString(),
                    )
                  }}
                >
                  Sign&nbsp;In
                </Button>
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
    </React.Fragment>
  )
}

export default Navbar
