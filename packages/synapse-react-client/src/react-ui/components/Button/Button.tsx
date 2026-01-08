import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button'
import { ReactNode } from 'react'

export type ButtonProps = MUIButtonProps

/**
 * A generic button component. See
 *
 * @link https://mui.com/material-ui/react-button/ - MUI Button documentation
 * @link https://mui.com/material-ui/api/button/ - MUI Button API
 * @param props - See MUI ButtonProps for details
 * @returns
 */
export default function Button(props: ButtonProps): ReactNode {
  return <MUIButton {...props} />
}
