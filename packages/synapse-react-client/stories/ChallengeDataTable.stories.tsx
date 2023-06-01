import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ChallengeDataTable } from '../src/components/ChallengeDataDownload'
import { Paper } from '@mui/material'
import { VersionSelectionType } from '../src/components/EntityFinder/VersionSelectionType'
import { EntityType } from '@sage-bionetworks/synapse-types'
import { ChallengeDataTableProps } from '../src/components/ChallengeDataDownload/types'

const entityId = `syn50932087`
const MIN_TABLE_WIDTH = 1200
const TABLE_HEIGHT = 350
const hasNextPage = false
const isFetchingNextPage = false
const isLoading = false
const versionNumber = 1

const defaultArgs: ChallengeDataTableProps = {
  tableData: [
    {
      benefactorId: 50932087,
      createdBy: `3403893`,
      createdOn: `2023-01-25T17:54:31.098Z`,
      currentSelectedVersion: versionNumber,
      entityId,
      entityType: EntityType.FILE,
      id: `syn50932087`,
      isDisabled: false,
      isSelected: true,
      isLatestVersion: true,
      isVersionableEntity: true,
      modifiedBy: `3403893`,
      modifiedOn: `2023-01-25T17:54:31.098Z`,
      name: `squeezenet1_1-f364aa15.pth`,
      onChangeSelected: () => {},
      size: 4966400,
      type: `org.sagebionetworks.repo.model.FileEntity`,
      versionNumber,
    },
  ],
  versionSelection: VersionSelectionType.REQUIRED,
}

const meta = {
  argTypes: {
    hasNextPage: {
      name: 'hasNextPage',
      type: { name: 'boolean', required: false },
      defaultValue: hasNextPage,
      description: '`True` if there is another page of results.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: hasNextPage },
      },
    },
    isFetchingNextPage: {
      name: 'isFetchingNextPage',
      type: { name: 'boolean', required: false },
      defaultValue: isFetchingNextPage,
      description:
        '`True` if the app is currently fetching another page of results.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: isFetchingNextPage },
      },
    },
    isLoading: {
      name: 'isLoading',
      type: { name: 'boolean', required: false },
      defaultValue: isLoading,
      description: '`True` if the component is currently loading.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: isLoading },
      },
    },
    minTableWidth: {
      name: 'minTableWidth',
      type: { name: 'number', required: false },
      defaultValue: MIN_TABLE_WIDTH,
      description: 'The minimum width of the table in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: MIN_TABLE_WIDTH },
      },
    },
    tableHeight: {
      name: 'tableHeight',
      type: { name: 'number', required: false },
      defaultValue: TABLE_HEIGHT,
      description: 'The height of the table in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: TABLE_HEIGHT },
      },
    },
    versionSelection: {
      name: 'versionSelection',
      options: Object.values(VersionSelectionType),
      control: { type: 'select' },
    },
  },
  title: 'ChallengeDataTable',
  component: ChallengeDataTable,
  render: args => {
    return (
      <Paper sx={{ p: 4 }}>
        <ChallengeDataTable {...{ ...defaultArgs, ...args }} />
      </Paper>
    )
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ChallengeDataTableDemo: Story = {
  args: {
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
    isLoading: isLoading,
    minTableWidth: MIN_TABLE_WIDTH,
    tableData: defaultArgs.tableData,
    tableHeight: TABLE_HEIGHT,
    versionSelection: VersionSelectionType.REQUIRED,
  },
}
