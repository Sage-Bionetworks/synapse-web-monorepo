import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function ExploreLayout() {
  return (
    <ExploreWrapper
      explorePaths={[
        {
          path: 'Programs',
        },
        {
          path: 'Projects',
        },
        {
          path: 'Collections',
        },
        {
          path: 'Datasets',
        },
        {
          path: 'All Data',
        },
      ]}
    />
  )
}

export default ExploreLayout
