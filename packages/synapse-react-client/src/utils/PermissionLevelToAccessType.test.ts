import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import {
  getAccessTypeFromPermissionLevel,
  getPermissionLevelFromAccessType,
} from './PermissionLevelToAccessType'

describe('PermissionLevelToAccessType', () => {
  describe('getPermissionLevelFromAccessType', () => {
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

  describe('getAccessTypeFromPermissionLevel', () => {
    test('Can Review', () => {
      expect(
        getAccessTypeFromPermissionLevel('CAN_REVIEW_SUBMISSIONS'),
      ).toEqual([ACCESS_TYPE.REVIEW_SUBMISSIONS])
    })

    test('Exempt Eligible', () => {
      expect(getAccessTypeFromPermissionLevel('IS_EXEMPTION_ELIGIBLE')).toEqual(
        [ACCESS_TYPE.EXEMPTION_ELIGIBLE],
      )
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
