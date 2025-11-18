import { Meta, StoryObj } from '@storybook/react-vite'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { GetApp } from '@mui/icons-material'
import { RowSelectionUI, RowSelectionUIProps } from './RowSelectionUI'
import Button from '@/react-ui/components/Button'
import { times } from 'lodash-es'

const meta = {
  title: 'Explore/RowSelection',
  argTypes: {
    numberOfActions: {
      type: 'number',
      description: 'The number of actions to display',
    },
  },
  render: args => {
    const { numberOfActions = 0, ...props } = args
    return (
      <RowSelectionUI
        {...props}
        customControls={
          <>
            {times(numberOfActions, i => (
              <Button
                variant={i === numberOfActions - 1 ? 'contained' : 'outlined'}
                color={i % 3 == 3 ? 'secondary' : 'primary'}
                startIcon={<GetApp />}
                onClick={() => displayToast(`clicked action ${i}`)}
              >
                Action {i}
              </Button>
            ))}
          </>
        }
      />
    )
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3l3RjDnKnv8jms2XFR5BQu/Main?type=design&node-id=462-39826',
    },
  },
} satisfies Meta<
  Omit<RowSelectionUIProps, 'customControls'> & { numberOfActions?: number }
>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'RowSelection',
  args: {
    show: true,
    selectedRowCount: 5,
    onClearSelection: () => {
      displayToast('clear selection called')
    },
    numberOfActions: 2,
  },
}
