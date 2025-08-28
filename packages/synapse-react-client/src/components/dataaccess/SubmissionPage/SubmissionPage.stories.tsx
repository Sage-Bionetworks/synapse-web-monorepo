import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { mockSubmissions } from '@/mocks/dataaccess/MockSubmission'
import { getHandlersForTableQuery } from '@/mocks/msw/handlers/tableQueryHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import mockRejectionReasonsTableQueryResultBundle from '@/mocks/query/mockRejectionReasonsTableQueryResultBundle'
import { MOCK_USER_ID_2 } from '@/mocks/user/mock_user_profile'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  DATA_ACCESS_SUBMISSION_BY_ID,
} from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { REJECT_SUBMISSION_CANNED_RESPONSES_TABLE } from '@/utils/SynapseConstants'
import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'
import SubmissionPage from './SubmissionPage'
import { ErrorResponse } from '@sage-bionetworks/synapse-types'

const meta = {
  title: 'Governance/SubmissionPage',
  component: SubmissionPage,
  parameters: { stack: 'mock', withRouter: true },
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
    },
  },
  args: {
    isAuthenticated: true,
  },
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
        http.get(
          `${MOCK_REPO_ORIGIN}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,

          ({ params }) => {
            const submission = mockSubmissions.find(
              submission => params.id === submission.id,
            )
            return HttpResponse.json(submission, { status: 200 })
          },
        ),

        // Return a mocked access requirement
        http.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

          () => {
            return HttpResponse.json(mockManagedACTAccessRequirement, {
              status: 200,
            })
          },
        ),
        http.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}`,
          () => {
            return HttpResponse.json(
              {
                wikiPageId: 123,
                ownerObjectId: mockManagedACTAccessRequirement.id,
                ownerObjectType: 'ACCESS_REQUIREMENT',
              },
              { status: 200 },
            )
          },
        ),
        http.get<{ id: string }>(
          `${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl`,
          ({ params }) => {
            return HttpResponse.json(
              {
                id: params.id,
                creationDate: '2022-05-20T14:32:31.665Z',
                etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
                resourceAccess: [
                  {
                    principalId: MOCK_USER_ID_2,
                    accessType: ['REVIEW_SUBMISSIONS'],
                  },
                ],
              },
              { status: 200 },
            )
          },
        ),
        ...getHandlersForTableQuery(MOCK_REPO_ORIGIN),
        http.put(
          `${MOCK_REPO_ORIGIN}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,

          async ({ request }) => {
            return HttpResponse.json(await request.json(), { status: 201 })
          },
        ),
      ],
    },
  },
  args: {
    isReviewer: true,
    submissionId: 1,
  },
}

export const DemoError: Story = {
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [
        http.get(
          `${MOCK_REPO_ORIGIN}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,
          () => {
            const errorResponse: ErrorResponse = {
              reason:
                'The user must be validated in order to review data access submissions.',
              concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
            }
            return HttpResponse.json(errorResponse, { status: 403 })
          },
        ),
      ],
    },
  },
  args: {
    isReviewer: true,
    submissionId: 9999,
  },
}
