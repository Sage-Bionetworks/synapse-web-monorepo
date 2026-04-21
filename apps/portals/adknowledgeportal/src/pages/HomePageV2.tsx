import AdknowledgeContributeCard from '@sage-bionetworks/synapse-portal-framework/components/adknowledge/AdknowledgeContributeCard/AdknowledgeContributeCard'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import MailchimpSubscribeSection from 'synapse-react-client/components/MailchimpSubscribeSection/MailchimpSubscribeSection'
import AdknowledgeHeader from '@sage-bionetworks/synapse-portal-framework/components/adknowledge/AdknowledgeHeader/AdknowledgeHeader'
import { WordPressNews } from 'synapse-react-client/components/SynapseHomepageV2/WordPressNews'
import FloatingBlobsBackground from 'synapse-react-client/components/SynapseHomepageV2/FloatingBlobsBackground'
import AdknowledgePrograms from '@sage-bionetworks/synapse-portal-framework/components/adknowledge/AdknowledgePrograms/AdknowledgePrograms'
import { programsSql } from '@/config/resources'

function HomePageV2() {
  return (
    <div className="HomePageV2">
      <AdknowledgeHeader />
      <SectionLayout
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <AdknowledgeContributeCard />
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
      <AdknowledgePrograms sql={`${programsSql} ORDER BY Program ASC`} />
      <SectionLayout
        title={'News Releases'}
        centerTitle={true}
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <div style={{ position: 'relative', minHeight: '500px' }}>
          <FloatingBlobsBackground stopColor1="#3A5AA8" stopColor2="#6B5FD9" />
          <WordPressNews wordpressSiteUrl="https://news.adknowledgeportal.org" />
        </div>
      </SectionLayout>
    </div>
  )
}

export default HomePageV2
