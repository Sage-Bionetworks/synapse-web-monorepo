import { dataReleasesSql } from '@/config/resources'
import { currentDataReleasesProps } from '@/config/synapseConfigs/dataReleases'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic/index'
import TextToComponentCollapse from 'synapse-react-client/components/TextToComponentCollapse'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import StandaloneQueryWrapper from 'synapse-react-client/components/StandaloneQueryWrapper/index'

function DataReleases() {
  return (
    <>
      <SectionLayout title={'Current Data Releases'}>
        <CardContainerLogic {...currentDataReleasesProps} />
      </SectionLayout>
      <SectionLayout title={'Previous Data Release'}>
        <Markdown
          markdown={
            'The **latest** version of the dataset is readily acccessible for free download, but access to **previous** versions must be requested.'
          }
        />
        <TextToComponentCollapse text={'View All Data Releases'}>
          <StandaloneQueryWrapper
            sql={dataReleasesSql}
            visibleColumnCount={7}
          />
        </TextToComponentCollapse>
      </SectionLayout>
    </>
  )
}

export default DataReleases
