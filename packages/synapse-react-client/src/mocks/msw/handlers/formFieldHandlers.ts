import { FormField } from '@/utils/types/AccessRequirementFormTypes'
import { http, HttpResponse } from 'msw'
import { mockFormFields } from '../../accessRequirement/mockFormFields'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

// Endpoint path fragments (matching the design doc)
const FORM_FIELD_BASE = '/repo/v1/accessRequirement/form/field'

export function getFormFieldService() {
  return new BasicMockedCrudService<FormField, 'id'>({
    initialData: mockFormFields,
    idField: 'id',
    autoGenerateId: true,
  })
}

export const getFormFieldHandlers = (
  backendOrigin: string,
  service = getFormFieldService(),
) => [
  // Create a new form field
  http.post(`${backendOrigin}${FORM_FIELD_BASE}`, async ({ request }) => {
    const body = (await request.json()) as FormField
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

  // Get a form field by ID
  http.get(`${backendOrigin}${FORM_FIELD_BASE}/:id`, ({ params }) => {
    const field = service.getOneById(params.id as string)
    if (!field) {
      return HttpResponse.json(
        {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: `FormField not found: ${params.id}`,
        },
        { status: 404 },
      )
    }
    return HttpResponse.json(field)
  }),

  // Search form fields
  http.post(
    `${backendOrigin}${FORM_FIELD_BASE}/search`,
    async ({ request }) => {
      const body = (await request.json()) as {
        name?: string
        includeDeprecated?: boolean
      }
      let results = service.getAll()

      // Filter by name (case-insensitive substring match)
      if (body.name) {
        const searchLower = body.name.toLowerCase()
        results = results.filter(f =>
          f.name.toLowerCase().includes(searchLower),
        )
      }

      // Filter out deprecated unless requested
      if (!body.includeDeprecated) {
        results = results.filter(f => !f.deprecated)
      }

      return HttpResponse.json({ results, nextPageToken: null })
    },
  ),

  // Update a form field (simulates version increment)
  http.put(`${backendOrigin}${FORM_FIELD_BASE}/:id`, async ({ request }) => {
    const body = (await request.json()) as FormField
    const updated = service.update(body.id, {
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
          reason: `FormField not found: ${body.id}`,
        },
        { status: 404 },
      )
    }
    return HttpResponse.json(updated)
  }),
]
