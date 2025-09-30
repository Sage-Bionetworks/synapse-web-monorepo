import Button, { ButtonProps } from '@mui/material/Button'
import styles from './GridMenuButton.module.scss'

export default function GridMenuButton(props: ButtonProps) {
  return <Button {...props} className={styles.button} />
}
