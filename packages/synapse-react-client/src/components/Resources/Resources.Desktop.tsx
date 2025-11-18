import { Data } from './Resources'
import { useState } from 'react'
import MarkdownSynapse from '../Markdown/MarkdownSynapse/MarkdownSynapse'

export type ResourcesDesktopProps = {
  data: Data
}

export default function ResourcesDesktop({ data }: ResourcesDesktopProps) {
  const [index, setIndex] = useState(0)
  return (
    <div className="control-container">
      <div className="button-container">
        {data?.map((el, curIndex) => {
          return (
            <button
              className={index === curIndex ? 'isSelected' : ''}
              onClick={() => setIndex(curIndex)}
              key={el.name}
            >
              {el.name}
            </button>
          )
        })}
        {/* 
            This button keeps the border line in the button container running from top to bottom,
            it doesn't have any functionality.
          */}
        <button className="gap-fill" />
      </div>
      <div className="content-container">
        {data?.map((el, curIndex) => {
          const { ownerId, wikiId } = el
          return (
            <span key={ownerId} className={index === curIndex ? '' : 'hide'}>
              <MarkdownSynapse ownerId={ownerId} wikiId={wikiId} />
            </span>
          )
        })}
      </div>
    </div>
  )
}
