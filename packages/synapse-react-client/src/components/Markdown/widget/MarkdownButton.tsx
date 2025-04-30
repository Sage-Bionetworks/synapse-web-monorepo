import WideButton from '@/components/styled/WideButton'
import { Link as RouterLink } from 'react-router'

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
  const isExternalLink =
    widgetParamsMapped.url?.startsWith('http://') ||
    widgetParamsMapped.url?.startsWith('https://')
  const button = (
    <WideButton
      className={buttonClasses}
      variant="contained"
      color={buttonColor}
      {...(isExternalLink
        ? {
            href: widgetParamsMapped.url,
            target: '_blank',
            rel: 'noopener noreferrer',
            component: 'a',
          }
        : {
            to: widgetParamsMapped.url,
            component: RouterLink,
          })}
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
