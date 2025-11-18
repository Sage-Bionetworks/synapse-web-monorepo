import { ReactNode, useState } from 'react'
import type { IconName } from 'synapse-react-client'
import Switch from 'react-switch'
import IconSvg from 'synapse-react-client/components/IconSvg'

export type ToggleSynapseObjectsProps = {
  icon1?: IconName
  synapseObject1?: ReactNode
  icon2?: IconName
  synapseObject2?: ReactNode
}

export default function ToggleSynapseObjects(props: ToggleSynapseObjectsProps) {
  const { icon1, synapseObject1, icon2, synapseObject2 } = props
  const [toggleValue, setToggleValue] = useState(false)
  const icon1Jsx = icon1 && <IconSvg icon={icon1} />
  const icon2Jsx = icon2 && <IconSvg icon={icon2} />
  return (
    <div className="ToggleSynapseObjects">
      <div className="reactSwitchContainer">
        <Switch
          checked={toggleValue}
          onChange={() => {
            setToggleValue(!toggleValue)
          }}
          uncheckedIcon={<span className="icon unselected">{icon2Jsx}</span>}
          checkedIcon={<span className="icon unselected">{icon1Jsx}</span>}
          uncheckedHandleIcon={
            <span className="icon selected">{icon1Jsx}</span>
          }
          checkedHandleIcon={<span className="icon selected">{icon2Jsx}</span>}
          offColor="#F1F3F5"
          onColor="#F1F3F5"
          width={70}
          height={33}
        />
      </div>
      {!toggleValue && synapseObject1}
      {toggleValue && synapseObject2}
    </div>
  )
}
