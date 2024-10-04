import App from '@sage-bionetworks/synapse-portal-framework/App'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import NFBrowseToolsPage from '@sage-bionetworks/synapse-portal-framework/components/nf/NFBrowseToolsPage'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import SurveyToast from '@sage-bionetworks/synapse-portal-framework/components/SurveyToast'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import { GenericRoute } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { RouteObject } from 'react-router-dom'
import InitiativeDetailsPage from '../pages/InitiativeDetailsPage'
import { DynamicForm } from 'synapse-react-client'
import HomePage from '../pages/HomePage'
import StudyDetailsPage, {
  studyDetailsPageTabRoutes,
} from '../pages/StudyDetailsPage'
import explorePageRoutes from './explorePageRoutes'
import {
  hackathonsSql,
  popularSearchesSql,
  studiesSql,
  toolsSql,
} from './resources'
import { columnAliases } from './synapseConfigs/commonProps'
import { datasetsDetailsPage } from './synapseConfigs/datasets'
import {
  hackathonCardConfiguration,
  hackathonsDetailPage,
} from './synapseConfigs/hackathons'
import { organizationDetailsPage } from './synapseConfigs/organizations'
import {
  studiesDetailPage,
  studyCardConfiguration,
  studyHeaderIconOptions,
} from './synapseConfigs/studies'
import { toolsDetailsPage } from './synapseConfigs/tools'
import DatasetDetailsPage from 'src/pages/DatasetDetailsPage'
import ToolDetailsPage, {
  toolDetailsPageTabRoutes,
} from 'src/pages/ToolDetailsPage'

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
            path: 'Submit Animal Models',
            element: (
              <SectionLayout>
                <DynamicForm
                  schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/additional-models/NF-Tools-Schemas/animal-model/submitAnimalModel.json"
                  uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/additional-models/NF-Tools-Schemas/animal-model/SubmitAnimalModelUiSchema.json"
                  postUrl="https://submit-form.com/KwZ46H4T"
                />
              </SectionLayout>
            ),
          },
          {
            path: 'Submit Observations',
            element: (
              <SectionLayout>
                <DynamicForm
                  schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/additional-models/NF-Tools-Schemas/observations/SubmitObservationSchema.json"
                  uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/additional-models/NF-Tools-Schemas/observations/SubmitObservationUiSchema.json"
                  postUrl="https://submit-form.com/KwZ46H4T"
                />
              </SectionLayout>
            ),
          },
          {
            path: 'Submit Genetic Reagents',
            element: (
              <SectionLayout>
                <DynamicForm
                  schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/additional-models/NF-Tools-Schemas/genetic-reagent/submitGeneticReagent.json"
                  uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/additional-models/NF-Tools-Schemas/genetic-reagent/submitGeneticReagentUiSchema.json"
                  postUrl="https://submit-form.com/KwZ46H4T"
                />
              </SectionLayout>
            ),
          },
        ],
      },
      {
        path: 'Explore',
        element: <ExploreWrapper explorePaths={explorePageRoutes} />,
        children: explorePageRoutes,
      },
      {
        path: 'Explore/Initiatives/DetailsPage',
        element: <InitiativeDetailsPage />,
      },
      {
        path: 'Explore/Studies/DetailsPage',
        element: <StudyDetailsPage />,
        children: [
          {
            index: true,
            element: (
              <RedirectWithQuery to={studyDetailsPageTabRoutes[0].path!} />
            ),
          },
          ...studyDetailsPageTabRoutes,
        ],
      },
      {
        path: 'Explore/Datasets/DetailsPage',
        element: <DatasetDetailsPage />,
      },
      {
        path: 'Explore/Tools/DetailsPage',
        element: <ToolDetailsPage />,
        children: [
          {
            index: true,
            element: (
              <RedirectWithQuery to={toolDetailsPageTabRoutes[0].path!} />
            ),
          },
          ...toolDetailsPageTabRoutes,
        ],
      },
    ],
  },
]

const old: GenericRoute[] = [
  {
    path: 'Explore',
    routes: [
      {
        path: 'Tools',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            exact: false,
            synapseConfigArray: toolsDetailsPage,
          },
        ],
      },
      {
        path: 'Hackathon',
        displayName: 'Hackathon Projects',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            exact: false,
            synapseConfigArray: [
              {
                name: 'CardContainerLogic',
                isOutsideContainer: true,
                props: {
                  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                  isHeader: true,
                  ...hackathonCardConfiguration,
                  columnAliases: { ...columnAliases, studyStatus: 'Status' },
                  secondaryLabelLimit: Infinity,
                  sql: hackathonsSql,
                },
              },
              {
                name: 'DetailsPage',
                isOutsideContainer: false,
                props: hackathonsDetailPage,
                containerClassName: 'container-full-width',
              },
            ],
          },
        ],
      },
      {
        exact: true,
        path: 'Hackathon Projects',
        hideRouteFromNavbar: true,
        synapseConfigArray: [
          // PORTALS-2277 - Renamed "Hackathon Projects" to "Hackathon"
          {
            name: 'RedirectWithQuery',
            props: {
              exact: false,
              strict: false,
              from: 'Hackathon Projects',
              to: 'Hackathon',
            },
          },
        ],
      },
    ],
  },
  {
    path: 'Organizations',
    routes: [
      {
        hideRouteFromNavbar: true,
        path: 'DetailsPage',
        synapseConfigArray: organizationDetailsPage,
      },
      {
        displayName: 'CTF',
        path: 'DetailsPage?abbreviation=CTF',
      },
      {
        displayName: 'NTAP',
        path: 'DetailsPage?abbreviation=NTAP',
      },
      {
        displayName: 'GFF',
        path: 'DetailsPage?abbreviation=GFF',
      },
      {
        displayName: 'NCI DHART SPORE',
        path: 'DetailsPage?fundingAgency=NIH-NCI',
      },
      {
        displayName: 'CDMRP NFRP',
        path: 'DetailsPage?abbreviation=CDMRP',
      },
      {
        displayName: 'NFRI',
        path: 'DetailsPage?abbreviation=NFRI',
      },
    ],
  },

  {
    path: 'About',
    routes: [
      {
        displayName: 'NF-OSI',
        hideRouteFromNavbar: false,
        path: undefined,
        target: '_blank',
        link: 'https://help.nf.synapse.org/NFdocs/about',
        synapseConfigArray: [],
      },
      {
        displayName: 'Data Standards',
        hideRouteFromNavbar: false,
        path: undefined,
        target: '_blank',
        link: 'https://nf-osi.github.io/nf-metadata-dictionary/',
        synapseConfigArray: [],
      },
    ],
  },
  {
    exact: true,
    displayName: 'Contribute Data',
    path: undefined,
    target: '_blank',
    link: 'https://help.nf.synapse.org/NFdocs/How-to-Share-Data-(an-Overview).1994489966.html',
    synapseConfigArray: [],
  },
  {
    exact: true,
    displayName: 'News',
    path: undefined,
    target: '_blank',
    link: 'https://news.nfdataportal.org/',
    synapseConfigArray: [],
  },
  {
    exact: true,
    displayName: 'Help',
    path: undefined,
    target: '_blank',
    link: 'https://help.nf.synapse.org/',
    synapseConfigArray: [],
  },
]

export default routes
