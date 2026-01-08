import {
  useFileContent,
  useGetQueryResultBundleWithAsyncStatus,
} from '@/synapse-queries'
import useJsonLdScriptElement from '@/utils/hooks/useJsonLdScriptElement'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import {
  ColumnSingleValueFilterOperator,
  COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  Query,
} from '@sage-bionetworks/synapse-types'
import React from 'react'

interface DatasetJsonLdScriptOption1Props {
  entityId?: string
  version?: number
  searchParams?: never
}
interface DatasetJsonLdScriptOption2Props {
  entityId?: never
  version?: never
  searchParams?: { [key: string]: string } // can be injected if this component is embedded in a Dataset Details page
}
export type DatasetJsonLdScriptProps =
  | DatasetJsonLdScriptOption1Props
  | DatasetJsonLdScriptOption2Props

/**
 * This component will add a Dataset json ld script tag to the page when rendered.
 */
export function DatasetJsonLdScript({
  entityId: entityIdFromProps,
  version: versionFromProps,
  searchParams,
}: DatasetJsonLdScriptProps): React.ReactNode {
  let entityId: string
  let version: number | undefined
  if (entityIdFromProps) {
    entityId = entityIdFromProps
    version = versionFromProps
  } else if (searchParams) {
    entityId = searchParams['id']
    if (searchParams['version']) {
      version = parseInt(searchParams['version'])
    }
  }
  const query: Query = {
    sql: 'select croissant_file_s3_object from syn65903895',
    additionalFilters: [
      {
        concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'dataset',
        operator: ColumnSingleValueFilterOperator.EQUAL,
        values: [entityId!],
      },
    ],
  }
  if (version) {
    query.additionalFilters!.push({
      concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
      columnName: 'dataset_version',
      operator: ColumnSingleValueFilterOperator.EQUAL,
      values: [`${version}`],
    })
  }
  const { data } = useGetQueryResultBundleWithAsyncStatus({
    entityId: entityId!,
    query,
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })

  // get raw data.  parse and then inject?  or just inject without parsing?
  const rows = data?.responseBody?.queryResult?.queryResults?.rows
  const row = rows && rows.length > 0 ? rows[0] : undefined
  const croissantFileS3ObjectURL = row?.values[0]

  const { data: croissantFileContent } = useFileContent(
    croissantFileS3ObjectURL!,
    {
      enabled: !!croissantFileS3ObjectURL,
    },
  )
  useJsonLdScriptElement(croissantFileContent)
  return <></>
}
