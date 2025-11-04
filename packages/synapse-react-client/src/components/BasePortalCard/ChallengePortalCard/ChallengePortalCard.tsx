import { parseEntityIdAndVersionFromSqlStatement } from '@/utils/functions'
import BasePortalCard from '../BasePortalCard'
import { QueryBundleRequest, Row } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '@/utils'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { Chip, Box, Button, Stack, Typography } from '@mui/material'
import styles from './ChallengePortalCard.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useImageUrl } from '@/utils/hooks/useImageUrlUtils'
import { Close } from '@mui/icons-material'
import { ReactComponent as CircleImage } from '../../../assets/illustrations/circle.svg'
import { ReactComponent as LongLineImage } from '../../../assets/illustrations/longLine.svg'
import { ReactComponent as ShortLineImage } from '../../../assets/illustrations/shortLine.svg'
import { ReactComponent as TriangleImage } from '../../../assets/illustrations/triangle.svg'
import { ReactComponent as DoubleLineImage } from '../../../assets/illustrations/doubleLine.svg'
import { hashCode } from '@/utils/functions/StringUtils'

type ChallengePortalCardProps = {
  sql: string
  borderRadius?: number
}

type ChallengePortalCardRowProps = {
  row: Row
  entityId: string | undefined
  indices: Record<string, number>
  sql: string
  borderRadius?: number
}

const colors = ['#F8CC7D', '#BFE8F4', '#CEFBDD']

const getChicletColors = (badges: string[]) => {
  let lastColorIndex = -1
  return badges.map((badge, i) => {
    const hash = hashCode(badge)
    let index = Math.abs(hash + i) % colors.length

    // prevent consecutive badges from being the same color
    if (index === lastColorIndex && colors.length > 1) {
      index = (index + 1) % colors.length
    }

    lastColorIndex = index
    return colors[index]
  })
}

const Chips = ({ badges }: { badges: string[] }) => {
  const badgeColors = getChicletColors(badges)
  return (
    <Box className={styles.ChallengePortalCard__chipsContainer}>
      {badges.map((badge, index) => (
        <Chip
          key={badge}
          label={<Typography variant="smallText1">{badge}</Typography>}
          variant="filled"
          style={{ backgroundColor: badgeColors[index] }}
          icon={<Close fontSize="small" />}
          className={styles.ChallengePortalCard__chip}
        />
      ))}
    </Box>
  )
}

const ChallengePortalCardRow = ({
  row,
  entityId,
  indices,
  sql,
  borderRadius,
}: ChallengePortalCardRowProps) => {
  const {
    TITLE,
    CHALLENGE_NAME,
    DESCRIPTION,
    LEARN_MORE_LINK,
    BADGES,
    REGISTRATION_STATUS,
    BACKGROUND_IMAGE,
    BACKGROUND_COLOR,
  } = indices

  const backgroundImageId = row.values[BACKGROUND_IMAGE] || ''
  const imageUrl = useImageUrl(backgroundImageId, entityId ?? '')

  const value = row.values[BADGES]
  let badges: string[]
  try {
    const parsed = JSON.parse(value ?? '[]')
    badges = Array.isArray(parsed) ? parsed.map(String) : [String(parsed)]
  } catch {
    badges = value ? [String(value)] : []
  }

  return (
    <BasePortalCard
      borderRadius={borderRadius}
      backgroundImage={imageUrl}
      backgroundColor={row.values[BACKGROUND_COLOR] ?? ''}
      className={styles.ChallengePortalCard__backgroundImage}
      contentBelowCard={badges.length > 0 && <Chips badges={badges} />}
    >
      <Stack className={styles.ChallengePortalCard__sectionContainer}>
        <Stack className={styles.ChallengePortalCard__topSection}>
          {row.values[REGISTRATION_STATUS] && (
            <Chip
              color="secondary"
              variant="filled"
              className={styles.ChallengePortalCard__registrationStatus}
              sx={{ backgroundColor: row.values[BACKGROUND_COLOR] }}
              label={row.values[REGISTRATION_STATUS]}
            />
          )}
          <Stack className={styles.ChallengePortalCard__titleSection}>
            <Typography variant="headline1">{row.values[TITLE]} </Typography>
            <Typography
              variant="headline1"
              className={styles.ChallengePortalCard__challengeName}
            >
              {row.values[CHALLENGE_NAME]}
            </Typography>
          </Stack>
        </Stack>
        <Stack className={styles.ChallengePortalCard__bottomSection}>
          <Typography variant="smallText1">
            {row.values[DESCRIPTION]}
          </Typography>
          {row.values[LEARN_MORE_LINK] && (
            <Button
              className={styles.ChallengePortalCard__learnMoreButton}
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              href={row.values[LEARN_MORE_LINK]}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Button>
          )}
        </Stack>
      </Stack>
    </BasePortalCard>
  )
}

const ChallengePortalCard = ({
  sql,
  borderRadius,
}: ChallengePortalCardProps) => {
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

  const ExpectedColumns = {
    TITLE: 'title',
    CHALLENGE_NAME: 'challengeName',
    DESCRIPTION: 'description',
    LEARN_MORE_LINK: 'learnMoreLink',
    BADGES: 'badges',
    REGISTRATION_STATUS: 'registrationStatus',
    BACKGROUND_IMAGE: 'backgroundImage',
    BACKGROUND_COLOR: 'cardColor',
  }

  const indices = Object.fromEntries(
    Object.entries(ExpectedColumns).map(([key, name]) => [
      key,
      getFieldIndex(name, queryResultBundle),
    ]),
  )

  const dataRows = queryResultBundle?.queryResult?.queryResults.rows ?? []

  return (
    <Box className={styles.ChallengePortalCard__root}>
      <TriangleImage className={styles.ChallengePortalCard__triangleImage} />
      <CircleImage className={styles.ChallengePortalCard__circleImage} />
      <DoubleLineImage
        className={styles.ChallengePortalCard__doubleLineImage}
      />
      <LongLineImage className={styles.ChallengePortalCard__longLineImage} />
      <ShortLineImage className={styles.ChallengePortalCard__shortLineImage} />
      <Box className={styles.ChallengePortalCard__header}>
        <Typography
          variant="headline1"
          className={styles.ChallengePortalCard__sectionTitle}
        >
          New Challenges
        </Typography>
      </Box>
      <Box className={styles.ChallengePortalCards__container}>
        {dataRows.map((row, index) => (
          <ChallengePortalCardRow
            key={row.rowId}
            row={row}
            entityId={entityId}
            indices={indices}
            sql={sql}
            borderRadius={borderRadius}
          />
        ))}
      </Box>
    </Box>
  )
}

export default ChallengePortalCard
