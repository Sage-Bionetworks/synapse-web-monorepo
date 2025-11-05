import BasePortalCard from '../BasePortalCard'
import { Chip, Box, Button, Stack, Typography } from '@mui/material'
import styles from './ColorfulPortalCardWithChips.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useImageUrl } from '@/utils/hooks/useImageUrlUtils'
import { Close } from '@mui/icons-material'
import { hashCode } from '@/utils/functions/StringUtils'
import { Row } from '@sage-bionetworks/synapse-types'

type ColorfulPortalCardWithChipsProps = {
  row: Row
  entityId: string | undefined
  indices: Record<string, number>
  borderRadiusPx?: number
}

export type PortalCardColumnMapping = {
  title?: string
  subtitle?: string
  description?: string
  learnMoreLink?: string
  chips?: string
  tag?: string
  backgroundImage?: string
  backgroundColor?: string
}

const colors = ['#F8CC7D', '#BFE8F4', '#CEFBDD']

const getChicletColors = (chips: string[]) => {
  let lastColorIndex = -1
  return chips.map((chip, i) => {
    const hash = hashCode(chip)
    let index = Math.abs(hash + i) % colors.length

    // prevent consecutive chips from being the same color
    if (index === lastColorIndex && colors.length > 1) {
      index = (index + 1) % colors.length
    }

    lastColorIndex = index
    return colors[index]
  })
}

const Chips = ({ values }: { values: string[] }) => {
  const chipColors = getChicletColors(values)
  return (
    <Box className={styles.ColorfulPortalCardWithChips__chipsContainer}>
      {values.map((chip, index) => (
        <Chip
          key={chip}
          label={<Typography variant="smallText1">{chip}</Typography>}
          variant="filled"
          style={{ backgroundColor: chipColors[index] }}
          icon={<Close fontSize="small" />}
          className={styles.ChallengePortalCard__chip}
        />
      ))}
    </Box>
  )
}

const ColorfulPortalCardWithChips = ({
  row,
  entityId,
  indices,
  borderRadiusPx,
}: ColorfulPortalCardWithChipsProps) => {
  const {
    title,
    subtitle,
    description,
    learnMoreLink,
    chips,
    backgroundImage,
    backgroundColor,
    tag,
  } = indices

  const backgroundImageId = row.values[backgroundImage] || ''
  const imageUrl = useImageUrl(backgroundImageId, entityId ?? '')

  const value = row.values[chips]
  let chipsArray: string[]
  try {
    const parsed = JSON.parse(value ?? '[]')
    chipsArray = Array.isArray(parsed) ? parsed.map(String) : [String(parsed)]
  } catch {
    chipsArray = value ? [String(value)] : []
  }

  return (
    <BasePortalCard
      borderRadiusPx={borderRadiusPx}
      backgroundImage={imageUrl}
      backgroundColor={row.values[backgroundColor] ?? ''}
      className={styles.ColorfulPortalCardWithChips__backgroundImage}
      contentBelowCard={chipsArray.length > 0 && <Chips values={chipsArray} />}
    >
      <Stack className={styles.ColorfulPortalCardWithChips__sectionContainer}>
        <Stack className={styles.ColorfulPortalCardWithChips__topSection}>
          {row.values[tag] && (
            <Chip
              color="secondary"
              variant="filled"
              className={styles.ColorfulPortalCardWithChips__registrationStatus}
              sx={{ backgroundColor: row.values[backgroundColor] }}
              label={row.values[tag]}
            />
          )}
          <Stack className={styles.ColorfulPortalCardWithChips__titleSection}>
            <Typography variant="headline1">{row.values[title]} </Typography>
            <Typography
              variant="headline1"
              className={styles.ColorfulPortalCardWithChips__challengeName}
            >
              {row.values[subtitle]}
            </Typography>
          </Stack>
        </Stack>
        <Stack className={styles.ColorfulPortalCardWithChips__bottomSection}>
          <Typography variant="smallText1">
            {row.values[description]}
          </Typography>
          {row.values[learnMoreLink] && (
            <Button
              className={styles.ColorfulPortalCardWithChips__learnMoreButton}
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              href={row.values[learnMoreLink]}
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

export default ColorfulPortalCardWithChips
