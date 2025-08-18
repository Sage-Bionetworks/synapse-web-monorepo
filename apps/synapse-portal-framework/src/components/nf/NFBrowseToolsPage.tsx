import { ReactComponent as AnimalModels } from '@/components/assets/animalmodels.svg'
import { ReactComponent as Antibodies } from '@/components/assets/antibodies.svg'
import { ReactComponent as Biobanks } from '@/components/assets/biobanks.svg'
import { ReactComponent as CellLines } from '@/components/assets/cell-lines.svg'
import { ReactComponent as PlasmidsReagents } from '@/components/assets/plasmids-reagents.svg'
import { Box, Link, Typography } from '@mui/material'
import { Query, TextMatchesQueryFilter } from '@sage-bionetworks/synapse-types'
import pluralize from 'pluralize'
import { ReactElement } from 'react'
import { FeaturedToolsList } from 'synapse-react-client/components/FeaturedToolsList'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { WideButton } from 'synapse-react-client/components/styled/WideButton'
import EcosystemLayout from 'synapse-react-client/components/Ecosystem/EcosystemLayout'
import Layout from '../Layout'
import PopularSearches from '../PopularSearches'
import Search from '../Search'

type Category = {
  resourceName: string
  image: ReactElement
}

const categories: Category[] = [
  { resourceName: 'Animal Model', image: <AnimalModels /> },
  { resourceName: 'Antibody', image: <Antibodies /> },
  { resourceName: 'Genetic Reagent', image: <PlasmidsReagents /> },
  { resourceName: 'Cell Line', image: <CellLines /> },
  { resourceName: 'Biobank', image: <Biobanks /> },
]

const host = window.location.host
const baseUrl = `${encodeURIComponent(
  'Research Tools Central',
)}/${encodeURIComponent('Submit ')}`
const baseSchemaUrl =
  'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/'
const postUrl = 'https://submit-form.com/KwZ46H4T'

const createHref = path =>
  `http://${host}/${baseUrl}${encodeURIComponent(path)}`

const submitToolButtons = [
  {
    label: 'Submit Animal Model',
    href: createHref('Animal Model'),
    schemaUrl: `${baseSchemaUrl}animal-model/submitAnimalModel.json`,
    uiSchemaUrl: `${baseSchemaUrl}animal-model/SubmitAnimalModelUiSchema.json`,
    postUrl: postUrl,
  },
  {
    label: 'Submit Observation',
    href: createHref('Observation'),
    schemaUrl: `${baseSchemaUrl}observations/SubmitObservationSchema.json`,
    uiSchemaUrl: `${baseSchemaUrl}observations/SubmitObservationUiSchema.json`,
    postUrl: postUrl,
  },
  {
    label: 'Submit Cell Line',
    href: createHref('Cell Line'),
    schemaUrl: `${baseSchemaUrl}cell-line/submitCellLine.json`,
    uiSchemaUrl: `${baseSchemaUrl}cell-line/submitCellLineUiSchema.json`,
    postUrl: postUrl,
  },
  {
    label: 'Submit Genetic Reagents',
    href: createHref('Genetic Reagent'),
    schemaUrl: `${baseSchemaUrl}genetic-reagent/submitGeneticReagent.json`,
    uiSchemaUrl: `${baseSchemaUrl}genetic-reagent/submitGeneticReagentUiSchema.json`,
    postUrl: postUrl,
  },
  {
    label: 'Submit Antibody',
    href: createHref('Antibody'),
    schemaUrl: `${baseSchemaUrl}antibody/submitAntibody.json`,
    uiSchemaUrl: `${baseSchemaUrl}antibody/SubmitAntibodyUiSchema.json`,
    postUrl: postUrl,
  },
]

export type NFBrowseToolsPageProps = {
  popularSearchesSql: string
  toolsSql: string
}

const NFBrowseToolsPage = (props: NFBrowseToolsPageProps) => {
  const { popularSearchesSql, toolsSql } = props
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
          {categories.map(category => {
            return (
              <button
                key={category.resourceName}
                onClick={() =>
                  gotoExploreToolsWithSelectedResource(category.resourceName)
                }
              >
                <Box sx={{ position: 'relative' }}>
                  {category.image}
                  <Typography variant="headline3">
                    {pluralize(category.resourceName)}
                  </Typography>
                </Box>
              </button>
            )
          })}
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
        <Search onSearch={gotoExploreToolsWithFullTextSearch} />
        <Typography variant="sectionTitle" className="sectionTitle">
          Suggested Searches
        </Typography>
        <div className="center-content">
          <PopularSearches
            sql={popularSearchesSql}
            onGoToExploreToolsWithFullTextSearch={searchTerm =>
              gotoExploreToolsWithFullTextSearch(searchTerm)
            }
          />
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
            filterClause={'ORDER BY dateAdded DESC'}
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
              title: 'Free Cell Lines',
              content: <Markdown ownerId={'syn26451327'} wikiId={'614272'} />,
            },
            {
              title: 'Acquire Tissue',
              content: <Markdown ownerId={'syn26451327'} wikiId={'625915'} />,
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
          <Box
            sx={{
              display: 'flex',
              marginTop: '50px',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {submitToolButtons.map(button => (
              <WideButton
                key={button.label}
                sx={{
                  ...wideButtonSx,
                  margin: '0px',
                }}
                href={button.href}
                className="highlightSubmitToolButton"
                variant="contained"
                // @ts-expect-error - target prop exists, but TS doesn't recognize on styled component
                target="_blank"
              >
                {button.label}
              </WideButton>
            ))}
          </Box>
        </div>
      </Layout>
    </div>
  )
}
export default NFBrowseToolsPage
