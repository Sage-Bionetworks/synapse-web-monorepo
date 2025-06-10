// import { ReactComponent as DoubleQuotes } from '@/assets/icons/DoubleQuotes.svg'
// import { Box, Button, MenuItem, Popover, Typography } from '@mui/material'
// import { isVersionableEntity } from '@/utils/functions/EntityTypeUtils'
// import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
// import { useGetEntityBundle } from '@/synapse-queries/entity'
// import { DoiObjectType } from '@sage-bionetworks/synapse-client'
// import CitationPopoverContent from '../CitationPopover/CitationPopoverContent'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import { useState } from 'react'

// type EntityCitationProps = {
//   projectId: string
//   entityId?: string
//   versionNumber?: number
// }

// const EntityCitation = ({
//   projectId,
//   entityId,
//   versionNumber,
// }: EntityCitationProps) => {
//   const { data: bundle } = useGetEntityBundle(entityId!)
//   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
//   const [selectedDoi, setSelectedDoi] = useState<string | undefined>(undefined)
//   const [citationAnchorEl, setCitationAnchorEl] = useState<HTMLElement | null>(
//     null,
//   )

//   const open = Boolean(anchorEl)
//   const id = open ? 'cite-as-popover' : undefined

//   // Get DOI association for the current entity
//   // If this is the latest entity version, is versionable, and has no doi, show the "versionless" DOI if it exists.
//   const useFallbackVersionlessDOI =
//     bundle &&
//     !bundle.doiAssociation &&
//     isVersionableEntity(bundle.entity) &&
//     bundle.entity.isLatestVersion

//   // Try fetching the versioned DOI first
//   const { data: versionedDoiAssociation } = useGetDOIAssociation(
//     {
//       id: entityId!,
//       version: versionNumber,
//       type: DoiObjectType.ENTITY,
//     },
//     {
//       enabled: !!entityId && !!versionNumber,
//     },
//   )

//   // If the versioned DOI is not found, fallback to the versionless DOI so we can still show a DOI if it exists.
//   // We do not want to show the versionless DOI if the entity is not the latest version as it would be misleading.
//   const { data: versionlessDoiAssociation } = useGetDOIAssociation(
//     {
//       id: entityId!,
//       version: undefined,
//       type: DoiObjectType.ENTITY,
//     },
//     {
//       enabled: useFallbackVersionlessDOI,
//     },
//   )

//   // Get DOI association for the project
//   // Projects are not versioned
//   const { data: projectDoiAssociation } = useGetDOIAssociation(
//     {
//       id: projectId!,
//       version: undefined,
//       type: DoiObjectType.ENTITY, // Not sure what PORTAL_RESOURCE is but that didn't work here
//     },
//     {
//       enabled: !!projectId,
//     },
//   )

//   // We ideally want to show the versioned DOI but if it doesn't exist, fallback to the versionless DOI
//   const entityDoiAssociation =
//     versionedDoiAssociation ?? versionlessDoiAssociation

//   console.log('bundle', bundle)
//   console.log('versionNumber', versionNumber)
//   console.log('useFallbackVersionlessDOI', useFallbackVersionlessDOI)
//   console.log('versionedDoiAssociation', versionedDoiAssociation) // syn127.1
//   console.log('versionlessDoi', versionlessDoiAssociation) // syn127, this is null if the entity is versioned
//   console.log('entityDoiAssociation', entityDoiAssociation)
//   console.log('projectDoiAssociation', projectDoiAssociation) // syn64042437, this is the project DOI

//   console.log(entityDoiAssociation?.doiUri)
//   console.log(projectDoiAssociation?.doiUri)

//   function getButtonText() {
//     if (projectDoiAssociation && entityDoiAssociation) {
//       return 'Cite as...'
//     } else if (entityDoiAssociation && !projectDoiAssociation) {
//       return 'Cite page'
//     } else if (!entityDoiAssociation && projectDoiAssociation) {
//       return 'Cite project'
//     }
//     return ''
//   }

//   const buttonText = getButtonText()

//   const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     if (entityDoiAssociation && !projectDoiAssociation) {
//       setSelectedDoi(entityDoiAssociation.doiUri!)
//       setCitationAnchorEl(event.currentTarget)
//     } else if (!entityDoiAssociation && projectDoiAssociation) {
//       setSelectedDoi(projectDoiAssociation.doiUri!)
//       setCitationAnchorEl(event.currentTarget)
//     } else {
//       // If both project and entity doi exist, show dropdown
//       setAnchorEl(event.currentTarget)
//     }
//   }

//   const handleSelectCitation = (doi: string) => {
//     setSelectedDoi(doi)
//     setAnchorEl(null)
//     setCitationAnchorEl(anchorEl)
//   }

//   const handleClose = () => {
//     setAnchorEl(null)
//   }

//   const popover = (
//     <CitationPopoverContent
//       doi={selectedDoi}
//       anchorEl={citationAnchorEl}
//       open={!!citationAnchorEl && !!selectedDoi}
//       id={id}
//       onClose={() => {
//         setCitationAnchorEl(null)
//         setSelectedDoi(undefined)
//       }}
//     />
//   )

//   const dropdown = (
//     <Popover
//       open={open}
//       anchorEl={anchorEl}
//       onClose={handleClose}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'left',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'center',
//       }}
//       PaperProps={{
//         sx: {
//           padding: '10px 0',
//           borderRadius: '0px',
//           boxShadow: '0px 8px 24px 0px rgba(53, 58, 63, 0.15)',
//         },
//       }}
//     >
//       <MenuItem
//         value={projectDoiAssociation?.doiUri}
//         onClick={() => handleSelectCitation(projectDoiAssociation?.doiUri!)}
//       >
//         Cite this Project
//       </MenuItem>
//       <MenuItem
//         value={entityDoiAssociation?.doiUri}
//         onClick={() => handleSelectCitation(entityDoiAssociation?.doiUri!)}
//       >
//         Cite only this page
//       </MenuItem>
//     </Popover>
//   )

//   const isProjectAndEntityDoi = projectDoiAssociation && entityDoiAssociation

//   return (
//     <div>
//       <Button
//         onClick={handleButtonClick}
//         sx={{
//           '& .MuiButton-endIcon': {
//             margin: 0,
//           },
//           borderColor: '#FFF !important',
//           color: '#FFF !important',
//           borderRadius: '0px',
//           '&:hover': {
//             backgroundColor: '#304b66',
//           },
//           ...(isProjectAndEntityDoi && { padding: '0 0 0 16px' }),
//         }}
//         variant="outlined"
//         startIcon={<DoubleQuotes width={18} height={18} />}
//         endIcon={
//           isProjectAndEntityDoi && (
//             <Box
//               sx={{
//                 borderLeft: '2px solid white',
//                 display: 'flex',
//                 padding: '6px',
//                 marginLeft: '16px',
//               }}
//             >
//               <ExpandMoreIcon className="user-expand" />
//             </Box>
//           )
//         }
//       >
//         <Typography variant="label" sx={{ lineHeight: '20px' }}>
//           {buttonText}
//         </Typography>
//       </Button>
//       {projectDoiAssociation && entityDoiAssociation ? (
//         <>{dropdown}</>
//       ) : (
//         <>{popover}</>
//       )}
//       {popover}
//     </div>
//   )
// }

// export default EntityCitation

// test

// import { ReactComponent as DoubleQuotes } from '@/assets/icons/DoubleQuotes.svg'
// import { Box, Button, MenuItem, Popover, Typography } from '@mui/material'
// import { isVersionableEntity } from '@/utils/functions/EntityTypeUtils'
// import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
// import { useGetEntityBundle } from '@/synapse-queries/entity'
// import { DoiObjectType } from '@sage-bionetworks/synapse-client'
// import CitationPopoverContent from '../CitationPopover/CitationPopoverContent'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import { useState } from 'react'
// import useCombinedDOIAssociations from './EntityCitationUtils'

// type EntityCitationProps = {
//   projectId: string
//   entityId?: string
//   versionNumber?: number
// }

// const EntityCitation = ({
//   projectId,
//   entityId,
//   versionNumber,
// }: EntityCitationProps) => {
//   // const { data: bundle } = useGetEntityBundle(entityId!)
//   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
//   const [selectedDoi, setSelectedDoi] = useState<string | undefined>(undefined)
//   const [citationAnchorEl, setCitationAnchorEl] = useState<HTMLElement | null>(
//     null,
//   )

//   const open = Boolean(anchorEl)
//   const id = open ? 'cite-as-popover' : undefined

//   const { entityDoiAssociation, projectDoiAssociation } =
//     useCombinedDOIAssociations(entityId, versionNumber, projectId)

//   // console.log('bundle', bundle)
//   // console.log('versionNumber', versionNumber)
//   // console.log('useFallbackVersionlessDOI', useFallbackVersionlessDOI)
//   // console.log('versionedDoiAssociation', versionedDoiAssociation) // syn127.1
//   // console.log('versionlessDoi', versionlessDoiAssociation) // syn127, this is null if the entity is versioned
//   console.log('entityDoiAssociation', entityDoiAssociation)
//   console.log('projectDoiAssociation', projectDoiAssociation) // syn64042437, this is the project DOI

//   // console.log(entityDoiAssociation?.doiUri)
//   // console.log(projectDoiAssociation?.doiUri)

//   function getButtonText() {
//     if (projectDoiAssociation && entityDoiAssociation) {
//       return 'Cite as...'
//     } else if (entityDoiAssociation && !projectDoiAssociation) {
//       return 'Cite page'
//     } else if (!entityDoiAssociation && projectDoiAssociation) {
//       return 'Cite project'
//     }
//     return ''
//   }

//   const buttonText = getButtonText()

//   const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     if (entityDoiAssociation && !projectDoiAssociation) {
//       setSelectedDoi(entityDoiAssociation.doiUri!)
//       setCitationAnchorEl(event.currentTarget)
//     } else if (!entityDoiAssociation && projectDoiAssociation) {
//       setSelectedDoi(projectDoiAssociation.doiUri!)
//       setCitationAnchorEl(event.currentTarget)
//     } else {
//       // If both project and entity doi exist, show dropdown
//       setAnchorEl(event.currentTarget)
//     }
//   }

//   const handleSelectCitation = (doi: string) => {
//     setSelectedDoi(doi)
//     setAnchorEl(null)
//     setCitationAnchorEl(anchorEl)
//   }

//   const handleClose = () => {
//     setAnchorEl(null)
//   }

//   const popover = (
//     <CitationPopoverContent
//       doi={selectedDoi}
//       anchorEl={citationAnchorEl}
//       open={!!citationAnchorEl && !!selectedDoi}
//       id={id}
//       onClose={() => {
//         setCitationAnchorEl(null)
//         setSelectedDoi(undefined)
//       }}
//     />
//   )

//   const dropdown = (
//     <Popover
//       open={open}
//       anchorEl={anchorEl}
//       onClose={handleClose}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'left',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'center',
//       }}
//       PaperProps={{
//         sx: {
//           padding: '10px 0',
//           borderRadius: '0px',
//           boxShadow: '0px 8px 24px 0px rgba(53, 58, 63, 0.15)',
//         },
//       }}
//     >
//       <MenuItem
//         value={projectDoiAssociation?.doiUri}
//         onClick={() => handleSelectCitation(projectDoiAssociation?.doiUri!)}
//       >
//         Cite this Project
//       </MenuItem>
//       <MenuItem
//         value={entityDoiAssociation?.doiUri}
//         onClick={() => handleSelectCitation(entityDoiAssociation?.doiUri!)}
//       >
//         Cite only this page
//       </MenuItem>
//     </Popover>
//   )

//   const isProjectAndEntityDoi = projectDoiAssociation && entityDoiAssociation

//   return (
//     <div>
//       <Button
//         onClick={handleButtonClick}
//         sx={{
//           '& .MuiButton-endIcon': {
//             margin: 0,
//           },
//           borderColor: '#FFF !important',
//           color: '#FFF !important',
//           borderRadius: '0px',
//           '&:hover': {
//             backgroundColor: '#304b66',
//           },
//           ...(isProjectAndEntityDoi && { padding: '0 0 0 16px' }),
//         }}
//         variant="outlined"
//         startIcon={<DoubleQuotes width={18} height={18} />}
//         endIcon={
//           isProjectAndEntityDoi && (
//             <Box
//               sx={{
//                 borderLeft: '2px solid white',
//                 display: 'flex',
//                 padding: '6px',
//                 marginLeft: '16px',
//               }}
//             >
//               <ExpandMoreIcon className="user-expand" />
//             </Box>
//           )
//         }
//       >
//         <Typography variant="label" sx={{ lineHeight: '20px' }}>
//           {buttonText}
//         </Typography>
//       </Button>
//       {projectDoiAssociation && entityDoiAssociation ? (
//         <>{dropdown}</>
//       ) : (
//         <>{popover}</>
//       )}
//       {popover}
//     </div>
//   )
// }

// export default EntityCitation

// test 2

import { ReactComponent as DoubleQuotes } from '@/assets/icons/DoubleQuotes.svg'
import { Box, Button, MenuItem, Popover, Typography } from '@mui/material'
import { isVersionableEntity } from '@/utils/functions/EntityTypeUtils'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { useGetEntityBundle } from '@/synapse-queries/entity'
import { DoiObjectType } from '@sage-bionetworks/synapse-client'
import CitationPopoverContent from '../CitationPopover/CitationPopoverContent'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { EntityBundle } from '@sage-bionetworks/synapse-types'

type EntityCitationProps = {
  projectId: string
  entityId?: string
  versionNumber?: number
}

function useGetEntityDoiAssociation(
  entityId?: string,
  versionNumber?: number,
  bundle?: EntityBundle,
) {
  const useFallbackVersionlessDOI =
    bundle &&
    !bundle.doiAssociation &&
    isVersionableEntity(bundle.entity) &&
    bundle.entity.isLatestVersion

  console.log('bundle in helper:', bundle)
  console.log('bundle?.doiAssociation:', bundle?.doiAssociation)
  console.log(
    'isversionableEntity:',
    bundle?.entity ? isVersionableEntity(bundle.entity) : undefined,
  )
  console.log('entityId:', entityId)
  console.log('versionNumber:', versionNumber)
  console.log('useFallbackVersionlessDOI:', useFallbackVersionlessDOI)

  // Try fetching the versioned DOI first
  const { data: versionedDoiAssociation } = useGetDOIAssociation(
    {
      id: entityId!,
      version: versionNumber,
      type: DoiObjectType.ENTITY,
    },
    {
      enabled: !!entityId && !!versionNumber,
    },
  )

  console.log('versionedDoiAssociation:', versionedDoiAssociation)

  // If the versioned DOI is not found, fallback to the versionless DOI so we can still show a DOI if it exists.
  // We do not want to show the versionless DOI if the entity is not the latest version as it would be misleading.
  const { data: versionlessDoiAssociation } = useGetDOIAssociation(
    {
      id: entityId!,
      version: undefined,
      type: DoiObjectType.ENTITY,
    },
    {
      enabled: useFallbackVersionlessDOI,
    },
  )

  return versionedDoiAssociation ?? versionlessDoiAssociation
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

  // Get DOI association for the current entity
  // If this is the latest entity version, is versionable, and has no doi, show the "versionless" DOI if it exists.
  // const useFallbackVersionlessDOI =
  //   bundle &&
  //   !bundle.doiAssociation &&
  //   isVersionableEntity(bundle.entity) &&
  //   bundle.entity.isLatestVersion

  // // Try fetching the versioned DOI first
  // const { data: versionedDoiAssociation } = useGetDOIAssociation(
  //   {
  //     id: entityId!,
  //     version: versionNumber,
  //     type: DoiObjectType.ENTITY,
  //   },
  //   {
  //     enabled: !!entityId && !!versionNumber,
  //   },
  // )

  // // If the versioned DOI is not found, fallback to the versionless DOI so we can still show a DOI if it exists.
  // // We do not want to show the versionless DOI if the entity is not the latest version as it would be misleading.
  // const { data: versionlessDoiAssociation } = useGetDOIAssociation(
  //   {
  //     id: entityId!,
  //     version: undefined,
  //     type: DoiObjectType.ENTITY,
  //   },
  //   {
  //     enabled: useFallbackVersionlessDOI,
  //   },
  // )

  const entityDoiAssociation = useGetEntityDoiAssociation(
    entityId,
    versionNumber,
    bundle,
  )

  // Get DOI association for the project
  // Projects are not versioned
  const { data: projectDoiAssociation } = useGetDOIAssociation(
    {
      id: projectId,
      version: undefined,
      type: DoiObjectType.ENTITY, // Not sure what PORTAL_RESOURCE is but that didn't work here
    },
    {
      enabled: !!projectId,
    },
  )

  // We ideally want to show the versioned DOI but if it doesn't exist, fallback to the versionless DOI
  // const entityDoiAssociation =
  //   versionedDoiAssociation ?? versionlessDoiAssociation

  // console.log('bundle', bundle)
  // console.log('versionNumber', versionNumber)
  // console.log('useFallbackVersionlessDOI', useFallbackVersionlessDOI)
  // console.log('versionedDoiAssociation', versionedDoiAssociation) // syn127.1
  // console.log('versionlessDoi', versionlessDoiAssociation) // syn127, this is null if the entity is versioned
  // console.log('entityDoiAssociation', entityDoiAssociation)
  // console.log('projectDoiAssociation', projectDoiAssociation) // syn64042437, this is the project DOI
  // console.log('projectId:', projectId)
  // console.log('entityId:', entityId)

  function getButtonText() {
    if (projectDoiAssociation && entityDoiAssociation) {
      return 'Cite as...'
    } else if (entityDoiAssociation && !projectDoiAssociation) {
      return 'Cite page'
    } else if (!entityDoiAssociation && projectDoiAssociation) {
      return 'Cite project'
    }
    return ''
  }

  const buttonText = getButtonText()

  // console.log('entityDoiAssociation?.doiUri', entityDoiAssociation?.doiUri)
  // console.log('project does not exist', !projectDoiAssociation)

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
        horizontal: 'center',
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

  const isProjectAndEntityDoi = projectDoiAssociation && entityDoiAssociation

  return (
    <div>
      <Button
        onClick={handleButtonClick}
        sx={{
          '& .MuiButton-endIcon': {
            margin: 0,
          },
          borderColor: '#FFF !important',
          color: '#FFF !important',
          borderRadius: '0px',
          '&:hover': {
            backgroundColor: '#304b66',
          },
          ...(isProjectAndEntityDoi && { padding: '0 0 0 16px' }),
        }}
        variant="outlined"
        startIcon={<DoubleQuotes width={18} height={18} />}
        endIcon={
          isProjectAndEntityDoi && (
            <Box
              sx={{
                borderLeft: '2px solid white',
                display: 'flex',
                padding: '6px',
                marginLeft: '16px',
              }}
            >
              <ExpandMoreIcon className="user-expand" />
            </Box>
          )
        }
      >
        <Typography variant="label" sx={{ lineHeight: '20px' }}>
          {buttonText}
        </Typography>
      </Button>
      {projectDoiAssociation && entityDoiAssociation ? (
        <>{dropdown}</>
      ) : (
        <>{popover}</>
      )}
      {popover}
    </div>
  )
}

export default EntityCitation
