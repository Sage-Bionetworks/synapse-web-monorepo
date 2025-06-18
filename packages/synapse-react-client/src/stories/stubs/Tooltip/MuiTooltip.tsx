import MuiTooltip, {
  TooltipProps as MuiTooltipProps,
} from '@mui/material/Tooltip'

export type TooltipProps = MuiTooltipProps

export const Tooltip = (props: TooltipProps) => <MuiTooltip {...props} />
