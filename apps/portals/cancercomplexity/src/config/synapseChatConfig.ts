import { processResponseDocument } from '@sage-bionetworks/synapse-portal-framework/shared-config/synapseChatHelpers'
import { SynapseChatProps } from 'synapse-react-client'

const synapseChatConfig: SynapseChatProps = {
  agentRegistrationId: '198',
  chatbotName: 'Cancer Complexity Portal Assistant',
  processResponseDocument,
}
export default synapseChatConfig
