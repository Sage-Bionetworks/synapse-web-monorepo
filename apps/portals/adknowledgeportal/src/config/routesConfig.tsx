import App from '@sage-bionetworks/synapse-portal-framework/App'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import RedirectToURL from '@sage-bionetworks/synapse-portal-framework/components/RedirectToURL'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import SurveyToast from '@sage-bionetworks/synapse-portal-framework/components/SurveyToast'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import HomePage from 'src/pages/HomePage'
import ProgramDetailsPage from 'src/pages/ProgramDetailsPage'
import ProjectDetailsPage from 'src/pages/ProjectDetailsPage'
import {
  StudyDetailsPage,
  studyDetailsPageChildRoutes,
} from 'src/pages/StudyDetailsPage'
import { SynapseFormWrapper } from 'synapse-react-client'
import { MarkdownSynapse } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { explorePageRoutes } from './explorePageRoutes'
import { experimentalModelsSql, modelADStrainsSelectedFacet } from './resources'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <App>
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
        element: <Navigate to="/Data Access" />,
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
        children: studyDetailsPageChildRoutes,
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
