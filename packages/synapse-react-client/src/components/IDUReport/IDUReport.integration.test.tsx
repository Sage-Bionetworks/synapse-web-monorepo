import { render, screen } from '@testing-library/react'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import {
  SubmissionInfoPage,
  SubmissionInfoPageRequest,
} from '@sage-bionetworks/synapse-types'
import IDUReport from './IDUReport'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
} from '../../mocks/user/mock_user_profile'
import { server } from '../../mocks/msw/server'
import { http, HttpResponse } from 'msw'
import { APPROVED_SUBMISSION_INFO } from '../../utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { act } from '@testing-library/react'

const page1: SubmissionInfoPage = {
  results: [
    {
      institution: 'Mars University',
      projectLead: 'Prof. Farnsworth',
      intendedDataUseStatement: 'My test requires an IDU',
      modifiedOn: '2021-09-15T00:01:45.223Z',
      submittedBy: MOCK_USER_ID.toString(),
    },
  ],
  nextPageToken: '50a0',
}
const page2: SubmissionInfoPage = {
  results: [
    {
      institution: 'Mars University',
      projectLead: 'Wong',
      intendedDataUseStatement: 'My test requires another IDU',
      modifiedOn: '2021-09-15T00:01:47.223Z',
      submittedBy: MOCK_USER_ID_2.toString(),
    },
  ],
}
function renderComponent() {
  return render(<IDUReport accessRequirementId="2000" />, {
    wrapper: createWrapper(),
  })
}

describe('IDUReport tests', () => {
  beforeAll(() => {
    server.listen()
    server.use(
      http.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${APPROVED_SUBMISSION_INFO(':arId')}`,
        async ({ request, params }) => {
          let page = page1
          if ((req.body as SubmissionInfoPageRequest).nextPageToken) {
            page = page2
          }
          return HttpResponse.json(page, { status: 200 })
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('loads more when inView', async () => {
    renderComponent()

    const submissionInfo1 = await screen.findAllByText('Prof. Farnsworth')
    expect(submissionInfo1).toHaveLength(1)

    act(() => {
      mockAllIsIntersecting(true)
    })
    const submissionInfo2 = await screen.findAllByText('Wong')
    expect(submissionInfo2).toHaveLength(1)
  })
})
