import React, { Fragment } from 'react'

export type BreadcrumbItem = {
  name: string
  isCurrent: boolean
  action?: () => void
}

export type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  maxItemCount?: number
}

export function Breadcrumbs({
  items,
  maxItemCount = 4,
}: BreadcrumbsProps): React.JSX.Element {
  const truncateBreadcrumbs = items.length > maxItemCount
  if (truncateBreadcrumbs) {
    items = items.slice(-maxItemCount)
  }
  return (
    <div className="Breadcrumbs">
      {items.length > 0 && <span>You are in: </span>}
      {truncateBreadcrumbs && (
        <>
          <button className="BreadcrumbItem Current">...</button>
          <span>&gt;</span>
        </>
      )}
      {items.map((item, index) => (
        <Fragment key={index}>
          <button
            className={`BreadcrumbItem ${item.isCurrent ? 'Current' : ''}`}
            key={index}
            onClick={event => {
              event.preventDefault()
              if (item.action) {
                item.action()
              }
            }}
          >
            {item.name}
          </button>
          {index !== items.length - 1 && <span>&gt;</span>}
        </Fragment>
      ))}
    </div>
  )
}
