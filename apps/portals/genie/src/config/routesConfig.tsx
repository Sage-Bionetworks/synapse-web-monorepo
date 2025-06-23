import Typography from '@mui/material/Typography'
import App from '@sage-bionetworks/synapse-portal-framework/App'
import SurveyToast from '@sage-bionetworks/synapse-portal-framework/components/SurveyToast'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import { RouteObject } from 'react-router'
import { FullWidthAlert } from 'synapse-react-client'
import { HasAccessV2 } from 'synapse-react-client/components/HasAccess/HasAccessV2'

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
            <>
              <Typography>
                Access to the AACR Project GENIE Registry has been restored. To
                regain access, users must submit a new data access request in
                compliance with updated U.S. regulations, agree to the revised
                terms of use, and provide additional required information. Thank
                you for your patience and understanding.
                <HasAccessV2 entityId="syn7222066" />
              </Typography>
            </>
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
        lazy: () =>
          import('@/pages/GenieHomePage').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore',
        lazy: () =>
          import('@/pages/explore/layout').then(convertModuleToRouteObject),
        children: [
          {
            path: 'GENIE',
            lazy: () =>
              import('@/pages/explore/ExploreGenie').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'GENIE-BPC',
            lazy: () =>
              import('@/pages/explore/ExploreGenieBPC').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Publications',
            lazy: () =>
              import('@/pages/explore/ExplorePublications').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Contributors',
            lazy: () =>
              import('@/pages/explore/ExploreContributors').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'External Resources',
            lazy: () =>
              import('@/pages/explore/ExploreExternalResources').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Data Releases',
        lazy: () =>
          import('@/pages/DataReleases').then(convertModuleToRouteObject),
      },
      {
        path: 'Access',
        lazy: () =>
          import('@/pages/DataAccess').then(convertModuleToRouteObject),
      },
      {
        path: 'Help',
        lazy: () => import('@/pages/Help').then(convertModuleToRouteObject),
      },
    ],
  },
]

export default routes
