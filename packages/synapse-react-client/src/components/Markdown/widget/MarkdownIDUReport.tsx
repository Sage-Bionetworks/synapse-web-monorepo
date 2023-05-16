import React from 'react'
import IDUReport from '../../IDUReport'

export type MarkdownIDUReportProps = {
  accessRestrictionId: string
}

export default function MarkdownIDUReport(props: MarkdownIDUReportProps) {
  const { accessRestrictionId } = props
  return <IDUReport accessRequirementId={accessRestrictionId} />
}
