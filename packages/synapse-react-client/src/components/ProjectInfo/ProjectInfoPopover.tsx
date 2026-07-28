import { Popover, Typography, Stack, Link, Skeleton } from '@mui/material'
import { PopoverProps } from '@mui/material/Popover'
import { convertDoiToLink } from '@/utils/functions/RegularExpressions'
import { ReactElement, ReactNode } from 'react'
import styles from './ProjectInfo.module.scss'
import CopyToClipboardString from '../CopyToClipboardString/CopyToClipboardString'
import ProjectDataAvailability from '../ProjectStorage'

const POPOVER_BORDER_COLOR = '#B7BFC9'

export type ProjectInfoPopoverProps = {
  doi?: string
  projectStorageLocation?: string
  projectId: string
  isLoading?: boolean
}

type Property = {
  title: string
  value?: ReactElement | ReactNode
}

export type ProjectInfoProps = ProjectInfoPopoverProps &
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

export default function ProjectInfoPopover(props: ProjectInfoProps) {
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
      aria-label="Project information"
      role="dialog"
      id={id}
      elevation={3}
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
          sx: {
            width: '240px',
            position: 'relative',
            mt: '6px',
            borderRadius: '3px',
            border: `1px solid ${POPOVER_BORDER_COLOR}`,
          },
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
