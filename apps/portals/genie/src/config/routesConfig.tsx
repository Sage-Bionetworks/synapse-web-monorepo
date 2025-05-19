import App from '@sage-bionetworks/synapse-portal-framework/App'
import ComponentCollapse from '@sage-bionetworks/synapse-portal-framework/components/ComponentCollapse'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import SurveyToast from '@sage-bionetworks/synapse-portal-framework/components/SurveyToast'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import {
  CardContainerLogic,
  StandaloneQueryWrapper,
} from 'synapse-react-client'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import GenieHomePage from '../pages/GenieHomePage'
import routeControlWrapperProps from './explorePageRoutes'
import { dataReleasesSql } from './resources'
import { currentDataReleasesProps } from './synapseConfigs/dataReleases'
import { FullWidthAlert } from 'synapse-react-client'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <App>
        <FullWidthAlert
          sx={{ m: 0 }}
          isGlobal={false}
          variant={'info'}
          show={true}
          title={''}
          description={
            'Access to the AACR Project GENIE Registry has been restored. To regain access, users are required to submit a new data access request in compliance with new U.S. regulations, agree to the updated terms of use, and provide additional required information. Thank you for your patience and understanding.'
          }
        />
        <SurveyToast
          localStorageKey={
            'org.sagebionetworks.security.cookies.portal.geniesurvey.dismissed'
          }
          title={
            'What Metrics Matter to You? Help Us Improve the GENIE Portal!'
          }
          description={
            'Take our quick survey and share your feedback to make the portal even better. Your input will directly impact the data and insights we provide.'
          }
          surveyURL={
            'https://docs.google.com/forms/d/e/1FAIpQLSe6V_b-n8pVGjZEvjv4tBklFwRPzeOMvjGzOzURWLFyvOq4fw/viewform'
          }
        />
      </App>
    ),
    children: [
      ...sharedRoutes,
      {
        index: true,
        element: <GenieHomePage />,
      },
      {
        path: 'Explore',
        element: <ExploreWrapper explorePaths={routeControlWrapperProps} />,
        children: routeControlWrapperProps,
      },
      {
        path: 'Data Releases',
        element: (
          <>
            <SectionLayout title={'Current Data Releases'}>
              <CardContainerLogic {...currentDataReleasesProps} />
            </SectionLayout>
            <SectionLayout title={'Previous Data Release'}>
              <Markdown
                markdown={
                  'The **latest** version of the dataset is readily acccessible for free download, but access to **previous** versions must be requested.'
                }
              />
              <ComponentCollapse text={'View All Data Releases'}>
                <StandaloneQueryWrapper
                  sql={dataReleasesSql}
                  visibleColumnCount={7}
                />
              </ComponentCollapse>
            </SectionLayout>
          </>
        ),
      },
      {
        path: 'Access',
        element: (
          <SectionLayout
            title={'Access'}
            ContainerProps={{ className: 'DataAccessPage' }}
          >
            <Markdown
              ownerId="syn53013218"
              wikiId="626697"
              loadingSkeletonRowCount={8}
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Help',
        element: (
          <SectionLayout
            title={'Help'}
            ContainerProps={{ className: 'HelpPage' }}
          >
            <Markdown
              ownerId="syn53013218"
              wikiId="626556"
              loadingSkeletonRowCount={8}
            />
          </SectionLayout>
        ),
      },
    ],
  },
]

export default routes
