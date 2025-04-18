import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import AMPALSHeader from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSHeader'
import ALLALSSlat from '@sage-bionetworks/synapse-portal-framework/components/ampals/ALLALSSlat'
// import { dataSql } from '../config/resources'
// import { FeaturedDataTabs } from 'synapse-react-client'
// import columnAliases from '../config/columnAliases'
import headerSvg from '../config/style/header.svg?url'
import {
  FullWidthAlert,
  CardGridWithLinks,
  GoalsV3,
  UpsetPlot,
} from 'synapse-react-client'
import { OrientationBanner } from 'synapse-react-client'
import { goalsTableEntityId, upsetPlotSql } from '@/config/resources'
import { Box, Button, styled, Typography } from '@mui/material'

//TODO
export default function HomePage() {
  const moreResourcesCards = [
    {
      title: 'For Researchers',
      description:
        'Tutorials about using this portal, as well as links to external partner resources, and related ALS knowledge portals.',
      link: '/Resources/For Researchers',
    },
    {
      title: 'For Data Contributors',
      description:
        'Visit this page for instructions on how to contribute data to this portal.',
      link: '/Resources/For Contributors',
    },
    {
      title: 'For Persons with Lived Experience',
      description:
        'Visit this page for links to external resources with information about clinical trials, ongoing research, and community.',
      link: '/Resources/For Persons with Lived Experience',
    },
  ]
  return (
    <>
      <OrientationBanner
        name="UnderConstruction"
        title="Welcome to a design preview of our portal!"
        text="The ALS Knowledge Portal is actively under construction, but we wanted to give you a preview. As we build out the portal, this page will be updated with more to see and explore. Stay tuned!"
        sx={{
          width: 'auto',
        }}
      />
      <AMPALSHeader headerSvgURL={headerSvg} />
      {/* <GoalsV2 entityId={goalsSql} dataLink={''} /> */}
      <SectionLayout
        title={'Our ALS Resources'}
        centerTitle
        ContainerProps={{
          sx: {
            maxWidth: '100% !important',
            padding: { xs: '40px', lg: '60px 80px 80px 80px' },
            h2: {
              lineHeight: 'normal',
              margin: '0 0 40px 0',
            },
          },
        }}
      >
        <GoalsV3 entityId={goalsTableEntityId} />
      </SectionLayout>
      <h2>Explore the data</h2>
      <p>
        Use this UpSet Plot to explore the intersections of different datasets
        available in the portal. The bars represent the overlap between
        datasets, helping you easily identify shared data points across multiple
        sources for more targeted research.
      </p>
      <Button
        variant="contained"
        href="https://www.all-als.org/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          padding: '6px 24px',
          whiteSpace: 'nowrap',
          height: '38px',
          width: { xs: '100%', md: 'fit-content' },
          bordeRadius: '3px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <Typography
          sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '144%' }}
        >
          View All Datasets
        </Typography>
      </Button>
      {/* <Box
        sx={{
          width: '100%',
          height: '400px',
          '& .upsetjs svg': {
            fontFamily: "'DM Sans', sans-serif",
          },
          '& .upsetjs text': {
            fontSize: '14px',
            fill: '#333',
          },
          '& .upsetjs g.bars > g:first-of-type rect': {
            fill: '#4578c6',
          },
          '& .upsetjs g.bars > g:not(:first-of-type) rect': {
            fill: 'url(#diagonalHatch)',
            fillOpacity: 0.2,
          },
          '& .upsetjs line': {
            stroke: 'none',
          },
        }}
      >
        <UpsetPlot
          sql={upsetPlotSql}
          rgbIndex={0}
          maxBarCount={20}
          setName="# People per data type (all datastes)"
          combinationName="# of Files"
          // onClick={handleUpsetPlotClick}
          // summaryLinkText='Explore All Data'
          // summaryLink='/Explore/Data'
        />
      </Box> */}
      <UpsetPlot
        sql={upsetPlotSql}
        customColor={'#2360A6'}
        maxBarCount={20}
        setName="# People per data type (all datastes)"
        combinationName="# of Files"
        // onClick={handleUpsetPlotClick}
        // summaryLinkText='Explore All Data'
        // summaryLink='/Explore/Data'
      />
      <ALLALSSlat />

      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Featured Datasets'}
          centerTitle
          ContainerProps={{ className: 'home-spacer' }}
        >
          <FullWidthAlert
            sx={{ m: 0 }}
            isGlobal={false}
            variant={'warning'}
            show={true}
            title={''}
            description={'This area is under construction'}
          />
          {/* <FeaturedDataTabs
            sql={dataSql}
            rgbIndex={3}
            configs={[
              {
                title: '',
                icon: 'chart2',
                explorePagePath: '/Explore',
                exploreObjectType: 'Datasets',
                plotsConfig: {
                  sql: `${dataSql} where responsibleOrgName is not null`,
                  configs: [
                    {
                      facetsToPlot: ['topic', 'responsibleOrgName'],
                      unitDescription: 'dataset',
                      plotType: 'BAR',
                      columnAliases: columnAliases,
                    },
                  ],
                },
              },
            ]}
          /> */}
        </SectionLayout>
        <div className={'home-bg-dark'}>
          <SectionLayout
            title={'More Resources'}
            centerTitle
            ContainerProps={{
              sx: {
                maxWidth: '100% !important',
                padding: { xs: '40px', lg: '60px 80px 80px 80px' },
                h2: {
                  lineHeight: 'normal',
                  margin: '0 0 40px 0',
                },
              },
            }}
          >
            <CardGridWithLinks
              linkText={'More Resources'}
              cards={moreResourcesCards}
            />
          </SectionLayout>
        </div>
      </div>
    </>
  )
}
