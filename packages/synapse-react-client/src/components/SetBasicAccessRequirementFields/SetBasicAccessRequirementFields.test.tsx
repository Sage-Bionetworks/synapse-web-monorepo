import { ACTAccessRequirement } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import {
  mockACTAccessRequirement,
  mockACTAccessRequirementWithWiki,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '../../mocks/mockAccessRequirements'
import {
  mockACTAccessRequirementWikiPage,
  mockSelfSignAccessRequirementWikiPage,
} from '../../mocks/mockWiki'
import { server } from '../../mocks/msw/server'
import SynapseClient from '../../synapse-client'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { MarkdownSynapse } from '../Markdown'
import {
  SetBasicAccessRequirementFields,
  SetBasicAccessRequirementFieldsHandle,
  SetBasicAccessRequirementFieldsProps,
} from './SetBasicAccessRequirementFields'

const MARKDOWN_SYNAPSE_TEST_ID = 'MarkdownSynapseContent'
jest.mock('../Markdown/MarkdownSynapse', () => ({
  __esModule: true,
  default: jest.fn(),
}))
const mockMarkdownSynapse = jest.mocked(MarkdownSynapse)
mockMarkdownSynapse.mockImplementation(
  () => (<div data-testid={MARKDOWN_SYNAPSE_TEST_ID} />) as any,
)
async function confirmMarkdown(markdown: string) {
  await screen.findByTestId(MARKDOWN_SYNAPSE_TEST_ID)
  expect(mockMarkdownSynapse).toHaveBeenCalledWith(
    expect.objectContaining({
      markdown: markdown,
    }),
    expect.anything(),
  )
}

const onSaveComplete = jest.fn()
const updateAccessRequirementSpy = jest.spyOn(
  SynapseClient,
  'updateAccessRequirement',
)

function renderComponent(props: SetBasicAccessRequirementFieldsProps) {
  const ref = React.createRef<SetBasicAccessRequirementFieldsHandle>()
  const component = render(
    <SetBasicAccessRequirementFields ref={ref} {...props} />,
    {
      wrapper: createWrapper(),
    },
  )
  return { ref, component }
}

function setUp(props: SetBasicAccessRequirementFieldsProps) {
  const user = userEvent.setup()
  const { ref, component } = renderComponent(props)

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
  beforeEach(() => jest.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  test('does not show text instructions for self-signed AR', () => {
    const { buttons } = setUp({
      accessRequirement: mockSelfSignAccessRequirement,
      onSaveComplete,
    })
    expect(buttons.deleteTextInstructions).toBeNull()
  })

  test('displays existing wiki for self-signed AR', async () => {
    const { buttons } = setUp({
      accessRequirement: mockSelfSignAccessRequirement,
      onSaveComplete,
    })
    expect(buttons.editInstructions).toBeVisible()
    await confirmMarkdown(mockSelfSignAccessRequirementWikiPage.markdown)
  })

  test('updates accessor requirements for self-signed AR', async () => {
    const { user, ref, checkboxes } = setUp({
      accessRequirement: mockSelfSignAccessRequirement,
      onSaveComplete,
    })

    expect(checkboxes.isCertifiedUserRequired).not.toBeNull()
    expect(checkboxes.isValidatedProfileRequired).not.toBeNull()
    expect(checkboxes.isCertifiedUserRequired).toBeChecked()
    expect(checkboxes.isValidatedProfileRequired).toBeChecked()

    await user.click(checkboxes.isCertifiedUserRequired!)
    await user.click(checkboxes.isValidatedProfileRequired!)

    expect(checkboxes.isCertifiedUserRequired).not.toBeChecked()
    expect(checkboxes.isValidatedProfileRequired).not.toBeChecked()
    expect(onSaveComplete).not.toHaveBeenCalled()

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
    expect(onSaveComplete).toHaveBeenCalled()
  })

  test('does not show accessor requirements for ACT AR', () => {
    const { checkboxes } = setUp({
      accessRequirement: mockACTAccessRequirement,
      onSaveComplete,
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
    const { buttons } = setUp({
      accessRequirement: mockACTAccessRequirementWithWikiAndTextInstructions,
      onSaveComplete,
    })

    expect(buttons.editInstructions).toBeVisible()
    await confirmMarkdown(mockACTAccessRequirementWikiPage.markdown)

    expect(buttons.deleteTextInstructions).not.toBeNull()
    expect(
      screen.getByText(
        mockACTAccessRequirementWithWikiAndTextInstructions.actContactInfo!,
      ),
    ).toBeVisible()
  })

  test('does not delete text instructions from ACT AR when cancelled', async () => {
    const { user, buttons } = setUp({
      accessRequirement: mockACTAccessRequirement,
      onSaveComplete,
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
    expect(onSaveComplete).not.toHaveBeenCalled()
    expect(buttons.deleteTextInstructions).toBeInTheDocument()
  })

  test('deletes text instructions from ACT AR when confirmed', async () => {
    const { user, buttons } = setUp({
      accessRequirement: mockACTAccessRequirement,
      onSaveComplete,
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
      expect(onSaveComplete).not.toHaveBeenCalled()
    })

    expect(confirmDialog).not.toBeVisible()
    expect(buttons.deleteTextInstructions).not.toBeInTheDocument()
  })

  test('does not show accessor requirements for terms of use AR', () => {
    const { checkboxes } = setUp({
      accessRequirement: mockToUAccessRequirement,
      onSaveComplete,
    })
    expect(checkboxes.isCertifiedUserRequired).toBeNull()
    expect(checkboxes.isValidatedProfileRequired).toBeNull()
  })

  test('deletes text instructions from terms of use AR', async () => {
    const { user, buttons } = setUp({
      accessRequirement: mockToUAccessRequirement,
      onSaveComplete,
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
      expect(onSaveComplete).not.toHaveBeenCalled()
    })

    expect(confirmDialog).not.toBeVisible()
    expect(buttons.deleteTextInstructions).not.toBeInTheDocument()
    expect(screen.queryByText(mockToUAccessRequirement.termsOfUse!)).toBeNull()
  })
})
