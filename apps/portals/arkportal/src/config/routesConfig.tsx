import App from '@sage-bionetworks/synapse-portal-framework/App'
import ARKWelcomePage from '@sage-bionetworks/synapse-portal-framework/components/arkportal/ARKWelcomePage'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Goals, MarkdownSynapse } from 'synapse-react-client'
import { DatasetDetailsPage } from '../pages/DatasetDetailsPage'
import { ProgramsDetailPage } from '../pages/ProgramDetailsPage'
import { ProjectDetailsPage } from '../pages/ProjectDetailsPage'
import explorePageRoutes from './explorePageRoutes'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      ...sharedRoutes,
      {
        index: true,
        element: (
          <>
            <ARKWelcomePage />
            <SectionLayout>
              <Goals entityId={'syn38103451'} />
            </SectionLayout>
          </>
        ),
      },
      {
        path: 'About',
        element: (
          <SectionLayout title={'About'}>
            <MarkdownSynapse
              ownerId={'syn26710600'}
              wikiId={'619467'}
              loadingSkeletonRowCount={8}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Data Access',
        element: (
          <SectionLayout title={'Data Access'}>
            <MarkdownSynapse
              ownerId={'syn26710600'}
              wikiId={'619468'}
              loadingSkeletonRowCount={8}
            />
          </SectionLayout>
        ),
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
                path: 'Projects',
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
        path: 'Explore/Programs/DetailsPage',
        element: <ProgramsDetailPage />,
      },
      {
        path: 'Explore/Projects/DetailsPage',
        element: <ProjectDetailsPage />,
      },
      {
        path: 'Explore/Datasets/DetailsPage',
        element: <DatasetDetailsPage />,
      },
    ],
  },
]

export default routes
