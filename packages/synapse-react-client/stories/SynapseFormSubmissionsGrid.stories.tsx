import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import { MOCK_REPO_ORIGIN } from '../src/utils/functions/getEndpoint'
import SynapseFormSubmissionGrid from '../src/components/SynapseForm/SynapseFormSubmissionsGrid'
import { SynapseContextConsumer } from '../src/utils/context/SynapseContext'
import FullContextProvider from '../src/utils/context/FullContextProvider'
import { ListRequest, StatusEnum } from '@sage-bionetworks/synapse-types'
import {
  formListDataInProgress,
  formListDataSubmitted,
} from '../mocks/mock_drug_tool_data'
import { getHandlers } from '../mocks/msw/handlers'

const meta: Meta = {
  title: 'Portals/SynapseFormSubmissionsGrid',
  component: SynapseFormSubmissionGrid,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  parameters: { stack: 'mock' },
  render: args => {
    const { isAuthenticated, ...rest } = args
    return (
      <SynapseContextConsumer>
        {context => {
          const token = isAuthenticated
            ? context.accessToken ?? 'fake token'
            : undefined
          return (
            <FullContextProvider
              synapseContext={{
                ...context,
                accessToken: token,
              }}
            >
              <SynapseFormSubmissionGrid token={token} {...rest} />
            </FullContextProvider>
          )
        }}
      </SynapseContextConsumer>
    )
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function listFormDataHandlers() {
  return [
    rest.post(
      `${MOCK_REPO_ORIGIN}/repo/v1/form/data/list`,
      async (req, res, ctx) => {
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
        rest.post(
          `${MOCK_REPO_ORIGIN}/repo/v1/form/data/list`,
          async (req, res, ctx) => {
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
