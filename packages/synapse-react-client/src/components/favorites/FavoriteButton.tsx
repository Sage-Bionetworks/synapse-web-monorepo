import React from 'react'
import IconSvg from '../IconSvg/IconSvg'
import { IconButton, Skeleton, Tooltip } from '@mui/material'
import {
  useAddFavorite,
  useIsFavorite,
  useRemoveFavorite,
} from '../../synapse-queries'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import ConditionalWrapper from '../utils/ConditionalWrapper'

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
  const { accessToken } = useSynapseContext()
  const isSignedIn = !!accessToken
  const { isFavorite, isLoading } = useIsFavorite(entityId)
  const { mutate: onAddFavorite, isPending: isAddingFavorite } =
    useAddFavorite()
  const { mutate: onRemoveFavorite, isPending: isRemovingFavorite } =
    useRemoveFavorite()

  const disableButton =
    isLoading || isAddingFavorite || isRemovingFavorite || !isSignedIn

  let tooltipText = 'Add to Favorites'
  if (!isSignedIn) {
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
              isFavorite ? onRemoveFavorite(entityId) : onAddFavorite(entityId)
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
