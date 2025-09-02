import { spreadSx } from '@/theme/spreadSx'
import {
  KeyboardArrowDownTwoTone,
  KeyboardArrowUpTwoTone,
} from '@mui/icons-material'
import {
  Box,
  Collapse,
  SxProps,
  Typography,
  TypographyOwnProps,
} from '@mui/material'
import { PropsWithChildren, useState } from 'react'

export type ComponentCollapseProps = PropsWithChildren<{
  text: string
  defaultVisible?: boolean // default to false (collapsed)
  textVariant?: TypographyOwnProps['variant']
  textSx?: SxProps
  textContainerSx?: SxProps
  collapseBoxSx?: SxProps
  iconSx?: SxProps
}>

/**
 * Wrap any Synapse config object in a collapse
 * @param props
 * @returns
 */
export default function ComponentCollapse({
  text,
  defaultVisible,
  textVariant = 'smallLink',
  textSx,
  textContainerSx,
  collapseBoxSx,
  iconSx,
  children,
}: ComponentCollapseProps) {
  const [show, setShow] = useState(defaultVisible)
  const allIconSx: SxProps = {
    color: 'grey.700',
    marginBottom: '-5px !important',
    height: '18px',
    ...iconSx,
  }

  const textContainerDefaultSx: SxProps = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'grey.200',
    padding: '15px',
    '&:hover': {
      cursor: 'pointer',
    },
  }
  const collapseBoxDefaultSx: SxProps = {
    backgroundColor: 'grey.100',
    padding: '25px',
  }
  return (
    <div className="MarkdownCollapse">
      <Box
        sx={spreadSx(textContainerDefaultSx, textContainerSx)}
        onClick={() => setShow(!show)}
      >
        <Typography
          variant={textVariant}
          aria-controls="collapse-text"
          aria-expanded={show}
          sx={textSx}
        >
          {text}
        </Typography>

        {show ? (
          <KeyboardArrowUpTwoTone sx={allIconSx} />
        ) : (
          <KeyboardArrowDownTwoTone sx={allIconSx} />
        )}
      </Box>
      <Collapse in={show}>
        <Box sx={spreadSx(collapseBoxDefaultSx, collapseBoxSx)}>
          <div id="collapse-text">{children}</div>
        </Box>
      </Collapse>
    </div>
  )
}
