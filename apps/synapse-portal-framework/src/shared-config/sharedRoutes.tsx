import RedirectWithQuery from '@/components/RedirectWithQuery'
import { lazy } from 'react'
import { RouteObject } from 'react-router'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'

const DownloadCartPage = lazy(
  () => import('synapse-react-client/components/DownloadCart/DownloadCartPage'),
)

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
