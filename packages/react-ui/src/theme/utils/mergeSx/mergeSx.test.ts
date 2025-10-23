import type { SxProps, Theme } from '@mui/material/styles'
import { mergeSx } from './mergeSx'

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
    expect(mergeSx(sxObject, undefined)).toEqual([sxObject])
  })
  it('Flattens a nested array', () => {
    expect(mergeSx(sxObject, nestedSxObject)).toEqual([
      sxObject,
      nestedSxObject[0],
    ])
  })
  it('Handles a mix of functions and objects', () => {
    expect(
      mergeSx(
        sxObject,
        nestedSxObject,
        sxFunction,
        nestedSxFunction,
        undefined,
      ),
    ).toEqual([sxObject, nestedSxObject[0], sxFunction, nestedSxFunction[0]])
  })
})
