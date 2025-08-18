import { ListUserWebhooksResponse } from '@sage-bionetworks/synapse-client/generated/models/ListUserWebhooksResponse'
import { Webhook } from '@sage-bionetworks/synapse-client/generated/models/Webhook'
import { WebhookVerificationStatus } from '@sage-bionetworks/synapse-client/generated/models/WebhookVerificationStatus'
import { http, HttpResponse } from 'msw'
import { SynapseApiResponse } from '../handlers'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

export const webhookService = new BasicMockedCrudService<Webhook, 'id'>({
  initialData: [],
  idField: 'id',
  autoGenerateId: true,
})

export function getWebhookHandlers(backendOrigin: string) {
  return [
    http.get(`${backendOrigin}/repo/v1/webhook/:webhookId`, ({ params }) => {
      const webhookId = params.webhookId as string
      const webhook = webhookService.getOneById(webhookId)
      if (!webhook) {
        return HttpResponse.json(
          { reason: `Webhook with ID ${webhookId} not found` },
          { status: 404 },
        )
      }
      return HttpResponse.json(webhook, { status: 200 })
    }),
    http.post(`${backendOrigin}/repo/v1/webhook/list`, () => {
      const resp: SynapseApiResponse<ListUserWebhooksResponse> = {
        page: webhookService.getAll(),
      }

      return HttpResponse.json(resp, { status: 200 })
    }),
    http.post<never, Webhook>(
      `${backendOrigin}/repo/v1/webhook`,
      async ({ request }) => {
        const requestBody: Webhook = await request.json()
        const newWebhook = webhookService.create({
          ...requestBody,
          verificationStatus: WebhookVerificationStatus.CODE_SENT,
        })
        return HttpResponse.json(newWebhook, { status: 201 })
      },
    ),
    http.put<{ webhookId: string }, Webhook>(
      `${backendOrigin}/repo/v1/webhook/:webhookId`,
      async ({ params, request }) => {
        const webhookId = params.webhookId
        const requestBody: Webhook = await request.json()

        const current = webhookService.getOneById(webhookId)

        if (!current) {
          return HttpResponse.json(
            { reason: `Webhook with ID ${webhookId} not found` },
            { status: 404 },
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

        return HttpResponse.json(updatedWebhook, { status: 201 })
      },
    ),
    http.post<{ webhookId: string }>(
      `${backendOrigin}/repo/v1/webhook/:webhookId/verify`,
      ({ params }) => {
        const webhookId = params.webhookId

        const webhook = webhookService.getOneById(webhookId)
        if (!webhook) {
          return HttpResponse.json(
            { reason: `Webhook with ID ${webhookId} not found` },
            { status: 404 },
          )
        }

        const newWebhook = webhookService.update(webhookId, {
          ...webhook,
          verificationStatus: WebhookVerificationStatus.VERIFIED,
        })
        return HttpResponse.json(newWebhook, { status: 201 })
      },
    ),
    http.put(
      `${backendOrigin}/repo/v1/webhook/:webhookId/verificationCode`,
      ({ params }) => {
        const webhookId = params.webhookId as string

        const webhook = webhookService.getOneById(webhookId)
        if (!webhook) {
          return HttpResponse.json(
            { reason: `Webhook with ID ${webhookId} not found` },
            { status: 404 },
          )
        }

        return HttpResponse.json(webhook, { status: 201 })
      },
    ),
    http.delete(`${backendOrigin}/repo/v1/webhook/:webhookId`, ({ params }) => {
      const webhookId = params.webhookId as string
      webhookService.delete(webhookId)
      return new Response('', { status: 200 })
    }),
  ]
}
