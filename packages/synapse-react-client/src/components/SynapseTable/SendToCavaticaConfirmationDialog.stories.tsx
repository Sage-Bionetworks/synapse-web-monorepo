import { mockQueryBundleRequest } from '@/mocks/mockFileViewQuery'
import { getHandlers } from '@/mocks/msw/handlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'
import {
  QueryVisualizationWrapper,
  useQueryVisualizationContext,
} from '../QueryVisualizationWrapper/index'
import { QueryWrapper } from '../QueryWrapper/index'
import SendToCavaticaConfirmationDialog, {
  SendToCavaticaConfirmationDialogProps,
} from './SendToCavaticaConfirmationDialog'

const meta: Meta<
  SendToCavaticaConfirmationDialogProps & {
    hasRowSelection: boolean
    unitDescription: string
  }
> = {
  title: 'Explore/Send to CAVATICA Dialog',
  component: SendToCavaticaConfirmationDialog,
  argTypes: {
    hasRowSelection: {
      description:
        'Simulates whether or not the table has row selection enabled.',
      control: { type: 'boolean' },
    },
    unitDescription: {
      description: 'A word describing what each row represents',
      control: { type: 'text' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3l3RjDnKnv8jms2XFR5BQu/Main?type=design&node-id=1909-58523',
    },
    msw: {
      handlers: [
        // Only return mocked data when making requests to our mock stack
        ...getHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

function ShowModalTrigger() {
  const { isShowingExportToCavaticaModal, setIsShowingExportToCavaticaModal } =
    useQueryVisualizationContext()
  useEffect(() => {
    if (!isShowingExportToCavaticaModal) {
      setIsShowingExportToCavaticaModal(true)
    }
  }, [isShowingExportToCavaticaModal, setIsShowingExportToCavaticaModal])
  return <></>
}

export const Demo: Story = {
  name: 'Send to CAVATICA Dialog',
  args: {
    hasRowSelection: false,
    unitDescription: 'file',
  },
  decorators: [
    (Story, args) => {
      return (
        <QueryWrapper initQueryRequest={mockQueryBundleRequest}>
          <QueryVisualizationWrapper
            unitDescription={args.unitDescription}
            isRowSelectionVisible={args.hasRowSelection}
          >
            <ShowModalTrigger />
            <Story />
          </QueryVisualizationWrapper>
        </QueryWrapper>
      )
    },
  ],
}
