import { Popover, Typography, Stack, Link, Skeleton } from '@mui/material'
import { PopoverProps } from '@mui/material/Popover'
import { convertDoiToLink } from '@/utils/functions/RegularExpressions'
import { ReactElement, ReactNode } from 'react'
import styles from './ProjectInfo.module.scss'
import CopyToClipboardString from '../CopyToClipboardString/CopyToClipboardString'
import ProjectDataAvailability from '../ProjectStorage'

export type ProjectInfoPopOverContentProps = {
  doi?: string
  projectStorageLocation?: string
  projectId: string
  isLoading?: boolean
}

type Property = {
  title: string
  value?: ReactElement | ReactNode
}

export type ProjectInfoProps = ProjectInfoPopOverContentProps &
  Pick<PopoverProps, 'anchorEl' | 'open' | 'id' | 'onClose'>

const propertyRow = ({ title, value }: Property, isLoading?: boolean) => (
  <>
    {value && (
      <Stack className={styles.propertyRow}>
        <Typography className={styles.propertyTitle}>{title}</Typography>
        {isLoading ? (
          <Skeleton variant="text" width={'100%'} />
        ) : (
          <Typography className={styles.propertyValue}>{value}</Typography>
        )}
      </Stack>
    )}
  </>
)

export default function ProjectInfoPopoverContent(props: ProjectInfoProps) {
  const {
    anchorEl,
    open,
    id,
    onClose,
    doi,
    projectStorageLocation,
    projectId,
    isLoading,
  } = props

  const doiLink = convertDoiToLink(doi ?? '')

  const properties = [
    {
      title: 'DOI',
      value: doi ? <Link href={doiLink}>{doi}</Link> : undefined,
    },
    {
      title: 'SynId',
      value: (
        <CopyToClipboardString
          value={projectId}
          icon="fileCopy"
          sx={{ svg: { aspectRatio: '1/1' } }}
        />
      ),
    },
    {
      title: 'Project Storage Location',
      value: projectStorageLocation,
    },
  ]

  const visibleProperties = properties.filter(
    p => isLoading || (p.value !== undefined && p.value !== ''),
  )

  return (
    <Popover
      aria-label="Citation options"
      role="dialog"
      id={id}
      elevation={9}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      slotProps={{
        paper: {
          square: true,
          sx: theme => ({
            width: '240px',
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
              maxWidth: '100%',
              maxHeight: '100%',
              top: '0 !important',
              left: '0 !important',
              bottom: '0 !important',
            },
          }),
        },
      }}
    >
      <Stack
        sx={{
          gap: '16px',
          padding: '20px',
        }}
      >
        <Typography className={styles.propertyContainerTitle}>
          Project Information
        </Typography>
        <ProjectDataAvailability
          projectId={projectId}
          showBottomDivider={true}
        />
        <Stack className={styles.propertiesContainer}>
          {visibleProperties.map(property => propertyRow(property, isLoading))}
        </Stack>
      </Stack>
    </Popover>
  )
}
