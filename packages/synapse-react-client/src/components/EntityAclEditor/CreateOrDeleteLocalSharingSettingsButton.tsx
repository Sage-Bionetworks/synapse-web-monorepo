import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconSvg from '../IconSvg'

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
        <Typography
          variant={'body1'}
          sx={{
            mt: 2,
            mb: 1,
          }}
        >
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
      <Typography
        variant={'body1'}
        sx={{
          mt: 2,
          mb: 1,
        }}
      >
        Sharing settings are initially inherited from the parent folder or
        project by default. To customize settings for a specific file, folder,
        or table, you must create and adjust local sharing settings.
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
