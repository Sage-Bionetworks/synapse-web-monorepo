import { useNavigate } from 'react-router-dom'
import SynapseClient from 'synapse-react-client/synapse-client'

export default function LogoutPage() {
  const navigate = useNavigate()
  SynapseClient.signOut().then(() => {
    navigate('/authenticated/myaccount', { replace: true })
  })
  return <></>
}
