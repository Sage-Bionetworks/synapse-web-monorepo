import React from 'react'
import { Data } from './Resources'
import MarkdownSynapse from '../../../containers/markdown/MarkdownSynapse'
import ExpandableContent from '../ExpandableContent'

export type ResourcesMobileProps = {
  data: Data
}

export default function ResourcesMobile({ data }: ResourcesMobileProps) {
  return (
    <div className="Resources_Mobile">
      {data.map(({ name, ownerId, wikiId }) => {
        let title = <> {name} </>
        let markdown = <MarkdownSynapse ownerId={ownerId} wikiId={wikiId} />
        return <ExpandableContent title={title} content={markdown} />
      })}
    </div>
  )
}
