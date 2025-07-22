import { hasSchema } from '@hyperjump/json-schema'
import { registerSchema } from '@hyperjump/json-schema/draft-07'
import { renderHook, waitFor } from '@testing-library/react'
import { JSONSchema7 } from 'json-schema'
import { useRegisterSchema } from './SchemaAnnotationUtils'

vi.mock('@hyperjump/json-schema', async () => {
  const actual = await vi.importActual('@hyperjump/json-schema')
  return {
    ...actual,
    hasSchema: vi.fn(),
  }
})

vi.mock('@hyperjump/json-schema/draft-07', async () => {
  const actual = await vi.importActual('@hyperjump/json-schema/draft-07')
  return {
    ...actual,
    registerSchema: vi.fn(),
  }
})

const mockHasSchema = vi.mocked(hasSchema)
const mockRegisterSchema = vi.mocked(registerSchema)

const MOCK_SCHEMA: JSONSchema7 = {
  $id: 'https://example.com/test.schema.json',
  type: 'object',
  properties: {
    foo: {
      type: 'string',
    },
  },
}

describe('useRegisterSchema', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should not register a schema if none is provided', () => {
    renderHook(() => useRegisterSchema(undefined))
    expect(mockRegisterSchema).not.toHaveBeenCalled()
  })

  it('should not register a schema if it has no $id', () => {
    const schemaWithoutId: JSONSchema7 = { ...MOCK_SCHEMA, $id: undefined }
    renderHook(() => useRegisterSchema(schemaWithoutId))
    expect(mockRegisterSchema).not.toHaveBeenCalled()
  })

  it('should register a schema if it has an $id and is not already registered', async () => {
    mockHasSchema.mockReturnValue(false)
    const { result } = renderHook(() => useRegisterSchema(MOCK_SCHEMA))

    await waitFor(() => {
      expect(mockHasSchema).toHaveBeenCalledWith(MOCK_SCHEMA.$id)
      expect(mockRegisterSchema).toHaveBeenCalledWith(MOCK_SCHEMA)
      expect(result.current).toBe(true)
    })
  })

  it('should not register a schema if it is already registered', () => {
    mockHasSchema.mockReturnValue(true)
    const { result } = renderHook(() => useRegisterSchema(MOCK_SCHEMA))
    expect(mockHasSchema).toHaveBeenCalledWith(MOCK_SCHEMA.$id)
    expect(mockRegisterSchema).not.toHaveBeenCalled()
    expect(result.current).toBe(true)
  })

  it('should handle errors during schema registration', async () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    const error = new Error('Registration failed')
    mockHasSchema.mockReturnValue(false)
    mockRegisterSchema.mockImplementation(() => {
      throw error
    })

    const { result } = renderHook(() => useRegisterSchema(MOCK_SCHEMA))

    await waitFor(() => {
      expect(mockRegisterSchema).toThrow(error)
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Unable to register JSON Schema in @hyperjump/json-schema:',
        error,
      )
      expect(result.current).toBe(false)
    })
    consoleErrorSpy.mockRestore()
  })
})
