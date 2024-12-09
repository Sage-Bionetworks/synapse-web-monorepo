import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { metadataFilesSql } from 'src/config/resources'
import { StandaloneQueryWrapper } from 'synapse-react-client'

export default function StudyAdditionalFilesTab() {
  const { value: studyId } = useDetailsPageContext('studyId')
  if (studyId == null) {
    return null
  }
  return (
    <DetailsPageContent
      content={[
        {
          id: 'Additional Files',
          title: 'Additional Files',
          element: (
            <div className="metadata-table">
              <StandaloneQueryWrapper
                visibleColumnCount={7}
                sql={metadataFilesSql}
                rgbIndex={5}
                hideAddToDownloadListColumn={false}
                showDownloadColumn={true}
                fileIdColumnName="id"
                fileNameColumnName="name"
                fileVersionColumnName="currentVersion"
                searchParams={{ studyId }}
                hideQueryCount
              />
            </div>
          ),
        },
      ]}
    ></DetailsPageContent>
  )
}
