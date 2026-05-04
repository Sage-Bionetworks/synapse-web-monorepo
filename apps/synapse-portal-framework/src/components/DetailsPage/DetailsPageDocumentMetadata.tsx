import { getPortalOrigin } from '@/utils/getPortalOrigin'
import { useSetCanonicalUrl } from '@/utils/useSetCanonicalUrl'
import { Row, RowSet } from '@sage-bionetworks/synapse-types'
import { useLocation } from 'react-router'

import { getColumnIndex } from 'synapse-react-client/utils/functions/index'
import { useDetailsPageContext } from './DetailsPageContext'
import { usePortalContext } from '@/components/PortalContext'

type DetailsPageDocumentMetadataProps = {
  /** The set of column name(s) which define the main unique key of the column (used to define the canonical URL for SEO) */
  resourcePrimaryKey?: string[]
}

function getCanonicalUrl(
  pathname: string,
  portalKey: string,
  resourcePrimaryKey: string[],
  rowSet: RowSet,
  rowData: Row,
) {
  try {
    const origin = getPortalOrigin(portalKey)
    const canonicalUrl = new URL(pathname, origin)
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
  const { portalKey } = usePortalContext()
  const {
    context: { rowSet, rowData },
  } = useDetailsPageContext()

  const canonicalUrl =
    resourcePrimaryKey != null && rowSet != null && rowData != null
      ? getCanonicalUrl(
          pathname,
          portalKey,
          resourcePrimaryKey,
          rowSet,
          rowData,
        )
      : undefined

  useSetCanonicalUrl(canonicalUrl)

  return <></>
}
