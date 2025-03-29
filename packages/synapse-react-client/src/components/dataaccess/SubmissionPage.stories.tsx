import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { mockSubmissions } from '@/mocks/dataaccess/MockSubmission'
import { getHandlersForTableQuery } from '@/mocks/msw/handlers/tableQueryHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import mockRejectionReasonsTableQueryResultBundle from '@/mocks/query/mockRejectionReasonsTableQueryResultBundle'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  DATA_ACCESS_SUBMISSION_BY_ID,
} from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { REJECT_SUBMISSION_CANNED_RESPONSES_TABLE } from '@/utils/SynapseConstants'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import SubmissionPage from './SubmissionPage'

const meta = {
  title: 'Governance/SubmissionPage',
  component: SubmissionPage,
  parameters: { stack: 'mock' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'SubmissionPage',
  loaders: [
    () =>
      registerTableQueryResult(
        { sql: `SELECT * FROM ${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}` },
        mockRejectionReasonsTableQueryResultBundle,
      ),
  ],
  parameters: {
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
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
        ...getHandlersForTableQuery(MOCK_REPO_ORIGIN),
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
