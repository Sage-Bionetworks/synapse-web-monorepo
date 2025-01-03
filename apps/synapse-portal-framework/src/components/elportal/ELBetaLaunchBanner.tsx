import { Link } from '@mui/material'
import { useState } from 'react'
import { SynapseComponents, SynapseHookUtils } from 'synapse-react-client'
const EL_BETA_LAUNCH_LOCALSTORAGE_KEY =
  'org.sagebionetworks.security.cookies.portal.elbetalaunch.dismissed'
const ELBetaLaunchBanner = () => {
  const [cookiePreferences] = SynapseHookUtils.useCookiePreferences()
  const [showBanner, setShowBanner] = useState(
    localStorage.getItem(EL_BETA_LAUNCH_LOCALSTORAGE_KEY) === null,
  )
  return !showBanner ? (
    <></>
  ) : (
    <SynapseComponents.FullWidthAlert
      isGlobal={true}
      onClose={() => {
        if (cookiePreferences.functionalAllowed) {
          localStorage.setItem(EL_BETA_LAUNCH_LOCALSTORAGE_KEY, 'true')
        }
        setShowBanner(false)
      }}
      variant={'info'}
      show={true}
      title="Welcome to the beta version of the ELITE Portal!"
      description={
        <>
          This version of the portal is currently under development. We will be
          launching the ELITE Portal to the general research community in 2025,
          with more data and site features to be added. Stay updated by signing
          up for the{' '}
          <Link
            href="https://news.eliteportal.org/elite-portal-newsletter/"
            target="_blank"
          >
            ELITE Portal Newsletter
          </Link>
        </>
      }
      // primaryButtonConfig={{
      //   text: 'Sign up for newsletter',
      //   href: 'TBD',
      // }}
    />
  )
}

export default ELBetaLaunchBanner
