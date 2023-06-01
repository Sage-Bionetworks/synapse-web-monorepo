import React from 'react'
import { useCookies } from 'react-cookie'
import { SynapseComponents } from 'synapse-react-client'
const EL_BETA_LAUNCH_COOKIE_KEY =
  'org.sagebionetworks.security.cookies.portal.elbetalaunch.dismissed'
const ELBetaLaunchBanner = () => {
  const [cookies, setCookie] = useCookies([EL_BETA_LAUNCH_COOKIE_KEY])
  return cookies[EL_BETA_LAUNCH_COOKIE_KEY] ? (
    <></>
  ) : (
    <SynapseComponents.FullWidthAlert
      isGlobal={true}
      onClose={() => {
        setCookie(EL_BETA_LAUNCH_COOKIE_KEY, 'true')
      }}
      variant={'info'}
      show={true}
      title="Welcome to the beta version of the ELITE Portal!"
      description={
        'This version of the portal is open to members of the National Institute on Aging (NIA)-funded exceptional longevity translational research projects. We will be launching the ELITE Portal to the general research community and public later this year, with more data and features to be added. Get updates and stay connected with us by signing up for the EL DMCC newsletter.'
      }
      // primaryButtonConfig={{
      //   text: 'Sign up for newsletter',
      //   href: 'TBD',
      // }}
    />
  )
}

export default ELBetaLaunchBanner
