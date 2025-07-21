import { GCInfo } from '@/config/GrandChallengeResources'

type D4DProps = {
  org_id: string
}

export function D4D(props: D4DProps) {
  const { org_id } = props
  const rawHtml = GCInfo[org_id]?.d4dHtml ?? ''
  const rawCss = GCInfo[org_id]?.d4dCss ?? ''

  if (!rawHtml) {
    return <div>No datasheet available for organization: {org_id}</div>
  }

  // Combine CSS and HTML
  const styledContent = rawCss ? `<style>${rawCss}</style>${rawHtml}` : rawHtml

  return <div dangerouslySetInnerHTML={{ __html: styledContent }} />
}
