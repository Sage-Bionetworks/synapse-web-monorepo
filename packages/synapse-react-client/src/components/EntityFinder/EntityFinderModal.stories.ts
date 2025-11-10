import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import {
  DualPane as EntityFinderDualPane,
  SinglePane as EntityFinderSinglePane,
} from './EntityFinder.stories'
import { EntityFinderModal } from './EntityFinderModal'

const meta: Meta<typeof EntityFinderModal> = {
  title: 'Synapse/EntityFinderModal',
  component: EntityFinderModal,
  args: {
    onConfirm: fn(),
    onCancel: fn(),
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
