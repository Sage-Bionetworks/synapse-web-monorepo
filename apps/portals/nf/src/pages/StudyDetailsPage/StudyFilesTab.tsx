import { filesPlotNavProps } from '@/config/synapseConfigs/files'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { QueryWrapperPlotNav } from 'synapse-react-client'

function StudyFilesTab() {
  const { value: studyId } = useDetailsPageContext('studyId')
  if (studyId == null) {
    return null
  }
  return (
    <DetailsPageContent
      content={[
        {
          id: 'Study Files',
          title: 'Study Files',
          element: (
            <QueryWrapperPlotNav
              {...filesPlotNavProps}
              rgbIndex={8}
              shouldDeepLink={false}
              sqlOperator={ColumnSingleValueFilterOperator.LIKE}
              lockedColumn={{ columnName: 'studyId', value: studyId }}
              searchParams={{ studyId }}
              hideQueryCount
            />
          ),
        },
      ]}
    ></DetailsPageContent>
  )
}

export default StudyFilesTab
