import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { mockEntityRootWikiPage, mockEntityWikiPage } from '@/mocks/mockWiki'
import {
  mockEntityRootWikiPageKey,
  mockEntityWikiPageKey,
} from '@/mocks/mockWikiPageKey'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { WIKI_PAGE_ID } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { ErrorResponse } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import {
  ERROR_SAVING_WIKI,
  NAVIGATE_AWAY_CONFIRMATION_MESSAGE,
  UNSAVED_CHANGES,
  WikiMarkdownEditor,
  WikiMarkdownEditorProps,
} from './WikiMarkdownEditor'

const onCancel = vi.fn()
const onSave = vi.fn()
const updateWikiPageSpy = vi.spyOn(SynapseClient, 'updateWikiPage')

const defaultRootWikiPageProps: WikiMarkdownEditorProps = {
  onSave,
  onCancel,
  open: true,
  ownerObjectId: mockEntityRootWikiPageKey.ownerObjectId,
  ownerObjectType: mockEntityRootWikiPageKey.ownerObjectType,
  wikiPage: mockEntityRootWikiPage,
}

const defaultSubWikiPageProps: WikiMarkdownEditorProps = {
  onSave,
  onCancel,
  open: true,
  ownerObjectId: mockEntityWikiPageKey.ownerObjectId,
  ownerObjectType: mockEntityWikiPageKey.ownerObjectType,
  wikiPage: mockEntityWikiPage,
}

function renderComponent(props: WikiMarkdownEditorProps) {
  return render(<WikiMarkdownEditor {...props} />, {
    wrapper: createWrapper(),
  })
}

function queryTitleField() {
  return screen.queryByRole('textbox', { name: 'Title' })
}

function queryMarkdownField() {
  return screen.queryByRole('textbox', { name: 'markdown' })
}

function setUp(props: WikiMarkdownEditorProps) {
  const user = userEvent.setup()
  const component = renderComponent(props)

  return { component, user }
}

async function waitForMarkdownSet(markdown: string) {
  return await waitFor(() => {
    const markdownField = queryMarkdownField()
    expect(markdownField).not.toBeNull()
    expect(markdownField).toHaveValue(markdown)
    return markdownField!
  })
}

async function waitForTitleSet(title: string) {
  return await waitFor(() => {
    const titleField = queryTitleField()
    expect(titleField).not.toBeNull()
    expect(titleField).toHaveValue(title)
    return titleField!
  })
}

describe('WikiMarkdownEditor', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('does not display title for root WikiPage', async () => {
    setUp(defaultRootWikiPageProps)
    await waitForMarkdownSet(mockEntityRootWikiPage.markdown)
    expect(queryTitleField()).toBeNull()
  })

  test('displays title for non-root WikiPage', async () => {
    setUp(defaultSubWikiPageProps)
    await waitForMarkdownSet(mockEntityWikiPage.markdown)
    expect(queryTitleField()).not.toBeNull()
  })

  test('warns user before cancelling if markdown has changed', async () => {
    const { user } = setUp(defaultRootWikiPageProps)

    const markdownField = await waitForMarkdownSet(
      mockEntityRootWikiPage.markdown,
    )

    const extraText = 'some extra text'
    await user.type(markdownField, extraText)
    expect(markdownField).toHaveValue(
      mockEntityRootWikiPage.markdown + extraText,
    )

    const cancelBtn = screen.getByRole('button', { name: 'Cancel' })
    await user.click(cancelBtn)

    const confirmDialog = await screen.findByRole('dialog', {
      name: UNSAVED_CHANGES,
    })
    expect(confirmDialog).toHaveTextContent(NAVIGATE_AWAY_CONFIRMATION_MESSAGE)
    expect(onCancel).not.toHaveBeenCalled()

    const confirmBtn = screen.getByRole('button', { name: 'OK' })
    await user.click(confirmBtn)

    await waitFor(() => {
      expect(confirmDialog).not.toBeInTheDocument()
    })
    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onSave).not.toHaveBeenCalled()
    expect(updateWikiPageSpy).not.toHaveBeenCalled()
  })

  test('allows user to abort cancelling if markdown has changed', async () => {
    const { user } = setUp(defaultRootWikiPageProps)

    const markdownField = await waitForMarkdownSet(
      mockEntityRootWikiPage.markdown,
    )

    const extraText = 'some extra text'
    await user.type(markdownField, extraText)
    expect(markdownField).toHaveValue(
      mockEntityRootWikiPage.markdown + extraText,
    )

    const cancelBtn = screen.getByRole('button', { name: 'Cancel' })
    await user.click(cancelBtn)

    const confirmDialog = await screen.findByRole('dialog', {
      name: UNSAVED_CHANGES,
    })
    expect(confirmDialog).toHaveTextContent(NAVIGATE_AWAY_CONFIRMATION_MESSAGE)
    expect(onCancel).not.toHaveBeenCalled()

    const confirmDialogCancelBtn = within(confirmDialog).getByRole('button', {
      name: 'Cancel',
    })
    await user.click(confirmDialogCancelBtn)

    await waitFor(() => {
      expect(confirmDialog).not.toBeInTheDocument()
    })
    expect(onCancel).not.toHaveBeenCalled()
    expect(onSave).not.toHaveBeenCalled()
    expect(updateWikiPageSpy).not.toHaveBeenCalled()
  })

  test('does not warn user before cancelling if markdown has not changed', async () => {
    const { user } = setUp(defaultRootWikiPageProps)

    await waitForMarkdownSet(mockEntityRootWikiPage.markdown)

    const cancelBtn = screen.getByRole('button', { name: 'Cancel' })
    await user.click(cancelBtn)

    await waitFor(() => {
      expect(onCancel).toHaveBeenCalledTimes(1)
      expect(onSave).not.toHaveBeenCalled()
      expect(updateWikiPageSpy).not.toHaveBeenCalled()
    })
  })

  test('updates wiki page', async () => {
    const { user } = setUp(defaultSubWikiPageProps)

    const markdownField = await waitForMarkdownSet(mockEntityWikiPage.markdown)
    const newMarkdown = 'some new markdown'
    await user.clear(markdownField)
    await user.type(markdownField, newMarkdown)

    const titleField = await waitForTitleSet(mockEntityWikiPage.title)
    const newTitle = 'a great new title'
    await user.clear(titleField)
    await user.type(titleField, newTitle)

    const saveBtn = screen.getByRole('button', { name: 'Save' })
    await user.click(saveBtn)

    await waitFor(() => {
      expect(updateWikiPageSpy).toHaveBeenCalledTimes(1)
      expect(updateWikiPageSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        mockEntityWikiPageKey.ownerObjectType,
        mockEntityWikiPageKey.ownerObjectId,
        {
          ...mockEntityWikiPage,
          title: newTitle,
          markdown: newMarkdown,
        },
      )
      expect(onSave).toHaveBeenCalled()
      expect(onCancel).not.toHaveBeenCalled()
    })
  })

  test('displays error if failed to update wiki page', async () => {
    const errorResponse: ErrorResponse = {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: `USER is not authorized to 'UPDATE' a WikiPage with an ownerId ${defaultSubWikiPageProps.ownerObjectId} of type: '${defaultSubWikiPageProps.ownerObjectType}'`,
    }
    server.use(
      http.put(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${WIKI_PAGE_ID(
          defaultSubWikiPageProps.ownerObjectType,
          ':ownerObjectId',
          ':wikiPageId',
        )}`,
        () => {
          return HttpResponse.json(errorResponse, { status: 403 })
        },
      ),
    )

    const { user } = setUp(defaultSubWikiPageProps)

    const markdownField = await waitForMarkdownSet(mockEntityWikiPage.markdown)
    const newMarkdown = 'some new markdown'
    await user.clear(markdownField)
    await user.type(markdownField, newMarkdown)

    const saveBtn = screen.getByRole('button', { name: 'Save' })
    await user.click(saveBtn)

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(ERROR_SAVING_WIKI + errorResponse.reason)

    expect(onSave).not.toHaveBeenCalled()
    expect(onCancel).not.toHaveBeenCalled()
  })
})
