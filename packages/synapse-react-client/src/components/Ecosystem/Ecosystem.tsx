import { useState } from 'react'

type Config = {
  title: string
  content: React.ReactNode
}

export type EcosystemProps = {
  config: Config[]
}

const Ecosystem = (props: EcosystemProps) => {
  const [index, setIndex] = useState(0)
  const { config } = props
  return (
    <div className="Ecosystem">
      <div className="control-container">
        <div className="button-container">
          {config.map((el, curIndex) => {
            return (
              <button
                className={index === curIndex ? 'isSelected' : ''}
                onClick={() => setIndex(curIndex)}
                key={el.title}
              >
                {el.title}
              </button>
            )
          })}
          <div className={'flex-spacer'} />
        </div>
        <div className="content-container">
          {config.map((el, curIndex) => {
            return (
              <span key={el.title} className={index === curIndex ? '' : 'hide'}>
                {el.content}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Ecosystem
