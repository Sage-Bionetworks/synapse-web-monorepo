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

  it('replaces a valueless instance of the query param', () => {
    const actual = appendFinalQueryParamKey(
      new URL('http://foo.bar/path/to/service?token'),
      'token',
    )

    expect(actual).toEqual('http://foo.bar/path/to/service?token=')
  })

  it('replaces every existing instance of the query param', () => {
    const actual = appendFinalQueryParamKey(
      new URL('http://foo.bar/path/to/service?token&token=abc&token=def'),
      'token',
    )

    expect(actual).toEqual('http://foo.bar/path/to/service?token=')
  })

  it('preserves other query params while replacing the appended param', () => {
    const actual = appendFinalQueryParamKey(
      new URL(
        'http://foo.bar/path/to/service?token=abc&someOtherParam=baz&token=def',
      ),
      'token',
    )

    expect(actual).toEqual(
      'http://foo.bar/path/to/service?someOtherParam=baz&token=',
    )
  })

  it('is idempotent over repeated round-trips through the appended token', () => {
    const url = new URL('http://foo.bar/path/to/service')

    // Each round-trip mimics the server appending a token to the returned endpoint, and the user
    // opening that link and submitting the form again.
    let href = appendFinalQueryParamKey(url, 'token') + 'firstToken'
    href = appendFinalQueryParamKey(new URL(href), 'token') + 'secondToken'

    expect(href).toEqual('http://foo.bar/path/to/service?token=secondToken')
  })
})
