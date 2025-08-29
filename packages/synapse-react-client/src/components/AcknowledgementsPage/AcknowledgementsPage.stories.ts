import { getFileHandlers } from '@/mocks/msw/handlers/fileHandlers'
import { getHandlersForTableQuery } from '@/mocks/msw/handlers/tableQueryHandlers'
import { registerSynapseHomepageMockQueries } from '@/mocks/query/mockHomepageQueryResultData'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react'
import AcknowledgementPage from './AcknowledgementsPage'

const meta = {
  title: 'Portals/AcknowledgementsPage',
  component: AcknowledgementPage,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    portalName: 'ELITE Portal',
    createDoiHelpUrl:
      'https://help.eliteportal.org/help/how-to-get-a-doi-for-your-publication',
  },
  loaders: [
    () => {
      registerSynapseHomepageMockQueries()
    },
  ],
  parameters: {
    stack: 'production',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/hr1mMK5KbyYaeQOvdtYP97/Acknowledgement-Page',
    },
    msw: {
      handlers: [
        ...getFileHandlers(MOCK_REPO_ORIGIN),
        ...getHandlersForTableQuery(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
