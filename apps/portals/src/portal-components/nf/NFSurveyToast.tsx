import React from 'react'
import { SynapseComponents } from 'synapse-react-client'
const NF_SURVEY_LOCALSTORAGE_KEY =
  'org.sagebionetworks.security.cookies.portal.nfsurvey.dismissed'
const NFSurveyToast = () => {
  const [showBanner, setShowBanner] = React.useState(
    localStorage.getItem(NF_SURVEY_LOCALSTORAGE_KEY) === null,
  )
  return !showBanner ? (
    <></>
  ) : (
    <SynapseComponents.FullWidthAlert
      isGlobal={true}
      onClose={() => {
        localStorage.setItem(NF_SURVEY_LOCALSTORAGE_KEY, 'true')
        setShowBanner(false)
      }}
      variant={'info'}
      show={true}
      description={
        'Help us improve the NF Data Portal by completing a data access survey!'
      }
      primaryButtonConfig={{
        text: 'Take The Survey',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSdSgkq66IoLHbvXNmMEjEg4nMELwM-_CaJK3rFkU9pn84gYuA/viewform',
      }}
    />
  )
}

export default NFSurveyToast
