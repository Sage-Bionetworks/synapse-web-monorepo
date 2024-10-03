import App from '@sage-bionetworks/synapse-portal-framework/App'
import Ecosystem from '@sage-bionetworks/synapse-portal-framework/components/csbc-home-page/Ecosystem'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPage'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import Header from '@sage-bionetworks/synapse-portal-framework/components/Header'
import RedirectToURL from '@sage-bionetworks/synapse-portal-framework/components/RedirectToURL'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import SurveyToast from '@sage-bionetworks/synapse-portal-framework/components/SurveyToast'
import ToggleSynapseObjects from '@sage-bionetworks/synapse-portal-framework/components/ToggleSynapseObjects'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { PortalSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import {
  CardContainerLogic,
  FeaturedDataTabs,
  MarkdownSynapse,
  Programs,
  QueryWrapperPlotNav,
  RssFeedCards,
  StandaloneQueryWrapper,
  SynapseConstants,
  SynapseFormWrapper,
  UserCardListRotate,
} from 'synapse-react-client'
import {
  computationalSql,
  dataSql,
  experimentalModelsSql,
  modelADStrainsSelectedFacet,
  peopleSql,
  programsSql,
  projectsSql,
  publicationsSql,
  studiesSql,
  targetEnablingResourcesDetailsPageSql,
} from './resources'
import {
  computationalCardConfiguration,
  computationalToolsQueryWrapperPlotNavProps,
} from './synapseConfigs/computational_tools'
import { dataQueryWrapperPlotNavProps } from './synapseConfigs/data'
import {
  experimentalDetailsTableConfigurationColumnLinks,
  experimentalToolsCardConfiguration,
  experimentalToolsQueryWrapperPlotNavProps,
} from './synapseConfigs/experimental_tools'
import { peopleQueryWrapperPlotNavProps } from './synapseConfigs/people'
import programs, { programCardConfiguration } from './synapseConfigs/programs'
import { programsHomePageConfig } from './synapseConfigs/programsHomePage'
import {
  projectCardConfiguration,
  projectsQueryWrapperPlotNavProps,
} from './synapseConfigs/projects'
import {
  publicationCardProps,
  publicationsQueryWrapperPlotNavProps,
} from './synapseConfigs/publications'
import { results } from './synapseConfigs/results'
import {
  StudiesDetailsPage,
  studiesQueryWrapperPlotNavProps,
  studyCardConfiguration,
  studyDetailsPageChildRoutes,
  studyDetailsPageTabs,
} from './synapseConfigs/studies'
import {
  targetEnablingResourcesCardConfiguration,
  targetEnablingResourcesQueryWrapperPlotNavProps,
} from './synapseConfigs/target_enabling_resources'

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
        element: (
          <>
            <Header />
            <SectionLayout
              title={'Programs'}
              centerTitle={true}
              ContainerProps={{
                sx: {
                  '.Programs__Card': {
                    width: '32%',
                  },
                },
              }}
            >
              <Programs {...programsHomePageConfig} />
            </SectionLayout>
            <div className={'home-bg-dark'}>
              <SectionLayout
                title={'Featured Data'}
                centerTitle={true}
                ContainerProps={{
                  className: 'home-spacer',
                }}
              >
                <FeaturedDataTabs
                  sql={dataSql}
                  rgbIndex={3}
                  configs={[
                    {
                      title: 'Human Studies',
                      icon: 'PERSON',
                      explorePagePath: '/Explore/Studies',
                      exploreObjectType: 'Studies',
                      plotsConfig: {
                        configs: [
                          {
                            title:
                              'The Whole Genome Sequencing Harmonization Study',
                            description:
                              'This study provides a set of harmonized WGS data generated from the three primary AMP-AD cohort studies: ROSMAP, MSBB, and MayoRNAseq.',
                            facetsToPlot: ['dataType', 'assay'],
                            selectFacetColumnName: 'study',
                            selectFacetColumnValue: 'WGS_Harmonization',
                            detailsPagePath:
                              '/Explore/Studies/DetailsPage?Study=syn22264775',
                            unitDescription: 'Files',
                          },
                          {
                            title: 'The RNAseq Harmonization Study',
                            description:
                              'This study provides harmonized RNA sequencing data from the ROSMAP, MSBB, and MayoRNAseq studies that have been aligned to the GRCh38 human genome build.',
                            facetsToPlot: ['dataType', 'assay'],
                            selectFacetColumnName: 'study',
                            selectFacetColumnValue: 'RNAseq_Harmonization',
                            detailsPagePath:
                              '/Explore/Studies/DetailsPage?Study=syn21241740',
                            unitDescription: 'Files',
                          },
                          {
                            title:
                              'The Religious Orders and Memory and Aging Project Study',
                            description:
                              'This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).',
                            facetsToPlot: ['dataType', 'assay'],
                            selectFacetColumnName: 'study',
                            selectFacetColumnValue: 'ROSMAP',
                            detailsPagePath:
                              '/Explore/Studies/DetailsPage?Study=syn3219045',
                            unitDescription: 'Files',
                          },
                        ],
                      },
                    },
                    {
                      title: 'Animal Model Studies',
                      icon: 'MOUSE',
                      explorePagePath: '/Explore/Studies',
                      exploreObjectType: 'Studies',
                      plotsConfig: {
                        configs: [
                          {
                            title: 'The UCI MODEL-AD 5XFAD Study',
                            description:
                              "This study provides deep phenotyping data on the early onset Alzheimer's disease 5XFAD mouse model.",
                            facetsToPlot: ['dataType', 'assay'],
                            selectFacetColumnName: 'study',
                            selectFacetColumnValue: 'UCI_5XFAD',
                            detailsPagePath:
                              '/Explore/Studies/DetailsPage?Study=syn16798076',
                            unitDescription: 'Files',
                          },
                          {
                            title:
                              'The IU/Jax/Pitt MODEL-AD Levetiracetam 5XFAD Study',
                            description:
                              'This study provides pharmacokinetic, imaging, and behavior data on the 5XFAD mouse model dosed with levetiracetam.',
                            facetsToPlot: ['dataType', 'assay'],
                            selectFacetColumnName: 'study',
                            selectFacetColumnValue:
                              'Jax.IU.Pitt_Levetiracetam_5XFAD',
                            detailsPagePath:
                              '/Explore/Studies/DetailsPage?Study=syn21784897',
                            unitDescription: 'Files',
                          },
                          {
                            title:
                              'The IU/Jax/Pitt MODEL-AD Verubecestat 5XFAD Study',
                            description:
                              'This study provides pharmacokinetic, imaging, immunoassay, and behavior data on the 5XFAD mouse model dosed with verubecestat.',
                            facetsToPlot: ['dataType', 'assay'],
                            selectFacetColumnName: 'study',
                            selectFacetColumnValue:
                              'Jax.IU.Pitt_Verubecestat_5XFAD',
                            detailsPagePath:
                              '/Explore/Studies/DetailsPage?Study=syn21863375',
                            unitDescription: 'Files',
                          },
                        ],
                      },
                    },
                  ]}
                />
              </SectionLayout>
            </div>
            <SectionLayout
              title={'Related Resources'}
              centerTitle={true}
              subtitle={
                'The AD Knowledge Portal ecosystem contains a growing list of tools and resources. Explore some of them below.'
              }
              ContainerProps={{
                className: 'home-spacer',
              }}
            >
              <Ecosystem
                config={[
                  {
                    title: 'Results Explorers',
                    ownerId: 'syn12666371',
                    wikiId: '607139',
                  },
                  {
                    title: 'Data Portals',
                    ownerId: 'syn12666371',
                    wikiId: '607138',
                  },
                  {
                    title: 'Program Websites',
                    ownerId: 'syn12666371',
                    wikiId: '607140',
                  },
                ]}
              />
            </SectionLayout>
            <div className={'home-bg-dark'}>
              <SectionLayout
                title={'Our People and Institutions'}
                centerTitle={true}
                ContainerProps={{
                  className: 'home-spacer',
                }}
              >
                <UserCardListRotate
                  sql={`${peopleSql} where isFeatured=true`}
                  count={3}
                  size={SynapseConstants.MEDIUM_USER_CARD}
                  useQueryResultUserData={true}
                  summaryLink="Explore/People"
                  summaryLinkText="Explore All People"
                />
              </SectionLayout>
            </div>
            <SectionLayout
              title={"What's New"}
              centerTitle={true}
              ContainerProps={{
                className: 'home-spacer',
              }}
            >
              <RssFeedCards
                url="https://news.adknowledgeportal.org"
                itemsToShow={3}
                allowCategories={[]}
                mailChimpListName="AMP-AD quarterly newsletter"
                mailChimpUrl="https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a"
                filter={{
                  value: "what's-new",
                }}
              />
            </SectionLayout>
          </>
        ),
      },
      {
        // PORTALS-2028: redirect /ExperimentalModels to /Explore/Experimental%20Models
        path: 'ExperimentalModels/',
        element: <RedirectWithQuery to="/Explore/Experimental Models" />,
      },
      {
        // PORTALS-2028 (part 2): redirect /MODEL-ADstrains to /Explore/Experimental%20Models with query request
        path: 'MODEL-ADstrains/',
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
        path: 'DataAccess/',
        element: (
          <RedirectToURL toURL="https://www.synapse.org/#!Synapse:syn2580853/wiki/409840" />
        ),
      },
      {
        // PORTALS-2919: Redirect DataAccess/Instructions to /Data Access
        path: 'DataAccess/Instructions/',
        element: <Navigate to="/Data Access/" />,
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
                path: 'Studies',
              },
              {
                path: 'Data',
              },
              {
                path: 'Publications',
              },
              {
                path: 'People',
              },
              {
                path: 'Experimental Models',
              },
              {
                path: 'Computational Tools',
              },
              {
                path: 'Target Enabling Resources',
              },
              {
                path: 'Results',
              },
            ]}
          />
        ),
        children: [
          {
            path: 'Programs',
            element: <CardContainerLogic {...programs} sql={programsSql} />,
          },
          {
            path: 'Projects',
            element: (
              <QueryWrapperPlotNav {...projectsQueryWrapperPlotNavProps} />
            ),
          },
          {
            path: 'Studies',
            element: (
              <QueryWrapperPlotNav {...studiesQueryWrapperPlotNavProps} />
            ),
          },
          {
            path: 'Data',
            element: <QueryWrapperPlotNav {...dataQueryWrapperPlotNavProps} />,
          },
          {
            path: 'Publications',
            element: (
              <QueryWrapperPlotNav {...publicationsQueryWrapperPlotNavProps} />
            ),
          },
          {
            path: 'People',
            element: (
              <QueryWrapperPlotNav {...peopleQueryWrapperPlotNavProps} />
            ),
          },
          {
            // PORTALS-2001 - we renamed "Experimental Tools" to "Experimental Models"
            path: 'Experimental Tools',
            element: <RedirectWithQuery to={'/Explore/Experimental Models'} />,
          },
          {
            path: 'Experimental Models',
            element: (
              <QueryWrapperPlotNav
                {...experimentalToolsQueryWrapperPlotNavProps}
              />
            ),
          },
          {
            path: 'Computational Tools',
            element: (
              <QueryWrapperPlotNav
                {...computationalToolsQueryWrapperPlotNavProps}
              />
            ),
          },
          {
            path: 'Target Enabling Resources',
            element: (
              <QueryWrapperPlotNav
                {...targetEnablingResourcesQueryWrapperPlotNavProps}
              />
            ),
          },
          {
            path: 'Results',
            element: (
              <div style={results.style}>
                <MarkdownSynapse {...results.props} />
              </div>
            ),
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
            <PortalSearchParams keyFilter={['Program']}>
              {searchParams => {
                return (
                  <>
                    <CardContainerLogic
                      sql={programsSql}
                      isHeader={true}
                      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                      {...programCardConfiguration}
                      genericCardSchema={{
                        ...programCardConfiguration.genericCardSchema!,
                        description: 'Long Description',
                      }}
                      searchParams={searchParams}
                    />
                    <DetailsPage sql={programsSql}>
                      <DetailsPageContent
                        content={[
                          {
                            title: 'Projects',
                            id: 'Projects',
                            element: (
                              <CardContainerLogic
                                {...projectCardConfiguration}
                                sql={projectsSql}
                                searchParams={searchParams}
                              />
                            ),
                          },
                          {
                            title: 'Studies',
                            id: 'Studies',
                            element: (
                              <CardContainerLogic
                                {...studyCardConfiguration}
                                sql={studiesSql}
                                searchParams={searchParams}
                              />
                            ),
                          },
                        ]}
                      ></DetailsPageContent>
                    </DetailsPage>
                  </>
                )
              }}
            </PortalSearchParams>
          </>
        ),
      },
      {
        path: 'Explore/Projects/DetailsPage',
        element: (
          <PortalSearchParams keyFilter={['Grant Number']}>
            {searchParams => (
              <>
                <CardContainerLogic
                  sql={projectsSql}
                  isHeader={true}
                  {...projectCardConfiguration}
                  searchParams={searchParams}
                />
                <DetailsPage showMenu={true} sql={projectsSql}>
                  <DetailsPageContent
                    content={[
                      {
                        title: 'Studies',
                        id: 'Studies',
                        element: (
                          <CardContainerLogic
                            {...studyCardConfiguration}
                            sql={studiesSql}
                            searchParams={searchParams}
                          />
                        ),
                      },
                      {
                        title: 'Publications',
                        id: 'Publications',
                        element: (
                          <CardContainerLogic
                            sql={publicationsSql}
                            {...publicationCardProps}
                            searchParams={{
                              grant: searchParams['Grant Number'],
                            }}
                          />
                        ),
                      },
                      {
                        title: 'Experimental Models',
                        id: 'Experimental Models',
                        element: (
                          <ToggleSynapseObjects
                            icon1={'table'}
                            synapseObject1={
                              <StandaloneQueryWrapper
                                sql={experimentalModelsSql}
                                rgbIndex={4}
                                sqlOperator={
                                  ColumnSingleValueFilterOperator.EQUAL
                                }
                                columnLinks={
                                  experimentalDetailsTableConfigurationColumnLinks
                                }
                                searchParams={{
                                  grant: searchParams['Grant Number'],
                                }}
                              />
                            }
                            icon2={'cards'}
                            synapseObject2={
                              <CardContainerLogic
                                sql={experimentalModelsSql}
                                {...experimentalToolsCardConfiguration}
                                searchParams={{
                                  grant: searchParams['Grant Number'],
                                }}
                              />
                            }
                          />
                        ),
                      },
                      {
                        title: 'Computational Tools',
                        id: 'Computational Tools',
                        element: (
                          <CardContainerLogic
                            sql={computationalSql}
                            {...computationalCardConfiguration}
                            searchParams={{
                              grant: searchParams['Grant Number'],
                            }}
                          />
                        ),
                      },
                      {
                        title: 'Target Enabling Resources',
                        id: 'Target Enabling Resources',
                        element: (
                          <CardContainerLogic
                            sql={targetEnablingResourcesDetailsPageSql}
                            {...targetEnablingResourcesCardConfiguration}
                            searchParams={{
                              grant: searchParams['Grant Number'],
                            }}
                          />
                        ),
                      },
                      {
                        title: 'People',
                        id: 'People',
                        element: (
                          <CardContainerLogic
                            sql={peopleSql}
                            limit={6}
                            type={SynapseConstants.MEDIUM_USER_CARD}
                            searchParams={{
                              ['Grant Number']: searchParams['Grant Number'],
                            }}
                          />
                        ),
                      },
                    ]}
                  />
                </DetailsPage>
              </>
            )}
          </PortalSearchParams>
        ),
      },
      {
        path: 'Explore/Studies/DetailsPage',
        element: <StudiesDetailsPage />,
        children: [
          {
            index: true,
            element: <RedirectWithQuery to={studyDetailsPageTabs[0].path!} />,
          },
          ...studyDetailsPageTabs,
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
