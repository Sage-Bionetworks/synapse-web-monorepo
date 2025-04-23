import {
  Box,
  Container,
  ContainerProps,
  Typography,
  Button,
  Link,
} from '@mui/material'
import { PropsWithChildren, ReactNode } from 'react'

type AMPALSResearchPageLayoutProps = PropsWithChildren<{
  ContainerProps?: ContainerProps
  title?: string
  sidebarTitle?: string
  sidebarContent?: ReactNode
}>

const AMPALSResearchPageLayout = (props: AMPALSResearchPageLayoutProps) => {
  const { ContainerProps, children, sidebarTitle, sidebarContent } = props
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
          backgroundColor: '#2360A6',
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
          Resources
        </Typography>
        <Button></Button>
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
              color: '#353A3F',
            }}
          >
            {sidebarTitle}
          </Typography>
          {sidebarContent}
        </Box>
        <Box
          sx={{
            marginTop: '0px',
            width: '720px',
            height: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Container>
  )
}

export default AMPALSResearchPageLayout
