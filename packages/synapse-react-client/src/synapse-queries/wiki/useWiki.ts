import {
  createWikiPage,
  getRootWikiPageKey,
  getWikiAttachmentsFromEntity,
  getWikiPage,
  updateWikiPage,
} from '@/synapse-client'
import {
  SynapseClientError,
  SynapseContextType,
  useSynapseContext,
} from '@/utils'
import {
  FileHandleResults,
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

function getRootWikiPageKeyQueryOptions(
  objectType: ObjectType,
  objectId: string,
  synapseContext: SynapseContextType,
): UseQueryOptions<WikiPageKey | null, SynapseClientError> {
  const { keyFactory, accessToken } = synapseContext
  return {
    queryKey: keyFactory.getRootWikiPageKeyQueryKey(objectType, objectId),
    queryFn: () => getRootWikiPageKey(accessToken, objectType, objectId),
  }
}

export const useGetRootWikiPageKey = (
  ownerObjectType: ObjectType,
  ownerObjectId: string,
  options?: Partial<UseQueryOptions<WikiPageKey | null, SynapseClientError>>,
) => {
  const synapseContext = useSynapseContext()

  return useQuery({
    ...options,
    ...getRootWikiPageKeyQueryOptions(
      ownerObjectType,
      ownerObjectId,
      synapseContext,
    ),
  })
}

export const useGetWikiPage = (
  wikiPageKey: WikiPageKey,
  options?: Partial<UseQueryOptions<WikiPage, SynapseClientError>>,
) => {
  const synapseContext = useSynapseContext()
  const { accessToken, keyFactory } = synapseContext
  const queryClient = useQueryClient()

  return useQuery({
    ...options,
    queryKey: keyFactory.getWikiPageQueryKey(wikiPageKey),
    queryFn: async () => {
      let wikiPageId = wikiPageKey.wikiPageId
      if (!wikiPageId) {
        const rootWikiPageKey = await queryClient.fetchQuery(
          getRootWikiPageKeyQueryOptions(
            wikiPageKey.ownerObjectType,
            wikiPageKey.ownerObjectId,
            synapseContext,
          ),
        )
        if (rootWikiPageKey) {
          wikiPageId = rootWikiPageKey.wikiPageId
        }
      }
      return getWikiPage(accessToken, {
        ...wikiPageKey,
        wikiPageId: wikiPageId,
      })
    },
  })
}

export function useGetWikiAttachments(
  wikiPageKey: WikiPageKey,
  options?: Partial<UseQueryOptions<FileHandleResults, SynapseClientError>>,
) {
  const synapseContext = useSynapseContext()
  const { accessToken, keyFactory } = synapseContext
  const queryClient = useQueryClient()

  return useQuery({
    ...options,
    queryKey: keyFactory.getWikiAttachmentsQueryKey(wikiPageKey),
    queryFn: async () => {
      let wikiPageId = wikiPageKey.wikiPageId
      if (!wikiPageId) {
        const rootWikiPageKey = await queryClient.fetchQuery(
          getRootWikiPageKeyQueryOptions(
            wikiPageKey.ownerObjectType,
            wikiPageKey.ownerObjectId,
            synapseContext,
          ),
        )
        if (rootWikiPageKey) {
          wikiPageId = rootWikiPageKey.wikiPageId
        }
      }
      return getWikiAttachmentsFromEntity(
        accessToken,
        wikiPageKey.ownerObjectId,
        wikiPageId,
        wikiPageKey.ownerObjectType,
      )
    },
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
