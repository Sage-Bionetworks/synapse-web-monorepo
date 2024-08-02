import { getDisplayName } from './DisplayUtils'

describe('DisplayUtils', () => {
  test('getDisplayName', () => {
    const fName = 'first'
    const lName = 'last'
    const userName = 'username'
    expect(getDisplayName(fName, lName, userName)).toEqual(
      'first last (username)',
    )

    // possible new user state, where first and last names are not filled in during registration
    expect(getDisplayName(null, null, userName)).toEqual('username')
    expect(getDisplayName('', '', userName)).toEqual('username')
  })
})
