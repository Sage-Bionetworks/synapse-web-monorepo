import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { fn } from 'storybook/test'
import { EvaluationCard } from './EvaluationCard'

const meta = {
  title: 'Synapse/Challenge/EvaluationCard',
  component: EvaluationCard,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const evaluationArgs = {
  evaluation: {
    id: '9614690',
    etag: '6f8aa977-527e-4b2f-9d87-beab2db99503',
    name: 'Sample Evaluation Queue',
    description: 'This is a sample Evaluation Queue',
    ownerId: '3345868',
    createdOn: '2021-01-05T00:41:11.670Z',
    contentSource: 'syn23679309',
    submissionInstructionsMessage: 'Do a barrel roll',
    submissionReceiptMessage: 'We received your submission',
  },
  onEdit: fn(),
  onModifyAccess: fn(),
  onSubmit: fn(),
  onDeleteSuccess: fn(),
}

export const Card: Story = {
  args: evaluationArgs,
}

export const CardWithDeleteModal: Story = {
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        http.get(
          `${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id/permissions`,
          () => {
            return HttpResponse.json(
              {
                canChangePermissions: true,
                canDeleteSubmissions: true,
                canEditSubmissionStatuses: true,
                canParticipate: true,
                canPublicRead: true,
                canView: true,
                canViewPrivateSubmissionStatusAnnotations: true,
                ownerPrincipalId: MOCK_USER_ID,
                canEdit: true,
                canSubmit: true,
                canDelete: true,
              },
              { status: 200 },
            )
          },
        ),
        http.delete(
          `${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id`,
          () => new Response('', { status: 200 }),
        ),
      ],
    },
  },
  args: {
    ...evaluationArgs,
    evaluation: {
      ...evaluationArgs.evaluation,
      ownerId: MOCK_USER_ID.toString(),
    },
  },
}
