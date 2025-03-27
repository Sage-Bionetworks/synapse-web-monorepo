import App from '@sage-bionetworks/synapse-portal-framework/App'
import ELBrowseToolsPage from '@sage-bionetworks/synapse-portal-framework/components/elportal/ELBrowseToolsPage'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import { HomePageThemeProvider } from 'src/themes/HomePageThemeProvider'
import { Markdown } from 'synapse-react-client'
import HomePageV2 from '../pages/HomePageV2'
import ProjectDetailsPage from '../pages/ProjectDetailsPage'
import StudyDetailsPage, {
  studyDetailsPageRoutes,
} from '../pages/StudyDetailsPage'
import explorePageRoutes from './explorePageRoutes'
import { computationalSql } from './resources'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App></App>,
    children: [
      ...sharedRoutes,
      {
        index: true,
        element: (
          <HomePageThemeProvider>
            <HomePageV2 />
          </HomePageThemeProvider>
        ),
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
        element: <ExploreWrapper explorePaths={explorePageRoutes} />,
        children: explorePageRoutes,
      },
      {
        path: 'Explore/Projects/DetailsPage',
        element: <ProjectDetailsPage />,
      },
      {
        path: 'Explore/Studies/DetailsPage',
        element: <StudyDetailsPage />,
        children: studyDetailsPageRoutes,
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
            <SectionLayout title={'LLFS'}>
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
