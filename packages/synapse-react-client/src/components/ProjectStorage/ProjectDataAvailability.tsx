import { SYNAPSE_STORAGE_LOCATION_ID } from '@/synapse-client'
import { useProjectStorageUsage } from '@/synapse-queries'
import { spreadSx } from '@/theme/spreadSx'
import { useSynapseContext } from '@/utils'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { Box, SxProps, Tooltip, Typography, Divider } from '@mui/material'
import React from 'react'

export type ProjectDataAvailabilityProps = {
  projectId?: string
  sx?: SxProps
  showBottomDivider?: boolean
}
const textColor = '#576077'
const trackColor = '#DEE0E5'
const fillColor = '#38756A'

export function ProjectDataAvailability({
  projectId,
  sx,
  showBottomDivider = false,
}: ProjectDataAvailabilityProps): React.ReactNode {
  const { isAuthenticated } = useSynapseContext()
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
  const usagePercent = Math.min(
    Math.round((sumFileBytes / maxAllowedFileBytes) * 100),
    100,
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
          width: '100%',
          fontFamily: 'DM Sans',
          color: textColor,
        },
        sx,
      )}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: '10px',
        }}
      >
        <Typography
          sx={{
            // match current styles in Project metadata
            fontWeight: 500,
            fontSize: '12px',
            textTransform: 'uppercase',
          }}
        >
          Data Availability{' '}
        </Typography>
      </Box>
      {synapseStorageUsage.maxAllowedFileBytes && (
        <Tooltip
          title={`Using ${friendlySumFileBytes} out of ${friendlyMaxAllowedFileBytes}`}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              {/* Progress Bar */}
              <Box
                sx={{
                  width: '100%',
                  height: '6px',
                  backgroundColor: trackColor,
                  borderRadius: '50px',
                }}
              >
                <Box
                  sx={{
                    width: `${usagePercent}%`,
                    height: '6px',
                    backgroundColor: fillColor,
                    borderRadius: '50px',
                  }}
                ></Box>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: textColor,
              }}
            >
              {`${usagePercent}% of ${friendlyMaxAllowedFileBytes}`}
            </Typography>
          </Box>
        </Tooltip>
      )}
      {showBottomDivider && (
        <Divider
          sx={{
            mt: '16px',
            borderColor: 'rgba(226, 228, 234, 0.50)',
          }}
        />
      )}
    </Box>
  )
}

export default ProjectDataAvailability
