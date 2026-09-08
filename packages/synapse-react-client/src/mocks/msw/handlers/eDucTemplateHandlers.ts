import { EDUC_TEMPLATE, EDUC_TEMPLATE_VALIDATION } from '@/utils/APIConstants'
import {
  EDucTemplatePage,
  EDucTemplateValidationResult,
} from '@sage-bionetworks/synapse-client'
import { http, HttpResponse } from 'msw'
import { mockEDucTemplates } from '../../eDuc/mockEDucTemplates'

export function getEDucTemplateHandlers(backendOrigin: string) {
  return [
    http.post(`${backendOrigin}${EDUC_TEMPLATE}`, () => {
      const response: EDucTemplatePage = {
        results: mockEDucTemplates,
      }
      return HttpResponse.json(response)
    }),
    http.get(
      `${backendOrigin}${EDUC_TEMPLATE_VALIDATION(':templateId')}`,
      () => {
        const response: EDucTemplateValidationResult = { isValid: true }
        return HttpResponse.json(response)
      },
    ),
  ]
}
