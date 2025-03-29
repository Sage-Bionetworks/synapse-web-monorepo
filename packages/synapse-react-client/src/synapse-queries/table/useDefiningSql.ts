import { validateDefiningSql } from '@/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  ValidateDefiningSqlRequest,
  ValidateDefiningSqlResponse,
} from '@sage-bionetworks/synapse-types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

export function useValidateDefiningSql(
  options?: UseMutationOptions<
    ValidateDefiningSqlResponse,
    SynapseClientError,
    ValidateDefiningSqlRequest
  >,
) {
  return useMutation<
    ValidateDefiningSqlResponse,
    SynapseClientError,
    ValidateDefiningSqlRequest
  >({
    ...options,
    mutationFn: variables =>
      validateDefiningSql(variables.sql, variables.entityType),
  })
}
