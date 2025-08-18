import { FeaturedToolsList } from 'synapse-react-client/components/FeaturedToolsList'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { WideButton } from 'synapse-react-client/components/styled/WideButton'
import Layout from '../Layout'
import { Box, Link, Typography } from '@mui/material'
import { Query, TextMatchesQueryFilter } from '@sage-bionetworks/synapse-types'
// import PopularSearches from '../PopularSearches'
import pluralize from 'pluralize'
import EcosystemLayout from 'synapse-react-client/components/Ecosystem/EcosystemLayout'
import Search from '../Search'

type Category = {
  resourceName: string
}

const categories: Category[] = [
  { resourceName: 'Cell Lines' },
  { resourceName: 'Gene Targets' },
  { resourceName: 'Biomarkers' },
  { resourceName: 'Chemoinformatics' },
]

export type ELBrowseToolsPageProps = {
  popularSearchesSql: string
  toolsSql: string
}

const ELBrowseToolsPage = (props: ELBrowseToolsPageProps) => {
  const { toolsSql } = props
  // const { popularSearchesSql } = props
  const gotoExploreTools = () => {
    window.location.assign('/Explore/Computational%20Tools')
  }

  const gotoExploreToolsWithSelectedResource = (selectedResource: string) => {
    const query: Query = {
      sql: toolsSql,
      selectedFacets: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'resourceType',
          facetValues: [selectedResource],
        },
      ],
    }
    window.location.assign(
      `/Explore/Computational%20Tools?QueryWrapper0=${JSON.stringify(query)}`,
    )
  }

  const gotoExploreToolsWithFullTextSearch = (fullTextSearchString: string) => {
    const filter: TextMatchesQueryFilter = {
      concreteType:
        'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
      searchExpression: fullTextSearchString,
    }
    const query: Query = {
      sql: toolsSql,
      additionalFilters: [filter],
    }
    window.location.assign(
      `/Explore/Computational%20Tools?QueryWrapper0=${JSON.stringify(query)}`,
    )
  }

  const wideButtonSx = { marginTop: '50px' }

  return (
    <div className="browse-tools-page">
      <div className="header">
        <div className="home-container-description">
          <Typography variant="headline1" className="sectionTitle">
            EL Translational Research Tools
          </Typography>
          <div
            className="center-content"
            style={{ marginLeft: '10px', marginRight: '10px' }}
          >
            <div className="description">
              <Typography variant="body1">
                Exceptional Longevity (EL) Translational Research Tools aims to
                support the translation of multidimensional biological data from
                human longevity studies into potential therapeutic targets for
                healthy aging. The database includes EL-associated cell lines
                and chemoinformatics tools, including details on tool
                characteristics and sourcing.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Layout outsideContainerClassName="home-spacer">
        <Typography variant="sectionTitle" className="sectionTitle">
          Browse Tools by Category
        </Typography>
        <Typography variant="body1" className="sectionSubtitle">
          Drill-down to explore specific types of EL translational research
          tools
        </Typography>
        <Box
          sx={{
            color: 'white',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'stretch',
          }}
        >
          {categories.map(category => {
            return (
              <Box
                key={category.resourceName}
                sx={{
                  backgroundColor: '#1d594e',
                  width: '200px',
                  textAlign: 'center',
                }}
              >
                <button
                  onClick={() =>
                    gotoExploreToolsWithSelectedResource(category.resourceName)
                  }
                >
                  <Typography
                    variant="headline3"
                    sx={{ py: '30px', px: '10px' }}
                  >
                    {pluralize(category.resourceName)}
                  </Typography>
                </button>
              </Box>
            )
          })}
        </Box>
        <div className="center-content">
          <WideButton
            sx={wideButtonSx}
            variant="contained"
            onClick={() => gotoExploreTools()}
          >
            View All Tools
          </WideButton>
        </div>
      </Layout>
      <div className="home-container-description  home-bg-dark home-spacer">
        <Typography
          variant="sectionTitle"
          sx={{
            textAlign: 'center',
            paddingTop: '50px',
            paddingBottom: '15px',
          }}
        >
          What Tools Can We Help You Find?
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', paddingBottom: '15px' }}
        >
          For the greatest success with your search, ensure your spelling is
          correct and avoid pluralization or suffixes.
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', paddingBottom: '40px' }}
        >
          <Link
            href="https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"
            target="_blank"
          >
            Learn More About MySQL Full Text Search
          </Link>
        </Typography>
        <Search onSearch={gotoExploreToolsWithFullTextSearch} />
        {/* <Typography variant="sectionTitle" className="sectionTitle">
          Suggested Searches
        </Typography>
        <div className="center-content">
          <PopularSearches
            sql={popularSearchesSql}
            onGoToExploreToolsWithFullTextSearch={searchTerm =>
              gotoExploreToolsWithFullTextSearch(searchTerm)
            }
          />
        </div> */}
      </div>

      <Layout outsideContainerClassName="home-spacer">
        <Typography variant="sectionTitle" className="sectionTitle">
          Recently Added Computational Tools
        </Typography>
        <Typography variant="body1" className="sectionSubtitle">
          Check out some recently-catalogued research resources below.
        </Typography>
        <div className="center-content">
          <FeaturedToolsList
            entityId={'syn51469335'}
            idColumnName={'id'}
            nameColumnName={'name'}
            descriptionColumnName={'summary'}
            typeColumnName={'softwareType'}
            toolURLColumnName={'url'}
            filterClause={'WHERE "isFeatured" = \'true\''}
          />
        </div>
        <div className="center-content">
          <WideButton
            sx={wideButtonSx}
            variant="contained"
            onClick={() => gotoExploreTools()}
          >
            View All Tools
          </WideButton>
        </div>
      </Layout>
      <Layout outsideContainerClassName="home-container-description  home-bg-dark home-spacer">
        <Typography variant="sectionTitle" className="sectionTitle">
          Announcements
        </Typography>
        <EcosystemLayout
          config={[
            {
              title: 'EL-specific iPSC Library',
              content: <Markdown ownerId={'syn27229419'} wikiId={'629574'} />,
            },
            {
              title: 'NCATS Biomedical Data Translator',
              content: <Markdown ownerId={'syn27229419'} wikiId={'629762'} />,
            },
          ]}
        />
      </Layout>
      <Box
        sx={{
          backgroundColor: '#1d594e',
          color: 'white',
          p: '50px 0px 100px 0px;',
        }}
      >
        <Layout outsideContainerClassName="home-spacer">
          <Typography variant="sectionTitle" className="sectionTitle">
            Submit a Tool to EL Translational Research Tools
          </Typography>
          <div className="center-content">
            <div className="description">
              <Typography variant="body1">
                We are currently accepting submissions that describe any
                EL-related cell line, gene target validation, biomarker, or
                biobank. If you have a tool that you would like to add to EL
                Translational Research Tools, please click the button below.
              </Typography>
            </div>
          </div>
          <div className="center-content">
            <WideButton
              sx={wideButtonSx}
              href="https://sagebionetworks.jira.com/servicedesk/customer/portal/12"
              className="highlightSubmitToolButton"
              variant="contained"
            >
              Submit A Tool
            </WideButton>
          </div>
        </Layout>
      </Box>
    </div>
  )
}
export default ELBrowseToolsPage
