import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function ExploreLayout() {
  return (
    <ExploreWrapper
      explorePaths={[
        {
          path: 'Collections',
        },
        {
          path: 'Data',
        },
        {
          path: 'Tools',
        },
        {
          path: 'Publications',
        },
      ]}
    />
  )
}

export default ExploreLayout
