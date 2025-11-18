import React from 'react'
import { hasDifference } from '@/utils/functions/ArrayUtils'
import { Box, Typography } from '@mui/material'
import { Reference } from '@sage-bionetworks/synapse-types'
import { useEffect, useMemo, useState } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog'
import HelpPopover, { HelpPopoverProps } from '../HelpPopover/HelpPopover'
import WarningDialog from '../SynapseForm/WarningDialog'
import EntityFinder, { EntityFinderProps } from './EntityFinder'

export const UNSAVED_CHANGES = 'Unsaved Changes'

export type EntityFinderModalProps = {
  configuration: Omit<EntityFinderProps, 'onSelectedChange'>
  show: boolean
  title: string
  titleHelpPopoverProps?: HelpPopoverProps
  onConfirm: (selected: Reference[]) => void
  confirmButtonCopy: string
  onCancel: () => void
  promptCopy?: string
  initialSelected?: Reference[]
}

export const EntityFinderModal = (
  props: EntityFinderModalProps,
): React.ReactNode => {
  const [selected, setSelected] = useState<Reference[]>([])
  useEffect(() => {
    if (props.initialSelected) {
      setSelected(props.initialSelected)
    }
  }, [props.initialSelected])

  const [showUnsavedChangesWarning, setShowUnsavedChangesWarning] =
    useState(false)
  const hasUnsavedChanges = useMemo(() => {
    if (props.initialSelected == null) {
      return selected.length > 0
    }
    return hasDifference(props.initialSelected, selected)
  }, [props.initialSelected, selected])

  return (
    <>
      <WarningDialog
        title={UNSAVED_CHANGES}
        content="Any unsaved changes will be lost. Are you sure you want to close the finder?"
        open={showUnsavedChangesWarning}
        confirmButtonText="Close Finder"
        onConfirm={() => {
          setShowUnsavedChangesWarning(false)
          props.onCancel()
        }}
        onCancel={() => {
          setShowUnsavedChangesWarning(false)
        }}
      />
      <ConfirmationDialog
        open={props.show}
        title={props.title}
        fullWidth={false}
        maxWidth="xl"
        titleHelp={
          props.titleHelpPopoverProps ? (
            <HelpPopover {...props.titleHelpPopoverProps} />
          ) : undefined
        }
        confirmButtonProps={{ children: props.confirmButtonCopy }}
        onConfirm={() => {
          props.onConfirm(selected)
        }}
        onCancel={() => {
          if (hasUnsavedChanges) {
            setShowUnsavedChangesWarning(true)
          } else {
            props.onCancel()
          }
        }}
        content={
          <Box>
            <Typography
              variant="body1"
              sx={{
                mb: '10px',
                // Do not allow the help text to expand the dialog width
                minWidth: '100%',
                width: 0,
              }}
            >
              {props.promptCopy}
            </Typography>
            <EntityFinder
              {...props.configuration}
              initialSelected={props.initialSelected}
              onSelectedChange={setSelected}
            />
          </Box>
        }
      />
    </>
  )
}
