import { Box, Container, ContainerProps } from '@mui/material'
import { PropsWithChildren } from 'react'
import { HelpPopover } from 'synapse-react-client/components/HelpPopover/HelpPopover'

type SectionLayoutProps = PropsWithChildren<{
  ContainerProps?: ContainerProps
  title?: string
  /** JSX override for rendering. 'title' (string) is still required for hash-based scroll */
  titleNode?: React.ReactNode
  centerTitle?: boolean
  subtitle?: React.ReactNode
  helpText?: string
}>

export function SectionLayout(props: SectionLayoutProps) {
  const {
    ContainerProps,
    title,
    titleNode,
    centerTitle,
    subtitle,
    helpText,
    children,
  } = props
  return (
    <Container
      maxWidth={'lg'}
      {...ContainerProps}
      id={title}
      className={
        ContainerProps?.className
          ? `scroll-target ${ContainerProps.className}`
          : 'scroll-target'
      }
      sx={{
        overflow: 'auto',
        ...ContainerProps?.sx,
      }}
    >
      {title && (
        <h2 className={`title ${centerTitle ? 'center-title' : ''}`}>
          {titleNode ?? title}
          {helpText && (
            <Box sx={{ fontSize: '14px', display: 'inline-block', ml: '5px' }}>
              <HelpPopover markdownText={helpText} />
            </Box>
          )}
        </h2>
      )}
      {subtitle && (
        <p className={`${centerTitle ? 'center-title' : ''}`}>{subtitle}</p>
      )}
      {children}
    </Container>
  )
}
