import { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { Stack, Typography } from '@mui/material'
import { useGetEntityTitleBarProperties } from '@/components/entity/page/title_bar/useGetEntityTitleBarProperties'
import styles from './EntitySidebar.module.scss'

type EntitySidebarProps = {
  entityId: string
  versionNumber?: number
}

export default function EntitySidebar(props: EntitySidebarProps) {
  const { entityId, versionNumber } = props

  const properties = useGetEntityTitleBarProperties(entityId, versionNumber)

  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button
        onClick={() => setOpen(prev => !prev)}
        className={styles.toggleButton}
      >
        <Typography variant="smallText1" className={styles.toggleButtonText}>
          {open ? 'Collapse' : 'Expand'} Sidebar
        </Typography>
        <KeyboardDoubleArrowRightIcon className={styles.icon} />
      </Button>
      <Drawer
        anchor="right"
        variant="persistent"
        open={open}
        className={styles.drawer}
      >
        <Box className={styles.content} role="presentation">
          <Typography variant="overline" className={styles.sidebarHeader}>
            About this file
          </Typography>
          <Divider className={styles.divider} />
          <Stack className={styles.propertiesContainer}>
            {properties.map(property => (
              <Stack key={property.key} className={styles.propertyRow}>
                <Typography className={styles.propertyTitle}>
                  {property.title}
                </Typography>
                <Typography
                  className={styles.propertyValue}
                  variant="smallText1"
                  component="div"
                >
                  {property.value}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </div>
  )
}
