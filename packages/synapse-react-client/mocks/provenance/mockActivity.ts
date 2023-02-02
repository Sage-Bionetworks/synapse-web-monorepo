import { Activity } from '../../src/lib/utils/synapseTypes/Provenance/Provenance'
import { MOCK_USER_ID } from '../user/mock_user_profile'
import { MOCK_TABLE_ENTITY_ID } from '../entity/mockTableEntity'

const MOCK_ACTIVITY_ID = '1112345'
const MOCK_ACTIVITY_NAME = 'My test activity'
const MOCK_ACTIVITY_DESCRIPTION = 'My test activity description'

export const mockActivity: Activity = {
  id: MOCK_ACTIVITY_ID,
  name: MOCK_ACTIVITY_NAME,
  description: MOCK_ACTIVITY_DESCRIPTION,
  etag: '3e2f0478-29d4-4106-8a7a-38b609505dcf',
  createdOn: '2018-10-24T23:38:28.331Z',
  modifiedOn: '2018-10-25T18:42:47.600Z',
  createdBy: `${MOCK_USER_ID}`,
  modifiedBy: `${MOCK_USER_ID}`,
  used: [
    {
      wasExecuted: false,
      concreteType: 'org.sagebionetworks.repo.model.provenance.UsedEntity',
      reference: {
        targetId: MOCK_TABLE_ENTITY_ID,
      },
    },
    {
      wasExecuted: true,
      concreteType: 'org.sagebionetworks.repo.model.provenance.UsedURL',
      name: 'process.R',
      url: 'https://raw.githubusercontent.com/Sage-Bionetworks/agoradataprocessing/v1.0.0/exec/process.R',
    },
  ],
}
