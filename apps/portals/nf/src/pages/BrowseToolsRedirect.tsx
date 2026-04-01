// PORTALS-3454: Redirect /Browse Tools → /Research Tools Central/Browse Tools
import { Navigate } from 'react-router'

export default function BrowseToolsRedirect() {
  return <Navigate to="/Research Tools Central/Browse Tools" replace />
}
