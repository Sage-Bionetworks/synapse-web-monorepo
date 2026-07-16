import AdknowledgeCard from '@sage-bionetworks/synapse-portal-framework/components/adknowledge/AdknowledgeCard/AdknowledgeCard'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import MailchimpSubscribeSection from 'synapse-react-client/components/MailchimpSubscribeSection/MailchimpSubscribeSection'
import DataExplorer from 'synapse-react-client/components/DataExplorer/DataExplorer'
import AdknowledgeHeader from '@sage-bionetworks/synapse-portal-framework/components/adknowledge/AdknowledgeHeader/AdknowledgeHeader'
import { WordPressNews } from 'synapse-react-client/components/SynapseHomepageV2/WordPressNews'
import FloatingBlobsBackground from 'synapse-react-client/components/SynapseHomepageV2/FloatingBlobsBackground'
import AdknowledgePrograms from '@sage-bionetworks/synapse-portal-framework/components/adknowledge/AdknowledgePrograms/AdknowledgePrograms'
import AdknowledgePlatformIntegrations from '@sage-bionetworks/synapse-portal-framework/components/adknowledge/AdknowledgePlatformIntegrations/AdknowledgePlatformIntegrations'
import {
  consortiaAndRepositoriesSql,
  dataTypeSql,
  exploreQuerySql,
  programsSql,
} from '@/config/resources'
import { HomePageThemeProvider } from '@/themes/HomePageThemeProvider'
import { ReactComponent as ContributeIcon } from '../assets/contribution.svg'
import { ReactComponent as AgoraIcon } from '../assets/agora.svg'
import { ReactComponent as ModelADIcon } from '../assets/modelAD.svg'
import styles from './HomePageV2.module.scss'
import { CardContainerLogic } from 'synapse-react-client'
import { consortiaAndRepositoriesCardConfig } from '@/config/synapseConfigs/consortiaAndRepositories'
import { Button } from '@mui/material'

const FILTER_COLUMN_NAME = 'DataType_All'

function HomePageInternal() {
  const agoraCard = {
    Image: AgoraIcon,
    description:
      'Explore nominated drug targets and high-dimensional human transcriptomic, proteomic, and metabolomic evidence for whether or not genes are associated with Alzheimer’s Disease (AD).',
    buttonLink: 'https://agora.adknowledgeportal.org',
  }

  const modelADCard = {
    Image: ModelADIcon,
    description:
      "Explore next-generation mouse models of Alzheimer's Disease (AD) generated, characterized, and validated by the MODEL-AD consortium.",
    buttonLink: 'https://modeladexplorer.org',
  }

  const contributeCard = {
    title: 'Participate in the Community Data Contribution Program',
    description:
      "Through the AD Community Data Contribution Program (CDCP), our team at Sage Bionetworks can provide the infrastructure, governance, and curation services necessary to make your data truly FAIR within the AD Knowledge Portal. Contribute your unique findings, datasets, and computational tools to accelerate discoveries in Alzheimer's research!",
    buttonText: 'Learn More',
    buttonLink: '/Contribute',
    Image: ContributeIcon,
  }

  const dataExplorerTextSection = {
    sql: dataTypeSql,
    facetSql: exploreQuerySql,
    title: 'More than a petabyte of multiomic data...',
    buttonText: 'Explore Alzheimer’s Data',
    buttonLink: '/Explore/Data',
    subtitle:
      "Our data encompasses a wide range of modalities, ensuring comprehensive coverage for in-depth Alzheimer's research and discovery.",
    explorePath: '/Explore/Studies',
    exploreQuerySql,
    filterColumnName: FILTER_COLUMN_NAME,
  }

  const helpButtons = [
    {
      text: 'Service Desk',
      link: 'https://sagebionetworks.jira.com/servicedesk/customer/portal/12',
    },
    {
      text: 'Discussion Forum',
      link: 'https://www.synapse.org/Synapse:syn2580853/discussion/default',
    },
  ]

  return (
    <div className="HomePageV2">
      <AdknowledgeHeader />
      <SectionLayout
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <DataExplorer {...dataExplorerTextSection} />
      </SectionLayout>

      <SectionLayout
        ContainerProps={{
          sx: { marginBottom: '80px' },
        }}
      >
        <AdknowledgeCard {...contributeCard} />
      </SectionLayout>
      <SectionLayout
        ContainerProps={{
          sx: { marginBottom: '90px' },
        }}
      >
        <MailchimpSubscribeSection
          headlineSx={{ color: 'var(--adkp-accent-color)' }}
          background="linear-gradient(94deg, rgba(112, 110, 212, 0.04) 30.53%, rgba(198, 134, 230, 0.04) 76.86%)"
          headline="Stay informed about the latest AD/ADRD research"
          description="Subscribe to receive the AD Knowledge Portal monthly newsletter by e-mail, which provides information and updates related to the Portal. You can opt out at any time by using the unsubscribe link within the e-mail. We will not share your information with any third parties or use it for any other purposes."
          mailchimpUrl="https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&id=96b614587a"
        />
      </SectionLayout>
      <SectionLayout
        title="Programs"
        subtitle="The AD Knowledge Portal is your gateway to extensive datasets and resources from NIA-supported Alzheimer's disease and related dementia programs. Dive into program-specific data to accelerate your research."
        centerTitle
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <AdknowledgePrograms sql={`${programsSql} ORDER BY Program ASC`} />
      </SectionLayout>
      <SectionLayout
        ContainerProps={{
          sx: { marginBottom: '240px' },
        }}
        title="Data Analysis Platform Integrations"
        subtitle="Analyze your data in a trusted research environment, integrated with the knowledge portal ecosystem."
        centerTitle
      >
        <AdknowledgePlatformIntegrations />
      </SectionLayout>
      <SectionLayout
        title={'New Releases'}
        centerTitle={true}
        ContainerProps={{
          sx: { marginBottom: '90px' },
        }}
        subtitle="Explore monthly data and feature releases. Click on a release to learn what's new!"
      >
        <div className={styles.newsSection}>
          <FloatingBlobsBackground color1="#dcc9e4" color2="#cdc8dd" />
          <WordPressNews
            wordpressSiteUrl="https://news.adknowledgeportal.org"
            showCategoryChips={false}
            showDescription={true}
            variant="adkp"
            postCount={6}
          />
        </div>
      </SectionLayout>
      <SectionLayout
        title="Results Explorers"
        subtitle="These explorers provide interactive tools and visualizations to navigate complex datasets, identify key trends, and gain deeper insights into the data on our portal."
        centerTitle
        ContainerProps={{
          sx: { marginBottom: '130px' },
        }}
      >
        <div className={styles.resultsExplorersContainer}>
          <AdknowledgeCard {...modelADCard} />
          <AdknowledgeCard {...agoraCard} />
        </div>
      </SectionLayout>
      <SectionLayout
        title="Related Consortia and Repositories"
        subtitle="Grounded in truly open science and radical collaboration, the AD Knowledge Portal bridges data silos by integrating with a broad network of consortia and repositories. Each contributes unique data and expertise needed to drive discovery in Alzheimer's Disease research."
        centerTitle
        ContainerProps={{
          sx: { marginBottom: '140px' },
        }}
      >
        <div className={styles.consortiaAndRepositoriesCards}>
          <CardContainerLogic
            cardConfiguration={consortiaAndRepositoriesCardConfig}
            sql={consortiaAndRepositoriesSql}
          />
        </div>
      </SectionLayout>
      <SectionLayout
        title="Questions or Feedback?"
        subtitle="Have questions or feedback to share with us? Contact the team behind the AD Knowledge Portal through our Service Desk, or post your question in the public Discussion Forum where our community can learn together."
        centerTitle
      >
        <div className={styles.helpButtonsContainer}>
          {helpButtons.map(({ text, link }) => (
            <Button
              key={text}
              href={link}
              variant="contained"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text}
            </Button>
          ))}
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
