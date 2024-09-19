import { SynapseClientError } from 'synapse-client/util/SynapseClientError'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { validateDefiningSql } from '../../synapse-client'
import {
  ValidateDefiningSqlResponse,
  ValidateDefiningSqlRequest,
} from '@sage-bionetworks/synapse-types'

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
