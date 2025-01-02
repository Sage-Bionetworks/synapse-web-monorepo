import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { StandaloneQueryWrapper } from 'synapse-react-client'
import { mc2SupplementSql } from '../resources'

const rgbIndex = 8

export function MC2Supplement() {
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
