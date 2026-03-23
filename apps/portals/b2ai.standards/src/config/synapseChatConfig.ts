import { processResponseDocument } from '@sage-bionetworks/synapse-portal-framework/shared-config/synapseChatHelpers'
import { SynapseChatProps } from 'synapse-react-client'

const synapseChatConfig: SynapseChatProps = {
  agentRegistrationId: '174',
  chatbotName: 'Bridge2AI Standards Portal Assistant',
  processResponseDocument,
}
export default synapseChatConfig
