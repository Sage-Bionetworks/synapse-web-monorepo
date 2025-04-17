import { createContext, PropsWithChildren, useContext } from 'react'

export type AdditionalPropertyContextType = {
  dropProperty: (event?: any) => void
}

/**
 * The `AdditionalPropertyContext` is a custom context object used to pass the `dropProperty` handler to the items within
 * a particular additional property.
 *
 * In RJSF, dropping an entire additional property is handled at the `object` level. In the Synapse Annotations UI,
 * we treat all additional properties (a.k.a. custom annotations) as arrays, and render the delete control at the `array`
 * level. RJSF does not normally provide the drop property handler at the `array` level, so we capture it and pass it
 * along using this context.
 */
export const AdditionalPropertyContext = createContext<
  AdditionalPropertyContextType | undefined
>(undefined)

export type AdditionalPropertyContextProviderProps = PropsWithChildren<{
  value: AdditionalPropertyContextType
}>

export function AdditionalPropertyContextProvider(
  props: AdditionalPropertyContextProviderProps,
) {
  return (
    <AdditionalPropertyContext.Provider value={props.value}>
      {props.children}
    </AdditionalPropertyContext.Provider>
  )
}

export const AdditionalPropertyContextConsumer =
  AdditionalPropertyContext.Consumer

export function useAdditionalPropertyContext():
  | AdditionalPropertyContextType
  | undefined {
  return useContext(AdditionalPropertyContext)
}
