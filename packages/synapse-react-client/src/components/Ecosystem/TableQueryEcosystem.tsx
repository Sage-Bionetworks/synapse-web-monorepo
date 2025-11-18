import EcosystemCard from '@/components/Ecosystem/EcosystemCard'
import EcosystemSkeleton from '@/components/Ecosystem/EcosystemSkeleton'
import { Markdown } from '@/components/Markdown/MarkdownSynapse/MarkdownSynapse'
import { ImageFileHandle } from '@/components/widgets/ImageFileHandle'
import { useGetFullTableQueryResults } from '@/synapse-queries/entity/useGetQueryResultBundle'
import {
  getColumnIndex,
  parseEntityIdFromSqlStatement,
} from '@/utils/functions/index'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import { Alert, Stack } from '@mui/material'
import {
  FileHandleAssociateType,
  Query,
  Row,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import uniq from 'lodash-es/uniq'
import { ReactNode } from 'react'
import EcosystemLayout from './EcosystemLayout'

/* The column names expected to be found in the table */
const COLUMN_NAMES = {
  RESOURCE_CATEGORY: 'resourcecategory',
  RESOURCE_NAME: 'resourcename',
  RESOURCE_DESCRIPTION: 'resourcedescription',
  RESOURCE_URL: 'resourceurl',
  RESOURCE_ICON_IMAGE: 'resourceiconimage',
}

type TableQueryEcosystemCardProps = {
  /** The row data to display*/
  row: Row
  /** The headers (select columns) of the table query result */
  headers: SelectColumn[]
  /** The entity ID of the table */
  tableEntityId: string
}

/**
 * Maps a table query result row to an EcosystemCard.
 */
function TableQueryEcosystemCard(props: TableQueryEcosystemCardProps) {
  const { row, headers, tableEntityId } = props
  const resourceNameColumnIndex = getColumnIndex(
    COLUMN_NAMES.RESOURCE_NAME,
    headers,
  )!
  const resourceName = row.values[resourceNameColumnIndex]!

  const resourceUrlColumnIndex = getColumnIndex(
    COLUMN_NAMES.RESOURCE_URL,
    headers,
  )!
  const resourceUrl = row.values[resourceUrlColumnIndex]!

  const resourceDescriptionColumnIndex = getColumnIndex(
    COLUMN_NAMES.RESOURCE_DESCRIPTION,
    headers,
  )!
  const resourceDescriptionMarkdown =
    row.values[resourceDescriptionColumnIndex]!

  let iconElement: ReactNode = null

  const resourceIconImageColumnIndex = getColumnIndex(
    COLUMN_NAMES.RESOURCE_ICON_IMAGE,
    headers,
  )

  if (resourceIconImageColumnIndex) {
    const resourceIconFileHandleId = row.values[resourceIconImageColumnIndex]
    if (resourceIconFileHandleId) {
      iconElement = (
        <ImageFileHandle
          fileHandleAssociation={{
            fileHandleId: resourceIconFileHandleId,
            associateObjectId: tableEntityId,
            associateObjectType: FileHandleAssociateType.TableEntity,
          }}
        />
      )
    }
  }

  return (
    <EcosystemCard
      title={resourceName}
      titleUrl={resourceUrl}
      description={<Markdown markdown={resourceDescriptionMarkdown} />}
      image={iconElement}
    />
  )
}

export type TableQueryEcosystemProps = {
  /** The Synapse table query to execute to populate the Ecosystem component */
  query: Query
}

/**
 * The Ecosystem component driven by the results of a Synapse table query.
 * @constructor
 */
function TableQueryEcosystem(props: TableQueryEcosystemProps) {
  const { query } = props
  const tableEntityId = parseEntityIdFromSqlStatement(query.sql)
  const { data, isLoading, error } = useGetFullTableQueryResults({
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: tableEntityId,
    query,
    partMask: BUNDLE_MASK_QUERY_RESULTS,
  })

  if (!data?.queryResult) {
    if (isLoading) {
      return <EcosystemSkeleton />
    }
    if (error) {
      return (
        <Alert color={'error'}>
          Error loading Ecosystem data: {error.message}
        </Alert>
      )
    }
    return null
  }

  const RESOURCE_CATEGORY_COLUMN_INDEX = getColumnIndex(
    COLUMN_NAMES.RESOURCE_CATEGORY,
    data.queryResult.queryResults.headers,
  )!

  // Get the distinct categories
  const categories: string[] = uniq(
    data.queryResult.queryResults.rows
      .map(row => row.values[RESOURCE_CATEGORY_COLUMN_INDEX])
      .filter((s): s is string => !!s), // Remove null values
  )

  // Create the content for each category and return it in the expected format for the Ecosystem component
  const config = categories.map(category => {
    const rowsForCategory = data.queryResult!.queryResults.rows.filter(
      row => row.values[RESOURCE_CATEGORY_COLUMN_INDEX] === category,
    )

    return {
      title: category,
      content: (
        <Stack>
          {rowsForCategory.map(row => (
            <TableQueryEcosystemCard
              key={row.values.join('-')}
              row={row}
              headers={data.queryResult!.queryResults.headers}
              tableEntityId={tableEntityId}
            />
          ))}
        </Stack>
      ),
    }
  })

  return <EcosystemLayout config={config} />
}

export default TableQueryEcosystem
