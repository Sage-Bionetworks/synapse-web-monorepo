import { mockClinicalTemplate } from '@/mocks/accessRequirement/mockFormTemplates'
import { mockClinicalSchema } from '@/mocks/accessRequirement/mockJsonSchemas'
import { MOCK_FILE_HANDLE_ID } from '@/mocks/mock_file_handle'
import { getRegisteredSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JSONSchema7 } from 'json-schema'
import { http, HttpResponse } from 'msw'
import { FormTemplatePreviewDialog } from './FormTemplatePreviewDialog'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const DOWNLOAD_URL = 'https://example.com/download/template.docx'

describe('FormTemplatePreviewDialog', () => {
  it('downloads a template document that the previewed version lists through the form template', async () => {
    const template = {
      ...mockClinicalTemplate,
      attachments: [MOCK_FILE_HANDLE_ID],
    }
    server.use(
      ...getRegisteredSchemaHandlers(REPO_ENDPOINT, [
        mockClinicalSchema as JSONSchema7,
      ]),
      http.get(`${REPO_ENDPOINT}/file/v1/file/:id`, ({ request, params }) => {
        const url = new URL(request.url)
        return params.id === MOCK_FILE_HANDLE_ID &&
          url.searchParams.get('fileAssociateType') ===
            FileHandleAssociateType.FormTemplateAttachment &&
          url.searchParams.get('fileAssociateId') === template.id
          ? HttpResponse.json(DOWNLOAD_URL)
          : new HttpResponse(null, { status: 404 })
      }),
    )
    const openSpy = vi.spyOn(window, 'open').mockReturnValue(null)
    const user = userEvent.setup()
    render(
      <FormTemplatePreviewDialog open onClose={vi.fn()} template={template} />,
      { wrapper: createWrapper() },
    )

    // The document belongs to a field of the Compliance step
    await user.click(await screen.findByRole('button', { name: 'Compliance' }))
    await user.click(
      await screen.findByRole('button', { name: 'Download Template' }),
    )

    await waitFor(() =>
      expect(openSpy).toHaveBeenCalledWith(DOWNLOAD_URL, '_blank'),
    )
    openSpy.mockRestore()
  })
})
