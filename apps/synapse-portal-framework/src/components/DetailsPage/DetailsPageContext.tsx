import { QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'
import React, { useContext } from 'react'
import { getColumnIndex } from 'synapse-react-client'

type DetailsPageContextType = {
  queryResultBundle?: QueryResultBundle
  rowData?: Row
}

export const DetailsPageContext = React.createContext({})

/*
 * Stores global state for the "Sign in" dialog in the portals
 */
export function DetailsPageContextProvider(
  props: React.PropsWithChildren<{ value: DetailsPageContextType }>,
) {
  const { value, children } = props
  return (
    <DetailsPageContext.Provider value={value}>
      {children}
    </DetailsPageContext.Provider>
  )
}

export function useDetailsPageContext(): DetailsPageContextType {
  const context = useContext(DetailsPageContext)
  if (context === undefined) {
    throw new Error(
      'DetailsPageContext must be used within an DetailsPageContextProvider',
    )
  }
  return context
}

type DetailsPageContextConsumerProps = {
  children: (value: {
    context: DetailsPageContextType
    value?: string | null
  }) => React.ReactNode
  columnName?: string
}

export function DetailsPageContextConsumer(
  props: DetailsPageContextConsumerProps,
) {
  return (
    <DetailsPageContext.Consumer>
      {(context: DetailsPageContextType) => {
        let value: string | null | undefined = undefined
        if (context.queryResultBundle && context.rowData && props.columnName) {
          const columnIndex = getColumnIndex(
            props.columnName,
            context.queryResultBundle.selectColumns,
            context.queryResultBundle.columnModels,
          )
          if (columnIndex !== undefined) {
            value = context.rowData.values[columnIndex]
          }
        }
        console.log('context:', { context, value })

        return props.children({ context, value })
      }}
    </DetailsPageContext.Consumer>
  )
}
