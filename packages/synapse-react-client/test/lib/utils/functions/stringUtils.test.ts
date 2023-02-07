import { hex2ascii } from '../../../../src/lib/utils/functions/StringUtils'
import { JoinTeamSignedToken } from '../../../../src/lib/utils/synapseTypes/JoinTeamSignedToken'

describe('StringUtils.hex2ascii', () => {
  it('should parse hex encoded string properly', () => {
    const exampleToken =
      '7b22636f6e637265746554797065223a226f72672e7361676562696f6e6574776f726b732e7265706f2e6d6f64656c2e4a6f696e5465616d5369676e6564546f6b656e222c22686d6163223a2266616b65686d6163222c2276657273696f6e223a312c22657870697265734f6e223a22323032332d30332d30385432323a30323a35372e3534365a222c22637265617465644f6e223a22323032332d30322d30365432323a30323a35372e3532315a222c22757365724964223a2231323334222c227465616d4964223a2235363738222c226d656d6265724964223a2231323334227d'
    const tokenJson = hex2ascii(exampleToken)
    const joinTeamToken = JSON.parse(tokenJson) as JoinTeamSignedToken
    expect(joinTeamToken.teamId).toEqual('5678')
    expect(joinTeamToken.userId).toEqual('1234')
    expect(joinTeamToken.memberId).toEqual('1234')
  })
})
