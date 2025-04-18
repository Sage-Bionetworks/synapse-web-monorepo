import { doiRedirector, doiSerializer } from '@/config/doiRedirector'
import HomePage from '@/pages/HomePage'
import ProgramDetailsPage from '@/pages/ProgramDetailsPage'
import ProjectDetailsPage from '@/pages/ProjectDetailsPage'
import {
  STUDY_DETAILS_PAGE_DATA_TAB_PATH,
  STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
} from '@/config/routeConstants'
import App from '@sage-bionetworks/synapse-portal-framework/App'
import RedirectToURL from '@sage-bionetworks/synapse-portal-framework/components/RedirectToURL'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import RepositoryUnderReviewAlert from '@sage-bionetworks/synapse-portal-framework/components/RepositoryUnderReviewAlert'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import SurveyToast from '@sage-bionetworks/synapse-portal-framework/components/SurveyToast'
import { getDoiRedirectRoute } from '@sage-bionetworks/synapse-portal-framework/shared-config/DoiRedirectRoute'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router'
import { explorePageRoutes } from './explorePageRoutes'
import { experimentalModelsSql, modelADStrainsSelectedFacet } from './resources'

// Lazy load each page component to improve initial load time
const MarkdownSynapse = lazy(
  () => import('synapse-react-client/components/Markdown/MarkdownSynapse'),
)
const SynapseFormWrapper = lazy(
  () =>
    import('synapse-react-client/components/SynapseForm/SynapseFormWrapper'),
)
const HomePage = lazy(() => import('@/pages/HomePage'))
const ProgramDetailsPage = lazy(() => import('@/pages/ProgramDetailsPage'))
const ProjectDetailsPage = lazy(() => import('@/pages/ProjectDetailsPage'))
const StudyDetailsPage = lazy(
  () => import('@/pages/StudyDetailsPage/StudyDetailsPage'),
)
const ExploreWrapper = lazy(
  () =>
    import(
      '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
    ),
)
const StudyDataTab = lazy(() => import('@/pages/StudyDetailsPage/StudyDataTab'))
const StudyDetailsTab = lazy(
  () => import('@/pages/StudyDetailsPage/StudyDetailsTab'),
)

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <App>
        {/* PORTALS-3508 */}
        <RepositoryUnderReviewAlert
          portalSpecificDisclaimer={
            "This repository is developed by Sage Bionetworks to host and share resources related to Alzheimer's Disease research, and remains fully operational. We continue to maintain and accept Alzheimer's disease-related data and resources throughout this review process."
          }
        />
        <SurveyToast
          localStorageKey="org.sagebionetworks.security.cookies.portal.adkpsurvey.dismissed"
          title="What Metrics Matter to You? Help Us Improve the AD Knowledge Portal!"
          description="Take our quick survey and share your feedback to make the portal even better. Your input will directly impact the data and insights we provide."
          surveyURL="https://docs.google.com/forms/d/e/1FAIpQLScpWL2N3LGQlNcqKRXQ-qST-UPKngutNkvbhPVkozD7cQR8-g/viewform"
        />
      </App>
    ),
    children: [
      ...sharedRoutes,
      getDoiRedirectRoute({
        redirector: doiRedirector,
        deserializer: doiSerializer,
      }),
      {
        index: true,
        element: <HomePage />,
      },
      {
        // PORTALS-2028: redirect /ExperimentalModels to /Explore/Experimental%20Models
        path: 'ExperimentalModels',
        element: <RedirectWithQuery to="/Explore/Experimental Models" />,
      },
      {
        // PORTALS-2028 (part 2): redirect /MODEL-ADstrains to /Explore/Experimental%20Models with query request
        path: 'MODEL-ADstrains',
        element: (
          <Navigate
            to={{
              pathname: '/Explore/Experimental Models',
              search: `QueryWrapper0={"sql":"${encodeURI(
                experimentalModelsSql,
              )}","limit":25,"offset":0,"selectedFacets":[{"concreteType":"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest","columnName":"${
                modelADStrainsSelectedFacet.columnName
              }","facetValues":["${
                modelADStrainsSelectedFacet.facetValue
              }"]}]}`,
            }}
            replace={true}
          />
        ),
      },
      {
        path: 'DataAccess',
        element: (
          <RedirectToURL toURL="https://www.synapse.org/#!Synapse:syn2580853/wiki/409840" />
        ),
      },
      {
        // PORTALS-2919: Redirect DataAccess/Instructions to /Data Access
        path: 'DataAccess/Instructions',
        element: <Navigate to="/Data Access" replace={true} />,
      },
      {
        path: 'Explore',
        element: <ExploreWrapper explorePaths={explorePageRoutes} />,
        children: [
          ...explorePageRoutes,
          {
            // PORTALS-2001 - we renamed "Experimental Tools" to "Experimental Models"
            path: 'Experimental Tools',
            element: <RedirectWithQuery to={'/Explore/Experimental Models'} />,
          },
        ],
      },
      {
        path: 'Explore/Programs/DetailsPage',
        element: (
          <>
            {/* PORTALS-2836: redirect /Explore/Programs/DetailsPage?Program=ELITE to the ELITE portal */}
            <RedirectToURL
              toURL="https://eliteportal.synapse.org/"
              search="Program=ELITE"
            />
            <ProgramDetailsPage />
          </>
        ),
      },
      {
        path: 'Explore/Projects/DetailsPage',
        element: <ProjectDetailsPage />,
      },
      {
        path: 'Explore/Studies/DetailsPage',
        element: <StudyDetailsPage />,
        children: [
          {
            index: true,
            element: (
              <RedirectWithQuery to={STUDY_DETAILS_PAGE_DETAILS_TAB_PATH} />
            ),
          },
          {
            path: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
            element: <StudyDetailsTab />,
          },
          {
            path: STUDY_DETAILS_PAGE_DATA_TAB_PATH,
            element: <StudyDataTab />,
          },
        ],
      },
      {
        path: 'Analysis Platforms',
        element: (
          <SectionLayout title={'Analysis Platforms'}>
            <MarkdownSynapse
              ownerId="syn12666371"
              wikiId="625598"
              loadingSkeletonRowCount={10}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Data Access',
        element: (
          <SectionLayout title={'Data Access'}>
            <MarkdownSynapse
              ownerId="syn12666371"
              wikiId="581937"
              loadingSkeletonRowCount={20}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Contribute',
        element: (
          <SectionLayout title={'Contribute'}>
            <MarkdownSynapse
              ownerId="syn12666371"
              wikiId="600033"
              loadingSkeletonRowCount={20}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Contribute/FormSubmission',
        element: (
          <SectionLayout>
            <MarkdownSynapse ownerId="syn12666371" wikiId="600034" />
            <SynapseFormWrapper
              formSchemaEntityId={'syn20692910'}
              fileNamePath={'study.submission_name'}
              formUiSchemaEntityId={'syn20692911'}
              formNavSchemaEntityId={'syn20968007'}
              isWizardMode={true}
              formTitle={'Your Contribution Request'}
              formClass={'contribution-request'}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'About',
        element: (
          <SectionLayout title={'About'}>
            <MarkdownSynapse
              ownerId="syn12666371"
              wikiId="581939"
              loadingSkeletonRowCount={20}
            />
          </SectionLayout>
        ),
      },
    ],
  },
]

export default routes
