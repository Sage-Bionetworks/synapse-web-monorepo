import ImageCardGridWithLinks from 'synapse-react-client/components/ImageCardGridWithLinks/ImageCardGridWithLinks'
import DemoPortalHeader from '@/components/DemoPortalHeader'
import { whatWeDoSql } from '@/config/resources'
import headerSvg from '@/config/style/header.svg?url'

export default function HomePage() {
  return (
    <>
      <DemoPortalHeader headerImageURL={headerSvg} />
      <ImageCardGridWithLinks
        sql={whatWeDoSql}
        title="What We Do"
        summaryText="The Demo Portal provides rich datasets, tools, publications, and resources that empower researchers to make new discoveries."
        columnCount={3}
        heightPx={245}
      />
    </>
  )
}
