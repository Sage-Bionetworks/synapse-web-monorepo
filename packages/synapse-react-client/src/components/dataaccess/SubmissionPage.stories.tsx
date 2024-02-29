import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  DATA_ACCESS_SUBMISSION_BY_ID,
} from '../../utils/APIConstants'
import { mockSubmissions } from '../../mocks/dataaccess/MockSubmission'
import { mockManagedACTAccessRequirement } from '../../mocks/mockAccessRequirements'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import mockRejectionReasonsTableQueryResultBundle from '../../mocks/query/mockRejectionReasonsTableQueryResultBundle'
import SubmissionPage from './SubmissionPage'
import { getWikiHandlers } from '../../mocks/msw/handlers/wikiHandlers'
import { getUserProfileHandlers } from '../../mocks/msw/handlers/userProfileHandlers'

const meta = {
  title: 'Governance/SubmissionPage',
  component: SubmissionPage,
  parameters: { stack: 'mock' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'SubmissionPage',
  parameters: {
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        // Return submission based on ID
        http.get(
          `${MOCK_REPO_ORIGIN}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,

          async ({ request, params }) => {
            const submission = mockSubmissions.find(
              submission => params.id === submission.id,
            )
            return HttpResponse.json(submission, { status: 200 })
          },
        ),

        // Return a mocked access requirement
        http.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

          async ({ request, params }) => {
            return res(
              ctx.status(200),
              ctx.json(mockManagedACTAccessRequirement),
            )
          },
        ),
        http.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}`,
          async ({ request, params }) => {
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
        http.get(
          `${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl`,
          async ({ request, params }) => {
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
        http.put(
          `${MOCK_REPO_ORIGIN}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,

          async ({ request, params }) => {
            return res(ctx.status(201), ctx.json(await request.json()))
          },
        ),
      ],
    },
  },
  args: {
    submissionId: 1,
  },
}
