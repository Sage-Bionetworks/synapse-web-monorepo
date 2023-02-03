import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  DATA_ACCESS_SUBMISSION_BY_ID,
} from '../src/lib/utils/APIConstants'
import { mockSubmissions } from '../mocks/dataaccess/MockSubmission'
import { mockManagedACTAccessRequirement } from '../mocks/mockAccessRequirements'
import { MOCK_REPO_ORIGIN } from '../src/lib/utils/functions/getEndpoint'
import { getHandlersForTableQuery } from '../mocks/msw/handlers/tableQueryHandlers'
import mockRejectionReasonsTableQueryResultBundle from '../mocks/query/mockRejectionReasonsTableQueryResultBundle'
import SubmissionPage from '../src/lib/containers/dataaccess/SubmissionPage'
import { SynapseErrorBoundary } from '../src/lib/containers/error/ErrorBanner'

const meta = {
  title: 'Governance/SubmissionPage',
  component: SubmissionPage,
  render: args => (
    <>
      <p>
        First, use the StackChanger component to switch to the Mock Data stack
      </p>
      <SynapseErrorBoundary>
        <SubmissionPage {...args} />
      </SynapseErrorBoundary>
    </>
  ),
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  parameters: {
    msw: {
      handlers: [
        // Return submission based on ID
        rest.get(
          `${MOCK_REPO_ORIGIN}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,

          async (req, res, ctx) => {
            const submission = mockSubmissions.find(
              submission => req.params.id === submission.id,
            )
            return res(ctx.status(200), ctx.json(submission))
          },
        ),

        // Return a mocked access requirement
        rest.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json(mockManagedACTAccessRequirement),
            )
          },
        ),
        rest.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}`,
          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                wikiPageId: 123,
                ownerObjectId: mockManagedACTAccessRequirement.id,
                ownerObjectType: 'ACCESS_REQUIREMENT',
              }),
            )
          },
        ),
        rest.get(
          `${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl`,
          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                id: req.id,
                creationDate: '2022-05-20T14:32:31.665Z',
                etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
                resourceAccess: [
                  {
                    principalId: 3350396,
                    accessType: ['REVIEW_SUBMISSIONS'],
                  },
                ],
              }),
            )
          },
        ),
        ...getHandlersForTableQuery(mockRejectionReasonsTableQueryResultBundle),
        rest.put(
          `${MOCK_REPO_ORIGIN}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,

          async (req, res, ctx) => {
            return res(ctx.status(201), ctx.json(await req.json()))
          },
        ),
      ],
    },
  },
  args: {
    submissionId: 1,
  },
}
