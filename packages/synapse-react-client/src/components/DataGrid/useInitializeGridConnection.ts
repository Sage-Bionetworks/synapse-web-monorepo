import {
  useCreateGridReplica,
  useCreateGridSession,
} from '@/synapse-queries/grid/useGridSession'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  CreateGridRequest,
  GridReplica,
  GridSession,
} from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

export type CreateOrGetGridSessionInput = {
  createGridRequest?: CreateGridRequest
  sessionId?: string
}

/**
 * Create a new grid session or retrieve an existing one based on the provided SQL query or session ID.
 */
function useCreateOrGetExistingGridSession() {
  const { mutateAsync: startGridSession } = useCreateGridSession()
  const { synapseClient } = useSynapseContext()
  return useMutation<GridSession, unknown, CreateOrGetGridSessionInput>({
    mutationFn: async ({ createGridRequest, sessionId }) => {
      if (!(createGridRequest || sessionId)) {
        throw new Error(
          'Must provide either a CreateGridRequest or sessionId to create or get a grid session.',
        )
      }

      if (createGridRequest) {
        const gridSessionResponse = await startGridSession(createGridRequest)
        console.log('Grid session started:', gridSessionResponse)
        return gridSessionResponse.gridSession!
      }

      // The input is a sessionId, so retrieve the session object
      console.log(`Joining existing session ID: ${sessionId}`)
      return await synapseClient.gridServicesClient.getRepoV1GridSessionSessionId(
        {
          sessionId: sessionId!,
        },
      )
    },
  })
}

/**
 * Mutation to establish a grid connection by creating or getting an existing session,
 * creating a replica, and obtaining a presigned URL for the session.
 *
 * @param gridSqlOrSessionId - The SQL query or session ID to use for the grid connection.
 * @param schemaId - Optional schema ID to associate with the session.
 * @param options
 */
export default function useInitializeGridConnection(
  options?: Omit<
    UseMutationOptions<
      { session: GridSession; replica: GridReplica; presignedUrl: string },
      unknown,
      CreateOrGetGridSessionInput
    >,
    'mutationFn'
  >,
) {
  const { mutateAsync: createOrGetSession } =
    useCreateOrGetExistingGridSession()
  const { mutateAsync: createReplicaId } = useCreateGridReplica()
  const { synapseClient } = useSynapseContext()

  return useMutation<
    { session: GridSession; replica: GridReplica; presignedUrl: string },
    unknown,
    CreateOrGetGridSessionInput
  >({
    ...options,
    mutationFn: async ({ createGridRequest, sessionId }) => {
      if (!(createGridRequest || sessionId)) {
        throw new Error(
          'Must provide either a SQL query, recordSetId, or sessionId to initialize grid connection.',
        )
      }
      const session = await createOrGetSession({ createGridRequest, sessionId })
      sessionId = session.sessionId!
      try {
        const createReplicaResponse = await createReplicaId(sessionId)
        console.log('Replica created:', createReplicaResponse)
        const replica = createReplicaResponse.replica!

        const { presignedUrl } =
          await synapseClient.gridServicesClient.postRepoV1GridSessionSessionIdPresignedUrl(
            {
              sessionId: sessionId,
              createGridPresignedUrlRequest: {
                gridSessionId: sessionId,
                replicaId: replica.replicaId!,
              },
            },
          )

        return {
          session,
          replica,
          presignedUrl: presignedUrl!,
        }
      } catch (error) {
        throw new Error('Error starting session:', { cause: error })
      }
    },
  })
}
