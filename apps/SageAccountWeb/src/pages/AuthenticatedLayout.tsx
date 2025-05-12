import Footer from '@/components/Footer'
import { Outlet } from 'react-router'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'
import LoginPage from './LoginPage'

function AuthenticatedLayout() {
  const { accessToken } = useSynapseContext()
  const isAuthenticated = Boolean(accessToken)

  let content = <Outlet />

  if (!isAuthenticated) {
    content = <LoginPage />
  }

  return (
    <>
      {content}
      <Footer />
    </>
  )
}

export default AuthenticatedLayout
