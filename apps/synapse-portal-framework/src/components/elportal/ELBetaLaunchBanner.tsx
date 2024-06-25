import { Link } from '@mui/material'
import React from 'react'
import { SynapseComponents } from 'synapse-react-client'
const EL_BETA_LAUNCH_LOCALSTORAGE_KEY =
  'org.sagebionetworks.security.cookies.portal.elbetalaunch.dismissed'
const ELBetaLaunchBanner = () => {
  const [showBanner, setShowBanner] = React.useState(
    localStorage.getItem(EL_BETA_LAUNCH_LOCALSTORAGE_KEY) === null,
  )
  return !showBanner ? (
    <></>
  ) : (
    <SynapseComponents.FullWidthAlert
      isGlobal={true}
      onClose={() => {
        localStorage.setItem(EL_BETA_LAUNCH_LOCALSTORAGE_KEY, 'true')
        setShowBanner(false)
      }}
      variant={'info'}
      show={true}
      title="Welcome to the beta version of the ELITE Portal!"
      description={
        <>
          This version of the portal is open to members of the National
          Institute on Aging (NIA)-funded exceptional longevity translational
          research projects. We will be launching the ELITE Portal to the
          general research community and public in 2024, with more data and
          features to be added. Get updates and stay connected with us by
          signing up for the{' '}
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
