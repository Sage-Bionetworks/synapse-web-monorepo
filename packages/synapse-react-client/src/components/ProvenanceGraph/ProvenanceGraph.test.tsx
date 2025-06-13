import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import { MOCK_TABLE_ENTITY_ID } from '@/mocks/entity/mockTableEntity'
import { SynapseApiResponse } from '@/mocks/msw/handlers'
import { server } from '@/mocks/msw/server'
import { mockActivity } from '@/mocks/provenance/mockActivity'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ACTIVITY_FOR_ENTITY } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { Activity } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import ProvenanceGraph, { ProvenanceProps } from './ProvenanceGraph'

function renderComponent(props: ProvenanceProps) {
  return render(<ProvenanceGraph {...props} />, { wrapper: createWrapper() })
}

describe('ProvenanceGraph', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACTIVITY_FOR_ENTITY(
          mockFileEntityData.id,
          `${mockFileEntityData.entity.versionNumber}`,
        )}`,
        () => {
          return HttpResponse.json(mockActivity, { status: 200 })
        },
      ),
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACTIVITY_FOR_ENTITY(MOCK_TABLE_ENTITY_ID)}`,
        () => {
          const response: SynapseApiResponse<Activity> = {
            concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
            reason: `Mock Service worker was not configured to return an Activity for ${MOCK_TABLE_ENTITY_ID}`,
          }
          return HttpResponse.json(response, { status: 404 })
        },
      ),
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACTIVITY_FOR_ENTITY(MOCK_TABLE_ENTITY_ID, ':version')}`,
        ({ params }) => {
          const response: SynapseApiResponse<Activity> = {
            concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
            reason: `Mock Service worker was not configured to return an Activity for ${MOCK_TABLE_ENTITY_ID}.${params.version}`,
          }
          return HttpResponse.json(response, { status: 404 })
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  test('Shows a basic provenance graph successfully', async () => {
    renderComponent({
      entityRefs: [
        {
          targetId: mockFileEntityData.id,
          targetVersionNumber: mockFileEntityData.entity.versionNumber,
        },
      ],
      containerHeight: '500px',
    })
    console.log(
      `${JSON.stringify({
        targetId: mockFileEntityData.id,
        targetVersionNumber: mockFileEntityData.entity.versionNumber,
      })}`,
    )
    const provenanceGraph = await screen.findByRole('graphics-doc')
    expect(provenanceGraph).toBeDefined()
    const fileEntityNode = await screen.findByText(mockFileEntityData.name)
    expect(fileEntityNode).toBeDefined() // found entity node
    const activityNode = await screen.findByText(mockActivity.name)
    expect(activityNode).toBeDefined() // found activity node
  })
})
