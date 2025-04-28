import ChallengesCardDeck from '@/components/ChallengesCardDeck'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import StandardsHeader from '@sage-bionetworks/synapse-portal-framework/components/b2ai.standards/StandardsHeader'
import StandardsContributeToTheRegistry from '@sage-bionetworks/synapse-portal-framework/components/b2ai.standards/StandardsContributeToTheRegistry'
import TableQueryCardDeck from 'synapse-react-client/components/CardDeck/TableQueryCardDeck'
import { useGetEntity } from 'synapse-react-client/synapse-queries'
import {
  dataSql,
  DST_TABLE_COLUMN_NAMES,
  standardsChallengeTableId,
  dataSetTableId,
} from '../config/resources'
import { FeaturedDataTabs } from 'synapse-react-client'
import CTASectionWrapper from 'synapse-react-client/components/CTASectionWrapper/CTASectionWrapper'
import columnAliases from '../config/columnAliases'

/* kludgy but currently using hard-coded URLs for GC Explore links, like
http://localhost:3001/Explore?QueryWrapper0=%7B%22sql%22%3A%22%5Cn++++SELECT%5Cn++++++++concat%28%27%5B%27%2C+acronym%2C+%27%5D%28%2FExplore%2FStandard%2FDetailsPage%3Fid%3D%27%2C+id%2C+%27%29%27%29+as+acronym%2C%5Cn++++++++++++name%2C+category%2C+collections%2C+relevantOrgAcronyms+as+organizations%2C+isOpen%2C+registration+FROM+syn65676531%5Cn%22%2C%22limit%22%3A5%2C%22selectedFacets%22%3A%5B%7B%22concreteType%22%3A%22org.sagebionetworks.repo.model.table.FacetColumnValuesRequest%22%2C%22columnName%22%3A%22relevantOrgAcronyms%22%2C%22facetValues%22%3A%5B%22Functional+Genomics+Grand+Challenge%22%5D%7D%5D%7D
*/
export default function HomePage() {
  const gcData = useGetEntity(dataSetTableId)
  console.log(gcData)
  return (
    <>
      <StandardsHeader dataSql={dataSql} />
      <div>
        <h2 className="title center-title">
          Standards Related to Bridge2AI Challenges
        </h2>
      </div>
      <ChallengesCardDeck />
      <TableQueryCardDeck
        entityId={standardsChallengeTableId}
        titleColumnName={'title'}
        descriptionColumnName={'description'}
        ctaButtonTextColumnName={'buttonText'}
        ctaButtonURLColumnName={'buttonURL'}
        headerImageFileHandleColumnName={'headerImage'}
        cardDeckType="b2ai"
        linkConfig={{
          isMarkdown: false,
          overrideLinkURLColumnName: 'buttonURL',
          baseURL: 'Explore/',
          URLColumnName: '',
          matchColumnName: '',
        }}
      />
      {/* <SectionLayout ContainerProps={{ className: 'home-spacer' }}>
        <Goals entityId={'syn23518009'} />
      </SectionLayout> */}
      <CTASectionWrapper
        sx={{ padding: '0px 0px 60px' }}
        showBlobs={false}
        themeMode={'dark'}
        content={
          <SectionLayout title={'Contribute to the Registry'}>
            <StandardsContributeToTheRegistry />
          </SectionLayout>
        }
      />
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Exploring the Standards'}
          centerTitle
          ContainerProps={{ className: 'home-spacer' }}
        >
          <FeaturedDataTabs
            sql={dataSql}
            rgbIndex={3}
            configs={[
              {
                title: '',
                icon: 'chart2',
                explorePagePath: '/Explore',
                exploreObjectType: 'Standards',
                plotsConfig: {
                  sql: `${dataSql} where ${DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES} is not null`,
                  configs: [
                    {
                      facetsToPlot: [
                        'topic',
                        DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES,
                      ],
                      unitDescription: 'standard',
                      plotType: 'BAR',
                      columnAliases: columnAliases,
                    },
                  ],
                },
              },
            ]}
          />
        </SectionLayout>
      </div>
    </>
  )
}
