import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useApplicationSessionContext } from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'

export default function useMaybeForceEnable2FA() {
  // Detect if two factor authentication is enabled
  const { twoFactorStatus } = useApplicationSessionContext()
  const navigate = useNavigate()
  const location = useLocation()

  // true until we confirm we will not force enable 2FA
  const [mayForceEnable2FA, setMayForceEnable2FA] = useState(true)

  useEffect(() => {
    if (twoFactorStatus !== undefined) {
      const isTwoFactorEnabled = twoFactorStatus?.status === 'ENABLED'
      // redirect to 2FA enrollment if not enabled and not already on the 2FA pages
      if (
        !isTwoFactorEnabled &&
        location.pathname != '/authenticated/2fa/enroll' &&
        location.pathname != '/authenticated/2faRequired'
      ) {
        navigate('/authenticated/2faRequired')
      } else {
        setMayForceEnable2FA(false)
      }
    }
  }, [twoFactorStatus, location.pathname, navigate])

  return { mayForceEnable2FA }
}
