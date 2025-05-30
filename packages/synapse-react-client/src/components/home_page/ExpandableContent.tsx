import { ReactNode, useState } from 'react'
import IconSvg from '../IconSvg/IconSvg'

export type ExpandableContentProps = {
  title: ReactNode
  content: ReactNode
}

export default function ExpandableContent({
  title,
  content,
}: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="ExpandableContent">
      <div className={'ExpandableContent__button__container'}>
        <button
          className={isExpanded ? 'expanded' : ''}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{title}</span>
          <span className="SRC-primary-action-color">
            <IconSvg icon={isExpanded ? 'close' : 'add'} />
          </span>
        </button>
      </div>
      <div
        className={`ExpandableContent__content__container ${
          isExpanded ? '' : 'hide'
        }`}
      >
        {content}
      </div>
    </div>
  )
}
