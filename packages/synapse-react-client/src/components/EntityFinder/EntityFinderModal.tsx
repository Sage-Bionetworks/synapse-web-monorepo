import React, { useState } from 'react'
import { Reference } from '@sage-bionetworks/synapse-types'
import { Box, Typography } from '@mui/material'
import { ConfirmationDialog } from '../ConfirmationDialog'
import { HelpPopoverProps } from '../HelpPopover/HelpPopover'
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
}

export const EntityFinderModal = (props: EntityFinderModalProps) => {
  const [selected, setSelected] = useState<Reference[]>([])
  const [showUnsavedChangesWarning, setShowUnsavedChangesWarning] =
    useState(false)
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
        titleHelpPopoverProps={props.titleHelpPopoverProps}
        confirmButtonProps={{ children: props.confirmButtonCopy }}
        onConfirm={() => {
          props.onConfirm(selected)
        }}
        onCancel={() => {
          if (selected.length > 0) {
            setShowUnsavedChangesWarning(true)
          } else {
            props.onCancel()
          }
        }}
        content={
          <Box width="min-content">
            <Typography variant="body1" mb="10px">
              {props.promptCopy}
            </Typography>
            <EntityFinder
              {...props.configuration}
              onSelectedChange={setSelected}
            />
          </Box>
        }
      />
    </>
  )
}
