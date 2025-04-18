import { scrollToWithOffset } from '@/utils'
import { Box, Container, ContainerProps } from '@mui/material'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { HelpPopover } from 'synapse-react-client/components/HelpPopover/HelpPopover'

type SectionLayoutProps = PropsWithChildren<{
  ContainerProps?: ContainerProps
  title?: string
  centerTitle?: boolean
  subtitle?: string
  helpText?: string
}>

export function SectionLayout(props: SectionLayoutProps) {
  const { ContainerProps, title, centerTitle, subtitle, helpText, children } =
    props
  const { hash, pathname } = useLocation()

  const scrollToRef = useRef(null)
  const scrollToJsx =
    title && hash && hash === `#${encodeURI(title)}` ? (
      <span ref={scrollToRef} />
    ) : (
      <></>
    )
  // Scroll to top if there's no hash in the URL
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  // this delay is here to improve the location of the element, since it's position depends on the layout of other components on the page (that also need to load)
  setTimeout(() => {
    if (scrollToRef.current) {
      scrollToWithOffset(scrollToRef.current)
    }
  }, 500)

  return (
    <Container
      maxWidth={'lg'}
      {...ContainerProps}
      sx={{ overflow: 'auto', ...ContainerProps?.sx }}
    >
      {scrollToJsx}
      {title && (
        <h2 className={`title ${centerTitle ? 'center-title' : ''}`}>
          {title}
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
