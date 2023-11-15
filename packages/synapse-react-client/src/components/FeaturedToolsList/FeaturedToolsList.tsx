import { SynapseConstants } from '../../utils'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import React, { useState, useEffect } from 'react'
import { FeaturedToolCard } from './FeaturedToolCard'
import { ErrorBanner } from '../error/ErrorBanner'
import { useSynapseContext } from '../../utils/context/SynapseContext'

export type FeaturedToolsListProps = {
  entityId: string
  toolDetailPageURL: string
  idColumnName?: string
  nameColumnName?: string
  descriptionColumnName?: string
  typeColumnName?: string
  dateColumnName?: string
}

type ToolData = {
  id: string
  name: string
  description: string
  type: string
  date: string
}

/**
 * Display a set of FeaturedToolCards (driven by a Table/View). Driven by the following annotations/column names:
 * 'id', 'name', 'type', and 'description'.
 */
export const FeaturedToolsList: React.FunctionComponent<
  FeaturedToolsListProps
> = ({
  entityId,
  toolDetailPageURL,
  idColumnName = 'id',
  nameColumnName = 'name',
  descriptionColumnName = 'description',
  typeColumnName = 'type',
  dateColumnName = 'dateAdded',
}) => {
  const sql = `SELECT "${idColumnName}", "${nameColumnName}", "${descriptionColumnName}", "${typeColumnName}", "${dateColumnName}" FROM ${entityId} ORDER BY ${dateColumnName} DESC LIMIT 3`
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
              date: values[dateColumnIndex],
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
          />
        )
      })}
    </div>
  )
}

export default FeaturedToolsList
