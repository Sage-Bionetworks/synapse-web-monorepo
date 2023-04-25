import React from 'react'
import {
  AccessTimeFilled,
  CheckTwoTone,
  LockTwoTone,
} from '@mui/icons-material'
import Skeleton from '@mui/material/Skeleton'
import ConditionalWrapper from '../utils/ConditionalWrapper'
import { Box, SxProps } from '@mui/material'

export enum RequirementItemState {
  COMPLETE = 'COMPLETE',
  PENDING = 'PENDING',
  LOCKED = 'LOCKED',
  LOADING = 'LOADING',
}

export type CheckMarkProps = {
  state: RequirementItemState
  sx?: SxProps
}

const iconSx: SxProps = {
  width: '20px',
}

export default function AccessApprovalCheckMark({ state, sx }: CheckMarkProps) {
  let backgroundColor: string | undefined = undefined
  let icon: React.ReactNode = <></>

  switch (state) {
    case RequirementItemState.COMPLETE:
      backgroundColor = 'rgb(39, 167, 69)'
      icon = <CheckTwoTone sx={iconSx} />
      break
    case RequirementItemState.PENDING:
      backgroundColor = '#395979'
      icon = <AccessTimeFilled sx={iconSx} />
      break
    case RequirementItemState.LOCKED:
      backgroundColor = 'orange'
      icon = <LockTwoTone sx={iconSx} />
      break
    case RequirementItemState.LOADING:
    default:
      break
  }

  return (
    <Box
      data-testid={`AccessApprovalCheckMark-${state}`}
      sx={{
        backgroundColor: backgroundColor,
        color: 'white',
        borderRadius: '50%',
        padding: '15px',
        height: '15px',
        width: '15px',
        display: 'flex',
        alignSelf: 'baseline',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      <ConditionalWrapper
        condition={state === RequirementItemState.LOADING}
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
    </Box>
  )
}
