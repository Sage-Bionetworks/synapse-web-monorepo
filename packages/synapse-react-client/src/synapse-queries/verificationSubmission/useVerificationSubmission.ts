import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { updateVerificationSubmissionState } from '../../synapse-client'
import { VerificationState } from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'

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
