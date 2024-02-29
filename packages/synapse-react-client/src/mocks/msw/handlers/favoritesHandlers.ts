import { http, HttpResponse } from 'msw'
import { FAVORITES } from '../../../utils/APIConstants'
import mockFileEntityData from '../../entity/mockFileEntity'
import { SynapseApiResponse } from '../handlers'
import { EntityHeader, PaginatedResults } from '@sage-bionetworks/synapse-types'
import { BackendDestinationEnum, getEndpoint } from '../../../utils/functions'
import mockEntities from '../../entity'

const favorites: Set<string> = new Set()

export function setCurrentFavoritesOnServer(newFavorites: Set<string>) {
  favorites.clear()
  newFavorites.forEach(id => favorites.add(id))
}

export default function getFavoritesHandlers(backendOrigin: string) {
  return [
    http.get<never, never, PaginatedResults<EntityHeader>>(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}`,

      () => {
        const headerFavs = mockEntities
          .filter(entity => favorites.has(entity.id))
          .map(entity => entity.entityHeader)
          .filter((eh): eh is EntityHeader => Boolean(eh))
        const response: PaginatedResults<EntityHeader> = {
          results: headerFavs,
          totalNumberOfResults: headerFavs.length,
        }

        return HttpResponse.json(response, { status: 200 })
      },
    ),
    http.post<{ id: string }, never, SynapseApiResponse<EntityHeader>>(
      `${backendOrigin}${FAVORITES}/:id`,
      ({ params }) => {
        favorites.add(params.id)
        return HttpResponse.json(mockFileEntityData.entityHeader, {
          status: 201,
        })
      },
    ),
    http.delete<{ id: string }, never, SynapseApiResponse<''>>(
      `${backendOrigin}${FAVORITES}/:id`,
      ({ params }) => {
        favorites.delete(params.id)

        return HttpResponse.text('', { status: 200 })
      },
    ),
  ]
}
