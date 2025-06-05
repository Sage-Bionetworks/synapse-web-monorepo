import { rest } from 'msw'
import { CreateGridRequest } from '@sage-bionetworks/synapse-types'

// Generate unique session IDs for grid sessions
const generateSessionId = () =>
  `grid-session-${Math.floor(Math.random() * 100000)}`

interface GridJob {
  status: string
  startTime: number
  sessionId: string
}

// In-memory storage to track async jobs
const pendingJobs = new Map<string, GridJob>()

export function getGridHandlers(backendOrigin: string) {
  return [
    // Handler for starting a grid session
    rest.post(
      `${backendOrigin}/repo/v1/grid/session/async/start`,
      async (req, res, ctx) => {
        // Generate a unique job token
        const jobToken = `job-${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 9)}`
        const request: CreateGridRequest = await req.json()

        // Store job details for later reference
        pendingJobs.set(jobToken, {
          status: 'PROCESSING',
          startTime: Date.now(),
          sessionId: generateSessionId(),
        })

        return res(ctx.status(201), ctx.json(request))
      },
    ),

    // Handler for retrieving async job results
    rest.get(
      `${backendOrigin}/repo/v1/grid/session/async/get/:token`,
      async (req, res, ctx) => {
        const { token } = req.params
        const tokenStr = typeof token === 'string' ? token : token[0]

        // Retrieve job data
        const jobData = pendingJobs.get(tokenStr)

        if (!jobData) {
          return res(ctx.status(404), ctx.text('Job not found'))
        }

        // Job is complete, return result
        jobData.status = 'COMPLETE'

        return res(
          ctx.status(200),
          ctx.json({
            concreteType: 'org.sagebionetworks.repo.model.grid.GridSession',
            gridSession: {
              sessionId: jobData.sessionId,
              startedBy: 'mockUser',
              startedOn: new Date().toISOString(),
              etag: `etag-${Date.now()}`,
              modifiedOn: new Date().toISOString(),
              lastReplicaIdClient: 1,
              lastReplicaIdService: 1,
            },
          }),
        )
      },
    ),
  ]
}
