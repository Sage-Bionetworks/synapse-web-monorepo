import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  CreateGridRequest,
  GridReplica,
  GridSession,
  TableQuery,
} from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import {
  useCreateGridReplica,
  useCreateGridSession,
} from '../../synapse-queries/useGridSession'
import { parseQueryInput } from './DataGridUtils'

/**
 * Create a new grid session or retrieve an existing one based on the provided SQL query or session ID.
 */
function useCreateOrGetExistingGridSession() {
  const { mutateAsync: startGridSession } = useCreateGridSession()
  const { synapseClient } = useSynapseContext()
  return useMutation<
    GridSession,
    unknown,
    {
      gridSqlOrSessionId: string
      schemaId?: string
    }
  >({
    mutationFn: async ({ gridSqlOrSessionId, schemaId }) => {
      let session: GridSession
      const parsedInput = parseQueryInput(gridSqlOrSessionId)
      if (!['empty', 'sql', 'sessionId'].includes(parsedInput.type)) {
        throw new Error(
          'Unknown input type, please provide a valid SQL query or session ID.',
        )
      }
      if (parsedInput.type === 'empty' || parsedInput.type === 'sql') {
        // Start a new session and clear replicaId and presignedUrl
        const gridRequest = {
          concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
          initialQuery: undefined as TableQuery | undefined,
          schema$id: schemaId || undefined,
        } as CreateGridRequest

        if (parsedInput.type === 'sql') {
          gridRequest.initialQuery = {
            sql: parsedInput.input,
          } as TableQuery
          console.log(
            'Starting grid session with table query: ',
            parsedInput.input,
          )
        } else {
          console.log('Starting a new empty grid session.')
        }

        const gridSessionResponse = await startGridSession(gridRequest)
        console.log('Grid session started:', gridSessionResponse)
        session = gridSessionResponse.gridSession!
      } else {
        // The input is a sessionId, so retrieve the session object
        console.log(`Joining existing session ID: ${parsedInput.input}`)
        session =
          await synapseClient.gridServicesClient.getRepoV1GridSessionSessionId({
            sessionId: parsedInput.input,
          })
      }

      return session
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
      {
        gridSqlOrSessionId: string
        schemaId?: string
      }
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
    {
      gridSqlOrSessionId: string
      schemaId?: string
    }
  >({
    ...options,
    mutationFn: async ({ gridSqlOrSessionId, schemaId }) => {
      const session = await createOrGetSession({ gridSqlOrSessionId, schemaId })
      const sessionId = session.sessionId!
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
