import { useEffect } from 'react'
import { useSearchParams } from 'react-router'
import SynapseClient from 'synapse-react-client/synapse-client/index'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'

export function LoginComponent() {
  const { isAuthenticated } = useSynapseContext()
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const code = searchParams.get('code')
    // look for the code from the params
    SynapseClient.setAccessTokenCookie(code ?? undefined)
  }, [])

  return (
    <p style={{ margin: 10 }}>{isAuthenticated ? 'Logged' : 'Logging'} in</p>
  )
}
