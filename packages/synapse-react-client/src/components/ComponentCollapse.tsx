import { spreadSx } from '@/theme/spreadSx'
import {
  KeyboardArrowDownTwoTone,
  KeyboardArrowUpTwoTone,
} from '@mui/icons-material'
import { Box, Collapse, SxProps } from '@mui/material'
import {
  KeyboardEvent,
  PropsWithChildren,
  ReactNode,
  useId,
  useState,
} from 'react'

export type ComponentCollapseProps = PropsWithChildren<{
  component: ReactNode
  defaultVisible?: boolean // default to false (collapsed)
  componentContainerSx?: SxProps
  collapseBoxSx?: SxProps
  iconSx?: SxProps
}>

/**
 * Wrap any child components in a collapse, using a custom component as the trigger
 */
export default function ComponentCollapse({
  component,
  defaultVisible,
  componentContainerSx,
  collapseBoxSx,
  iconSx,
  children,
}: ComponentCollapseProps) {
  const [show, setShow] = useState(defaultVisible)
  const collapseId = useId()
  const allIconSx: SxProps = {
    color: 'grey.700',
    marginBottom: '-5px !important',
    height: '18px',
    ...iconSx,
  }

  const componentContainerDefaultSx: SxProps = {
    display: 'flex',
    textAlign: 'left',
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
        component="button"
        sx={spreadSx(componentContainerDefaultSx, componentContainerSx)}
        onClick={() => setShow(!show)}
        onKeyDown={(e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setShow(!show)
          }
        }}
        aria-controls={collapseId}
        aria-expanded={show}
      >
        {component}
        {show ? (
          <KeyboardArrowUpTwoTone sx={allIconSx} />
        ) : (
          <KeyboardArrowDownTwoTone sx={allIconSx} />
        )}
      </Box>
      <Collapse in={show}>
        <Box sx={spreadSx(collapseBoxDefaultSx, collapseBoxSx)}>
          <div id={collapseId}>{children}</div>
        </Box>
      </Collapse>
    </div>
  )
}
