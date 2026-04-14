import NamshubHeader from '@sage-bionetworks/synapse-portal-framework/components/namshub/NamshubHeader'
import NamshubAbout from '@sage-bionetworks/synapse-portal-framework/components/namshub/NamshubAbout'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { RssFeedCards } from 'synapse-react-client'
import styles from './Homepage.module.scss'

export default function Homepage() {
  return (
    <>
      <NamshubHeader />
      <NamshubAbout />
      <div className={styles.eventSection}>
        <SectionLayout title="Events" centerTitle>
          <RssFeedCards
            url="https://nhdcc.wpenginepowered.com"
            itemsToShow={2}
            allowCategories={[]}
            viewAllNewsButtonText="View All Events"
          />
        </SectionLayout>
      </div>
    </>
  )
}
