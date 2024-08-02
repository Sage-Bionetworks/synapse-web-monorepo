import { Button, Typography } from '@mui/material'
import IconSvg from '../IconSvg'
import React from 'react'

export const CREATE_LOCAL_SHARING_SETTINGS = 'Create local sharing settings'
export const DELETE_LOCAL_SHARING_SETTINGS = 'Delete local sharing settings'

type CreateOrDeleteLocalSharingSettingsButtonProps = {
  isInherited: boolean
  setIsInherited: (isInherited: boolean) => void
}

export function CreateOrDeleteLocalSharingSettingsButton(
  props: CreateOrDeleteLocalSharingSettingsButtonProps,
) {
  const { isInherited, setIsInherited } = props

  if (!isInherited) {
    return (
      <div>
        <Typography variant={'body1'} mt={2} mb={1}>
          The sharing settings will be inherited from the parent folder or
          project if local sharing settings are deleted.
        </Typography>
        <Button
          variant={'outlined'}
          size={'small'}
          color={'error'}
          onClick={() => setIsInherited(true)}
        >
          {DELETE_LOCAL_SHARING_SETTINGS}
        </Button>
      </div>
    )
  }
  return (
    <div>
      <Typography variant={'body1'} mt={2} mb={1}>
        By default the sharing settings are inherited from the parent folder or
        project. If you want to have different settings on a specific file,
        folder, or table you need to create local sharing settings and then
        modify them.
      </Typography>
      <Button
        variant={'contained'}
        size={'small'}
        color={'success'}
        startIcon={<IconSvg icon={'add'} wrap={false} />}
        onClick={() => setIsInherited(false)}
      >
        {CREATE_LOCAL_SHARING_SETTINGS}
      </Button>
    </div>
  )
}
