import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { mc2SupplementSql } from '@/config/resources'
import StandaloneQueryWrapper from 'synapse-react-client/components/StandaloneQueryWrapper'

const rgbIndex = 8

function MC2Supplement() {
  return (
    <SectionLayout title={'MC2 Digital Pathology QC Supplement'}>
      <StandaloneQueryWrapper
        rgbIndex={rgbIndex}
        hideDownload={false}
        sql={mc2SupplementSql}
        showTopLevelControls={true}
        columnLinks={[
          {
            matchColumnName: 'fuse_mask',
            isEntityImage: true,
          },
          {
            matchColumnName: 'thumb',
            isEntityImage: true,
          },
        ]}
      />
    </SectionLayout>
  )
}

export default MC2Supplement
