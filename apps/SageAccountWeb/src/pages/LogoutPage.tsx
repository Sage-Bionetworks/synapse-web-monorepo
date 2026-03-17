import { useNavigate } from 'react-router'
import { useApplicationSessionContext } from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'

function LogoutPage() {
  const navigate = useNavigate()
  const { clearSession } = useApplicationSessionContext()
  clearSession(() => {
    navigate('/authenticated/myaccount', { replace: true })
  })
  return <></>
}

export default LogoutPage
