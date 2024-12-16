import { Box } from '@mui/material'
import { SynapseFeatureItem } from './SynapseFeatureItem'
import { ReactComponent as SeamlessIntegration } from '../../assets/homepage/seamless-integration-feature.svg'
import { ReactComponent as ResearchCredit } from '../../assets/homepage/research-credit-feature.svg'
import { ReactComponent as PrecisionGovernance } from '../../assets/homepage/precision-governance-feature.svg'
import { ReactComponent as PoweredBySynapse } from '../../assets/homepage/powered-by-synapse-feature.svg'
import { ReactComponent as Python } from '../../assets/homepage/python.svg'
import { ReactComponent as R } from '../../assets/homepage/r.svg'
import { ReactComponent as Fisma } from '../../assets/homepage/fisma.svg'
import { ReactComponent as Hipaa } from '../../assets/homepage/hipaa-compliant.svg'
import { useOneSageURL } from '../../utils/hooks'

export function SynapseFeatures() {
  const sageResourcesUrl = useOneSageURL('/sageresources')
  return (
    <Box sx={{ position: 'relative' }}>
      <SynapseFeatureItem
        title="Access or query data"
        image={<SeamlessIntegration />}
        subtitle="Seamless Integrations"
        description="Synapse provides you with APIs to access or query data from your web browser, or programmatically via R, Python, and the command line."
        icons={[<Python key="pythonIcon" />, <R key="rIcon" />]}
        featureName="integrations"
        link="https://help.synapse.org/docs/API-Clients-and-Documentation.1985446128.html"
      />
      <SynapseFeatureItem
        title="Display your provenance"
        image={<ResearchCredit key="researchCreditIcon" />}
        subtitle="Research Credit"
        description="Synapse records and displays the provenance of your analysis at every step. Analyses, data and code can all be referenced through DOIs (Digital Object Identifiers)."
        featureName="provenance"
        link="https://help.synapse.org/docs/Provenance.1972470373.html"
      />
      <SynapseFeatureItem
        title="Safeguard data"
        image={<PrecisionGovernance key="precisionGovernanceIcon" />}
        subtitle="Precision Governance"
        description="Ethical openness is our top priority. Sensitive data is protected through a comprehensive system of access controls, regular audits, and privacy-enhancing technologies. Protect the data, protect the patient."
        icons={[<Fisma key="fismaIcon" />, <Hipaa key="hipaaIcon" />]}
        featureName="governance"
        link="https://help.synapse.org/docs/Synapse-Governance.2004255211.html"
      />
      <SynapseFeatureItem
        title="Accelerate biomedical progress"
        image={<PoweredBySynapse key="poweredBySynapseIcon" />}
        subtitle="Powered by Synapse"
        description="Synapse portals are the front door to innovation. Vibrant research communities exchange data, tools and ideas to accelerate biomedical progress."
        featureName="our portals"
        link={sageResourcesUrl.toString()}
      />
    </Box>
  )
}
