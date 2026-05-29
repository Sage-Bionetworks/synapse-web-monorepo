import { FormTemplate } from '@/utils/types/AccessRequirementFormTypes'
import { http, HttpResponse } from 'msw'
import { mockFormTemplates } from '../../accessRequirement/mockFormTemplates'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

const FORM_TEMPLATE_BASE = '/repo/v1/accessRequirement/formTemplate'

export function getFormTemplateService() {
  return new BasicMockedCrudService<FormTemplate, 'id'>({
    initialData: mockFormTemplates,
    idField: 'id',
    autoGenerateId: true,
  })
}

export const getFormTemplateHandlers = (
  backendOrigin: string,
  service = getFormTemplateService(),
) => [
  // Create a new form template
  http.post(`${backendOrigin}${FORM_TEMPLATE_BASE}`, async ({ request }) => {
    const body = (await request.json()) as FormTemplate
    const created = service.create({
      ...body,
      etag: crypto.randomUUID(),
      versionNumber: 1,
      createdOn: new Date().toISOString(),
      modifiedOn: new Date().toISOString(),
      createdBy: '1234567',
      modifiedBy: '1234567',
      deprecated: body.deprecated ?? false,
    })
    return HttpResponse.json(created, { status: 201 })
  }),

  // Update a form template by id (creates a new version)
  http.post(
    `${backendOrigin}${FORM_TEMPLATE_BASE}/:id`,
    async ({ request, params }) => {
      const body = (await request.json()) as FormTemplate
      const updated = service.update(params.id as string, {
        ...body,
        etag: crypto.randomUUID(),
        versionNumber: (body.versionNumber ?? 0) + 1,
        modifiedOn: new Date().toISOString(),
        modifiedBy: '1234567',
      })
      if (!updated) {
        return HttpResponse.json(
          {
            concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
            reason: `FormTemplate not found: ${params.id}`,
          },
          { status: 404 },
        )
      }
      return HttpResponse.json(updated)
    },
  ),

  // Get a form template by id (latest version)
  http.get(`${backendOrigin}${FORM_TEMPLATE_BASE}/:id`, ({ params }) => {
    const template = service.getOneById(params.id as string)
    if (!template) {
      return HttpResponse.json(
        {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: `FormTemplate not found: ${params.id}`,
        },
        { status: 404 },
      )
    }
    return HttpResponse.json(template)
  }),

  // Get a specific version of a form template
  http.get(
    `${backendOrigin}${FORM_TEMPLATE_BASE}/:id/version/:versionNumber`,
    ({ params }) => {
      const template = service.getOneById(params.id as string)
      if (!template) {
        return HttpResponse.json(
          {
            concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
            reason: `FormTemplate not found: ${params.id}`,
          },
          { status: 404 },
        )
      }
      return HttpResponse.json(template)
    },
  ),

  // Search form templates
  http.post(
    `${backendOrigin}${FORM_TEMPLATE_BASE}/search`,
    async ({ request }) => {
      const body = (await request.json()) as {
        name?: string
        includeDeprecated?: boolean
      }
      let results = service.getAll()

      if (body.name) {
        const searchLower = body.name.toLowerCase()
        results = results.filter(t =>
          t.name.toLowerCase().includes(searchLower),
        )
      }

      if (!body.includeDeprecated) {
        results = results.filter(t => !t.deprecated)
      }

      return HttpResponse.json({ results, nextPageToken: null })
    },
  ),
]
