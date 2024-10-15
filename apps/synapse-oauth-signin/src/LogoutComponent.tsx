import React, { useEffect } from 'react'
import { SynapseClient, useSynapseContext } from 'synapse-react-client'

export function LogoutComponent() {
  const { accessToken } = useSynapseContext()
  useEffect(() => {
    SynapseClient.signOut()
  }, [])
  return <p style={{ margin: 10 }}>{accessToken ? 'Logging' : 'Logged'} out</p>
}
