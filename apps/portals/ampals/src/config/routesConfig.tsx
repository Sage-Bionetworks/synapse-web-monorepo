import DatasetDetailsPage from '@/pages/DatasetDetailsPage'
import App from '@sage-bionetworks/synapse-portal-framework/App'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import { MarkdownSynapse } from 'synapse-react-client'
import HomePage from '../pages/HomePage'
import explorePageRoutes from './explorePageRoutes'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'
import { searchPageChildRoutes } from '@/pages/AMPALSSearchPage'
import { Typography, Link } from '@mui/material'
//import header images for Resources pages
import ResearcherResourcesHeaderSlat from '@sage-bionetworks/synapse-portal-framework/components/ampals/assets/researcher_resources_slat.png'
import ContributorResourcesHeaderSlat from '@sage-bionetworks/synapse-portal-framework/components/ampals/assets/data_contributor_resources_slat.png'
import PWLEResourcesHeaderSlat from '@sage-bionetworks/synapse-portal-framework/components/ampals/assets/pwles_resources_slat.png'
import PublishingRequirementsSlat from '@sage-bionetworks/synapse-portal-framework/components/ampals/assets/publishing_requirements.png'

//TO DO: help page button url(s), remove first child h2 padding-top or find some other fix, add input for header images

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      ...sharedRoutes,
      {
        index: true,
        element: <HomePage />,
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
                path: 'Collections',
              },
              {
                path: 'Datasets',
              },
              {
                path: 'Files',
              },
            ]}
          />
        ),
        children: explorePageRoutes,
      },
      {
        path: 'Explore/Datasets/DetailsPage',
        element: <DatasetDetailsPage />,
      },
      {
        path: 'Resources',
        children: [
          {
            path: 'For Researchers',
            element: (
              <AMPALSResearchPageLayout
                headerTitle="Resources"
                headerImageURL={ResearcherResourcesHeaderSlat}
                sidebarTitle="Resources for ALS researchers"
              >
                <MarkdownSynapse
                  ownerId="syn64892175"
                  wikiId="631452"
                  loadingSkeletonRowCount={50}
                />
              </AMPALSResearchPageLayout>
            ),
          },
          {
            path: 'For Contributors',
            element: (
              <AMPALSResearchPageLayout
                headerTitle="Resources"
                headerImageURL={ContributorResourcesHeaderSlat}
                sidebarTitle="How to contribute data to the ALS Knowledge Portal"
                sidebarContent={
                  <>
                    <Typography>
                      For questions or inquiries about contributing data,
                      contact &nbsp;
                      <Link href="mailto:name@example.com">
                        name@example.com
                      </Link>
                    </Typography>
                  </>
                }
              >
                <MarkdownSynapse
                  ownerId="syn64892175"
                  wikiId="631451"
                  loadingSkeletonRowCount={50}
                />
              </AMPALSResearchPageLayout>
            ),
          },
          {
            path: 'For Persons With Lived Experience',
            element: (
              <AMPALSResearchPageLayout
                headerTitle="Resources"
                headerImageURL={PWLEResourcesHeaderSlat}
                sidebarTitle="Resources for ALS patients and people with lived experience"
              >
                <MarkdownSynapse
                  ownerId="syn64892175"
                  wikiId="631453"
                  loadingSkeletonRowCount={50}
                />
              </AMPALSResearchPageLayout>
            ),
          },
          {
            path: 'Requirements for Publication',
            element: (
              <AMPALSResearchPageLayout
                headerTitle="Requirements for Publication"
                headerImageURL={PublishingRequirementsSlat}
                sidebarTitle="Using data from the ALS Knowledge Portal in publications"
              >
                <MarkdownSynapse
                  ownerId="syn64892175"
                  wikiId="632170"
                  loadingSkeletonRowCount={50}
                />
              </AMPALSResearchPageLayout>
            ),
          },
          {
            path: 'Frequently Asked Questions',
            element: (
              <AMPALSResearchPageLayout
                headerTitle="Frequently Asked Questions"
                headerImageURL={PublishingRequirementsSlat}
              >
                <MarkdownSynapse
                  ownerId="syn64892175"
                  wikiId="632170"
                  loadingSkeletonRowCount={50}
                />
              </AMPALSResearchPageLayout>
            ),
          },
          {
            path: 'Contribute Data',
            element: (
              <AMPALSResearchPageLayout
                headerTitle="Contribute Data"
                headerImageURL={PublishingRequirementsSlat}
                sidebarTitle="How to contribute data to the ALS Knowledge Portal"
              >
                <MarkdownSynapse
                  ownerId="syn64892175"
                  wikiId="632170"
                  loadingSkeletonRowCount={50}
                />
              </AMPALSResearchPageLayout>
            ),
          },
        ],
      },
      {
        path: 'About',
        element: (
          <SectionLayout
            title={'About'}
            ContainerProps={{ className: 'AboutPage' }}
          >
            <MarkdownSynapse
              ownerId={'syn22130826'}
              loadingSkeletonRowCount={20}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Search',
        children: searchPageChildRoutes,
      },
    ],
  },
]

export default routes
