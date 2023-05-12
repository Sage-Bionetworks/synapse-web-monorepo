import { Box, Link, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ConfirmationDialog } from './ConfirmationDialog'

export enum ProgrammaticOptionsTabs {
  COMMAND_LINE = 'Command Line',
  R = 'R',
  PYTHON = 'Python',
}

export type ProgrammaticInstructionsModalProps = {
  show: boolean
  title: string
  onClose: () => void
  pythonNotes?: React.ReactElement
  pythonCode?: string
  rNotes?: React.ReactElement
  rCode?: string
  cliNotes?: React.ReactElement
  cliCode?: string
  helpMarkdown?: string
  helpUrl?: string
}

/**
 * Modal used to show programmatic instructions
 * @param props
 * @returns
 */

export const ProgrammaticInstructionsModal = ({
  show,
  title,
  onClose,
  pythonNotes,
  pythonCode,
  rNotes,
  rCode,
  cliNotes,
  cliCode,
  helpMarkdown,
  helpUrl,
}: ProgrammaticInstructionsModalProps) => {
  let defaultTab
  if (cliCode) {
    defaultTab = ProgrammaticOptionsTabs.COMMAND_LINE
  } else if (pythonCode) {
    defaultTab = ProgrammaticOptionsTabs.PYTHON
  } else {
    defaultTab = ProgrammaticOptionsTabs.R
  }
  const [currentTab, setCurrentTab] =
    useState<ProgrammaticOptionsTabs>(defaultTab)

  const installationInstructions = (
    <Typography variant="body1">
      Installation instructions are available at our{' '}
      <Link
        href={
          'https://help.synapse.org/docs/Installing-Synapse-API-Clients.1985249668.html'
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        Synapse API Documentation Site
      </Link>
      .
    </Typography>
  )

  const dialogContent = (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          marginBottom: 4,
        }}
      >
        <Tabs
          value={currentTab}
          onChange={(
            event: React.SyntheticEvent,
            newValue: ProgrammaticOptionsTabs,
          ) => {
            event.stopPropagation()
            setCurrentTab(newValue)
          }}
          textColor="secondary"
          indicatorColor="secondary"
        >
          {cliCode && (
            <Tab
              value={ProgrammaticOptionsTabs.COMMAND_LINE}
              label={ProgrammaticOptionsTabs.COMMAND_LINE}
            />
          )}
          {rCode && (
            <Tab
              value={ProgrammaticOptionsTabs.R}
              label={ProgrammaticOptionsTabs.R}
            />
          )}
          {pythonCode && (
            <Tab
              value={ProgrammaticOptionsTabs.PYTHON}
              label={ProgrammaticOptionsTabs.PYTHON}
            />
          )}
        </Tabs>
      </Box>
      <Box sx={{ '& > p': { marginBottom: 3 } }}>
        {currentTab === ProgrammaticOptionsTabs.COMMAND_LINE && (
          <>
            <Typography variant="body1">{cliNotes}</Typography>
            {installationInstructions}
            <pre> {cliCode} </pre>
          </>
        )}
        {currentTab === ProgrammaticOptionsTabs.R && (
          <>
            <Typography variant="body1">{rNotes}</Typography>
            {installationInstructions}
            <pre>{rCode}</pre>
          </>
        )}
        {currentTab === ProgrammaticOptionsTabs.PYTHON && (
          <>
            <Typography variant="body1">{pythonNotes}</Typography>
            {installationInstructions}
            <pre>{pythonCode}</pre>
          </>
        )}
      </Box>
    </>
  )

  return (
    <ConfirmationDialog
      open={show}
      title={title}
      onCancel={onClose}
      onConfirm={onClose}
      maxWidth="md"
      helpMarkdown={helpMarkdown}
      helpUrl={helpUrl}
      content={dialogContent}
    />
  )
}

export default ProgrammaticInstructionsModal
