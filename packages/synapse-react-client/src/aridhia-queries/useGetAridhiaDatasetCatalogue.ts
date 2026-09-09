import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { DatasetCatalogue } from '@sage-bionetworks/aridhia-client/generated/models'
import { DatasetsApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { AridhiaKeyFactory } from './AridhiaKeyFactory'
import { AridhiaError, useAridhiaQuery } from './useAridhiaQuery'

/** A dataset's public catalogue entry (title, publisher, description). */
export function useGetAridhiaDatasetCatalogue(
  datasetCode: string,
  options?: Partial<
    UseQueryOptions<DatasetCatalogue, AridhiaError, DatasetCatalogue>
  >,
): UseQueryResult<DatasetCatalogue, AridhiaError> {
  const { accessToken: synapseAccessToken } = useSynapseContext()
  const keyFactory = new AridhiaKeyFactory(synapseAccessToken)

  return useAridhiaQuery<DatasetCatalogue>(
    keyFactory.catalogue(datasetCode),
    async configuration => {
      const datasetsApi = new DatasetsApi(configuration)
      return await datasetsApi.fairDatasetsCodeCatalogueGet({
        code: datasetCode,
      })
    },
    options,
  )
}
