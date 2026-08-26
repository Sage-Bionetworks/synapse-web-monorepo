import {
  mockACTAccessRequirement,
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE } from '@/utils/APIConstants'
import { AccessRequirement } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import AccessRequirementList, {
  AccessRequirementListProps,
  RequestDataStep,
} from './AccessRequirementList'
import * as AccessRequirementListUtils from './AccessRequirementListUtils'

const MOCK_FILE_ENTITY_ID = mockFileEntityData.id

const sortAccessRequirementsByCompletionSpy = vi.spyOn(
  AccessRequirementListUtils,
  'sortAccessRequirementsByCompletion',
)

describe('AccessRequirementList tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  async function init(props: AccessRequirementListProps) {
    // We must await asynchronous events for our assertions to pass
    // oxlint-disable-next-line @typescript-eslint/require-await
    await act(async () => {
      render(<AccessRequirementList {...props} />, {
        wrapper: createWrapper(),
      })
    })
  }

  const accessRequirements: Array<AccessRequirement> = [
    mockSelfSignAccessRequirement,
    mockToUAccessRequirement,
    mockManagedACTAccessRequirement,
    mockACTAccessRequirement,
  ]

  const props: AccessRequirementListProps = {
    entityId: MOCK_FILE_ENTITY_ID,
    accessRequirementFromProps: accessRequirements,
    onHide: vi.fn(),
  }

  it('Renders a Access Requirements List with valid props', async () => {
    await init(props)

    await waitFor(() =>
      expect(sortAccessRequirementsByCompletionSpy).toHaveBeenCalled(),
    )
    // There should be 8 distinct requirements shown

    // Must be logged in
    await screen.findByText('signed in', { exact: false })
    // Must be certified (since one or more of the ARs requires it)
    await screen.findByText(/You must first become a/)
    await screen.findAllByText(/certified user/) // may appear multiple times since we also display if the current user is a certified user
    // Must have a verified profile (since one or more of the ARs requires it)
    await screen.findByText('user profile validated', { exact: false })
    // Must have 2fa enabled (since one or more of the ARs requires it)
    await screen.findByText('2FA', { exact: false })

    // Plus one for each AR's own requirements, giving us a total of 8
    await waitFor(() =>
      expect(screen.getAllByTestId('RequirementItem')).toHaveLength(8),
    )
  })

  it('opens directly at the initialWizardEntry step (bypassing the AR list)', async () => {
    await init({
      ...props,
      initialWizardEntry: {
        step: RequestDataStep.SIGNATURE_STATUS,
        managedACTAccessRequirement: {
          ...mockManagedACTAccessRequirement,
          eDucTemplateId: 'template-abc-123',
        },
      },
    })

    // Wizard is showing the signature-status step, not the AR list.
    await screen.findByRole('heading', {
      name: /Sign a Data Use Certificate/i,
    })
    expect(screen.queryAllByTestId('RequirementItem')).toHaveLength(0)
    // With direct entry there is no earlier wizard step, so Back is hidden.
    expect(
      screen.queryByRole('button', { name: 'Back' }),
    ).not.toBeInTheDocument()
  })

  it('resumes at SIGNATURE_STATUS when the DAR already has a routed envelope', async () => {
    const eDucAr = {
      ...mockManagedACTAccessRequirement,
      eDucTemplateId: 'template-abc-123',
    }
    server.use(
      http.get(
        `*${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(eDucAr.id)}`,
        () =>
          HttpResponse.json(
            {
              ...MOCK_DATA_ACCESS_REQUEST,
              eDucSignatureEnvelopeId: 'docusign-envelope-abc',
            },
            { status: 200 },
          ),
      ),
    )

    await init({
      ...props,
      initialWizardEntry: {
        step: RequestDataStep.UPDATE_RESEARCH_PROJECT,
        managedACTAccessRequirement: eDucAr,
      },
    })

    // Auto-resumes to SIGNATURE_STATUS because the DAR has an envelope routed.
    await screen.findByText(/Sign a Data Use Certificate/i)
  })

  it('lands on the research project step when there is no routed envelope', async () => {
    const eDucAr = {
      ...mockManagedACTAccessRequirement,
      eDucTemplateId: 'template-abc-123',
    }
    server.use(
      http.get(
        `*${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(eDucAr.id)}`,
        () =>
          HttpResponse.json(
            { ...MOCK_DATA_ACCESS_REQUEST, eDucSignatureEnvelopeId: undefined },
            { status: 200 },
          ),
      ),
    )

    await init({
      ...props,
      initialWizardEntry: {
        step: RequestDataStep.UPDATE_RESEARCH_PROJECT,
        managedACTAccessRequirement: eDucAr,
      },
    })

    // Research project form appears — signature-status step is not shown.
    await screen.findByLabelText(
      /First and last names of your Project Lead or PI/i,
    )
    expect(
      screen.queryByText(/Sign a Data Use Certificate/i),
    ).not.toBeInTheDocument()
  })
})
