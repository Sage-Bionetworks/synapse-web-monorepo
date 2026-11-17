import type { SearchConfigBinding } from '@sage-bionetworks/synapse-client'
import { http, HttpResponse } from 'msw'
import { mockSearchManagementResources } from '@/mocks/searchmanagement/mockSearchManagementData'
import type { SearchManagementResourceType } from '@/synapse-queries/searchmanagement/SearchManagementResourceType'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

/**
 * Wire-format (JSON) representation of any Search Management resource, as stored by the mock backend.
 */
export type MockSearchManagementResource = {
  id?: string
  organizationName?: string
  name?: string
  description?: string
  etag?: string
  [payloadField: string]: unknown
}

const resourcePaths: Record<SearchManagementResourceType, string> = {
  TEXT_ANALYZER: 'search/text/analyzer',
  COLUMN_ANALYZER_OVERRIDE: 'search/column/analyzer/override',
  SYNONYM_SET: 'search/synonym/set',
  SEARCH_PIPELINE: 'search/pipeline',
  SEARCH_CONFIGURATION: 'search/configuration',
}

function createResourceService(resourceType: SearchManagementResourceType) {
  return new BasicMockedCrudService<MockSearchManagementResource, 'id'>({
    initialData: mockSearchManagementResources[resourceType],
    idField: 'id',
    autoGenerateId: true,
  })
}

/**
 * Mock backends for each resource type, seeded with {@link mockSearchManagementResources}. Tests that need a
 * specific state should `clear()` and `create(...)` in the test or a `beforeEach`.
 */
export const searchManagementServices: Record<
  SearchManagementResourceType,
  BasicMockedCrudService<MockSearchManagementResource, 'id'>
> = {
  TEXT_ANALYZER: createResourceService('TEXT_ANALYZER'),
  COLUMN_ANALYZER_OVERRIDE: createResourceService('COLUMN_ANALYZER_OVERRIDE'),
  SYNONYM_SET: createResourceService('SYNONYM_SET'),
  SEARCH_PIPELINE: createResourceService('SEARCH_PIPELINE'),
  SEARCH_CONFIGURATION: createResourceService('SEARCH_CONFIGURATION'),
}
export const searchConfigBindingService = new BasicMockedCrudService<
  SearchConfigBinding,
  'objectId'
>({ idField: 'objectId' })

/** Number of results returned per list page by the mock backend. */
export const MOCK_SEARCH_MANAGEMENT_PAGE_SIZE = 10

const RESOURCE_NAME_PATTERN = /^[A-Za-z][A-Za-z0-9_]*$/

function getResourceHandlers(
  backendOrigin: string,
  resourceType: SearchManagementResourceType,
) {
  const service = searchManagementServices[resourceType]
  const basePath = `${backendOrigin}/repo/v1/${resourcePaths[resourceType]}`
  const notFound = (id: string) =>
    HttpResponse.json(
      { reason: `Resource with ID ${id} not found` },
      { status: 404 },
    )
  return [
    http.post<never, { organizationName?: string; nextPageToken?: string }>(
      `${basePath}/list`,
      async ({ request }) => {
        const { organizationName, nextPageToken } = await request.json()
        const matching = service.getMany(
          resource =>
            !organizationName || resource.organizationName === organizationName,
        )
        const offset = nextPageToken ? Number(nextPageToken) : 0
        const end = offset + MOCK_SEARCH_MANAGEMENT_PAGE_SIZE
        return HttpResponse.json({
          results: matching.slice(offset, end),
          nextPageToken: end < matching.length ? String(end) : undefined,
        })
      },
    ),
    http.get<{ id: string }>(`${basePath}/:id`, ({ params }) => {
      const resource = service.getOneById(params.id)
      return resource ? HttpResponse.json(resource) : notFound(params.id)
    }),
    http.post<never, MockSearchManagementResource>(
      basePath,
      async ({ request }) => {
        const body = await request.json()
        if (!body.name || !RESOURCE_NAME_PATTERN.test(body.name)) {
          return HttpResponse.json(
            {
              reason:
                'Name must start with a letter and contain only letters, digits, and underscores',
            },
            { status: 400 },
          )
        }
        const created = service.create({
          ...body,
          etag: crypto.randomUUID(),
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
        })
        return HttpResponse.json(created, { status: 201 })
      },
    ),
    http.put<{ id: string }, MockSearchManagementResource>(
      `${basePath}/:id`,
      async ({ params, request }) => {
        const current = service.getOneById(params.id)
        if (!current) {
          return notFound(params.id)
        }
        const body = await request.json()
        if (
          body.name !== current.name ||
          body.organizationName !== current.organizationName
        ) {
          return HttpResponse.json(
            { reason: 'name and organizationName cannot be changed' },
            { status: 400 },
          )
        }
        const updated = service.update(params.id, {
          ...body,
          etag: crypto.randomUUID(),
          modifiedOn: new Date().toISOString(),
        })
        return HttpResponse.json(updated)
      },
    ),
  ]
}

export function getSearchManagementHandlers(backendOrigin: string) {
  const bindingPath = `${backendOrigin}/repo/v1/entity/:entityId/searchconfig/binding`
  return [
    ...Object.keys(resourcePaths).flatMap(resourceType =>
      getResourceHandlers(
        backendOrigin,
        resourceType as SearchManagementResourceType,
      ),
    ),
    http.get<{ entityId: string }>(bindingPath, ({ params }) => {
      const binding = searchConfigBindingService.getOneById(params.entityId)
      return binding
        ? HttpResponse.json(binding)
        : HttpResponse.json(
            { reason: `No search configuration bound to ${params.entityId}` },
            { status: 404 },
          )
    }),
    http.put<
      { entityId: string },
      { entityId: string; searchConfigurationId: string }
    >(bindingPath, async ({ params, request }) => {
      const { searchConfigurationId } = await request.json()
      const binding: SearchConfigBinding = {
        bindId: crypto.randomUUID(),
        objectId: params.entityId,
        objectType: 'entity',
        searchConfigurationId,
        createdOn: new Date().toISOString(),
      }
      searchConfigBindingService.delete(params.entityId)
      searchConfigBindingService.create(binding)
      return HttpResponse.json(binding)
    }),
    http.delete<{ entityId: string }>(bindingPath, ({ params }) => {
      searchConfigBindingService.delete(params.entityId)
      return new HttpResponse(null, { status: 200 })
    }),
  ]
}
