import React, { useContext } from 'react'
import { FileHandleResults, WikiPage } from '../../utils/synapseTypes'

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
export const SynapseWikiContext = React.createContext<
  SynapseWikiContextType | undefined
>(undefined)

export type SynapseWikiContextProviderProps = {
  wikiContext?: SynapseWikiContextType
  children?: React.ReactNode
}

/**
 * Provides context related to Synapse Wikis
 * @param param0
 * @returns
 */
export const SynapseWikiContextProvider: React.FunctionComponent<
  SynapseWikiContextProviderProps
> = ({ children, wikiContext }) => {
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
