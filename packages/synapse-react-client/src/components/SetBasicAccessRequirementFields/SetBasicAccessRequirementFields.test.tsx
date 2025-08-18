import {
  mockACTAccessRequirement,
  mockACTAccessRequirementWithWiki,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import {
  mockACTAccessRequirementWikiPage,
  mockSelfSignAccessRequirementWikiPage,
} from '@/mocks/mockWiki'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import {
  confirmMarkdownSynapseIsShown,
  confirmMarkdownSynapseTextContent,
} from '@/testutils/MarkdownSynapseUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ACCESS_REQUIREMENT_BY_ID } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  ACTAccessRequirement,
  ErrorResponse,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createRef } from 'react'
import {
  SetBasicAccessRequirementFields,
  SetBasicAccessRequirementFieldsHandle,
  SetBasicAccessRequirementFieldsProps,
} from './SetBasicAccessRequirementFields'

const onSave = vi.fn()
const onError = vi.fn()
const getAccessRequirementByIdSpy = vi.spyOn(
  SynapseClient,
  'getAccessRequirementById',
)
const updateAccessRequirementSpy = vi.spyOn(
  SynapseClient,
  'updateAccessRequirement',
)

const NON_ACT_ERROR_REASON = 'Only ACT member can perform this action'
function overrideUpdateAccessRequirementHandlerWithError() {
  const errorResponse: ErrorResponse = {
    concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
    reason: NON_ACT_ERROR_REASON,
  }
  server.use(
    http.put(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${ACCESS_REQUIREMENT_BY_ID(':id')}`,
      () => {
        return HttpResponse.json(errorResponse, { status: 403 })
      },
    ),
  )
}

function renderComponent(props: SetBasicAccessRequirementFieldsProps) {
  const ref = createRef<SetBasicAccessRequirementFieldsHandle>()
  const component = render(
    <SetBasicAccessRequirementFields ref={ref} {...props} />,
    {
      wrapper: createWrapper(),
    },
  )
  return { ref, component }
}

async function setUp(props: SetBasicAccessRequirementFieldsProps) {
  const user = userEvent.setup()
  const { ref, component } = renderComponent(props)

  await waitFor(() => {
    expect(getAccessRequirementByIdSpy).toHaveBeenCalledTimes(1)
    expect(component.container.querySelectorAll('div.spinner')).toHaveLength(0)
  })

  const checkboxes = {
    isCertifiedUserRequired: screen.queryByRole('checkbox', {
      name: 'Accessors must be certified.',
    }),
    isValidatedProfileRequired: screen.queryByRole('checkbox', {
      name: 'Accessors must have a validated profile.',
    }),
  }

  const buttons = {
    deleteTextInstructions: screen.queryByRole('button', {
      name: 'Delete old instructions',
    }),
    editInstructions: screen.getByRole('button', { name: 'Edit Instructions' }),
  }

  return {
    ref,
    component,
    user,
    checkboxes,
    buttons,
  }
}

describe('SetBasicAccessRequirementFields', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('does not show text instructions for self-signed AR', async () => {
    const { buttons } = await setUp({
      accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
      onSave,
      onError,
      allowDeleteTextInstructions: true,
    })
    expect(buttons.deleteTextInstructions).toBeNull()
    await confirmMarkdownSynapseIsShown()
  })

  test('displays existing wiki for self-signed AR', async () => {
    const { buttons } = await setUp({
      accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
      onSave,
      onError,
    })
    expect(buttons.editInstructions).toBeVisible()
    await confirmMarkdownSynapseIsShown()
    await confirmMarkdownSynapseTextContent(
      mockSelfSignAccessRequirementWikiPage.markdown,
    )
  })

  test('updates accessor requirements for self-signed AR', async () => {
    const { user, ref, checkboxes } = await setUp({
      accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
      onSave,
      onError,
    })
    await confirmMarkdownSynapseIsShown()

    expect(checkboxes.isCertifiedUserRequired).not.toBeNull()
    expect(checkboxes.isValidatedProfileRequired).not.toBeNull()
    expect(checkboxes.isCertifiedUserRequired).toBeChecked()
    expect(checkboxes.isValidatedProfileRequired).toBeChecked()

    await user.click(checkboxes.isCertifiedUserRequired!)
    await user.click(checkboxes.isValidatedProfileRequired!)

    expect(checkboxes.isCertifiedUserRequired).not.toBeChecked()
    expect(checkboxes.isValidatedProfileRequired).not.toBeChecked()
    expect(onSave).not.toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()

    // parent calls save
    ref?.current?.save()

    await waitFor(() => {
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(1)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        {
          ...mockSelfSignAccessRequirement,
          isCertifiedUserRequired: false,
          isValidatedProfileRequired: false,
        },
      )
    })
    expect(onSave).toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()
  })

  test('displays text instructions, but does not allow deletion from legacy AR by default', async () => {
    const { buttons } = await setUp({
      accessRequirementId: mockACTAccessRequirement.id.toString(),
      onSave,
      onError,
    })

    expect(buttons.deleteTextInstructions).toBeNull()
    expect(
      screen.getByText(mockACTAccessRequirement.actContactInfo!),
    ).toBeVisible()
  })

  test('does not show accessor requirements for ACT AR', async () => {
    const { checkboxes } = await setUp({
      accessRequirementId: mockACTAccessRequirement.id.toString(),
      onSave,
      onError,
    })

    expect(checkboxes.isCertifiedUserRequired).toBeNull()
    expect(checkboxes.isValidatedProfileRequired).toBeNull()
  })

  test('displays wiki and text instructions for ACT AR', async () => {
    const mockACTAccessRequirementWithWikiAndTextInstructions: ACTAccessRequirement =
      {
        ...mockACTAccessRequirementWithWiki,
        actContactInfo: 'some contact info',
      }
    server.use(
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_BY_ID(':id')}`,
        () => {
          return HttpResponse.json(
            mockACTAccessRequirementWithWikiAndTextInstructions,
            { status: 200 },
          )
        },
      ),
    )

    const { buttons } = await setUp({
      accessRequirementId:
        mockACTAccessRequirementWithWikiAndTextInstructions.id.toString(),
      onSave,
      onError,
      allowDeleteTextInstructions: true,
    })

    expect(buttons.editInstructions).toBeVisible()
    await confirmMarkdownSynapseIsShown()
    await confirmMarkdownSynapseTextContent(
      mockACTAccessRequirementWikiPage.markdown,
    )

    expect(buttons.deleteTextInstructions).not.toBeNull()
    expect(
      screen.getByText(
        mockACTAccessRequirementWithWikiAndTextInstructions.actContactInfo!,
      ),
    ).toBeVisible()
  })

  test('does not delete text instructions from ACT AR when cancelled', async () => {
    const { user, buttons } = await setUp({
      accessRequirementId: mockACTAccessRequirement.id.toString(),
      onSave,
      onError,
      allowDeleteTextInstructions: true,
    })

    expect(buttons.deleteTextInstructions).not.toBeNull()
    await user.click(buttons.deleteTextInstructions!)

    const confirmDialog = await screen.findByRole('dialog')
    expect(confirmDialog).toHaveTextContent('Are you sure?')

    const cancelBtn = within(confirmDialog).getByRole('button', {
      name: 'Cancel',
    })
    await user.click(cancelBtn)

    expect(updateAccessRequirementSpy).not.toHaveBeenCalled()
    expect(onSave).not.toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()
    expect(buttons.deleteTextInstructions).toBeInTheDocument()
  })

  test('deletes text instructions from ACT AR when confirmed', async () => {
    const { user, buttons } = await setUp({
      accessRequirementId: mockACTAccessRequirement.id.toString(),
      onSave,
      onError,
      allowDeleteTextInstructions: true,
    })

    expect(buttons.deleteTextInstructions).not.toBeNull()
    await user.click(buttons.deleteTextInstructions!)

    const confirmDialog = await screen.findByRole('dialog')
    expect(confirmDialog).toHaveTextContent('Are you sure?')

    const confirmBtn = within(confirmDialog).getByRole('button', { name: 'OK' })
    await user.click(confirmBtn)

    await waitFor(() => {
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(1)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        {
          ...mockACTAccessRequirement,
          actContactInfo: undefined,
        },
      )
      expect(onSave).not.toHaveBeenCalled()
      expect(onError).not.toHaveBeenCalled()
    })

    expect(confirmDialog).not.toBeVisible()

    await waitFor(() => {
      expect(buttons.deleteTextInstructions).not.toBeInTheDocument()
    })
  })

  test('does not show accessor requirements for terms of use AR', async () => {
    const { checkboxes } = await setUp({
      accessRequirementId: mockToUAccessRequirement.id.toString(),
      onSave,
      onError,
    })

    expect(checkboxes.isCertifiedUserRequired).toBeNull()
    expect(checkboxes.isValidatedProfileRequired).toBeNull()
  })

  test('deletes text instructions from terms of use AR', async () => {
    const { user, buttons } = await setUp({
      accessRequirementId: mockToUAccessRequirement.id.toString(),
      onSave,
      onError,
      allowDeleteTextInstructions: true,
    })

    expect(screen.getByText(mockToUAccessRequirement.termsOfUse!)).toBeVisible()
    expect(buttons.deleteTextInstructions).not.toBeNull()
    await user.click(buttons.deleteTextInstructions!)

    const confirmDialog = await screen.findByRole('dialog')
    expect(confirmDialog).toHaveTextContent('Are you sure?')

    const confirmBtn = within(confirmDialog).getByRole('button', { name: 'OK' })
    await user.click(confirmBtn)

    await waitFor(() => {
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(1)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        {
          ...mockToUAccessRequirement,
          termsOfUse: undefined,
        },
      )
      expect(onSave).not.toHaveBeenCalled()
      expect(onError).not.toHaveBeenCalled()
    })

    expect(confirmDialog).not.toBeVisible()

    await waitFor(() => {
      expect(buttons.deleteTextInstructions).not.toBeInTheDocument()
      expect(
        screen.queryByText(mockToUAccessRequirement.termsOfUse!),
      ).toBeNull()
    })
  })

  test('displays alert when error deleting text instructions', async () => {
    overrideUpdateAccessRequirementHandlerWithError()

    const { user, buttons } = await setUp({
      accessRequirementId: mockACTAccessRequirement.id.toString(),
      onSave,
      onError,
      allowDeleteTextInstructions: true,
    })

    await user.click(buttons.deleteTextInstructions!)

    const confirmDialog = await screen.findByRole('dialog')
    const confirmBtn = within(confirmDialog).getByRole('button', { name: 'OK' })
    await user.click(confirmBtn)

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(NON_ACT_ERROR_REASON)

    expect(onSave).not.toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()

    expect(confirmDialog).not.toBeVisible()
    expect(buttons.deleteTextInstructions).not.toBeNull()
  })

  test('displays alert when error updating AR', async () => {
    overrideUpdateAccessRequirementHandlerWithError()

    const { ref } = await setUp({
      accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
      onSave,
      onError,
    })
    await confirmMarkdownSynapseIsShown()

    // parent calls save
    ref?.current?.save()

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(NON_ACT_ERROR_REASON)

    expect(onError).toHaveBeenCalled()
    expect(onSave).not.toHaveBeenCalled()
  })
})
