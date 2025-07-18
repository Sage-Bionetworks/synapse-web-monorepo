import { mockToUAccessRequirementWithWikiPageKey } from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import {
  mockEntityRootWikiPage,
  mockEntityWikiPage,
  mockToUAccessRequirementWikiPage,
} from '@/mocks/mockWiki'
import {
  mockEntityRootWikiPageKey,
  mockEntityWikiPageKey,
} from '@/mocks/mockWikiPageKey'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { CreateWikiPageInput } from '@/synapse-queries'
import {
  confirmMarkdownSynapseIsShown,
  confirmMarkdownSynapseTextContent,
} from '@/testutils/MarkdownSynapseUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { WIKI_PAGE } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { ErrorResponse, ObjectType } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { NO_WIKI_CONTENT } from '../Markdown/MarkdownSynapse'
import {
  DEFAULT_BUTTON_TEXT,
  WikiMarkdownEditorButton,
  WikiMarkdownEditorButtonProps,
} from './WikiMarkdownEditorButton'

const getRootWikiPageKeySpy = vi.spyOn(SynapseClient, 'getRootWikiPageKey')
const getWikiPageSpy = vi.spyOn(SynapseClient, 'getWikiPage')
const createWikiPageSpy = vi.spyOn(SynapseClient, 'createWikiPage')

const noRootProps: WikiMarkdownEditorButtonProps = {
  ownerObjectId: '10000',
  ownerObjectType: ObjectType.ENTITY,
}
const existingRootProps: WikiMarkdownEditorButtonProps = {
  ownerObjectId: mockEntityRootWikiPageKey.ownerObjectId,
  ownerObjectType: mockEntityRootWikiPageKey.ownerObjectType,
}
const existingSubpageProps: WikiMarkdownEditorButtonProps = {
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

function renderComponent(props: WikiMarkdownEditorButtonProps) {
  return render(<WikiMarkdownEditorButton {...props} />, {
    wrapper: createWrapper(),
  })
}

function setUp(props: WikiMarkdownEditorButtonProps) {
  const user = userEvent.setup()
  const component = renderComponent(props)
  const button = screen.getByRole('button', { name: DEFAULT_BUTTON_TEXT })

  return { component, user, button }
}

async function waitForNotDisabled(button: HTMLElement) {
  await waitFor(() => {
    expect(button).not.toBeDisabled()
  })
}

async function findEditorDialog() {
  return await screen.findByRole('dialog', {
    name: 'Edit Wiki Markdown',
  })
}

function queryTitleField(dialog: HTMLElement) {
  return within(dialog).queryByRole('textbox', { name: 'Title' })
}

function getMarkdownField(dialog: HTMLElement) {
  return within(dialog).getByRole('textbox', { name: 'markdown' })
}

describe('WikiMarkdownEditorButton', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('creates a root WikiPage when there was not an existing root WikiPage after user clicks edit button', async () => {
    const { button, user } = setUp(noRootProps)

    expect(button).toBeDisabled()

    await waitFor(() => {
      expect(getRootWikiPageKeySpy).toHaveBeenCalledTimes(1)
      expect(getRootWikiPageKeySpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        noRootProps.ownerObjectType,
        noRootProps.ownerObjectId,
      )
    })

    // root WikiPageKey not found
    expect(await getRootWikiPageKeySpy.mock.results[0].value).toBe(null)
    expect(createWikiPageSpy).not.toHaveBeenCalled()
    expect(getWikiPageSpy).not.toHaveBeenCalled()

    await waitForNotDisabled(button)
    await user.click(button)

    await waitFor(() => {
      expect(createWikiPageSpy).toHaveBeenCalledTimes(1)
      expect(createWikiPageSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        noRootProps.ownerObjectType,
        noRootProps.ownerObjectId,
        mockCreateRootWikiPage,
      )
    })

    // should get new WikiPage from cache, so another call is not necessary
    expect(getWikiPageSpy).not.toHaveBeenCalled()

    const dialog = await findEditorDialog()
    expect(screen.queryByRole('alert')).toBeNull()
    expect(queryTitleField(dialog)).toBeNull()
    expect(getMarkdownField(dialog)).toHaveValue('')
  })

  test('finds and displays an existing root WikiPage after user clicks edit button', async () => {
    const { button, user } = setUp(existingRootProps)

    expect(button).toBeDisabled()

    await waitFor(() => {
      expect(getRootWikiPageKeySpy).toHaveBeenCalledTimes(1)
      expect(getRootWikiPageKeySpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        existingRootProps.ownerObjectType,
        existingRootProps.ownerObjectId,
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

    expect(await getWikiPageSpy.mock.results[0].value).toStrictEqual(
      mockEntityRootWikiPage,
    )

    expect(createWikiPageSpy).not.toHaveBeenCalled()

    await waitForNotDisabled(button)
    await user.click(button)

    const dialog = await findEditorDialog()
    expect(screen.queryByRole('alert')).toBeNull()
    expect(queryTitleField(dialog)).toBeNull()
    expect(getMarkdownField(dialog)).toHaveValue(
      mockEntityRootWikiPage.markdown,
    )
  })

  test('displays error when user cannot create the root WikiPage after user clicks edit button', async () => {
    const errorResponse: ErrorResponse = {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: `User is not authorized to 'CREATE' a WikiPage with an ownerId: '${noRootProps.ownerObjectId}' of type: '${noRootProps.ownerObjectType}'`,
    }
    server.use(
      http.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${WIKI_PAGE(
          noRootProps.ownerObjectType,
          ':ownerObjectId',
        )}`,
        () => {
          return HttpResponse.json(errorResponse, { status: 403 })
        },
      ),
    )

    const { button, user } = setUp(noRootProps)

    await waitFor(() => {
      expect(getRootWikiPageKeySpy).toHaveBeenCalledTimes(1)
      expect(getRootWikiPageKeySpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        noRootProps.ownerObjectType,
        noRootProps.ownerObjectId,
      )
    })

    // root WikiPageKey not found
    expect(await getRootWikiPageKeySpy.mock.results[0].value).toBe(null)

    await waitForNotDisabled(button)
    await user.click(button)

    await waitFor(() => {
      expect(createWikiPageSpy).toHaveBeenCalledTimes(1)
      expect(createWikiPageSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        noRootProps.ownerObjectType,
        noRootProps.ownerObjectId,
        mockCreateRootWikiPage,
      )
    })

    await waitForNotDisabled(button)

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(errorResponse.reason)
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  test('displays an existing WikiPage after user clicks edit button', async () => {
    const { button, user } = setUp(existingSubpageProps)

    expect(button).toBeDisabled()

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

    await waitForNotDisabled(button)
    await user.click(button)

    const dialog = await findEditorDialog()

    const titleField = queryTitleField(dialog)
    expect(titleField).not.toBeNull()
    expect(titleField).toHaveValue(mockEntityWikiPage.title)

    expect(getMarkdownField(dialog)).toHaveValue(mockEntityWikiPage.markdown)
  })

  test('closes editor after user clicks cancel in editor', async () => {
    const { button, user } = setUp(existingSubpageProps)

    await waitForNotDisabled(button)
    await user.click(button)

    const dialog = await findEditorDialog()

    const cancelBtn = within(dialog).getByRole('button', { name: 'Cancel' })
    await user.click(cancelBtn)

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument()
    })
  })

  test('closes editor after user clicks save in editor', async () => {
    const { button, user } = setUp(existingSubpageProps)

    await waitForNotDisabled(button)
    await user.click(button)

    const dialog = await findEditorDialog()

    const saveBtn = within(dialog).getByRole('button', { name: 'Save' })
    await user.click(saveBtn)

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument()
    })
  })

  test('displays root wiki markdown for entity', async () => {
    const { button } = setUp({
      ...existingRootProps,
      displayWikiMarkdown: true,
    })

    await waitForNotDisabled(button)
    await confirmMarkdownSynapseIsShown()
    await confirmMarkdownSynapseTextContent(mockEntityRootWikiPage.markdown)
  })

  test('displays wiki subpage markdown for entity', async () => {
    const { button } = setUp({
      ...existingSubpageProps,
      displayWikiMarkdown: true,
    })

    await waitForNotDisabled(button)
    await confirmMarkdownSynapseIsShown()
    await confirmMarkdownSynapseTextContent(mockEntityWikiPage.markdown)
  })

  test('displays root wiki markdown for access requirement', async () => {
    const arProps: WikiMarkdownEditorButtonProps = {
      ownerObjectId: mockToUAccessRequirementWithWikiPageKey.ownerObjectId,
      ownerObjectType: mockToUAccessRequirementWithWikiPageKey.ownerObjectType,
      displayWikiMarkdown: true,
    }
    const { button } = setUp(arProps)

    await waitForNotDisabled(button)
    await confirmMarkdownSynapseIsShown()
    await confirmMarkdownSynapseTextContent(
      mockToUAccessRequirementWikiPage.markdown,
    )
  })

  test('displays wiki markdown placeholder when no existing wiki page', async () => {
    const { button } = setUp({
      ...noRootProps,
      displayWikiMarkdown: true,
    })

    await waitForNotDisabled(button)
    await screen.findByText(NO_WIKI_CONTENT)
  })

  test('does not display wiki markdown by default', async () => {
    const { button } = setUp(noRootProps)

    await waitForNotDisabled(button)
    expect(screen.queryByLabelText('markdown')).toBeNull()
    expect(screen.queryByText(NO_WIKI_CONTENT)).toBeNull()
  })
})
