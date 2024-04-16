import { ErrorResponse, ObjectType } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import {
  mockEntityRootWikiPage,
  mockEntityWikiPage,
} from '../../mocks/mockWiki'
import {
  mockEntityRootWikiPageKey,
  mockEntityWikiPageKey,
} from '../../mocks/mockWikiPageKey'
import { rest, server } from '../../mocks/msw/server'
import SynapseClient from '../../synapse-client'
import { CreateWikiPageInput } from '../../synapse-queries'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { WIKI_PAGE } from '../../utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'
import {
  ERROR_SAVING_WIKI,
  NAVIGATE_AWAY_CONFIRMATION_MESSAGE,
  UNSAVED_CHANGES,
  WikiMarkdownEditor,
  WikiMarkdownEditorProps,
} from './WikiMarkdownEditor'

const onCancel = jest.fn()
const onSave = jest.fn()

const getRootWikiPageKeySpy = jest.spyOn(SynapseClient, 'getRootWikiPageKey')
const getWikiPageSpy = jest.spyOn(SynapseClient, 'getWikiPage')
const createWikiPageSpy = jest.spyOn(SynapseClient, 'createWikiPage')
const updateWikiPageSpy = jest.spyOn(SynapseClient, 'updateWikiPage')

const defaultNoRootProps: WikiMarkdownEditorProps = {
  onSave,
  onCancel,
  ownerObjectId: '10000',
  ownerObjectType: ObjectType.ENTITY,
}
const defaultExistingRootWikiPageProps: WikiMarkdownEditorProps = {
  onSave,
  onCancel,
  ownerObjectId: mockEntityRootWikiPageKey.ownerObjectId,
  ownerObjectType: mockEntityRootWikiPageKey.ownerObjectType,
}
const defaultExistingWikiPageProps: WikiMarkdownEditorProps = {
  onSave,
  onCancel,
  ownerObjectId: mockEntityWikiPageKey.ownerObjectId,
  ownerObjectType: mockEntityWikiPageKey.ownerObjectType,
  wikiPageId: mockEntityWikiPageKey.wikiPageId,
}

const mockCreateRootWikiPage: CreateWikiPageInput['wikiPage'] = {
  parentWikiId: undefined,
  title: '',
  markdown: '',
  attachmentFileHandleIds: [],
}

function renderComponent(props: WikiMarkdownEditorProps) {
  return render(<WikiMarkdownEditor {...props} />, {
    wrapper: createWrapper(),
  })
}

function getEditorDialog() {
  return screen.getByRole('dialog', {
    name: 'Edit Wiki Markdown',
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
  beforeEach(() => jest.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('creates a root WikiPage when there was not an existing root WikiPage', async () => {
    setUp(defaultNoRootProps)

    expect(queryTitleField()).toBeNull()
    expect(queryMarkdownField()).toBeNull()

    await waitFor(() => {
      expect(getRootWikiPageKeySpy).toHaveBeenCalledTimes(1)
      expect(getRootWikiPageKeySpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        defaultNoRootProps.ownerObjectType,
        defaultNoRootProps.ownerObjectId,
      )
    })

    // root WikiPageKey not found
    expect(await getRootWikiPageKeySpy.mock.results[0].value).toBe(null)

    await waitFor(() => {
      expect(createWikiPageSpy).toHaveBeenCalledTimes(1)
      expect(createWikiPageSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        defaultNoRootProps.ownerObjectType,
        defaultNoRootProps.ownerObjectId,
        mockCreateRootWikiPage,
      )
    })

    // should get new WikiPage from cache, so another call is not necessary
    expect(getWikiPageSpy).not.toHaveBeenCalled()

    await waitFor(() => {
      expect(screen.queryByRole('alert')).toBeNull()
      expect(queryTitleField()).toBeNull()
    })

    await waitForMarkdownSet('')
  })

  test('finds and displays an existing root WikiPage', async () => {
    setUp(defaultExistingRootWikiPageProps)

    expect(queryTitleField()).toBeNull()
    expect(queryMarkdownField()).toBeNull()

    await waitFor(() => {
      expect(getRootWikiPageKeySpy).toHaveBeenCalledTimes(1)
      expect(getRootWikiPageKeySpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        defaultExistingRootWikiPageProps.ownerObjectType,
        defaultExistingRootWikiPageProps.ownerObjectId,
      )
    })

    expect(await getRootWikiPageKeySpy.mock.results[0].value).toStrictEqual(
      mockEntityRootWikiPageKey,
    )

    await waitFor(() => {
      expect(getWikiPageSpy).toHaveBeenCalled()
      expect(getWikiPageSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        mockEntityRootWikiPageKey,
      )
    })

    expect(screen.queryByRole('alert')).toBeNull()
    expect(queryTitleField()).toBeNull()

    await waitForMarkdownSet(mockEntityRootWikiPage.markdown)
  })

  test('displays error when user cannot create the root WikiPage', async () => {
    const errorResponse: ErrorResponse = {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: `User is not authorized to 'CREATE' a WikiPage with an ownerId: '${defaultNoRootProps.ownerObjectId}' of type: '${defaultNoRootProps.ownerObjectType}'`,
    }
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${WIKI_PAGE(
          defaultNoRootProps.ownerObjectType,
          ':ownerObjectId',
        )}`,
        async (req, res, ctx) => {
          return res(ctx.status(403), ctx.json(errorResponse))
        },
      ),
    )

    setUp(defaultNoRootProps)

    await waitFor(() => {
      expect(getRootWikiPageKeySpy).toHaveBeenCalledTimes(1)
      expect(getRootWikiPageKeySpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        defaultNoRootProps.ownerObjectType,
        defaultNoRootProps.ownerObjectId,
      )
    })

    // root WikiPageKey not found
    expect(await getRootWikiPageKeySpy.mock.results[0].value).toBe(null)

    await waitFor(() => {
      expect(createWikiPageSpy).toHaveBeenCalledTimes(1)
      expect(createWikiPageSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        defaultNoRootProps.ownerObjectType,
        defaultNoRootProps.ownerObjectId,
        mockCreateRootWikiPage,
      )
    })

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(errorResponse.reason)
  })

  test('displays an existing WikiPage', async () => {
    setUp(defaultExistingWikiPageProps)

    await waitFor(() => {
      expect(getWikiPageSpy).toHaveBeenCalledTimes(1)
      expect(getWikiPageSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        mockEntityWikiPageKey,
      )
    })

    expect(await getWikiPageSpy.mock.results[0].value).toMatchObject(
      mockEntityWikiPage,
    )

    expect(getRootWikiPageKeySpy).not.toHaveBeenCalled()
    expect(createWikiPageSpy).not.toHaveBeenCalled()

    await waitForTitleSet(mockEntityWikiPage.title)
    await waitForMarkdownSet(mockEntityWikiPage.markdown)
  })

  test('does not display title for root WikiPage', async () => {
    setUp(defaultExistingRootWikiPageProps)
    await waitForMarkdownSet('')
    expect(queryTitleField()).toBeNull()
  })

  test('displays title for non-root WikiPage', async () => {
    setUp(defaultExistingWikiPageProps)
    await waitForMarkdownSet('')
    expect(queryTitleField()).not.toBeNull()
  })

  test('warns user before cancelling if markdown has changed', async () => {
    const { user } = setUp(defaultExistingRootWikiPageProps)

    const editorDialog = getEditorDialog()

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
      expect(editorDialog).not.toBeInTheDocument()
    })
    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onSave).not.toHaveBeenCalled()
    expect(updateWikiPageSpy).not.toHaveBeenCalled()
  })

  test('allows user to abort cancelling if markdown has changed', async () => {
    const { user } = setUp(defaultExistingRootWikiPageProps)

    const editorDialog = getEditorDialog()

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
    expect(editorDialog).toBeInTheDocument()
  })

  test('does not warn user before cancelling if markdown has not changed', async () => {
    const { user } = setUp(defaultExistingRootWikiPageProps)

    const editorDialog = getEditorDialog()
    await waitForMarkdownSet(mockEntityRootWikiPage.markdown)

    const cancelBtn = screen.getByRole('button', { name: 'Cancel' })
    await user.click(cancelBtn)

    await waitFor(() => {
      expect(editorDialog).not.toBeInTheDocument()
      expect(onCancel).toHaveBeenCalledTimes(1)
      expect(onSave).not.toHaveBeenCalled()
      expect(updateWikiPageSpy).not.toHaveBeenCalled()
    })
  })

  test('updates wiki page', async () => {
    const { user } = setUp(defaultExistingWikiPageProps)
    const editorDialog = getEditorDialog()

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
      expect(editorDialog).not.toBeInTheDocument()
      expect(onSave).toHaveBeenCalled()
      expect(onCancel).not.toHaveBeenCalled()
    })
  })

  test('displays error if failed to update wiki page', async () => {
    const errorResponse: ErrorResponse = {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: `USER is not authorized to 'UPDATE' a WikiPage with an ownerId ${defaultExistingWikiPageProps.ownerObjectId} of type: '${defaultExistingRootWikiPageProps.ownerObjectType}'`,
    }
    server.use(
      rest.put(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${WIKI_PAGE(
          defaultExistingWikiPageProps.ownerObjectType,
          ':ownerObjectId',
        )}/:wikiPageId`,
        async (req, res, ctx) => {
          return res(ctx.status(403), ctx.json(errorResponse))
        },
      ),
    )

    const { user } = setUp(defaultExistingWikiPageProps)

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
