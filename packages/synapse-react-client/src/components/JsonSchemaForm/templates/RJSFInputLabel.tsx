import { StyledPopover } from '@/components/styled/StyledPopover'
import { HelpOutline, HelpTwoTone } from '@mui/icons-material'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import {
  FormContextType,
  Registry,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'
import { PropsWithChildren, useState } from 'react'

type RJSFInputLabelProps<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
> = PropsWithChildren<{
  /** If true, the label will not be shown
   * @default false */
  hideLabel?: boolean
  /** The rendered label of the field */
  fieldLabel: React.ReactNode
  /** The rendered description of the field */
  description: React.ReactNode
  /** The `registry` object */
  registry: Registry<T, S, F>
}>

/**
 * Component that handles rendering our custom input label and description fields for RJSF.
 */
export function RJSFInputLabelWrapper<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: RJSFInputLabelProps<T, S, F>) {
  const {
    hideLabel = false,
    fieldLabel,
    description,
    registry,
    children,
  } = props
  const descriptionVariant =
    registry.formContext.descriptionVariant || 'popover'

  const [showDetails, setShowDetails] = useState(false)

  const expandButton = (
    <Tooltip title={'More Info'}>
      <IconButton
        onClick={e => {
          e.preventDefault()
          setShowDetails(!showDetails)
        }}
        aria-expanded={showDetails}
        size={'small'}
      >
        <HelpOutline color={'primary'} sx={{ width: '16px', height: '16px' }} />
      </IconButton>
    </Tooltip>
  )

  const popoverButton = (
    <StyledPopover popoverContent={description} maxWidth="350px">
      <HelpTwoTone className={`HelpButton`} />
    </StyledPopover>
  )

  return (
    <>
      {!hideLabel && (
        <div className="LabelContainer">
          {fieldLabel}
          {description && descriptionVariant === 'popover' && popoverButton}
          {description && descriptionVariant === 'expand' && expandButton}
        </div>
      )}
      {children}
      {!hideLabel && descriptionVariant === 'expand' && (
        <Collapse className="field-description" in={showDetails}>
          {description}
        </Collapse>
      )}
    </>
  )
}
