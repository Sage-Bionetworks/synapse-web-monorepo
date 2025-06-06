import { updateVerificationSubmissionState } from '@/synapse-client'
import { useSynapseContext } from '@/utils'
import { VerificationState } from '@sage-bionetworks/synapse-types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'

type UseUpdateVerificationSubmissionArgs = {
  id: string
  verificationState: Pick<VerificationState, 'state' | 'reason' | 'notes'>
}

export function useUpdateVerificationSubmission(
  options?: Partial<
    UseMutationOptions<
      void,
      SynapseClientError,
      UseUpdateVerificationSubmissionArgs
    >
  >,
) {
  const { accessToken } = useSynapseContext()
  return useMutation<
    void,
    SynapseClientError,
    UseUpdateVerificationSubmissionArgs
  >({
    ...options,
    mutationFn: ({ id, verificationState }) =>
      updateVerificationSubmissionState(id, verificationState, accessToken!),
  })
}
