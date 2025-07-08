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
const EcosystemLayout = (props: EcosystemProps) => {
  const [index, setIndex] = useState(0)
  const { config } = props
  return (
    <div className="Ecosystem">
      <div className="control-container">
        <div className="button-container">
          {config.map((el, curIndex) => {
            const { title } = el
            return (
              <button
                className={index === curIndex ? 'isSelected' : ''}
                onClick={() => setIndex(curIndex)}
                key={curIndex}
              >
                {title}
              </button>
            )
          })}
          <div className={'flex-spacer'} />
        </div>
        <div className="content-container">
          {config.map((el, curIndex) => {
            return (
              <Fade key={curIndex} in={index === curIndex}>
                <span
                  key={curIndex}
                  className={index === curIndex ? '' : 'SRC-hidden'}
                >
                  {el.content}
                </span>
              </Fade>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EcosystemLayout
