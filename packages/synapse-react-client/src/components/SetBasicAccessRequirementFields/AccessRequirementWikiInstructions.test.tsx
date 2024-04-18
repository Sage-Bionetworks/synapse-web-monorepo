import { ObjectType, WikiPage } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  mockACTAccessRequirement,
  mockToUAccessRequirementWithWiki,
} from '../../mocks/mockAccessRequirements'
import { mockToUAccessRequirementWikiPage } from '../../mocks/mockWiki'
import { rest, server } from '../../mocks/msw/server'
import SynapseClient from '../../synapse-client'
import {
  confirmMarkdownSynapseTextContent,
  expectMarkdownSynapseNotToGetWiki,
  waitForMarkdownSynapseToGetWiki,
} from '../../testutils/MarkdownSynapseUtils'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { WIKI_PAGE } from '../../utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'
import { NO_WIKI_CONTENT } from '../Markdown/MarkdownSynapse'
import {
  AccessRequirementWikiInstructions,
  AccessRequirementWikiInstructionsProps,
} from './AccessRequirementWikiInstructions'

const createWikiPageSpy = jest.spyOn(SynapseClient, 'createWikiPage')
const changeGetWikiPageHandlerOnce = (wikiPage: WikiPage) => {
  return server.use(
    rest.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${WIKI_PAGE(
        ObjectType.ACCESS_REQUIREMENT,
        ':ownerObjectId',
      )}/:wikiPageId`,
      async (req, res, ctx) => {
        return res.once(ctx.status(200), ctx.json(wikiPage))
      },
    ),
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

    await confirmMarkdownSynapseTextContent(NO_WIKI_CONTENT)
    expectMarkdownSynapseNotToGetWiki()
    expect(editBtn).not.toBeDisabled()

    await user.click(editBtn)

    const createdWikiPage = (await createWikiPageSpy.mock.results[0]
      .value) as WikiPage
    changeGetWikiPageHandlerOnce(createdWikiPage)
    await waitForMarkdownSynapseToGetWiki()

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

    changeGetWikiPageHandlerOnce({ ...createdWikiPage, markdown: newMarkdown })
    await waitForMarkdownSynapseToGetWiki(2)
    await confirmMarkdownSynapseTextContent(newMarkdown)
  })

  test('edits an existing wiki', async () => {
    const props: AccessRequirementWikiInstructionsProps = {
      accessRequirement: mockToUAccessRequirementWithWiki,
    }
    const { user, editBtn } = setUp(props)

    await waitForMarkdownSynapseToGetWiki()
    await confirmMarkdownSynapseTextContent(
      mockToUAccessRequirementWikiPage.markdown,
    )
    expect(screen.queryByText(NO_WIKI_CONTENT)).toBeNull()
    expect(editBtn).not.toBeDisabled()

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

    await waitFor(() => {
      expect(editDialog).not.toBeInTheDocument()
    })

    changeGetWikiPageHandlerOnce({
      ...mockToUAccessRequirementWikiPage,
      markdown: newMarkdown,
    })
    await waitForMarkdownSynapseToGetWiki(2)
    await confirmMarkdownSynapseTextContent(newMarkdown)
  })
})
