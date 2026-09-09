import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { FairDatasetsCodeWorkspacesGet200Response } from '@sage-bionetworks/aridhia-client/generated/models'
import { DatasetsApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { AridhiaKeyFactory } from './AridhiaKeyFactory'
import { AridhiaError, useAridhiaQuery } from './useAridhiaQuery'

/** A dataset's existing workspaces at one location. Gated on a location being chosen first. */
export function useGetAridhiaWorkspaces(
  datasetCode: string,
  location: string | undefined,
  options?: Partial<
    UseQueryOptions<
      FairDatasetsCodeWorkspacesGet200Response,
      AridhiaError,
      FairDatasetsCodeWorkspacesGet200Response
    >
  >,
): UseQueryResult<FairDatasetsCodeWorkspacesGet200Response, AridhiaError> {
  const { accessToken: synapseAccessToken } = useSynapseContext()
  const keyFactory = new AridhiaKeyFactory(synapseAccessToken)

  return useAridhiaQuery<FairDatasetsCodeWorkspacesGet200Response>(
    keyFactory.workspaces(datasetCode, location),
    async configuration => {
      const datasetsApi = new DatasetsApi(configuration)
      return await datasetsApi.fairDatasetsCodeWorkspacesGet({
        code: datasetCode,
        location,
      })
    },
    {
      enabled: !!location,
      ...options,
    },
  )
}
