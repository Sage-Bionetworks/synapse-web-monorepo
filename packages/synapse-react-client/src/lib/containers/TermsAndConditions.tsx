import React, { useEffect, useState } from 'react'
import { tcItem } from './TermsAndConditionsItem'
import TermsAndConditionsItem from './TermsAndConditionsItem'
import { Button, Link } from '@mui/material'
import { ChatBubblesIcon } from '../assets/icons/terms/ChatBubblesIcon'
import { LockIcon } from '../assets/icons/terms/LockIcon'
import { ScaleIcon } from '../assets/icons/terms/ScaleIcon'
import { ShieldIcon } from '../assets/icons/terms/ShieldIcon'
import { PeopleIcon } from '../assets/icons/terms/PeopleIcon'
import { PenIcon } from '../assets/icons/terms/PenIcon'
import { SpeakerIcon } from '../assets/icons/terms/SpeakerIcon'
import { FlagIcon } from '../assets/icons/terms/FlagIcon'
import { URL_TERMS_CONDITIONS_AGREEMENT } from '../utils/SynapseConstants'

export type TermsAndConditionsProps = {
  onFormChange: (formComplete: boolean) => void
  hideLinkToFullTC?: boolean
}

const dataUseLink =
  'https://s3.amazonaws.com/static.synapse.org/governance/SynapseCommonsDataUseProcedure.pdf?v=4'

const tcList: tcItem[] = [
  {
    icon: <ChatBubblesIcon />,
    label:
      'I will adhere to the Synapse Community Standards of inclusion and respect.',
    description: `A participant in the Synapse Community: <ul>
    <li>Welcomes others</li>
    <li>Uses inclusive language</li>
    <li>Shares experiences and knowledge</li>
    <li>Respects other viewpoints and ideas</li>
    <li>Shows empathy and kindness when interacting with others</li>
    </ul>
Please refer to our full <a target="_blank" href="https://help.synapse.org/docs/Synapse-Governance.2004255211.html#SynapseGovernance-SynapseCodeofConduct">Synapse Code of Conduct</a>.`,
  },
  {
    icon: <LockIcon />,
    label:
      'I will adhere to all conditions and use limitations, including privacy laws and regulations.',
    description: `For more information about how Sage Bionetworks regulates data access and privacy, please refer to the 
    <a target="_blank" href=${dataUseLink}>Synapse Commons Data Use Procedure</a>.`,
  },
  {
    icon: <ScaleIcon />,
    label: 'I will act ethically and responsibly.',
    description: `You agree to the following Synapse Operating Ethics Principles, outlined in our 
    <a target="_blank" href=${URL_TERMS_CONDITIONS_AGREEMENT}>Terms and Conditions of Use</a>.
    <br><br>Consequences of misconduct can include loss of both data use privileges and future use of Synapse.`,
  },
  {
    icon: <ShieldIcon />,
    label:
      "I will use appropriate physical, technical and administrative measures to keep data secure and protect participants' privacy.",
    description: `In your use of Synapse, you agree to:<ul>
    <li>Keep your login information secure and not share with others.</li>
    <li>Keep data safe from breach or misuse through appropriate security measures.</li>
    <li>Not attempt to re-identify or contact participants.</li>
    <li>Refrain from unauthorized data redistribution. Please refer to the 
    <a target="_blank" href=${dataUseLink}>Synapse Commons Data Use Procedure</a>.</li>
    </ul>
    For more information, please refer to the full <a target="_blank" href=${URL_TERMS_CONDITIONS_AGREEMENT}>Synapse Terms and Conditions of Use</a>.`,
  },
  {
    icon: <PeopleIcon />,
    label: 'I will support open access best practices for public facing data.',
    description: `The Synapse open access platform promotes data accessibility and collaboration. We encourage you to 
    contribute your research findings to open access journals when applicable.<br><br>
    You agree to support open access best practices when possible (e.g., sharing code, metadata, annotating files for discovery).`,
  },
  {
    icon: <PenIcon />,
    label: 'I will credit research participants and all data sources.',
    description: `You agree to acknowledge data participants and to cite contributors and data sources using the language provided with the dataset.<br><br>
    It is our policy to terminate the access privileges of those who infringe the intellectual property rights of others. For more information, please refer to our full 
    <a target="_blank" href=${URL_TERMS_CONDITIONS_AGREEMENT}>Terms and Conditions of Use</a>.`,
  },
  {
    icon: <SpeakerIcon />,
    label: 'I will not use data for marketing and/or advertising.',
    description: `Data may not be used for marketing or advertising purposes. You agree not to upload or otherwise transmit 
    any unsolicited or unauthorized advertising, promotional materials, junk mail, spam, or any other form of solicitation (commercial or otherwise). <br><br>
    Please review the <a target="_blank" href="https://s3.amazonaws.com/static.synapse.org/governance/SynapsePrivacyPolicy.pdf?v=5">Synapse Privacy Policy</a> for Sage's commitment to privacy protections.`,
  },
  {
    icon: <FlagIcon />,
    label: `I will report any suspected data breach or misuse to privacyofficer@sagebase.org within 2 business days of initial incident knowledge.`,
    description: `Data misuse includes violating dataset access requirements, unauthorized use or 
    redistribution, lack of data accreditation, and unethical data handling.<br><br>
    For more information about what classifies as a violation of our data governance policies, please refer to our 
    <a target="_blank" href=${dataUseLink}>Data Use Procedure</a> and <a target="_blank" href=${URL_TERMS_CONDITIONS_AGREEMENT}>Terms and Conditions of Use</a>.`,
  },
]

const TermsAndConditions: React.FunctionComponent<TermsAndConditionsProps> = ({
  onFormChange,
  hideLinkToFullTC = false,
}) => {
  const checkboxCount = tcList.length
  const governancePolicy =
    'https://help.synapse.org/docs/Synapse-Governance.2004255211.html'
  const getInitialCheckboxState = () =>
    Array.from(Array(checkboxCount).fill(false))
  let mounted = true

  // State variables
  const [checkboxChecked, setCheckboxChecked] = useState<boolean[]>(
    getInitialCheckboxState(),
  )
  // disabled all checkbox except the first one
  const [checkboxEnabled, setCheckboxEnabled] = useState<boolean[]>(
    getInitialCheckboxState().fill(true, 0, 1),
  )

  useEffect(() => {
    if (mounted) {
      checkFormCompleted()
    }
    return () => {
      mounted = false
    }
  }, [checkboxEnabled, checkboxChecked])

  // Placeholder function to check if all checkboxes are checked and agreement is signed
  const checkFormCompleted = () => {
    const allCheckboxChecked = !checkboxChecked.includes(false)
    onFormChange(allCheckboxChecked)
  }

  const updateCheckboxState = (id: number) => {
    const newState = !checkboxChecked[id]
    if (newState) {
      // if the checkbox is checked (i.e. newState is true)
      setCheckboxChecked(getInitialCheckboxState().fill(true, 0, id + 1))
      if (id + 2 <= tcList.length) {
        setCheckboxEnabled(getInitialCheckboxState().fill(true, 0, id + 2))
      }
    } else {
      setCheckboxChecked(getInitialCheckboxState().fill(true, 0, id))
      setCheckboxEnabled(getInitialCheckboxState().fill(true, 0, id + 1))
    }
  }

  return (
    <section className="terms-conditions">
      <h3 className="page-header">Synapse Pledge</h3>
      <form>
        <label>
          I affirm my commitment to all{' '}
          <Link target="_blank" href={governancePolicy}>
            Sage Governance policies
          </Link>{' '}
          for responsible research and data handling (linked below), including:
        </label>
        <ul className="term-list">
          {tcList.length &&
            tcList.map((item, i) => {
              return (
                <li
                  key={`tc-item-${i}`}
                  className={checkboxEnabled[i] === true ? 'terms-enabled' : ''}
                >
                  <TermsAndConditionsItem
                    item={item}
                    id={i}
                    checked={checkboxChecked[i]}
                    enabled={checkboxEnabled[i]}
                    onChange={updateCheckboxState}
                  />
                </li>
              )
            })}
        </ul>
        {!hideLinkToFullTC && (
          <div className="view-terms">
            <Button
              variant={'contained'}
              href={URL_TERMS_CONDITIONS_AGREEMENT}
              target="_blank"
            >
              View Complete Terms and Conditions for Use
            </Button>
          </div>
        )}
      </form>
    </section>
  )
}

export default TermsAndConditions
