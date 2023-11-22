import { Meta, StoryObj } from '@storybook/react'
import { EvaluationEditorPage } from './EvaluationEditorPage'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { rest } from 'msw'
import { getUserProfileHandlers } from '../../mocks/msw/handlers/userProfileHandlers'
import { MOCK_USER_ID } from '../../mocks/user/mock_user_profile'
import dayjs from 'dayjs'

const meta = {
  title: 'Synapse/Challenge/EvaluationEditorPage',
  component: EvaluationEditorPage,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Entity: Story = {
  args: {
    entityId: 'syn5585645',
  },
}

export const Evaluation: Story = {
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        rest.get(
          `${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id`,
          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                id: '9614712',
                etag: 'a2b871cb-faa4-471a-8c23-b917c77fecb2',
                name: 'a',
                description: 'b',
                ownerId: MOCK_USER_ID.toString(),
                createdOn: '2021-03-02T22:16:14.552Z',
                contentSource: 'syn5585645',
                submissionInstructionsMessage: 'c',
                submissionReceiptMessage: 'c',
              }),
            )
          },
        ),
        rest.post(
          `${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id/round/list`,
          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                page: [
                  // Ended
                  {
                    id: '259',
                    etag: '6f54c353-6c04-46b1-956d-096db1008bce',
                    evaluationId: '9614712',
                    roundStart: '2022-11-27T08:00:00.000Z',
                    roundEnd: '2022-11-30T08:00:00.000Z',
                  },
                  // Ongoing
                  {
                    id: '260',
                    etag: '6f54c353-6c04-46b1-956d-096db1008bce',
                    evaluationId: '9614712',
                    roundStart: dayjs().subtract(1, 'day').toISOString(),
                    roundEnd: dayjs().add(2, 'day').toISOString(),
                  },
                  // Future
                  {
                    id: '261',
                    etag: '6f54c353-6c04-46b1-956d-096db1008bce',
                    evaluationId: '9614712',
                    roundStart: dayjs().add(1, 'week').toISOString(),
                    roundEnd: dayjs().add(2, 'week').toISOString(),
                  },
                ],
              }),
            )
          },
        ),
      ],
    },
  },
  args: {
    evaluationId: '9614712',
  },
}
