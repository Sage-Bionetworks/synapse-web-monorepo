import { Table } from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import { useGetEntity } from '../../synapse-queries'
import { getDefaultPrimaryKey } from '../SynapseTable/SynapseTableUtils'
import { useGetQueryMetadata } from './useGetQueryMetadata'

type UseComputeRowSelectionPrimaryKeyOptions = {
  entityId: string
  versionNumber?: number
  rowSelectionPrimaryKeyFromProps?: string[]
}

export default function useComputeRowSelectionPrimaryKey(
  options: UseComputeRowSelectionPrimaryKeyOptions,
) {
  const { rowSelectionPrimaryKeyFromProps, entityId, versionNumber } = options
  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)
  const { data: queryMetadata } = useGetQueryMetadata()

  return useMemo(() => {
    if (rowSelectionPrimaryKeyFromProps) {
      return rowSelectionPrimaryKeyFromProps
    } else if (entity && queryMetadata?.columnModels) {
      return getDefaultPrimaryKey(entity, queryMetadata.columnModels)
    }
    return undefined
  }, [rowSelectionPrimaryKeyFromProps, entity, queryMetadata?.columnModels])
}
