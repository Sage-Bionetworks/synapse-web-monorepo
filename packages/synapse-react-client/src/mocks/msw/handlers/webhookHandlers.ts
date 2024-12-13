import { ListUserWebhooksResponse } from '@sage-bionetworks/synapse-client/generated/models/ListUserWebhooksResponse'
import { Webhook } from '@sage-bionetworks/synapse-client/generated/models/Webhook'
import { WebhookVerificationStatus } from '@sage-bionetworks/synapse-client/generated/models/WebhookVerificationStatus'
import { rest } from 'msw'

import { SynapseApiResponse } from '../SynapseApiResponse'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

export const webhookService = new BasicMockedCrudService<Webhook, 'id'>({
  initialData: [],
  idField: 'id',
  autoGenerateId: true,
})

export function getWebhookHandlers(backendOrigin: string) {
  return [
    rest.get(
      `${backendOrigin}/repo/v1/webhook/:webhookId`,
      async (req, res, ctx) => {
        const webhookId = req.params.webhookId as string
        const webhook = webhookService.getOneById(webhookId)
        if (!webhook) {
          return res(
            ctx.status(404),
            ctx.json({ reason: `Webhook with ID ${webhookId} not found` }),
          )
        }
        return res(ctx.status(200), ctx.json(webhook))
      },
    ),
    rest.post(
      `${backendOrigin}/repo/v1/webhook/list`,
      async (req, res, ctx) => {
        const resp: SynapseApiResponse<ListUserWebhooksResponse> = {
          page: webhookService.getAll(),
        }

        return res(ctx.status(200), ctx.json(resp))
      },
    ),
    rest.post(`${backendOrigin}/repo/v1/webhook`, async (req, res, ctx) => {
      const requestBody: Webhook = await req.json()
      const newWebhook = webhookService.create({
        ...requestBody,
        verificationStatus: WebhookVerificationStatus.CODE_SENT,
      })
      return res(ctx.status(201), ctx.json(newWebhook))
    }),
    rest.put(
      `${backendOrigin}/repo/v1/webhook/:webhookId`,
      async (req, res, ctx) => {
        const webhookId = req.params.webhookId as string
        const requestBody: Webhook = await req.json()

        const current = webhookService.getOneById(webhookId)

        if (!current) {
          return res(
            ctx.status(404),
            ctx.json({ reason: `Webhook with ID ${webhookId} not found` }),
          )
        }

        let verificationStatus = current?.verificationStatus
        if (current && current.invokeEndpoint !== requestBody.invokeEndpoint) {
          verificationStatus = WebhookVerificationStatus.CODE_SENT
        }

        const updatedWebhook = webhookService.update(webhookId, {
          ...requestBody,
          verificationStatus: verificationStatus,
        })

        return res(ctx.status(201), ctx.json(updatedWebhook))
      },
    ),
    rest.post(
      `${backendOrigin}/repo/v1/webhook/:webhookId/verify`,
      async (req, res, ctx) => {
        const webhookId = req.params.webhookId as string

        const webhook = webhookService.getOneById(webhookId)
        if (!webhook) {
          return res(
            ctx.status(404),
            ctx.json({ reason: `Webhook with ID ${webhookId} not found` }),
          )
        }

        const newWebhook = webhookService.update(webhookId, {
          ...webhook,
          verificationStatus: WebhookVerificationStatus.VERIFIED,
        })
        return res(ctx.status(201), ctx.json(newWebhook))
      },
    ),
    rest.put(
      `${backendOrigin}/repo/v1/webhook/:webhookId/verificationCode`,
      async (req, res, ctx) => {
        const webhookId = req.params.webhookId as string

        const webhook = webhookService.getOneById(webhookId)
        if (!webhook) {
          return res(
            ctx.status(404),
            ctx.json({ reason: `Webhook with ID ${webhookId} not found` }),
          )
        }

        return res(ctx.status(201), ctx.json(webhook))
      },
    ),
    rest.delete(
      `${backendOrigin}/repo/v1/webhook/:webhookId`,
      async (req, res, ctx) => {
        const webhookId = req.params.webhookId as string
        webhookService.delete(webhookId)
        return res(ctx.status(200), ctx.body(''))
      },
    ),
  ]
}
