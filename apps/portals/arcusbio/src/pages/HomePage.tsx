import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Box, Container, Typography } from '@mui/material'
import styles from './HomePage.module.scss'

export default function HomePage() {
  const title = (
    <Typography variant="headline1" className={styles.title}>
      Arcus Biosciences Data Portal
    </Typography>
  )
  const description = (
    <Typography variant="headline3" className={styles.description}>
      Explore, search, and manage our research data all in one place. Use the
      tools provided to access datasets, track file provenance, and collaborate
      seamlessly across teams.
    </Typography>
  )
  return (
    <>
      <Box className={styles.hero}>
        <Container className={styles.heroContent}>
          {title}
          {description}
        </Container>
      </Box>
      <SectionLayout title={'What’s in the portal?'}>
        <Typography>
          This portal serves as a centralized repository for Arcus Biosciences'
          private data. Here, team members can explore curated datasets, project
          documentation, and research files. The portal is designed to
          facilitate data discovery, analysis, and collaboration across teams.
        </Typography>
      </SectionLayout>
      <SectionLayout title={'Accessing the data'}>
        <Typography>
          Access to the data in this portal is restricted to authorized members
          of the Arcus team. To browse or search for files:
          <ol>
            <li>
              Log in using your Arcus credentials. You click the “login” button
              above, or click the Arcus Portal logo on your Okta dashboard.
            </li>
            <li>
              Use the search bar or filters to locate specific datasets or
              files.
            </li>
            <li>
              For additional permissions or access to restricted data, contact
              the data administrator.
            </li>
          </ol>
        </Typography>
      </SectionLayout>
      <SectionLayout title={'Using file provenance'}>
        <Typography>
          The portal tracks the origin, ownership, and modification history of
          each file to ensure data integrity and reproducibility. You can view
          detailed provenance information, including:
          <ul>
            <li>File creator and upload date.</li>
            <li>Version history and changes made.</li>
            <li>Links to associated projects or analyses.</li>
          </ul>
        </Typography>
      </SectionLayout>
      <SectionLayout title={'Help & support'}>
        <Typography>
          If you encounter issues or have questions about the portal, contact
          the support team at yoursupportemailhere@arcusbiosciences.com. You can
          also visit the FAQ section or submit a ticket through the Help Desk
          feature.
        </Typography>
      </SectionLayout>
    </>
  )
}
