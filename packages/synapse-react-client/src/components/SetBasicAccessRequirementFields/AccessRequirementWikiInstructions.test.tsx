import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  mockACTAccessRequirement,
  mockACTAccessRequirementWithWiki,
} from '../../mocks/mockAccessRequirements'
import { mockACTAccessRequirementWikiPage } from '../../mocks/mockWiki'
import { server } from '../../mocks/msw/server'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { MarkdownSynapse } from '../Markdown'
import { NO_WIKI_CONTENT } from '../WikiMarkdownEditorButton/WikiMarkdownEditorButton'
import {
  AccessRequirementWikiInstructions,
  AccessRequirementWikiInstructionsProps,
} from './AccessRequirementWikiInstructions'

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
  expect(mockMarkdownSynapse).toHaveBeenLastCalledWith(
    expect.objectContaining({
      markdown: markdown,
    }),
    expect.anything(),
  )
}

function renderComponent(props: AccessRequirementWikiInstructionsProps) {
  return render(<AccessRequirementWikiInstructions {...props} />, {
    wrapper: createWrapper(),
  })
}

function setUp(props: AccessRequirementWikiInstructionsProps) {
  const user = userEvent.setup()
  const component = renderComponent(props)

  const editBtn = screen.getByRole('button', { name: 'Edit Instructions' })

  return { component, user, editBtn }
}

describe('AccessRequirementWikiInstructions', () => {
  beforeEach(() => jest.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('creates and edits new wiki when there is not an existing wiki', async () => {
    const props: AccessRequirementWikiInstructionsProps = {
      accessRequirement: mockACTAccessRequirement,
    }
    const { user, editBtn } = setUp(props)

    await waitFor(() => {
      expect(editBtn).not.toBeDisabled()
      expect(screen.queryByText(NO_WIKI_CONTENT)).not.toBeNull()
    })

    await user.click(editBtn)

    const editDialog = await screen.findByRole('dialog', {
      name: 'Edit Wiki Markdown',
    })
    const markdownField = await within(editDialog).findByRole('textbox', {
      name: 'markdown',
    })
    expect(markdownField).toHaveValue('')

    const newMarkdown = 'Some new markdown AR instructions'
    await user.type(markdownField, newMarkdown)
    expect(markdownField).toHaveValue(newMarkdown)

    const saveBtn = within(editDialog).getByRole('button', { name: 'Save' })
    await user.click(saveBtn)

    await waitFor(() => {
      expect(editDialog).not.toBeInTheDocument()
    })

    await confirmMarkdown(newMarkdown)
    expect(screen.queryByText(NO_WIKI_CONTENT)).toBeNull()
  })

  test('edits an existing wiki', async () => {
    const props: AccessRequirementWikiInstructionsProps = {
      accessRequirement: mockACTAccessRequirementWithWiki,
    }
    const { user, editBtn } = setUp(props)

    await confirmMarkdown(mockACTAccessRequirementWikiPage.markdown)
    expect(screen.queryByText(NO_WIKI_CONTENT)).toBeNull()
    expect(editBtn).not.toBeDisabled()

    await user.click(editBtn)

    const editDialog = await screen.findByRole('dialog', {
      name: 'Edit Wiki Markdown',
    })
    const markdownField = await within(editDialog).findByRole('textbox', {
      name: 'markdown',
    })
    expect(markdownField).toHaveValue(mockACTAccessRequirementWikiPage.markdown)

    const newMarkdown = 'Some new markdown AR instructions'
    await user.clear(markdownField)
    await user.type(markdownField, newMarkdown)
    expect(markdownField).toHaveValue(newMarkdown)

    const saveBtn = within(editDialog).getByRole('button', { name: 'Save' })
    await user.click(saveBtn)

    await waitFor(() => {
      expect(editDialog).not.toBeInTheDocument()
    })

    await confirmMarkdown(newMarkdown)
  })
})
