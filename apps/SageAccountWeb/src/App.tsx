import { Outlet, ScrollRestoration } from 'react-router'
import { CookiesNotification } from 'synapse-react-client/components/CookiesNotification/index'
import './App.scss'

function App() {
  return (
    <div className="App">
      <CookiesNotification />
      <Outlet />
      <ScrollRestoration />
    </div>
  )
}
export default App
