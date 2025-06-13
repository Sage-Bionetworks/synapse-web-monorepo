import JSONTableCellRenderer from './index'
import { render } from '@testing-library/react'

describe('JSONTableCellRenderer', () => {
  it.each<[string, any]>([
    ['Empty array', []],
    ['Empty object', {}],
    ['Array of primitives', ['foo', 1000, -25.67, null, true, false]],
    [
      'Object of primitives',
      {
        string: 'foo',
        numberInt: 1000,
        numberFloat: -25.67,
        null: null,
        true: true,
        false: false,
      },
    ],
    ['one item', ['foo']],
    ['one null item', [null]],
    ['null', null],
    [
      'complex array',
      [
        {
          foo: [
            'bar',
            'baz',
            {
              qux: 'quux',
              lorem: 'ipsum',
            },
          ],
        },
        null,
        ['qwerty', 'asdf'],
      ],
    ],
    [
      'complex object',
      {
        foo: [
          'bar',
          'baz',
          {
            qux: ['quux', 'abc'],
            lorem: 'ipsum',
          },
        ],

        null: null,
        bar: 'baz',
        zxcv: {
          querty: 'asdf',
        },
      },
    ],
  ])('handles %s case', (_case, jsonObject) => {
    const { container } = render(<JSONTableCellRenderer value={jsonObject} />)
    expect(container).toMatchSnapshot()
  })
})
