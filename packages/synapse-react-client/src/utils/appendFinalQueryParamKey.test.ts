import appendFinalQueryParamKey from './appendFinalQueryParamKey'

describe('appendFinalQueryParamKey', () => {
  it('appends the only query param', () => {
    const actual = appendFinalQueryParamKey(
      new URL('http://foo.bar/path/to/service'),
      'token',
    )

    expect(actual).toEqual('http://foo.bar/path/to/service?token=')
  })

  it('appends an additional query param', () => {
    const actual = appendFinalQueryParamKey(
      new URL('http://foo.bar/path/to/service?someOtherParam=baz'),
      'token',
    )

    expect(actual).toEqual(
      'http://foo.bar/path/to/service?someOtherParam=baz&token=',
    )
  })
})
