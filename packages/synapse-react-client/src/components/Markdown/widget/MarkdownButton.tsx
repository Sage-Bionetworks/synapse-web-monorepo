import WideButton from '@/components/styled/WideButton'

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
  const { align = '', highlight: _highlight = '' } = widgetParamsMapped
  const highlight = _highlight === 'true'
  const alignLowerCase = align.toLowerCase()
  if (alignLowerCase === 'left') {
    buttonClasses += 'floatleft '
  }
  if (alignLowerCase === 'right') {
    buttonClasses += 'floatright '
  }
  const buttonIsCenterAligned = alignLowerCase === 'center'
  const buttonColor = highlight ? 'secondary' : 'neutral'
  const button = (
    <WideButton
      href={widgetParamsMapped.url}
      className={buttonClasses}
      variant="contained"
      color={buttonColor}
      sx={{
        '&:hover': {
          backgroundColor: highlight ? undefined : 'secondary.main',
          color: 'white',
        },
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
