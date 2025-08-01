import App from '@sage-bionetworks/synapse-portal-framework/App'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import { FullWidthAlert } from 'synapse-react-client'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'

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
          title={"You're Using an Alpha Version!"}
          description={
            'This is an early version of the portal. Things might break, and your feedback helps us build a better experience. Try it out and let us know what you think!'
          }
          secondaryButtonConfig={{
            text: 'Give Feedback',
            href: 'https://github.com/bridge2ai/b2ai-standards-registry/issues/new?template=feedback.yml',
          }}
        />
      </App>
    ),
    children: [
      ...sharedRoutes,
      {
        index: true,
        lazy: () =>
          import('../pages/HomePage').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore',
        lazy: () => import('../pages/data').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore/Standard/DetailsPage',
        lazy: () =>
          import('../pages/StandardsDetailsPage').then(
            convertModuleToRouteObject,
          ),
      },
      /* part of PR #1865, not ready yet
    {
      path: 'DataSetExplore',
      element: (
        <Box
          sx={{
            '.QueryWrapperPlotNav > *': {
              p: '0px 20px',
            },
            '.QueryWrapperPlotNav > .TopLevelControls': {
              mt: '0',
            },
          }}
        >
          <QueryWrapperPlotNav {...dataSetsQueryWrapperPlotNavProps} />
        </Box>
      ),
    },
    */
      {
        path: 'About',
        lazy: () => import('../pages/About').then(convertModuleToRouteObject),
      },
    ],
  },
]

export default routes
