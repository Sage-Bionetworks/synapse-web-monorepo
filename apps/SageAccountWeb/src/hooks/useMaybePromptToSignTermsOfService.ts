import { TermsOfServiceState } from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { storeLastPlace } from 'synapse-react-client/utils/AppUtils/AppUtils'
import { useApplicationSessionContext } from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'

type UseMaybeRedirectToSignTermsOfServiceReturn = {
  // if true, the user may be redirected (or has already been redirected) to sign the ToS
  // i.e. don't assume the ToS has been signed and boot the user to the original app until this returns false!
  mayPromptTermsOfUse: boolean
}

export const SKIPPED_SIGNING_TOS_SESSIONSTORAGE_KEY = 'skippedSigningToS'

export default function useMaybePromptToSignTermsOfService(): UseMaybeRedirectToSignTermsOfServiceReturn {
  // Detect if terms of service are up to date.  If not, route to either the Pledge or a page where the user can sign the updated terms.
  // Note, if the status is "MUST_AGREE_SOON", then the new page will offer a "Skip" button
  const skippedSigningUpdatedToS =
    sessionStorage.getItem(SKIPPED_SIGNING_TOS_SESSIONSTORAGE_KEY) === 'true'
  const { termsOfServiceStatus } = useApplicationSessionContext()

  const navigate = useNavigate()
  const location = useLocation()

  // true until we confirm we will not show terms of use
  const [mayPromptTermsOfUse, setMayPromptTermsOfUse] = useState(true)

  useEffect(() => {
    if (termsOfServiceStatus) {
      if (
        termsOfServiceStatus.userCurrentTermsOfServiceState !=
          TermsOfServiceState.UP_TO_DATE &&
        !skippedSigningUpdatedToS
      ) {
        if (
          termsOfServiceStatus.lastAgreementDate == undefined &&
          location.pathname != '/authenticated/signTermsOfUse'
        ) {
          navigate('/authenticated/signTermsOfUse')
        } else if (
          termsOfServiceStatus.lastAgreementDate != null &&
          location.pathname != '/authenticated/signUpdatedTermsOfUse'
        ) {
          storeLastPlace()
          navigate('/authenticated/signUpdatedTermsOfUse')
        }
      } else {
        setMayPromptTermsOfUse(false)
      }
    }
  }, [
    termsOfServiceStatus,
    skippedSigningUpdatedToS,
    location.pathname,
    navigate,
  ])

  return { mayPromptTermsOfUse }
}
