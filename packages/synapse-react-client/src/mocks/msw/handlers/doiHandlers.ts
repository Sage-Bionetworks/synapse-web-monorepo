import { rest } from 'msw'
import { REPO } from '../../../utils/APIConstants'
import { Doi } from '@sage-bionetworks/synapse-types'
import { MOCK_DOI } from '../../doi/MockDoi'

export function getDoiHandler(
  backendOrigin: string,
  doiResponse: Doi = MOCK_DOI,
) {
  return [
    rest.get(`${backendOrigin}${REPO}/doi`, async (_req, res, ctx) => {
      return res(ctx.status(201), ctx.json(doiResponse))
    }),
  ]
}
