import { createContext, useContext } from 'react'
import { LabelLinkConfig } from '../CardContainerLogic'

export type SynapseTableContextType = {
  columnLinks?: LabelLinkConfig
  /**
   * If true, the icon will not be shown if the entity is a FileEntity and the dataFileHandle is an ExternalFileHandle (caller must have permission to retrieve the dataFileHandle)
   * NOTE: This check requires an additional API call to retrieve the file handle
   * @default false
   */
  hideAccessIconForExternalFileHandle?: boolean
}

export const SynapseTableContext = createContext<
  SynapseTableContextType | undefined
>(undefined)

export function useSynapseTableContext(): SynapseTableContextType {
  const context = useContext(SynapseTableContext)
  if (context === undefined) {
    throw new Error(
      'useSynapseTableContext must be used within a SynapseTableContext',
    )
  }
  return context
}
