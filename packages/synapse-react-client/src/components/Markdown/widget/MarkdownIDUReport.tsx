import IDUReport from '../../IDUReport/IDUReport'

export type MarkdownIDUReportProps = {
  accessRestrictionId: string
}

export default function MarkdownIDUReport(props: MarkdownIDUReportProps) {
  const { accessRestrictionId } = props
  return <IDUReport accessRequirementId={accessRestrictionId} />
}
