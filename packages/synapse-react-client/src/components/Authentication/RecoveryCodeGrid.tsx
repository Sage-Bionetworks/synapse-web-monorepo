import ConditionalWrapper from '@/components/utils/ConditionalWrapper'
import { Box } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import { TwoFactorAuthRecoveryCodes } from '@sage-bionetworks/synapse-types'

const DEFAULT_RECOVERY_CODE_COUNT = 10

// Placeholder codes used to render skeletons while loading
const PLACEHOLDER_RECOVERY_CODE = '1234-5678-9012-3456'
const PLACEHOLDER_RECOVERY_CODES = Array(DEFAULT_RECOVERY_CODE_COUNT).fill(
  PLACEHOLDER_RECOVERY_CODE,
)

type RecoveryCodeGridProps = {
  recoveryCodes?: TwoFactorAuthRecoveryCodes
}

export function RecoveryCodeGrid(props: RecoveryCodeGridProps) {
  const { recoveryCodes } = props
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '47.5% 47.5%',
        columnGap: '5%',
        gridTemplateRows: 'repeat(5, 1fr)',
        fontFamily: 'Menlo, Courier New, Courier, monospace',
        my: 2,
      }}
    >
      {(recoveryCodes?.codes ?? PLACEHOLDER_RECOVERY_CODES).map(
        (code, index) => {
          return (
            <ConditionalWrapper
              key={index}
              condition={!recoveryCodes}
              wrapper={Skeleton}
              wrapperProps={{ width: '100%', height: '100%' }}
            >
              <Box
                sx={{
                  my: 1,
                  fontSize: '13px',
                }}
              >
                {code}
              </Box>
            </ConditionalWrapper>
          )
        },
      )}
    </Box>
  )
}
