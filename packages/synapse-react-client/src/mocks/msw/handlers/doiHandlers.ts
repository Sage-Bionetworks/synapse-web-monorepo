import { REPO } from '@/utils/APIConstants'
import { Doi } from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import { MOCK_DOI } from '../../doi/MockDoi'

export function getDoiHandler(
  backendOrigin: string,
  doiResponse: Doi = MOCK_DOI,
) {
  return [
    http.get(`${backendOrigin}${REPO}/doi`, () => {
      return HttpResponse.json(doiResponse, { status: 201 })
    }),
  ]
}
