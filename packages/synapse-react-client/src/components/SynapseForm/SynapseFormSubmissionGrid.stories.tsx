import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import SynapseFormSubmissionGrid, {
  SynapseFormSubmissionGridProps,
} from './SynapseFormSubmissionGrid'
import { SynapseContextConsumer } from '../../utils'
import { ListRequest, StatusEnum } from '@sage-bionetworks/synapse-types'
import {
  formListDataInProgress,
  formListDataSubmitted,
} from '../../mocks/mock_drug_tool_data'
import { getHandlers } from '../../mocks/msw/handlers'

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
