import React from 'react'
import { Box, Container, ContainerProps, Typography } from '@mui/material'
import { PropsWithChildren, ReactNode } from 'react'

type AMPALSResearchPageLayoutProps = PropsWithChildren<{
  ContainerProps?: ContainerProps
  headerTitle?: string
  headerImageURL?: string
  sidebarTitle?: string
  sidebarContent?: ReactNode
}>

const AMPALSResearchPageLayout = (
  props: AMPALSResearchPageLayoutProps,
): React.ReactNode => {
  const {
    ContainerProps,
    children,
    headerTitle,
    headerImageURL,
    sidebarTitle,
    sidebarContent,
  } = props
  return (
    <Container
      {...ContainerProps}
      disableGutters={true}
      maxWidth={false}
      sx={{
        overflow: 'auto',
        ...ContainerProps?.sx,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '180px',
          backgroundColor: '#0655B0',
          backgroundImage: `url(${headerImageURL})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginLeft: '80px',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: '48px',
          }}
        >
          {headerTitle}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '80px',
          padding: '60px 80px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '360px',
            gap: '20px',
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '24px',
              color: 'grey-900',
            }}
          >
            {sidebarTitle}
          </Typography>
          {sidebarContent}
        </Box>
        <Box
          sx={{
            marginTop: '0px',
            maxWidth: '720px',
            height: 'auto',
            '&h1.first-child': {
              marginTop: '0px', // remove first child h1 padding-top
            },
            '&h2.first-child': {
              marginTop: '0px', // remove first child h2 padding-top
            },
            '&h3.first-child': {
              marginTop: '0px', // remove first child h3 padding-top
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Container>
  )
}

export default AMPALSResearchPageLayout
