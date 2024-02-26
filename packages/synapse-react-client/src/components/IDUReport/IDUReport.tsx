import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useGetApprovedSubmissionInfoInfinite } from '../../synapse-queries'
import { SubmissionInfo } from '@sage-bionetworks/synapse-types'
import {
  LoadingSubmissionInfoCard,
  SubmissionInfoCard,
} from './IDUReportSubmissionInfo'

export type IDUReportProps = {
  accessRequirementId: string
}

export const IDUReport: React.FunctionComponent<IDUReportProps> = (
  props: IDUReportProps,
) => {
  const { accessRequirementId } = props
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()

  const {
    data,
    status,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetApprovedSubmissionInfoInfinite(accessRequirementId, {
    throwOnError: true,
  })
  useEffect(() => {
    if (
      status === 'success' &&
      !isFetchingNextPage &&
      hasNextPage &&
      fetchNextPage &&
      inView
    ) {
      fetchNextPage()
    }
  }, [status, hasNextPage, isFetchingNextPage, fetchNextPage, inView])

  const allRows = data?.pages.flatMap(page => page.results) ?? []

  return (
    <>
      {allRows.length > 0 && (
        <div className="IDUReport">
          {allRows.map((item: SubmissionInfo) => {
            return (
              <React.Fragment key={JSON.stringify(item)}>
                <SubmissionInfoCard info={item} />
                <hr />
              </React.Fragment>
            )
          })}
          {/* To trigger loading the next page */}
          <div ref={ref} />
        </div>
      )}
      {(isLoading || isFetchingNextPage) && (
        <>
          <LoadingSubmissionInfoCard />
          <LoadingSubmissionInfoCard />
        </>
      )}
    </>
  )
}
export default IDUReport
