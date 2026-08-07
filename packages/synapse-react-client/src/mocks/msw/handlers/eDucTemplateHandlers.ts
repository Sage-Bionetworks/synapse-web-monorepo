import { EDUC_TEMPLATE } from '@/utils/APIConstants'
import { EDucTemplatePage } from '@sage-bionetworks/synapse-client'
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
  ]
}
