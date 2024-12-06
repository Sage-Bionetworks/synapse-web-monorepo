import { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { useInView } from 'react-intersection-observer'
import { ProjectHeader } from '@sage-bionetworks/synapse-types'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useGetUserProjectsInfinite } from '../../synapse-queries/user/useGetUserProjects'
import { GetProjectsParameters } from '@sage-bionetworks/synapse-types'
import { SkeletonTable } from '../Skeleton/SkeletonTable'

export type UserProjectsProps = {
  userId: string
}

export default function UserProjects({ userId }: UserProjectsProps) {
  const handleError = useErrorHandler()
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()
  const getProjectsParameters: GetProjectsParameters = {}
  const {
    data,
    status,
    isFetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isError,
    error: newError,
  } = useGetUserProjectsInfinite(userId, getProjectsParameters)

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
          {allRows.map((item: ProjectHeader) => {
            if (item) {
              // another option would be to use an EntityLink
              return (
                <p key={`user-project-list-item-${item.id}`}>
                  <a
                    target="_self"
                    rel="noopener noreferrer"
                    href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${item.id}`}
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
