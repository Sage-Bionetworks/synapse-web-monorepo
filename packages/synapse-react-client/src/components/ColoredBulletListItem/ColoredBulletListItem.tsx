import { Typography } from '@mui/material'
import styles from './ColoredBulletListItem.module.scss'

export type ColoredBulletListItemProps = {
  bulletColor: string
  mainText: string
  subText?: string
}

function ColoredBulletListItem(props: ColoredBulletListItemProps) {
  const { bulletColor, mainText, subText } = props

  return (
    <div className={styles.container}>
      <div
        className={styles.bullet}
        style={{ borderColor: bulletColor, backgroundColor: bulletColor }}
      />
      <Typography variant="headline1" className={styles.mainText}>
        {mainText}
      </Typography>
      {subText && (
        <Typography variant="body1" className={styles.subText}>
          {subText}
        </Typography>
      )}
    </div>
  )
}

export default ColoredBulletListItem
