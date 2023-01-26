import React from 'react'
import { CheckTwoTone, LockTwoTone } from '@mui/icons-material'

export type CheckMarkProps = {
  isCompleted: boolean | undefined
}
export default function AccessApprovalCheckMark({
  isCompleted,
}: CheckMarkProps) {
  return (
    <div
      data-testid={`AccessApprovalCheckMark-${isCompleted}`}
      className={`check-mark-container ${isCompleted ? 'green' : 'orange'}`}
    >
      {isCompleted ? <CheckTwoTone /> : <LockTwoTone />}
    </div>
  )
}
