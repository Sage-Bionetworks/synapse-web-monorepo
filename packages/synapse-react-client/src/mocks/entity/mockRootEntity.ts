import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  ACCESS_TYPE,
  AccessControlList,
  Folder,
} from '@sage-bionetworks/synapse-types'
import { generateBaseEntity } from '../faker/generateFakeEntity'
import { MockEntityData } from './MockEntityData'

const rootEntityBenefactorAcl: AccessControlList = {
  id: 'syn4489',
  creationDate: '2011-08-07T01:14:53.898Z',
  etag: 'e5edca05-4442-4073-8474-1a6a384053e9',
  resourceAccess: [
    {
      principalId: 273948,
      accessType: [ACCESS_TYPE.CREATE],
    },
  ],
}

const mockRootEntityData: MockEntityData<Folder> = generateBaseEntity<Folder>({
  id: 4489,
  entity: { name: '' },
  acl: rootEntityBenefactorAcl,
  type: EntityType.folder,
  permissions: {
    canView: false,
    canEdit: false,
    canMove: false,
    canAddChild: false,
    canCertifiedUserEdit: false,
    canCertifiedUserAddChild: false,
    isCertifiedUser: false,
    canChangePermissions: false,
    canChangeSettings: false,
    canDelete: false,
    canDownload: false,
    canUpload: false,
    canEnableInheritance: false,
    ownerPrincipalId: 0,
    canPublicRead: false,
    canModerate: false,
    isCertificationRequired: false,
    isEntityOpenData: false,
  },
})

export default mockRootEntityData
