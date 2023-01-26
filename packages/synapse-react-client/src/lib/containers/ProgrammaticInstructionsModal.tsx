import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { HelpPopover } from './HelpPopover'

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
    <p>
      Installation instructions are available at our{' '}
      <a
        className="ProgrammaticOptions__docslink"
        href="https://help.synapse.org/docs/Installing-Synapse-API-Clients.1985249668.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Synapse API Documentation Site
      </a>
      .
    </p>
  )

  return (
    <Modal
      className="bootstrap-4-backport ProgrammaticOptions"
      backdrop="static"
      animation={false}
      show={show}
      onHide={onClose}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {title}&nbsp;
          {helpMarkdown && (
            <HelpPopover markdownText={helpMarkdown} helpUrl={helpUrl} />
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Tabs">
          {cliCode && (
            <div
              className="Tab"
              role="tab"
              onClick={e => {
                e.stopPropagation()
                setCurrentTab(ProgrammaticOptionsTabs.COMMAND_LINE)
              }}
              aria-selected={
                ProgrammaticOptionsTabs.COMMAND_LINE === currentTab
              }
            >
              {ProgrammaticOptionsTabs.COMMAND_LINE}
            </div>
          )}
          {rCode && (
            <div
              className="Tab"
              role="tab"
              onClick={e => {
                e.stopPropagation()
                setCurrentTab(ProgrammaticOptionsTabs.R)
              }}
              aria-selected={ProgrammaticOptionsTabs.R === currentTab}
            >
              {ProgrammaticOptionsTabs.R}
            </div>
          )}
          {pythonCode && (
            <div
              className="Tab"
              role="tab"
              onClick={e => {
                e.stopPropagation()
                setCurrentTab(ProgrammaticOptionsTabs.PYTHON)
              }}
              aria-selected={ProgrammaticOptionsTabs.PYTHON === currentTab}
            >
              {ProgrammaticOptionsTabs.PYTHON}
            </div>
          )}
        </div>
        <div className="TabContent">
          {currentTab === ProgrammaticOptionsTabs.COMMAND_LINE && (
            <>
              <p>{cliNotes}</p>
              {installationInstructions}
              <pre> {cliCode} </pre>
            </>
          )}
          {currentTab === ProgrammaticOptionsTabs.R && (
            <>
              <p>{rNotes}</p>
              {installationInstructions}
              <pre>{rCode}</pre>
            </>
          )}
          {currentTab === ProgrammaticOptionsTabs.PYTHON && (
            <>
              <p>{pythonNotes}</p>
              {installationInstructions}
              <pre>{pythonCode}</pre>
            </>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProgrammaticInstructionsModal
