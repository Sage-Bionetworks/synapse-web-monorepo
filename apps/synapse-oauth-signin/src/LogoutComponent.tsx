import { useEffect } from 'react'
import { useApplicationSessionContext } from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'

export function LogoutComponent() {
  const { isAuthenticated } = useSynapseContext()
  const { clearSession } = useApplicationSessionContext()
  useEffect(() => {
    clearSession()
  }, [clearSession])
  return (
    <p style={{ margin: 10 }}>{isAuthenticated ? 'Logging' : 'Logged'} out</p>
  )
}
