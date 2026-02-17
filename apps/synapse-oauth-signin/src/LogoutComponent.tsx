import { useEffect } from 'react'
import { useApplicationSessionContext } from 'synapse-react-client'
import { useSynapseContext } from 'synapse-react-client'

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
