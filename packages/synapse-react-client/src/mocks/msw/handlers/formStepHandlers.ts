import { FormStep } from '@/utils/types/AccessRequirementFormTypes'
import { http, HttpResponse } from 'msw'
import { mockFormSteps } from '../../accessRequirement/mockFormSteps'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

const FORM_STEP_BASE = '/repo/v1/accessRequirement/form/step'

export function getFormStepService() {
  return new BasicMockedCrudService<FormStep, 'id'>({
    initialData: mockFormSteps,
    idField: 'id',
    autoGenerateId: true,
  })
}

export const getFormStepHandlers = (
  backendOrigin: string,
  service = getFormStepService(),
) => [
  // Create a new form step
  http.post(`${backendOrigin}${FORM_STEP_BASE}`, async ({ request }) => {
    const body = (await request.json()) as FormStep
    const created = service.create(body)
    return HttpResponse.json(created, { status: 201 })
  }),

  // Get a form step by ID
  http.get(`${backendOrigin}${FORM_STEP_BASE}/:id`, ({ params }) => {
    const step = service.getOneById(params.id as string)
    if (!step) {
      return HttpResponse.json(
        {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: `FormStep not found: ${params.id}`,
        },
        { status: 404 },
      )
    }
    return HttpResponse.json(step)
  }),

  // Update a form step
  http.put(`${backendOrigin}${FORM_STEP_BASE}/:id`, async ({ request }) => {
    const body = (await request.json()) as FormStep
    const updated = service.update(body.id, body)
    if (!updated) {
      return HttpResponse.json(
        {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: `FormStep not found: ${body.id}`,
        },
        { status: 404 },
      )
    }
    return HttpResponse.json(updated)
  }),

  // Delete a form step
  http.delete(`${backendOrigin}${FORM_STEP_BASE}/:id`, ({ params }) => {
    service.delete(params.id as string)
    return new HttpResponse(null, { status: 204 })
  }),

  // List form steps
  http.post(`${backendOrigin}${FORM_STEP_BASE}/list`, async ({ request }) => {
    const body = (await request.json()) as { name?: string }
    let results = service.getAll()

    if (body.name) {
      const searchLower = body.name.toLowerCase()
      results = results.filter(s => s.name.toLowerCase().includes(searchLower))
    }

    return HttpResponse.json({ results, nextPageToken: null })
  }),
]
