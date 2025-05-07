import { useNavigate } from 'react-router'
import SynapseClient from 'synapse-react-client/synapse-client'

function LogoutPage() {
  const navigate = useNavigate()
  SynapseClient.signOut().then(() => {
    navigate('/authenticated/myaccount', { replace: true })
  })
  return <></>
}

export default LogoutPage
