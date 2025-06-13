import { ReactComponent as DoubleQuotes } from '@/assets/icons/DoubleQuotes.svg'
import { Box, Button, MenuItem, Popover, Typography } from '@mui/material'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { useGetEntityBundle } from '@/synapse-queries/entity'
import { DoiObjectType } from '@sage-bionetworks/synapse-client'
import CitationPopoverContent from '../CitationPopover/CitationPopoverContent'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useEffect, useState } from 'react'
import { useGetEntityDoiAssociation } from './EntityCitationUtils'

export type EntityCitationProps = {
  projectId: string
  entityId?: string
  versionNumber?: number
}

const EntityCitation = ({
  projectId,
  entityId,
  versionNumber,
}: EntityCitationProps) => {
  const { data: bundle } = useGetEntityBundle(entityId!)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [selectedDoi, setSelectedDoi] = useState<string | undefined>(undefined)
  const [citationAnchorEl, setCitationAnchorEl] = useState<HTMLElement | null>(
    null,
  )

  const open = Boolean(anchorEl)
  const id = open ? 'cite-as-popover' : undefined

  useEffect(() => {
    // Clear selection when switching entities or tabs
    setSelectedDoi(undefined)
    setCitationAnchorEl(null)
    setAnchorEl(null)
  }, [projectId, entityId, versionNumber])

  const entityDoiAssociation = useGetEntityDoiAssociation(
    entityId,
    versionNumber,
    projectId,
    bundle,
  )

  // Get DOI association for the project
  // Projects are not versioned
  const { data: projectDoiAssociation } = useGetDOIAssociation(
    {
      id: projectId,
      version: undefined,
      type: DoiObjectType.ENTITY,
    },
    {
      enabled: !!projectId,
    },
  )

  // If both project and entity have DOIs, we show the dropdown variant
  const isProjectAndEntityDoi = projectDoiAssociation && entityDoiAssociation

  function getButtonText() {
    if (isProjectAndEntityDoi) {
      return 'Cite as...'
    } else if (entityDoiAssociation && !projectDoiAssociation) {
      return 'Cite page'
    } else if (!entityDoiAssociation && projectDoiAssociation) {
      return 'Cite project'
    }
    return ''
  }

  const buttonText = getButtonText()

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (entityDoiAssociation && !projectDoiAssociation) {
      setSelectedDoi(entityDoiAssociation.doiUri)
      setCitationAnchorEl(event.currentTarget)
    } else if (!entityDoiAssociation && projectDoiAssociation) {
      setSelectedDoi(projectDoiAssociation.doiUri)
      setCitationAnchorEl(event.currentTarget)
    } else {
      // If both project and entity doi exist, show dropdown
      setAnchorEl(event.currentTarget)
    }
  }

  const handleSelectCitation = (doi: string) => {
    setSelectedDoi(doi)
    setAnchorEl(null)
    setCitationAnchorEl(anchorEl)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const popover = (
    <CitationPopoverContent
      doi={selectedDoi}
      anchorEl={citationAnchorEl}
      open={!!citationAnchorEl && !!selectedDoi}
      id={id}
      onClose={() => {
        setCitationAnchorEl(null)
        setSelectedDoi(undefined)
      }}
    />
  )

  const dropdown = (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      PaperProps={{
        sx: {
          padding: '10px 0',
          borderRadius: '0px',
          boxShadow: '0px 8px 24px 0px rgba(53, 58, 63, 0.15)',
        },
      }}
    >
      <MenuItem
        value={projectDoiAssociation?.doiUri}
        onClick={() => handleSelectCitation(projectDoiAssociation?.doiUri!)}
      >
        Cite this Project
      </MenuItem>
      <MenuItem
        value={entityDoiAssociation?.doiUri}
        onClick={() => handleSelectCitation(entityDoiAssociation?.doiUri!)}
      >
        Cite only this page
      </MenuItem>
    </Popover>
  )

  return (
    <>
      {(projectDoiAssociation || entityDoiAssociation) && (
        <>
          <Button
            onClick={handleButtonClick}
            sx={{
              '& .MuiButton-endIcon': {
                margin: 0,
              },
              borderColor: '#FFF !important',
              color: '#FFF !important',
              borderRadius: '3px',
              padding: '6px 16px',
              '&:hover': {
                backgroundColor: '#304b66',
              },
              ...(isProjectAndEntityDoi && { paddingRight: '0px' }),
            }}
            variant="outlined"
            startIcon={<DoubleQuotes width={18} height={18} />}
            endIcon={
              isProjectAndEntityDoi && (
                <Box
                  sx={{
                    borderLeft: '1px solid white',
                    marginTop: '-8px',
                    marginBottom: '-8px',
                    display: 'flex',
                    marginLeft: '16px',
                    padding: '5px',
                  }}
                >
                  <ExpandMoreIcon
                    className="user-expand"
                    width={18}
                    height={18}
                  />
                </Box>
              )
            }
          >
            <Typography
              variant="label"
              sx={{ lineHeight: '20px', fontSize: '16px' }}
            >
              {buttonText}
            </Typography>
          </Button>
          {dropdown}
          {popover}
        </>
      )}
    </>
  )
}

export default EntityCitation
