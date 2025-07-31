import { GCInfo } from '@/config/GrandChallengeResources'

type D4DProps = {
  org_id: string
}

function getContent(org_id: string, suffix: string): string {
  const content: string = GCInfo[org_id]?.[suffix]
  return content ?? ''
}

export function D4D(props: D4DProps) {
  const { org_id } = props
  const rawHtml = getContent(org_id, 'd4dHtml')
  const rawCss = getContent(org_id, 'd4dCss')

  if (!rawHtml) {
    return <div>No datasheet available for organization: {org_id}</div>
  }

  const org_class = org_id.replace(/:/, '_')
  return (
    <div className={`${org_class}_d4d`}>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </div>
  )

  // Combine CSS and HTML
  const styledContent = rawCss ? `<style>${rawCss}</style>${rawHtml}` : rawHtml

  return (
    <div
      className={`${org_id}_d4d`}
      dangerouslySetInnerHTML={{ __html: styledContent }}
    />
  )
}
