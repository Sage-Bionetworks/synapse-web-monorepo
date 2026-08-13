import { JsonSchemaVersionInfo } from '@sage-bionetworks/synapse-client'
import { createContext, useContext } from 'react'
import { VersionSelectionType } from './VersionSelectionType'

export type JsonSchemaVersionSelectionContextValue = {
  versionSelectionType: VersionSelectionType
  selectedVersionInfo: JsonSchemaVersionInfo | undefined
  onVersionChange: (versionInfo: JsonSchemaVersionInfo | undefined) => void
}

/**
 * Carries the currently selected schema version (and how to change it) down to the version
 * column's cell renderer
 */
export const JsonSchemaVersionSelectionContext = createContext<
  JsonSchemaVersionSelectionContextValue | undefined
>(undefined)

export function useJsonSchemaVersionSelectionContext(): JsonSchemaVersionSelectionContextValue {
  const context = useContext(JsonSchemaVersionSelectionContext)
  if (!context) {
    throw new Error(
      'useJsonSchemaVersionSelectionContext must be used within a JsonSchemaVersionSelectionContext.Provider',
    )
  }
  return context
}
