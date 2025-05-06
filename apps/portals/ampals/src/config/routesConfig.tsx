import DatasetDetailsPage from '@/pages/DatasetDetailsPage'
import App from '@sage-bionetworks/synapse-portal-framework/App'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import { MarkdownSynapse } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import HomePage from '../pages/HomePage'
import explorePageRoutes from './explorePageRoutes'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import { searchPageChildRoutes } from '@/pages/AMPALSSearchPage'

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
                path: 'Files',
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
        path: 'Resources',
        children: [
          {
            path: 'For Researchers',
            element: (
              <MarkdownSynapse
                ownerId="syn64892175"
                wikiId="631452"
                loadingSkeletonRowCount={20}
              />
            ),
          },
          {
            path: 'For Contributors',
            element: (
              <MarkdownSynapse
                ownerId="syn64892175"
                wikiId="631451"
                loadingSkeletonRowCount={20}
              />
            ),
          },
          {
            path: 'TEST PATH',
            element: (
              <MarkdownSynapse
                ownerId="syn64892175"
                wikiId="631453"
                loadingSkeletonRowCount={20}
              />
            ),
          },
        ],
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
      {
        path: 'Search',
        children: searchPageChildRoutes,
      },
    ],
  },
]

export default routes
