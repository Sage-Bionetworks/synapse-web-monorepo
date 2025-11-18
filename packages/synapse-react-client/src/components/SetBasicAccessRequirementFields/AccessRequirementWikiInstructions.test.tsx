import {
  mockACTAccessRequirement,
  mockToUAccessRequirementWithWiki,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { mockToUAccessRequirementWikiPage } from '@/mocks/mockWiki'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import {
  confirmMarkdownSynapseTextContent,
  confirmMarkdownSynapseIsShown,
} from '@/testutils/MarkdownSynapseUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NO_WIKI_CONTENT } from '../Markdown/MarkdownSynapse/MarkdownSynapse'
import {
  AccessRequirementWikiInstructions,
  AccessRequirementWikiInstructionsProps,
} from './AccessRequirementWikiInstructions'

const createWikiPageSpy = vi.spyOn(SynapseClient, 'createWikiPage')
const updateWikiPageSpy = vi.spyOn(SynapseClient, 'updateWikiPage')

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
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('creates and edits new wiki when there is not an existing wiki', async () => {
    const props: AccessRequirementWikiInstructionsProps = {
      accessRequirement: mockACTAccessRequirement,
    }
    const { user, editBtn } = setUp(props)

    await confirmMarkdownSynapseTextContent(NO_WIKI_CONTENT)
    expect(editBtn).not.toBeDisabled()

    await user.click(editBtn)

    await waitFor(() => expect(createWikiPageSpy).toHaveBeenCalledTimes(1))

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

    // change getGetWikiPage since MarkdownSynapse will GET wiki rather than
    // ...reading from react query cache
    // changeGetWikiPageHandler({ ...createdWikiPage, markdown: newMarkdown })

    const saveBtn = within(editDialog).getByRole('button', { name: 'Save' })
    await user.click(saveBtn)

    await waitFor(() => {
      expect(editDialog).not.toBeInTheDocument()
    })

    await confirmMarkdownSynapseIsShown(1)
    await confirmMarkdownSynapseTextContent(newMarkdown)
  })

  test('edits an existing wiki', async () => {
    const props: AccessRequirementWikiInstructionsProps = {
      accessRequirement: mockToUAccessRequirementWithWiki,
    }
    const { user, editBtn } = setUp(props)

    await confirmMarkdownSynapseIsShown()
    await waitFor(() => {
      expect(screen.queryByText(NO_WIKI_CONTENT)).toBeNull()
      expect(editBtn).not.toBeDisabled()
    })

    await confirmMarkdownSynapseTextContent(
      mockToUAccessRequirementWikiPage.markdown,
    )

    await user.click(editBtn)

    const editDialog = await screen.findByRole('dialog', {
      name: 'Edit Wiki Markdown',
    })
    const markdownField = await within(editDialog).findByRole('textbox', {
      name: 'markdown',
    })
    expect(markdownField).toHaveValue(mockToUAccessRequirementWikiPage.markdown)

    const newMarkdown = 'Some new markdown AR instructions'
    await user.clear(markdownField)
    await user.type(markdownField, newMarkdown)
    expect(markdownField).toHaveValue(newMarkdown)

    const saveBtn = within(editDialog).getByRole('button', { name: 'Save' })
    await user.click(saveBtn)

    // Verify the update call is made and the edit dialog disappears
    await waitFor(() => {
      expect(updateWikiPageSpy).toHaveBeenCalledTimes(1)
      expect(editDialog).not.toBeInTheDocument()
    })

    // Verify that the data is refreshed and the new markdown is displayed
    await confirmMarkdownSynapseTextContent(newMarkdown)

    // Verify no wiki page was ever created
    expect(createWikiPageSpy).not.toHaveBeenCalled()
  })
})
