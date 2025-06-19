import { SxProps } from '@mui/material/styles'
import { Theme } from '@mui/material/styles'
import { spreadSx } from './spreadSx'

describe('spreadSx', () => {
  const sxObject: SxProps<Theme> = { color: 'red' }
  const nestedSxObject: SxProps<Theme> = [{ color: 'blue' }]
  const sxFunction: SxProps<Theme> = theme => ({
    color: theme.palette.primary.main,
  })
  const nestedSxFunction: SxProps<Theme> = [
    theme => ({ color: theme.palette.secondary.main }),
  ]

  it('Removes undefined sx', () => {
    expect(spreadSx(sxObject, undefined)).toEqual([sxObject])
  })
  it('Flattens a nested array', () => {
    expect(spreadSx(sxObject, nestedSxObject)).toEqual([
      sxObject,
      nestedSxObject[0],
    ])
  })
  it('Handles a mix of functions and objects', () => {
    expect(
      spreadSx(
        sxObject,
        nestedSxObject,
        sxFunction,
        nestedSxFunction,
        undefined,
      ),
    ).toEqual([sxObject, nestedSxObject[0], sxFunction, nestedSxFunction[0]])
  })
})
