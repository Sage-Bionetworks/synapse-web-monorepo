import { useState, useRef, useEffect } from 'react'
import { useCreateGridSession } from './useCreateGridSession'
import { parseQueryInput } from './DataGridUtils'
import {
  CreateGridRequest,
  PostRepoV1GridSessionSessionIdReplicaRequest,
} from '@sage-bionetworks/synapse-client'
import { SynapseClient, TableQuery } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'

export const StartGridSession = () => {
  const [gridSql, setGridSql] = useState('')
  const [sessionId, setSessionId] = useState('')
  const [replicaId, setReplicaId] = useState<number | null>(null)
  const [presignedUrl, setPresignedUrl] = useState('')

  const synapseClient = useSynapseContext().synapseClient

  const startGridSession = useCreateGridSession()

  const createReplicaId = async (
    synapseClient: SynapseClient,
    sessionId: string,
  ) => {
    try {
      console.log('Creating replica for session ID:', sessionId)
      const replica =
        await synapseClient.gridServicesClient.postRepoV1GridSessionSessionIdReplica(
          {
            sessionId,
            createReplicaRequest: {
              gridSessionId: sessionId,
            },
          } as PostRepoV1GridSessionSessionIdReplicaRequest,
        )
      return replica
    } catch (error) {
      console.error('Failed to create replica:', error)
      return
    }
  }
  const handleStartSession = async (input: string) => {
    const parsedInput = parseQueryInput(input)

    try {
      if (parsedInput.type === 'empty' || parsedInput.type === 'sql') {
        // Start a new session and clear replicaId and presignedUrl
        const gridRequest = {
          concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
          initialQuery: undefined as TableQuery | undefined,
          schema$id: undefined as string | undefined,
        } as CreateGridRequest

        if (parsedInput.type === 'sql') {
          gridRequest.initialQuery = { sql: parsedInput.input } as TableQuery
          setGridSql(parsedInput.input)
          console.log('Starting grid session with table query: ', gridSql)
        } else {
          setGridSql('')
          console.log('Starting a new empty grid session.')
        }

        const gridSessionResponse = await startGridSession.mutateAsync(
          gridRequest,
        )
        console.log('Grid session started:', gridSessionResponse)
        const newSessionId = gridSessionResponse.gridSession?.sessionId || ''
        setSessionId(newSessionId)

        const replica = await createReplicaId(synapseClient, newSessionId)
        console.log('Replica created:', replica)
        const newReplicaId = replica?.replica?.replicaId || null
        setReplicaId(newReplicaId)

        const getPresignedUrl =
          await synapseClient.gridServicesClient.postRepoV1GridSessionSessionIdPresignedUrl(
            {
              sessionId: newSessionId,
              createGridPresignedUrlRequest: {
                gridSessionId: newSessionId,
                replicaId: newReplicaId || undefined,
              },
            },
          )
        setPresignedUrl(getPresignedUrl.presignedUrl || '')
      } else if (parsedInput.type === 'sessionId') {
        console.log(`Joining existing session ID: ${parsedInput.input}`)
        setSessionId(parsedInput.input)

        const replica = await createReplicaId(synapseClient, parsedInput.input)
        console.log('Replica created:', replica)
        const newReplicaId = replica?.replica?.replicaId || null
        setReplicaId(newReplicaId)

        const getPresignedUrl =
          await synapseClient.gridServicesClient.postRepoV1GridSessionSessionIdPresignedUrl(
            {
              sessionId: parsedInput.input,
              createGridPresignedUrlRequest: {
                gridSessionId: parsedInput.input,
                replicaId: newReplicaId || undefined,
              },
            },
          )
        setPresignedUrl(getPresignedUrl.presignedUrl || '')
      } else {
        console.error(
          'Unknown input type, please provide a valid SQL query or session ID.',
        )
      }
    } catch (error) {
      console.error('Error starting session:', error)
    }
  }

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="(Optional) Enter a SQL query or session ID"
        style={{ width: '300px' }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            const inputValue = inputRef.current?.value || ''
            handleStartSession(inputValue)
          }
        }}
      />
      <button
        onClick={() => {
          const inputValue = inputRef.current?.value || ''
          handleStartSession(inputValue)
        }}
        style={{ backgroundColor: '#4CAF50', color: 'white' }}
      >
        Start Grid Session
      </button>
    </>
  )
}
