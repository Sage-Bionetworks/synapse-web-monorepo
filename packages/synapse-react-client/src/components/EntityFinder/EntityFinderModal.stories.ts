import { Meta, StoryObj } from '@storybook/react'
import { EntityFinderModal } from './EntityFinderModal'
import {
  SinglePane as EntityFinderSinglePane,
  DualPane as EntityFinderDualPane,
} from './EntityFinder.stories'
import { fn } from '@storybook/test'

const meta = {
  title: 'Synapse/EntityFinderModal',
  component: EntityFinderModal,
  args: {
    onConfirm: fn(),
    onCancel: fn(),
  },
  argTypes: {
    versionSelection: {
      options: ['REQUIRED', 'DISABLED', 'TRACKED', 'UNTRACKED'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const DualPane: Story = {
  args: {
    configuration: { ...EntityFinderDualPane.args },
    show: true,
    title: 'Select Files',
    titleHelpPopoverProps: {
      markdownText: 'Some text to help you',
      helpUrl: 'https://help.synapse.org/docs/Datasets.2611281979.html',
      placement: 'right',
    },
    promptCopy:
      'Select a project to find Access Requirements that are associated with that project. Access Requirements will be found if the Access Requirement is applied to the project, or if it is applied to any item inside the project.',
    confirmButtonCopy: 'Select',
  },
}

export const SinglePane: Story = {
  args: {
    ...{ ...DualPane.args, configuration: { ...EntityFinderSinglePane.args } },
  },
}
