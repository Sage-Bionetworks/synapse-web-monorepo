import { useMemo } from 'react'
import { useGetEntity } from '../../synapse-queries/entity/useEntity'
import { getDefaultPrimaryKey } from '../SynapseTable/SynapseTableUtils'

import { Table } from '@sage-bionetworks/synapse-types'
import { useQuery } from '@tanstack/react-query'
import { QueryContextType } from '../QueryContext/QueryContext'

type UseComputeRowSelectionPrimaryKeyOptions = {
  entityId: string
  versionNumber?: number
  rowSelectionPrimaryKeyFromProps?: string[]
  queryMetadataQueryOptions: QueryContextType['queryMetadataQueryOptions']
}

export default function useComputeRowSelectionPrimaryKey(
  options: UseComputeRowSelectionPrimaryKeyOptions,
) {
  const {
    rowSelectionPrimaryKeyFromProps,
    entityId,
    versionNumber,
    queryMetadataQueryOptions,
  } = options
  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)
  const { data: queryMetadata } = useQuery(queryMetadataQueryOptions)

  return useMemo(() => {
    if (rowSelectionPrimaryKeyFromProps) {
      return rowSelectionPrimaryKeyFromProps
    } else if (entity && queryMetadata?.columnModels) {
      return getDefaultPrimaryKey(entity, queryMetadata.columnModels)
    }
    return undefined
  }, [rowSelectionPrimaryKeyFromProps, entity, queryMetadata?.columnModels])
}
