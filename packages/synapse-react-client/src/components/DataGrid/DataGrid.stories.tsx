import { Meta, StoryObj } from '@storybook/react-vite'
import { JSONSchema7 } from 'json-schema'
import { useRef, useState, useCallback } from 'react'
import { DataSheetGridRef } from 'react-datasheet-grid'
import { SelectionWithId } from 'react-datasheet-grid/dist/types'
import DataGrid from './DataGrid'
import { DataGridRow, Operation } from './DataGridTypes'
import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import dayjs from 'dayjs'

const meta = {
  title: 'Components/DataGrid',
  component: DataGrid,
  parameters: {
    chromatic: { viewports: [1200] },
  },
} satisfies Meta

export default meta

type Story = StoryObj

// Sample data for various column types
const sampleColumnNames = [
  'category',
  'name',
  'age',
  'email',
  'status',
  'isActive',
  'created_date',
  'score',
  'description',
]

const sampleColumnOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const sampleSchemaPropertiesInfo: SchemaPropertiesMap = {
  category: {
    type: { type: 'string', isArray: false },
    isRequired: true,
    enumeratedValues: ['Option A', 'Option B', 'Option C', 'Option D'],
  },
  name: {
    type: { type: 'string', isArray: false },
    isRequired: true,
    enumeratedValues: null,
  },
  age: {
    type: { type: 'integer', isArray: false },
    isRequired: false,
    enumeratedValues: null,
  },
  email: {
    type: { type: 'string', isArray: false },
    isRequired: false,
    enumeratedValues: null,
  },
  status: {
    type: { type: 'string', isArray: false },
    isRequired: false,
    enumeratedValues: ['Active', 'Inactive', 'Pending', 'Archived'],
  },
  isActive: {
    type: { type: 'boolean', isArray: false },
    isRequired: false,
    enumeratedValues: null,
  },
  created_date: {
    type: { type: 'string', format: 'date-time', isArray: false },
    isRequired: false,
    enumeratedValues: null,
  },
  score: {
    type: { type: 'number', isArray: false },
    isRequired: false,
    enumeratedValues: null,
  },
  description: {
    type: { type: 'string', isArray: false },
    isRequired: false,
    enumeratedValues: null,
  },
}

const sampleRowData: DataGridRow[] = [
  {
    __reactKey: '1',
    category: 'Option A',
    name: 'John Doe',
    age: 28,
    email: 'john.doe@example.com',
    status: 'Active',
    isActive: true,
    created_date: dayjs('2024-01-15').toISOString(),
    score: 95,
    description: 'Senior software engineer with 5 years experience',
    __validationStatus: 'valid',
  },
  {
    __reactKey: '2',
    category: 'Option B',
    name: 'Jane Smith',
    age: 34,
    email: 'jane.smith@example.com',
    status: 'Active',
    isActive: true,
    created_date: dayjs('2024-02-20').toISOString(),
    score: 88,
    description: 'Product manager focusing on data analytics',
    __validationStatus: 'valid',
  },
  {
    __reactKey: '3',
    category: 'Option A',
    name: 'Bob Johnson',
    age: 45,
    email: 'bob.johnson@example.com',
    status: 'Inactive',
    isActive: false,
    created_date: dayjs('2023-11-10').toISOString(),
    score: 72,
    description: 'System architect with cloud infrastructure expertise',
    __validationStatus: 'valid',
  },
  {
    __reactKey: '4',
    category: 'Option C',
    name: 'Alice Williams',
    age: 29,
    email: 'alice.williams@example.com',
    status: 'Pending',
    isActive: true,
    created_date: dayjs('2024-03-05').toISOString(),
    score: 91,
    description: 'UX designer specializing in healthcare applications',
    __validationStatus: 'pending',
  },
  {
    __reactKey: '5',
    category: 'Option D',
    name: 'Charlie Brown',
    age: 52,
    email: 'charlie.brown@example.com',
    status: 'Archived',
    isActive: false,
    created_date: dayjs('2023-08-22').toISOString(),
    score: 65,
    description: 'Former tech lead, retired',
    __validationStatus: 'valid',
  },
  {
    __reactKey: '6',
    category: 'Option B',
    name: 'Diana Martinez',
    age: 31,
    email: 'diana.martinez@example.com',
    status: 'Active',
    isActive: true,
    created_date: dayjs('2024-01-30').toISOString(),
    score: 94,
    description: 'Data scientist working on machine learning models',
    __validationStatus: 'valid',
  },
  {
    __reactKey: '7',
    category: 'Option A',
    name: 'Ethan Davis',
    age: 26,
    email: 'ethan.davis@example.com',
    status: 'Active',
    isActive: true,
    created_date: dayjs('2024-04-12').toISOString(),
    score: 87,
    description: 'Full-stack developer with React and Node.js skills',
    __validationStatus: 'invalid',
  },
  {
    __reactKey: '8',
    category: 'Option C',
    name: 'Fiona Garcia',
    age: 38,
    email: 'fiona.garcia@example.com',
    status: 'Active',
    isActive: true,
    created_date: dayjs('2023-12-18').toISOString(),
    score: 89,
    description: 'DevOps engineer managing CI/CD pipelines',
    __validationStatus: 'valid',
  },
  {
    __reactKey: '9',
    category: 'Option B',
    name: 'George Wilson',
    age: 42,
    email: 'george.wilson@example.com',
    status: 'Pending',
    isActive: false,
    created_date: dayjs('2024-02-08').toISOString(),
    score: 78,
    description: 'Security analyst with penetration testing background',
    __validationStatus: 'pending',
  },
  {
    __reactKey: '10',
    category: 'Option D',
    name: 'Hannah Lee',
    age: 27,
    email: 'hannah.lee@example.com',
    status: 'Active',
    isActive: true,
    created_date: dayjs('2024-03-25').toISOString(),
    score: 92,
    description: 'Frontend developer specializing in accessibility',
    __validationStatus: 'valid',
  },
]

// Configuration type for stories
type DataGridStoryConfig = {
  initialRowData: DataGridRow[]
  columnNames: string[]
  columnOrder: number[]
  schemaPropertiesInfo: SchemaPropertiesMap
  entityIsView?: boolean
  jsonSchema?: JSONSchema7
  containerStyle?: React.CSSProperties
  enableEditing?: boolean
}

// Single configurable wrapper component
function DataGridStoryWrapper({
  initialRowData,
  columnNames,
  columnOrder,
  schemaPropertiesInfo,
  entityIsView = false,
  jsonSchema,
  enableEditing = true,
}: DataGridStoryConfig) {
  const gridRef = useRef<DataSheetGridRef | null>(null)
  const [rowValues, setRowValues] = useState<DataGridRow[]>(initialRowData)
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null)
  const [lastSelection, setLastSelection] = useState<SelectionWithId | null>(
    null,
  )

  const handleChange = useCallback(
    (newValue: DataGridRow[], operations: Operation[]) => {
      console.log('Grid changed:', { newValue, operations })
      if (enableEditing) {
        setRowValues(newValue)
      }
    },
    [enableEditing],
  )

  const handleSelectionChange = useCallback(
    (opts: { selection: SelectionWithId | null }) => {
      console.log('Selection changed:', opts.selection)
      setLastSelection(opts.selection)
    },
    [],
  )

  return (
    <DataGrid
      gridRef={gridRef}
      rowValues={rowValues}
      columnNames={columnNames}
      columnOrder={columnOrder}
      schemaPropertiesInfo={schemaPropertiesInfo}
      entityIsView={entityIsView}
      jsonSchema={jsonSchema}
      selectedRowIndex={selectedRowIndex}
      lastSelection={lastSelection}
      handleChange={handleChange}
      setSelectedRowIndex={setSelectedRowIndex}
      handleSelectionChange={handleSelectionChange}
    />
  )
}

// Story with comprehensive data
export const BasicGrid: Story = {
  render: () => (
    <DataGridStoryWrapper
      initialRowData={sampleRowData}
      columnNames={sampleColumnNames}
      columnOrder={sampleColumnOrder}
      schemaPropertiesInfo={sampleSchemaPropertiesInfo}
    />
  ),
}

// Story showing view-only mode
export const ViewOnlyGrid: Story = {
  render: () => (
    <DataGridStoryWrapper
      initialRowData={sampleRowData.slice(0, 5)}
      columnNames={sampleColumnNames}
      columnOrder={sampleColumnOrder}
      schemaPropertiesInfo={sampleSchemaPropertiesInfo}
      entityIsView={true}
      enableEditing={false}
    />
  ),
}

// Story with minimal columns
export const MinimalGrid: Story = {
  render: () => (
    <DataGridStoryWrapper
      initialRowData={[
        {
          __reactKey: '1',
          id: '1',
          title: 'Task 1',
          completed: 'Yes',
        },
        {
          __reactKey: '2',
          id: '2',
          title: 'Task 2',
          completed: 'No',
        },
        {
          __reactKey: '3',
          id: '3',
          title: 'Task 3',
          completed: 'Yes',
        },
      ]}
      columnNames={['id', 'title', 'completed']}
      columnOrder={[0, 1, 2]}
      schemaPropertiesInfo={{
        id: {
          type: { type: 'string', isArray: false },
          isRequired: false,
          enumeratedValues: null,
        },
        title: {
          type: { type: 'string', isArray: false },
          isRequired: true,
          enumeratedValues: null,
        },
        completed: {
          type: { type: 'string', isArray: false },
          isRequired: false,
          enumeratedValues: ['Yes', 'No'],
        },
      }}
    />
  ),
}

// Story with validation states
export const WithValidationStates: Story = {
  render: () => (
    <DataGridStoryWrapper
      initialRowData={[
        {
          __reactKey: '1',
          name: 'Valid Row',
          value: '100',
          __validationStatus: 'valid',
        },
        {
          __reactKey: '2',
          name: 'Invalid Row',
          value: 'abc',
          __validationStatus: 'invalid',
        },
        {
          __reactKey: '3',
          name: 'Pending Row',
          value: '50',
          __validationStatus: 'pending',
        },
        {
          __reactKey: '4',
          name: 'Another Valid Row',
          value: '200',
          __validationStatus: 'valid',
        },
      ]}
      columnNames={['name', 'value']}
      columnOrder={[0, 1]}
      schemaPropertiesInfo={{
        name: {
          type: { type: 'string', isArray: false },
          isRequired: true,
          enumeratedValues: null,
        },
        value: {
          type: { type: 'string', isArray: false },
          isRequired: true,
          enumeratedValues: null,
        },
      }}
      jsonSchema={{ type: 'object', properties: {} }}
    />
  ),
}
