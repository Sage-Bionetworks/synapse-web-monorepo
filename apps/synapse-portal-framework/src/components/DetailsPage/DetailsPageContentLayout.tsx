import React from 'react'
import {
  DetailsPageSectionLayout,
  DetailsPageSectionLayoutType,
} from './DetailsPageSectionLayout'
import { handleMenuClick } from './SideNavMenu'

export type DetailsPageContentType = DetailsPageSectionLayoutType[]

export function DetailsPageContent(props: { content: DetailsPageContentType }) {
  const { content } = props
  return (
    <div className={'tab-content-group'}>
      <div className="button-container">
        {content
          .filter(option => option.title && option.id)
          .map(option => (
            <button
              key={option.id}
              className={'menu-row-button'}
              onClick={() => handleMenuClick(option.id)}
            >
              {option.title}
            </button>
          ))}
      </div>
      <div className={'component-container'}>
        {content.map(option => (
          <DetailsPageSectionLayout key={option.id} {...option} />
        ))}
      </div>
    </div>
  )
}
