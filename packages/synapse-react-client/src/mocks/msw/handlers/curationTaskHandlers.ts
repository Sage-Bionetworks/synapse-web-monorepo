import { createMockTaskBundle } from '@/mocks/curation/mockCurationTask'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  CurationTask,
  TaskBundle,
  TaskStatus,
} from '@sage-bionetworks/synapse-client'
import { http, HttpResponse } from 'msw'

/**
 * Handlers for the curation task endpoints. Reads return `bundle`; writes succeed and echo the
 * request body. Pass spies to assert on what was sent.
 */
export function getCurationTaskHandlers({
  bundle = createMockTaskBundle(),
  onCreate,
  onUpdate,
  onUpdateStatus,
  onDelete,
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
}: {
  bundle?: TaskBundle
  onCreate?: (task: CurationTask) => void
  onUpdate?: (task: CurationTask) => void
  onUpdateStatus?: (status: TaskStatus) => void
  onDelete?: (taskId: number) => void
  backendOrigin?: string
} = {}) {
  const taskUrl = `${backendOrigin}/repo/v1/curation/task/:taskId`
  return [
    http.get(taskUrl, () => HttpResponse.json(bundle.task)),
    http.get(`${taskUrl}/status`, () => HttpResponse.json(bundle.status)),
    http.post(`${backendOrigin}/repo/v1/curation/task`, async ({ request }) => {
      const task = (await request.json()) as CurationTask
      onCreate?.(task)
      return HttpResponse.json(
        { ...task, taskId: bundle.task!.taskId },
        { status: 201 },
      )
    }),
    http.put(taskUrl, async ({ request }) => {
      const task = (await request.json()) as CurationTask
      onUpdate?.(task)
      return HttpResponse.json(task)
    }),
    http.put(`${taskUrl}/status`, async ({ request }) => {
      const status = (await request.json()) as TaskStatus
      onUpdateStatus?.(status)
      return HttpResponse.json(status)
    }),
    http.delete(taskUrl, ({ params }) => {
      onDelete?.(Number(params.taskId))
      return new HttpResponse(null, { status: 200 })
    }),
  ]
}
