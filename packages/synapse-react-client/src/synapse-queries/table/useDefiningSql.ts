import { SynapseClientError } from '../../utils'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { validateDefiningSql } from '../../synapse-client'
import {
  ValidateDefiningSqlResponse,
  EntityType,
} from '@sage-bionetworks/synapse-types'

export function useValidateDefiningSql(
  sql: string,
  entityType: EntityType,
  options?: UseMutationOptions<ValidateDefiningSqlResponse, SynapseClientError>,
) {
  return useMutation<ValidateDefiningSqlResponse, SynapseClientError>({
    ...options,
    mutationFn: () => validateDefiningSql(sql, entityType),
  })
}
