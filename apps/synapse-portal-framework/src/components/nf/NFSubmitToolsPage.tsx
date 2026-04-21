import React from 'react'
import { ReactComponent as AnimalModels } from '@/components/assets/animalmodels.svg'
import { ReactComponent as Antibodies } from '@/components/assets/antibodies.svg'
import { ReactComponent as Biobanks } from '@/components/assets/biobanks.svg'
import { ReactComponent as CellLines } from '@/components/assets/cell-lines.svg'
import { ReactComponent as PlasmidsReagents } from '@/components/assets/plasmids-reagents.svg'
// Imported as URLs and rendered with a blue multiply overlay to replicate the
// blue overlay style of the Figma-exported category card SVGs.
import advancedCellularModelsUrl from '@/components/assets/advanced-cellular-models.svg?url'
import clinicalAssessmentToolsUrl from '@/components/assets/clinical-assessment-tools.svg?url'
import computationalToolsUrl from '@/components/assets/computational-tools.svg?url'
import patientDerivedModelsUrl from '@/components/assets/patient-derived-models.svg?url'
import { Box, Link, Typography } from '@mui/material'
import { ReactElement } from 'react'
import { useNavigate } from 'react-router'
import Layout from '../Layout'

const CARD_WIDTH = 260
const CARD_HEIGHT = 114

// Wraps an <img> in a blue-background box with mix-blend-mode:multiply to
// replicate the blue overlay style of the Figma-exported category card SVGs.
const BlueOverlayImg = ({
  src,
  objectPosition = 'center',
}: {
  src: string
  objectPosition?: string
}) => (
  <Box
    sx={{
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      backgroundColor: 'primary.main',
      overflow: 'hidden',
    }}
  >
    <Box
      component="img"
      src={src}
      alt=""
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition,
        mixBlendMode: 'multiply',
        display: 'block',
      }}
    />
  </Box>
)

type SubmitCategoryItem = {
  label: string
  submitPath: string
  tooltip: string
  image: ReactElement | null
}

type SubmitCategoryGroup = {
  groupName: string
  items: SubmitCategoryItem[]
}

const categoryGroups: SubmitCategoryGroup[] = [
  {
    groupName: 'Research Model Systems',
    items: [
      {
        label: 'Cell Lines',
        submitPath: '/Research Tools Central/Submit Cell Line',
        tooltip: 'Established cell lines derived from NF patients or models',
        image: <CellLines width={CARD_WIDTH} height={CARD_HEIGHT} />,
      },
      {
        label: 'Animal Models',
        submitPath: '/Research Tools Central/Submit Animal Model',
        tooltip: 'Mouse, rat, or other animal models of NF (neurofibromatosis)',
        image: <AnimalModels width={CARD_WIDTH} height={CARD_HEIGHT} />,
      },
      {
        label: 'Patient-Derived Models',
        submitPath: '/Research Tools Central/Submit Patient Derived Model',
        tooltip:
          'Xenografts and organoids created directly from patient tissue',
        image: (
          <BlueOverlayImg src={patientDerivedModelsUrl} objectPosition="top center" />
        ),
      },
      {
        label: 'Advanced Cellular Models',
        submitPath: '/Research Tools Central/Submit Advanced Cellular Model',
        tooltip:
          'Protocols to create organoids, spheroids, and other 3D models',
        image: <BlueOverlayImg src={advancedCellularModelsUrl} />,
      },
    ],
  },
  {
    groupName: 'Molecular Reagents',
    items: [
      {
        label: 'Antibodies',
        submitPath: '/Research Tools Central/Submit Antibody',
        tooltip: 'NF-relevant antibodies',
        image: <Antibodies width={CARD_WIDTH} height={CARD_HEIGHT} />,
      },
      {
        label: 'Genetic Reagents',
        submitPath: '/Research Tools Central/Submit Genetic Reagent',
        tooltip: 'CRISPR constructs, plasmids, viral vectors, etc.',
        image: <PlasmidsReagents width={CARD_WIDTH} height={CARD_HEIGHT} />,
      },
    ],
  },
  {
    groupName: 'Analytical & Assessment Tools',
    items: [
      {
        label: 'Computational Tools',
        submitPath: '/Research Tools Central/Submit Computational Tool',
        tooltip: 'Software, pipelines, packages',
        image: <BlueOverlayImg src={computationalToolsUrl} />,
      },
      {
        label: 'Clinical Assessment Tools',
        submitPath: '/Research Tools Central/Submit Clinical Assessment Tool',
        tooltip: 'Validated clinical outcome measures',
        image: (
          <BlueOverlayImg src={clinicalAssessmentToolsUrl} objectPosition="top center" />
        ),
      },
    ],
  },
  {
    groupName: 'Other',
    items: [
      {
        label: 'Biobanks',
        submitPath: '/Research Tools Central/Submit Biobank',
        tooltip: 'Biobanks with NF biospecimens',
        image: <Biobanks width={CARD_WIDTH} height={CARD_HEIGHT} />,
      },
    ],
  },
]

const NFSubmitToolsPage = (): React.ReactNode => {
  const navigate = useNavigate()

  return (
    <div className="browse-tools-page submit-tools-page">
      <div className="header">
        <div className="home-container-description">
          <Typography variant="headline1" className="sectionTitle">
            Submit Tool by Category
          </Typography>
          <div
            className="center-content"
            style={{ marginLeft: '10px', marginRight: '10px' }}
          >
            <div className="description">
              <Typography variant="body1">
                Select the category that best describes your research tool to
                open the submission form.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Layout outsideContainerClassName="home-spacer">
        {categoryGroups.map(group => (
          <div key={group.groupName} className="submit-category-group">
            <Typography
              variant="subsectionHeader"
              className="submit-group-label"
              sx={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}
            >
              {group.groupName}
            </Typography>
            <div className="categories">
              {group.items.map(item => (
                <button
                  key={item.label}
                  title={item.tooltip}
                  onClick={() => navigate(item.submitPath)}
                >
                  <Box sx={{ position: 'relative' }}>
                    {item.image ?? (
                      <Box
                        sx={{
                          width: CARD_WIDTH,
                          height: CARD_HEIGHT,
                          backgroundColor: 'primary.main',
                        }}
                      />
                    )}
                    <Typography variant="headline3">{item.label}</Typography>
                  </Box>
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="center-content submit-not-sure">
          <Link
            href="https://sagebionetworks.jira.com/servicedesk/customer/portal/2/group/3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Not sure which category? Contact us →
          </Link>
        </div>
      </Layout>
    </div>
  )
}

export default NFSubmitToolsPage
