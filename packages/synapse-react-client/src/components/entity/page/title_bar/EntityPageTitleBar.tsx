import ConditionalWrapper from '@/components/utils/ConditionalWrapper'
import { useGetEntityBundle } from '@/synapse-queries'
import { isDockerRepository } from '@/utils/types/IsType'
import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material'
import FavoriteButton from '../../../favorites/FavoriteButton'
import IconSvg, { type2SvgIconName } from '../../../IconSvg/IconSvg'
import EntityActionMenu, {
  EntityActionMenuProps,
} from '../action_menu/EntityActionMenu'
import { EntityTitleBarVersionInfo } from './EntityTitleBarVersionInfo'
import TitleBarProperties from './TitleBarProperties'
import CopyToClipboardString from '@/components/CopyToClipboardString/CopyToClipboardString'

export type EntityPageTitleBarProps = {
  entityId: string
  versionNumber?: number
  /* Props that will be passed through to an EntityActionMenu component */
  entityActionMenuProps?: EntityActionMenuProps
  /* Callback invoked when an ACT member clicks "Add Conditions for Use". */
  onActMemberClickAddConditionsForUse: () => void
}

export const FAVORITE_BUTTON_ICON_COLOR = '#9EAAB7'
const TITLE_BAR_BACKGROUND_COLOR = '#EAF0F5'
const AVATAR_BACKGROUND_COLOR = '#497097'
const TITLE_NAME_COLOR = '#33373D'

/**
 * The EntityPageTitleBar component is shown on every Entity page in Synapse, and shows an Entity's metadata and
 * provides controls to view and manipulate the Entity.
 */
export default function EntityPageTitleBar(props: EntityPageTitleBarProps) {
  const { entityId, versionNumber, entityActionMenuProps } = props

  const toggleShowVersionHistory =
    entityActionMenuProps?.actionConfiguration['SHOW_VERSION_HISTORY']?.onClick

  const { data: bundle, isLoading } = useGetEntityBundle(
    entityId,
    versionNumber,
  )

  const name =
    bundle?.entity && isDockerRepository(bundle.entity)
      ? bundle.entity.repositoryName
      : bundle?.entity?.name

  return (
    <div>
      <Box
        sx={{
          padding: '20px 40px',
          backgroundColor: TITLE_BAR_BACKGROUND_COLOR,
          borderRadius: '5px',
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
          }}
        >
          <Stack
            direction={'row'}
            sx={{
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <ConditionalWrapper
              condition={isLoading}
              wrapper={Skeleton}
              wrapperProps={{
                variant: 'circular',
              }}
            >
              <Avatar
                sx={{
                  bgcolor: AVATAR_BACKGROUND_COLOR,
                  height: 68,
                  width: 68,
                  borderRadius: '3px',
                  svg: {
                    height: '36px',
                    width: '36px',
                  },
                }}
                variant={'square'}
              >
                {bundle?.entityType && (
                  <IconSvg
                    icon={
                      bundle?.entityType
                        ? type2SvgIconName[bundle.entityType]
                        : 'file'
                    }
                    wrap={false}
                  />
                )}
              </Avatar>
            </ConditionalWrapper>
            <Box sx={{ marginLeft: '10px', flexGrow: 1 }}>
              <Stack
                direction={'row'}
                sx={{
                  alignItems: 'center',
                  gap: '3px',
                }}
              >
                <ConditionalWrapper condition={isLoading} wrapper={Skeleton}>
                  <Typography
                    variant={'headline2'}
                    sx={{ color: TITLE_NAME_COLOR, fontWeight: 540 }}
                  >
                    {name ?? 'Name not set'}
                  </Typography>
                </ConditionalWrapper>
                {bundle?.entity?.id && (
                  <FavoriteButton
                    entityId={bundle.entity.id}
                    iconColor={FAVORITE_BUTTON_ICON_COLOR}
                  />
                )}
              </Stack>
              <EntityTitleBarVersionInfo
                entityId={entityId}
                versionNumber={versionNumber}
                toggleShowVersionHistory={toggleShowVersionHistory}
              />
              <CopyToClipboardString value={entityId} useRoundedIcon />
            </Box>
          </Stack>
          {entityActionMenuProps && (
            <EntityActionMenu {...entityActionMenuProps} />
          )}
        </Stack>
      </Box>
      <TitleBarProperties {...props} />
    </div>
  )
}
