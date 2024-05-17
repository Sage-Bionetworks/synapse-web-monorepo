import React, { useState, useEffect } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import SortIcon from '../../assets/icons/Sort'
import { Direction, EntityHeader } from '@sage-bionetworks/synapse-types'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import {
  useGetFavorites,
  useRemoveFavorite,
} from '../../synapse-queries/user/useFavorites'
import IconSvg from '../IconSvg/IconSvg'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
} from '../../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { EntityTypeIcon } from '../EntityIcon'
import { Form } from 'react-bootstrap'
import { ErrorBanner } from '../error/ErrorBanner'
import { Tooltip } from '@mui/material'

// Local types used for client-side sorting
export type SortField = 'name' | 'type'
export type SortDirection = 'ASC' | 'DESC'
export type Sort = {
  field: SortField
  direction: SortDirection
}

export default function FavoritesPage() {
  const { accessToken } = useSynapseContext()
  const [sort, setSort] = useState<Sort | undefined>(undefined)
  const [searchText, setSearchText] = useState<string>('')
  const [sortedData, setSortedData] = useState<EntityHeader[] | undefined>(
    undefined,
  )
  const [error, setError] = useState<Error>()
  const { data, isFetching, isError, error: newError } = useGetFavorites()

  useEffect(() => {
    if (isError && newError) {
      setError(newError)
    }
  }, [isError, newError])

  useEffect(() => {
    if (!accessToken) {
      setError(new Error('Please sign in to access your favorites.'))
    } else {
      setError(undefined)
    }
  }, [accessToken])

  const filterEntityHeaders = (searchTerm: string, array: EntityHeader[]) => {
    const searchTermLowercase = searchTerm.toLowerCase()
    return array.filter(
      item => item.name.toLowerCase().indexOf(searchTermLowercase) >= 0,
    )
  }

  useEffect(() => {
    if (data) {
      let newData = [...data.results]
      if (sort) {
        newData.sort((a, b) => {
          if (sort.direction == 'DESC') {
            return a[sort.field].toLowerCase() > b[sort.field].toLowerCase()
              ? 1
              : -1
          } else {
            return a[sort.field].toLowerCase() < b[sort.field].toLowerCase()
              ? 1
              : -1
          }
        })
      }
      if (searchText) {
        newData = filterEntityHeaders(searchText, newData)
      }
      setSortedData(newData)
    }
  }, [data, searchText, sort])

  const { mutate: removeFavorite } = useRemoveFavorite()

  const showInteractiveSortIcon = (columnSortBy: SortField) => {
    return (
      setSort && (
        <SortIcon
          role="button"
          style={{ height: '20px' }}
          active={sort?.field === columnSortBy}
          direction={
            sort?.field === columnSortBy
              ? sort.direction === 'DESC'
                ? Direction.DESC
                : Direction.ASC
              : Direction.DESC
          }
          onClick={() => {
            const direction =
              columnSortBy === sort?.field
                ? sort.direction === 'ASC'
                  ? 'DESC'
                  : 'ASC'
                : 'DESC'
            setSort({
              field: columnSortBy,
              direction,
            })
          }}
        />
      )
    )
  }

  if (error) {
    return <ErrorBanner error={error} />
  }

  return (
    <div className="FavoritesPage">
      <div className="searchInputWithIcon">
        <IconSvg icon="searchOutlined" />
        <Form.Control
          type="search"
          placeholder="Favorite Name"
          value={searchText}
          onChange={event => {
            setSearchText(event.target.value)
          }}
        />
      </div>

      {sortedData && sortedData.length > 0 && (
        <div className="bootstrap-4-backport">
          <ReactBootstrap.Table
            striped={true}
            responsive={true}
            className="FavoritesTable"
          >
            <thead>
              <tr>
                {/* first column for the favorite icon */}
                <th />
                <th>
                  Name
                  <span>{showInteractiveSortIcon('name')}</span>
                </th>
                <th>
                  Type
                  <span>{showInteractiveSortIcon('type')}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((item: EntityHeader) => {
                if (item) {
                  const entityType = convertToEntityType(item.type)
                  return (
                    <tr key={item.id}>
                      <td>
                        <Tooltip
                          title="Click the star to remove this item from your favorites"
                          enterNextDelay={300}
                          placement="right"
                        >
                          <a
                            onClick={() => {
                              removeFavorite(item.id)
                            }}
                            className="ignoreLink"
                          >
                            <IconSvg icon="fav" sx={{ color: '#EDC766' }} />
                          </a>
                        </Tooltip>
                      </td>
                      <td>
                        <a
                          rel="noopener noreferrer"
                          href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${item.id}`}
                        >
                          {item.name}
                        </a>
                      </td>
                      <td>
                        <EntityTypeIcon
                          type={entityType}
                          style={{ marginRight: '5px' }}
                        />
                        {entityTypeToFriendlyName(entityType)}
                      </td>
                    </tr>
                  )
                } else return false
              })}
            </tbody>
          </ReactBootstrap.Table>
        </div>
      )}
      {isFetching && (
        <div className="placeholder">
          <SynapseSpinner size={30} />
        </div>
      )}
    </div>
  )
}
