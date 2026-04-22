import { ReactComponent as AnimalModels } from '@/components/assets/animalmodels.svg'
import { ReactComponent as Antibodies } from '@/components/assets/antibodies.svg'
import { ReactComponent as Biobanks } from '@/components/assets/biobanks.svg'
import { ReactComponent as CellLines } from '@/components/assets/cell-lines.svg'
import { ReactComponent as PlasmidsReagents } from '@/components/assets/plasmids-reagents.svg'
import advancedCellularModelsUrl from '@/components/assets/advanced-cellular-models.svg?url'
import clinicalAssessmentToolsUrl from '@/components/assets/clinical-assessment-tools.svg?url'
import computationalToolsUrl from '@/components/assets/computational-tools.svg?url'
import patientDerivedModelsUrl from '@/components/assets/patient-derived-models.svg?url'
import { Box, Link, Typography } from '@mui/material'
import { CSSProperties, ReactElement, ReactNode } from 'react'
import { useNavigate } from 'react-router'
import Layout from '../Layout'

const CARD_HEIGHT = 114

// Wraps a Figma-exported SVG ReactComponent.  preserveAspectRatio="xMidYMid
// slice" (passed as a prop to each SVG) makes the content cover the viewport
// rather than letterbox — equivalent to object-fit:cover for inline SVGs.
const SvgCard = ({ children }: { children: ReactElement }) => (
  <Box sx={{ width: '100%', height: CARD_HEIGHT, overflow: 'hidden' }}>
    {children}
  </Box>
)

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
      width: '100%',
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

// Style + attribute shared by all Figma SVG cards.
// preserveAspectRatio="xMidYMid slice" scales content to cover (not letterbox).
const svgProps = {
  preserveAspectRatio: 'xMidYMid slice' as const,
  style: {
    width: '100%',
    height: `${CARD_HEIGHT}px`,
    display: 'block',
  } as CSSProperties,
}

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
        image: (
          <SvgCard>
            <CellLines {...svgProps} />
          </SvgCard>
        ),
      },
      {
        label: 'Animal Models',
        submitPath: '/Research Tools Central/Submit Animal Model',
        tooltip: 'Mouse, rat, or other animal models of NF (neurofibromatosis)',
        image: (
          <SvgCard>
            <AnimalModels {...svgProps} />
          </SvgCard>
        ),
      },
      {
        label: 'Patient-Derived Models',
        submitPath: '/Research Tools Central/Submit Patient Derived Model',
        tooltip:
          'Xenografts and organoids created directly from patient tissue',
        image: (
          <BlueOverlayImg
            src={patientDerivedModelsUrl}
            objectPosition="top center"
          />
        ),
      },
      {
        label: 'Organoid Protocols',
        submitPath: '/Research Tools Central/Submit Organoid Protocol',
        tooltip: 'Protocols for organoids, spheroids, and other 3D models',
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
        image: (
          <SvgCard>
            <Antibodies {...svgProps} />
          </SvgCard>
        ),
      },
      {
        label: 'Genetic Reagents',
        submitPath: '/Research Tools Central/Submit Genetic Reagent',
        tooltip: 'CRISPR constructs, plasmids, viral vectors, etc.',
        image: (
          <SvgCard>
            <PlasmidsReagents {...svgProps} />
          </SvgCard>
        ),
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
          <BlueOverlayImg
            src={clinicalAssessmentToolsUrl}
            objectPosition="top center"
          />
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
        image: (
          <SvgCard>
            <Biobanks {...svgProps} />
          </SvgCard>
        ),
      },
    ],
  },
]

const NFSubmitToolsPage = (): ReactNode => {
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
                  aria-label={item.label}
                  onClick={() => void navigate(item.submitPath)}
                >
                  <Box sx={{ position: 'relative', width: '100%' }}>
                    {item.image ?? (
                      <Box
                        sx={{
                          width: '100%',
                          height: CARD_HEIGHT,
                          backgroundColor: 'primary.main',
                        }}
                      />
                    )}
                    <Typography variant="headline3" component="p">
                      {item.label}
                    </Typography>
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
