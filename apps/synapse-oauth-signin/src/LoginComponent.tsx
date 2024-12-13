import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import SynapseClient from 'synapse-react-client/synapse-client'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'

export function LoginComponent() {
  const { accessToken } = useSynapseContext()
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const code = searchParams.get('code')
    // look for the code from the params
    SynapseClient.setAccessTokenCookie(code ?? undefined)
  }, [])

  return <p style={{ margin: 10 }}>{accessToken ? 'Logged' : 'Logging'} in</p>
}
