import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function ExploreLayout() {
  return (
    <ExploreWrapper
      explorePaths={[
        {
          path: 'GENIE',
        },
        {
          path: 'GENIE-BPC',
        },
        {
          path: 'Publications',
        },
        {
          path: 'Contributors',
        },
        {
          path: 'External Resources',
        },
      ]}
    />
  )
}

export default ExploreLayout
