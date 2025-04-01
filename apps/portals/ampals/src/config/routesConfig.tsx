import DatasetDetailsPage from '@/pages/DatasetDetailsPage'
import App from '@sage-bionetworks/synapse-portal-framework/App'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import { MarkdownSynapse } from 'synapse-react-client'
import HomePage from '../pages/HomePage'
import explorePageRoutes from './explorePageRoutes'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      ...sharedRoutes,
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'Explore',
        element: (
          <ExploreWrapper
            explorePaths={[
              {
                path: 'Programs',
              },
              {
                path: 'Collections',
              },
              {
                path: 'Datasets',
              },
              {
                path: 'All Data',
              },
            ]}
          />
        ),
        children: explorePageRoutes,
      },
      {
        path: 'Explore/Datasets/DetailsPage',
        element: <DatasetDetailsPage />,
      },
      {
        path: 'About',
        element: (
          <SectionLayout
            title={'About'}
            ContainerProps={{ className: 'AboutPage' }}
          >
            <MarkdownSynapse
              ownerId={'syn22130826'}
              loadingSkeletonRowCount={20}
            />
          </SectionLayout>
        ),
      },
    ],
  },
]

export default routes
