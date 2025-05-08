import DatasetDetailsPage from '@/pages/DatasetDetailsPage'
import App from '@sage-bionetworks/synapse-portal-framework/App'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import { MarkdownSynapse } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import HomePage from '../pages/HomePage'
import explorePageRoutes from './explorePageRoutes'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'
import { searchPageChildRoutes } from '@/pages/AMPALSSearchPage'
import { Typography, Link } from '@mui/material'
//import header images for Resources pages
import researcherResourcesHeaderSlat from '../assets/researcher_resources_slat.png'
import contributorResourcesHeaderSlat from '../assets/data_contributor_resources_slat.png'
import pwleResourcesHeaderSlat from '../assets/pwles_resources_slat.png'
import publishingRequirementsSlat from '../assets/publishing_requirements.png'
import contributeDataSlat from '../assets/contribute_data_slat.png'

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
                headerImageURL={researcherResourcesHeaderSlat}
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
                headerImageURL={contributorResourcesHeaderSlat}
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
            path: 'TEST PATH 4',
            element: (
              <AMPALSResearchPageLayout
                headerTitle="Resources"
                headerImageURL={pwleResourcesHeaderSlat}
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
                headerImageURL={publishingRequirementsSlat}
                sidebarTitle="Using data from the ALS Knowledge Portal in publications"
              >
                <MarkdownSynapse
                  ownerId="syn64892175"
                  wikiId="632170"
                  loadingSkeletonRowCount={50}
                />
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdZCSXj3DHZxshCNk2bgSHkCGFHL5qsfoaid51plQb5QV4nBg/viewform?embedded=true"
                  width="640"
                  height="414"
                >
                  Loading…
                </iframe>
              </AMPALSResearchPageLayout>
            ),
          },
          {
            path: 'Frequently Asked Questions',
            element: (
              <AMPALSResearchPageLayout headerTitle="Frequently Asked Questions">
                <MarkdownSynapse
                  ownerId="syn64892175"
                  wikiId="632193"
                  loadingSkeletonRowCount={50}
                />
              </AMPALSResearchPageLayout>
            ),
          },
          {
            path: 'Publishing Requirements',
            element: (
              <MarkdownSynapse
                ownerId="syn64892175"
                wikiId="632170"
                loadingSkeletonRowCount={20}
              />
            ),
          },
        ],
      },
      {
        path: 'Contribute Data',
        element: (
          <AMPALSResearchPageLayout
            headerTitle="Contribute Data"
            headerImageURL={contributeDataSlat}
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
