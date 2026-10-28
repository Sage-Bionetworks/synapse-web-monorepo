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
 * In-memory handlers for creating, reading, updating, and deleting curation tasks and their statuses.
 *
 * @param initialBundles tasks (and their statuses) that exist before the test starts
 * @returns handlers, plus the backing stores so a test can assert on the resulting state
 */
export function getCurationTaskHandlers(
  initialBundles: TaskBundle[] = [],
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) {
  const tasks = new Map<number, CurationTask>()
  const statuses = new Map<number, TaskStatus>()
  for (const { task, status } of initialBundles) {
    tasks.set(task!.taskId!, task!)
    if (status) statuses.set(task!.taskId!, status)
  }
  let nextTaskId = 1000

  const handlers = [
    http.post(`${backendOrigin}/repo/v1/curation/task`, async ({ request }) => {
      const body = (await request.json()) as CurationTask
      const created = { ...body, taskId: nextTaskId++, etag: 'mock-etag' }
      tasks.set(created.taskId, created)
      return HttpResponse.json(created, { status: 201 })
    }),
    http.get(`${backendOrigin}/repo/v1/curation/task/:taskId`, ({ params }) => {
      const task = tasks.get(Number(params.taskId))
      return task
        ? HttpResponse.json(task)
        : HttpResponse.json({ reason: 'Task not found' }, { status: 404 })
    }),
    http.put(
      `${backendOrigin}/repo/v1/curation/task/:taskId`,
      async ({ request, params }) => {
        const body = (await request.json()) as CurationTask
        tasks.set(Number(params.taskId), body)
        return HttpResponse.json(body)
      },
    ),
    http.delete(
      `${backendOrigin}/repo/v1/curation/task/:taskId`,
      ({ params }) => {
        tasks.delete(Number(params.taskId))
        statuses.delete(Number(params.taskId))
        return new HttpResponse(null, { status: 200 })
      },
    ),
    http.get(
      `${backendOrigin}/repo/v1/curation/task/:taskId/status`,
      ({ params }) => {
        const status = statuses.get(Number(params.taskId))
        return status
          ? HttpResponse.json(status)
          : HttpResponse.json({ reason: 'Status not found' }, { status: 404 })
      },
    ),
    http.put(
      `${backendOrigin}/repo/v1/curation/task/:taskId/status`,
      async ({ request, params }) => {
        const body = (await request.json()) as TaskStatus
        statuses.set(Number(params.taskId), body)
        return HttpResponse.json(body)
      },
    ),
  ]

  return { handlers, tasks, statuses }
}
