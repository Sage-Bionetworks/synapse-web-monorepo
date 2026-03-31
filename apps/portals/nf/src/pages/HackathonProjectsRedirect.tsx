// PORTALS-2277: Redirect renamed "Hackathon Projects" → "Hackathon"
import { Navigate } from 'react-router'

export default function HackathonProjectsRedirect() {
  return <Navigate to="/Explore/Hackathon" replace />
}
