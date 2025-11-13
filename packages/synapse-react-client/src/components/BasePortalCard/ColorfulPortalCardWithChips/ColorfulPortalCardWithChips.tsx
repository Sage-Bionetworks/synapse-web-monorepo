import BasePortalCard from '../BasePortalCard'
import { Chip, Box, Button, Stack, Typography } from '@mui/material'
import styles from './ColorfulPortalCardWithChips.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useImageUrl } from '@/utils/hooks/useImageUrlUtils'
import { hashCode } from '@/utils/functions/StringUtils'

type ColorfulPortalCardWithChipsProps = {
  title?: string
  subtitle?: string
  description?: string
  descriptionTitle?: string
  learnMoreLink?: string
  buttonOverrideText?: string
  chips?: string[]
  backgroundImage?: string
  backgroundColor?: string
  tag?: string
  entityId?: string
  borderRadiusPx?: number
  cardSize?: 'small' | 'medium' | 'large'
}

const colors = ['#F8CC7D', '#BFE8F4', '#CEFBDD']

const getChicletColors = (chips: string[]) => {
  return chips.map(chip => {
    const hash = hashCode(chip)
    const index = Math.abs(hash) % colors.length
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
          className={styles.ChallengePortalCard__chip}
        />
      ))}
    </Box>
  )
}

const ColorfulPortalCardWithChips = ({
  title,
  subtitle,
  description,
  descriptionTitle,
  learnMoreLink,
  buttonOverrideText,
  chips,
  backgroundImage,
  backgroundColor,
  tag,
  entityId,
  borderRadiusPx,
  cardSize = 'medium',
}: ColorfulPortalCardWithChipsProps) => {
  const imageUrl = useImageUrl(backgroundImage ?? '', entityId ?? '')
  const backgroundImageValue = imageUrl ?? backgroundImage

  return (
    <BasePortalCard
      cardSize={cardSize}
      borderRadiusPx={borderRadiusPx}
      backgroundImage={backgroundImageValue}
      backgroundColor={backgroundColor ?? ''}
      contentBelowCard={chips && chips.length > 0 && <Chips values={chips} />}
    >
      <Stack className={styles.ColorfulPortalCardWithChips__sectionContainer}>
        <Stack>
          {tag && (
            <Chip
              color="secondary"
              variant="filled"
              className={styles.ColorfulPortalCardWithChips__registrationStatus}
              sx={{ backgroundColor }}
              label={tag}
            />
          )}
          <Stack className={styles.ColorfulPortalCardWithChips__titleSection}>
            <Typography variant="headline1">{title} </Typography>
            <Typography
              variant="headline1"
              className={styles.ColorfulPortalCardWithChips__challengeName}
            >
              {subtitle}
            </Typography>
          </Stack>
        </Stack>
        <Stack className={styles.ColorfulPortalCardWithChips__bottomSection}>
          {descriptionTitle && (
            <Typography
              variant="headline1"
              className={styles.ColorfulPortalCardWithChips__descriptionTitle}
            >
              {descriptionTitle}
            </Typography>
          )}
          <Typography
            variant="smallText1"
            className={styles.ColorfulPortalCardWithChips__description}
          >
            {description}
          </Typography>
          {learnMoreLink && (
            <Button
              className={styles.ColorfulPortalCardWithChips__learnMoreButton}
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              href={learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonOverrideText ?? 'Learn more'}
            </Button>
          )}
        </Stack>
      </Stack>
    </BasePortalCard>
  )
}

export default ColorfulPortalCardWithChips
