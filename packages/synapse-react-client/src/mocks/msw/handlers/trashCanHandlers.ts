import { http, HttpResponse } from 'msw'
import {
  TRASHCAN_PURGE,
  TRASHCAN_RESTORE,
  TRASHCAN_VIEW,
} from '../../../utils/APIConstants'
import { trashCanPages } from '../../mockTrashCan'
import mockFileEntityData from '../../entity/mockFileEntity'
import { SynapseApiResponse } from '../handlers'
import {
  PaginatedResults,
  TrashedEntity,
} from '@sage-bionetworks/synapse-types'

export function getTrashCanRestoreErrorHandler(backendOrigin: string) {
  return http.put<{ entityId: string }, never, SynapseApiResponse<''>>(
    `${backendOrigin}${TRASHCAN_RESTORE(':entityId')}`,
    ({ params }) => {
      if (params.entityId === mockFileEntityData.id) {
        return HttpResponse.json(
          { reason: 'Some error returned by the server' },
          { status: 400 },
        )
      } else {
        return HttpResponse.text('', { status: 200 })
      }
    },
  )
}

export default function getTrashCanHandlers(backendOrigin: string) {
  return [
    http.get<never, never, SynapseApiResponse<PaginatedResults<TrashedEntity>>>(
      `${backendOrigin}${TRASHCAN_VIEW}`,
      ({ request }) => {
        const url = new URL(request.url)
        const offset = url.searchParams.get('offset') ?? '0'
        const result = trashCanPages[parseInt(offset)]
        return HttpResponse.json(result, { status: 200 })
      },
    ),
    http.put<{ entityId: string }, never, SynapseApiResponse<''>>(
      `${backendOrigin}${TRASHCAN_RESTORE(':entityId')}`,
      () => {
        return HttpResponse.text('', { status: 200 })
      },
    ),
    http.put<{ entityId: string }, never, SynapseApiResponse<''>>(
      `${backendOrigin}${TRASHCAN_PURGE(':entityId')}`,
      () => {
        return HttpResponse.text('', { status: 200 })
      },
    ),
  ]
}
