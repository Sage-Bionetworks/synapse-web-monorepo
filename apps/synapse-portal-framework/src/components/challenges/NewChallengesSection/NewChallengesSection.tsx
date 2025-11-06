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
import ColorfulPortalCardWithChips from 'synapse-react-client/components/BasePortalCard/ColorfulPortalCardWithChips/ColorfulPortalCardWithChips'

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
        {dataRows.map(row => {
          const chips = row.values[getFieldIndex('chips', queryResultBundle)]
          let chipsArray: string[]

          if (Array.isArray(chips)) {
            chipsArray = chips.map(String)
          } else {
            try {
              const parsed = JSON.parse(chips ?? '[]')
              chipsArray = Array.isArray(parsed)
                ? parsed.map(String)
                : [String(parsed)]
            } catch {
              chipsArray = chips ? [String(chips)] : []
            }
          }

          return (
            <ColorfulPortalCardWithChips
              key={row.rowId}
              title={
                row.values[getFieldIndex('title', queryResultBundle)] ?? ''
              }
              subtitle={
                row.values[getFieldIndex('challengeName', queryResultBundle)] ??
                ''
              }
              description={
                row.values[getFieldIndex('description', queryResultBundle)] ??
                ''
              }
              learnMoreLink={
                row.values[getFieldIndex('learnMoreLink', queryResultBundle)] ??
                ''
              }
              chips={chipsArray}
              tag={
                row.values[
                  getFieldIndex('registrationStatus', queryResultBundle)
                ] ?? ''
              }
              backgroundImage={
                row.values[
                  getFieldIndex('backgroundImage', queryResultBundle)
                ] ?? ''
              }
              backgroundColor={
                row.values[getFieldIndex('cardColor', queryResultBundle)] ?? ''
              }
              entityId={entityId}
              borderRadiusPx={borderRadiusPx}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default NewChallengesSection
