import React from 'react'
import { ReactComponent as SageLogo } from './assets/sage-logo.svg'
import { ReactComponent as NCI } from './assets/nci.svg'
import { ReactComponent as NIH } from './assets/nih.svg'
import { SynapseConstants } from 'synapse-react-client'

const DevelopedBySage = () => {
  return (
    <div className="developed-by-sage" style={{ textAlign: 'center' }}>
      <p>
        This Portal was developed by
        <a
          className="SRC-primary-text-color SRC-boldText"
          href="https://sagebionetworks.org/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Sage Bionetworks&nbsp;
        </a>
        and is part of the
        <a
          className="SRC-primary-text-color SRC-boldText"
          href="https://sagebionetworks.org/platform/synapse"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Sage Platform.&nbsp;
        </a>
      </p>
      <p>
        Use of this Portal is governed by the
        <a
          className="SRC-primary-text-color SRC-boldText"
          href={SynapseConstants.URL_TERMS_CONDITIONS_AGREEMENT}
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Terms and Conditions
        </a>
        .
      </p>
      <p>
        Research and Portal development was supported by the NCI at the NIH
        (U24CA209923, U24CA274494)
      </p>
      <p className="logos">
        <a href="https://www.nih.gov/" target="_blank" rel="noreferrer">
          <NIH id="nih-logo" />
        </a>
        <a
          href="https://sagebionetworks.org/platform/synapse"
          target="_blank"
          rel="noreferrer"
        >
          <SageLogo id="sage-logo" />
        </a>
        <a href="https://www.cancer.gov/" target="_blank" rel="noreferrer">
          <NCI id="nci-logo" />
        </a>
      </p>
    </div>
  )
}

export default DevelopedBySage
