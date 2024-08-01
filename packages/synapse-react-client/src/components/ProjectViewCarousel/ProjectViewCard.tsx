import React from 'react'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'

export type ProjectCardProps = {
  isLoading?: boolean
  projectName: string
  projectDescription: string
  synId: string
  image?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export function ProjectViewCard(props: ProjectCardProps) {
  const { projectName, projectDescription, synId, image, ...domProps } = props
  return (
    <Paper
      {...domProps}
      className={`ProjectViewCard ${domProps.className ?? ''}`}
      sx={{
        m: 1.5,
        wordWrap: 'break-word',
        width: '410px',
        height: '325px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {image ? (
        image
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '25%',
            backgroundColor: 'primary.300',
          }}
        />
      )}
      <Stack
        justifyContent={'space-between'}
        sx={{
          flexGrow: 1,
          m: 2,
        }}
      >
        <div>
          <Typography
            variant={'body1'}
            sx={{
              fontWeight: 'bold',
            }}
          >
            {projectName}
          </Typography>
          <Typography
            variant={'smallText1'}
            sx={{
              lineHeight: '21px',
              mt: 1.5,
            }}
          >
            {projectDescription}
          </Typography>
        </div>
        <Button
          sx={{
            width: '165px',
            mb: 1,
            minHeight: '38px',
            height: '46px',
          }}
          variant="contained"
          color="primary"
          onClick={() =>
            window.open(
              `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${synId}`,
              '_blank',
              'noopener',
            )
          }
        >
          View Project
        </Button>
      </Stack>
    </Paper>
  )
}
