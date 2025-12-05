import { useGetApprovedSubmissionInfoInfinite } from '@/synapse-queries'
import { SubmissionInfo } from '@sage-bionetworks/synapse-types'
import { Fragment, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  LoadingSubmissionInfoCard,
  SubmissionInfoCard,
} from './IDUReportSubmissionInfo'

export type IDUReportProps = {
  accessRequirementId: string
}

export function IDUReport(props: IDUReportProps): React.ReactNode {
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
              <Fragment key={JSON.stringify(item)}>
                <SubmissionInfoCard info={item} />
                <hr />
              </Fragment>
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
