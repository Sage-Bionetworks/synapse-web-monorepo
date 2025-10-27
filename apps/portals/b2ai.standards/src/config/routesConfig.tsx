import StandardsDetailsPage from '@/pages/StandardsDetailsPage'
import OrganizationDetailsPage from '@/pages/OrganizationDetailsPage'
import { Box } from '@mui/material'
import App from '@sage-bionetworks/synapse-portal-framework/App'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import { QueryWrapperPlotNav } from 'synapse-react-client'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import HomePage from '../pages/HomePage'
import {
  standardsQueryWrapperPlotNavProps,
  /* part of PR #1865, not ready yet
  dataSetsQueryWrapperPlotNavProps, */
} from './synapseConfigs/standards'
import { FullWidthAlert } from 'synapse-react-client'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <App>
        <FullWidthAlert
          sx={{ m: 0 }}
          isGlobal={false}
          variant={'success'}
          show={true}
          title={"You're Using a Beta Version!"}
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
        element: <HomePage />,
      },
      {
        path: 'Explore',
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
            <QueryWrapperPlotNav {...standardsQueryWrapperPlotNavProps} />
          </Box>
        ),
      },
      {
        path: 'Explore/Standard/DetailsPage',
        element: <StandardsDetailsPage />,
      },
      {
        path: 'Explore/Organization/OrganizationDetailsPage',
        element: <OrganizationDetailsPage />,
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
    ],
  },
]

export default routes
