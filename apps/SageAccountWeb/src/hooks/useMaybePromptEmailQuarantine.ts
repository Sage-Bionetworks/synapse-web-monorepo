import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { storeLastPlace } from 'synapse-react-client/utils/AppUtils/AppUtils'
import { DISMISSED_EMAIL_UNDELIVERABLE_PROMPT_SESSIONSTORAGE_KEY } from '@/utils/StorageKeys'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'
import { useGetNotificationEmail } from 'synapse-react-client/synapse-queries/user/useUserBundle'
import { TermsOfServiceState } from '@sage-bionetworks/synapse-types'
import { useApplicationSessionContext } from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'
import { SKIPPED_SIGNING_TOS_SESSIONSTORAGE_KEY } from './useMaybePromptToSignTermsOfService'

export const EMAIL_QUARANTINED_PATH = '/authenticated/emailUndeliverable'

export default function useMaybePromptEmailQuarantine() {
  const [mayPromptEmailQuarantine, setMayPromptEmailQuarantine] = useState(true)
  const { isAuthenticated } = useSynapseContext()
  const { data: notificationEmail, isLoading } = useGetNotificationEmail({
    enabled: isAuthenticated,
  })
  const navigate = useNavigate()
  const location = useLocation()

  const { termsOfServiceStatus } = useApplicationSessionContext()
  const skippedToS =
    sessionStorage.getItem(SKIPPED_SIGNING_TOS_SESSIONSTORAGE_KEY) === 'true'
  const isToSPending =
    termsOfServiceStatus?.userCurrentTermsOfServiceState !==
      TermsOfServiceState.UP_TO_DATE && !skippedToS

  const dismissedPrompt =
    sessionStorage.getItem(
      DISMISSED_EMAIL_UNDELIVERABLE_PROMPT_SESSIONSTORAGE_KEY,
    ) === 'true'

  // Don't interrupt flows the user must finish first (2FA enrollment, registration)
  const isInRequiredFlow =
    location.pathname.startsWith('/authenticated/2fa') ||
    location.pathname === '/authenticated/currentaffiliation' ||
    location.pathname === '/register1' ||
    location.pathname === '/register2'

  useEffect(() => {
    if (
      !isAuthenticated ||
      isLoading ||
      !termsOfServiceStatus ||
      isToSPending ||
      isInRequiredFlow
    )
      return
    if (notificationEmail?.quarantineStatus && !dismissedPrompt) {
      if (location.pathname !== EMAIL_QUARANTINED_PATH) {
        storeLastPlace()
        navigate(EMAIL_QUARANTINED_PATH)
      }
    } else {
      setMayPromptEmailQuarantine(false)
    }
  }, [
    isAuthenticated,
    isLoading,
    notificationEmail,
    dismissedPrompt,
    location.pathname,
    navigate,
    termsOfServiceStatus,
    isToSPending,
    isInRequiredFlow,
  ])

  return { mayPromptEmailQuarantine }
}
