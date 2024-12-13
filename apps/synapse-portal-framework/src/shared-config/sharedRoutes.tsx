import { RouteObject } from 'react-router-dom'
import { DownloadCartPage } from 'synapse-react-client/components/DownloadCart/DownloadCartPage'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import RedirectWithQuery from '../components/RedirectWithQuery'

const routes: RouteObject[] = [
  {
    path: '*',
    element: (
      <ErrorPage
        type={SynapseErrorType.NOT_FOUND}
        message={''}
        gotoPlace={() => {
          // not necessary for NOT_FOUND page
        }}
      />
    ),
  },
  {
    // Handles redirecting '/Home' to '/'
    path: 'Home',
    element: <RedirectWithQuery to="/" />,
  },
  {
    path: 'DownloadCart',
    element: (
      <DownloadCartPage
        onViewSharingSettingsClicked={benefactorEntityId => {
          window.open(
            `https://www.synapse.org/Synapse:${benefactorEntityId}`,
            '_blank',
          )
        }}
      />
    ),
  },
]

export default routes
