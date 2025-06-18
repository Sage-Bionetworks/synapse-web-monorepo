import {
  StyledPopover,
  StyledPopoverProps,
} from '@/components/styled/StyledPopover'
import Typography from '@mui/material/Typography'
import MarkdownSynapse, { MarkdownSynapseProps } from './MarkdownSynapse'

export type MarkdownPopoverProps = Omit<
  StyledPopoverProps,
  'popoverContent'
> & {
  contentProps: MarkdownSynapseProps
}

export function MarkdownPopover(props: MarkdownPopoverProps) {
  const { contentProps, ...rest } = props
  return (
    <StyledPopover
      {...rest}
      popoverContent={
        <Typography variant="body1">
          <MarkdownSynapse {...contentProps} />
        </Typography>
      }
    />
  )
}
