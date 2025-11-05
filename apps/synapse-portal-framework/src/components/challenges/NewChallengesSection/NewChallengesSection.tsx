import { Box, Typography } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdAndVersionFromSqlStatement } from 'synapse-react-client/utils/functions'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import styles from './NewChallengesSection.module.scss'
import { ReactComponent as TriangleImage } from '../assets/triangle.svg'
import { ReactComponent as CircleImage } from '../assets/circle.svg'
import { ReactComponent as LongLineImage } from '../assets/longLine.svg'
import { ReactComponent as ShortLineImage } from '../assets/shortLine.svg'
import { ReactComponent as DoubleLineImage } from '../assets/doubleLine.svg'
import ColorfulPortalCardWithChips, {
  PortalCardColumnMapping,
} from 'synapse-react-client/components/BasePortalCard/ColorfulPortalCardWithChips/ColorfulPortalCardWithChips'

type NewChallengesSectionProps = {
  sql: string
  borderRadiusPx?: number
}

const NewChallengesSection = ({
  sql,
  borderRadiusPx,
}: NewChallengesSectionProps) => {
  const { entityId } = parseEntityIdAndVersionFromSqlStatement(sql)

  const queryBundleRequest: QueryBundleRequest = {
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: entityId ?? '',
    query: { sql },
  }

  const { data: queryResultBundle } =
    useGetQueryResultBundle(queryBundleRequest)

  const columnMapping: PortalCardColumnMapping = {
    title: 'title',
    subtitle: 'challengeName',
    description: 'description',
    learnMoreLink: 'learnMoreLink',
    chips: 'chips',
    tag: 'registrationStatus',
    backgroundImage: 'backgroundImage',
    backgroundColor: 'cardColor',
  }

  const indices = Object.fromEntries(
    Object.entries(columnMapping).map(([key, name]) => [
      key,
      getFieldIndex(name, queryResultBundle),
    ]),
  )

  const dataRows = queryResultBundle?.queryResult?.queryResults.rows ?? []

  return (
    <Box className={styles.NewChallengesSection__root}>
      <TriangleImage className={styles.NewChallengesSection__triangleImage} />
      <CircleImage className={styles.NewChallengesSection__circleImage} />
      <DoubleLineImage
        className={styles.NewChallengesSection__doubleLineImage}
      />
      <LongLineImage className={styles.NewChallengesSection__longLineImage} />
      <ShortLineImage className={styles.NewChallengesSection__shortLineImage} />
      <Box className={styles.NewChallengesSection__header}>
        <Typography
          variant="headline1"
          className={styles.NewChallengesSection__sectionTitle}
        >
          New Challenges
        </Typography>
      </Box>
      <Box className={styles.NewChallengesSection__container}>
        {dataRows.map(row => (
          <ColorfulPortalCardWithChips
            key={row.rowId}
            row={row}
            entityId={entityId}
            indices={indices}
            sql={sql}
            borderRadiusPx={borderRadiusPx}
          />
        ))}
      </Box>
    </Box>
  )
}

export default NewChallengesSection
