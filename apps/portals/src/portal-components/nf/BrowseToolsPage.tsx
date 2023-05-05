import { popularSearchesSql, toolsSql } from '../../configurations/nf/resources'
import Layout from '../Layout'
import * as React from 'react'
import { Typography } from 'synapse-react-client'
import FeaturedToolsList from 'synapse-react-client/dist/containers/home_page/featured_tools/FeaturedToolsList'
import IconSvg from 'synapse-react-client/dist/containers/IconSvg'
import { Query } from 'synapse-react-client/dist/utils/synapseTypes'
import { TextMatchesQueryFilter } from 'synapse-react-client/dist/utils/synapseTypes/Table/QueryFilter'
import { WideButton } from 'synapse-react-client/dist/components/styled/WideButton'
import { ReactComponent as AnimalModels } from './assets/animalmodels.svg'
import { ReactComponent as Antibodies } from './assets/antibodies.svg'
import { ReactComponent as Biobanks } from './assets/biobanks.svg'
import { ReactComponent as CellLines } from './assets/cell-lines.svg'
import { ReactComponent as PlasmidsReagents } from './assets/plasmids-reagents.svg'
import PopularSearches from './PopularSearches'
import { Button, Link } from '@mui/material'
import { Form } from 'react-bootstrap'

export const gotoExploreToolsWithFullTextSearch = (
  fullTextSearchString: string,
) => {
  const filter: TextMatchesQueryFilter = {
    concreteType: 'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
    searchExpression: fullTextSearchString,
  }
  const query: Query = {
    sql: toolsSql,
    additionalFilters: [filter],
  }
  window.location.assign(
    `/Explore/Tools?QueryWrapper0=${JSON.stringify(query)}`,
  )
}

const BrowseToolsPage = () => {
  const [searchText, setSearchText] = React.useState<string>('')
  const gotoExploreTools = () => {
    window.location.assign('/Explore/Tools')
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
      `/Explore/Tools?QueryWrapper0=${JSON.stringify(query)}`,
    )
  }

  const wideButtonSx = { marginTop: '50px' }

  return (
    <div className="browse-tools-page">
      <div className="header">
        <div className="home-container-description">
          <Typography variant="headline1" className="sectionTitle">
            NF Research Tools Central
          </Typography>
          <div className="center-content">
            <div className="description">
              <Typography variant="body1">
                NF Research Tools Central aims to support the development
                of a robust research toolkit and lower the barrier of entry to
                neurofibromatosis (NF) research. The database includes
                NF-associated animal models, cell lines, antibodies, and genetic
                reagents and details on tool characteristics and sourcing, as
                well as observational and experimental data.
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
          Drill-down to explore specific types of NF research tools.
        </Typography>
        <div className="categories">
          <button
            onClick={() => gotoExploreToolsWithSelectedResource('Animal Model')}
          >
            <AnimalModels />
            <Typography variant="headline3">Animal Models</Typography>
          </button>
          <button
            onClick={() => gotoExploreToolsWithSelectedResource('Antibody')}
          >
            <Antibodies />
            <Typography variant="headline3">Antibodies</Typography>
          </button>
          <button
            onClick={() =>
              gotoExploreToolsWithSelectedResource('Genetic Reagent')
            }
          >
            <PlasmidsReagents />
            <Typography variant="headline3">Genetic Reagents</Typography>
          </button>
          <button
            onClick={() => gotoExploreToolsWithSelectedResource('Cell Line')}
          >
            <CellLines />
            <Typography variant="headline3">Cell Lines</Typography>
          </button>
          <button
            onClick={() => gotoExploreToolsWithSelectedResource('Biobank')}
          >
            <Biobanks />
            <Typography variant="headline3">Biobanks</Typography>
          </button>
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
        <div className="center-content">
          <div className="searchToolsRow">
            <div className="searchInputWithIcon">
              <IconSvg icon="searchOutlined" />
              <Form.Control
                type="search"
                placeholder=""
                value={searchText}
                onChange={(event) => {
                  setSearchText(event.target.value)
                }}
                onKeyPress={(evt) => {
                  if (evt.key === 'Enter') {
                    gotoExploreToolsWithFullTextSearch(searchText)
                  }
                }}
              />
            </div>
            <div className="search-button-container">
              <Button
                variant="contained"
                onClick={() => gotoExploreToolsWithFullTextSearch(searchText)}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <Typography variant="sectionTitle" className="sectionTitle">
          Suggested Searches
        </Typography>
        <div className="center-content">
          <PopularSearches sql={popularSearchesSql} />
        </div>
      </div>

      <Layout outsideContainerClassName="home-spacer">
        <Typography variant="sectionTitle" className="sectionTitle">
          Recently Added Tools
        </Typography>
        <Typography variant="body1" className="sectionSubtitle">
          Check out some recently-catalogued research resources below.
        </Typography>
        <div className="center-content">
          <FeaturedToolsList
            entityId={'syn26450069'}
            idColumnName={'resourceId'}
            nameColumnName={'resourceName'}
            descriptionColumnName={'description'}
            typeColumnName={'resourceType'}
            dateColumnName={'dateAdded'}
            toolDetailPageURL={'/Explore/Tools/DetailsPage?resourceId='}
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
      <Layout outsideContainerClassName="home-spacer highlightSubmitToolContainer">
        <Typography variant="sectionTitle" className="sectionTitle">
          Submit a Tool to NF Research Tools Central
        </Typography>
        <div className="center-content">
          <div className="description">
            <Typography variant="body1">
              We are currently accepting submissions that describe any
              NF1-related mouse model, cell line, genetic reagent (e.g. plasmid,
              CRISPR), antibody, or biobank. If you have a tool that you would
              like to add to NF Research Tools Central, please click the {'"'}
              Submit a Tool{'"'} button below to learn more.
            </Typography>
          </div>
        </div>
        <div className="center-content">
          <WideButton
            sx={wideButtonSx}
            href="https://forms.gle/htFkH5yewLzP1RAu7"
            className="highlightSubmitToolButton"
            variant="contained"
            // @ts-ignore - target prop exists, but TS doesn't recognize on styled component
            target="_blank"
          >
            Submit A Tool
          </WideButton>
        </div>
      </Layout>
    </div>
  )
}

export default BrowseToolsPage
