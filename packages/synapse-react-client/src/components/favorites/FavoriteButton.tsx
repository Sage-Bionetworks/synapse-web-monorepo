import ConditionalWrapper from '@/components/utils/ConditionalWrapper'
import {
  useAddFavorite,
  useIsFavorite,
  useRemoveFavorite,
} from '@/synapse-queries'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { IconButton, Skeleton, Tooltip } from '@mui/material'
import IconSvg from '../IconSvg/IconSvg'

export type FavoriteButtonProps = {
  /* The entity for which to show a favorite button */
  entityId: string
}

/**
 * Renders a button that indicates if an entity is favorited by the logged-in user. When clicked, the entity is
 * added to/removed from their favorites
 */
export default function FavoriteButton(props: FavoriteButtonProps) {
  const { entityId } = props
  const { isAuthenticated } = useSynapseContext()
  const { isFavorite, isLoading } = useIsFavorite(entityId)
  const { mutate: onAddFavorite, isPending: isAddingFavorite } =
    useAddFavorite()
  const { mutate: onRemoveFavorite, isPending: isRemovingFavorite } =
    useRemoveFavorite()

  const disableButton =
    isLoading || isAddingFavorite || isRemovingFavorite || !isAuthenticated

  let tooltipText = 'Add to Favorites'
  if (!isAuthenticated) {
    tooltipText = 'Sign in to add this to your favorites'
  } else if (isFavorite) {
    tooltipText = 'Remove from Favorites'
  }
  return (
    <ConditionalWrapper condition={isLoading} wrapper={Skeleton}>
      <Tooltip title={tooltipText} placement={'top'}>
        <span>
          <IconButton
            size={'small'}
            disabled={disableButton}
            onClick={() => {
              if (isFavorite) {
                onRemoveFavorite(entityId)
              } else {
                onAddFavorite(entityId)
              }
            }}
            sx={{ padding: '2px' }}
          >
            <IconSvg
              icon={isFavorite ? 'fav' : 'favOutline'}
              sx={{
                color: 'tertiary.main',
                width: '21px',
                height: '21px',
              }}
              wrap={false}
            />
          </IconButton>
        </span>
      </Tooltip>
    </ConditionalWrapper>
  )
}
