import { Button } from '@mui/material'
import { useState } from 'react'
import ProjectInfoPopover from './ProjectInfoPopover'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { DoiObjectType } from '@sage-bionetworks/synapse-client'
import useGetEntityMetadata from '@/utils/hooks/useGetEntityMetadata'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'

const PROJECT_INFO_BUTTON_PADDING = '10px 12px'

export type ProjectInfoProps = {
  projectId: string
}

export default function ProjectInfo(props: ProjectInfoProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const { projectId } = props

  const {
    data: projectDoiAssociation,
    isLoading: projectDoiAssociationIsLoading,
  } = useGetDOIAssociation({
    id: projectId,
    version: undefined,
    type: DoiObjectType.ENTITY,
  })

  const { uploadDestinationString, isLoading: entityMetadataIsLoading } =
    useGetEntityMetadata(projectId)

  const isLoading = projectDoiAssociationIsLoading || entityMetadataIsLoading

  const open = Boolean(anchorEl)
  const id = open ? 'project-info-popover' : undefined

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const popover = (
    <ProjectInfoPopover
      id={id}
      projectId={projectId}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      doi={projectDoiAssociation?.doiUri}
      projectStorageLocation={uploadDestinationString}
      isLoading={isLoading}
    />
  )

  return (
    <>
      <Button
        aria-describedby={id}
        onClick={handleButtonClick}
        startIcon={<ArticleOutlinedIcon />}
        sx={{
          width: { xs: '100%', sm: 'initial' },
          borderRadius: '6px',
          fontWeight: 540,
          padding: PROJECT_INFO_BUTTON_PADDING,
        }}
        variant="outlined"
      >
        Project Info
      </Button>
      {popover}
    </>
  )
}
