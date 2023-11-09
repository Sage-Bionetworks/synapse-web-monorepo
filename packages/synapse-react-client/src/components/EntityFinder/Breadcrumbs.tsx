import React from 'react'

export type BreadcrumbItem = {
  name: string
  isCurrent: boolean
  action?: () => void
}

export type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  maxItemCount?: number
}

export const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({
  items,
  maxItemCount = 4,
}: BreadcrumbsProps) => {
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
        <React.Fragment key={index}>
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
        </React.Fragment>
      ))}
    </div>
  )
}
