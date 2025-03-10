import App from '@sage-bionetworks/synapse-portal-framework/App'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import NFBrowseToolsPage from '@sage-bionetworks/synapse-portal-framework/components/nf/NFBrowseToolsPage'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import SurveyToast from '@sage-bionetworks/synapse-portal-framework/components/SurveyToast'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { sharePageLinkExplorePageButtonProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import { Navigate, RouteObject } from 'react-router'
import DatasetDetailsPage from 'src/pages/DatasetDetailsPage'
import { hackathonDetailsPageRoutesConfig } from 'src/pages/HackathonDetailsPage/HackathonDetailsPage'
import { organizationsDetailsPageRoute } from 'src/pages/OrganizationDetailsPage/OrganizationDetailsPage'
import { toolDetailsPageRoutesConfig } from 'src/pages/ToolDetailsPage/ToolDetailsPage'
import { DynamicForm, SharePageLinkButton } from 'synapse-react-client'
import HomePage from '../pages/HomePage'
import InitiativeDetailsPage from '../pages/InitiativeDetailsPage'
import { studyDetailsPageRoute } from '../pages/StudyDetailsPage/StudyDetailsPage'
import explorePageRoutes from './explorePageRoutes'
import { popularSearchesSql, toolsSql } from './resources'
import { searchPageChildRoutes } from 'src/pages/NFSearchPage'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <App>
        <SurveyToast
          localStorageKey={
            'org.sagebionetworks.security.cookies.portal.nfsurvey.dismissed'
          }
          description="Help us improve the NF Data Portal by completing a data access survey!"
          surveyURL="https://docs.google.com/forms/d/e/1FAIpQLSdSgkq66IoLHbvXNmMEjEg4nMELwM-_CaJK3rFkU9pn84gYuA/viewform"
        />
      </App>
    ),
    children: [
      ...sharedRoutes,
      { index: true, element: <HomePage /> },
      {
        //PORTALS-3454: Redirect Browse Tools to Research Tools Central/Browse Tools
        path: 'Browse Tools',
        element: <Navigate to="/Research Tools Central/Browse Tools" replace />,
      },
      {
        path: 'Research Tools Central',
        children: [
          {
            path: 'Browse Tools',
            element: (
              <NFBrowseToolsPage
                popularSearchesSql={popularSearchesSql}
                toolsSql={toolsSql}
              />
            ),
          },
          {
            path: 'Submit Animal Model',
            element: (
              <SectionLayout>
                <DynamicForm
                  schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/animal-model/submitAnimalModel.json"
                  uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/animal-model/SubmitAnimalModelUiSchema.json"
                  postUrl="https://submit-form.com/KwZ46H4T"
                />
              </SectionLayout>
            ),
          },
          {
            path: 'Submit Observation',
            element: (
              <SectionLayout>
                <DynamicForm
                  schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/observations/SubmitObservationSchema.json"
                  uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/observations/SubmitObservationUiSchema.json"
                  postUrl="https://submit-form.com/KwZ46H4T"
                />
              </SectionLayout>
            ),
          },
          {
            path: 'Submit Cell Line',
            element: (
              <SectionLayout>
                <DynamicForm
                  schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/cell-line/submitCellLine.json"
                  uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/cell-line/submitCellLineUiSchema.json"
                  postUrl="https://submit-form.com/KwZ46H4T"
                />
              </SectionLayout>
            ),
          },
          {
            path: 'Submit Antibody',
            element: (
              <SectionLayout>
                <DynamicForm
                  schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/antibody/submitAntibody.json"
                  uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/antibody/SubmitAntibodyUiSchema.json"
                  postUrl="https://submit-form.com/KwZ46H4T"
                />
              </SectionLayout>
            ),
          },
          {
            path: 'Submit Genetic Reagent',
            element: (
              <SectionLayout>
                <DynamicForm
                  schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/genetic-reagent/submitGeneticReagent.json"
                  uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/genetic-reagent/submitGeneticReagentUiSchema.json"
                  postUrl="https://submit-form.com/KwZ46H4T"
                />
              </SectionLayout>
            ),
          },
        ],
      },
      {
        path: 'Explore',
        element: (
          <>
            <SharePageLinkButton {...sharePageLinkExplorePageButtonProps} />
            <ExploreWrapper explorePaths={explorePageRoutes} />
          </>
        ),
        children: explorePageRoutes,
      },
      {
        path: 'Search',
        children: searchPageChildRoutes,
      },
      {
        path: 'Explore/Initiatives/DetailsPage',
        element: <InitiativeDetailsPage />,
      },
      studyDetailsPageRoute,
      {
        path: 'Explore/Datasets/DetailsPage',
        element: <DatasetDetailsPage />,
      },
      toolDetailsPageRoutesConfig,
      hackathonDetailsPageRoutesConfig,
      {
        // PORTALS-2277 - Renamed "Hackathon Projects" to "Hackathon"
        path: 'Explore/Hackathon Projects',
        element: <RedirectWithQuery to="/Explore/Hackathon" />,
      },
      organizationsDetailsPageRoute,
    ],
  },
]

export default routes
