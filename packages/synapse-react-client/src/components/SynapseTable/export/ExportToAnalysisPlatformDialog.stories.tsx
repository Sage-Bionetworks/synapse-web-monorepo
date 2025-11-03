import {
  QueryVisualizationWrapper,
  useQueryVisualizationContext,
} from '@/components/QueryVisualizationWrapper/index'
import { QueryWrapper } from '@/components/QueryWrapper/index'
import { mockQueryBundleRequest } from '@/mocks/mockFileViewQuery'
import { getHandlers } from '@/mocks/msw/handlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect } from 'react'
import ExportToAnalysisPlatformDialog, {
  ExportToAnalysisPlatformDialogProps,
} from './ExportToAnalysisPlatformDialog'

const meta: Meta<
  ExportToAnalysisPlatformDialogProps & {
    hasRowSelection: boolean
    unitDescription: string
  }
> = {
  title: 'Explore/Send to Analysis Platform Dialog',
  component: ExportToAnalysisPlatformDialog,
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
      url: 'https://www.figma.com/design/GWQwLZl82ZT75gYonOx8Qf/AMP-ALS-Knowledge-Portal-v1?node-id=234-115477&m=dev',
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
  const {
    isShowingExportToAnalysisPlatformModal,
    setIsShowingExportToAnalysisPlatformModal,
  } = useQueryVisualizationContext()
  useEffect(() => {
    if (!isShowingExportToAnalysisPlatformModal) {
      setIsShowingExportToAnalysisPlatformModal(true)
    }
  }, [
    isShowingExportToAnalysisPlatformModal,
    setIsShowingExportToAnalysisPlatformModal,
  ])
  return <></>
}

export const Demo: Story = {
  name: 'Send to Analysis Platform Dialog',
  args: {
    platformInstructionProps: {
      cavaticaConnectAccountURL:
        'https://help.eliteportal.org/help/analysis-environments#IntegrationwithAnalysis&ComputeEnvironments-GainingAccess',
    },
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
            enabledExternalAnalysisPlatforms={[
              'cavatica',
              'terra',
              'adworkbench',
              'pluto',
            ]}
          >
            <ShowModalTrigger />
            <Story />
          </QueryVisualizationWrapper>
        </QueryWrapper>
      )
    },
  ],
}
