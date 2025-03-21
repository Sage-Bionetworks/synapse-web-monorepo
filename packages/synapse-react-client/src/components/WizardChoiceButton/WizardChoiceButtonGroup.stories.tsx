import { FolderTwoTone, InsertDriveFileTwoTone } from '@mui/icons-material'
import { Meta, StoryObj } from '@storybook/react'
import WizardChoiceButton from './WizardChoiceButton'
import WizardChoiceButtonGroup from './WizardChoiceButtonGroup'

const meta = {
  title: 'UI/WizardChoiceButtonGroup',
  component: WizardChoiceButtonGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vLusb6uSfhx45OyFx5IHwy/(XDM)-Extensible-Data-Management-Comps?type=design&node-id=2955-29513&mode=design&t=Dhbz59ySu37vSy4e-4',
    },
  },
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    children: (
      <>
        <WizardChoiceButton
          title={"'Classic' Access Requirement"}
          description={
            'These access requirements use proprietary a proprietary model for describing access conditions. If you need to maintain compatibility with a legacy access requirement, or cannot use DUO, choose this option.'
          }
        />
        <WizardChoiceButton
          title={'DUO Access Requirement'}
          description={
            'The Data Use Ontology (DUO) is an open standard for describing access requirement conditions. Access Requirements managed under DUO support additional automation features.'
          }
        />
      </>
    ),
  },
}

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <WizardChoiceButton
          title={'File'}
          description={
            'Some option with a file icon. This is a long description that should wrap to multiple lines. This is a long description that should wrap to multiple lines. This is a long description that should wrap to multiple lines.'
          }
          icon={<InsertDriveFileTwoTone fontSize={'large'} />}
        />
        <WizardChoiceButton
          title={'Folder or Directory'}
          description={'Select this option for "Folder or Directory".'}
          icon={<FolderTwoTone fontSize={'large'} />}
        />
      </>
    ),
  },
}
