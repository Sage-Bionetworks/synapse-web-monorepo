import * as React from 'react'
import { useCookies } from 'react-cookie'
import FullWidthAlert from 'synapse-react-client/dist/containers/FullWidthAlert'
const NF_SURVEY_COOKIE_KEY = 'org.sagebionetworks.security.cookies.portal.nfsurvey.dismissed'
const NFSurveyToast = () => {
  const [cookies, setCookie] = useCookies([NF_SURVEY_COOKIE_KEY])
  return cookies[NF_SURVEY_COOKIE_KEY] ? <></> : <FullWidthAlert
  isGlobal={true}
  onClose={() => {
    setCookie(NF_SURVEY_COOKIE_KEY, 'true')
  }}
  variant={'info'}
  show={true}
  description={'Help us improve the NF Data Portal by completing a data access survey!'}
  primaryButtonConfig={{
    text: 'Take The Survey',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdSgkq66IoLHbvXNmMEjEg4nMELwM-_CaJK3rFkU9pn84gYuA/viewform'
  }}
/>
}

export default NFSurveyToast
