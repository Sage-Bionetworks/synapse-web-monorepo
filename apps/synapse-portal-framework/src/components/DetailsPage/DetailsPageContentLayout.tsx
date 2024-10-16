import React from 'react'
import { scrollToWithOffset } from '../../utils'
import {
  DetailsPageSectionLayout,
  DetailsPageSectionLayoutType,
} from './DetailsPageSectionLayout'

export type DetailsPageContentType = DetailsPageSectionLayoutType[]

export const handleMenuClick = (id: string) => {
  window.history.pushState(null, '', `#${id}`)
  // An ID may have spaces, so use [id="..."] style selector
  // #... will treat spaces as a query for descendants
  const query = `[id="${id}"]`
  const wrapper = document.querySelector<HTMLElement>(query)
  if (wrapper) {
    scrollToWithOffset(wrapper)
  } else {
    console.error(`Could not find id ${id} in document (query: ${query})`)
  }
}

export function DetailsPageContent(props: {
  content: DetailsPageContentType
  hideMenu?: boolean
}) {
  const { content } = props
  const menuOptions = content.filter(option => option.title && option.id)
  const hideMenu = props.hideMenu ?? menuOptions.length <= 1

  return (
    <div className={'tab-content-group'}>
      {!hideMenu && (
        <div className="button-container">
          {content
            .filter(option => option.title && option.id)
            .map(option => (
              <button
                key={option.id}
                className={'menu-row-button SRC-primary-background-color-hover'}
                onClick={() => handleMenuClick(option.id)}
              >
                {option.title}
              </button>
            ))}
        </div>
      )}
      <div className={'component-container'}>
        {content.map(option => (
          <DetailsPageSectionLayout key={option.id} {...option} />
        ))}
      </div>
    </div>
  )
}
