import AdknowledgeCard from '@sage-bionetworks/synapse-portal-framework/components/adknowledge/AdknowledgeCard/AdknowledgeCard'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import MailchimpSubscribeSection from 'synapse-react-client/components/MailchimpSubscribeSection/MailchimpSubscribeSection'
import AdknowledgeHeader from '@sage-bionetworks/synapse-portal-framework/components/adknowledge/AdknowledgeHeader/AdknowledgeHeader'
import { WordPressNews } from 'synapse-react-client/components/SynapseHomepageV2/WordPressNews'
import FloatingBlobsBackground from 'synapse-react-client/components/SynapseHomepageV2/FloatingBlobsBackground'
import AdknowledgePrograms from '@sage-bionetworks/synapse-portal-framework/components/adknowledge/AdknowledgePrograms/AdknowledgePrograms'
import { programsSql } from '@/config/resources'
import { HomePageThemeProvider } from '@/themes/HomePageThemeProvider'
import { ReactComponent as CavaticaLogo } from '../assets/cavatica.svg'
import { ReactComponent as TerraLogo } from '../assets/terra.svg'
import { ReactComponent as ADDILogo } from '../assets/addi.svg'
import { ReactComponent as ContributeIcon } from '../assets/contribution.svg'
import { ReactComponent as AgoraIcon } from '../assets/agora.svg'
import { ReactComponent as ModelADIcon } from '../assets/modelAD.svg'
import styles from './HomePageV2.module.scss'

function HomePageInternal() {
  const agoraCard = {
    Image: AgoraIcon,
    description:
      "Explore our vast collection of Alzheimer's disease data, tools, and resources to accelerate your research and drive new discoveries.",
    buttonText: 'Explore Agora',
    buttonLink: 'https://agora.adknowledgeportal.org',
  }

  const modelADCard = {
    Image: ModelADIcon,
    description:
      "Explore our vast collection of Alzheimer's disease data, tools, and resources to accelerate your research and drive new discoveries.",
    buttonText: 'Explore MODEL-AD',
    buttonLink: 'https://www.model-ad.org',
  }

  const contributeCard = {
    title: 'Participate in the Community Data Contribution Program',
    description:
      "The AD Community Contribution program welcomes researchers, citizen scientists, and data enthusiasts to share their unique findings, datasets, and analytical tools, fostering a collaborative environment to accelerate discoveries in Alzheimer's research.",
    buttonText: 'Contribute Data as a Community Member',
    buttonLink:
      'https://sagebionetworks.jira.com/servicedesk/customer/portal/12/group/34/create/829',
    Image: ContributeIcon,
  }

  return (
    <div className="HomePageV2">
      <AdknowledgeHeader />
      <SectionLayout
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <AdknowledgeCard {...contributeCard} />
      </SectionLayout>
      <SectionLayout
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <MailchimpSubscribeSection
          headline="Stay informed about the latest AD/ADRD research"
          description="Subscribe to receive the AD Knowledge Portal monthly newsletter by e-mail, which provides information and updates related to the Portal. You can opt out at any time by using the unsubscribe link within the e-mail. We will not share your information with any third parties or use it for any other purposes."
          mailchimpUrl="https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&id=96b614587a"
        />
      </SectionLayout>
      <SectionLayout
        title="Programs"
        subtitle="These initiatives accelerate breakthroughs by producing, curating, and providing access to extensive datasets and resources relevant to AD/ADRD. Delve into program-specific data to drive forward your own research."
        centerTitle
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <AdknowledgePrograms sql={`${programsSql} ORDER BY Program ASC`} />
      </SectionLayout>
      <SectionLayout
        ContainerProps={{
          className: 'home-spacer',
        }}
        title="Data Analysis Platform Integrations"
        subtitle="Analyze your data in a trusted research environment, integrated with the knowledge portal ecosystem."
        centerTitle
      >
        <div className={styles.dataAnalysisIntegrationsLogoContainer}>
          <a
            href="https://www.alzheimersdata.org/"
            target="_blank"
            rel="noreferrer"
          >
            <ADDILogo />
          </a>
          <a href="https://www.cavatica.org/" target="_blank" rel="noreferrer">
            <CavaticaLogo />
          </a>
          <a href="https://terra.bio/" target="_blank" rel="noreferrer">
            <TerraLogo />
          </a>
        </div>
      </SectionLayout>
      <SectionLayout
        title={'News Releases'}
        centerTitle={true}
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <div style={{ position: 'relative', minHeight: '500px' }}>
          <FloatingBlobsBackground color1="#dcc9e4" color2="#cdc8dd" />
          <WordPressNews wordpressSiteUrl="https://news.adknowledgeportal.org" />
        </div>
      </SectionLayout>
      <SectionLayout title="Results Explorers" centerTitle>
        <div className={styles.resultsExplorersContainer}>
          <AdknowledgeCard {...agoraCard} />
          <AdknowledgeCard {...modelADCard} />
        </div>
      </SectionLayout>
    </div>
  )
}

function HomePageV2() {
  return (
    <HomePageThemeProvider>
      <HomePageInternal />
    </HomePageThemeProvider>
  )
}

export default HomePageV2
