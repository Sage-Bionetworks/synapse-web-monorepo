import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { ReactNode, useState } from 'react'

export type TabConfig = {
  label: string
  element: ReactNode
}

export type TabbedSynapseObjectsProps = {
  tabConfigs: TabConfig[]
  centerTabs: boolean
}

export default function TabbedSynapseObjects(props: TabbedSynapseObjectsProps) {
  const { tabConfigs, centerTabs } = props
  const [selectedTabConfig, setSelectedTabConfig] = useState<TabConfig>(
    tabConfigs[0],
  )
  return (
    <Box className="TabbedSynapseObjects">
      <Tabs value={selectedTabConfig.label} centered={centerTabs}>
        {tabConfigs.map((tabConfig, index) => {
          return (
            <Tab
              key={index}
              value={tabConfig.label}
              disableRipple={true}
              label={tabConfig.label}
              disableTouchRipple
              onClick={() => setSelectedTabConfig(tabConfig)}
            />
          )
        })}
      </Tabs>
      {selectedTabConfig.element}
    </Box>
  )
}
