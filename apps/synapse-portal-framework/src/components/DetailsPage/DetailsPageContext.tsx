import { Row, RowSet } from '@sage-bionetworks/synapse-types'
import { isEmpty } from 'lodash'
import { createContext, PropsWithChildren, ReactNode, useContext } from 'react'
import { NoContentAvailable } from 'synapse-react-client'

import { getColumnIndex } from 'synapse-react-client/utils/functions/index'

type DetailsPageContextType = {
  rowSet?: RowSet
  rowData?: Row
}

export const DetailsPageContext = createContext({})

/*
 * Stores query data for the object specified on a DetailsPage
 */
export function DetailsPageContextProvider(
  props: PropsWithChildren<{ value: DetailsPageContextType }>,
) {
  const { value, children } = props
  return (
    <DetailsPageContext.Provider value={value}>
      {children}
    </DetailsPageContext.Provider>
  )
}

function getValue(
  context: DetailsPageContextType,
  columnName: string | undefined,
) {
  let value: string | null | undefined = undefined
  if (context.rowSet && context.rowData && columnName) {
    const columnIndex = getColumnIndex(
      columnName,
      context.rowSet.headers,
      undefined,
    )

    if (columnIndex != null) {
      const columnModel = context.rowSet.headers[columnIndex]
      value = context.rowData.values[columnIndex]
      // Note: searchParams expects comma-separated values
      // TODO: The downstream component has no idea if this is going to be comma-separated or not

      if (columnModel.columnType.endsWith('_LIST') && !isEmpty(value)) {
        value = (JSON.parse(value!) as string[]).join(',')
      }
    }
  }
  return value
}

/**
 * Retrieve the DetailsPageContext. Optionally specify the `columnName` argument for
 * the returned `value` property to be populated with the row's value for that column.
 * @param props
 * @constructor
 */
export function useDetailsPageContext(columnName?: string): {
  context: DetailsPageContextType
  value: string | null | undefined
} {
  const context = useContext(DetailsPageContext)

  if (context === undefined) {
    throw new Error(
      'DetailsPageContext must be used within an DetailsPageContextProvider',
    )
  }

  return { context, value: getValue(context, columnName) }
}

type DetailsPageContextConsumerProps = {
  children: (value: {
    context: DetailsPageContextType
    value?: string | null
  }) => ReactNode
  columnName?: string
  /**
   * If true, displays NoContentAvailable component when the column value is empty.
   * @default true
   */
  showNoContentAvailableIfValueIsEmpty?: boolean
}

/**
 * Retrieve the DetailsPageContext. Optionally specify the `columnName` prop for
 * the value render prop to be populated with the row's value for that column.
 * @param props
 * @constructor
 */
export function DetailsPageContextConsumer(
  props: DetailsPageContextConsumerProps,
) {
  const {
    columnName,
    children,
    showNoContentAvailableIfValueIsEmpty = true,
  } = props
  return (
    <DetailsPageContext.Consumer>
      {(context: DetailsPageContextType) => {
        const value = getValue(context, columnName)
        if (
          showNoContentAvailableIfValueIsEmpty &&
          columnName !== undefined &&
          isEmpty(value)
        ) {
          return <NoContentAvailable />
        }
        return children({ context, value })
      }}
    </DetailsPageContext.Consumer>
  )
}
