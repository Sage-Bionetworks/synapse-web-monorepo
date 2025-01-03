import { createContext, useContext } from 'react'
import { LabelLinkConfig } from '../CardContainerLogic'

export type SynapseTableContextType = {
  columnLinks?: LabelLinkConfig
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
