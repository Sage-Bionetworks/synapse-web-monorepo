import { createContext, useContext } from 'react'
import { LabelLinkConfig } from '../CardContainerLogic'

export type SynapseTableContextType = {
  columnLinks?: LabelLinkConfig
  /**
   * If true, the component will show enhanced UI for the case where
   * - the entity is a FileEntity, AND
   * - the caller has permission to fetch the dataFileHandle, AND
   * - the dataFileHandle is an instance of ExternalFileHandleInterface (i.e. the file is not controlled by Synapse)
   * Note that this requires an additional API call that cannot be batched, so it should be avoided in bulk  contexts if possible.
   * @default false
   */
  showExternalAccessIcon?: boolean
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
