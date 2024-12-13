import { useEffect } from 'react'
import SynapseClient from 'synapse-react-client/synapse-client'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'

export function LogoutComponent() {
  const { accessToken } = useSynapseContext()
  useEffect(() => {
    SynapseClient.signOut()
  }, [])
  return <p style={{ margin: 10 }}>{accessToken ? 'Logging' : 'Logged'} out</p>
}
