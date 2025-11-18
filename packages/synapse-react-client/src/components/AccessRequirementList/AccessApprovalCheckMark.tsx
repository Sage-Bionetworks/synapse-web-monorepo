import ConditionalWrapper from '@/components/utils/ConditionalWrapper'
import spreadSx from '@/react-ui/theme/utils/mergeSx'
import {
  AccessTimeFilled,
  CheckTwoTone,
  LockTwoTone,
} from '@mui/icons-material'
import { Avatar, styled, SxProps, useTheme } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import { ReactNode } from 'react'

export enum RequirementItemStatus {
  COMPLETE = 'COMPLETE',
  PENDING = 'PENDING',
  LOCKED = 'LOCKED',
  LOADING = 'LOADING',
}

export type CheckMarkProps = {
  status: RequirementItemStatus
  sx?: SxProps
}

const iconSx: SxProps = {
  width: '20px',
}

const AccessApprovalCheckMarkContainer = styled(Avatar, {
  label: 'AccessApprovalCheckMarkContainer',
})({
  color: 'white',
  height: '30px',
  width: '30px',
})

/**
 * Renders an icon for a RequirementItem based on the status prop.
 */
export default function AccessApprovalCheckMark({
  status,
  sx,
}: CheckMarkProps) {
  const theme = useTheme()
  let backgroundColor: string | undefined = undefined
  let icon: ReactNode = <></>

  switch (status) {
    case RequirementItemStatus.COMPLETE:
      backgroundColor = theme.palette.success.main
      icon = <CheckTwoTone sx={iconSx} />
      break
    case RequirementItemStatus.PENDING:
      // TODO: Use theme to provide this color
      // Should always be Sapphire 500, not the primary color of the current app
      backgroundColor = '#395979'
      icon = <AccessTimeFilled sx={iconSx} />
      break
    case RequirementItemStatus.LOCKED:
      // TODO: Use theme to provide this color
      backgroundColor = '#FF9B00'
      icon = <LockTwoTone sx={iconSx} />
      break
    case RequirementItemStatus.LOADING:
    default:
      break
  }

  return (
    <AccessApprovalCheckMarkContainer
      data-testid={`AccessApprovalCheckMark-${status}`}
      sx={spreadSx(
        {
          backgroundColor: backgroundColor,
        },
        sx,
      )}
    >
      <ConditionalWrapper
        condition={status === RequirementItemStatus.LOADING}
        wrapper={Skeleton}
        wrapperProps={{
          variant: 'circular',
          sx: {
            minHeight: '30px',
            minWidth: '30px',
          },
        }}
      >
        {icon}
      </ConditionalWrapper>
    </AccessApprovalCheckMarkContainer>
  )
}
