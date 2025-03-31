import { useOneSageURL } from '@/utils/hooks'
import { SAGE_OFFERINGS_HELP_URL } from '@/utils/SynapseConstants'
import { Box } from '@mui/material'
import { SynapsePlan } from './SynapsePlan'
import { SynapsePlanContent } from './SynapsePlanContent'

export function SynapsePlans() {
  const registrationUrl = useOneSageURL('/register1')
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
      }}
    >
      <SynapsePlan
        title="Free"
        description="Our basic plan"
        ctaText="Register Now"
        ctaLink={registrationUrl.toString()}
        backgroundColor="#f5f9f9"
      >
        <SynapsePlanContent
          category="Explore Data"
          items={['<100 GB of content', 'Sage Managed Individual Storage']}
        />
        <SynapsePlanContent
          category="Free Synapse Features"
          items={[
            'DOIs for publications & grants*',
            'Online documentation & tutorials*',
            'Project wikis*',
            'Discussion forums*',
          ]}
          asteriskNote="*Items are included in all plans"
        />
      </SynapsePlan>
      <SynapsePlan
        title="Self-Managed Plan"
        description="Our upgraded plan"
        ctaText="Find out more"
        ctaLink={SAGE_OFFERINGS_HELP_URL}
        backgroundColor="#e9f2f1"
      >
        <SynapsePlanContent
          category="Explore More Data"
          items={['<500 GB of content', 'Secure cloud storage']}
        />
        <SynapsePlanContent
          category="More Synapse Features"
          items={[
            'Project assistance',
            'Governance consulting',
            'NIH Data Management Sharing Plan Support',
            'Help Desk Support',
            'Sharing Content Through Controlled Access',
          ]}
        />
      </SynapsePlan>
      <SynapsePlan
        title="Data Coordination"
        description="Our customized plan"
        ctaText="Contact Us"
        ctaLink="https://sagebionetworks.jira.com/servicedesk/customer/portal/9/group/26/create/162"
        backgroundColor="secondary.100"
      >
        <SynapsePlanContent
          category="Explore the Most Data"
          items={[
            'Unlimited data allowance',
            'Custom data storage locations',
            'Fully managed project set up, access and documentation',
            'Tailor-made portal interface',
            'Data integration with existing tools and workflows',
            'Customized governance support',
            'Dedicated Sage Bionetworks point of contact',
            'Unlimited end-to-end support',
          ]}
        />
      </SynapsePlan>
    </Box>
  )
}
