import { GCInfo } from '@/config/GrandChallengeResources'

type D4DProps = {
  org_id: string
}
export function D4D(props: D4DProps) {
  const { org_id } = props
  const rawHtml = GCInfo[org_id]?.d4dHtml ?? ''
  if (!rawHtml) {
    return (
      <div className="d4d-html-style">
        No datasheet available for organization: {org_id}
      </div>
    )
  }

  // const reactReadyHtml = rawHtml.replace(/\bclass=/g, 'className=')

  return (
    <div
      className="d4d-html-style"
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  )
}

// const quickTransform = (html) => html.replace(/\bclass=/g, 'className=').replace('class="container"', 'className="d4d-html-style"');
