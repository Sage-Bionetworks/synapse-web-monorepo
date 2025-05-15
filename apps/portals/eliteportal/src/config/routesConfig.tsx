import App from '@sage-bionetworks/synapse-portal-framework/App'
import ELBrowseToolsPage from '@sage-bionetworks/synapse-portal-framework/components/eliteportal/ELBrowseToolsPage'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import {
  STUDY_DETAILS_PAGE_DATA_TAB_PATH,
  STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
} from './routeConstants'
import { computationalSql } from './resources'
import RepositoryUnderReviewAlert from '@sage-bionetworks/synapse-portal-framework/components/RepositoryUnderReviewAlert'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <App>
        {/* PORTALS-3508 */}
        <RepositoryUnderReviewAlert portalSpecificDisclaimer="This repository is developed by Sage Bionetworks to host and share resources related to Exceptional Longevity research, and remains fully operational. We continue to maintain and accept longevity-related data and resources throughout this review process." />
      </App>
    ),
    children: [
      ...sharedRoutes,
      {
        index: true,
        lazy: () => import('@/pages/HomePage').then(convertModuleToRouteObject),
      },
      {
        path: 'Browse Tools',
        element: (
          <ELBrowseToolsPage
            popularSearchesSql={''}
            toolsSql={computationalSql}
          />
        ),
      },
      {
        path: 'Explore',
        lazy: () =>
          import('@/pages/Explore/layout').then(convertModuleToRouteObject),
        children: [
          {
            path: 'Data',
            lazy: () =>
              import('@/pages/Explore/data').then(convertModuleToRouteObject),
          },
          {
            path: 'Cohort Builder',
            lazy: () =>
              import('@/pages/Explore/cohortBuilder').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Projects',
            lazy: () =>
              import('@/pages/Explore/projects').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Studies',
            lazy: () =>
              import('@/pages/Explore/studies').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Publications',
            lazy: () =>
              import('@/pages/Explore/publications').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Computational Tools',
            lazy: () =>
              import('@/pages/Explore/computationalTools').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'People',
            lazy: () =>
              import('@/pages/Explore/people').then(convertModuleToRouteObject),
          },
        ],
      },
      {
        path: 'Explore/Projects/DetailsPage',
        lazy: () =>
          import('@/pages/ProjectDetailsPage').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore/Studies/DetailsPage',
        lazy: () =>
          import('@/pages/StudyDetailsPage/StudyDetailsPage').then(
            convertModuleToRouteObject,
          ),
        children: [
          {
            index: true,
            element: (
              <RedirectWithQuery to={STUDY_DETAILS_PAGE_DETAILS_TAB_PATH} />
            ),
          },
          {
            path: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
            lazy: () =>
              import('@/pages/StudyDetailsPage/StudyDetailsTab').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: STUDY_DETAILS_PAGE_DATA_TAB_PATH,
            lazy: () =>
              import('@/pages/StudyDetailsPage/StudyDataTab').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Analysis Platforms',
        element: (
          <SectionLayout title={'Analysis Platforms'}>
            <Markdown
              ownerId="syn27229419"
              wikiId="621275"
              loadingSkeletonRowCount={10}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Data Access',
        element: (
          <>
            <SectionLayout title={'Data Access'}>
              <Markdown
                ownerId="syn27229419"
                wikiId="621276"
                loadingSkeletonRowCount={10}
              />
            </SectionLayout>
            <SectionLayout title={'ADAMTS7'}>
              <Markdown
                ownerId="syn27229419"
                wikiId="622372"
                loadingSkeletonRowCount={10}
              />
            </SectionLayout>
            <SectionLayout title={'ELPSCRNA'}>
              <Markdown
                ownerId="syn27229419"
                wikiId="622485"
                loadingSkeletonRowCount={10}
              />
            </SectionLayout>
            {/* <SectionLayout title={'Aging PheWAS'}>
            <Markdown
                ownerId="syn27229419"
                wikiId="622480"
                loadingSkeletonRowCount={10}
              />
          </SectionLayout>*/}
            <SectionLayout title={'LLFS US'}>
              <Markdown
                ownerId="syn27229419"
                wikiId="622486"
                loadingSkeletonRowCount={10}
              />
            </SectionLayout>
            <SectionLayout title={'LLFS Danish'}>
              <Markdown
                ownerId="syn27229419"
                wikiId="631447"
                loadingSkeletonRowCount={10}
              />
            </SectionLayout>
          </>
        ),
      },
      {
        path: 'Contribute Data',
        element: (
          <SectionLayout title={'Contribute Data'}>
            <Markdown
              ownerId="syn27229419"
              wikiId="621277"
              loadingSkeletonRowCount={15}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Comparative Biology',
        element: (
          <SectionLayout title={'Comparative Biology'}>
            <Markdown
              ownerId="syn27229419"
              wikiId="630611"
              loadingSkeletonRowCount={15}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Omics Profiles in Humans',
        element: (
          <SectionLayout title={'Omics Profiles in Humans'}>
            <Markdown
              ownerId="syn27229419"
              wikiId="630616"
              loadingSkeletonRowCount={15}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Translational Approaches',
        element: (
          <SectionLayout title={'Translational Approaches'}>
            <Markdown
              ownerId="syn27229419"
              wikiId="630612"
              loadingSkeletonRowCount={15}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'AI Models',
        element: (
          <SectionLayout title={'AI/ML Models'}>
            <Markdown
              ownerId="syn27229419"
              wikiId="630613"
              loadingSkeletonRowCount={15}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'IPSCs',
        element: (
          <SectionLayout title={'IPSCs'}>
            <Markdown
              ownerId="syn27229419"
              wikiId="630614"
              loadingSkeletonRowCount={15}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Organoids',
        element: (
          <SectionLayout title={'Organoids'}>
            <Markdown
              ownerId="syn27229419"
              wikiId="630615"
              loadingSkeletonRowCount={15}
            />
          </SectionLayout>
        ),
      },
    ],
  },
]

export default routes
