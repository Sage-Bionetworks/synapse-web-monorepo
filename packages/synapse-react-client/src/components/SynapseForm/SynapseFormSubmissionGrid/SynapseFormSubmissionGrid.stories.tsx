import {
  formListDataInProgress,
  formListDataSubmitted,
} from '@/mocks/mock_drug_tool_data'
import { getHandlers } from '@/mocks/msw/handlers'
import { SynapseContextConsumer } from '@/utils/index'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { ListRequest, StatusEnum } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import SynapseFormSubmissionGrid, {
  SynapseFormSubmissionGridProps,
} from './SynapseFormSubmissionGrid'

const meta: Meta<
  SynapseFormSubmissionGridProps & { isAuthenticated?: boolean }
> = {
  title: 'Portals/SynapseFormSubmissionsGrid',
  parameters: { stack: 'mock' },
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
    },
  },
  args: {
    isAuthenticated: true,
  },
  render: args => {
    const { isAuthenticated, ...rest } = args
    return (
      <SynapseContextConsumer>
        {context => (
          <SynapseFormSubmissionGrid token={context.accessToken} {...rest} />
        )}
      </SynapseContextConsumer>
    )
  },
}

export default meta

type Story = StoryObj<typeof meta>

function listFormDataHandlers() {
  return [
    http.post(
      `${MOCK_REPO_ORIGIN}/repo/v1/form/data/list`,
      async ({ request }) => {
        const listRequest = (await request.json()) as ListRequest

        const status = 200
        if (
          listRequest.filterByState?.includes(StatusEnum.WAITING_FOR_SUBMISSION)
        ) {
          return HttpResponse.json(formListDataInProgress, { status })
        }
        return HttpResponse.json(formListDataSubmitted, { status })
      },
    ),
  ]
}

export const NoSubmissions: Story = {
  parameters: {
    msw: {
      handlers: [
        getHandlers(MOCK_REPO_ORIGIN),
        http.post(`${MOCK_REPO_ORIGIN}/repo/v1/form/data/list`, () => {
          return HttpResponse.json({ page: [] }, { status: 200 })
        }),
      ],
    },
  },
  args: {
    pathpart: '/Apply/FormSubmission',
    formGroupId: '9',
    itemNoun: 'Compound',
    formClass: 'drug-upload-tool',
  },
}

export const HasSubmissions: Story = {
  parameters: {
    msw: {
      handlers: [...getHandlers(MOCK_REPO_ORIGIN), ...listFormDataHandlers()],
    },
  },
  args: {
    ...NoSubmissions.args,
  },
}
