import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button'

export type ButtonProps = MUIButtonProps

/**
 * A generic button component. See
 *
 * @link https://mui.com/material-ui/react-button/ - MUI Button documentation
 * @link https://mui.com/material-ui/api/button/ - MUI Button API
 * @param props - See MUI ButtonProps for details
 * @returns
 */
export function Button(props: ButtonProps) {
  return <MUIButton {...props} />
}

export default Button
