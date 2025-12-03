import {
  allowAll,
  allowNone,
  CookiePreference,
  COOKIES_AGREEMENT_COOKIE_KEY,
  useCookiePreferences,
} from '@/utils/hooks/useCookiePreferences'
import {
  PRIVACY_POLICY_LINK,
  URL_TERMS_CONDITIONS_AGREEMENT,
  CHILD_MINOR_ADDENDUM_LINK,
} from '@/utils/SynapseConstants'
import { Link, Typography } from '@mui/material'
import { useState } from 'react'
import UniversalCookies from 'universal-cookie'
import FullWidthAlert from '../FullWidthAlert'
import CookiePreferencesDialog from './CookiePreferencesDialog'
import styles from './CookiesNotification.module.scss'

const cookies = new UniversalCookies()

export const alertConfig = {
  title: 'Our site uses cookies.',
  description: (
    <>
      <Typography variant="body1">
        We use necessary cookies and store your data to ensure our websites
        function properly. With your consent, we would also like to use optional
        cookies to remember your preferences and improve our websites. Please
        read our <Link href={PRIVACY_POLICY_LINK}>Privacy Policy</Link> for
        details. By clicking “Allow All,” you agree to our use of cookies. You
        can adjust your cookie preferences anytime on the Settings page.
      </Typography>
      <Typography
        variant="smallText1"
        sx={{ mt: '20px' }}
        className={styles.MinorAddendum}
      >
        Please read our{' '}
        <Link href={URL_TERMS_CONDITIONS_AGREEMENT}>Terms of Service</Link>{' '}
        before using our website. If you are between 13 and 18, you must submit
        a <Link href={CHILD_MINOR_ADDENDUM_LINK}>Child Minor Addendum</Link> for
        access.
      </Typography>
    </>
  ),
  primaryButtonText: 'ALLOW ALL',
  secondaryButtonText: 'Disable All',
  tertiaryButtonText: 'Customize',
}

export type CookieNotificationProps = {
  onClose?: (cookiePrefs: CookiePreference) => void
}

const CookiesNotification = (props: CookieNotificationProps) => {
  const { onClose } = props
  const [, setCookiePreferences] = useCookiePreferences()

  const [notificationDismissed, setNotificationDismissed] = useState(
    !!cookies.get(COOKIES_AGREEMENT_COOKIE_KEY),
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
