import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { useInView } from 'react-intersection-observer'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useGetUserTeamsInfinite } from '../../synapse-queries/user/useGetUserTeams'
import { Team } from '@sage-bionetworks/synapse-types'
import { SkeletonTable } from '../Skeleton/SkeletonTable'

export type UserTeamsProps = {
  userId: string
}

export default function UserTeams({ userId }: UserTeamsProps) {
  const handleError = useErrorHandler()
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()
  const {
    data,
    status,
    isFetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isError,
    error: newError,
  } = useGetUserTeamsInfinite(userId)

  useEffect(() => {
    if (isError && newError) {
      handleError(newError)
    }
  }, [isError, newError, handleError])

  useEffect(() => {
    if (
      status === 'success' &&
      !isFetching &&
      hasNextPage &&
      fetchNextPage &&
      inView
    ) {
      fetchNextPage()
    }
  }, [status, isFetching, hasNextPage, fetchNextPage, inView])

  const allRows = data?.pages.flatMap(page => page.results) ?? []

  return (
    <>
      {allRows.length > 0 && (
        <>
          {allRows.map((item: Team) => {
            if (item) {
              // another option would be to use an EntityLink
              return (
                <p key={`user-team-list-item-${item.id}`}>
                  <a
                    target="_self"
                    rel="noopener noreferrer"
                    href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Team:${item.id}`}
                  >
                    {item.name}
                  </a>
                </p>
              )
            } else return false
          })}
          {/* To trigger loading the next page */}
          <div ref={ref} />
        </>
      )}
      {!isFetching && allRows.length == 0 && <div>Empty</div>}
      {isLoading && <SkeletonTable numRows={5} numCols={1} />}
    </>
  )
}
