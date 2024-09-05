import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import {
  getAccessTypeFromPermissionLevel,
  getPermissionLevelFromAccessType,
} from './PermissionLevelToAccessType'

describe('PermissionLevelToAccessType', () => {
  describe('getPermissionLevelFromAccessType', () => {
    describe('Entity', () => {
      test('Can View', () => {
        expect(getPermissionLevelFromAccessType([ACCESS_TYPE.READ])).toEqual(
          'CAN_VIEW',
        )
      })
      test('Can Download', () => {
        expect(
          getPermissionLevelFromAccessType([
            ACCESS_TYPE.READ,
            ACCESS_TYPE.DOWNLOAD,
          ]),
        ).toEqual('CAN_DOWNLOAD')
      })
      test('Can Edit', () => {
        expect(
          getPermissionLevelFromAccessType([
            ACCESS_TYPE.READ,
            ACCESS_TYPE.DOWNLOAD,
            ACCESS_TYPE.CREATE,
            ACCESS_TYPE.UPDATE,
          ]),
        ).toEqual('CAN_EDIT')
      })

      test('Can Edit & Delete', () => {
        expect(
          getPermissionLevelFromAccessType([
            ACCESS_TYPE.READ,
            ACCESS_TYPE.DOWNLOAD,
            ACCESS_TYPE.CREATE,
            ACCESS_TYPE.UPDATE,
            ACCESS_TYPE.DELETE,
          ]),
        ).toEqual('CAN_EDIT_DELETE')
      })

      test('Can Administer', () => {
        expect(
          getPermissionLevelFromAccessType([
            ACCESS_TYPE.READ,
            ACCESS_TYPE.DOWNLOAD,
            ACCESS_TYPE.CREATE,
            ACCESS_TYPE.UPDATE,
            ACCESS_TYPE.DELETE,
            ACCESS_TYPE.CHANGE_PERMISSIONS,
            ACCESS_TYPE.CHANGE_SETTINGS,
            ACCESS_TYPE.MODERATE,
          ]),
        ).toEqual('CAN_ADMINISTER')
      })
    })
    describe('Access Requirement', () => {
      test('Can Review', () => {
        expect(
          getPermissionLevelFromAccessType([ACCESS_TYPE.REVIEW_SUBMISSIONS]),
        ).toEqual('CAN_REVIEW_SUBMISSIONS')
      })

      test('Exempt Eligible', () => {
        expect(
          getPermissionLevelFromAccessType([ACCESS_TYPE.EXEMPTION_ELIGIBLE]),
        ).toEqual('IS_EXEMPTION_ELIGIBLE')
      })

      test('Can Review & Exempt Eligible', () => {
        expect(
          getPermissionLevelFromAccessType([
            ACCESS_TYPE.REVIEW_SUBMISSIONS,
            ACCESS_TYPE.EXEMPTION_ELIGIBLE,
          ]),
        ).toEqual('CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE')

        // accessType order does not change result
        expect(
          getPermissionLevelFromAccessType([
            ACCESS_TYPE.EXEMPTION_ELIGIBLE,
            ACCESS_TYPE.REVIEW_SUBMISSIONS,
          ]),
        ).toEqual('CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE')
      })
    })
  })

  describe('getAccessTypeFromPermissionLevel', () => {
    describe('Entity', () => {
      test('Can View', () => {
        expect(new Set(getAccessTypeFromPermissionLevel('CAN_VIEW'))).toEqual(
          new Set([ACCESS_TYPE.READ]),
        )
      })
      test('Can Download', () => {
        expect(
          new Set(getAccessTypeFromPermissionLevel('CAN_DOWNLOAD')),
        ).toEqual(new Set([ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD]))
      })
      test('Can Edit', () => {
        expect(new Set(getAccessTypeFromPermissionLevel('CAN_EDIT'))).toEqual(
          new Set([
            ACCESS_TYPE.CREATE,
            ACCESS_TYPE.READ,
            ACCESS_TYPE.DOWNLOAD,
            ACCESS_TYPE.UPDATE,
          ]),
        )
      })
      test('Can Edit & Delete', () => {
        expect(
          new Set(getAccessTypeFromPermissionLevel('CAN_EDIT_DELETE')),
        ).toEqual(
          new Set([
            ACCESS_TYPE.CREATE,
            ACCESS_TYPE.READ,
            ACCESS_TYPE.DOWNLOAD,
            ACCESS_TYPE.UPDATE,
            ACCESS_TYPE.DELETE,
          ]),
        )
      })

      test('Can Administer', () => {
        expect(
          new Set(getAccessTypeFromPermissionLevel('CAN_ADMINISTER')),
        ).toEqual(
          new Set([
            ACCESS_TYPE.CREATE,
            ACCESS_TYPE.READ,
            ACCESS_TYPE.DOWNLOAD,
            ACCESS_TYPE.UPDATE,
            ACCESS_TYPE.DELETE,
            ACCESS_TYPE.CHANGE_PERMISSIONS,
            ACCESS_TYPE.CHANGE_SETTINGS,
            ACCESS_TYPE.MODERATE,
          ]),
        )
      })
    })
    describe('Access Requirement', () => {
      test('Can Review', () => {
        expect(
          getAccessTypeFromPermissionLevel('CAN_REVIEW_SUBMISSIONS'),
        ).toEqual([ACCESS_TYPE.REVIEW_SUBMISSIONS])
      })

      test('Exempt Eligible', () => {
        expect(
          getAccessTypeFromPermissionLevel('IS_EXEMPTION_ELIGIBLE'),
        ).toEqual([ACCESS_TYPE.EXEMPTION_ELIGIBLE])
      })

      test('Can Review & Exempt Eligible', () => {
        expect(
          getAccessTypeFromPermissionLevel(
            'CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE',
          ),
        ).toEqual([
          ACCESS_TYPE.EXEMPTION_ELIGIBLE,
          ACCESS_TYPE.REVIEW_SUBMISSIONS,
        ])
      })
    })
  })
})
