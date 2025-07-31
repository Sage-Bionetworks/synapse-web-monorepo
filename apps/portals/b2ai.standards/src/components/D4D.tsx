import { GCInfo } from '@/config/GrandChallengeResources'

type D4DProps = {
  org_id: string
}

export function D4D(props: D4DProps) {
  const { org_id } = props
  const html = GCInfo[org_id]?.d4dHtml ?? ''

  if (!html) {
    return <div>No datasheet available for organization: {org_id}</div>
  }

  return (
    <div className="d4d-styles">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
