import { Navigate } from 'react-router'

export function Component() {
  // PORTALS-2919: Redirect DataAccess/Instructions to /Data Access
  return <Navigate to="/Data Access" replace={true} />
}

export default Component
