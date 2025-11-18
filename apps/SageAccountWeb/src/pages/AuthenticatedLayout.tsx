import Footer from '@/components/Footer'
import { Outlet } from 'react-router'
import { useSynapseContext } from 'synapse-react-client/stores/SynapseContext'
import LoginPage from './LoginPage'

function AuthenticatedLayout() {
  const { isAuthenticated } = useSynapseContext()

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
