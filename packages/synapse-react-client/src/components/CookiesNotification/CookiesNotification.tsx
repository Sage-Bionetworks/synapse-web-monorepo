import React from 'react'
import FullWidthAlert from '../FullWidthAlert'

export const alertConfig = {
  title: 'Our site uses cookies.',
  description:
    'This website uses cookies to enhance your experience and to analyze our traffic. Using this website means that you agree with our cookie policy.',
  primaryButtonText: 'ACCEPT AND CONTINUE',
}

export const COOKIES_AGREEMENT_LOCALSTORAGE_KEY =
  'org.sagebionetworks.security.cookies.portal.notification.okclicked'

const CookiesNotification = () => {
  const [okClicked, setOkClicked] = React.useState(
    localStorage.getItem(COOKIES_AGREEMENT_LOCALSTORAGE_KEY) !== null,
  )

  // show banner if they haven't clicked okay, otherwise show nothing
  return okClicked ? (
    <></>
  ) : (
    <FullWidthAlert
      variant="info"
      title={alertConfig.title}
      description={alertConfig.description}
      primaryButtonConfig={{
        text: alertConfig.primaryButtonText,
        onClick: () => {
          localStorage.setItem(COOKIES_AGREEMENT_LOCALSTORAGE_KEY, 'true')
          setOkClicked(true)
        },
      }}
      secondaryButtonConfig={{
        text: 'LEARN MORE',
        href: 'https://s3.amazonaws.com/static.synapse.org/governance/SynapsePrivacyPolicy.pdf',
      }}
      isGlobal={true}
    />
  )
}

export default CookiesNotification
