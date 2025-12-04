import { useCookiePreferences } from 'synapse-react-client/utils/hooks/useCookiePreferences'
import { useState } from 'react'
import FullWidthAlert from 'synapse-react-client/components/FullWidthAlert/FullWidthAlert'

export type SurveyToastProps = {
  localStorageKey: string
  description: string
  surveyURL: string
  title?: string
  surveyButtonText?: string
}
const SurveyToast = (props: SurveyToastProps) => {
  const {
    localStorageKey,
    title = '',
    description,
    surveyURL,
    surveyButtonText = 'Take The Survey',
  } = props
  const [cookiePreferences] = useCookiePreferences()
  const [showBanner, setShowBanner] = useState(
    localStorage.getItem(localStorageKey) === null,
  )
  return !showBanner ? (
    <></>
  ) : (
    <FullWidthAlert
      isGlobal={true}
      onClose={() => {
        if (cookiePreferences.functionalAllowed) {
          localStorage.setItem(localStorageKey, 'true')
        }
        setShowBanner(false)
      }}
      variant={'info'}
      show={true}
      description={description}
      title={title}
      primaryButtonConfig={{
        text: surveyButtonText,
        href: surveyURL,
      }}
    />
  )
}

export default SurveyToast
