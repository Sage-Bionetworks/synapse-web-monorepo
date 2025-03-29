import {
  createWikiPage,
  getRootWikiPageKey,
  getWikiPage,
  updateWikiPage,
} from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import {
  ObjectType,
  WikiPage,
  WikiPageKey,
} from '@sage-bionetworks/synapse-types'
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'

export const useGetRootWikiPageKey = (
  ownerObjectType: ObjectType,
  ownerObjectId: string,
  options?: Partial<UseQueryOptions<WikiPageKey | null, SynapseClientError>>,
) => {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getRootWikiPageKeyQueryKey(
      ownerObjectType,
      ownerObjectId,
    ),
    queryFn: () =>
      getRootWikiPageKey(accessToken, ownerObjectType, ownerObjectId),
  })
}

export const useGetWikiPage = (
  wikiPageKey: WikiPageKey,
  options?: Partial<UseQueryOptions<WikiPage, SynapseClientError>>,
) => {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getWikiPageQueryKey(wikiPageKey),
    queryFn: () => getWikiPage(accessToken, wikiPageKey),
  })
}

export type CreateWikiPageInput = {
  ownerObjectType: ObjectType
  ownerObjectId: string
  wikiPage: Omit<
    WikiPage,
    'id' | 'etag' | 'createdOn' | 'createdBy' | 'modifiedOn' | 'modifiedBy'
  >
}

export const useCreateWikiPage = (
  options?: UseMutationOptions<
    WikiPage,
    SynapseClientError,
    CreateWikiPageInput
  >,
) => {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<WikiPage, SynapseClientError, CreateWikiPageInput>({
    ...options,
    mutationFn: input =>
      createWikiPage(
        accessToken,
        input.ownerObjectType,
        input.ownerObjectId,
        input.wikiPage,
      ),
    onSuccess: async (wikiPage, input, ctx) => {
      const wikiPageKey: WikiPageKey = {
        wikiPageId: wikiPage.id,
        ownerObjectId: input.ownerObjectId,
        ownerObjectType: input.ownerObjectType,
      }
      const wikiPageQueryKey = keyFactory.getWikiPageQueryKey(wikiPageKey)
      queryClient.setQueryData(wikiPageQueryKey, wikiPage)

      // update root WikiPageKey when a root WikiPage is created
      if (!wikiPage.parentWikiId) {
        const rootWikiPageKeyQueryKey = keyFactory.getRootWikiPageKeyQueryKey(
          input.ownerObjectType,
          input.ownerObjectId,
        )
        queryClient.setQueryData(rootWikiPageKeyQueryKey, wikiPageKey)
      }

      if (options?.onSuccess) {
        return await options.onSuccess(wikiPage, input, ctx)
      }
      return
    },
  })
}

export type UpdateWikiPageInput = {
  ownerObjectType: ObjectType
  ownerObjectId: string
  wikiPage: WikiPage
}

export const useUpdateWikiPage = (
  options?: UseMutationOptions<
    WikiPage,
    SynapseClientError,
    UpdateWikiPageInput
  >,
) => {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<WikiPage, SynapseClientError, UpdateWikiPageInput>({
    ...options,
    mutationFn: input =>
      updateWikiPage(
        accessToken,
        input.ownerObjectType,
        input.ownerObjectId,
        input.wikiPage,
      ),
    onSuccess: async (wikiPage, input, ctx) => {
      const wikiPageKey: WikiPageKey = {
        wikiPageId: wikiPage.id,
        ownerObjectId: input.ownerObjectId,
        ownerObjectType: input.ownerObjectType,
      }
      const wikiPageQueryKey = keyFactory.getWikiPageQueryKey(wikiPageKey)
      queryClient.setQueryData(wikiPageQueryKey, wikiPage)

      if (options?.onSuccess) {
        return await options.onSuccess(wikiPage, input, ctx)
      }
      return
    },
  })
}
