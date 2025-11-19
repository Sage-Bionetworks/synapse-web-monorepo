import { Data } from './Resources'
import MarkdownSynapse from '../Markdown/MarkdownSynapse/MarkdownSynapse'
import ExpandableContent from '../home_page/ExpandableContent'

export type ResourcesMobileProps = {
  data: Data
}

export default function ResourcesMobile({ data }: ResourcesMobileProps) {
  return (
    <div className="Resources_Mobile">
      {data.map(({ name, ownerId, wikiId }) => {
        const title = <> {name} </>
        const markdown = <MarkdownSynapse ownerId={ownerId} wikiId={wikiId} />
        return <ExpandableContent key={name} title={title} content={markdown} />
      })}
    </div>
  )
}
