import { useGetRealmPrincipals } from '@/synapse-queries/realm/useRealmPrincipals'
import { Skeleton, Chip, Typography } from '@mui/material'
import { useGetEntityBundle } from '@/synapse-queries'
import {
  getProjectVisibilityFromACL,
  ProjectVisibility,
} from './getProjectVisibilityFromACL'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

export type ProjectVisibilityChipProps = {
  visibility: ProjectVisibility
}

export type ProjectVisibilityChipContainerProps = {
  entityId: string
}

const iconStyles = {
  fill: 'var(--synapse-gray-900)',
  width: '16px',
}

const VISIBILITY_LABELS: Record<
  ProjectVisibility,
  { label: string; color: string; icon: React.ReactElement }
> = {
  PRIVATE: {
    label: 'Private',
    color: '#FAC3C3',
    icon: <LockOutlinedIcon sx={iconStyles} />,
  },
  DISCOVERABLE: {
    label: 'Discoverable Project',
    color: '#FDEFC1',
    icon: <VisibilityOutlinedIcon sx={iconStyles} />,
  },
  PUBLIC: {
    label: 'Public',
    color: '#D4EFD4',
    icon: <LanguageOutlinedIcon sx={iconStyles} />,
  },
}

function ProjectVisibilityChipUI({ visibility }: ProjectVisibilityChipProps) {
  return (
    <Chip
      sx={{
        display: 'flex',
        padding: '4px 8px',
        alignItems: 'center',
        gap: '6px',
        borderRadius: '7px',
        width: 'fit-content',
        backgroundColor: VISIBILITY_LABELS[visibility].color,
        '& .MuiChip-icon': {
          marginLeft: '0px',
          marginRight: '0px',
        },
        '& .MuiChip-label': {
          px: 0,
        },
      }}
      icon={VISIBILITY_LABELS[visibility].icon}
      label={
        <Typography
          variant="body2"
          sx={{
            lineHeight: '12px',
            letterSpacing: '-0.06px',
          }}
        >
          {VISIBILITY_LABELS[visibility].label}
        </Typography>
      }
    />
  )
}

export default function ProjectVisibilityChip({
  entityId,
}: ProjectVisibilityChipContainerProps) {
  const {
    data: entityBundle,
    isLoading: isLoadingEntityBundle,
    isError: isErrorEntityBundle,
  } = useGetEntityBundle(entityId, undefined, { includeBenefactorACL: true })
  const {
    data: realmPrincipals,
    isLoading: isLoadingRealmPrincipals,
    isError: isErrorRealmPrincipals,
  } = useGetRealmPrincipals()

  if (isErrorEntityBundle || isErrorRealmPrincipals) {
    return null
  }

  if (isLoadingEntityBundle || isLoadingRealmPrincipals) {
    return <Skeleton variant="rounded" width={120} height={24} />
  }

  const visibility = getProjectVisibilityFromACL(
    entityBundle?.benefactorAcl?.resourceAccess ?? [],
    realmPrincipals || {},
  )

  return <ProjectVisibilityChipUI visibility={visibility} />
}
