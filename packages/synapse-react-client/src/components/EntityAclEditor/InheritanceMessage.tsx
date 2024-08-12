import React from 'react'
import { EntityLink } from '../EntityLink'
import { Typography } from '@mui/material'

type InheritanceMessageProps = {
  isProject: boolean
  isInherited: boolean
  benefactorId?: string
}

export function InheritanceMessage(props: InheritanceMessageProps) {
  const { isProject, isInherited, benefactorId } = props
  let content: React.ReactNode = ''
  if (isProject) {
    content = (
      <>
        The sharing settings shown below apply to this project and are inherited
        by all project contents unless local sharing settings have been set.
      </>
    )
  }
  if (isInherited) {
    content = (
      <>
        The sharing settings shown below are currently being inherited{' '}
        {benefactorId ? (
          <>
            from <EntityLink entity={benefactorId} />{' '}
          </>
        ) : (
          ''
        )}
        and cannot be modified here.
      </>
    )
  } else {
    content = (
      <>
        The local sharing settings shown below are <strong>not</strong> being
        inherited from a parent resource.
      </>
    )
  }

  return (
    <Typography variant={'body1'} fontStyle={'italic'} color={'text.secondary'}>
      {content}
    </Typography>
  )
}
