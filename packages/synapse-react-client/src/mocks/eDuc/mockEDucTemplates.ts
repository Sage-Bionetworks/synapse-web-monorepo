import { EDucTemplate } from '@sage-bionetworks/synapse-client'

export const MOCK_EDUC_TEMPLATE_ID_1 = 'template-abc-123'
export const MOCK_EDUC_TEMPLATE_ID_2 = 'template-def-456'

export const mockEDucTemplate1: EDucTemplate = {
  templateId: MOCK_EDUC_TEMPLATE_ID_1,
  name: 'General DUC v1',
  description: 'General-purpose eDUC template',
  createdOn: '2025-01-15T12:00:00Z',
  modifiedOn: '2025-02-01T12:00:00Z',
}

export const mockEDucTemplate2: EDucTemplate = {
  templateId: MOCK_EDUC_TEMPLATE_ID_2,
  name: 'Restricted Data DUC v2',
  description: 'For restricted-access datasets',
  createdOn: '2025-03-10T12:00:00Z',
  modifiedOn: '2025-03-10T12:00:00Z',
}

export const mockEDucTemplates: EDucTemplate[] = [
  mockEDucTemplate1,
  mockEDucTemplate2,
]
