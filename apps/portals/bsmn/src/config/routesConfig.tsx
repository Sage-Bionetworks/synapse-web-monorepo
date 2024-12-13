import App from '@sage-bionetworks/synapse-portal-framework/App'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import Header from '@sage-bionetworks/synapse-portal-framework/components/Header'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router-dom'
import Goals from 'synapse-react-client/components/Goals/Goals'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import UserCardListGroups from 'synapse-react-client/components/UserCardList/UserCardListGroups/index'

import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { ProjectDetailsPage } from '../pages/ProjectDetailsPage'
import StudyDetailsPage from '../pages/StudyDetailsPage'
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
            <Header />
            <SectionLayout title={'About the Portal'} centerTitle>
              <MarkdownSynapse
                ownerId={'syn21645000'}
                loadingSkeletonRowCount={10}
              />
            </SectionLayout>
            <SectionLayout
              ContainerProps={{
                className: 'home-spacer',
              }}
            >
              <Goals entityId={'syn23021143'} />
            </SectionLayout>
            <div className={'home-bg-dark'}>
              <SectionLayout
                title={'Grants and Principal Investigators'}
                centerTitle
                ContainerProps={{
                  className: 'home-spacer',
                }}
              >
                <UserCardListGroups
                  sql="SELECT * FROM syn21781196 WHERE isFeatured='true'"
                  columnName="Project Title"
                  facetValues={[
                    'Somatic Mosaicism in the brain of Tourette syndrome',
                    'Somatic Mosaicism in Schizophrenia and Control Brains',
                    '1/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
                    '2/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
                    '3/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
                    'Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder',
                    'Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease',
                    '1/2-Somatic mosaicism and autism spectrum disorder',
                    '2/2-Somatic mosaicism and autism spectrum disorder',
                  ]}
                  size={SynapseConstants.MEDIUM_USER_CARD}
                  useQueryResultUserData={true}
                  summaryLinkText="Explore All People"
                  summaryLink="/Explore/People"
                  count={6}
                />
              </SectionLayout>
            </div>
            <SectionLayout title={'Acknowledgement'} centerTitle>
              <MarkdownSynapse
                ownerId={'syn23308351'}
                loadingSkeletonRowCount={10}
              />
            </SectionLayout>
          </>
        ),
      },
      {
        path: 'Explore',
        element: (
          <ExploreWrapper
            explorePaths={[
              {
                path: 'Projects',
              },
              {
                path: 'Data',
              },
              {
                path: 'Tools',
              },
              {
                path: 'People',
              },
              {
                path: 'Publications',
              },
            ]}
          />
        ),
        children: explorePageRoutes,
      },
      {
        path: 'Explore/Projects/DetailsPage',
        element: <ProjectDetailsPage />,
      },
      {
        path: 'Explore/Data/DetailsPage',
        element: <StudyDetailsPage />,
      },
      {
        path: 'About',
        element: (
          <SectionLayout title={'About'}>
            <MarkdownSynapse
              ownerId={'syn21896405'}
              loadingSkeletonRowCount={20}
            />
          </SectionLayout>
        ),
      },
    ],
  },
]

export default routes
