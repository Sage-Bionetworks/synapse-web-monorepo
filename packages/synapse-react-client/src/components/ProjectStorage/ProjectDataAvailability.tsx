import { SYNAPSE_STORAGE_LOCATION_ID } from '@/synapse-client'
import { useProjectStorageUsage } from '@/synapse-queries'
import { spreadSx } from '@/theme/spreadSx'
import { useSynapseContext } from '@/utils'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { SAGE_OFFERINGS_HELP_URL } from '@/utils/SynapseConstants'
import { Box, SxProps, Tooltip, Typography } from '@mui/material'
import HelpPopover from '../HelpPopover'

export type ProjectDataAvailabilityProps = {
  projectId?: string
  sx?: SxProps
}
const usageBarWidth = 142 //px

export function ProjectDataAvailability({
  projectId,
  sx,
}: ProjectDataAvailabilityProps) {
  const { accessToken } = useSynapseContext()
  const isAuthenticated = !!accessToken
  const { data } = useProjectStorageUsage(projectId!, {
    enabled: !!projectId && isAuthenticated,
  })
  const projectDataUsageArray = data?.locations.filter(
    v => v.storageLocationId == SYNAPSE_STORAGE_LOCATION_ID,
  )
  const synapseStorageUsage =
    projectDataUsageArray?.length == 1 ? projectDataUsageArray[0] : undefined
  if (!synapseStorageUsage) {
    return <></>
  }
  const { sumFileBytes = 0, maxAllowedFileBytes = 0 } = synapseStorageUsage
  if (maxAllowedFileBytes == 0) {
    return <></>
  }
  const usageBarFilledPx = Math.min(
    Math.round((sumFileBytes / maxAllowedFileBytes) * usageBarWidth),
    usageBarWidth,
  )
  const friendlySumFileBytes = calculateFriendlyFileSize(sumFileBytes, 1)
  const friendlyMaxAllowedFileBytes = calculateFriendlyFileSize(
    maxAllowedFileBytes,
    1,
  ).replace(/\.0\s/, ' ') // SWC-7183: remove '.0 ' from the string if it exists
  return (
    <Box
      sx={spreadSx(
        {
          display: 'flex',
          flexDirection: 'column',
          width: '210px',
          fontFamily: 'DM Sans',
          color: 'white',
          px: '10px',
        },
        sx,
      )}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '5px',
        }}
      >
        <Typography
          sx={{
            // match current styles in Project metadata
            fontWeight: 700,
            fontSize: '16px',
          }}
        >
          Data Availability{' '}
        </Typography>{' '}
        <HelpPopover
          containerSx={{
            fontSize: '12px',
          }}
          markdownText="Hosting Plan Options:
- Basic Plan: Free, for sharing small datasets (<100GB) with self-service setup. No direct support.
- Self-Managed Plan: Ideal for data longevity, FAIR principles, and NIH compliance. Includes consultation services and data access management tools.
- Data Coordination Plan: For large, multi-institutional projects, with personalized consulting, data curation, and a custom data portal."
          helpUrl={SAGE_OFFERINGS_HELP_URL}
        />
      </Box>
      {synapseStorageUsage.maxAllowedFileBytes && (
        <Tooltip
          title={`Using ${friendlySumFileBytes} out of ${friendlyMaxAllowedFileBytes}`}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5px',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
              }}
            >
              0
            </Typography>
            {/* Progress Bar */}
            <Box
              sx={{
                width: `${usageBarWidth}px`,
                height: '4px',
                backgroundColor: 'white',
                borderRadius: '50px',
              }}
            >
              <Box
                sx={{
                  width: `${usageBarFilledPx}px`,
                  height: '4px',
                  backgroundColor: '#EDC766',
                  borderRadius: '50px',
                }}
              ></Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                whiteSpace: 'nowrap',
              }}
            >
              {friendlyMaxAllowedFileBytes}
            </Typography>
          </Box>
        </Tooltip>
      )}
    </Box>
  )
}

export default ProjectDataAvailability
