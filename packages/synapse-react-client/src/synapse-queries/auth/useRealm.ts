import { SynapseClient } from '@sage-bionetworks/synapse-client'
import { useQuery } from '@tanstack/react-query'
import { KeyFactory } from '../KeyFactory'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'

export function useGetCurrentRealmPrincipals(accessToken?: string) {
  const keyFactory = new KeyFactory(accessToken)
  const synapseClient = new SynapseClient({
    basePath: getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  })

  return useQuery({
    queryKey: keyFactory.getCurrentRealmPrincipalsQueryKey(),
    queryFn: () => synapseClient.realmServicesClient.getRepoV1RealmPrincipals(),
  })
}
