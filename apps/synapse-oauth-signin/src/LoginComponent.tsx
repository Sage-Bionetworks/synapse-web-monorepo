import { useEffect } from 'react'
import { useSearchParams } from 'react-router'
import { SynapseClient, useSynapseContext } from 'synapse-react-client'

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
