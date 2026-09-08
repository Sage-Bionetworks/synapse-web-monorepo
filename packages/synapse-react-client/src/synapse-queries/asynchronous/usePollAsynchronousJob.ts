import { useSynapseContext } from '@/utils/index'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

/**
 * Polls an asynchronous job and returns a UseQueryResult containing the job status. Stops polling once the job
 * succeeds or fails. The query is disabled while jobId is undefined (e.g. before the job has been registered).
 * @param jobId
 */
export default function usePollAsynchronousJob(jobId: string | undefined) {
  const { synapseClient, keyFactory } = useSynapseContext()

  const [refetchInterval, setRefetchInterval] = useState<number | false>(1000)

  const query = useQuery({
    queryKey: keyFactory.getAsyncJobStatusQueryKey(jobId ?? ''),
    enabled: !!jobId,
    refetchInterval: refetchInterval,
    queryFn: () =>
      synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
        {
          jobId: jobId!,
        },
      ),
  })

  useEffect(() => {
    if (query.error || (query.data && query?.data.jobState != 'PROCESSING')) {
      setRefetchInterval(false)
    }
  }, [query.data, query.data?.jobState, query.error])

  return query
}
