import React from 'react'
import { ReactComponent as DoubleQuotes } from '@/assets/icons/DoubleQuotes.svg'
import { Button, Skeleton } from '@mui/material'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { useGetEntityBundle } from '@/synapse-queries/entity'
import { DoiObjectType } from '@sage-bionetworks/synapse-client'
import CitationPopoverContent from '../CitationPopover/CitationPopoverContent'
import { useRef, useState } from 'react'
import { useGetEntityDoiAssociation } from './EntityCitationUtils'
import DropdownSelect from '../DropdownSelect'

export type EntityCitationProps = {
  projectId: string
  entityId: string
  versionNumber?: number
}

const EntityCitation = ({
  projectId,
  entityId,
  versionNumber,
}: EntityCitationProps): React.ReactNode => {
  const { data: bundle, isLoading: isEntityLoading } = useGetEntityBundle(
    entityId,
    versionNumber,
  )
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [selectedDoi, setSelectedDoi] = useState<string | undefined>(undefined)
  const [citationAnchorEl, setCitationAnchorEl] = useState<HTMLElement | null>(
    null,
  )
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined,
  )
  const citationButtonRef = useRef<HTMLDivElement>(null)

  const open = Boolean(anchorEl)
  const id = open ? 'cite-as-popover' : undefined

  const entityDoiAssociation = useGetEntityDoiAssociation(
    entityId,
    versionNumber,
    projectId,
    bundle,
  )

  // Get DOI association for the project
  // Projects are not versioned
  const { data: projectDoiAssociation, isLoading: isProjectLoading } =
    useGetDOIAssociation(
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

  const options: string[] = ['Cite this Project', 'Cite only this page']

  if (!projectDoiAssociation && !entityDoiAssociation) {
    return null
  }

  if (isEntityLoading || isProjectLoading) {
    return (
      <Skeleton
        sx={{
          width: { xs: '100%', sm: '140px' },
          height: '45px',
        }}
      />
    )
  }

  return (
    <>
      {isProjectAndEntityDoi ? (
        <DropdownSelect
          disabled={isEntityLoading && isProjectLoading}
          options={options}
          anchorRef={citationButtonRef}
          sx={{
            width: { xs: '100%', sm: 'initial' },
          }}
          buttonText="Cite as..."
          variant="outlined"
          buttonGroupAriaLabel="Citation options"
          selectedIndex={selectedIndex}
          setSelectedIndex={(index: number) => {
            setSelectedIndex(index)
            const selected =
              index === 0
                ? projectDoiAssociation?.doiUri
                : entityDoiAssociation?.doiUri
            if (selected) {
              setSelectedDoi(selected)
              setCitationAnchorEl(citationButtonRef.current)
            }
          }}
        />
      ) : (
        <Button
          onClick={handleButtonClick}
          disabled={isEntityLoading && isProjectLoading}
          sx={{
            width: { xs: '100%', sm: 'initial' },
          }}
          variant="outlined"
          startIcon={<DoubleQuotes width={18} height={18} />}
        >
          {buttonText}
        </Button>
      )}
      {popover}
    </>
  )
}

export default EntityCitation
