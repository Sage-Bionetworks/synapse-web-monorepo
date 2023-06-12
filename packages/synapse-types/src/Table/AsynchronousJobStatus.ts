export type AsynchJobState = 'PROCESSING' | 'FAILED' | 'COMPLETE'

export type AsynchronousJobStatus<TRequest, TResponse> = {
  jobState: AsynchJobState // The job's state can be one of the following enumerations
  jobCanceling: boolean // Was the job being asked to cancel.
  requestBody: TRequest // The body of an Asynchronous job request.
  responseBody?: TResponse // The body of an Asynchronous job response.
  etag: string // The etag of the status will change whenever the status changes.
  jobId: string // The ID if the job issued when this job request was issued.
  startedByUserId: number // The ID of the user that started the job
  startedOn: string // The date-time when the status of this table last changed to PROCESSING.
  changedOn: string // The date-time when the status of this table last changed.
  progressMessage?: string // The current message of the progress tracker.
  progressCurrent?: number // The progress current value indicates how much progress has been made. For example: If progressTotal = 100; and progressCurrent = 50; then the work is 50% complete.
  progressTotal?: number // The progress total indicates the total amount of work to complete. For example: If progressTotal = 100; and progressCurrent = 50; then the work is 50% complete.
  exception?: string // The exception that needs to be thrown
  errorMessage?: string // When processing fails, this is a one line error message.
  errorDetails?: string // When processing fails, this is the full stack trace of the error.
  runtimeMS: number // The number of milliseconds from the start to completion of this job.
}
