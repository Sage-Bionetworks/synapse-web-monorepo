import { Row, RowSet } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { getColumnIndex } from 'synapse-react-client'
import { useSetCanonicalUrl } from '../../utils/useSetCanonicalUrl'
import { useDetailsPageContext } from './DetailsPageContext'

type DetailsPageDocumentMetadataProps = {
  /** The set of column name(s) which define the main unique key of the column (used to define the canonical URL for SEO) */
  resourcePrimaryKey?: string[]
}

function getCanonicalUrl(
  pathname: string,
  resourcePrimaryKey: string[],
  rowSet: RowSet,
  rowData: Row,
) {
  try {
    const canonicalUrl = new URL(pathname, window.location.origin)
    resourcePrimaryKey.forEach(columnName => {
      const columnIndex = getColumnIndex(resourcePrimaryKey[0], rowSet?.headers)
      if (columnIndex == null) {
        throw new Error(
          'No column name in rowSet.headers matching: ' + columnName,
        )
      }
      const value = rowData.values[columnIndex]
      if (value == null) {
        throw new Error(`Retrieved null value for column ${columnName}`)
      }
      canonicalUrl.searchParams.append(columnName, value)
    })

    return canonicalUrl.toString()
  } catch (e) {
    console.error('Error generating canonical URL', e)
    return undefined
  }
}

export function DetailsPageDocumentMetadata(
  props: DetailsPageDocumentMetadataProps,
) {
  const { resourcePrimaryKey } = props

  const { pathname } = useLocation()
  const {
    context: { rowSet, rowData },
  } = useDetailsPageContext()

  const canonicalUrl =
    resourcePrimaryKey != null && rowSet != null && rowData != null
      ? getCanonicalUrl(pathname, resourcePrimaryKey, rowSet, rowData)
      : undefined

  useSetCanonicalUrl(canonicalUrl)

  return <></>
}
