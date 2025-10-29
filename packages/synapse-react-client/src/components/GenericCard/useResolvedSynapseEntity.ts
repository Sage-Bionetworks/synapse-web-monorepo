import { useMemo } from 'react'
import type { SynapseEntityConfig } from './TableRowGenericCard'

export type UseResolvedSynapseEntityProps = {
  synapseEntityConfig?: SynapseEntityConfig
  getColumnValue: (columnName?: string) => string | undefined
  rowId?: number
  rowVersionNumber?: number
}

export type ResolvedSynapseEntity = {
  entityId: string | undefined
  entityVersionNumber: number | undefined
}

/**
 * Resolves the Synapse entity ID/version for a table row based on the provided configuration.
 */
export function useResolvedSynapseEntity({
  synapseEntityConfig,
  getColumnValue,
  rowId,
  rowVersionNumber,
}: UseResolvedSynapseEntityProps): ResolvedSynapseEntity {
  return useMemo(() => {
    let entityId: string | undefined
    let entityVersionNumber: number | undefined

    if (synapseEntityConfig?.id?.source === 'rowId') {
      if (rowId !== undefined) {
        entityId = `syn${rowId}`
      }
    } else if (synapseEntityConfig?.id?.source === 'column') {
      entityId = getColumnValue(synapseEntityConfig.id.columnName)
    }

    if (synapseEntityConfig?.version?.source === 'rowVersionNumber') {
      if (
        rowVersionNumber !== undefined &&
        Number.isInteger(rowVersionNumber)
      ) {
        entityVersionNumber = rowVersionNumber
      }
    } else if (synapseEntityConfig?.version?.source === 'column') {
      const versionValue = getColumnValue(
        synapseEntityConfig.version.columnName,
      )
      if (versionValue !== undefined && versionValue !== '') {
        const numericVersion = Number(versionValue)
        if (!Number.isNaN(numericVersion) && Number.isInteger(numericVersion)) {
          entityVersionNumber = numericVersion
        }
      }
    }

    return {
      entityId,
      entityVersionNumber,
    }
  }, [synapseEntityConfig, getColumnValue, rowId, rowVersionNumber])
}
