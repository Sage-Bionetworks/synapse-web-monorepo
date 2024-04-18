import {
  FileUploadComplete,
  ManagedACTAccessRequirement,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { noop } from 'lodash-es'
import React from 'react'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import { mockManagedACTAccessRequirement } from '../../mocks/mockAccessRequirements'
import { mockManagedACTAccessRequirementWikiPage } from '../../mocks/mockWiki'
import {
  mockDucTemplateFileHandle,
  mockFileHandle,
} from '../../mocks/mock_file_handle'
import { rest, server } from '../../mocks/msw/server'
import SynapseClient from '../../synapse-client'
import {
  confirmMarkdownSynapseTextContent,
  waitForMarkdownSynapseToGetWiki,
} from '../../testutils/MarkdownSynapseUtils'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseClientError } from '../../utils'
import { ACCESS_REQUIREMENT_WIKI_PAGE } from '../../utils/APIConstants'
import { DAY_IN_MS } from '../../utils/SynapseConstants'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'
import { NO_WIKI_CONTENT } from '../Markdown/MarkdownSynapse'
import {
  DUC_TEMPLATE_UPLOAD_ERROR,
  SetManagedAccessRequirementFields,
  SetManagedAccessRequirementFieldsHandle,
  SetManagedAccessRequirementFieldsProps,
  getValidExpirationPeriodOrErrorMessage,
} from './SetManagedAccessRequirementFields'

const NEGATIVE_EXPIRATION_PERIOD_ERROR =
  'Please enter a valid expiration period (in days): If expiration period is set, then it must be greater than 0.'

const onSaveComplete = jest.fn()
const updateAccessRequirementSpy = jest.spyOn(
  SynapseClient,
  'updateAccessRequirement',
)
const getFilesSpy = jest.spyOn(SynapseClient, 'getFiles')

const defaultProps: SetManagedAccessRequirementFieldsProps = {
  accessRequirement: mockManagedACTAccessRequirement,
  onSaveComplete: onSaveComplete,
}

function renderComponent(props: SetManagedAccessRequirementFieldsProps) {
  const ref = React.createRef<SetManagedAccessRequirementFieldsHandle>()
  const component = render(
    <SetManagedAccessRequirementFields ref={ref} {...props} />,
    {
      wrapper: createWrapper(),
    },
  )
  return { ref, component }
}

function setUp(props: SetManagedAccessRequirementFieldsProps = defaultProps) {
  const user = userEvent.setup()
  const { ref, component } = renderComponent(props)

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
  beforeEach(() => jest.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('displays existing managed AR', async () => {
    const { checkboxes, buttons, expirationPeriodInput } = setUp()

    expect(buttons.editInstructions).toBeVisible()

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
    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_WIKI_PAGE(':arId', ':wikiId')}`,
        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              ...mockManagedACTAccessRequirementWikiPage,
              markdown: simpleWikiContent,
            }),
          )
        },
      ),
    )

    setUp()
    await waitForMarkdownSynapseToGetWiki()
    await confirmMarkdownSynapseTextContent(simpleWikiContent)
  })

  test('displays managed AR without wiki content', async () => {
    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_WIKI_PAGE(':arId', ':wikiId')}`,
        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              ...mockManagedACTAccessRequirementWikiPage,
              markdown: '',
            }),
          )
        },
      ),
    )

    setUp()
    await waitForMarkdownSynapseToGetWiki()
    await confirmMarkdownSynapseTextContent(NO_WIKI_CONTENT)
  })

  test('handles updates to accessor requirements', async () => {
    const { user, checkboxes, ref } = setUp()

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
      expect(onSaveComplete).toHaveBeenCalledTimes(1)
      expect(onSaveComplete).toHaveBeenLastCalledWith(updatedAr)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        updatedAr,
      )
    })
  })

  test('handles updates to DUC section', async () => {
    const { user, checkboxes, ref } = setUp()

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
      expect(onSaveComplete).toHaveBeenCalledTimes(1)
      expect(onSaveComplete).toHaveBeenLastCalledWith(updatedAr)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        updatedAr,
      )
    })
  })

  test('displays DUC template download button when there is an existing DUC template', async () => {
    const { buttons } = setUp()
    expect(buttons.uploadDucTemplate).toBeVisible()

    const val = document.getElementById('duc-download-0')
    expect(val).not.toBeNull()

    await findDucTemplateButton(mockDucTemplateFileHandle.fileName)
    expect(getFilesSpy).toHaveBeenCalled()
  })

  test('does not display DUC template download button when there is not an existing DUC template', () => {
    const { buttons } = setUp({
      ...defaultProps,
      accessRequirement: {
        ...mockManagedACTAccessRequirement,
        ducTemplateFileHandleId: undefined,
      },
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
    const mockUploadFile = jest
      .spyOn(SynapseClient, 'uploadFile')
      .mockResolvedValue(fileUploadComplete)

    const { user, ref } = setUp()
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
      expect(onSaveComplete).toHaveBeenCalledTimes(1)
      expect(onSaveComplete).toHaveBeenLastCalledWith(updatedAr)
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
    const mockUploadFile = jest
      .spyOn(SynapseClient, 'uploadFile')
      .mockImplementation(() => {
        throw new SynapseClientError(
          500,
          errorReason,
          expect.getState().currentTestName!,
        )
      })

    const { user, ref } = setUp()
    await findDucTemplateButton(mockDucTemplateFileHandle.fileName)

    // hide console.log output by FileUpload on error
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(noop)
    const fileInput = screen.getByTestId('file-input')
    await user.upload(fileInput, newFile)
    consoleLogSpy.mockRestore()

    expect(mockUploadFile).toHaveBeenCalledTimes(1)

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(DUC_TEMPLATE_UPLOAD_ERROR + errorReason)

    // simulate parent clicking save
    ref.current?.save()

    await waitFor(() => {
      expect(onSaveComplete).toHaveBeenCalledTimes(1)
      expect(onSaveComplete).toHaveBeenLastCalledWith(
        mockManagedACTAccessRequirement,
      )
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        mockManagedACTAccessRequirement,
      )
    })
  })

  test('handles valid change to expiration period', async () => {
    const updatedExpirationPeriodDays = 25
    const updatedExpirationPeriodMs = updatedExpirationPeriodDays * DAY_IN_MS

    const { user, expirationPeriodInput, ref } = setUp()

    expect(expirationPeriodInput).toHaveValue('1')

    await user.clear(expirationPeriodInput)
    await user.type(
      expirationPeriodInput,
      updatedExpirationPeriodDays.toString(),
    )

    expect(expirationPeriodInput).toHaveValue(
      updatedExpirationPeriodDays.toString(),
    )
    expect(onSaveComplete).not.toHaveBeenCalled()

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
      expect(onSaveComplete).toHaveBeenCalledTimes(1)
      expect(onSaveComplete).toHaveBeenLastCalledWith(updatedAr)
    })
  })

  test('defaults to 0 when no expiration period is set', async () => {
    const updatedExpirationPeriodMs = 0
    const { user, expirationPeriodInput, ref } = setUp()

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
      expect(onSaveComplete).toHaveBeenCalledTimes(1)
      expect(onSaveComplete).toHaveBeenLastCalledWith(updatedAr)
    })
  })

  test('displays an error when expiration period is < 0', async () => {
    const negativeExpirationPeriodDays = '-25'
    const { user, expirationPeriodInput, ref } = setUp()

    await user.clear(expirationPeriodInput)
    await user.type(expirationPeriodInput, negativeExpirationPeriodDays)

    expect(expirationPeriodInput).toHaveValue(negativeExpirationPeriodDays)

    // parent clicking save
    act(() => {
      ref?.current?.save()
    })

    await waitFor(() => {
      expect(updateAccessRequirementSpy).not.toHaveBeenCalled()
      expect(onSaveComplete).toHaveBeenCalledTimes(1)
      expect(onSaveComplete).toHaveBeenLastCalledWith(null)
      expect(screen.getByRole('alert')).toHaveTextContent(
        NEGATIVE_EXPIRATION_PERIOD_ERROR,
      )
    })
  })

  test('displays an error when a non-number is entered for expiration period', async () => {
    const nonNumberExpirationPeriod = 'ab23'
    const { user, expirationPeriodInput, ref } = setUp()

    await user.clear(expirationPeriodInput)
    await user.type(expirationPeriodInput, nonNumberExpirationPeriod)

    expect(expirationPeriodInput).toHaveValue(nonNumberExpirationPeriod)

    // parent clicking save
    act(() => {
      ref?.current?.save()
    })

    await waitFor(() => {
      expect(updateAccessRequirementSpy).not.toHaveBeenCalled()
      expect(onSaveComplete).toHaveBeenCalledTimes(1)
      expect(onSaveComplete).toHaveBeenLastCalledWith(null)
      expect(screen.getByRole('alert')).toHaveTextContent(
        `Please enter a valid expiration period (in days): For input string: "${nonNumberExpirationPeriod}"`,
      )
    })
  })

  test('when isIDURequired is toggled to false, isIDUPublic is disabled and false (even when previously checked)', async () => {
    const { user, checkboxes, ref } = setUp()

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
      expect(onSaveComplete).toHaveBeenCalledTimes(1)
      expect(onSaveComplete).toHaveBeenLastCalledWith(updatedAr)
    })
  })

  test('when isIDURequired is toggled to true, isIDUPublic is not disabled', async () => {
    const accessRequirement: ManagedACTAccessRequirement = {
      ...mockManagedACTAccessRequirement,
      isIDURequired: false,
      isIDUPublic: false,
    }
    const { user, checkboxes } = setUp({ accessRequirement, onSaveComplete })

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
