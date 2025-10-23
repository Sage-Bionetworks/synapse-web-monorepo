import type { SxProps, Theme } from '@mui/material/styles'

/**
 * Utility to combine multiple SxProps into a single SxProps object that can be passed to a component.
 *
 * See https://github.com/mui/material-ui/issues/29274#issuecomment-953980228
 * @param sxProps
 */
export function mergeSx(
  ...sxProps: (SxProps<Theme> | undefined)[]
): SxProps<Theme> {
  return sxProps.filter(sx => sx !== undefined).flat()
}
