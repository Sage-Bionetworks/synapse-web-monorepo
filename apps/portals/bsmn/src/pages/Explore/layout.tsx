import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function ExploreLayout() {
  return (
    <ExploreWrapper
      explorePaths={[
        {
          path: 'Projects',
        },
        {
          path: 'Data',
        },
        {
          path: 'Tools',
        },
        {
          path: 'People',
        },
        {
          path: 'Publications',
        },
      ]}
    />
  )
}

export default ExploreLayout
