import React, { useState } from 'react'
import FullWidthAlert from '../FullWidthAlert'
import { Link, Typography } from '@mui/material'
import CookiePreferencesDialog from './CookiePreferencesDialog'
import {
  COOKIES_AGREEMENT_LOCALSTORAGE_KEY,
  CookiePreference,
  useCookiePreferences,
} from '../../utils/hooks/useCookiePreferences'

export const alertConfig = {
  title: 'Our site uses cookies.',
  description: (
    <Typography variant="body1">
      We use necessary cookies and store your data to ensure our websites
      function properly. With your consent, we would also like to use cookies to
      remember your preferences and improve our websites. Review our{' '}
      <Link href="https://s3.amazonaws.com/static.synapse.org/governance/SynapsePrivacyPolicy.pdf">
        Privacy Policy
      </Link>
      . By clicking “Accept All” you consent to our use of cookies. You can
      change your cookie preference at any time from the Settings page.
    </Typography>
  ),
  primaryButtonText: 'ALLOW ALL',
  secondaryButtonText: 'Disable All',
  tertiaryButtonText: 'Customize',
}

const allowAll: CookiePreference = {
  functionalAllowed: true,
  analyticsAllowed: true,
}
const allowNone: CookiePreference = {
  functionalAllowed: false,
  analyticsAllowed: false,
}

export type CookieNotificationProps = {
  onClose?: (cookiePrefs: CookiePreference) => void
}

const CookiesNotification = (props: CookieNotificationProps) => {
  const { onClose } = props
  const [, setCookiePreferences] = useCookiePreferences()

  const [notificationDismissed, setNotificationDismissed] = useState(
    localStorage.getItem(COOKIES_AGREEMENT_LOCALSTORAGE_KEY) !== null,
  )

  const [isCookiePrefsDialogVisible, setIsCookiePrefsDialogVisible] =
    useState(false)
  // show banner if they haven't clicked okay, otherwise show nothing
  return notificationDismissed ? (
    <></>
  ) : (
    <>
      <FullWidthAlert
        globalAlertSx={{ zIndex: 1500 }}
        variant="info"
        title={alertConfig.title}
        description={alertConfig.description}
        primaryButtonConfig={{
          text: alertConfig.primaryButtonText,
          onClick: () => {
            setCookiePreferences(allowAll)
            setNotificationDismissed(true)
            if (onClose) {
              onClose(allowAll)
            }
          },
        }}
        secondaryButtonConfig={{
          text: alertConfig.secondaryButtonText,
          onClick: () => {
            setCookiePreferences(allowNone)
            setNotificationDismissed(true)
            if (onClose) {
              onClose(allowNone)
            }
          },
        }}
        tertiaryButtonConfig={{
          text: alertConfig.tertiaryButtonText,
          onClick: () => {
            setIsCookiePrefsDialogVisible(true)
          },
        }}
        isGlobal={true}
      />
      <CookiePreferencesDialog
        isOpen={isCookiePrefsDialogVisible}
        onSave={prefs => {
          setNotificationDismissed(true)
          setIsCookiePrefsDialogVisible(false)
          if (onClose) {
            onClose(prefs)
          }
        }}
        onHide={() => {
          setIsCookiePrefsDialogVisible(false)
        }}
      />
    </>
  )
}

export default CookiesNotification
