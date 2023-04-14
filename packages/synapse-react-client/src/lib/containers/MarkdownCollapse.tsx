import React, { useState } from 'react'
import { Collapse, SafeAnchor } from 'react-bootstrap'
import IconMinus from '../assets/icons/IconMinus'
import IconPlus from '../assets/icons/IconPlus'
import IconCopy from '../assets/icons/IconCopy'
import MarkdownSynapse, {
  MarkdownSynapseProps,
} from './markdown/MarkdownSynapse'
import { displayToast } from './ToastMessage'

export type MarkdownCollapseProps = {
  // The text that should be shown.  If not given, will default to "full text"
  textDescription?: string
  showCopyPlainText?: boolean
} & MarkdownSynapseProps

/**
 * Wraps a MarkdownSynapse in a Collapse area, with customizable text description.
 * Will pass down all properties to the MarkdownSynapse component, so this can be used in
 * the portal detail pages.
 * @param props
 */
const MarkdownCollapse = (props: MarkdownCollapseProps) => {
  const [show, setShow] = useState(false)
  const [wordCount, setWordCount] = useState<number>()
  const [plainText, setPlainText] = useState<string>()

  const onMarkdownProcessingDone = (ref: HTMLInputElement | null) => {
    const textContent = ref?.textContent
    if (textContent) {
      setPlainText(textContent.trim())
      setWordCount(textContent.trim().split(/\s+/).length)
    }
  }

  const { textDescription = 'full text', showCopyPlainText } = props
  return (
    <div className="MarkdownCollapse bootstrap-4-backport">
      <p>
        {show ? <IconMinus /> : <IconPlus />}
        <SafeAnchor
          className="highlight-link"
          onClick={() => setShow(!show)}
          aria-controls="collapse-text"
          aria-expanded={show}
        >
          {show ? 'Hide' : 'View'} {textDescription}{' '}
          {wordCount ? `(${wordCount} words)` : ''}
        </SafeAnchor>
      </p>
      {showCopyPlainText && (
        <p>
          <IconCopy className="primary" />
          <SafeAnchor
            className="highlight-link"
            onClick={() => {
              if (plainText) {
                navigator.clipboard
                  .writeText(plainText)
                  .then(() => {
                    displayToast('Successfully copied to the clipboard')
                  })
                  .catch(err => {
                    console.error(err)
                  })
              }
            }}
          >
            Copy {textDescription} to clipboard
          </SafeAnchor>
        </p>
      )}
      <Collapse in={show}>
        <div id="collapse-text">
          <MarkdownSynapse
            onMarkdownProcessingDone={onMarkdownProcessingDone}
            {...props}
          />
        </div>
      </Collapse>
    </div>
  )
}

export default MarkdownCollapse
