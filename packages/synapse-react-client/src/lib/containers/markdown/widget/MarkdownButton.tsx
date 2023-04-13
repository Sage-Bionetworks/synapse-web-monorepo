import React from 'react'
import { Button } from 'react-bootstrap'

export type ButtonLinkWidgetParams = {
  align?: string
  highlight?: string
  url?: string
  text?: string
}

export default function MarkdownButton(
  widgetParamsMapped: ButtonLinkWidgetParams,
) {
  let buttonClasses = 'btn-wide '
  const { align = '', highlight = '' } = widgetParamsMapped
  const alignLowerCase = align.toLowerCase()
  if (alignLowerCase === 'left') {
    buttonClasses += 'floatLeft '
  }
  if (alignLowerCase === 'right') {
    buttonClasses += 'floatright '
  }
  const buttonVariant = highlight === 'true' ? 'secondary' : 'light-secondary'
  if (alignLowerCase === 'center') {
    return (
      <div className="bootstrap-4-backport" style={{ textAlign: 'center' }}>
        <Button
          href={widgetParamsMapped.url}
          className={buttonClasses}
          variant={buttonVariant}
        >
          {widgetParamsMapped.text}
        </Button>
      </div>
    )
  }
  return (
    <span className="bootstrap-4-backport">
      <Button
        href={widgetParamsMapped.url}
        className={buttonClasses}
        variant={buttonVariant}
      >
        {widgetParamsMapped.text}
      </Button>
    </span>
  )
}
