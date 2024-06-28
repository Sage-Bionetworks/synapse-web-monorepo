import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { RowSynapseConfig } from '../types/portal-util-types'
import { SynapseComponent } from '../components/SynapseComponent'

export type TabConfig = {
  label: string
  synapseObject: RowSynapseConfig
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
      {<SynapseComponent synapseConfig={selectedTabConfig.synapseObject} />}
    </Box>
  )
}
