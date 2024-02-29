import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import SynapseFormSubmissionGrid, {
  SynapseFormSubmissionGridProps,
} from './SynapseFormSubmissionsGrid'
import { SynapseContextConsumer } from '../../utils/context/SynapseContext'
import FullContextProvider from '../../utils/context/FullContextProvider'
import { ListRequest, StatusEnum } from '@sage-bionetworks/synapse-types'
import {
  formListDataInProgress,
  formListDataSubmitted,
} from '../../mocks/mock_drug_tool_data'
import { getHandlers } from '../../mocks/msw/handlers'

const meta = {
  title: 'Portals/SynapseFormSubmissionsGrid',
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  parameters: { stack: 'mock' },
  decorators: [
    (Story, args) => (
      <SynapseContextConsumer>
        {context => {
          const token = args.isAuthenticated
            ? context.accessToken ?? 'fake token'
            : undefined
          return (
            <FullContextProvider
              synapseContext={{
                ...context,
                accessToken: token,
              }}
            >
              <Story />
            </FullContextProvider>
          )
        }}
      </SynapseContextConsumer>
    ),
  ],
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
} satisfies Meta<SynapseFormSubmissionGridProps & { isAuthenticated?: boolean }>

export default meta

type Story = StoryObj<typeof meta>

function listFormDataHandlers() {
  return [
    http.post(
      `${MOCK_REPO_ORIGIN}/repo/v1/form/data/list`,
      async ({ request, params }) => {
        const listRequest = req.body as ListRequest
        const status = ctx.status(200)
        if (
          listRequest.filterByState?.includes(StatusEnum.WAITING_FOR_SUBMISSION)
        ) {
          return res(status, ctx.json(formListDataInProgress))
        }
        return res(status, ctx.json(formListDataSubmitted))
      },
    ),
  ]
}

export const NoSubmissions: Story = {
  parameters: {
    msw: {
      handlers: [
        getHandlers(MOCK_REPO_ORIGIN),
        http.post(
          `${MOCK_REPO_ORIGIN}/repo/v1/form/data/list`,
          async ({ request, params }) => {
            return res(ctx.status(200), ctx.json({ page: [] }))
          },
        ),
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
