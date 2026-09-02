import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { FairDatasetsCodeDictionariesGet200Response } from '@sage-bionetworks/aridhia-client/generated/models'
import { DatasetsApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { AridhiaKeyFactory } from './AridhiaKeyFactory'
import { AridhiaError, useAridhiaQuery } from './useAridhiaQuery'

/** A dataset's dictionaries — the table/cohort-query building blocks the user selects from. */
export function useGetAridhiaDictionaries(
  datasetCode: string,
  options?: Partial<
    UseQueryOptions<
      FairDatasetsCodeDictionariesGet200Response,
      AridhiaError,
      FairDatasetsCodeDictionariesGet200Response
    >
  >,
): UseQueryResult<FairDatasetsCodeDictionariesGet200Response, AridhiaError> {
  const { accessToken: synapseAccessToken } = useSynapseContext()
  const keyFactory = new AridhiaKeyFactory(synapseAccessToken)

  return useAridhiaQuery<FairDatasetsCodeDictionariesGet200Response>(
    keyFactory.dictionaries(datasetCode),
    async configuration => {
      const datasetsApi = new DatasetsApi(configuration)
      return await datasetsApi.fairDatasetsCodeDictionariesGet({
        code: datasetCode,
      })
    },
    options,
  )
}
