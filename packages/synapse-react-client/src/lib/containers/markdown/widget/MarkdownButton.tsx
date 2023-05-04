import React from 'react'
import WideButton from '../../../components/styled/WideButton'

export type ButtonLinkWidgetParams = {
  align?: string
  highlight?: string
  url?: string
  text?: string
}

export default function MarkdownButton(
  widgetParamsMapped: ButtonLinkWidgetParams,
) {
  let buttonClasses = ''
  const { align = '', highlight = '' } = widgetParamsMapped
  const alignLowerCase = align.toLowerCase()
  if (alignLowerCase === 'left') {
    buttonClasses += 'floatleft '
  }
  if (alignLowerCase === 'right') {
    buttonClasses += 'floatright '
  }
  const buttonIsCenterAligned = alignLowerCase === 'center'
  const buttonVariant = highlight === 'true' ? 'secondary' : 'inherit'
  const button = (
    <WideButton
      href={widgetParamsMapped.url}
      className={buttonClasses}
      variant="contained"
      color={buttonVariant}
      sx={{
        '&:hover': { backgroundColor: 'secondary.main', color: 'white' },
        ...(!buttonIsCenterAligned &&
          widgetParamsMapped.url && {
            margin: '20px 20px 20px 0px',
          }),
      }}
    >
      {widgetParamsMapped.text}
    </WideButton>
  )

  return buttonIsCenterAligned ? (
    <div style={{ textAlign: 'center' }}>{button}</div>
  ) : (
    <span>{button}</span>
  )
}
