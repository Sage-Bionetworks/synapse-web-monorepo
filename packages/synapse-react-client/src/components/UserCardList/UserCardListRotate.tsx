import LargeButton from '@/components/styled/LargeButton'
import SynapseClient from '@/synapse-client'
import { KeyFactory } from '@/synapse-queries/KeyFactory'
import { tableQueryUseQueryDefaults } from '@/synapse-queries/entity/useGetQueryResultBundle'
import { getUserProfilesWithProfilePicAttachedQueryOptions } from '@/synapse-queries/user/useUserBundle'
import { SynapseConstants } from '@/utils'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '@/utils/functions/SqlFunctions'
import { LARGE_USER_CARD, UserCardSize } from '@/utils/SynapseConstants'
import {
  ColumnTypeEnum,
  FacetColumnRequest,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { LoadingUserCardMedium } from '../UserCard/UserCardMedium'
import UserCardList from './UserCardList'

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
  additionalFiltersSessionStorageKey?: string
}

export const getDisplayIds = (
  ids: string[] = [],
  count: number = DEFAULT_DISPLAY_COUNT,
  storageUidKey: string,
): string[] => {
  // Guard against SSR / Node.js environments where localStorage is unavailable
  if (typeof localStorage === 'undefined') {
    return ids.slice(0, count)
  }
  const storedIdsJson = localStorage.getItem(storageUidKey)
  const seenIds: string[] = storedIdsJson
    ? (JSON.parse(storedIdsJson) as string[])
    : []

  if (!seenIds.length) {
    const selected = ids.slice(0, count)
    localStorage.setItem(storageUidKey, JSON.stringify(selected))
    return selected
  }

  const seenSet = new Set(seenIds)
  const unseenIds = ids.filter(id => !seenSet.has(id))

  if (unseenIds.length >= count) {
    const selected = unseenIds.slice(0, count)
    localStorage.setItem(
      storageUidKey,
      JSON.stringify([...seenIds, ...selected]),
    )
    return selected
  }

  // Not enough unseen IDs — reset and cycle back to the beginning
  const fromStart = ids.slice(0, count - unseenIds.length)
  localStorage.setItem(storageUidKey, JSON.stringify(fromStart))
  return [...unseenIds, ...fromStart]
}

function buildRequest(
  sql: string,
  options?: {
    selectedFacets?: FacetColumnRequest[]
    searchParams?: Record<string, string>
    sqlOperator?: SQLOperator
    additionalFiltersSessionStorageKey?: string
  },
): QueryBundleRequest {
  const entityId = parseEntityIdFromSqlStatement(sql)
  const additionalFilters = getAdditionalFilters(
    options?.searchParams,
    options?.sqlOperator,
    options?.additionalFiltersSessionStorageKey,
  )
  return {
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    query: {
      sql,
      additionalFilters,
      selectedFacets: options?.selectedFacets,
    },
  }
}

function extractUserIdsFromBundle(
  bundle: QueryResultBundle | undefined,
): string[] {
  if (!bundle?.queryResult?.queryResults.rows) return []
  const ownerIdColumnIndex = bundle.queryResult.queryResults.headers.findIndex(
    el => el.columnType === ColumnTypeEnum.USERID,
  )
  if (ownerIdColumnIndex === -1) return []
  return bundle.queryResult.queryResults.rows
    .map(d => d.values[ownerIdColumnIndex])
    .filter((id): id is string => id !== null)
}

export function UserCardListRotate({
  sql,
  count,
  useQueryResultUserData = false,
  size = LARGE_USER_CARD,
  summaryLink,
  summaryLinkText,
  selectedFacets,
  searchParams,
  sqlOperator,
  additionalFiltersSessionStorageKey,
}: UserCardListRotateProps) {
  const { accessToken, keyFactory } = useSynapseContext()
  const storageUidKey = `${STORED_UID_KEY}-${sql}-${JSON.stringify(
    selectedFacets,
  )}`

  const request = buildRequest(sql, {
    selectedFacets,
    searchParams,
    sqlOperator,
    additionalFiltersSessionStorageKey,
  })

  const { data: queryResultBundle, isPending } = useQuery({
    ...tableQueryUseQueryDefaults,
    queryKey: keyFactory.getFullTableQueryResultQueryKey(request, false),
    queryFn: () => SynapseClient.getFullQueryTableResults(request, accessToken),
  })

  const [userIdsToShow, setUserIdsToShow] = useState<string[]>([])
  const allIds = extractUserIdsFromBundle(queryResultBundle)

  if (userIdsToShow.length === 0 && allIds.length > 0) {
    setUserIdsToShow(allIds.slice(0, count))
  }

  // Not ideal to use an effect, but this ensures this is isomorphic for SSG
  // while ensuring a new set of IDs is shown after client rendering takes over.
  const hasMounted = useRef(false)
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true
      setUserIdsToShow(getDisplayIds(allIds, count, storageUidKey))
    }
  }, [allIds, count, storageUidKey])

  return (
    <div className="UserCardListRotate">
      {isPending && <LoadingUserCardMedium />}
      {!isPending && userIdsToShow.length === 0 && (
        <p className="font-italic">No one was found.</p>
      )}
      {!isPending && userIdsToShow.length > 0 && (
        <UserCardList
          list={userIdsToShow}
          size={size}
          rowSet={
            useQueryResultUserData
              ? queryResultBundle?.queryResult?.queryResults
              : undefined
          }
        />
      )}
      {summaryLink && summaryLinkText && (
        <div className="UserCardListRotate__summary">
          <LargeButton color="secondary" variant="contained" href={summaryLink}>
            {summaryLinkText}
          </LargeButton>
        </div>
      )}
    </div>
  )
}

export default UserCardListRotate

/**
 * Prefetches the UserCardListRotate table query and the user profiles it
 * references into a QueryClient for use with HydrationBoundary. Uses anonymous
 * access; warm-caches for unauthenticated users.
 */
export async function prefetchUserCardListRotate(
  queryClient: QueryClient,
  sql: string,
  options?: {
    selectedFacets?: FacetColumnRequest[]
    searchParams?: Record<string, string>
    sqlOperator?: SQLOperator
    additionalFiltersSessionStorageKey?: string
    count?: number
  },
): Promise<void> {
  const keyFactory = new KeyFactory(undefined)
  const request = buildRequest(sql, options)
  const queryKey = keyFactory.getFullTableQueryResultQueryKey(request, false)
  await queryClient.prefetchQuery({
    ...tableQueryUseQueryDefaults,
    queryKey,
    queryFn: () => SynapseClient.getFullQueryTableResults(request, undefined),
  })

  const queryResultBundle =
    queryClient.getQueryData<QueryResultBundle>(queryKey)
  // During SSR localStorage is unavailable, so getDisplayIds falls back to
  // slice(0, count). Match that here so prefetched profiles cover exactly the
  // IDs the first render will request.
  const principalIds = extractUserIdsFromBundle(queryResultBundle).slice(
    0,
    options?.count ?? DEFAULT_DISPLAY_COUNT,
  )
  if (principalIds.length > 0) {
    await queryClient.prefetchQuery(
      getUserProfilesWithProfilePicAttachedQueryOptions(principalIds, {
        keyFactory,
      }),
    )
  }
}
