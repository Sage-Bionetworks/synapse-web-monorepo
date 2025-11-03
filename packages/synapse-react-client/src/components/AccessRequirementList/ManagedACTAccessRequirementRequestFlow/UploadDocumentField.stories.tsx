import { MOCK_MANAGED_ACCESS_REQUIREMENT_ACL } from '@/mocks/accessRequirement/mockAccessRequirementAcls'
import { MOCK_DUC_TEMPLATE_FILE_HANDLE_ID } from '@/mocks/mock_file_handle'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { UploadDocumentField } from './UploadDocumentField'

const meta: Meta = {
  title: 'Governance/UploadDocumentField',
  component: UploadDocumentField,
  parameters: { stack: 'mock' },
} satisfies Meta<typeof UploadDocumentField>

export default meta

type Story = StoryObj<typeof meta>

const mockDucFileHandleAssociation: FileHandleAssociation = {
  fileHandleId: MOCK_DUC_TEMPLATE_FILE_HANDLE_ID,
  associateObjectType: FileHandleAssociateType.AccessRequirementAttachment,
  associateObjectId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id,
}

export const Demo: Story = {
  args: {
    id: 'duc',
    isLoading: false,
    uploadCallback: fn(),
    documentName: 'Template DUC',
    fileHandleAssociations: [mockDucFileHandleAssociation],
    isMultiFileUpload: false,
    onClearAttachment: null,
  },
}
