import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import {
  mockSchemaBinding,
  mockSchemaValidationResults,
  mockValidationSchema,
} from '@/mocks/mockSchema'
import {
  getEntityJson,
  getSchemaBinding,
  getSchemaValidationResults,
  getValidationSchema,
} from '@/synapse-client/SynapseClient'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import { expect } from 'vitest'
import { AnnotationsTable, AnnotationsTableProps } from './AnnotationsTable'

vi.mock('@/synapse-client/SynapseClient')

const mockGetJson = vi.mocked(getEntityJson)
const mockGetValidationSchema = vi.mocked(getValidationSchema)
const mockGetSchemaBinding = vi.mocked(getSchemaBinding)
const mockGetValidationResults = vi.mocked(getSchemaValidationResults)

const { id: MOCK_FILE_ENTITY_ID, json: mockFileEntityJson } = mockFileEntityData

const defaultProps: AnnotationsTableProps = {
  entityId: MOCK_FILE_ENTITY_ID,
}

function renderComponent() {
  render(<AnnotationsTable {...defaultProps} />, {
    wrapper: createWrapper(),
  })
}

describe('AnnotationsTable tests', () => {
  beforeEach(() => {
    mockGetJson.mockResolvedValue(mockFileEntityData.json)
    mockGetSchemaBinding.mockResolvedValue(null)
  })

  it('Renders the annotations on an entity', async () => {
    renderComponent()

    await screen.findByText('myStringKey')
    screen.getByText(mockFileEntityJson['myStringKey']! as string)

    expect(() => screen.getByText('myIntegerKey')).not.toThrow()
    screen.getByText(
      (mockFileEntityJson['myIntegerKey'] as number[]).join(', '),
    )

    expect(() => screen.getByText('myFloatKey')).not.toThrow()
    screen.getByText((mockFileEntityJson['myFloatKey'] as number[]).join(', '))
  })

  it('Displays the validation schema if there is one', async () => {
    mockGetSchemaBinding.mockResolvedValue(mockSchemaBinding)
    mockGetValidationSchema.mockResolvedValue({
      concreteType:
        'org.sagebionetworks.repo.model.schema.GetValidationSchemaResponse',
      validationSchema: mockValidationSchema,
    })
    mockGetValidationResults.mockResolvedValue(mockSchemaValidationResults)

    renderComponent()

    await screen.findByText('Validation Schema')
    await screen.findByText(mockSchemaBinding.jsonSchemaVersionInfo.schemaName)
  })

  it('Displays title/description annotations from the JSON Schema', async () => {
    const schema$id = 'schema-for-jsonschema-annotation-test'
    const annotationKey = 'describedAnnotation'
    const annotationTitle = 'Annotation described by schema'
    const annotationDescription = 'describedAnnotation'
    mockGetJson.mockResolvedValue({
      ...mockFileEntityData.json,
      [annotationKey]: 'foo',
    })
    mockGetSchemaBinding.mockResolvedValue(mockSchemaBinding)
    mockGetValidationSchema.mockResolvedValue({
      concreteType:
        'org.sagebionetworks.repo.model.schema.GetValidationSchemaResponse',
      validationSchema: {
        $schema: 'http://json-schema.org/draft-07/schema#',
        $id: `https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${schema$id}`,
        type: 'object',
        properties: {
          [annotationKey]: {
            type: 'string',
            title: annotationTitle,
            description: annotationDescription,
          },
        },
      },
    })
    mockGetValidationResults.mockResolvedValue(mockSchemaValidationResults)

    renderComponent()

    const annotationTitleElement = await screen.findByText(annotationTitle)
    expect(screen.queryByText(annotationKey)).not.toBeInTheDocument()

    await userEvent.hover(annotationTitleElement)
    const tooltip = await screen.findByRole('tooltip')
    within(tooltip).getByText(`Annotation Key: ${annotationKey}`)
    within(tooltip).getByText(annotationDescription)
  })

  it('Displays a placeholder when there are no annotations', async () => {
    const json = cloneDeep(mockFileEntityData.json)
    delete json.myStringKey
    delete json.myIntegerKey
    delete json.myFloatKey
    mockGetJson.mockResolvedValue(json)

    renderComponent()
    await screen.findByText('This File has no annotations.')
  })

  it.todo('Handles scenario where derived annotations are pending')
})
