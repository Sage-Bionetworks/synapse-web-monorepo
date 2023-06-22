// import { Meta, StoryObj } from '@storybook/react'
import TermsAndConditions from '../src/components/TermsAndConditions/TermsAndConditions'
import { displayToast } from '../src/components/ToastMessage/ToastMessage'
// import { getHandlersForTableQuery } from '../mocks/msw/handlers/tableQueryHandlers'
// import { MOCK_REPO_ORIGIN } from '../src/utils/functions/getEndpoint'
// import mockSyn51718002 from '../mocks/query/syn51718002.json'
// import { QueryResultBundle } from '@sage-bionetworks/synapse-types'

const meta = {
  title: 'Synapse/TermsAndConditions',
  // parameters: {
  //   stack: 'mock',
  //   msw: {
  //     handlers: [
  //       ...getHandlersForTableQuery(mockSyn51718002 as QueryResultBundle, MOCK_REPO_ORIGIN)
  //     ]
  //   }
  // },
  component: TermsAndConditions,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    termsAndConditionsTableID: 'syn51718002',
    termsAndConditionsTableVersion: '4',
    onFormChange: formComplete => {
      if (formComplete) {
        displayToast('All items accepted!')
      }
    },
  },
}
