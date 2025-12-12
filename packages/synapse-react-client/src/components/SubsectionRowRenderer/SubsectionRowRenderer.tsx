import SynapseClient from '@/synapse-client'
import { SynapseConstants } from '@/utils'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '@/utils/functions/SqlFunctions'
import { Typography } from '@mui/material'
import {
  ColumnType,
  ColumnTypeEnum,
  QueryBundleRequest,
  RowSet,
} from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'
import { ColumnSpecifiedLink } from '../CardContainerLogic'
import MarkdownSynapse from '../Markdown/MarkdownSynapse/MarkdownSynapse'
import { SkeletonTable } from '../Skeleton/SkeletonTable'

export type FriendlyValuesMap = {
  [index: string]: string
}

export type SubsectionRowRendererProps = {
  sql: string
  isMarkdown?: boolean
  sqlOperator?: SQLOperator
  searchParams?: Record<string, string>
  columnLink?: ColumnSpecifiedLink
  friendlyValuesMap?: FriendlyValuesMap
  columnNameIsSectionTitle?: boolean
  limit?: number
  additionalFiltersSessionStorageKey?: string
}

const LIST_COLUMN_TYPES: ColumnType[] = [
  ColumnTypeEnum.BOOLEAN_LIST,
  ColumnTypeEnum.DATE_LIST,
  ColumnTypeEnum.ENTITYID_LIST,
  ColumnTypeEnum.INTEGER_LIST,
  ColumnTypeEnum.STRING_LIST,
]

function SubsectionRowRenderer({
  sql,
  searchParams,
  sqlOperator,
  isMarkdown = false,
  columnLink,
  friendlyValuesMap,
  columnNameIsSectionTitle = false,
  limit,
  additionalFiltersSessionStorageKey,
}: SubsectionRowRendererProps) {
  const { accessToken } = useSynapseContext()
  const [rowSet, setRowSet] = useState<RowSet>()
  const [isLoading, setIsLoading] = useState<boolean>()
  useDeepCompareEffectNoCheck(() => {
    const fetchData = async function () {
      setIsLoading(true)
      const entityId = parseEntityIdFromSqlStatement(sql)
      const additionalFilters = getAdditionalFilters(
        searchParams,
        sqlOperator,
        additionalFiltersSessionStorageKey,
      )
      const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
      const request: QueryBundleRequest = {
        partMask,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId,
        query: {
          sql,
          limit,
          additionalFilters,
        },
      }

      const queryResultBundle = await SynapseClient.getQueryTableResults(
        request,
        accessToken,
      )
      setIsLoading(false)
      const queryResults = queryResultBundle?.queryResult?.queryResults
      if (queryResults) {
        setRowSet(queryResults)
      } else {
        console.log('SubsectionRowRenderer: Error getting data')
      }
    }
    fetchData()
  }, [sql, accessToken, searchParams, sqlOperator])

  /**
   * If a "friendly values map" was provided, then use the friendly value if any of the raw values match.
   * Otherwise, just return the raw value.
   * @param rawValue
   * @returns
   */
  const getFriendlyValue = (rawValue: string) => {
    if (!friendlyValuesMap) {
      return rawValue
    }
    const friendlyValue = friendlyValuesMap[rawValue]
    return friendlyValue ? friendlyValue : rawValue
  }
  return (
    <div className="SubsectionRowRenderer">
      {isLoading && <SkeletonTable numRows={2} numCols={1} />}
      {!isLoading &&
        rowSet &&
        rowSet.rows.length > 0 &&
        rowSet.headers.map((selectColumn, colIndex) => {
          // If a link column was provided (that contain URLs), do not create a page sub-section for that column.
          if (columnLink && selectColumn.name == columnLink.linkColumnName) {
            return <></>
          }
          return (
            <div
              key={`header-${colIndex}`}
              className="SubsectionRowRenderer__item"
              role="table"
            >
              <Typography
                variant={
                  columnNameIsSectionTitle ? 'sectionTitle' : 'subsectionHeader'
                }
                role="heading"
                style={{ paddingTop: '10px', marginBottom: '5px' }}
              >
                {selectColumn.name}
              </Typography>
              {columnNameIsSectionTitle && <hr />}
              <div role="rowgroup">
                {rowSet.rows.map((row, rowIndex) => {
                  const cellValue = row.values[colIndex]
                  // If the cell value is undefined, then go to the next row.
                  if (!cellValue) {
                    return <></>
                  }
                  let values
                  // If this cell value represents a multi-value (the select column type is a *_LIST column), then parse it and break it apart
                  if (LIST_COLUMN_TYPES.includes(selectColumn.columnType)) {
                    const jsonData: string[] = JSON.parse(cellValue)
                    values = jsonData.map((val: string, index: number) => {
                      return (
                        <div
                          key={`row-${rowIndex}-col-${colIndex}-multi-value`}
                          className="SubsectionRowRenderer__item__value"
                          role="row"
                        >
                          {isMarkdown && (
                            <MarkdownSynapse markdown={getFriendlyValue(val)} />
                          )}
                          {!isMarkdown && <p>{getFriendlyValue(val)}</p>}
                        </div>
                      )
                    })
                  } else {
                    // If this cell value represents a single value
                    let renderedValue
                    const friendlyCellValue = getFriendlyValue(cellValue)
                    if (isMarkdown) {
                      renderedValue = (
                        <MarkdownSynapse markdown={friendlyCellValue} />
                      )
                    } else if (
                      columnLink &&
                      columnLink.matchColumnName == selectColumn.name
                    ) {
                      // If a link column was provided, then we need to create links (the url is in this other column)
                      const urlColumnIndex = rowSet.headers.findIndex(
                        col => col.name == columnLink.linkColumnName,
                      )
                      const values = row.values as string[]
                      if (values.some(value => value === null)) {
                        console.warn(
                          'Row has null value(s) when no nulls expected',
                        )
                      }

                      if (urlColumnIndex > -1) {
                        renderedValue = (
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={values[urlColumnIndex]}
                          >
                            {friendlyCellValue}
                          </a>
                        )
                      } else {
                        renderedValue = <p>{friendlyCellValue}</p>
                      }
                    } else {
                      renderedValue = <p>{friendlyCellValue}</p>
                    }
                    values = (
                      <div
                        key={`row-${rowIndex}-col-${colIndex}-single`}
                        className="SubsectionRowRenderer__item__value"
                        role="row"
                      >
                        {renderedValue}
                      </div>
                    )
                  }
                  return values
                })}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default SubsectionRowRenderer
