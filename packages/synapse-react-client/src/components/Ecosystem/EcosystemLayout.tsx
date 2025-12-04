import React from 'react'
import { Box, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material'
import Fade from '@mui/material/Fade'
import { ReactNode, useState } from 'react'

type Config = {
  title: ReactNode
  content: ReactNode
}

export type EcosystemProps = {
  config: Config[]
}

/**
 * Layout for the Ecosystem component, which renders tab buttons on the left side and content on the right side.
 * @param props
 * @constructor
 */
const EcosystemLayout = (props: EcosystemProps): React.ReactNode => {
  const [index, setIndex] = useState(0)
  const { config } = props

  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('sm'))

  const tabOrientation = isMobile ? 'horizontal' : 'vertical'

  return (
    <div className="Ecosystem">
      <Box
        className="control-container"
        sx={{
          display: 'flex',
          [breakpoints.up('sm')]: { height: '450px' },
          [breakpoints.down('sm')]: { flexDirection: 'column' },
        }}
      >
        <Tabs
          className="button-container"
          value={index}
          onChange={(_, newIndex) => setIndex(newIndex)}
          orientation={tabOrientation}
          variant="scrollable"
          scrollButtons={'auto'}
          allowScrollButtonsMobile
          sx={theme => ({
            [theme.breakpoints.up('sm')]: {
              borderRight: '2px solid #dcdcdc',
            },
          })}
        >
          {config.map((el, curIndex) => {
            const { title } = el
            return <Tab label={title} key={curIndex} />
          })}
          {!isMobile && <div className="flex-spacer" />}
        </Tabs>
        <div className="content-container">
          {config.map((el, curIndex) => {
            return (
              <Fade key={curIndex} in={index === curIndex}>
                <span className={index === curIndex ? '' : 'SRC-hidden'}>
                  {el.content}
                </span>
              </Fade>
            )
          })}
        </div>
      </Box>
    </div>
  )
}

export default EcosystemLayout
