import React, { useState } from 'react'
import {
  generateQueryFilterFromSearchParams,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '../utils/functions/sqlFunctions'
import { SynapseClient, SynapseConstants } from '../utils'
import {
  FacetColumnRequest,
  QueryBundleRequest,
  QueryResultBundle,
} from '../utils/synapseTypes/Table'
import { ColumnTypeEnum } from '../utils/synapseTypes'
import UserCardList from './UserCardList'
import { LARGE_USER_CARD, UserCardSize } from '../utils/SynapseConstants'
import { Button } from 'react-bootstrap'
import { useSynapseContext } from '../utils/SynapseContext'
import { LoadingUserCardMedium } from './UserCardMedium'
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'

const STORED_UID_KEY = 'sage_rotate_uids'
const DEFAULT_DISPLAY_COUNT = 3

export type UserCardListRotateProps = {
  sql: string
  count: number
  useQueryResultUserData?: boolean
  size?: UserCardSize
  summaryLink?: string
  summaryLinkText?: string
  selectedFacets?: FacetColumnRequest[]
  sqlOperator?: SQLOperator
  searchParams?: Record<string, string>
}

export const getDisplayIds = (
  ids: string[] = [],
  count: number = DEFAULT_DISPLAY_COUNT,
  storageUidKey: string,
) => {
  let storedIds: string[] = []
  let newIds: string[] = []
  const storedIdsStr = localStorage.getItem(storageUidKey)
  if (storedIdsStr != null) {
    storedIds = JSON.parse(storedIdsStr)
  }
  if (!storedIds.length) {
    // no stuff in storage
    newIds = ids.slice(0, count)
    localStorage.setItem(storageUidKey, JSON.stringify(newIds))
    return newIds
  } else {
    // has stuff in storage
    const filtered = ids.filter(item => !storedIds.includes(item))
    if (filtered.length >= count) {
      newIds = filtered.slice(0, count)
      localStorage.setItem(
        storageUidKey,
        JSON.stringify(storedIds.concat(newIds)),
      )
      return newIds
    } else {
      localStorage.removeItem(storageUidKey)
      const part = ids.slice(0, count - filtered.length)
      localStorage.setItem(storageUidKey, JSON.stringify(part))
      return filtered.concat(part)
    }
  }
}

const UserCardListRotate: React.FunctionComponent<UserCardListRotateProps> = ({
  sql,
  count,
  useQueryResultUserData = false,
  size = LARGE_USER_CARD,
  summaryLink,
  summaryLinkText,
  selectedFacets,
  searchParams,
  sqlOperator,
}) => {
  const { accessToken } = useSynapseContext()
  const [userIds, setUserIds] = useState<string[]>([])
  const [queryData, setQueryData] = useState<QueryResultBundle>()
  const [isLoading, setIsLoading] = useState<boolean>()
  let mounted = true
  const storageUidKey = `${STORED_UID_KEY}-${sql}-${JSON.stringify(
    selectedFacets,
  )}`
  useDeepCompareEffectNoCheck(() => {
    const fetchData = async function () {
      setIsLoading(true)
      const additionalFilters = generateQueryFilterFromSearchParams(
        searchParams,
        sqlOperator,
      )
      const entityId = parseEntityIdFromSqlStatement(sql)
      const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
      const request: QueryBundleRequest = {
        partMask,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId,
        query: {
          sql,
          additionalFilters,
          selectedFacets,
        },
      }

      const queryResultBundle = await SynapseClient.getFullQueryTableResults(
        request,
        accessToken,
      )
      const { queryResult } = queryResultBundle
      if (queryResult?.queryResults.rows) {
        // find the column that has the USER_ID in it.
        const ownerIdColumnIndex = queryResult.queryResults.headers.findIndex(
          el => el.columnType === ColumnTypeEnum.USERID,
        )
        const ids: string[] = queryResult.queryResults.rows
          .map(d => d.values[ownerIdColumnIndex])
          .filter((id): id is string => id !== null)
        if (mounted) {
          const newIds = getDisplayIds(ids, count, storageUidKey)
          setUserIds(newIds)
          if (useQueryResultUserData) {
            setQueryData(queryResultBundle)
          }
          setIsLoading(false)
        }
      } else {
        console.log('UserCardListRotate: Error getting data')
      }
    }
    fetchData()

    return () => {
      mounted = false
    }
  }, [sql, selectedFacets, count, accessToken, searchParams, sqlOperator])

  return (
    <div className="UserCardListRotate bootstrap-4-backport">
      {isLoading && <LoadingUserCardMedium />}
      {!isLoading && userIds.length === 0 && (
        <p className="font-italic">No one was found.</p>
      )}
      {!isLoading && userIds.length > 0 && (
        <UserCardList list={userIds} size={size} data={queryData} />
      )}
      {summaryLink && summaryLinkText && (
        <div className="UserCardListRotate__summary">
          <Button variant="secondary" size="lg" href={summaryLink}>
            {summaryLinkText}
          </Button>
        </div>
      )}
    </div>
  )
}

export default UserCardListRotate
