import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { FairDatasetsCodeWorkspacesLocationsGet200Response } from '@sage-bionetworks/aridhia-client/generated/models'
import { DatasetsApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { AridhiaKeyFactory } from './AridhiaKeyFactory'
import { AridhiaError, useAridhiaQuery } from './useAridhiaQuery'

/** The locations a dataset's workspaces can live in, for the "request a new workspace" step. */
export function useGetAridhiaWorkspaceLocations(
  datasetCode: string,
  options?: Partial<
    UseQueryOptions<
      FairDatasetsCodeWorkspacesLocationsGet200Response,
      AridhiaError,
      FairDatasetsCodeWorkspacesLocationsGet200Response
    >
  >,
): UseQueryResult<
  FairDatasetsCodeWorkspacesLocationsGet200Response,
  AridhiaError
> {
  const { accessToken: synapseAccessToken } = useSynapseContext()
  const keyFactory = new AridhiaKeyFactory(synapseAccessToken)

  return useAridhiaQuery<FairDatasetsCodeWorkspacesLocationsGet200Response>(
    keyFactory.workspaceLocations(datasetCode),
    async configuration => {
      const datasetsApi = new DatasetsApi(configuration)
      return await datasetsApi.fairDatasetsCodeWorkspacesLocationsGet({
        code: datasetCode,
      })
    },
    options,
  )
}
