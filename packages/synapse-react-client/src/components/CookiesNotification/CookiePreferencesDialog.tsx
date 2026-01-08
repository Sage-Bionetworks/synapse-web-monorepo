import {
  CookiePreference,
  useCookiePreferences,
} from '@/utils/hooks/useCookiePreferences'
import { PRIVACY_POLICY_LINK } from '@/utils/SynapseConstants'
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  Link,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import DialogBaseTitle from '@/react-ui/components/DialogBaseTitle'

export type CookiePreferencesDialogProps = {
  isOpen: boolean
  /* Called when the user saves settings */
  onSave: (prefs: CookiePreference) => void
  onHide: () => void
}

type CookiePreferenceItemProps = {
  title: string
  description: string
} & (
  | {
      constantValue?: string
    }
  | {
      checked: boolean
      onChange: (newValue: boolean) => void
    }
)

function CookiePreferenceItem(props: CookiePreferenceItemProps) {
  const { title, description } = props
  const isCheckbox = 'onChange' in props
  const cursor = isCheckbox ? 'pointer' : undefined
  return (
    <Box
      onClick={() => (isCheckbox ? props.onChange(!props.checked) : undefined)}
      sx={{ cursor }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '17px',
          alignItems: 'center',
        }}
      >
        <Typography
          variant={'body1'}
          sx={{ fontWeight: 400, color: 'grey.900' }}
        >
          {title}
        </Typography>
        {'constantValue' in props && (
          <Typography
            variant={'body1'}
            sx={{ fontWeight: 700, marginBottom: '15px' }}
          >
            {props.constantValue}
          </Typography>
        )}
        {isCheckbox && (
          <Checkbox
            // We handle toggling the value in the parent div onClick handler.
            checked={props.checked}
          />
        )}
      </Box>
      <Typography variant={'body1'} sx={{ fontWeight: 400, color: 'grey.700' }}>
        {description}
      </Typography>
    </Box>
  )
}

export default function CookiePreferencesDialog(
  props: CookiePreferencesDialogProps,
) {
  const [cookiePreferences, setCookiePreferences] = useCookiePreferences()
  const { onSave, onHide, isOpen } = props
  const [isFunctionalCookiesAllowed, setIsFunctionalCookiesAllowed] =
    useState<boolean>(cookiePreferences.functionalAllowed)
  const [isAnalyticsCookiesAllowed, setIsAnalyticsCookiesAllowed] =
    useState<boolean>(cookiePreferences.analyticsAllowed)

  return (
    <Dialog maxWidth="md" open={isOpen} onClose={onHide} sx={{ zIndex: 1500 }}>
      <DialogBaseTitle title="Privacy Preferences" onCancel={onHide} />
      <DialogContent sx={{ paddingRight: '20px' }}>
        <Typography variant={'body1'}>
          Sage Bionetworks uses cookies and other browser storage methods to
          save information about how you use our websites, and to make our
          websites work the way you expect them to.
        </Typography>
        <Typography variant={'body1'} sx={{ marginBottom: '30px' }}>
          Read our <Link href={PRIVACY_POLICY_LINK}>privacy policy</Link>.
        </Typography>
        <CookiePreferenceItem
          title="Strictly necessary cookies"
          description="Information about your authentication, and other critical data. For example, after you log in successfully, we save a token in your browser that tells our website what level of access you are allowed to have. You can’t turn off these cookies, because the site wouldn’t function without them."
          constantValue="Always Active"
        />
        <CookiePreferenceItem
          title="Functional cookies"
          description="This includes important customization preferences, for example, your local time, and whether you are using experimental features. You can turn off this setting, however it may impact your experience of using our websites."
          checked={isFunctionalCookiesAllowed}
          onChange={setIsFunctionalCookiesAllowed}
        />
        <CookiePreferenceItem
          title="Analytics cookie"
          description="If you allow us to, we store information about how you use our websites. This helps us identify problems and improve our products. While we do not attempt to track you, it may be possible to identify individual users. Deactivating this setting will not affect your experience of using our websites."
          checked={isAnalyticsCookiesAllowed}
          onChange={setIsAnalyticsCookiesAllowed}
        />
        <CookiePreferenceItem
          title="Targeting and marketing cookies"
          description="We do not store or exchange user or session information for targeting or marketing purposes."
          constantValue="Never"
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => {
            const prefs: CookiePreference = {
              functionalAllowed: isFunctionalCookiesAllowed,
              analyticsAllowed: isAnalyticsCookiesAllowed,
            }
            setCookiePreferences(prefs)
            onSave(prefs)
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
