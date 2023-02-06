import { Meta, StoryObj } from '@storybook/react'
import FeaturedDataTabs from '../src/lib/containers/home_page/featured-data/FeaturedDataTabs'

const meta = {
  title: 'Home Page/FeaturedDataTabs',
  component: FeaturedDataTabs,
} satisfies Meta<typeof FeaturedDataTabs>

export default meta

type Story = StoryObj<typeof meta>

export const SingleQuery: Story = {
  args: {
    rgbIndex: 1,
    sql: 'SELECT * FROM syn21994974',
    configs: [
      {
        title: 'Studies',
        icon: 'chart2',
        explorePagePath: '/Explore/Studies',
        exploreObjectType: 'Studies',
        plotsConfig: {
          sql: 'SELECT * FROM syn21994974 WHERE ( ( "collectionType" = \'Validation Study\' OR "collectionType" = \'Interventional Study\' OR "collectionType" = \'Observational Study\' ) )',
          configs: [
            {
              facetsToPlot: [
                'dataCollectionMethod',
                'deviceType',
                'devicePlatform',
                'diagnosis',
                'reportedOutcome',
                'digitalAssessmentCategory',
              ],
            },
          ],
        },
      },
    ],
  },
}

export const QueryPerCard: Story = {
  args: {
    rgbIndex: 1,
    sql: 'select * from syn11346063',
    configs: [
      {
        title: 'Human Studies',
        icon: 'PERSON',
        explorePagePath: '/Explore/HumanStudies',
        exploreObjectType: 'Studies',
        plotsConfig: {
          configs: [
            {
              title: 'The Religious Orders and Memory and Aging Project Study',
              description:
                'This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).',
              facetsToPlot: ['dataType', 'assay'],
              selectFacetColumnName: 'study',
              selectFacetColumnValue: 'ROSMAP',
              detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn3219045',
            },
            {
              title: 'The Mount Sinai Brain Bank Study',
              description:
                'This study generated gene expression, genomic variant and proteomic data from brain specimens obtained from the Mount Sinai/JJ Peters VA Medical Center Brain Bank (MSBB).',
              facetsToPlot: ['dataType', 'assay'],
              selectFacetColumnName: 'study',
              selectFacetColumnValue: 'MSBB',
              detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn3159438',
            },
            {
              title: 'The RNAseq Harmonization Study',
              description:
                'The goal of this project was to create a uniformly processed RNAseq dataset across the three largest AMP-AD contributed studies (ROSMAP/MSBB/MayoRNAseq).',
              facetsToPlot: ['dataType', 'assay'],
              selectFacetColumnName: 'study',
              selectFacetColumnValue: 'rnaSeqReprocessing',
              detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn5550404',
            },
          ],
        },
      },
      {
        title: 'Animal Model Studies',
        icon: 'MOUSE',
        // explorePagePath:'/Explore/AnimalStudies',
        // exploreObjectType:'Studies',
        plotsConfig: {
          configs: [
            {
              title: 'The UCI MODEL-AD 5XFAD Study',
              facetsToPlot: ['dataType', 'assay'],
              selectFacetColumnName: 'study',
              selectFacetColumnValue: 'UCI_5XFAD',
              detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn16798076',
            },
            {
              title: 'The IU/Jax/Pitt MODEL-AD Primary Screen Study',
              facetsToPlot: ['dataType', 'assay'],
              selectFacetColumnName: 'study',
              selectFacetColumnValue: 'Jax.IU.Pitt_PrimaryScreen',
              detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn21595258',
            },
            {
              title: 'The IU/Jax/Pit MODEL-AD APOE/TREM2 Study',
              facetsToPlot: ['dataType', 'assay'],
              selectFacetColumnName: 'study',
              selectFacetColumnValue: 'Jax.IU.Pitt_5XFAD',
              detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn17095980',
            },
          ],
        },
      },
    ],
  },
}
