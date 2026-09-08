import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function ExploreLayout() {
  return (
    <ExploreWrapper
      explorePaths={[
        {
          path: 'Studies',
        },
        {
          path: 'Publications',
        },
        {
          path: 'Metadata',
        },
      ]}
    />
  )
}

export default ExploreLayout
