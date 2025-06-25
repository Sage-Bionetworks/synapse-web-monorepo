import { CreateReplicaRequest } from '@sage-bionetworks/synapse-client'
import { http, HttpResponse } from 'msw'

function getRandomInt() {
  return crypto.getRandomValues(new Uint32Array(1))[0]
}

// Generate unique session IDs for grid sessions
const generateSessionId = () => {
  const randomId: number = getRandomInt()
  return `grid-session-${randomId * 100000}`
}

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
    http.post(
      `${backendOrigin}/repo/v1/grid/session/async/start`,
      async ({ request }) => {
        // Generate a unique job token
        const jobToken = `job-${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 9)}`
        const requestBody = await request.json()

        // Store job details for later reference
        pendingJobs.set(jobToken, {
          status: 'PROCESSING',
          startTime: Date.now(),
          sessionId: generateSessionId(),
        })

        return HttpResponse.json(requestBody, { status: 201 })
      },
    ),

    // Handler for retrieving async job results
    http.get<{ token: string }>(
      `${backendOrigin}/repo/v1/grid/session/async/get/:token`,
      ({ params }) => {
        // Retrieve job data
        const jobData = pendingJobs.get(params.token)

        if (!jobData) {
          return HttpResponse.text('Job not found', { status: 404 })
        }

        // Job is complete, return result
        jobData.status = 'COMPLETE'
        return HttpResponse.json(
          {
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
          },
          { status: 200 },
        )
      },
    ),

    // Handler for GridSessionReplica
    http.post<{ sessionId: string }, CreateReplicaRequest>(
      `${backendOrigin}/repo/v1/grid/:sessionId/replica`,
      async ({ request }) => {
        const { gridSessionId } = await request.json()

        // Check if the session ID exists in pending jobs
        const jobData = Array.from(pendingJobs.values()).find(
          job => job.sessionId === gridSessionId,
        )

        if (!jobData) {
          return HttpResponse.text('Grid session not found', { status: 404 })
        }

        // Create a replica for the session
        const replicaId = getRandomInt() % 1000
        const replicaResponse = {
          concreteType: 'org.sagebionetworks.repo.model.grid.GridReplica',
          replica: {
            gridSessionId,
            replicaId,
            createdBy: 'mockUser',
            isAgentReplica: false,
            createdOn: new Date().toISOString(),
          },
        }
        return HttpResponse.json(replicaResponse, { status: 201 })
      },
    ),

    // Handler for Grid presigned URL
    http.get<{ sessionId: string }>(
      `${backendOrigin}/repo/v1/grid/:sessionId/presignedUrl`,
      ({ params }) => {
        const { sessionId } = params

        const jobData = Array.from(pendingJobs.values()).find(
          job => job.sessionId === sessionId,
        )
        if (!jobData) {
          return HttpResponse.text('Grid session not found', { status: 404 })
        }
        // Generate a mock presigned URL
        const presignedUrl = `https://mock-s3-bucket/${sessionId}/data.csv?presigned=true`
        return HttpResponse.json({ presignedUrl }, { status: 200 })
      },
    ),
  ]
}
