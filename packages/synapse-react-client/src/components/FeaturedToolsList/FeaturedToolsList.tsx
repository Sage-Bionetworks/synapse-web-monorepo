import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { SynapseConstants } from '@/utils'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'
import { ErrorBanner } from '../error/ErrorBanner'
import { FeaturedToolCard } from './FeaturedToolCard'

export type FeaturedToolsListProps = {
  entityId: string
  idColumnName: string
  nameColumnName: string
  descriptionColumnName: string
  typeColumnName: string
  dateColumnName?: string
  filterClause: string
} & ( // for the link, either the toolDetailPageURL or the toolURLColumnName must be set
  | {
      toolDetailPageURL: string
      toolURLColumnName?: never
    }
  | {
      toolDetailPageURL?: never
      toolURLColumnName: string
    }
)

type ToolData = {
  id: string
  name: string
  description: string
  type: string
  date?: string
  url?: string //set if URL is in toolURLColumnName, dynamic if pointing to a detail page
}

/**
 * Display a set of FeaturedToolCards (driven by a Table/View). Driven by the following annotations/column names:
 * 'id', 'name', 'type', and 'description'.
 */
export function FeaturedToolsList({
  entityId,
  toolDetailPageURL,
  toolURLColumnName,
  idColumnName = 'id',
  nameColumnName = 'name',
  descriptionColumnName = 'description',
  typeColumnName = 'type',
  dateColumnName,
  filterClause,
}: FeaturedToolsListProps) {
  const sql = `SELECT * FROM ${entityId} ${filterClause} LIMIT 3`
  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql,
    },
  }

  const { accessToken } = useSynapseContext()
  const [tools, setTools] = useState<ToolData[]>([])
  const [error, setError] = useState<Error>()
  const { data: queryResultBundle, error: queryError } =
    useGetQueryResultBundle(queryBundleRequest)

  useEffect(() => {
    const getData = () => {
      try {
        const idIndex = getFieldIndex(idColumnName, queryResultBundle)
        const nameColumnIndex = getFieldIndex(nameColumnName, queryResultBundle)
        const typeColumnIndex = getFieldIndex(typeColumnName, queryResultBundle)
        const descriptionColumnIndex = getFieldIndex(
          descriptionColumnName,
          queryResultBundle,
        )
        const dateColumnIndex = getFieldIndex(dateColumnName, queryResultBundle)
        const toolURLColumnIndex = getFieldIndex(
          toolURLColumnName,
          queryResultBundle,
        )
        const tools: ToolData[] =
          queryResultBundle?.queryResult!.queryResults.rows.map(row => {
            if (row.values.some(value => value === null)) {
              console.warn('Row has null value(s)')
            }
            // Cast to string, assuming there are no null values
            const values = row.values as string[]
            return {
              name: values[nameColumnIndex],
              description: values[descriptionColumnIndex],
              type: values[typeColumnIndex],
              id: values[idIndex],
              date: dateColumnName ? values[dateColumnIndex] : undefined,
              url: toolURLColumnName ? values[toolURLColumnIndex] : undefined,
            }
          }) ?? []
        if (queryError) {
          throw queryError
        }
        if (tools.length === 0) {
          // wait for data to load
          return
        }

        setTools(tools)
      } catch (error) {
        console.error(error)
        setError(error)
      }
    }
    getData()
  }, [
    entityId,
    accessToken,
    queryResultBundle,
    queryError,
    idColumnName,
    nameColumnName,
    typeColumnName,
    descriptionColumnName,
    dateColumnName,
  ])
  return error ? (
    <ErrorBanner error={error}></ErrorBanner>
  ) : (
    <div className="FeaturedToolList">
      {tools.map(tool => {
        return (
          <FeaturedToolCard
            key={tool.id}
            name={tool.name}
            type={tool.type}
            description={tool.description}
            id={tool.id}
            date={tool.date}
            toolDetailPageURL={toolDetailPageURL}
            url={tool.url}
          />
        )
      })}
    </div>
  )
}

export default FeaturedToolsList
