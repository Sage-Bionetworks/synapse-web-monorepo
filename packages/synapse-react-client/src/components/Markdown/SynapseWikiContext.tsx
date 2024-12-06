import { createContext, ReactNode, useContext } from 'react'
import { FileHandleResults, WikiPage } from '@sage-bionetworks/synapse-types'

export type SynapseWikiContextType = {
  ownerId?: string
  wikiId?: string
  wikiPage?: Partial<WikiPage>
  /** Downloaded file handles that are attached to the wiki */
  fileHandles?: FileHandleResults
}

/**
 * This must be exported to use the context in class components.
 */
export const SynapseWikiContext = createContext<
  SynapseWikiContextType | undefined
>(undefined)

export type SynapseWikiContextProviderProps = {
  wikiContext?: SynapseWikiContextType
  children?: ReactNode
}

/**
 * Provides context related to Synapse Wikis
 * @param param0
 * @returns
 */
export function SynapseWikiContextProvider({
  children,
  wikiContext,
}: SynapseWikiContextProviderProps) {
  return (
    <SynapseWikiContext.Provider value={wikiContext}>
      {children}
    </SynapseWikiContext.Provider>
  )
}

export const SynapseWikiContextConsumer = SynapseWikiContext.Consumer

export function useWikiContext(): SynapseWikiContextType {
  const context = useContext(SynapseWikiContext)
  return context ?? {}
}
