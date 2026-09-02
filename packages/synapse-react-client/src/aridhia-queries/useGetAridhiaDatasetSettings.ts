import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { DatasetSettings } from '@sage-bionetworks/aridhia-client/generated/models'
import { DatasetsApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { AridhiaKeyFactory } from './AridhiaKeyFactory'
import { AridhiaError, useAridhiaQuery } from './useAridhiaQuery'

/** A dataset's FAIR settings: allowed transfer types, workflow key, cohort behavior, etc. */
export function useGetAridhiaDatasetSettings(
  datasetCode: string,
  options?: Partial<
    UseQueryOptions<DatasetSettings, AridhiaError, DatasetSettings>
  >,
): UseQueryResult<DatasetSettings, AridhiaError> {
  const { accessToken: synapseAccessToken } = useSynapseContext()
  const keyFactory = new AridhiaKeyFactory(synapseAccessToken)

  return useAridhiaQuery<DatasetSettings>(
    keyFactory.datasetSettings(datasetCode),
    async configuration => {
      const datasetsApi = new DatasetsApi(configuration)
      return await datasetsApi.fairDatasetsCodeSettingsGet({
        code: datasetCode,
      })
    },
    options,
  )
}
