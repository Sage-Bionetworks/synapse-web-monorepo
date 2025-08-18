import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import {
  mockDucTemplateFileHandle,
  mockFileHandle,
} from '@/mocks/mock_file_handle'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { mockManagedACTAccessRequirementWikiPage } from '@/mocks/mockWiki'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import {
  confirmMarkdownSynapseIsShown,
  confirmMarkdownSynapseTextContent,
} from '@/testutils/MarkdownSynapseUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ACCESS_REQUIREMENT_BY_ID, WIKI_PAGE_ID } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { DAY_IN_MS } from '@/utils/SynapseConstants'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  FileUploadComplete,
  ManagedACTAccessRequirement,
  ObjectType,
  WikiPage,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { noop } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import { createRef } from 'react'
import { NO_WIKI_CONTENT } from '../Markdown/MarkdownSynapse'
import {
  DUC_TEMPLATE_UPLOAD_ERROR,
  getValidExpirationPeriodOrErrorMessage,
  SetManagedAccessRequirementFields,
  SetManagedAccessRequirementFieldsHandle,
  SetManagedAccessRequirementFieldsProps,
} from './SetManagedAccessRequirementFields'

const NEGATIVE_EXPIRATION_PERIOD_ERROR =
  'Please enter a valid expiration period (in days): If expiration period is set, then it must be greater than 0.'

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
const getFilesSpy = vi.spyOn(SynapseClient, 'getFiles')

const defaultProps: SetManagedAccessRequirementFieldsProps = {
  accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
  onSave,
  onError,
}

const overrideGetAccessRequirementHandler = (
  ar: ManagedACTAccessRequirement,
) => {
  return server.use(
    http.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${ACCESS_REQUIREMENT_BY_ID(':id')}`,
      () => {
        return HttpResponse.json(ar, { status: 200 })
      },
    ),
  )
}

const overrideGetWikiPageHandler = (wikiPage: WikiPage) => {
  return server.use(
    http.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${WIKI_PAGE_ID(
        ObjectType.ACCESS_REQUIREMENT,
        ':ownerObjectId',
        ':wikiPageId',
      )}`,
      () => {
        return HttpResponse.json(wikiPage, { status: 200 })
      },
    ),
  )
}

function renderComponent(props: SetManagedAccessRequirementFieldsProps) {
  const ref = createRef<SetManagedAccessRequirementFieldsHandle>()
  const component = render(
    <SetManagedAccessRequirementFields ref={ref} {...props} />,
    {
      wrapper: createWrapper(),
    },
  )
  return { ref, component }
}

async function setUp(
  props: SetManagedAccessRequirementFieldsProps = defaultProps,
) {
  const user = userEvent.setup()
  const { ref, component } = renderComponent(props)

  await waitFor(() => {
    expect(getAccessRequirementByIdSpy).toHaveBeenCalledTimes(1)
    expect(component.container.querySelectorAll('div.spinner')).toHaveLength(0)
  })

  const checkboxes = {
    isCertifiedUserRequired: screen.getByRole('checkbox', {
      name: 'Accessors must be certified.',
    }),
    isValidatedProfileRequired: screen.getByRole('checkbox', {
      name: 'Accessors must have a validated profile.',
    }),
    isTwoFaRequired: screen.getByRole('checkbox', {
      name: 'Accessors must use two-factor authentication (2FA).',
    }),
    isDUCRequired: screen.getByRole('checkbox', {
      name: 'DUC is required.',
    }),
    isIRBApprovalRequired: screen.getByRole('checkbox', {
      name: 'IRB approval is required.',
    }),
    areOtherAttachmentsRequired: screen.getByRole('checkbox', {
      name: 'Other documents are required.',
    }),
    isIDURequired: screen.getByRole('checkbox', {
      name: 'Intended Data Use statement is required.',
    }),
    isIDUPublic: screen.getByRole('checkbox', {
      name: 'Intended Data Use statements will be publicly available.',
    }),
  }

  const buttons = {
    uploadDucTemplate: screen.getByRole('button', {
      name: 'Upload Template DUC',
    }),
    editInstructions: screen.getByRole('button', { name: 'Edit Instructions' }),
  }

  const expirationPeriodInput = screen.getByRole('textbox', {
    name: 'Expiration period (days)',
  })

  return {
    ref,
    component,
    user,
    checkboxes,
    buttons,
    expirationPeriodInput,
  }
}

const findDucTemplateButton = async (fileName: string) => {
  return await screen.findByRole('button', { name: fileName })
}

describe('SetManagedAccessRequirementFields', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('displays existing managed AR', async () => {
    const { checkboxes, buttons, expirationPeriodInput } = await setUp()

    expect(buttons.editInstructions).toBeVisible()
    await confirmMarkdownSynapseIsShown()

    expect(checkboxes.isCertifiedUserRequired).toBeChecked()
    expect(checkboxes.isValidatedProfileRequired).toBeChecked()
    expect(checkboxes.isTwoFaRequired).toBeChecked()

    expect(checkboxes.isDUCRequired).toBeChecked()
    await findDucTemplateButton(mockDucTemplateFileHandle.fileName)

    expect(checkboxes.isIRBApprovalRequired).toBeChecked()
    expect(checkboxes.areOtherAttachmentsRequired).toBeChecked()

    expect(expirationPeriodInput).toHaveValue(
      (mockManagedACTAccessRequirement.expirationPeriod / DAY_IN_MS).toString(),
    )

    expect(checkboxes.isIDURequired).toBeChecked()
    expect(checkboxes.isIDUPublic).toBeChecked()
  })

  test('displays managed AR with wiki content', async () => {
    const simpleWikiContent =
      'Some wiki content that will be straightforward to match'
    overrideGetWikiPageHandler({
      ...mockManagedACTAccessRequirementWikiPage,
      markdown: simpleWikiContent,
    })

    await setUp()
    await confirmMarkdownSynapseIsShown()
    await confirmMarkdownSynapseTextContent(simpleWikiContent)
  })

  test('displays managed AR without wiki content', async () => {
    overrideGetWikiPageHandler({
      ...mockManagedACTAccessRequirementWikiPage,
      markdown: '',
    })

    await setUp()
    await confirmMarkdownSynapseIsShown()
    await confirmMarkdownSynapseTextContent(NO_WIKI_CONTENT)
  })

  test('handles updates to accessor requirements', async () => {
    const { user, checkboxes, ref } = await setUp()

    expect(checkboxes.isCertifiedUserRequired).toBeChecked()
    expect(checkboxes.isValidatedProfileRequired).toBeChecked()
    expect(checkboxes.isTwoFaRequired).toBeChecked()

    await user.click(checkboxes.isCertifiedUserRequired)
    await user.click(checkboxes.isValidatedProfileRequired)
    await user.click(checkboxes.isTwoFaRequired)

    expect(checkboxes.isCertifiedUserRequired).not.toBeChecked()
    expect(checkboxes.isValidatedProfileRequired).not.toBeChecked()
    expect(checkboxes.isTwoFaRequired).not.toBeChecked()

    expect(updateAccessRequirementSpy).not.toHaveBeenCalled()

    // simulate parent clicking save
    ref.current?.save()

    await waitFor(() => {
      const updatedAr: ManagedACTAccessRequirement = {
        ...mockManagedACTAccessRequirement,
        isCertifiedUserRequired: false,
        isValidatedProfileRequired: false,
        isTwoFaRequired: false,
      }
      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onError).not.toHaveBeenCalled()
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        updatedAr,
      )
    })
  })

  test('handles updates to DUC section', async () => {
    const { user, checkboxes, ref } = await setUp()

    expect(checkboxes.isDUCRequired).toBeChecked()
    expect(checkboxes.isIRBApprovalRequired).toBeChecked()
    expect(checkboxes.areOtherAttachmentsRequired).toBeChecked()

    await user.click(checkboxes.isDUCRequired)
    await user.click(checkboxes.isIRBApprovalRequired)
    await user.click(checkboxes.areOtherAttachmentsRequired)

    expect(checkboxes.isDUCRequired).not.toBeChecked()
    expect(checkboxes.isIRBApprovalRequired).not.toBeChecked()
    expect(checkboxes.areOtherAttachmentsRequired).not.toBeChecked()

    expect(updateAccessRequirementSpy).not.toHaveBeenCalled()

    // simulate parent clicking save
    ref.current?.save()

    await waitFor(() => {
      const updatedAr: ManagedACTAccessRequirement = {
        ...mockManagedACTAccessRequirement,
        isDUCRequired: false,
        isIRBApprovalRequired: false,
        areOtherAttachmentsRequired: false,
      }
      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onError).not.toHaveBeenCalled()
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        updatedAr,
      )
    })
  })

  test('displays DUC template download button when there is an existing DUC template', async () => {
    const { buttons } = await setUp()
    expect(buttons.uploadDucTemplate).toBeVisible()

    const val = document.getElementById('duc-download-0')
    expect(val).not.toBeNull()

    await findDucTemplateButton(mockDucTemplateFileHandle.fileName)
    expect(getFilesSpy).toHaveBeenCalled()
  })

  test('does not display DUC template download button when there is not an existing DUC template', async () => {
    overrideGetAccessRequirementHandler({
      ...mockManagedACTAccessRequirement,
      ducTemplateFileHandleId: undefined,
    })
    const { buttons } = await setUp({
      ...defaultProps,
      accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
    })
    expect(buttons.uploadDucTemplate).toBeVisible()
    const val = document.getElementById('duc-download-0')
    expect(val).toBeNull()
    expect(getFilesSpy).not.toHaveBeenCalled()
  })

  test('can upload new DUC template file handle', async () => {
    const newFileName = mockFileHandle.fileName
    const newFileHandleId = mockFileHandle.id
    const newFile = new File(['example'], newFileName, {
      type: 'text/plain',
    })
    const fileUploadComplete: FileUploadComplete = {
      fileHandleId: newFileHandleId,
      fileName: newFileName,
    }
    const mockUploadFile = vi
      .spyOn(SynapseClient, 'uploadFile')
      .mockResolvedValue(fileUploadComplete)

    const { user, ref } = await setUp()
    await findDucTemplateButton(mockDucTemplateFileHandle.fileName)

    const fileInput = screen.getByTestId('file-input')
    await user.upload(fileInput, newFile)

    expect(mockUploadFile).toHaveBeenCalledTimes(1)
    await findDucTemplateButton(newFileName)

    // simulate parent clicking save
    ref.current?.save()

    await waitFor(() => {
      const updatedAr: ManagedACTAccessRequirement = {
        ...mockManagedACTAccessRequirement,
        ducTemplateFileHandleId: newFileHandleId,
      }
      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onError).not.toHaveBeenCalled()
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        updatedAr,
      )
    })
  })

  test('handles error when uploading new DUC template file handle', async () => {
    const newFile = new File(['example'], 'some file', {
      type: 'text/plain',
    })
    const errorReason = 'Some upload error'
    const mockUploadFile = vi
      .spyOn(SynapseClient, 'uploadFile')
      .mockImplementation(() => {
        throw new SynapseClientError(
          500,
          errorReason,
          expect.getState().currentTestName!,
        )
      })

    const { user, ref } = await setUp()
    await findDucTemplateButton(mockDucTemplateFileHandle.fileName)

    // hide console.log output by FileUpload on error
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(noop)
    const fileInput = screen.getByTestId('file-input')
    await user.upload(fileInput, newFile)
    consoleLogSpy.mockRestore()

    expect(mockUploadFile).toHaveBeenCalledTimes(1)

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(DUC_TEMPLATE_UPLOAD_ERROR + errorReason)

    // simulate parent clicking save
    ref.current?.save()

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onError).not.toHaveBeenCalled()
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        mockManagedACTAccessRequirement,
      )
    })
  })

  test('handles valid change to expiration period', async () => {
    const updatedExpirationPeriodDays = 25
    const updatedExpirationPeriodMs = updatedExpirationPeriodDays * DAY_IN_MS

    const { user, expirationPeriodInput, ref } = await setUp()

    expect(expirationPeriodInput).toHaveValue('1')

    await user.clear(expirationPeriodInput)
    await user.type(
      expirationPeriodInput,
      updatedExpirationPeriodDays.toString(),
    )

    expect(expirationPeriodInput).toHaveValue(
      updatedExpirationPeriodDays.toString(),
    )
    expect(onSave).not.toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()

    // parent clicking save
    ref?.current?.save()

    await waitFor(() => {
      const updatedAr: ManagedACTAccessRequirement = {
        ...mockManagedACTAccessRequirement,
        expirationPeriod: updatedExpirationPeriodMs,
      }
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(1)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        updatedAr,
      )
      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onError).not.toHaveBeenCalled()
    })
  })

  test('defaults to 0 when no expiration period is set', async () => {
    const updatedExpirationPeriodMs = 0
    const { user, expirationPeriodInput, ref } = await setUp()

    await user.clear(expirationPeriodInput)
    expect(expirationPeriodInput).toHaveValue('')

    // parent clicking save
    ref?.current?.save()

    await waitFor(() => {
      const updatedAr: ManagedACTAccessRequirement = {
        ...mockManagedACTAccessRequirement,
        expirationPeriod: updatedExpirationPeriodMs,
      }
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(1)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        updatedAr,
      )
      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onError).not.toHaveBeenCalled()
    })
  })

  test('displays an error when expiration period is < 0', async () => {
    const negativeExpirationPeriodDays = '-25'
    const { user, expirationPeriodInput, ref } = await setUp()

    await user.clear(expirationPeriodInput)
    await user.type(expirationPeriodInput, negativeExpirationPeriodDays)
    await user.tab() // trigger blur

    expect(expirationPeriodInput).toHaveValue(negativeExpirationPeriodDays)
    expect(screen.getByText(NEGATIVE_EXPIRATION_PERIOD_ERROR)).toBeVisible()

    // parent clicking save
    act(() => {
      ref?.current?.save()
    })

    await waitFor(() => {
      expect(updateAccessRequirementSpy).not.toHaveBeenCalled()
      expect(onError).toHaveBeenCalledTimes(1)
      expect(onSave).not.toHaveBeenCalled()
    })
  })

  test('displays an error when a non-number is entered for expiration period', async () => {
    const nonNumberExpirationPeriod = 'ab23'
    const { user, expirationPeriodInput, ref } = await setUp()

    await user.clear(expirationPeriodInput)
    await user.type(expirationPeriodInput, nonNumberExpirationPeriod)
    await user.tab() // trigger blur

    expect(expirationPeriodInput).toHaveValue(nonNumberExpirationPeriod)
    expect(
      screen.getByText(
        `Please enter a valid expiration period (in days): For input string: "${nonNumberExpirationPeriod}"`,
      ),
    ).toBeVisible()

    // parent clicking save
    act(() => {
      ref?.current?.save()
    })

    await waitFor(() => {
      expect(updateAccessRequirementSpy).not.toHaveBeenCalled()
      expect(onError).toHaveBeenCalledTimes(1)
      expect(onSave).not.toHaveBeenCalled()
    })
  })

  test('when isIDURequired is toggled to false, isIDUPublic is disabled and false (even when previously checked)', async () => {
    const { user, checkboxes, ref } = await setUp()

    expect(checkboxes.isIDURequired).toBeChecked()
    expect(checkboxes.isIDUPublic).toBeChecked()
    expect(checkboxes.isIDUPublic).not.toBeDisabled()

    await user.click(checkboxes.isIDURequired)

    expect(checkboxes.isIDURequired).not.toBeChecked()
    expect(checkboxes.isIDUPublic).not.toBeChecked()
    expect(checkboxes.isIDUPublic).toBeDisabled()

    // parent clicking save
    act(() => {
      ref?.current?.save()
    })

    await waitFor(() => {
      const updatedAr: ManagedACTAccessRequirement = {
        ...mockManagedACTAccessRequirement,
        isIDUPublic: false,
        isIDURequired: false,
      }
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(1)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        updatedAr,
      )
      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onError).not.toHaveBeenCalled()
    })
  })

  test('when isIDURequired is toggled to true, isIDUPublic is not disabled', async () => {
    const accessRequirement: ManagedACTAccessRequirement = {
      ...mockManagedACTAccessRequirement,
      isIDURequired: false,
      isIDUPublic: false,
    }
    overrideGetAccessRequirementHandler(accessRequirement)
    const { user, checkboxes } = await setUp({
      ...defaultProps,
      accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
    })

    expect(checkboxes.isIDURequired).not.toBeChecked()
    expect(checkboxes.isIDUPublic).not.toBeChecked()
    expect(checkboxes.isIDUPublic).toBeDisabled()

    await user.click(checkboxes.isIDURequired)

    expect(checkboxes.isIDURequired).toBeChecked()
    expect(checkboxes.isIDUPublic).not.toBeChecked()
    expect(checkboxes.isIDUPublic).not.toBeDisabled()
  })

  describe('getValidExpirationPeriodOrErrorMessage', () => {
    test('empty string is converted to 0', () => {
      expect(getValidExpirationPeriodOrErrorMessage('')).toBe(0)
    })
    test('valid expiration period days are converted ms', () => {
      expect(getValidExpirationPeriodOrErrorMessage('1')).toBe(DAY_IN_MS)
      expect(getValidExpirationPeriodOrErrorMessage('0')).toBe(0)
      expect(getValidExpirationPeriodOrErrorMessage('012')).toBe(12 * DAY_IN_MS)
      expect(getValidExpirationPeriodOrErrorMessage('25')).toBe(25 * DAY_IN_MS)
    })
    test('negative expiration period days return an error message', () => {
      expect(getValidExpirationPeriodOrErrorMessage('-1')).toBe(
        NEGATIVE_EXPIRATION_PERIOD_ERROR,
      )
      expect(getValidExpirationPeriodOrErrorMessage('-123')).toBe(
        NEGATIVE_EXPIRATION_PERIOD_ERROR,
      )
    })
    test('invalid input strings return an error message', () => {
      const errorMsgRegex =
        /^Please enter a valid expiration period \(in days\): For input string:.*/
      expect(getValidExpirationPeriodOrErrorMessage('-1.23')).toMatch(
        errorMsgRegex,
      )
      expect(getValidExpirationPeriodOrErrorMessage('0.23')).toMatch(
        errorMsgRegex,
      )
      expect(getValidExpirationPeriodOrErrorMessage('.12')).toMatch(
        errorMsgRegex,
      )
      expect(getValidExpirationPeriodOrErrorMessage('52a')).toMatch(
        errorMsgRegex,
      )
      expect(getValidExpirationPeriodOrErrorMessage('a')).toMatch(errorMsgRegex)
    })
  })
})
