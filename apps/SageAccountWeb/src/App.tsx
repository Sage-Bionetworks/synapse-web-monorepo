import { Outlet } from 'react-router'
import { CookiesNotification } from 'synapse-react-client/components/CookiesNotification'
import './App.scss'

function App() {
  return (
    <div className="App">
      <CookiesNotification />
      <Outlet />
    </div>
  )
}
export default App
