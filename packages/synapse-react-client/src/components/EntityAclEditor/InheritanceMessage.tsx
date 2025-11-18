import { useGetEntityHeader } from '@/synapse-queries/entity/useGetEntityHeaders'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
} from '@/utils/functions/EntityTypeUtils'
import { Link, Typography } from '@mui/material'
import { EntityLink } from '../EntityLink/EntityLink'

type InheritanceMessageProps = {
  isProject: boolean
  isInherited: boolean
  isAfterUpload?: boolean
  benefactorId?: string
}

export function InheritanceMessage(props: InheritanceMessageProps) {
  const { isProject, isInherited, isAfterUpload = false, benefactorId } = props
  const { data: benefactorHeader } = useGetEntityHeader(
    benefactorId,
    undefined,
    {
      enabled: Boolean(benefactorId),
    },
  )

  if (isAfterUpload) {
    return (
      <>
        <Typography variant={'body1'}>
          Currently, the sharing settings are inherited from the{' '}
          {benefactorHeader
            ? entityTypeToFriendlyName(
                convertToEntityType(benefactorHeader.type),
              ).toLowerCase()
            : 'container'}{' '}
          named
          {benefactorId ? (
            <>
              {' '}
              <EntityLink entity={benefactorId} />{' '}
            </>
          ) : (
            ''
          )}
          . If you wish to customize settings for a particular file, folder, or
          table, you must establish <strong>Local Sharing Settings</strong> to
          make modifications.
        </Typography>
        <Typography variant={'body1'}>
          After uploading, choose the file you want to customize sharing
          settings for, then navigate to File Tools &gt;{' '}
          <Link
            href={
              'https://help.synapse.org/docs/Sharing-Settings,-Permissions,-and-Conditions-for-Use.2024276030.html'
            }
          >
            File Sharing Settings
          </Link>
          .
        </Typography>
      </>
    )
  } else if (isProject) {
    return (
      <Typography variant={'body1'}>
        The sharing settings shown below apply to this project and are inherited
        by all project contents unless local sharing settings have been set.
      </Typography>
    )
  } else if (isInherited) {
    return (
      <Typography variant={'body1'}>
        The sharing settings shown below are currently being inherited{' '}
        {benefactorId ? (
          <>
            from <EntityLink entity={benefactorId} />{' '}
          </>
        ) : (
          ''
        )}
        and cannot be modified here.
      </Typography>
    )
  } else {
    return (
      <Typography variant={'body1'}>
        The local sharing settings shown below are <strong>not</strong> being
        inherited from a parent resource.
      </Typography>
    )
  }
}
