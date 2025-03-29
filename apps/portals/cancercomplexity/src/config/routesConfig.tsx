import App from '@sage-bionetworks/synapse-portal-framework/App'
import AboutPortal from '@sage-bionetworks/synapse-portal-framework/components/csbc-home-page/AboutPortal'
import ConsortiaGoals from '@sage-bionetworks/synapse-portal-framework/components/csbc-home-page/ConsortiaGoals'
import DevelopedBySage from '@sage-bionetworks/synapse-portal-framework/components/csbc-home-page/DevelopedBySage'
import Ecosystem from '@sage-bionetworks/synapse-portal-framework/components/csbc-home-page/Ecosystem'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import { Programs, RssFeedCards, ThemesPlot } from 'synapse-react-client'
import DatasetsDetailsPage from '../pages/DatasetsDetailsPage'
import EducationalResourcesDetailsPage from '../pages/EducationalResourcesDetailsPage'
import GrantDetailsPage from '../pages/GrantDetailsPage'
import PeopleDetailsPage from '../pages/PeopleDetailsPage'
import PublicationsDetailsPage from '../pages/PublicationsDetailsPage'
import ToolsDetailsPage from '../pages/ToolsDetailsPage'
import explorePageRoutes from './explorePageRoutes'
import consortiaHomePageConfig from './synapseConfigs/consortiaHomePage'
import { MC2Supplement } from './synapseConfigs/MC2Supplement'
import {
  onIndividualThemeBarPlotPointClick,
  onPointClick,
} from './synapseConfigs/onPointClick'
import { searchPageChildRoutes } from '@/pages/CCKPSearchPage'
import CancerComplexityHeader from '@sage-bionetworks/synapse-portal-framework/components/cancercomplexity/CancerComplexityHeader'
import { FullWidthAlert } from 'synapse-react-client'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <App>
        {/* PORTALS-3505 */}
        <FullWidthAlert
          sx={{ m: 0 }}
          isGlobal={false}
          variant={'warning'}
          show={true}
          title={''}
          description={
            <>
              <p>
                This repository is under review for potential modification in
                compliance with Administration directives.
              </p>
              <p>
                This repository is developed by Sage Bionetworks to host and
                share resources related to Cancer research, and remains fully
                operational. We continue to maintain and accept cancer-related
                data and resources throughout this review process.
              </p>
            </>
          }
        />
      </App>
    ),
    children: [
      ...sharedRoutes,
      {
        index: true,
        element: (
          <>
            <CancerComplexityHeader />
            <div className={'home-bg-dark'}>
              <SectionLayout
                title={'Portal Goals'}
                centerTitle
                ContainerProps={{
                  className: 'home-spacer',
                }}
              >
                <ConsortiaGoals />
              </SectionLayout>
            </div>
            <SectionLayout
              title={
                'What Research Themes are Scientists Currently Focusing On?'
              }
              centerTitle
              ContainerProps={{
                className: 'home-spacer',
              }}
            >
              <ThemesPlot
                onPointClick={onPointClick}
                onIndividualThemeBarPlotPointClick={
                  onIndividualThemeBarPlotPointClick
                }
                topBarPlot={{
                  entityId: 'syn21641485',
                  xField: 'totalCount',
                  yField: 'groupBy',
                  groupField: 'consortium',
                  colors: {
                    CCBIR: 'rgba(24, 115, 107, 1)',
                    CSBC: 'rgba(156, 196, 233, 1)',
                    ICBP: 'rgba(226, 149, 12, 1)',
                    MetNet: 'rgba(30, 44, 72, 1)',
                    NCI: 'rgba(249, 204, 125, 1)',
                    PDMC: 'rgba(32, 171, 159, 1)',
                    'PS-ON': 'rgba(197, 191, 223, 1)',
                    TEC: 'rgba(59, 88, 143, 1)',
                    'Sage Bionetworks': 'rgba(127, 127, 127, 1)',
                  },
                  whereClause: 'totalCount is not NULL',
                }}
                sideBarPlot={{
                  entityId: 'syn21649281',
                  xField: 'totalCount',
                  yField: 'theme',
                  groupField: 'consortium',
                  countLabel: 'grants',
                  plotStyle: {
                    backgroundColor: '#f5f9fa',
                  },
                  colors: {
                    CSBC: '#1c76af',
                    'PS-ON': '#5bb0b5',
                    ICBP: '#9cc4e9',
                    TEC: '#c5bfdf',
                  },
                }}
                dotPlot={{
                  entityId: 'syn21639584',
                  xField: 'totalCount',
                  yField: 'theme',
                  groupField: 'groupBy',
                  infoField: 'themeDescription',
                  whereClause:
                    "groupBy IN ('publications', 'tools', 'datasets')",
                  markerSymbols: {
                    tools: 'y-down',
                    datasets: 'diamond-x',
                    publications: 'circle',
                  },
                  plotStyle: {
                    markerLine: 'rgba(0, 0, 0,1)',
                    markerFill: 'rgba(255, 255, 255,1)',
                    markerSize: 11,
                    backgroundColor: '#f5f9fa',
                  },
                }}
              />
            </SectionLayout>
            <div className={'home-bg-dark'}>
              <SectionLayout
                title={"What's New"}
                centerTitle
                ContainerProps={{ className: 'home-spacer' }}
              >
                <RssFeedCards
                  url={'https://news.cancercomplexity.synapse.org'}
                  itemsToShow={3}
                  allowCategories={[]}
                  filter={{
                    value: 'CCKP',
                    type: 'category',
                  }}
                />
              </SectionLayout>
            </div>
            <SectionLayout
              title={'Consortia'}
              centerTitle
              ContainerProps={{
                className: 'home-spacer cancercomplexity-consortia',
              }}
            >
              <Programs {...consortiaHomePageConfig} />
            </SectionLayout>
            <div className={'home-bg-dark'}>
              <SectionLayout
                title="The Cancer Resource Information Ecosystem"
                subtitle="The Cancer Resource Information ecosystem contains a growing list of tools and resources. Explore some of them below."
                centerTitle
                ContainerProps={{
                  className: 'home-spacer',
                }}
              >
                <Ecosystem
                  config={[
                    {
                      title: 'Public Repositories',
                      ownerId: 'syn21498902',
                      wikiId: '601489',
                    },
                    {
                      title: 'Data Commons',
                      ownerId: 'syn21498902',
                      wikiId: '601490',
                    },
                    {
                      title: 'Data Coordination',
                      ownerId: 'syn21498902',
                      wikiId: '601574',
                    },
                    {
                      title: 'Data Exploration',
                      ownerId: 'syn21498902',
                      wikiId: '601575',
                    },
                    {
                      title: 'Cloud Platform',
                      ownerId: 'syn21498902',
                      wikiId: '601576',
                    },
                  ]}
                />
              </SectionLayout>
            </div>
            <SectionLayout
              title={'About the Cancer Complexity Knowledge Portal'}
              subtitle={
                'The portal is built to disseminate resources to accelerate discovery and collaboration in the cancer research community. We aim to provide rich context about and access to activities and contributors that have produced the resources hosted within this and other repositories.'
              }
              centerTitle
              ContainerProps={{ className: 'home-spacer' }}
            >
              <AboutPortal
                cardProps={[
                  { ownerId: 'syn21498902', wikiId: '601369' },
                  { ownerId: 'syn21498902', wikiId: '601370' },
                ]}
              />
            </SectionLayout>
            <SectionLayout>
              <DevelopedBySage />
            </SectionLayout>
          </>
        ),
      },
      {
        path: 'Explore',
        element: <ExploreWrapper explorePaths={explorePageRoutes} />,
        children: explorePageRoutes,
      },
      {
        path: 'Explore/Grants/DetailsPage',
        element: <GrantDetailsPage />,
      },
      {
        path: 'Explore/People/DetailsPage',
        element: <PeopleDetailsPage />,
      },
      {
        path: 'Explore/Publications/DetailsPage',
        element: <PublicationsDetailsPage />,
      },
      {
        path: 'Explore/Datasets/DetailsPage',
        element: <DatasetsDetailsPage />,
      },
      {
        path: 'Explore/Tools/DetailsPage',
        element: <ToolsDetailsPage />,
      },
      {
        path: 'Explore/Educational Resources/DetailsPage',
        element: <EducationalResourcesDetailsPage />,
      },
      {
        path: 'MC2Supplement',
        element: <MC2Supplement />,
      },
      {
        path: 'Search',
        children: searchPageChildRoutes,
      },
    ],
  },
]

export default routes
