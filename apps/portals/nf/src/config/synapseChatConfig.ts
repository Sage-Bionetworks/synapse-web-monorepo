import { processResponseDocument } from '@sage-bionetworks/synapse-portal-framework/shared-config/synapseChatHelpers'
import { SynapseChatProps } from 'synapse-react-client'

const synapseChatConfig: SynapseChatProps = {
  agentRegistrationId: '197',
  chatbotName: 'NF Portal Assistant',
  processResponseDocument,
}
export default synapseChatConfig
