import { SynapseComponents, FeaturedToolsList } from 'synapse-react-client'
import { popularSearchesSql, toolsSql } from '../../configurations/nf/resources'
import Layout from '../Layout'
import React from 'react'
import { Button, Link, Typography } from '@mui/material'
import { Query, TextMatchesQueryFilter } from '@sage-bionetworks/synapse-types'
import { ReactComponent as AnimalModels } from './assets/animalmodels.svg'
import { ReactComponent as Antibodies } from './assets/antibodies.svg'
import { ReactComponent as Biobanks } from './assets/biobanks.svg'
import { ReactComponent as CellLines } from './assets/cell-lines.svg'
import { ReactComponent as PlasmidsReagents } from './assets/plasmids-reagents.svg'
import PopularSearches from './PopularSearches'
import { Form } from 'react-bootstrap'
import pluralize from 'pluralize'
import PortalComponents from '../../portal-components'

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

type Category = {
  resourceName: string
  image: React.ReactElement
}

const categories: Category[] = [
  { resourceName: 'Animal Model', image: <AnimalModels /> },
  { resourceName: 'Antibody', image: <Antibodies /> },
  { resourceName: 'Genetic Reagent', image: <PlasmidsReagents /> },
  { resourceName: 'Cell Line', image: <CellLines /> },
  { resourceName: 'Biobank', image: <Biobanks /> },
]

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
          <div
            className="center-content"
            style={{ marginLeft: '10px', marginRight: '10px' }}
          >
            <div className="description">
              <Typography variant="body1">
                NF Research Tools Central aims to support the development of a
                robust research toolkit and lower the barrier of entry to
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
          {categories.map((category) => {
            return (
              <button
                key={category.resourceName}
                onClick={() =>
                  gotoExploreToolsWithSelectedResource(category.resourceName)
                }
              >
                {category.image}
                <Typography variant="headline3">
                  {pluralize(category.resourceName)}
                </Typography>
              </button>
            )
          })}
        </div>
        <div className="center-content">
          <SynapseComponents.WideButton
            sx={wideButtonSx}
            variant="contained"
            onClick={() => gotoExploreTools()}
          >
            View All Tools
          </SynapseComponents.WideButton>
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
              <SynapseComponents.IconSvg icon="searchOutlined" />
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
          <SynapseComponents.WideButton
            sx={wideButtonSx}
            variant="contained"
            onClick={() => gotoExploreTools()}
          >
            View All Tools
          </SynapseComponents.WideButton>
        </div>
      </Layout>
      <Layout outsideContainerClassName="home-container-description  home-bg-dark home-spacer">
        <Typography variant="sectionTitle" className="sectionTitle">
          Announcements
        </Typography>
        <PortalComponents.Ecosystem
          config={[
            {
              title: 'Free Cell Lines',
              ownerId: 'syn26451327',
              wikiId: '614272',
            },
            {
              title: 'Acquire Tissue',
              ownerId: 'syn26451327',
              wikiId: '625915',
            },
          ]}
        />
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
          <SynapseComponents.WideButton
            sx={wideButtonSx}
            href="https://forms.gle/htFkH5yewLzP1RAu7"
            className="highlightSubmitToolButton"
            variant="contained"
            // @ts-expect-error - target prop exists, but TS doesn't recognize on styled component
            target="_blank"
          >
            Submit A Tool
          </SynapseComponents.WideButton>
        </div>
      </Layout>
    </div>
  )
}
export default BrowseToolsPage
