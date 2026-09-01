import Button, { ButtonProps } from '@mui/material/Button'
import React from 'react'
import styles from './GridMenuButton.module.scss'

type GridMenuButtonProps = ButtonProps &
  Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>

export default function GridMenuButton(props: GridMenuButtonProps) {
  return <Button {...props} className={styles.button} />
}
